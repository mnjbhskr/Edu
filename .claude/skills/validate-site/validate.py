#!/usr/bin/env python3
"""
mathsedu.org — Site Validation Script
Run after any bulk modification to catch structural, template, CSS, and link issues.

Usage:
    python3 validate.py                          # validate all enhanced pages
    python3 validate.py file1.html file2.html    # validate specific files
    python3 validate.py --all                    # validate every HTML file
    python3 validate.py --chapter 7              # validate chapter 7 pages
"""

import os
import re
import sys
import glob
from dataclasses import dataclass, field
from typing import List, Tuple

# ─── Configuration ───────────────────────────────────────────────────────────

REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
# Walk up to repo root (this script lives in .claude/skills/validate-site/)
while not os.path.exists(os.path.join(REPO_ROOT, 'index.html')) and REPO_ROOT != '/':
    REPO_ROOT = os.path.dirname(REPO_ROOT)

CHAPTER_ACCENTS = {
    1: '#c084fc', 2: '#fbbf24', 3: '#f87171', 4: '#60a5fa',
    5: '#34d399', 6: '#fb923c', 7: '#22d3ee', 8: '#f472b6',
    9: '#818cf8', 10: '#fcd34d', 11: '#10b981', 12: '#14b8a6',
    13: '#38bdf8',
}

APPLIED_CHAPTERS = {11, 12, 13}  # No WYSTI for these

# Files to skip (not topic pages)
SKIP_FILES = {
    'index.html', 'feedback.html', 'concept_map.html', 'mathematicians.html',
    'mathematics_map.html', 'physics_map.html', 'sitemap.xml',
}

SKIP_PREFIXES = ('topic-', 'level-', 'prime_journey_')


# ─── Data Structures ────────────────────────────────────────────────────────

@dataclass
class Issue:
    file: str
    check: str
    severity: str  # BLOCK or WARN
    message: str


@dataclass
class ValidationResult:
    files_checked: int = 0
    passes: int = 0
    issues: List[Issue] = field(default_factory=list)

    @property
    def blocks(self):
        return [i for i in self.issues if i.severity == 'BLOCK']

    @property
    def warns(self):
        return [i for i in self.issues if i.severity == 'WARN']

    @property
    def verdict(self):
        return 'PASS' if len(self.blocks) == 0 else 'FAIL'


# ─── Helpers ─────────────────────────────────────────────────────────────────

def read_file(path: str) -> str:
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        return f.read()


def is_enhanced(content: str) -> bool:
    """Check if a page has Tier 1 enhancements."""
    return ('Try This' in content and
            ('Explore Next' in content or 'Difficulty' in content))


def extract_style_block(content: str) -> str:
    """Extract content between <style> and </style>."""
    m = re.search(r'<style[^>]*>(.*?)</style>', content, re.DOTALL)
    return m.group(1) if m else ''


def extract_after_style(content: str) -> str:
    """Get content after the </style> tag (HTML body area)."""
    idx = content.find('</style>')
    return content[idx:] if idx >= 0 else content


def get_all_html_files() -> List[str]:
    """Get all topic HTML files in repo root."""
    files = []
    for f in glob.glob(os.path.join(REPO_ROOT, '*.html')):
        basename = os.path.basename(f)
        if basename in SKIP_FILES:
            continue
        if any(basename.startswith(p) for p in SKIP_PREFIXES):
            continue
        files.append(f)
    return sorted(files)


# ─── Checks ──────────────────────────────────────────────────────────────────

