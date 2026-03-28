# Market Conventions Series: MC-2 through MC-7 — Consolidated Design Spec

**Modules:** MC-2, MC-3, MC-4, MC-5, MC-6, MC-7 (completing the 7-module series)
**Date:** 28 March 2026
**Status:** Design approved, pending implementation
**Prerequisite:** MC-1 (Day Count & Compounding) — completed and published

---

## 1. Shared Design Decisions

All modules inherit from MC-1's established patterns:

| Decision | Choice |
|----------|--------|
| Accent colour | Emerald `#10b981` (standard quant finance) |
| Page structure | Single long page per module |
| Derivation panels | Native `<details>/<summary>` |
| Interactive tools | Inline with narrative |
| Template basis | `mc1_day_counts.html` / `bond_pricing.html` pattern |
| CSS | Reuse MC-1's full CSS block (series-nav, dcf-table, form-row, ref-table, step, details, etc.) |
| Series nav | 7-item horizontal bar; active module highlighted, others linked or muted |
| Footer | Standard "© 2025–2026 MathsEdu.org" + Terms/IP/Privacy |
| SEO | JSON-LD LearningResource, OG tags, Twitter cards, canonical URL |
| Language | British English (`en-GB`) throughout |
| Canvas | HiDPI via `devicePixelRatio`, padding `{left:70, right:30, top:30, bottom:50}` |
| Animation | `requestAnimationFrame` only, `cancelAnimationFrame` on replay |
| Events | Sliders on `input`, dropdowns on `input` + `change` |
| Guards | `isFinite()` on all displayed computed values |

### Series Navigation Updates

As each module is built, previously-built modules become `<a>` links in the series nav. The active module uses `.series-item.active`. Future unbuilt modules remain `.series-item.future` with `pointer-events: none`.

### Shared JavaScript Utilities

Several modules need the same mathematical functions. Rather than duplicating across files (since each page is self-contained), each page includes its own copy of any needed utility:

- **Cumulative normal CDF `N(x)`** — needed by MC-2, MC-3, MC-4, MC-5, MC-6
- **Inverse normal CDF `Ninv(p)`** — needed by MC-2, MC-3
- **Black-76 formula** — needed by MC-4, MC-6
- **Bachelier formula** — needed by MC-4
- **Bootstrapping solver** — needed by MC-5, MC-7

---

## 2. Build Order (Dependency Graph)

```
MC-1 (done)
  ├── MC-2 (Vol Surface)        ─── Batch 1
  ├── MC-4 (IR Vol)             ─── Batch 1
  ├── MC-6 (Commodities)        ─── Batch 1
  │
  ├── MC-3 (FX Options)         ─── Batch 2 (depends on MC-2)
  ├── MC-7 (Bootstrapping)      ─── Batch 2 (depends on MC-1 only)
  │
  └── MC-5 (Credit)             ─── Batch 3 (depends on MC-7)
```

**Batch 1:** MC-2 + MC-4 + MC-6 (all independent, depend only on MC-1)
**Batch 2:** MC-3 + MC-7 (MC-3 depends on MC-2 for vol surface language; MC-7 depends only on MC-1)
**Batch 3:** MC-5 (depends on MC-7 for discount factor framework)

---

## 3. MC-2: Volatility Quoting — Surface to Model Input

**File:** `mc2_vol_surface.html`
**Difficulty:** Advanced (3/4 dots)
**Title:** "Volatility Quoting: Surface to Model Input"
**Subtitle:** "What traders mean by 'vol' — and how to turn it into a model input"
**Meta description:** "Convert between strike, delta, and moneyness representations. Build and explore the volatility surface from market quotes with interactive tools." (148 chars)
**Canonical:** `https://mathsedu.org/mc2_vol_surface.html`

### Section Architecture (8 sections)

**Section 1: Introduction — Why Markets Quote Vol**
- Option prices are not comparable across strikes, maturities, or underlyings
- Implied vol normalises by removing directional, time, and magnitude effects
- "Implied vol is not a model prediction — it is a market quote expressed in a convenient unit"
- Insight box: relationship between vol and the information content of option prices

**Section 2: Strike Representations**
Table (`.dcf-table` style):

| Representation | Definition | When Used |
|---------------|-----------|-----------|
| Absolute Strike (K) | Actual price level | Equity options, physically settled |
| Moneyness (K/F) | Strike / Forward | SABR models, academic literature |
| Delta (Δ) | Black-Scholes delta at that strike | FX options, OTC markets |
| Standard Deviations | Distance from ATM in σ√T units | Model-consistent but needs vol |

