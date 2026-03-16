---
name: enhance-page
description: Add Tier 1 enhancements (difficulty badge, WYSTI, Try This, Explore Next) to an existing mathsedu.org page. Use when enhancing one or more existing pages with standardised pedagogical components.
argument-hint: "[filename.html]" or "batch [chapter-number]"
---

# Enhance Existing Page — mathsedu.org

Add Tier 1 enhancement components to one or more existing visualisation pages.

## Overview

Tier 1 enhancements add four pedagogical components to every page:
1. **Difficulty Badge** — visual dot indicator (1–4)
2. **Where You'll See This (WYSTI)** — real-world applications panel
3. **Try This** — interactive challenge with progressive hint
4. **Explore Next** — footer strip linking to related topics

**Exception:** Chapters 11, 12, and 13 are inherently applied — they get only 3 enhancements (no WYSTI).

## Workflow

1. **Read the target page** — understand its chapter, difficulty, content, and DOM structure
2. **Identify the insertion point** — enhancements go INSIDE the `.container` div, after all existing content, before the closing `</div>`
3. **Apply enhancements** — use the EXACT templates from [templates.md](templates.md)
4. **Verify** — run the `validate-site` skill on the modified file(s)
5. **Never modify `<style>` blocks** — enhancements use inline styles only

## Critical Rules

These rules exist because previous bulk modifications caused defects. They are non-negotiable.

### Insertion Point

```
<div class="container">
    ... existing page content ...

    <!-- ═══ TIER 1 ENHANCEMENTS ═══ -->
    [difficulty badge]
    [WYSTI panel — if applicable]
    [Try This]
    [Explore Next]

</div>  <!-- end container -->

<footer>...</footer>
```

- **MUST** be inside the `.container` div
- **MUST** be before the closing `</div>` that precedes `<footer>`
- **NEVER** insert between `</div>` (container close) and `<footer>`
- If the container closing tag is ambiguous, search for the `<footer>` and insert BEFORE the `</div>` immediately preceding it

### Template Compliance

- **ONLY** use the exact HTML from [templates.md](templates.md)
- **NEVER** use `<h2>` — always `<h3>` for enhancement headings
- **NEVER** use `<details>/<summary>` — always `button/onclick` for hints
- **NEVER** use `max-width:880px` on inner elements
- **NEVER** add `font-weight:bold` to Try This headings
- **NEVER** use `border-top` on Explore Next cards — always `border-left`
- **NEVER** use `<span>` wrappers for Explore Next cards — always `<a>` tags
- **NEVER** add tinted backgrounds to enhancement containers

### CSS Safety

- **NEVER** modify anything inside `<style>` blocks
- **NEVER** use global string replacement on CSS properties
- If a fix script is needed, it must operate ONLY on HTML content outside `<style>` and `<script>` blocks
- All enhancement styling is inline — no new CSS classes

### Bulk Modification Rules

When enhancing multiple pages:
- Process one page at a time, using the SAME template for every page
- After completing all pages, run `validate-site` skill
- Fix any BLOCK issues before declaring complete
- Never use `replace_all` across file boundaries

## Chapter Configuration

See [chapter-config.md](../create-visualisation/chapter-config.md) for accent colours and RGB values.

| Chapter | Accent | WYSTI? |
|---------|--------|--------|
| 1–10 | Per chapter config | Yes |
| 11 | `#10b981` | **No** — inherently applied |
| 12 | `#14b8a6` | **No** — inherently applied |
| 13 | `#38bdf8` | **No** — inherently applied |

## Difficulty Mapping

| Dots | Label | Typical content |
|------|-------|-----------------|
| 1 | Beginner | Foundational concepts, single interactive |
| 2 | Intermediate | Multiple interactives, some algebra |
| 3 | Advanced | Multi-step reasoning, university level |
| 4 | Expert | Research-adjacent, deep theory |
