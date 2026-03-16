---
name: validate-site
description: Run automated validation checks across mathsedu.org pages. Use after any bulk modification, enhancement, or before declaring work complete. Catches structural, template, CSS, and link integrity issues.
argument-hint: "[filename.html]" or "all" or "enhanced"
---

# Validate Site — mathsedu.org

Automated post-modification validation for quality assurance.

## When to Use

- **After any bulk modification** (enhancements, style changes, content updates)
- **After any fix script** has been applied
- **Before declaring any batch of work complete**
- **On demand** when asked to verify page quality

## Usage Modes

| Argument | Scope |
|----------|-------|
| `filename.html` | Validate a single file |
| `all` | Validate every HTML file in the repository |
| `enhanced` | Validate only files with Tier 1 enhancements |
| `batch N` | Validate all files in chapter N |

## Validation Checks

Run ALL checks below. Report results as **PASS**, **WARN**, or **BLOCK**.

### 1. Structural Integrity (BLOCK if failed)

For each enhanced page:

```
CHECK 1.1: Enhancement sections are INSIDE .container div
  - Find the <footer> tag
  - Find the </div> immediately before <footer>
  - Verify that "Tier 1 Enhancements" comment OR difficulty badge OR "Try This" heading appears BEFORE that </div>
  - BLOCK if enhancements appear BETWEEN </div> and <footer>

CHECK 1.2: No double wrapper nesting
  - Search for max-width:960px.*max-width:900px pattern
  - Search for max-width:960px.*max-width:880px pattern
  - BLOCK if nested wrappers found

CHECK 1.3: Enhancement order is correct
  - Order must be: difficulty badge → WYSTI (if applicable) → Try This → Explore Next
  - BLOCK if out of order
```

### 2. Template Compliance (BLOCK if failed)

```
CHECK 2.1: Try This uses <h3>, not <h2>
  - Search for: <h2.*>Try This</h2>
  - BLOCK if found

CHECK 2.2: Hints use button/onclick, not details/summary
  - Search for: <details> or <summary> near "hint" text
  - BLOCK if found

CHECK 2.3: Explore Next cards use border-left, not border-top
  - In Explore Next sections, check card styling
  - Search for: border-top:2px solid within Explore Next context
  - BLOCK if found

CHECK 2.4: Explore Next cards are <a> tags, not <span> or <div>
  - In Explore Next sections, verify cards are anchor elements
  - BLOCK if <span> or <div> used as card wrappers

CHECK 2.5: No max-width:880px on enhancement elements
  - Search for: max-width:880px in enhancement sections
  - BLOCK if found

CHECK 2.6: WYSTI panel absent for Chapters 11, 12, 13
  - If page belongs to Ch11/12/13, verify no WYSTI panel
  - WARN if WYSTI present on applied chapter page

CHECK 2.7: Try This <h3> does not have font-weight:bold
  - Search for: font-weight:bold in Try This heading
  - BLOCK if found
```

### 3. CSS Safety (BLOCK if failed)

```
CHECK 3.1: <style> block integrity
  - Extract content between <style> and </style>
  - Verify .explain-text has font-size:0.9em (not 0.92em)
  - Verify no enhancement-related styles leaked into <style> block
  - BLOCK if style block was accidentally modified

CHECK 3.2: No new CSS classes added
  - Enhancement sections must use only inline styles
  - Search for class= attributes in enhancement HTML (except class="panel")
  - WARN if unexpected classes found
```

### 4. Link Integrity (BLOCK if failed)

```
CHECK 4.1: All Explore Next hrefs point to existing files
  - Extract all href values from Explore Next cards
  - Verify each .html file exists in the repository
  - BLOCK if any link points to a non-existent file

CHECK 4.2: No self-referential links
  - Verify no Explore Next card links to the current page
  - WARN if found
```

### 5. Cross-Page Consistency (WARN if failed)

```
CHECK 5.1: Template uniformity
  - Sample 10 random enhanced pages
  - Verify identical HTML structure for each enhancement type
  - WARN if structural variations detected

CHECK 5.2: Accent colour correctness
  - Verify difficulty badge uses the correct chapter accent
  - Verify Try This heading uses the correct chapter accent
  - WARN if accent mismatch detected
```

### 6. Canvas Health (WARN if failed)

```
CHECK 6.1: Every <canvas> has a corresponding draw function
  - Extract all canvas IDs
  - Verify each ID is referenced in a getContext or draw function
  - WARN if orphaned canvas found

CHECK 6.2: No canvas elements with zero dimensions
  - Check for width="0" or height="0"
  - BLOCK if found
```

## Implementation

Run these checks using Grep, Read, and Bash tools. The validation script should:

1. Collect all target files based on the usage mode
2. Run each check against each file
3. Accumulate results
4. Output a summary table:

```
╔══════════════════════════════════════════════════════╗
║              VALIDATION REPORT                       ║
║  Date: YYYY-MM-DD                                    ║
║  Scope: [all / enhanced / filename]                  ║
║  Files checked: N                                    ║
╠══════════════════════════════════════════════════════╣
║  PASS:  N checks passed                             ║
║  WARN:  N warnings                                  ║
║  BLOCK: N blockers                                  ║
╠══════════════════════════════════════════════════════╣
║  BLOCKERS (must fix):                                ║
║  - filename.html: CHECK 2.1 — h2 used for Try This  ║
║  WARNINGS:                                           ║
║  - filename.html: CHECK 5.2 — accent mismatch       ║
╚══════════════════════════════════════════════════════╝
```

5. Return **PASS** only if zero BLOCKs. Work is not complete until PASS.

## Automated Validation Script

For efficiency on large batches, generate and run a Python validation script rather than checking files one by one. The script should:

- Accept a file list or glob pattern
- Run all checks programmatically
- Output structured results
- Exit with non-zero status if any BLOCKs found

See [validate.py](validate.py) for the reference implementation.