Collapsible `<details>`: "Log-moneyness ln(K/F) and why models prefer it" — explains the symmetry properties.

**Section 3: Converting Delta to Strike**
Core formula in `.formula-block`:
```
K = F × exp(−N⁻¹(Δ_call) × σ√T + ½σ²T)
```
where N⁻¹ is the inverse cumulative normal function.

Worked example: 25-delta call with F=100, σ=20%, T=1y, r=5%:
- N⁻¹(0.25) = −0.6745
- K = 100 × exp(0.6745 × 0.20 × 1.0 + 0.5 × 0.04 × 1.0) = 100 × exp(0.1549) = 116.76

Collapsible `<details>`: "Full derivation from Black-Scholes delta to strike" — inverts Δ = N(d₁) to solve for K.

**Section 4: Interactive — Strike Converter**
Inputs:
- Delta (number, default 0.25)
- Spot/Forward toggle + value (number, default 100)
- Implied vol (number, default 20%)
- Maturity in years (number, default 1.0)
- Risk-free rate (number, default 5%)

Output panel (step-by-step in `.step` divs):
- Step 1: N⁻¹(Δ) = −0.6745
- Step 2: σ√T = 0.2000
- Step 3: K = F × exp(−N⁻¹(Δ) × σ√T + ½σ²T) = 116.76
- Result: Absolute strike, Log-moneyness ln(K/F)

**Section 5: The Vol Surface**
- Black-Scholes assumes flat vol — markets reject this
- Volatility skew: equity (downward), FX (symmetric smile), commodity (varies)
- Term structure: near-dated vols spike more, mean reversion
- Canvas illustration: schematic 2D smile for equity vs FX (static, not interactive)

**Section 6: Interactive — Vol Surface Explorer**
Inputs:
- ATM vol (slider, 5%–60%, default 20%)
- Skew parameter (slider, −0.5 to 0.5, default −0.15 for equity)
- Smile parameter (slider, 0 to 0.3, default 0.05)
- Maturity range (slider, 0.1y–5y)

Canvas (700 × 400): 3D wireframe surface rendered on 2D canvas with perspective projection.
- X-axis: log-moneyness (−0.5 to +0.5)
- Y-axis: maturity (0.1y to 5y)
- Z-axis: implied vol
- Surface coloured by vol level (low=cyan, ATM=emerald, high=pink)
- Mouse drag to rotate the view (track mouse movement for azimuth/elevation)

Result panel: hover coordinates showing σ(K,T) at cursor position.

**Section 7: Where It Matters**
Explain section:
- SABR model: requires vol surface as calibration target
- Local vol: Dupire's formula inverts the surface to extract local vol
- Risk management: P&L attribution requires correct vol surface interpolation

**Section 8: Cross-Links & Explore Next**
- volatility_smiles.html, black_scholes.html, MC-1 (mc1_day_counts.html), MC-3 (mc3_fx_options.html — future link initially)

### Key JavaScript Components
- `normcdf(x)` — cumulative normal CDF (rational approximation, Abramowitz & Stegun 26.2.17)
- `norminv(p)` — inverse normal CDF (rational approximation, Beasley-Springer-Moro)
- `deltaToStrike(delta, F, sigma, T, r)` — the core conversion
- `buildSurface(atmVol, skew, smile, tMin, tMax)` — generates σ(K,T) grid
- `render3D(surface, azimuth, elevation)` — perspective wireframe on canvas

---

## 4. MC-3: FX Options — Delta Conventions & Vol Pillars

**File:** `mc3_fx_options.html`
**Difficulty:** Advanced (3/4 dots)
**Title:** "FX Options: Delta Conventions & Vol Pillars"
**Subtitle:** "How three market quotes define an entire volatility surface"
**Meta description:** "Recover the FX vol smile from ATM, risk reversal, and butterfly quotes. Compare delta conventions and ATM definitions with interactive tools." (148 chars)
**Canonical:** `https://mathsedu.org/mc3_fx_options.html`

### Section Architecture (9 sections)

**Section 1: Introduction — Why FX Is Its Own World**
- FX vol convention compresses an entire surface into 3 quotes per maturity
- "What appears to be a single volatility is actually a compressed description of an entire vol surface"

**Section 2: The Three Pillars**
Table:

