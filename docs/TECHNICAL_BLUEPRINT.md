# mathsedu.org — Technical Architecture Blueprint

**Version:** 1.0 | **Date:** 12 March 2026 | **Status:** Canonical — all contributors must follow

> This document defines the complete technical architecture for mathsedu.org. Every new page, amendment, or enhancement **must** conform to these standards. Read this entire document before writing any code.

---

## 1. Mission & Principles

**Mission:** Make mathematics visible, interactive, and beautiful — accessible to anyone with a browser.

**Core Principles:**
1. **Visual-first** — every concept gets a canvas, a simulation, or an interactive diagram
2. **Self-contained** — single HTML file, no external dependencies (except Google Fonts), no build tools
3. **Progressive** — content flows from intuition → interaction → formal understanding
4. **Honest** — show assumptions, highlight where theory breaks down
5. **Freely accessible** — works on any device, no login, no paywall

---

## 2. Technology Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Markup | HTML5 | Semantic, accessible, zero build |
| Styling | Inline `<style>` | Self-contained, no CSS files to manage |
| Scripting | Vanilla JavaScript | No frameworks, no transpilation |
| Graphics | Canvas 2D API | Performant, pixel-level control |
| Fonts | Google Fonts (optional) | `Nunito` for journeys, `Crimson Pro` for serif accents |
| Hosting | GitHub Pages | Free, CDN-backed, HTTPS |
| Domain | mathsedu.org | Custom domain on GitHub Pages |

**Hard Rules:**
- No React, Vue, Angular, or any framework
- No npm, webpack, or build pipeline
- No external JavaScript libraries (no D3, no Chart.js, no jQuery)
- No images unless absolutely necessary (prefer canvas-drawn graphics)
- No `<iframe>` embeds

---

## 3. File Organisation

```
/Edu/
├── index.html                          # Main landing page
├── {topic_name}.html                   # Topic pages (snake_case)
├── topic-{family}.html                 # Topic family navigation pages
├── level-{level}.html                  # Level-based navigation pages
├── mathematicians.html                 # Mathematician directory
├── terms.html, privacy.html, etc.      # Legal pages
├── journeys/
│   └── {journey}_act{N}.html           # Journey act files
├── docs/
│   ├── FOUNDATION.md                   # Mission, catalogue, chapter list
│   ├── TECHNICAL_BLUEPRINT.md          # This file
│   ├── REVIEW_PROMPT.md                # QA review checklist
│   ├── TODO.md                         # Roadmap
│   ├── CROSS_LINKING_OUTLINE.md        # Navigation plan
│   └── STATUS.md                       # Per-page status tracker
├── Archive/                            # Timestamped backups
│   └── {filename}_{YYYYMMDD}_{HHMM}.html
├── .claude/
│   └── skills/create-visualisation/    # Agent skill config
│       ├── template.md
│       ├── chapter-config.md
│       └── publishing-checklist.md
└── sitemap.xml
```

### 3.1 Naming Conventions

| Page Type | Pattern | Example |
|-----------|---------|---------|
| Topic page | `snake_case.html` | `brownian_motion.html` |
| Topic family | `topic-{name}.html` | `topic-probability.html` |
| Level page | `level-{name}.html` | `level-gcse.html` |
| Journey act | `journeys/{name}_act{N}.html` | `journeys/propulsion_act3.html` |
| Archive | `{original}_{YYYYMMDD}_{HHMM}.ext` | `index_20260312_0100.html` |

### 3.2 Archive Policy

**Before modifying any existing file**, copy it to `Archive/` with a timestamp suffix:
```
cp index.html Archive/index_20260312_0100.html
```
This applies to: `index.html`, `sitemap.xml`, `docs/STATUS.md`, `docs/FOUNDATION.md`, and any other existing file being changed. New files do not need archiving.

---

## 4. Dark Theme & Colour System

### 4.1 Global Palette

```
Background:       #0a0a1a     (body, all pages)
Panel bg:         rgba(255,255,255,0.025)
Panel border:     rgba(255,255,255,0.06)
Primary text:     #e0e0e0
Secondary text:   #b0b0c8
Muted text:       #808098
Dim text:         #707088
Footer text:      #505068
Footer links:     #606078
Border subtle:    rgba(255,255,255,0.04)
```

