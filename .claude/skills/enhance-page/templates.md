# Enhancement Templates — Single Source of Truth

These are the EXACT HTML snippets to use. Do not modify the structure, tag names, or inline styles. Only replace `[PLACEHOLDER]` values.

## Separator Comment

Insert this before the first enhancement:

```html
<!-- ═══════════════════════════════════════════════════════════
     Tier 1 Enhancements
     ═══════════════════════════════════════════════════════════ -->
```

## 1. Difficulty Badge

Insert immediately after the separator comment.

```html
<div style="margin:32px 0 18px;display:flex;align-items:center;gap:10px;">
    <span style="color:#808098;font-size:0.82em;text-transform:uppercase;letter-spacing:1px;">Difficulty</span>
    <span style="color:[ACCENT];font-size:0.95em;letter-spacing:2px;">[DOTS]</span>
</div>
```

**[DOTS] values:**
- Difficulty 1: `●○○○`
- Difficulty 2: `●●○○`
- Difficulty 3: `●●●○`
- Difficulty 4: `●●●●`

**[ACCENT]:** Use the chapter accent colour from chapter-config.md.

## 2. WYSTI Panel (Where You'll See This)

**Skip this for Chapters 11, 12, and 13.**

```html
<div class="panel" style="border-left:3px solid #22d3ee;margin-bottom:24px;">
    <h3 style="color:#22d3ee;font-size:0.85em;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Where You'll See This</h3>
    <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0;">[WYSTI_CONTENT]</p>
</div>
```

**Rules:**
- WYSTI always uses `#22d3ee` (cyan) regardless of chapter accent
- Content should describe 2–3 real-world applications
- Keep to 2–3 sentences maximum

## 3. Try This

```html
<div style="background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:18px 22px;margin:28px 0 18px;">
    <h3 style="color:[ACCENT];font-size:0.9em;margin:0 0 10px;">Try This</h3>
    <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0 0 4px;">[CHALLENGE_TEXT]</p>
    <div style="margin-top:12px;">
        <button onclick="this.nextElementSibling.style.display='block';this.style.display='none';" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#808098;padding:6px 14px;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:0.85em;">Show a hint</button>
        <div style="display:none;margin-top:10px;padding:10px 14px;background:rgba(255,255,255,0.02);border-radius:6px;border-left:2px solid #fbbf24;">
            <p style="color:#a0a0b8;font-size:0.88em;margin:0;">[HINT_TEXT]</p>
        </div>
    </div>
</div>
```

**Rules:**
- `[ACCENT]` on the `<h3>` uses the chapter accent colour
- Hint border is always `#fbbf24` (gold) regardless of chapter
- `<h3>` must NOT have `font-weight:bold`
- Must use `button/onclick` pattern, NEVER `<details>/<summary>`
- Challenge should relate to the page's interactive elements where possible

## 4. Explore Next

```html
<div style="margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,0.06);">
    <h3 style="color:#808098;font-size:0.8em;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;font-weight:400;">Explore Next</h3>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="[FILENAME].html" style="flex:1;min-width:180px;padding:14px 16px;text-decoration:none;background:rgba(255,255,255,0.025);border-radius:8px;border:1px solid rgba(255,255,255,0.06);border-left:3px solid [TARGET_ACCENT];transition:background 0.2s;">
            <div style="color:#e0e0e0;font-size:0.92em;margin-bottom:4px;">[TOPIC_TITLE]</div>
            <div style="color:#606078;font-size:0.78em;">[CHAPTER_NAME]</div>
        </a>
        <!-- Add 2-3 cards total -->
    </div>
</div>
```

**Rules:**
- Use 2–3 cards (never 1, never more than 4)
- `[TARGET_ACCENT]` is the accent colour of the TARGET page's chapter, not the current page
- Cards use `border-left:3px solid`, NEVER `border-top:2px solid`
- Cards are `<a>` tags, NEVER `<span>` or `<div>` wrappers
- All linked files must actually exist — verify before adding
- Include the chapter name of the target page in the subtitle

## Complete Example (Chapter 1 page, difficulty 2)

```html
<!-- ═══════════════════════════════════════════════════════════
     Tier 1 Enhancements
     ═══════════════════════════════════════════════════════════ -->

<div style="margin:32px 0 18px;display:flex;align-items:center;gap:10px;">
    <span style="color:#808098;font-size:0.82em;text-transform:uppercase;letter-spacing:1px;">Difficulty</span>
    <span style="color:#c084fc;font-size:0.95em;letter-spacing:2px;">●●○○</span>
</div>

<div class="panel" style="border-left:3px solid #22d3ee;margin-bottom:24px;">
    <h3 style="color:#22d3ee;font-size:0.85em;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Where You'll See This</h3>
    <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0;">Truth tables underpin digital circuit design — every AND, OR, and NOT gate in a CPU is a truth table in silicon. Database query optimisers use Boolean algebra to simplify WHERE clauses, and unit-testing frameworks evaluate logical conditions to determine pass/fail.</p>
</div>

<div style="background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:18px 22px;margin:28px 0 18px;">
    <h3 style="color:#c084fc;font-size:0.9em;margin:0 0 10px;">Try This</h3>
    <p style="color:#a0a0b8;font-size:0.92em;line-height:1.7;margin:0 0 4px;">Can you find a combination of inputs where XOR and XNOR give the same output?</p>
    <div style="margin-top:12px;">
        <button onclick="this.nextElementSibling.style.display='block';this.style.display='none';" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);color:#808098;padding:6px 14px;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:0.85em;">Show a hint</button>
        <div style="display:none;margin-top:10px;padding:10px 14px;background:rgba(255,255,255,0.02);border-radius:6px;border-left:2px solid #fbbf24;">
            <p style="color:#a0a0b8;font-size:0.88em;margin:0;">They never do — XOR and XNOR are complementary. For any input combination, one outputs TRUE and the other FALSE.</p>
        </div>
    </div>
</div>

<div style="margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,0.06);">
    <h3 style="color:#808098;font-size:0.8em;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;font-weight:400;">Explore Next</h3>
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="set_theory.html" style="flex:1;min-width:180px;padding:14px 16px;text-decoration:none;background:rgba(255,255,255,0.025);border-radius:8px;border:1px solid rgba(255,255,255,0.06);border-left:3px solid #c084fc;transition:background 0.2s;">
            <div style="color:#e0e0e0;font-size:0.92em;margin-bottom:4px;">Set Theory</div>
            <div style="color:#606078;font-size:0.78em;">Logic &amp; Proof</div>
        </a>
        <a href="combinatorics.html" style="flex:1;min-width:180px;padding:14px 16px;text-decoration:none;background:rgba(255,255,255,0.025);border-radius:8px;border:1px solid rgba(255,255,255,0.06);border-left:3px solid #fbbf24;transition:background 0.2s;">
            <div style="color:#e0e0e0;font-size:0.92em;margin-bottom:4px;">Combinatorics</div>
            <div style="color:#606078;font-size:0.78em;">Numbers</div>
        </a>
    </div>
</div>
```