| Pillar | Market Notation | Meaning |
|--------|----------------|---------|
| ATM Straddle | σ_ATM | Volatility at the at-the-money strike |
| Risk Reversal | 25Δ RR / RR25 | Skew: call vol minus put vol |
| Butterfly | 25Δ BF / Fly25 | Curvature: average wing vol minus ATM |

Recovery formulae in `.formula-block`:
```
σ_call(25Δ) = σ_ATM + BF25 + ½ × RR25
σ_put(25Δ)  = σ_ATM + BF25 − ½ × RR25
```

Worked example: EURUSD 1y with σ_ATM=8.5%, RR25=−1.2%, BF25=0.3%:
- 25Δ call vol = 8.5 + 0.3 + (−0.6) = 8.2%
- 25Δ put vol = 8.5 + 0.3 + 0.6 = 9.4%

**Section 3: The ATM Convention Problem**
Table:

| Convention | Definition | Usage |
|-----------|-----------|-------|
| Delta-Neutral Straddle (DNS) | K where Δ_call + Δ_put = 0 | Most major pairs |
| ATM Forward (ATMF) | K = F | Simple but not hedging-neutral |
| ATM Spot (ATMS) | K = S | Only correct when T → 0 |

Derivation: K_DNS = F × exp(½σ²T) — the ATM straddle strike is slightly above forward.
Collapsible `<details>`: "Why DNS differs from forward" — lognormal skewness argument.

**Section 4: The Premium Convention Problem**
- Premium-excluded delta: Δ = ∂C/∂S (standard Black-Scholes)
- Premium-included delta: Δ_prem = Δ − C/S (used in USDJPY, USDCAD, etc.)
- A 25-delta option maps to different strikes depending on convention
- Difference: 2–4 delta points for typical 1-year maturities
- Collapsible `<details>`: "Derivation of premium-included delta adjustment"

**Section 5: Interactive — FX Vol Surface Builder**
Inputs:
- ATM vol (number, default 8.5%)
- RR25 (number, default −1.2%)
- BF25 (number, default 0.3%)
- RR10 (number, default −2.0%, optional — checkbox to enable)
- BF10 (number, default 0.8%, optional — checkbox to enable)
- Forward rate (number, default 1.0800)
- Maturity (number, default 1.0y)

Canvas (700 × 300): Vol smile curve with labelled strikes.
- X-axis: delta (from 10Δ put to 10Δ call) or absolute strike
- Y-axis: implied vol
- Points: ATM, 25Δ call, 25Δ put, (optionally 10Δ call, 10Δ put) plotted and labelled
- Interpolating curve through the points (cubic spline)
- Vertical dashed line at ATM strike

Result panel: Table showing strike, delta, and vol at each pillar point.

**Section 6: Interactive — Delta Convention Toggle**
Uses same inputs as Section 5. Two overlaid smile curves:
- Curve 1 (emerald): premium-excluded delta
- Curve 2 (gold): premium-included delta
- Labels showing the strike difference at 25Δ

**Section 7: Interactive — ATM Convention Comparison**
Inputs: Forward rate, spot rate, vol, maturity.
Output: Three strikes side by side (DNS, ATMF, ATMS) with numerical difference in pips.

**Section 8: Full Surface Recovery**
Collapsible `<details>`: 4-step derivation:
1. Recover σ at 4 standard delta strikes from RR/BF
2. Convert delta strikes to absolute strikes (using MC-2 formula)
3. Fit interpolating function through 5 points
4. Output: full σ(K) smile for this maturity

**Section 9: Cross-Links & Explore Next**
- MC-2, MC-1, volatility_smiles.html, black_scholes.html

### Key JavaScript Components
- `normcdf(x)`, `norminv(p)` — same implementations as MC-2
- `pillarsToVols(atm, rr25, bf25, rr10, bf10)` — recovers wing vols
- `deltaToStrikeAdj(delta, F, sigma, T, premIncluded)` — delta-to-strike with premium convention
- `dnsStrike(F, sigma, T)` — DNS ATM strike
- `cubicSplineInterp(points)` — interpolation for smile rendering

---

## 5. MC-4: Interest Rate Vol — Normal vs Lognormal

**File:** `mc4_ir_vol.html`
**Difficulty:** Advanced (3/4 dots)
**Title:** "Interest Rate Volatility: Normal vs Lognormal"
**Subtitle:** "When rates went negative, the models had to change — and so did the conventions"
**Meta description:** "Convert between lognormal (Black) and normal (Bachelier) volatility. Calibrate SABR to swaption smiles with interactive tools and step-by-step working." (155 chars)
**Canonical:** `https://mathsedu.org/mc4_ir_vol.html`

