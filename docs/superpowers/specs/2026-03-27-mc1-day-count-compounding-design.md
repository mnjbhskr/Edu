# MC-1: Day Count & Compounding Conventions — Design Spec

**Module:** MC-1 (first of 7 in the Market Conventions & Quant Language series)
**File:** `mc1_day_counts.html`
**Date:** 27 March 2026
**Status:** Design approved, pending implementation

---

## 1. Overview

MC-1 is the foundation module for the Market Conventions series. It establishes the mathematical machinery for comparing rates quoted under different day count and compounding conventions — a prerequisite for every subsequent module in the series.

**Core problem:** Two bonds both quote a yield of "5%". One uses Act/365 with annual compounding; the other uses Act/360 with semi-annual compounding. They are not offering the same return. This module teaches users to convert between any pair of conventions.

**Audience:** Junior quants, traders wanting the maths, risk managers, students.

---

## 2. Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Accent colour | Emerald `#10b981` | Standard quant finance chapter colour; no special series colour |
| Page structure | Single long page | Matches established pattern (e.g. `bond_pricing.html`); content is sequential |
| Derivation panels | Native `<details>/<summary>` | Semantic HTML, no JS needed, accessible, styled to match dark theme |
| Interactive tools | Inline with narrative | Tools appear after the section that explains them; matches site "visual-first" mission |
| Template basis | `bond_pricing.html` pattern | Breadcrumb, panels, canvases, insight boxes, footer |
| Difficulty | Intermediate (2/4 dots) | Requires basic calculus (logarithms, exponentials) but no advanced theory |

---

## 3. Page Metadata

- **Title:** "Day Count & Compounding Conventions"
- **Subtitle:** "How markets measure time and grow money — and why the conventions matter"
- **meta description:** "Convert between Act/360, Act/365, 30/360 day counts and simple, annual, semi-annual, continuous compounding. Interactive tools with step-by-step working." (155 chars)
- **canonical:** `https://mathsedu.org/mc1_day_counts.html`
- **JSON-LD:** `LearningResource`, educationalLevel "Intermediate", isPartOf "Quantitative Finance"
- **Open Graph / Twitter Card:** Standard tags per TECHNICAL_BLUEPRINT.md
- **Language:** `en-GB`

---

## 4. Section Architecture (8 Sections)

### Section 1: Introduction

The "two bonds at 5%" problem. Sets up the core tension: markets evolved conventions for speed and intuition; quants need internally consistent, model-ready representations. The £172,000 example (6.9bp difference on £1bn) makes the stakes concrete.

Insight box: "Every derivatives desk has a version of this conversation on day one."

### Section 2: Day Count Conventions

Narrative covering all 6 conventions with mathematical definitions:

| Convention | Formula | Market Usage |
|-----------|---------|-------------|
| Actual/360 | DCF = (d₂ − d₁) / 360 | Money markets: T-bills, repos, LIBOR |
| Actual/365 Fixed | DCF = (d₂ − d₁) / 365 | Sterling money markets, Asian markets |
| 30/360 (Bond Basis) | DCF = [360(Y₂−Y₁) + 30(M₂−M₁) + (D₂−D₁)] / 360 | US corporate bonds, Eurobonds |
| 30E/360 (Eurobond) | As 30/360 with European end-of-month rules | European fixed income |
| Actual/Actual ISDA | Leap days / 366 + non-leap days / 365 | Government bonds (Treasuries, Gilts) |
| Actual/Actual ICMA | (d₂ − d₁) / (frequency × coupon period days) | Bond coupon accruals |

Collapsible `<details>` panel: "Full derivation: 30/360 end-of-month adjustment rules" — covers the D₁/D₂ adjustment logic for months with 28/29/30/31 days.

### Section 3: Interactive — Timeline Visualiser

**Purpose:** Select two dates; see how each convention counts the intervening period.

**Inputs:**
- Start date picker (default: 15 January 2026)
- End date picker (default: 15 April 2026)

**Canvas:**
- Horizontal timeline spanning the date range
- Tick marks at month boundaries
- Selected period highlighted in emerald
- Month labels below the axis

**Output panel (table):**

| Convention | Days Counted | Denominator | DCF |
|-----------|-------------|-------------|-----|
| Act/360 | 90 | 360 | 0.250000 |
| Act/365F | 90 | 365 | 0.246575 |
| 30/360 | 90 | 360 | 0.250000 |
| 30E/360 | 90 | 360 | 0.250000 |
| Act/Act ISDA | 90 | 365 | 0.246575 |
| Act/Act ICMA | — | — | — |

Act/Act ICMA row shows "requires coupon frequency" note, since it depends on the bond's payment schedule — not computable from dates alone.

**Insight box:** Highlights when conventions agree and when they diverge. Suggests trying a leap-year-spanning period (e.g. 1 Feb 2024 – 1 Mar 2024) to see Act/Act ISDA differ from Act/365F.

### Section 4: Day Count Conversion