### 4.2 Chapter Accent Colours

Every page belongs to a chapter. The accent colour permeates all interactive elements on that page.

| Chapter | Accent | RGB |
|---------|--------|-----|
| Logic & Proof | `#c084fc` | 192, 132, 252 |
| Numbers | `#fbbf24` | 251, 191, 36 |
| Geometry | `#f87171` | 248, 113, 113 |
| Algebra | `#60a5fa` | 96, 165, 250 |
| Trigonometry & Waves | `#34d399` | 52, 211, 153 |
| Calculus | `#fb923c` | 251, 146, 60 |
| Linear Algebra | `#22d3ee` | 34, 211, 238 |
| Probability & Statistics | `#f472b6` | 244, 114, 182 |
| Analysis & Topology | `#818cf8` | 129, 140, 248 |
| Beautiful Results | `#fcd34d` | 252, 211, 77 |
| Quantitative Finance | `#10b981` | 16, 185, 129 |
| Physics | `#14b8a6` | 20, 184, 166 |
| AI & Intelligence | `#a78bfa` | 167, 139, 250 |
| Internet Mathematics | `#f472b6` | 244, 114, 182 |
| The Geometry of Information | `#6366f1` | 99, 102, 241 |

### 4.3 Accent Colour Usage

The accent colour appears in:
- Back-link hover state
- Button `.active` state: `background: rgba(ACCENT, 0.13); border-color: rgba(ACCENT, 0.4); color: ACCENT`
- Slider thumb and track: `accent-color: ACCENT`
- Slider value display text
- Result box border and tint: `background: rgba(ACCENT, 0.06); border: 1px solid rgba(ACCENT, 0.2)`
- Insight box left border: `border-left: 3px solid rgba(ACCENT, 0.3)`
- Canvas highlights, data lines, interactive elements
- Heading underlines on topic/level pages

**Never mix accent colours on a single page.** Each page has exactly one accent.

---

## 5. CSS Specifications

### 5.1 Container

```css
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 28px 48px;
}
```

### 5.2 Panels

```css
.panel {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 18px 22px;
    margin-bottom: 20px;
}
.panel h3 {
    font-weight: 400;
    font-size: 0.8em;
    color: #808098;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
}
```

### 5.3 Buttons

```css
.btn {
    background: rgba(255,255,255,0.035);
    border: 1px solid rgba(255,255,255,0.07);
    color: #b0b0c4;
    padding: 5px 13px;
    border-radius: 6px;
    cursor: pointer;
    font-family: Georgia, serif;
    font-size: 0.92em;
    transition: all 0.2s;
}
.btn:hover {
    background: rgba(255,255,255,0.07);
    color: #e0e0ef;
}
.btn.active {
    background: rgba(ACCENT_RGB, 0.13);
    border-color: rgba(ACCENT_RGB, 0.4);
    color: ACCENT;
}
```

### 5.4 Sliders

```css
.slider-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 10px 0;
}
.slider-row label {
    color: #a0a0b8;
    font-size: 0.9em;
    min-width: 130px;
}
input[type=range] {
    flex: 1;
    max-width: 300px;
    accent-color: ACCENT;
    cursor: pointer;
}
.slider-val {
    color: ACCENT;
    font-family: 'Courier New', monospace;
    font-size: 1.05em;
    min-width: 60px;
    text-align: right;
}
```

### 5.5 Canvas

```css
canvas {
    display: block;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
}
```

**Critical:** Never apply `background`, `box-shadow`, or `margin` to the generic `canvas` selector if the page also has overlay canvases (confetti, starfield). Use ID selectors for specific canvases.

### 5.6 Insight Boxes

```css
.insight-box {
    border-left: 3px solid rgba(ACCENT_RGB, 0.3);
    background: rgba(ACCENT_RGB, 0.04);
    padding: 14px 18px;
    margin: 16px 0;
    border-radius: 0 8px 8px 0;
    font-size: 0.93em;
    line-height: 1.7;
    color: #c8c8e0;
}
```