### Section Architecture (9 sections)

**Section 1: Introduction — The Problem That Broke Black's Model**
- 2014: CHF and EUR rates go negative
- Black model assumes lognormal → rates always positive → model breaks
- Industry adopts Bachelier (normal) model → new convention: basis-point volatility
- Insight box: "Today, practitioners routinely quote IR options in both conventions. This module derives the relationship."

**Section 2: Two Models, Two Vol Conventions**
Table (`.dcf-table` style):

| Attribute | Black (Lognormal) | Bachelier (Normal) |
|-----------|-------------------|-------------------|
| Process | dF = σ_ln × F × dW | dF = σ_n × dW |
| Distribution | Lognormal (F > 0) | Normal (F can be negative) |
| Vol Unit | % (percentage of rate) | bp (basis points per year) |
| ATM Call Price | F × σ_ln × √(T/2π) | σ_n × √(T/2π) |
| When to Use | Rates clearly positive | Rates near or below zero |

Collapsible `<details>`: "The stochastic process behind each model" — full SDE specification and solution.

**Section 3: Approximate Conversion**
Core formula in `.formula-block`:
```
σ_n ≈ σ_ln × F   (bp vol ≈ % vol × rate level)
```

Worked example: 10y swap ATM at F=3.00%, σ_ln=30%:
- σ_n ≈ 30% × 3.00% × 10,000 = 90 bp/year
- The ×10,000 factor converts from decimal to bp units

Collapsible `<details>`: "The exact correction term" — grows with vol and maturity; formula and magnitude in typical scenarios.

**Section 4: Interactive — Vol Converter**
Inputs:
- ATM forward rate (number, default 3.00%)
- Lognormal vol (number, default 30%)
- Maturity (number, default 10y)

Output:
- Normal vol in bp (approximate)
- Normal vol in bp (exact, via price matching)
- Approximation error in bp
- Step-by-step working

**Section 5: Interactive — Bachelier vs Black Price Comparison**
Inputs:
- Strike (slider, centred on ATM)
- Forward rate (slider, −1% to 10%, default 3%)
- Vol (slider)
- Maturity (slider)

Canvas (700 × 300): Two price curves as forward rate varies:
- Black price (emerald) — goes to zero as F→0, undefined for F<0
- Bachelier price (cyan) — remains well-defined for all F
- Shaded region showing price difference
- Vertical dashed line at F=0 showing the breakdown point

**Section 6: SABR Framework**
- Parameters {α, β, ρ, ν}: α=vol of vol at ATM, β=backbone, ρ=correlation, ν=vol of vol
- β as interpolation: β=1 lognormal, β=0 normal, 0<β<1 CEV
- Hagan et al. 2002 approximation formula (in `.formula-block`, with colour-coded terms)
- Collapsible `<details>`: "Full SABR implied vol formula" — the complete Hagan expression with all correction terms

**Section 7: Interactive — SABR Calibration Tool**
Inputs:
- ATM forward rate (number, default 3.00%)
- ATM vol (number, default 90bp or 30%)
- 25Δ call vol (number)
- 25Δ put vol (number)
- β (slider, 0 to 1, default 0.5)

Calibration: Newton-Raphson to fit {α, ρ, ν} to the 3 market vols (β fixed by user).

Canvas (700 × 300): Calibrated smile showing:
- Market points (circles)
- SABR fit (smooth curve)
- Toggle: show in lognormal vol or normal vol

Result panel: Calibrated parameters {α, ρ, ν} and goodness of fit.

**Section 8: Swaption Convention Details**
- Physical vs cash settlement: different annuity in pricing formula
- PVBP annuity: depends on discount curve (OIS vs IBOR)
- Coterminal vs constant maturity
- Table summarising key convention differences

**Section 9: Cross-Links & Explore Next**
- MC-1, MC-2, black_scholes.html, yield_curve.html

### Key JavaScript Components
- `blackCall(F, K, sigma, T)` — Black-76 call price
- `bachelierCall(F, K, sigmaN, T)` — Bachelier call price
- `blackToNormal(F, K, sigmaLN, T)` — exact conversion via price matching (bisection)
- `sabrImpliedVol(F, K, T, alpha, beta, rho, nu)` — Hagan formula
- `calibrateSABR(F, T, beta, marketVols, marketStrikes)` — Newton-Raphson for {α, ρ, ν}
- `normcdf(x)` — cumulative normal

---

## 6. MC-6: Commodity Options & Black-76