def check_structural_integrity(path: str, content: str, result: ValidationResult):
    """Check 1.x: Structural integrity."""
    basename = os.path.basename(path)
    body_content = extract_after_style(content)

    # CHECK 1.1: Enhancements inside container
    # Find the footer position
    footer_pos = body_content.rfind('<footer')
    if footer_pos < 0:
        result.issues.append(Issue(basename, '1.0', 'WARN', 'No <footer> found'))
        return

    # Find the </div> before footer
    pre_footer = body_content[:footer_pos]
    last_div_close = pre_footer.rfind('</div>')

    if last_div_close >= 0:
        # Check if enhancements appear AFTER the last </div> but BEFORE footer
        between = body_content[last_div_close:footer_pos]
        if 'Try This' in between or 'Explore Next' in between or 'Difficulty' in between:
            # Enhancements are between container close and footer — might be wrapped
            if 'max-width:960px' in between:
                pass  # Wrapped in a 960px div — acceptable
            elif 'max-width: 960px' in between:
                pass  # Wrapped with spaces
            else:
                result.issues.append(Issue(basename, '1.1', 'BLOCK',
                    'Enhancement sections outside .container div and not wrapped in 960px div'))

    # CHECK 1.2: No double wrapper nesting
    if re.search(r'max-width:\s*960px.*?max-width:\s*900px', body_content, re.DOTALL):
        result.issues.append(Issue(basename, '1.2', 'BLOCK', 'Double wrapper: 960px nesting 900px'))
    if re.search(r'max-width:\s*960px.*?max-width:\s*880px', body_content, re.DOTALL):
        result.issues.append(Issue(basename, '1.2', 'BLOCK', 'Double wrapper: 960px nesting 880px'))


def check_template_compliance(path: str, content: str, result: ValidationResult):
    """Check 2.x: Template compliance."""
    basename = os.path.basename(path)
    body_content = extract_after_style(content)

    # CHECK 2.1: Try This uses <h3>, not <h2>
    # Must match on a single line to avoid false positives from section <h2> tags
    if re.search(r'<h2[^>]*>[^<]*Try This[^<]*</h2>', body_content, re.IGNORECASE):
        result.issues.append(Issue(basename, '2.1', 'BLOCK', '<h2> used for Try This heading'))

    # CHECK 2.2: Hints use button/onclick, not details/summary
    if '<details>' in body_content or '<summary>' in body_content:
        # Check if it's near hint-related content
        if re.search(r'<(details|summary)[^>]*>.*?(hint|Hint)', body_content, re.DOTALL):
            result.issues.append(Issue(basename, '2.2', 'BLOCK',
                '<details>/<summary> used for hints instead of button/onclick'))

    # CHECK 2.3: Explore Next cards use border-left, not border-top
    explore_match = re.search(r'Explore Next.*?</div>\s*</div>', body_content, re.DOTALL)
    if explore_match:
        explore_section = explore_match.group(0)
        if 'border-top:2px solid' in explore_section or 'border-top: 2px solid' in explore_section:
            result.issues.append(Issue(basename, '2.3', 'BLOCK',
                'Explore Next cards use border-top instead of border-left'))

    # CHECK 2.4: Explore Next cards are <a> tags
    if explore_match:
        explore_section = explore_match.group(0)
        # Look for span or div wrappers with card-like styling where <a> should be
        if re.search(r'<span[^>]*style="[^"]*flex:1[^"]*min-width', explore_section):
            result.issues.append(Issue(basename, '2.4', 'BLOCK',
                'Explore Next cards use <span> instead of <a> tags'))
        if re.search(r'<div[^>]*style="[^"]*flex:1[^"]*min-width', explore_section):
            result.issues.append(Issue(basename, '2.4', 'BLOCK',
                'Explore Next cards use <div> instead of <a> tags'))

    # CHECK 2.5: No max-width:880px on enhancement elements
    # Find enhancement section (from "Tier 1" comment or difficulty badge to end)
    enhance_start = body_content.find('Tier 1 Enhancement')
    if enhance_start < 0:
        enhance_start = body_content.find('Difficulty')
    if enhance_start >= 0:
        enhance_section = body_content[enhance_start:]
        if 'max-width:880px' in enhance_section or 'max-width: 880px' in enhance_section:
            result.issues.append(Issue(basename, '2.5', 'BLOCK',
                'max-width:880px found in enhancement section'))

    # CHECK 2.7: Try This <h3> should not have font-weight:bold
    if re.search(r'<h3[^>]*font-weight:\s*bold[^>]*>.*?Try This', body_content, re.DOTALL):
        result.issues.append(Issue(basename, '2.7', 'BLOCK',
            'Try This heading has font-weight:bold'))

    # CHECK 2.8: WYSTI uses correct heading text and <h3> tag
    # Check for non-standard WYSTI headings — only in heading tags or styled divs, not body text
    wysti_bad_patterns = [
        (r'<(?:div|h[1-6]|span)[^>]*>[^<]*Why You Should Try It[^<]*</', 'Why You Should Try It'),
        (r'<(?:div|h[1-6]|span)[^>]*>[^<]*Why You.ll See This[^<]*</', "Why You'll See This"),
    ]
    for pattern, label in wysti_bad_patterns:
        if re.search(pattern, body_content, re.IGNORECASE):
            result.issues.append(Issue(basename, '2.8', 'BLOCK',
                f'Non-standard WYSTI heading text: "{label}" — should be "Where You\'ll See This"'))
            break

    # CHECK 2.9: WYSTI heading uses <h3>, not <div> or other tags
    if "Where You'll See This" in body_content or 'Where You&#039;ll See This' in body_content:
        pass  # Standard — good
    elif re.search(r'<div[^>]*>[^<]*(?:Why You|Where You)', body_content):
        result.issues.append(Issue(basename, '2.9', 'BLOCK',
            'WYSTI heading uses <div> instead of <h3>'))

    # CHECK 2.10: Enhancement sections not floating outside container
    # Look for enhancement content between </script> and the 960px wrapper or container
    script_end = body_content.rfind('</script>')
    if script_end >= 0:
        footer_pos = body_content.find('<footer', script_end)
        if footer_pos >= 0:
            between = body_content[script_end:footer_pos]
            # Check if WYSTI/Try This appears before any container wrapper
            first_wrapper = between.find('max-width:960px')
            first_container = between.find('class="container"')
            first_enhancement = -1
            for marker in ['Where You', 'Why You', 'Try This', 'WYSTI', 'border-left:3px solid #22d3ee']:
                pos = between.find(marker)
                if pos >= 0 and (first_enhancement < 0 or pos < first_enhancement):
                    first_enhancement = pos
            if first_enhancement >= 0:
                if first_wrapper >= 0 and first_enhancement < first_wrapper:
                    result.issues.append(Issue(basename, '2.10', 'BLOCK',
                        'Enhancement section appears before container wrapper — content will be full-width/unaligned'))
                elif first_wrapper < 0 and first_container < 0:
                    result.issues.append(Issue(basename, '2.10', 'BLOCK',
                        'Enhancement section outside any container — content will be full-width/unaligned'))


