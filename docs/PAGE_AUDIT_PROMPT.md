# Page Audit Prompt — mathsedu.org v2.0 Standard

## What this is

A self-contained audit prompt you can paste into a Claude Code session to verify that any mathsedu.org page meets the v2.0 design and pedagogical standard. It checks 22 items across six categories and returns a structured pass/fail report.

## How to use

1. Copy the entire prompt block below (everything inside the fenced code block).
2. Replace every instance of `[FILENAME]` with the actual filename you want to audit (e.g. `golden_ratio.html`).
3. Paste the resulting prompt into a Claude Code session.
4. The audit will read the file and return a structured report with pass/fail for each item and prioritised recommended actions.

---

## Audit prompt

````text
Read the file [FILENAME] in this repository and perform a 22-point audit against the mathsedu.org v2.0 standard. For each item, report PASS or FAIL with a brief justification. At the end, produce a summary and prioritised action list.

Check every item below. Do not skip any.

────────────────────────────────────────
A. STRUCTURE & NAVIGATION (6 items)
────────────────────────────────────────

A1. BACK LINK — A link back to index.html is present near the top of the page (typically in the header or immediately below it).

A2. TITLE TAG — The <title> tag contains a clear, specific title (not generic boilerplate like "Introduction to X" or "Mathematics Page").

A3. H1 PRESENT — An <h1> element is present with a compelling, descriptive title for the page topic.

A4. SUBTITLE — A subtitle or introductory sentence is present immediately below the <h1>, setting context for the reader.

A5. DIFFICULTY BADGE — A difficulty badge using filled/empty dots (e.g. "●●●○○") is visible in the page header area.

A6. STANDARD FOOTER — The page ends with the standard site footer containing: copyright notice, Claude credit line, and CC BY-NC-SA 4.0 licence reference.

────────────────────────────────────────
B. VISUAL & INTERACTIVE QUALITY (5 items)
────────────────────────────────────────

B1. CANVAS PRESENT — At least one HTML5 <canvas> interactive element is present and would be visible on page load (not hidden behind a tab or collapsed section).

B2. CONTROL LABELS — All interactive controls (sliders, buttons, dropdowns) have clear, visible text labels explaining what they do.

B3. VISUAL FEEDBACK — Interactive elements provide immediate visual feedback when the user changes them (e.g. moving a slider redraws the canvas in real time).

B4. RESPONSIVE LAYOUT — The layout is responsive with no horizontal scrolling on a 375px-wide viewport. Check for fixed pixel widths on containers, canvases, or content sections that would overflow.

B5. SELF-CONTAINED — No external CSS or JS files are loaded (no CDN links, no separate .css or .js file references). Everything must be inline within the single HTML file. Exception: Google Fonts links are permitted.

────────────────────────────────────────
C. PEDAGOGICAL STRUCTURE (6 items)
────────────────────────────────────────

C1. VISUAL BEFORE FORMULA — The core concept is introduced visually or intuitively before any formal mathematical notation or formulas appear.

C2. INSIGHT BOX — At least one insight box (typically using class .insight or .learn-box with a "why-it-matters" variant) is present, answering "Why does this matter?" or equivalent.

C3. TRY THIS PROMPT — A "Try This" challenge or equivalent exploratory prompt is present, inviting the reader to experiment with the interactive elements.

C4. PROGRESSIVE HINTS — The "Try This" prompt includes at least one hint that is collapsed by default and revealed on click (e.g. a <details>/<summary> element or a JS-powered reveal).

C5. MULTIPLE REPRESENTATIONS — Where the topic warrants it, at least two representations of the concept are present: one graphical plus at least one of algebraic, numerical, or verbal. (Mark PASS if the topic genuinely only supports one representation and note why.)

C6. NO PERFORMANCE METRICS — The page contains no timed elements, countdown timers, scores, grades, or performance metrics of any kind. The tone is exploratory, never evaluative.

────────────────────────────────────────
D. REAL-WORLD CONNECTION (2 items)
────────────────────────────────────────

D1. WHERE YOU'LL SEE THIS BOX — A "Where You'll See This" box (or equivalent real-world connection section) is present. This is required on pure mathematics pages. It is optional (but encouraged) on inherently applied pages in Chapters 11 (Finance), 12 (Internet & AI), and 13 (Physics & Engineering).

D2. SPECIFIC CONNECTION — Where the real-world connection box is present, the connection described is specific and concrete (e.g. "GPS satellites use this to correct timing drift"), not vague (e.g. "used in many fields").

────────────────────────────────────────
E. NAVIGATION & DISCOVERY (2 items)
────────────────────────────────────────

E1. EXPLORE NEXT — An "Explore Next" section is present before the footer, containing at least 2 links to related topic pages on the site.

E2. CROSS-LINK IN BODY — At least one in-body cross-link to another page on the site appears within the main content (not counting the Explore Next section or back link).

────────────────────────────────────────
F. CODE QUALITY (4 items) — v2.0 ADDITIONS
────────────────────────────────────────

F1. NO JS ERRORS — Review the JavaScript for obvious errors: unclosed functions, undefined variables at point of use, mismatched brackets, or patterns that would throw exceptions. Report any found.

F2. STANDARD PALETTE — CSS uses the standard site colour palette. Check for:
  - Background: #0a0a1a (or very close)
  - Body text: #e0e0e0
  - Panel backgrounds: rgba(255,255,255,0.025) or similar low-opacity white
  - Borders: rgba(255,255,255,0.06) or similar low-opacity white
  Flag any bright white backgrounds, black text on dark backgrounds, or colours that clearly clash with the dark theme.

F3. BANNED WORDS — The visible text on the page (not code comments or attribute values) must not contain any of these banned brand-voice words: "Memorise", "Drill", "Test", "Exam", "Grade", "Score", "Quiz". Check case-insensitively. Acceptable uses: "test" as a mathematical/scientific term (e.g. "hypothesis test") is permitted; "score" as a music term is permitted.

F4. MATHS NOTATION — Mathematical notation is rendered clearly. Superscripts use <sup> tags (not caret notation like x^2). Fractions are presented readably (not as x/y inline where a proper fraction would be clearer). Greek letters use proper Unicode or HTML entities.

────────────────────────────────────────
OUTPUT FORMAT
────────────────────────────────────────

Present the results in exactly this format:

```
PAGE AUDIT REPORT
─────────────────
File: [FILENAME]
Date: [today's date]

PASS  A1  Back link present at top of page
FAIL  A5  Difficulty badge missing — add .difficulty-badge after <h1>
...
(list all 22 items)

─────────────────
SUMMARY
Passed:  N / 22
Failed:  M
Failed items: [comma-separated list of codes, e.g. A5, C4, E1]

RECOMMENDED ACTIONS (ordered by priority):
1. [Most critical fix — specific instruction with class names or element references]
2. [Next most critical]
...
─────────────────
```

Priority order for recommended actions:
- Structural issues (missing footer, missing back link) first
- Pedagogical gaps (missing Try This, missing hints) second
- Visual/interactive issues third
- Code quality issues last

Be specific in each recommendation: name the CSS class to add, the section to create, or the element to modify. Do not give vague advice.
````
