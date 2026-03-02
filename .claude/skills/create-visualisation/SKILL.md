---
name: create-visualisation
description: Build and publish an interactive HTML visualisation page for mathsedu.org. Use when creating a new topic page — handles the HTML template, canvas setup, SEO metadata, and the full publishing checklist across index.html, sitemap.xml, and project docs.
argument-hint: "[topic-title]" [chapter-number]
---

# Create Visualisation for mathsedu.org

Build a new interactive visualisation page and integrate it into the site.

## Workflow

1. **Agree scope** — confirm topic title, chapter, difficulty (1–4), subtitle, and which concepts to visualise
2. **Build the HTML page** — follow the template in [template.md](template.md) and the conventions below
3. **Review each section** — present each canvas/graph to the user individually before moving on
4. **Publish** — follow every step in [publishing-checklist.md](publishing-checklist.md)
5. **Commit and push**

## Archive Policy

Before modifying any existing file, copy it to `Archive/` with `_YYYYMMDD_HHMM` appended to the filename (before the extension). Then modify the original. This applies to index.html, sitemap.xml, STATUS.md, FOUNDATION.md, and any other existing file being changed.

## HTML Conventions

- **Self-contained** — single `.html` file, no external dependencies, no frameworks
- **Flat structure** — file sits at repository root (e.g. `topic_name.html`), maps directly to `https://mathsedu.org/topic_name.html`
- **Language** — `<html lang="en">`, British English spelling throughout
- **No build tools** — pure HTML5, CSS, vanilla JavaScript, Canvas API

## CSS Conventions

- **Background:** `#0a0a1a` (dark navy)
- **Text:** `#e0e0e0` (light grey)
- **Font:** `Georgia, 'Times New Roman', serif`
- **Accent colour:** per chapter — see [chapter-config.md](chapter-config.md)
- **Container:** `max-width: 960px`, auto margins, `padding: 24px 28px 48px`
- **Panels:** `background: rgba(255,255,255,0.025)`, `border: 1px solid rgba(255,255,255,0.06)`, `border-radius: 10px`
- **Buttons:** `.btn` class with `.active` state using chapter accent colour
- **Sliders:** `accent-color` set to chapter accent, flex layout with label + range + value span
- **Result boxes:** tinted with chapter accent at low opacity
- **Insight boxes:** left-border accent, `rgba(accent, 0.04)` background
- **Responsive:** `@media (max-width: 600px)` — stack layouts, full-width canvases
- **Muted text:** `#808098` or `#707088`

## JavaScript Conventions

- **Canvas init:** `var cvs = document.getElementById('id'); var ctx = cvs.getContext('2d');`
- **Padding object:** `var PAD = { left: 70, right: 30, top: 30, bottom: 50 };`
- **Transform functions:** `tx(x)` and `ty(y)` to map data coordinates to pixel coordinates
- **Draw pattern:** clear canvas → draw grid/axes → draw data → draw labels → update results DOM
- **Event binding:** `.addEventListener('input', drawFn)` for sliders, `.addEventListener('click', ...)` for buttons
- **Touch handling:** `.addEventListener('touchstart', fn, { passive: true })` to prevent scroll interference on sliders
- **State:** plain JavaScript variables, no external state management
- **No speed sliders** — fixed animation speed throughout

## Financial Simulation Conventions (Chapter 11)

These apply to all Quantitative Finance visualisations:

- **Daily time steps** — 252 trading days/year, with toggle for weekly (5d) and monthly (20d)
- **30–100 paths** — minimum for meaningful standard error
- **Starting point = price today** — S₀ is always "where you are now"
- **Price slider range:** £1–£100
- **Show the formula** — display the exact equation being simulated, colour-coded:
  - Green (`#10b981`) for price terms (S(t), S₀)
  - Gold (`#fbbf24`) for volatility (σ)
  - Cyan (`#22d3ee`) for noise (ε, dW)
  - Muted grey (`#808098`) for explanatory text
- **Step scales with S(t)** — multiplicative, not additive (for price simulations)
- **Seed control** — lockable seed for reproducibility using mulberry32 + Box-Muller
- **Glass box transparency** — show all assumptions, highlight where theory breaks down
- **Regulatory context** — reference PRA SS1/23 (formerly SR 11/7) for model risk management
- **References** — cite Hull, Shreve, and regulatory docs where relevant

### Seeded PRNG boilerplate

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

## SEO Requirements

Every page must include all of these in the `<head>` — see [template.md](template.md) for exact format:

1. `<meta name="description">` — unique, 140–160 characters
2. `<link rel="canonical">` — `https://mathsedu.org/filename.html`
3. JSON-LD structured data — `LearningResource` schema with educationalLevel, teaches, isPartOf (chapter)
4. Open Graph tags — og:title, og:description, og:url, og:type ("article"), og:site_name, og:locale ("en_GB")
5. Twitter Card tags — twitter:card ("summary"), twitter:title, twitter:description

## Footer

Every page ends with this exact footer (outside the container div, before `</body>`):

```html
<footer style="text-align:center;padding:28px 20px 18px;color:#505068;font-size:0.72em;line-height:1.7;border-top:1px solid rgba(255,255,255,0.04);margin-top:30px">
    <div>&copy; 2025&ndash;2026 Manoj Bhaskar &middot; Coded by <a href="https://claude.ai/claude-code" style="color:#606078;text-decoration:none" target="_blank" rel="noopener">Claude</a> &middot; <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:#606078;text-decoration:none" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a></div>
</footer>
```

## Publishing

After the page is built and reviewed, follow every step in [publishing-checklist.md](publishing-checklist.md).