**File:** `mc6_commodities.html`
**Difficulty:** Intermediate (2/4 dots)
**Title:** "Commodity Options & Black-76"
**Subtitle:** "Pricing options on futures — where cost-of-carry changes everything"
**Meta description:** "Price commodity options with Black-76 and compare to Black-Scholes. Explore Asian option pricing and the cost-of-carry relationship with interactive tools." (157 chars)
**Canonical:** `https://mathsedu.org/mc6_commodities.html`

### Section Architecture (8 sections)

**Section 1: Introduction — Why Commodities Are Different**
- Options written on futures, not spot
- Cost-of-carry arbitrage doesn't hold for oil, gas, power, agricultural products
- Black-76 (Fischer Black, 1976) prices directly on futures

**Section 2: Black-76 vs Black-Scholes**
Table:

| Attribute | Black-Scholes (1973) | Black-76 (1976) |
|-----------|---------------------|-----------------|
| Underlying | Spot price S | Futures price F |
| Drift | Risk-free rate r | None (F is already risk-neutral) |
| Call Formula | S·N(d₁) − Ke^(−rT)·N(d₂) | e^(−rT)[F·N(d₁) − K·N(d₂)] |
| d₁ | [ln(S/K) + (r+½σ²)T] / σ√T | [ln(F/K) + ½σ²T] / σ√T |
| Key Simplification | Requires cost-of-carry assumption | No cost-of-carry needed |

Collapsible `<details>`: "Derivation of Black-76 from Black-Scholes" — shows how replacing S with Fe^(−rT) eliminates the drift term.

**Section 3: Commodity Quoting Conventions**
Table (`.ref-table` style):

| Commodity | Quote Basis | Lot Size |
|-----------|------------|----------|
| Crude Oil (WTI/Brent) | $/barrel | 1,000 bbl |
| Natural Gas (Henry Hub) | $/MMBtu | 10,000 MMBtu |
| Gold | $/troy oz | 100 oz |
| Agricultural (Wheat, Corn) | Cents/bushel | 5,000 bu |
| Power | $/MWh | Variable |

**Section 4: Interactive — Black-76 Calculator**
Inputs:
- Futures price (number, default 80.00)
- Strike (number, default 80.00)
- Implied vol (number, default 30%)
- Maturity (number, default 0.5y)
- Risk-free rate (number, default 5%)
- Call/Put toggle

Output:
- Option price (`.result-big`)
- All Greeks: Delta, Gamma, Theta, Vega, Rho
- Step-by-step: d₁, d₂, N(d₁), N(d₂), price
- Toggle: "Show Black-Scholes comparison" — displays BS price alongside with the difference

**Section 5: Asian Options (Average Price Options)**
- Why averaging: energy consumers hedge average prices, not single-expiry
- Cheaper than vanilla (averaging reduces variance)
- Moment-matching approach: match mean and variance of average to lognormal
- Effective vol: σ_eff²T_eff = Var(ln A)
- Collapsible `<details>`: "Derivation of the moment-matching approximation"

**Section 6: Interactive — Asian Option Pricer**
Inputs:
- Futures price (number, default 80.00)
- Strike (number, default 80.00)
- Vol (number, default 30%)
- Number of fixings (dropdown: monthly/weekly/daily over period)
- Fixing period (number, default 1.0y)
- Risk-free rate (number, default 5%)

Output:
- Asian option price (moment-matching)
- Effective vol (the vol that recovers the Asian price in a standard Black-76)
- Vanilla equivalent price for comparison
- Step-by-step: mean of average, variance of average, effective vol, modified Black-76 price

**Section 7: Interactive — Cost-of-Carry Explorer**
Inputs:
- Spot price (number, default 80.00)
- Risk-free rate (slider, 0–10%)
- Storage cost (slider, 0–5%)
- Convenience yield (slider, 0–10%)
- Maturity (slider, 0.1–5y)

Canvas (700 × 300):
- X-axis: maturity
- Two curves: Forward price F = S × exp((r + c − y)T), and spot price (horizontal line)
- Shows contango (F > S) vs backwardation (F < S) as convenience yield changes
- Annotated regions

Result panel: Forward price at selected maturity, Black-76 price vs Black-Scholes price.

**Section 8: Cross-Links & Explore Next**
- MC-1, MC-2, black_scholes.html