### 5.7 Responsive Design

**Single breakpoint:** `@media (max-width: 600px)`

```css
@media (max-width: 600px) {
    .container { padding: 16px 12px; }
    h1 { font-size: 1.4em; }
    .slider-row { flex-wrap: wrap; }
    .slider-row label { min-width: 100%; }
    .btn-row { flex-wrap: wrap; }
    canvas { width: 100% !important; }
}
```

All grid layouts must use `repeat(auto-fit, minmax(Xpx, 1fr))` so they collapse to single-column on mobile.

### 5.8 Typography

| Element | Font | Size | Weight | Colour |
|---------|------|------|--------|--------|
| Body | `Georgia, serif` | 1em | 400 | `#e0e0e0` |
| h1 (topic) | `Georgia, serif` | 1.8em | 400 | `#ffffff` |
| h2 (section) | `Georgia, serif` | 1.15em | 400 | `#ffffff` |
| Panel label | `Georgia, serif` | 0.8em | 400 | `#808098` |
| Button | `Georgia, serif` | 0.92em | 400 | `#b0b0c4` |
| Muted caption | `Georgia, serif` | 0.85em | 400 | `#707088` |
| Journey body | `Nunito, sans-serif` | 1em | 400 | `#e2e2f0` |
| Journey narrator | `Crimson Pro, serif` | 1.15em | 400 | `#c8c8e8` |
| Journey title | `Crimson Pro, serif` | clamp(1.6em, 6vw, 2.2em) | 300 | `#ffffff` |

**Language:** British English (`en-GB`). Use "colour" not "color" in prose, "visualisation" not "visualization", "centre" not "center".

---

## 6. JavaScript Specifications

### 6.1 HiDPI Canvas Setup (Mandatory)

Every canvas must support Retina displays:

```javascript
function setupHiDPI(canvas, cssW, cssH) {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx: ctx, w: cssW, h: cssH };
}
```

### 6.2 Canvas Drawing Conventions

```javascript
// Standard padding object
var PAD = { left: 70, right: 30, top: 30, bottom: 50 };

// Transform functions: data coordinates → pixel coordinates
function tx(dataX) { return PAD.left + (dataX - xMin) / (xMax - xMin) * (W - PAD.left - PAD.right); }
function ty(dataY) { return PAD.top + (1 - (dataY - yMin) / (yMax - yMin)) * (H - PAD.top - PAD.bottom); }

// Draw sequence: clear → grid → axes → data → labels → results
function draw() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    drawAxes();
    drawData();
    drawLabels();
    updateResults();
}
```

**Label safety:** Always leave at least 50px padding on left (for Y-axis labels) and 50px on bottom (for X-axis labels). Use `ctx.measureText()` to check text width before rendering near edges.

### 6.3 Animation Pattern

```javascript
var animId = null;

function animate() {
    // ... update state ...
    draw();
    animId = requestAnimationFrame(animate);
}

function startAnimation() {
    if (animId) cancelAnimationFrame(animId);
    animate();
}

function stopAnimation() {
    if (animId) { cancelAnimationFrame(animId); animId = null; }
}
```

**No `setInterval` for rendering.** Always use `requestAnimationFrame`.
**No speed sliders.** Animation speed is fixed.

### 6.4 Event Binding

```javascript
// Sliders: use 'input' event, not 'change'
document.getElementById('slider').addEventListener('input', draw);

// Buttons: click event
document.getElementById('btn').addEventListener('click', handleClick);

// Touch: prevent scroll interference
slider.addEventListener('touchstart', function(e) {
    e.stopPropagation();
}, { passive: true });
```

### 6.5 Seeded PRNG (When Reproducibility Matters)

```javascript
function mulberry32(seed) {
    return function() {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function seededRandn(rng) {
    var u1 = rng(), u2 = rng();
    while (u1 === 0) u1 = rng();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}
```

Use for: financial simulations, Monte Carlo methods, any page where users expect reproducible results with a seed toggle.