def check_css_safety(path: str, content: str, result: ValidationResult):
    """Check 3.x: CSS safety."""
    basename = os.path.basename(path)
    style_block = extract_style_block(content)

    if not style_block:
        return

    # CHECK 3.1: .explain-text integrity
    explain_match = re.search(r'\.explain-text\s*\{([^}]*)\}', style_block)
    if explain_match:
        explain_css = explain_match.group(1)
        if 'font-size:0.92em' in explain_css or 'font-size: 0.92em' in explain_css:
            result.issues.append(Issue(basename, '3.1', 'BLOCK',
                '.explain-text has font-size:0.92em (should be 0.9em) — accidental CSS mutation'))


def check_link_integrity(path: str, content: str, result: ValidationResult):
    """Check 4.x: Link integrity."""
    basename = os.path.basename(path)
    body_content = extract_after_style(content)

    # Find Explore Next section
    explore_match = re.search(r'Explore Next.*?</div>\s*</div>', body_content, re.DOTALL)
    if not explore_match:
        return

    explore_section = explore_match.group(0)

    # CHECK 4.1: All hrefs point to existing files
    hrefs = re.findall(r'href="([^"]+\.html)"', explore_section)
    for href in hrefs:
        target_path = os.path.join(REPO_ROOT, href)
        if not os.path.exists(target_path):
            result.issues.append(Issue(basename, '4.1', 'BLOCK',
                f'Explore Next links to non-existent file: {href}'))

    # CHECK 4.2: No self-referential links
    for href in hrefs:
        if href == basename:
            result.issues.append(Issue(basename, '4.2', 'WARN',
                f'Explore Next links to itself'))