### Key JavaScript Components
- `normcdf(x)` — cumulative normal CDF
- `black76Call(F, K, sigma, T, r)` — Black-76 call price
- `black76Put(F, K, sigma, T, r)` — Black-76 put price
- `black76Greeks(F, K, sigma, T, r, isCall)` — all Greeks
- `bsCall(S, K, sigma, T, r)` — Black-Scholes for comparison
- `asianMomentMatch(F, K, sigma, T, r, nFixings)` — moment-matching Asian price
- `effectiveVol(asianPrice, F, K, T, r)` — implied effective vol via bisection

---

## 7. MC-7: Swap Bootstrapping & Curve Construction

**File:** `mc7_bootstrapping.html`
**Difficulty:** Advanced (3/4 dots)
**Title:** "Swap Bootstrapping & Curve Construction"
**Subtitle:** "From par swap rates to discount factors — the foundation of every fixed income derivative"
**Meta description:** "Bootstrap discount factors from par swap rates. Compare OIS and IBOR curves in the multi-curve framework. Interactive DV01 calculator with tenor bucketing." (157 chars)
**Canonical:** `https://mathsedu.org/mc7_bootstrapping.html`

### Section Architecture (9 sections)

**Section 1: Introduction — Why This Is Central**
- Every fixed income derivative requires a discount factor curve
- Markets quote par swap rates, not discount factors
- The bootstrapping procedure converts one to the other
- Insight box: "This is the single most important numerical procedure in fixed income."

**Section 2: Par Swap Rate Defined**
Core formula in `.formula-block`:
```
S_T = (1 − D(T)) / Σᵢ D(tᵢ) × δᵢ
```
where D(t) = discount factor, δᵢ = day count fraction (MC-1 convention).

Explanation: the fixed rate that makes a swap zero-value at inception. This formula must be inverted.

**Section 3: Bootstrapping Algorithm**
Step-by-step procedure:
1. Start with overnight/short-end instruments (OIS rates, deposit rates)
2. For each new tenor T_n, solve for D(T_n) from the par swap rate equation
3. All shorter-dated D(T_i) already established
4. For off-grid tenors, interpolation (log-linear on discount factors)

Worked example: USD swap rates at 1y, 2y, 3y, 5y, 7y, 10y with indicative rates.
- Step-by-step bootstrap showing each D(T) solved sequentially
- Numerical values in `.math-line` format

Collapsible `<details>`: "Solving for D(T_n) algebraically" — rearranges the par swap formula to isolate the unknown discount factor.

**Section 4: Interactive — Swap Bootstrapper**
Inputs:
- Par swap rates at standard tenors (6 text inputs for 1y, 2y, 3y, 5y, 7y, 10y; defaults: 4.50%, 4.25%, 4.10%, 3.90%, 3.80%, 3.75%)
- Day count convention dropdown (30/360, Act/360, Act/365F)
- Payment frequency dropdown (Annual, Semi-annual)

Canvas (700 × 340): Three curves overlaid:
- Discount factors D(T) (emerald)
- Zero rates r(T) (cyan)
- Forward rates f(T₁,T₂) (gold)
- X-axis: maturity (0–10y)
- Hover tooltip showing exact values at cursor

Result panel: Table of tenor | D(T) | Zero Rate (CC) | Zero Rate (Annual) | 1y Forward Rate

**Section 5: Curve Representations**
Table (`.ref-table` style):

| Representation | Formula |
|---------------|---------|
| Discount Factor | D(T) — directly bootstrapped |
| Zero Rate (Continuous) | r(T) = −ln(D(T)) / T |
| Zero Rate (Annual) | r_a(T) = D(T)^(−1/T) − 1 |
| Forward Rate | f(T₁,T₂) = [D(T₁)/D(T₂) − 1] / δ₁₂ |
| Par Swap Rate | S_T — the market observable |

All conversion formulae shown, linking back to MC-1 compounding conventions.

**Section 6: The Multi-Curve Framework**
- Pre-2008: single curve for both discounting and projection
- Post-2008: LIBOR-OIS basis widened to 365bp during Lehman crisis
- Modern framework: OIS curve for discounting, IBOR/term rate curves for projection
- Table: OIS curve (Fed Funds, ESTR, SONIA) vs projection curves (3M SOFR, 6M EURIBOR)
- Impact: 1–5bp DV01 difference on a standard 10y swap

**Section 7: Interactive — Multi-Curve Toggle**
Inputs:
- OIS rates at standard tenors (6 inputs)
- 3M projection rates at standard tenors (6 inputs, slightly higher defaults showing the basis)

Canvas (700 × 300): Two zero-rate curves overlaid:
- OIS curve (emerald)
- Projection curve (cyan)
- Shaded basis between them (gold fill)
- Basis in bp shown at each tenor point