### 6.6 Numerical Safety

```javascript
// Always guard against NaN and Infinity
var value = denominator > 0 ? numerator / denominator : 0;
if (!isFinite(value)) value = 0;

// Use Math.abs() for delta-v and similar physical quantities
var dv = Math.abs(Math.sqrt(mu / r) * (Math.sqrt(2 * r2 / (r1 + r2)) - 1));
```

---

## 7. HTML Structure

### 7.1 Topic Page Template

```html
<!DOCTYPE html>
<html lang="en-GB">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{Title} — A Visual Discovery of Mathematics</title>
    <meta name="description" content="{140-160 chars}">
    <link rel="canonical" href="https://mathsedu.org/{filename}.html">

    <!-- JSON-LD -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LearningResource",
        "name": "{Title}",
        "url": "https://mathsedu.org/{filename}.html",
        "description": "{Description}",
        "educationalLevel": "{Beginner|Intermediate|Advanced}",
        "teaches": "{Concept}",
        "learningResourceType": "Interactive visualisation",
        "interactivityType": "active",
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "creator": { "@type": "Person", "name": "Manoj Bhaskar" },
        "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        "isPartOf": {
            "@type": "Course",
            "name": "{Chapter Name}",
            "url": "https://mathsedu.org/"
        }
    }
    </script>

    <!-- Open Graph -->
    <meta property="og:title" content="{Title}">
    <meta property="og:description" content="{Description}">
    <meta property="og:url" content="https://mathsedu.org/{filename}.html">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="MathsEdu.org">
    <meta property="og:locale" content="en_GB">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{Title}">
    <meta name="twitter:description" content="{Description}">

    <style>
        /* ... all CSS inline ... */
    </style>
</head>
<body>
    <div class="container">
        <a class="back" href="index.html">&larr; Back to Index</a>
        <h1>{Title}</h1>
        <p class="subtitle">{Subtitle}</p>

        <!-- Panels with interactive content -->
        <div class="panel">
            <h3>Panel Title</h3>
            <canvas id="canvas1"></canvas>
            <!-- Controls -->
        </div>

        <!-- More panels... -->
    </div>

    <footer>
        <div>&copy; 2025&ndash;2026 MathsEdu.org &mdash; All rights reserved</div>
        <div style="margin-top:6px">
            <a href="terms.html">Terms of Use</a>
            &nbsp;&middot;&nbsp;
            <a href="intellectual-property.html">Intellectual Property</a>
            &nbsp;&middot;&nbsp;
            <a href="privacy.html">Privacy Policy</a>
        </div>
    </footer>

    <script>
        /* ... all JavaScript inline ... */
    </script>
</body>
</html>
```

### 7.2 Journey Act Template

Journey acts use a different structure: sticky header with progress dots, screen-based navigation, narrator boxes, and CTA buttons. See `journeys/propulsion_act1.html` as the reference implementation.

**Key structural rules:**
- `#confetti` canvas must have explicit `background: transparent; border: none; border-radius: 0; margin: 0;`
- Only ONE branding element — either a back-link OR a header logo, never both
- Screens use `.screen` / `.screen.active` with `goToScreen(n)` navigation
- Progress dots reflect current screen state

**Journey navigation (mandatory):**

Every journey act page must provide clear navigation so students can always move backward or return home. This is a core design principle — students must never feel trapped.

1. **Header back-link** — every act must display a persistent back-link in the top-left corner:
   - Act 1: links to `../index.html` (main site index)
   - Acts 2+: links to the previous act (e.g. `art_of_maths_act1.html`)
   - Format: `← Back to Index` (act 1) or `← Previous Act` (acts 2+)
   - Style: same as topic page back-link — `position: fixed; top: 12px; left: 16px; z-index: 100; color: #808098; font-size: 0.85em;`
2. **Final screen of each act** — the completion screen must include:
   - A **"Next Act →"** button linking to the next act (for all acts except the last)
   - A **"← Back to Index"** link to `../index.html` (on every act, including the last)
   - The last act's completion screen should prominently feature the **"Return to Index"** button
