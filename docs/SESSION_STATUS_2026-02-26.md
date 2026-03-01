# Session Status Report — 26 February 2026

## Overview

Working on `brownian_motion.html` (Chapter 11, Topic 2: Random Walks & Brownian Motion) for mathsedu.org. The page has 5 sections with 8 interactive canvases. We are reviewing each graph individually against finance simulation best practices.

---

## Section 1: The Random Walk — UNDER REVIEW (mostly done)

### Current State
Section 1 has been substantially reworked across several iterations. The latest version implements:

**Formula:** `S(t+1) = S(t) + S(t) × (σ/√252) × ε`
- Multiplicative random walk — step size scales with current price S(t)
- ε ~ N(0,1) standard normal noise (not ±1 coin flips)
- σ = annual volatility, converted to per-step via √Δt

**Parameters (sliders):**
- S₀: price today (£1–£100, default £50)
- σ: annual volatility (0–30%, default 10%)
- Number of paths: 30–100 (default 50)
- Speed slider: removed (fixed at constant speed)

**Step frequency toggle:** Daily (1d), Weekly (5d), Monthly (20d) buttons
- Δt = 1/252, 5/252, or 20/252 respectively
- X-axis always shows trading days elapsed
- Max simulation: 252 trading days (1 year)

**Seed control (reproducibility):**
- Numeric seed input + "Lock Seed" toggle button
- Seeded PRNG: mulberry32 algorithm + Box-Muller for N(0,1)
- Each path gets a distinct deterministic seed (baseSeed + i × 7919)
- When locked: identical paths every run (gold indicator on canvas)
- When unlocked: random seed each run (displayed so user can lock if interesting)

**Stats displayed:** Step count (with days elapsed), Frequency, Paths, Spread (max−min), ±2σ√T envelope, Sample mean

**Insight boxes:**
1. Main insight: √t scaling law, step scales with S(t), standard error discussion
2. Reproducibility (SR 11/7 / SS1/23): regulatory context for seed locking
3. References: Hull Ch. 14, Shreve Ch. 5, PRA SS1/23

**Canvas features:**
- S₀ reference line (dashed)
- ±2σ√T shaded envelope with dashed borders
- Envelope label showing current value
- Seed lock indicator when active
- Frequency indicator (Daily/Weekly/Monthly with Δt)
- Thin semi-transparent paths when >30 paths to avoid clutter

### What might still need review on Section 1
- User hasn't confirmed the latest changes look good yet (speed removal, etc.)
- Yahoo Finance integration noted for future edition (live S&P 500 / VIX)

---

## Sections 2–5: NOT YET REVIEWED

These sections exist and are functional but have **not** been reviewed against the finance simulation principles. They need the same treatment as Section 1.

### Section 2: Scaling to Brownian Motion
- Currently shows a single path with adjustable Δt (6 levels from 1 to 0.001)
- Demonstrates convergence from discrete random walk to continuous BM
- **Needs:** Daily stepping framing, formula display, references, seed control, potentially σ parameter

### Section 3: Geometric Brownian Motion — The Stock Price Model
- Already closest to the target conventions (has μ, σ sliders, formula in header)
- 1–50 paths (needs 30–100), 250 steps over 1 year
- Theory vs Reality toggle panel (fat tails, vol clustering, negative skew)
- Terminal price histogram on right edge
- **Needs:** Seed control, step frequency toggle, daily framing, formula block below canvas, references, path count range adjustment

### Section 4: Properties of Brownian Motion
- 4a: Continuous Everywhere (zoom visualisation)
- 4b: Differentiable Nowhere (zoom + secant lines showing jaggedness)
- 4c: Quadratic Variation = t (animated partition refinement)
- These are more mathematical/theoretical — may need lighter touch on finance framing
- **Needs:** Review whether finance simulation principles apply here or if these stay as mathematical demonstrations

### Section 5: Beyond Standard Brownian Motion
- 5a: Ornstein-Uhlenbeck (mean-reverting process)
  - Already fixed: all paths start from same X₀ (not spread across term structure)
  - Has θ, μ, σ, X₀ sliders and formula display
  - Insight mentions co-movement belongs in Interest Rates page
  - **Needs:** Seed control, daily stepping, references, path count (currently fixed at 10)

- 5b: Jump Diffusion (Merton Model)
  - Has λ (jumps/year), jump mean, jump std sliders
  - Red dots mark jump events
  - Currently 10 paths, 250 steps
  - **Needs:** Seed control, daily stepping, references, path count increase, S₀ slider

---

## Key Design Principles Established This Session

These apply to **all** finance simulation graphs going forward:

1. **Daily time steps** — simulate one trading day at a time (252 days/year), with option for weekly (5d) and monthly (20d)
2. **30–100 paths** — minimum for meaningful standard error
3. **Starting point = "price today"** — S₀ is always the current price
4. **Show the formula** — display the exact equation being simulated, colour-coded (green=price, gold=volatility, cyan=noise)
5. **Sliders = simulation coefficients** — σ, μ, θ etc. as interactive parameters
6. **Seed control** — lockable seed for reproducibility (mulberry32 + Box-Muller)
7. **References** — cite Hull, Shreve, regulatory docs (PRA SS1/23 / SR 11/7)
8. **Step scales with S(t)** — multiplicative, not additive (for price simulations)

---

## Finance Domain Knowledge Shared

- **SR 11/7 / SS1/23:** PRA's model risk management framework requires reproducible, explainable model outputs. Fixed seeds essential for audit trails and "glass box" transparency.
- **OU process:** Start all paths from same point. Multiple starting points implies different term structure points needing co-movement / no-arbitrage modelling — that belongs in the Interest Rates page.
- **Bond discounting:** Show coupon + bullet at maturity (not face value every year). Already fixed in `compound_interest.html`.
- **Volatility calibration:** σ between 0–30% for equities is reasonable. VIX gives market-implied vol.
- **Future enhancement:** Link to Yahoo Finance for live S&P 500 starting price and VIX-implied volatility.
- **Skill publishing:** Plan to package financial simulation conventions as a reusable Claude Code skill at the end of collaboration.

---

## Files Modified This Session

| File | Status |
|------|--------|
| `brownian_motion.html` | Heavily modified (Section 1 reworked 3×, Section 5 added previously) |
| `compound_interest.html` | Modified earlier (Section 3 discounting redesign — done) |
| `index.html` | Modified earlier (brownian_motion entry activated — done) |

## Files Created This Session

| File | Purpose |
|------|---------|
| `docs/SESSION_STATUS_2026-02-26.md` | This status report |

## Memory Files

| File | Purpose |
|------|---------|
| `~/.claude/.../memory/MEMORY.md` | Project overview, user preferences, key files |
| `~/.claude/.../memory/financial-simulation-conventions.md` | Full simulation conventions, seeded PRNG code, model details |

---

## Next Steps (when session resumes)

1. **Confirm Section 1** — user reviews latest changes (speed removed, formula fixed)
2. **Section 2** — apply finance simulation principles (or decide if this stays mathematical)
3. **Section 3 (GBM)** — add seed control, step frequency, path count, references
4. **Section 4 (Properties)** — decide scope of changes
5. **Section 5a (OU)** — add seed control, daily stepping, path count, references
6. **Section 5b (Jump Diffusion)** — add seed control, daily stepping, S₀ slider, path count, references
7. **Final pass** — consistency check across all sections
8. **Commit** — when all sections reviewed and approved
9. **Skill draft** — begin packaging conventions as a reusable skill