The core identity: `1 + r₁ × DCF₁ = 1 + r₂ × DCF₂ → r₂ = r₁ × (DCF₁ / DCF₂)`

**Worked Example 1:**
- 5.00% rate on Act/360 basis for a 90-day period
- Convert to Act/365: DCF₁ = 90/360 = 0.2500, DCF₂ = 90/365 = 0.2466
- r₂ = 5.00% × (0.2500 / 0.2466) = 5.069%
- "This 6.9bp difference on a £1 billion position represents approximately £172,000"

Collapsible `<details>` panel: "Why this identity works" — the accrued amount must be equal regardless of how we label the rate.

### Section 5: Compounding Conventions

The four regimes with growth formulae:

| Compounding | Growth of £1 | Typical Usage |
|------------|-------------|---------------|
| Simple | 1 + r × T | Money market instruments (< 1 year) |
| Annual | (1 + r)^T | Bond yields, annual swap rates |
| Semi-annual | (1 + r/2)^(2T) | US Treasuries, US fixed income |
| Continuous | e^(rT) | All derivatives models, Black-Scholes |

**Derivation of equivalence** (inline, not collapsible — this is core content):
- Semi-annual → continuous: r_c = 2 × ln(1 + r_s/2)
- Annual → continuous: r_c = ln(1 + r_a)
- Simple → continuous: r_c = ln(1 + r_simple × T) / T

**Worked Example 2:**
- Semi-annual rate r_s = 5.00%
- r_c = 2 × ln(1 + 0.025) = 2 × 0.024693 = 4.938%
- Context: "This is why a 5% semi-annual bond yield and a 4.938% continuous rate produce the same terminal value"

Collapsible `<details>` panel: "Why continuous compounding in derivatives" — the three reasons (addition of exponents, natural limit, alignment with Itô calculus).

### Section 6: Interactive — Compounding Growth Chart

**Purpose:** Animated comparison of how £1 grows under each compounding regime.

**Canvas (700 × 340):**
- X-axis: 0–30 years
- Y-axis: £1 to £max (auto-scaled to fit highest curve)
- Four curves drawn simultaneously:
  - Simple: emerald `#10b981` (straight line)
  - Annual: cyan `#22d3ee` (annual staircase)
  - Semi-annual: gold `#fbbf24` (finer staircase)
  - Continuous: pink `#f472b6` (smooth exponential)
- Gridlines at 5-year intervals and at key £ values
- HiDPI scaling via `devicePixelRatio`

**Controls:**
- Rate slider: 0.5%–15%, step 0.5%, default 5%
- Play/Replay buttons (standard `.anim-ctrl` pattern)

**Animation:** Curves draw left-to-right over ~2 seconds using `requestAnimationFrame`. Pause at T=30.

**Legend:** Below canvas, using `.legend-item` / `.legend-swatch` pattern.

**Result box:** Terminal values at T=10y and T=30y for each regime, formatted in Courier New. Example at 5%:

```
                     T = 10y      T = 30y
Simple              £1.5000      £2.5000
Annual              £1.6289      £4.3219
Semi-annual         £1.6386      £4.4320
Continuous          £1.6487      £4.4817
```

**Insight box:** "The gap between simple and continuous compounding is negligible for short periods but dramatic over decades — this is why compounding convention matters most for long-dated instruments."

### Section 7: Interactive — Rate Converter

**Purpose:** Full-featured tool to convert any rate between any pair of conventions.

**Input panel:**
- Rate value: text input with number validation (default: 5.00)
- Source day count: dropdown — Act/360, Act/365F, 30/360, 30E/360, Act/Act ISDA
- Source compounding: dropdown — Simple, Annual, Semi-annual, Quarterly, Continuous
- Period (days): number input (default: 90). Enabled when Simple compounding is selected for source OR target. Disabled and greyed out otherwise (annualised rate conversions are direct and do not require a period).
- Target day count: matching dropdown. Enabled only when Period is enabled (day count is only meaningful in the context of simple/money-market rates).
- Target compounding: matching dropdown

**Conversion algorithm (internal):**
- **Case 1 — Both annualised (Annual, Semi-annual, Quarterly, Continuous):** Direct conversion using equivalence formulae. No period or day count needed. E.g. r_c = 2 × ln(1 + r_sa/2).
- **Case 2 — Simple involved (source or target):** Period and day count are needed to compute DCF. Convert via continuous as the universal intermediary:
  1. Compute source DCF from source day count + period
  2. Convert source rate to continuous rate
  3. Compute target DCF from target day count + period (if target is also simple)
  4. Convert continuous rate to target compounding convention

**Output panel:** Step-by-step calculation in `.math-line` format with colour-coded values:

```
Step 1: Source DCF (Act/360, 90 days) = 90 / 360 = 0.250000
Step 2: Convert to continuous: r_c = ln(1 + 0.05 × 0.25) / 0.25 = 4.969%
Step 3: Target DCF (Act/365, 90 days) = 90 / 365 = 0.246575
Step 4: Convert from continuous to annual: r_a = exp(0.04969) − 1 = 5.094%
Result: 5.094%
```