3. **Home link in header** — the site branding text (e.g. "mathsedu.org") in the top-left should always link to `../index.html`

---

## 8. Visual Quality Standards

### 8.1 Canvas Diagrams Must:

1. **Use HiDPI rendering** — blurry canvases are unacceptable
2. **Leave proper padding** — minimum `{left: 50, right: 30, top: 30, bottom: 50}`
3. **Never clip labels** — pre-measure text, adjust positioning
4. **Use gradient fills** — flat blocks of colour look crude
5. **Include gridlines** — subtle `rgba(255,255,255,0.04)` for context
6. **Animate meaningfully** — animation should reveal the mathematics, not just decorate
7. **Respond to sliders in real-time** — no lag, no stale renders
8. **Handle edge cases** — slider at min, slider at max, zero values, extreme ratios

### 8.2 Colour-Coded Formulas

When displaying mathematical formulas on canvas, colour-code the variables:
- Known/given values: white (`#ffffff`)
- Primary variable: accent colour
- Secondary variables: complementary colours (`#22d3ee`, `#10b981`, `#fbbf24`)
- Operators and brackets: muted grey (`#9898c0`)

### 8.3 Coming Soon Pattern

Pages not yet built appear as disabled cards:

```html
<div class="card" style="opacity:0.6; cursor:default; pointer-events:none;">
    <div class="card-title"><span style="color:#808098;">Topic Name</span></div>
    <div class="card-description">Brief description</div>
    <div class="card-meta">
        <!-- difficulty dots -->
        <span style="background:#808098;color:#0a0a1a;padding:4px 10px;border-radius:3px;font-size:0.75em;font-weight:bold;">Coming Soon</span>
    </div>
</div>
```

**Never** use `<a>` tags for Coming Soon cards. Use `<div>` or `<span>` with `pointer-events: none`.

---

## 9. SEO Requirements

Every page must include ALL of the following in `<head>`:

1. `<meta name="description">` — unique, 140-160 characters
2. `<link rel="canonical">` — `https://mathsedu.org/{filename}.html`
3. JSON-LD structured data — `LearningResource` schema
4. Open Graph tags — `og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:locale`
5. Twitter Card tags — `twitter:card`, `twitter:title`, `twitter:description`

---

## 10. Publishing Checklist

After building a new page, follow **every** step:

1. Create the HTML file at repository root (or in `journeys/`)
2. Archive any files you're about to modify
3. Add the page to the `chapters` array in `index.html`
4. Add to `sitemap.xml`
5. Update `docs/STATUS.md`
6. Update `docs/FOUNDATION.md` if adding a new topic to the catalogue
7. Update relevant `topic-*.html` and `level-*.html` navigation pages
8. Commit and push
9. Verify the page loads correctly at `https://mathsedu.org/{filename}.html`

---

## 11. Known Anti-Patterns (Do NOT Repeat)

| Bug | Cause | Prevention |
|-----|-------|------------|
| Shadow overlay on page | Generic `canvas` CSS applied to confetti/overlay canvas | Always use ID-specific CSS for overlay canvases |
| Duplicate branding | Fixed back-link AND sticky header logo | Use exactly one navigation/branding element |
| NaN in display | Division by zero or sqrt of negative | Guard all calculations with `isFinite()` checks |
| Clipped labels | Text drawn beyond canvas padding | Leave 50px+ padding, use `measureText()` |
| Cards not clickable | Only `<a>` inside card title linked | Add click delegation JS or make entire card an `<a>` |
| Coming Soon links broken | Used `<a href>` for non-existent pages | Use `<div>` or `<span>` with `pointer-events: none` |
| Stale browser cache | User sees old version after push | Remind users to hard-refresh; consider cache-busting |

---

## 12. Continuous Improvement

This blueprint is a living document. When new patterns emerge or bugs are discovered:

1. Document the pattern/fix here
2. Update the Review Prompt (`docs/REVIEW_PROMPT.md`)
3. If it affects the skill template, update `.claude/skills/create-visualisation/template.md`
4. Archive the previous version of any file you modify

**Last updated:** 12 March 2026