**Section 8: Interactive — DV01 Calculator**
Inputs:
- Swap notional (number, default £10,000,000)
- Swap maturity (dropdown: 2y, 3y, 5y, 7y, 10y)
- Fixed rate (number, auto-filled from bootstrapped par rate)
- Payment frequency (dropdown)

Output:
- Total DV01 (`.result-big`)
- DV01 bucketed by tenor (bar chart on canvas)
- Step-by-step: shows the bump-and-reprice methodology

**Section 9: Cross-Links & Explore Next**
- MC-1, yield_curve.html, bond_pricing.html, MC-5 (future link initially)

### Key JavaScript Components
- `bootstrapCurve(parRates, tenors, dcConv, freq)` — sequential bootstrapping solver
- `discountFactor(T, curve)` — interpolated D(T) from bootstrapped curve (log-linear)
- `zeroRate(T, curve)` — continuous zero rate from D(T)
- `forwardRate(T1, T2, curve)` — forward rate between two tenors
- `parSwapRate(T, curve, freq, dcConv)` — par rate from curve (for verification)
- `computeDV01(notional, maturity, fixedRate, curve, freq)` — total and bucketed DV01

---

## 8. MC-5: Credit Derivatives — Spread to Upfront

**File:** `mc5_credit.html`
**Difficulty:** Advanced (3/4 dots)
**Title:** "Credit Derivatives: Spread to Upfront"
**Subtitle:** "From running spreads to standardised coupons — how the CDS market changed after 2009"
**Meta description:** "Convert CDS par spreads to upfront payments. Bootstrap hazard rates from market quotes. Explore recovery rate sensitivity with interactive calculators." (155 chars)
**Canonical:** `https://mathsedu.org/mc5_credit.html`

### Section Architecture (8 sections)

**Section 1: Introduction — Historical Background**
- Pre-2009: CDS quoted as running par spreads (zero upfront)
- 2009 ISDA Big Bang (NA) and Small Bang (EU): standardised to 100bp or 500bp fixed coupons + upfront payment
- "From 'what spread makes this zero-cost?' to 'what upfront payment, given this standard coupon, makes this zero-cost?'"

**Section 2: Survival Probability Framework**
Core formula in `.formula-block`:
```
Q(t) = exp(−∫₀ᵗ h(s) ds)
```
where h(t) is the hazard rate (instantaneous default intensity).

For piecewise-constant hazard rates:
```
Q(t_{i+1}) = Q(t_i) × exp(−h_i × (t_{i+1} − t_i))
```

Collapsible `<details>`: "Full derivation of the survival probability from the hazard rate" — including the connection to probability theory (hazard rate = conditional default intensity given survival).

**Section 3: Par Spread Formula**
```
s_par = Protection Leg PV / Risky Annuity (RPV01)
```

Protection Leg PV = (1 − R) × ∫₀ᵀ D(t) × (−dQ(t)), R = recovery (standard 40%)
Risky Annuity (RPV01) = Σ D(tᵢ) × Q(tᵢ) × Δtᵢ

Collapsible `<details>`: "Derivation of both legs" — step-by-step integration with the piecewise hazard rate model.

**Section 4: Upfront Conversion**
Core formula in `.formula-block`:
```
U = (s_par − C_std) × RPV01
```

- Positive U: protection buyer pays upfront (spread > coupon)
- Negative U: protection seller pays upfront (spread < coupon)
- Accrued interest adjustment explained

Worked example: 5y CDS, par spread 250bp, standard coupon 100bp, RPV01 = 4.25:
- U = (250 − 100) × 4.25 = 637.5bp = 6.375% of notional
- On £10m notional: £637,500 upfront

**Section 5: Interactive — CDS Calculator**
Inputs:
- Par spread OR upfront (toggle, number, default 250bp)
- Standard coupon (dropdown: 100bp or 500bp)
- Recovery rate (slider, 0%–80%, default 40%)
- Maturity (dropdown: 1y, 3y, 5y, 7y, 10y, default 5y)
- Risk-free rate (number, default 4%, for discounting)

Output:
- Upfront (or par spread, depending on input mode) — `.result-big`
- RPV01
- Survival probability at maturity
- Step-by-step: hazard rate → Q(t) → Protection Leg → RPV01 → result

