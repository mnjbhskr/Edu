# mathsedu.org — Visual Quality Review Prompt

**Purpose:** This prompt is used by reviewers (human or AI) to evaluate any new or amended page before it is published to mathsedu.org. Every submission must pass ALL checks below.

---

## Instructions for Reviewer

You are reviewing a page for mathsedu.org, an interactive mathematics education website. The site serves school and university students globally. Quality, visual polish, and mathematical accuracy are non-negotiable.

Open the HTML file in a browser at desktop width (1024px+) and mobile width (375px). Evaluate against every section below. Flag any failure as **BLOCK** (must fix before publish) or **WARN** (should fix, can publish with note).

---

## 1. First Impression (5-Second Test)

- [ ] Does the page feel **visually cohesive** with the dark theme (#0a0a1a background)?
- [ ] Is the accent colour correct for this chapter? (Check `docs/TECHNICAL_BLUEPRINT.md` §4.2)
- [ ] Does it look **professional** — no crude shapes, no clipped text, no visual artefacts?
- [ ] Is there a clear visual hierarchy: title → explanation → interactive → insight?
- [ ] Would you be proud to show this to a student?

**BLOCK if:** Page looks amateur, colours clash, or text is hard to read.

---

## 2. Technical Compliance

### 2.1 HTML & SEO
- [ ] `<html lang="en-GB">` (British English)
- [ ] `<meta name="description">` present, 140-160 characters, unique
- [ ] `<link rel="canonical">` with correct `https://mathsedu.org/` URL
- [ ] JSON-LD `LearningResource` schema with: name, url, description, educationalLevel, teaches, isPartOf
- [ ] Open Graph tags: og:title, og:description, og:url, og:type, og:site_name, og:locale
- [ ] Twitter Card tags: twitter:card, twitter:title, twitter:description
- [ ] No external script/CSS imports (except Google Fonts)
- [ ] All CSS in a single `<style>` block in `<head>`
- [ ] All JS in a single `<script>` block before `</body>`

**BLOCK if:** Any SEO tag missing. Any external dependency loaded.

### 2.2 Footer
- [ ] Footer present with copyright: `© 2025–2026 MathsEdu.org — All rights reserved`
- [ ] Links to Terms of Use, Intellectual Property, Privacy Policy
- [ ] Footer styling matches site standard (centred, `#505068`, `0.72em`)

**BLOCK if:** Footer missing or wrong copyright text.

### 2.3 Navigation
- [ ] Back link to `index.html` present and working
- [ ] No duplicate branding (e.g. both a fixed back-link AND a header logo)
- [ ] Breadcrumb present on navigation pages (topic-*, level-*)

**BLOCK if:** No way to return to home page.

---

## 3. Canvas & Interactive Quality

### 3.1 HiDPI / Retina
- [ ] Canvas uses `devicePixelRatio` scaling (check JS for `setupHiDPI` or equivalent)
- [ ] Text on canvas is crisp, not blurry (test on a Retina display if possible)
- [ ] Canvas resizes properly when browser window changes width

**BLOCK if:** Canvas is blurry on Retina/HiDPI screens.

### 3.2 Padding & Labels
- [ ] All axis labels fully visible — nothing clipped at edges
- [ ] Left padding ≥ 50px for Y-axis labels
- [ ] Bottom padding ≥ 50px for X-axis labels
- [ ] Title/formula text has breathing room (not jammed against canvas edge)
- [ ] Gridlines present at sensible intervals

**BLOCK if:** Any label or number is partially cut off.

### 3.3 Visual Polish
- [ ] Shapes use gradients, not flat colour blocks
- [ ] Bars have rounded corners (where applicable)
- [ ] Lines have appropriate thickness (1-3px depending on importance)
- [ ] Subtle glow/shadow effects enhance readability
- [ ] Colour-coded formulas match the blueprint standard
- [ ] No visual artefacts (stray pixels, misaligned elements, overlapping text)

**WARN if:** Flat colour blocks where gradients would improve appearance.
**BLOCK if:** Visual artefacts or overlapping text.

### 3.4 Animation
- [ ] Uses `requestAnimationFrame`, not `setInterval`
- [ ] Animation reveals mathematical insight (not just decoration)
- [ ] No speed slider — animation speed is fixed
- [ ] Animation starts/stops cleanly (no zombie RAF loops)
- [ ] Performance is smooth (no frame drops or jank)

**WARN if:** `setInterval` used for animation.

### 3.5 Interactivity
- [ ] All sliders respond in real-time (canvas redraws on `input` event)
- [ ] Slider values displayed and formatted correctly (%, £, km/s, etc.)
- [ ] Button toggle groups work (only one `.active` at a time)
- [ ] Edge cases handled: slider at minimum, slider at maximum, extreme values
- [ ] No NaN, Infinity, or undefined displayed anywhere
- [ ] Touch events work on mobile (sliders don't hijack page scroll)

**BLOCK if:** NaN or broken display at any slider position. Sliders don't respond.

---

## 4. Content Quality

### 4.1 Mathematical Accuracy
- [ ] All formulas are correct
- [ ] Units are consistent and displayed (km/s, %, seconds, etc.)
- [ ] Numerical examples produce correct results (verify with a calculator)
- [ ] Edge cases give sensible answers (not negative distances, imaginary numbers shown as real, etc.)

**BLOCK if:** Any mathematical error in formulas or calculations.

### 4.2 Prose Quality
- [ ] British English spelling throughout (colour, centre, behaviour, modelling)
- [ ] No typos, no broken sentences
- [ ] Explanatory text is concise and jargon-appropriate for the stated educational level
- [ ] Insight boxes add genuine pedagogical value

**WARN if:** Minor typos. **BLOCK if:** Factual errors in explanatory text.

### 4.3 Accessibility
- [ ] Colour is not the only way to distinguish elements (add labels, patterns, or shapes)
- [ ] Text contrast ratio adequate (light text on dark background)
- [ ] Interactive elements are keyboard-accessible (sliders, buttons)
- [ ] Page is usable without JavaScript (at minimum: title, description, and static content visible)

**WARN if:** Colour-only distinction. **BLOCK if:** Text unreadable due to contrast.

---

## 5. Mobile Responsiveness

Test at 375px viewport width:

- [ ] Container doesn't overflow horizontally
- [ ] Canvas scales to fit screen width
- [ ] Slider rows wrap properly (label above, slider below)
- [ ] Button rows wrap without overflow
- [ ] Text is readable without zooming (≥ 14px effective size)
- [ ] No horizontal scrollbar appears

**BLOCK if:** Horizontal overflow or unreadable text on mobile.

---

## 6. Integration

### 6.1 Index Registration
- [ ] Page is listed in the correct chapter in `index.html` `chapters` array
- [ ] Difficulty rating (1-4 dots) matches content complexity
- [ ] Description matches the page content

### 6.2 Navigation Pages
- [ ] Page appears in the relevant `topic-*.html` card grid (if applicable)
- [ ] Page appears in the relevant `level-*.html` page (if applicable)
- [ ] Card link goes to the correct filename
- [ ] Coming Soon cards use `<div>` not `<a>`, with `pointer-events: none`

### 6.3 Sitemap
- [ ] Page URL added to `sitemap.xml`
- [ ] `<lastmod>` date is current

**BLOCK if:** Page is not registered in index.html or sitemap.xml.

---

## 7. Overlay & Layer Checks

- [ ] No full-screen canvas (confetti, starfield) creates a visible overlay/shadow
- [ ] Confetti canvas (if present) has `background: transparent; border: none;`
- [ ] z-index layering is correct: starfield (0) < content (1) < header (10) < confetti (50)
- [ ] `pointer-events: none` on overlay canvases

**BLOCK if:** Visible shadow/overlay obscuring content.

---

## Review Summary Template

```
Page: {filename.html}
Reviewer: {name}
Date: {YYYY-MM-DD}
Verdict: PASS / PASS WITH WARNINGS / FAIL

Blocks:
- (list any BLOCK issues)

Warnings:
- (list any WARN issues)

Notes:
- (any other observations)
```

---

**Last updated:** 12 March 2026