def check_canvas_health(path: str, content: str, result: ValidationResult):
    """Check 6.x: Canvas health."""
    basename = os.path.basename(path)

    # Find all canvas IDs
    canvas_ids = re.findall(r'<canvas[^>]*id="([^"]*)"', content)
    if not canvas_ids:
        return

    # Collect ALL script blocks (some pages have multiple)
    script_blocks = re.findall(r'<script[^>]*>(.*?)</script>', content, re.DOTALL)
    script_content = '\n'.join(script_blocks)

    for cid in canvas_ids:
        # CHECK 6.1: Canvas referenced in script
        # Check both direct ID reference and getElementById patterns
        id_found = (cid in script_content or
                    f"'{cid}'" in script_content or
                    f'"{cid}"' in script_content)
        if not id_found:
            result.issues.append(Issue(basename, '6.1', 'WARN',
                f'Canvas #{cid} not referenced in any <script> block'))

    # CHECK 6.2: Zero dimensions
    if re.search(r'<canvas[^>]*width="0"', content) or re.search(r'<canvas[^>]*height="0"', content):
        result.issues.append(Issue(basename, '6.2', 'BLOCK',
            'Canvas with zero dimensions found'))


# ─── Main ────────────────────────────────────────────────────────────────────

def validate_file(path: str, result: ValidationResult):
    """Run all checks on a single file."""
    content = read_file(path)
    if not is_enhanced(content):
        return  # Skip non-enhanced files

    result.files_checked += 1

    check_structural_integrity(path, content, result)
    check_template_compliance(path, content, result)
    check_css_safety(path, content, result)
    check_link_integrity(path, content, result)
    check_canvas_health(path, content, result)

    # Count as pass if no issues for this file
    basename = os.path.basename(path)
    file_issues = [i for i in result.issues if i.file == basename]
    if not file_issues:
        result.passes += 1


def print_report(result: ValidationResult, scope: str):
    """Print formatted validation report."""
    from datetime import date

    print()
    print('╔' + '═' * 58 + '╗')
    print('║' + '  VALIDATION REPORT'.ljust(58) + '║')
    print('║' + f'  Date: {date.today()}'.ljust(58) + '║')
    print('║' + f'  Scope: {scope}'.ljust(58) + '║')
    print('║' + f'  Files checked: {result.files_checked}'.ljust(58) + '║')
    print('╠' + '═' * 58 + '╣')
    print('║' + f'  PASS:  {result.passes} files clean'.ljust(58) + '║')
    print('║' + f'  WARN:  {len(result.warns)} warnings'.ljust(58) + '║')
    print('║' + f'  BLOCK: {len(result.blocks)} blockers'.ljust(58) + '║')
    print('║' + f'  Verdict: {result.verdict}'.ljust(58) + '║')
    print('╠' + '═' * 58 + '╣')

    if result.blocks:
        print('║' + '  BLOCKERS (must fix):'.ljust(58) + '║')
        for issue in result.blocks:
            line = f'  - {issue.file}: [{issue.check}] {issue.message}'
            # Wrap long lines
            while len(line) > 56:
                print('║' + line[:56].ljust(58) + '║')
                line = '    ' + line[56:]
            print('║' + line.ljust(58) + '║')

    if result.warns:
        print('║' + '  WARNINGS:'.ljust(58) + '║')
        for issue in result.warns:
            line = f'  - {issue.file}: [{issue.check}] {issue.message}'
            while len(line) > 56:
                print('║' + line[:56].ljust(58) + '║')
                line = '    ' + line[56:]
            print('║' + line.ljust(58) + '║')

    if not result.issues:
        print('║' + '  All checks passed!'.ljust(58) + '║')

    print('╚' + '═' * 58 + '╝')
    print()


def main():
    args = sys.argv[1:]
    result = ValidationResult()

    if not args or args == ['--enhanced']:
        # Default: validate all enhanced pages
        scope = 'enhanced pages'
        files = get_all_html_files()
    elif args == ['--all']:
        scope = 'all HTML files'
        files = get_all_html_files()
    elif args[0] == '--chapter':
        chapter = int(args[1])
        scope = f'chapter {chapter}'
        files = get_all_html_files()  # Filter by chapter would need index.html parsing
    else:
        scope = ', '.join(args)
        files = [os.path.join(REPO_ROOT, f) if not os.path.isabs(f) else f for f in args]

    for f in files:
        if os.path.exists(f):
            validate_file(f, result)

    print_report(result, scope)
    sys.exit(0 if result.verdict == 'PASS' else 1)


if __name__ == '__main__':
    main()