**Section 6: Interactive — Hazard Rate Bootstrapper**
Inputs:
- CDS par spreads at multiple tenors (5 inputs for 1y, 3y, 5y, 7y, 10y)
- Recovery rate (slider, default 40%)
- Discount curve (use flat rate for simplicity, number, default 4%)

Canvas (700 × 300): Two curves:
- Survival probability Q(t) (emerald, decreasing from 1)
- Piecewise hazard rate h(t) (cyan, step function)
- X-axis: maturity (0–10y)

Result panel: Table of tenor | Par Spread | Hazard Rate | Q(t)

Algorithm: Sequential bootstrapping — same pattern as MC-7's discount factor bootstrap but solving for hazard rates instead.

**Section 7: Interactive — Recovery Sensitivity**
Inputs:
- Par spread (number, default 250bp)
- Standard coupon (dropdown)
- Maturity (dropdown)
- Recovery rate (slider, 10%–80%)

Canvas (700 × 250): Upfront payment (y-axis) vs recovery rate (x-axis).
- Curve showing how upfront changes as recovery moves
- Vertical dashed line at current recovery setting
- Annotated: "Higher recovery → lower protection value → lower upfront"

**Section 8: Cross-Links & Explore Next**
- MC-1, MC-7 (mc7_bootstrapping.html), bond_pricing.html, yield_curve.html

### Key JavaScript Components
- `survivalProb(t, hazardRates, tenors)` — Q(t) from piecewise hazard rates
- `protectionLegPV(T, hazardRates, tenors, recovery, discCurve)` — numerical integration
- `riskyAnnuity(T, hazardRates, tenors, discCurve, freq)` — RPV01 calculation
- `parSpread(T, hazardRates, tenors, recovery, discCurve)` — s_par from hazard curve
- `upfrontFromSpread(spread, coupon, rpv01)` — the core conversion
- `bootstrapHazardRates(parSpreads, tenors, recovery, discCurve)` — sequential solver
- `normcdf(x)` — not needed for CDS but included if referenced

---

## 9. Integration Checklist (All 6 Modules)

For each module, after creation:

- [ ] Add to `index.html` Quantitative Finance topics array
- [ ] Add card to `topic-finance.html` card-grid
- [ ] Add to `topic-finance.html` Suggested Learning Order (appropriate position)
- [ ] Add to `sitemap.xml`
- [ ] Add to `level-a-level.html` (Intermediate) or `level-advanced.html` (Advanced) as appropriate
- [ ] Update series navigation in ALL previously-built MC pages (convert `.future` to `<a>` link)
- [ ] Archive all modified files before editing

### Difficulty → Level Page Mapping

| Module | Difficulty | Level Page |
|--------|-----------|------------|
| MC-2 | Advanced (3/4) | level-advanced.html |
| MC-3 | Advanced (3/4) | level-advanced.html |
| MC-4 | Advanced (3/4) | level-advanced.html |
| MC-5 | Advanced (3/4) | level-advanced.html |
| MC-6 | Intermediate (2/4) | level-a-level.html |
| MC-7 | Advanced (3/4) | level-advanced.html |

### Series Navigation State After All Modules Built

All 7 `.series-item` elements become `<a>` links. The active module retains `.active` class; all others get a new `.built` class (styled identically to `.future` but with `pointer-events: auto` and a hover state).

New CSS class needed (add to every MC page's `<style>` block):
```css
a.series-item.built{background:rgba(255,255,255,0.025);color:#808098;border:1px solid rgba(255,255,255,0.04);text-decoration:none;cursor:pointer;display:inline-block}
a.series-item.built:hover{background:rgba(255,255,255,0.05);color:#b0b0c8}
```

**Important:** When building Batch 1 (MC-2, MC-4, MC-6), also update MC-1's series nav to link to the newly-built modules. Each subsequent batch updates all previously-built modules' series nav.

---

## 10. File Summary

| Module | File | Lines (est.) | Difficulty |
|--------|------|-------------|-----------|
| MC-2 | `mc2_vol_surface.html` | ~1200 | Advanced |
| MC-3 | `mc3_fx_options.html` | ~1300 | Advanced |
| MC-4 | `mc4_ir_vol.html` | ~1400 | Advanced |
| MC-5 | `mc5_credit.html` | ~1200 | Advanced |
| MC-6 | `mc6_commodities.html` | ~1200 | Intermediate |
| MC-7 | `mc7_bootstrapping.html` | ~1400 | Advanced |

**Total new HTML:** ~7,700 lines across 6 files
**Modified files per module:** index.html, topic-finance.html, sitemap.xml, level page, all existing MC pages (series nav updates)