**Result box:** Large emerald number showing the converted rate. Below it: the basis-point difference from the input rate.

**Edge case handling:**
- Guard against division by zero (DCF = 0)
- Guard against negative rates in logarithms (display warning)
- `isFinite()` checks on all outputs

### Section 8: Reference Tables & Where It Matters

**Reference Table A:** Instrument → Day Count → Compounding → Notes (from spec Appendix A):
US T-Bills, US Treasuries, USD LIBOR/SOFR, USD IRS, GBP SONIA Swaps, EUR ESTR Swaps, UK Gilts.

**Reference Table B:** Standard conversion formulae (from spec Appendix B):
Simple↔Continuous, Annual↔Continuous, Semi-annual↔Continuous, Quarterly↔Continuous, Annual↔Semi-annual.

**"Where It Matters" explain section:**
- Bond relative value: comparing yields across markets requires convention alignment
- Derivatives pricing: Black-Scholes assumes continuous compounding — feeding in a semi-annual rate without conversion introduces pricing error
- Risk management: VaR and DV01 must use consistent conventions across a portfolio
- Cross-links to existing pages: Bond Pricing, Yield Curve, Black-Scholes, Interest Rates

---

## 5. Series Navigation Panel

A compact horizontal bar positioned below the breadcrumb and above the h1 title.

**Layout:** Flex row with 7 small labelled boxes. Each box shows "MC-N" and a short title.

**Styling:**
- Active module (MC-1): emerald background `rgba(16,185,129,0.13)`, emerald border, emerald text
- Future modules (MC-2 through MC-7): muted background `rgba(255,255,255,0.025)`, muted text `#606078`, `pointer-events: none`, NO `<a>` tags (per anti-pattern guidance)
- On mobile (< 600px): wraps to 2 rows or scrolls horizontally

**Module labels:**
1. MC-1: Day Counts (active)
2. MC-2: Vol Surface
3. MC-3: FX Options
4. MC-4: IR Vol
5. MC-5: Credit
6. MC-6: Commodities
7. MC-7: Bootstrapping

---

## 6. Technical Requirements

### HTML / CSS
- Single self-contained HTML file, all CSS and JS inline
- `lang="en-GB"` on `<html>` tag
- British English throughout (colour, behaviour, visualisation, centre, etc.)
- Max-width 960px container
- Mobile breakpoint at 600px
- `<details>/<summary>` for collapsible derivation panels, styled with emerald accent
- Standard footer: "© 2025–2026 MathsEdu.org — All rights reserved" + Terms/IP/Privacy links

### Canvas
- All canvases use `devicePixelRatio` HiDPI scaling
- Standard padding: `{left: 70, right: 30, top: 30, bottom: 50}`
- `requestAnimationFrame` for animation (no `setInterval`)
- `isFinite()` guards on all computed values
- Canvas gradients for shapes (not flat colours)

### JavaScript
- Sliders use `input` event (not `change`)
- Date pickers trigger immediate recalculation
- Dropdown changes trigger immediate recalculation
- No external libraries

### SEO
- JSON-LD `LearningResource`
- Open Graph tags (og:title, og:description, og:url, og:type, og:site_name, og:locale)
- Twitter Card tags (twitter:card, twitter:title, twitter:description)
- Canonical URL: `https://mathsedu.org/mc1_day_counts.html`
- Meta description: 140–160 characters

---

## 7. Integration Checklist

- [ ] Add page to `index.html` chapters array (Quantitative Finance section)
- [ ] Add card to `topic-finance.html`
- [ ] Add entry to `sitemap.xml` with current `<lastmod>` date
- [ ] Archive any modified files to `Archive/` with `_YYYYMMDD_HHMM` suffix before editing
- [ ] Verify all cross-links resolve (Bond Pricing, Yield Curve, Black-Scholes, Interest Rates)
- [ ] Visual spot-check at 375px mobile viewport
- [ ] Verify HiDPI rendering on Retina display

---

## 8. Cross-Links

**From MC-1 to existing pages:**
- Bond Pricing (`bond_pricing.html`) — day counts in accrued interest calculation
- Yield Curve (`yield_curve.html`) — bootstrapping uses discount factors derived from these conventions
- Black-Scholes (`black_scholes.html`) — requires continuous compounding input
- Interest Rates (`interest_rates.html`) — foundational rate concepts

**From MC-1 to future series modules:**
- MC-2 (Vol Surface) — rate/discount framework underpins vol conversion
- MC-4 (IR Vol) — normal vs lognormal vol depends on rate convention
- MC-7 (Bootstrapping) — discount factors require consistent day count and compounding

---

## 9. Build Dependencies

MC-1 has **no dependencies** on other modules. It is the foundation for all subsequent modules in the series. Build and publish first.
