# Batch 3 — Finance Topic Page Specifications

**Scope:** 3 new interactive visualisation pages
**Status:** APPROVED (2026-03-14) — SME feedback incorporated below

---

## Overview

| # | Topic | File | Chapter | Accent | Difficulty | educationalLevel |
|---|-------|------|---------|--------|------------|-----------------|
| 15 | Risk Measures | `risk_measures.html` | Quant Finance | `#10b981` / `16,185,129` | 3 | Advanced |
| 16 | Interest Rates | `interest_rates.html` | Quant Finance | `#10b981` / `16,185,129` | 2 | Intermediate |
| 17 | Stochastic Calculus | `stochastic_calculus.html` | Quant Finance | `#10b981` / `16,185,129` | 3 | Advanced |

**Chapter conventions:** These pages follow the Quantitative Finance conventions in the skill config — daily time steps (252 trading days/year), seeded PRNG (mulberry32 + Box-Muller), show-the-formula approach, glass-box transparency, regulatory references (PRA SS1/23).

---

## 15. Risk Measures — `risk_measures.html`

**Chapter:** Quant Finance | **Accent:** `#10b981` / `16,185,129` | **Difficulty:** ●●●○

**Title:** Risk Measures
**Subtitle:** *Value at Risk, Expected Shortfall, and coherent risk*

**Meta description (155 chars):**
`Explore risk measures interactively. Visualise Value at Risk, Expected Shortfall, and coherent risk measures with Monte Carlo simulations and live controls.`

**Educational goal:** Students understand VaR as a percentile of the loss distribution, see why Expected Shortfall (CVaR) is superior, and learn the four axioms of coherent risk measures.

### Sections

#### Section 1 — The Loss Distribution
**Canvas:** `lossCanvas` (700×400)

- Histogram of portfolio returns (Monte Carlo simulated using seeded PRNG)
- Normal distribution overlay for comparison
- **Sliders:** "Expected return μ" (-10% to +20%) | "Volatility σ" (5% to 60%) | "Skewness" (-2 to +2)
- **Button:** "Normal" | "Student-t (fat tails)" | "Mixture of Normals" — changes the distribution (mixture explains real market behaviour better than skew alone)
- Left tail highlighted in pink/accent for the loss region
- **Slider:** "Number of simulations" (1,000 to 50,000) — capped at 50k for browser performance
- **Seed toggle:** Lock/unlock random seed for reproducibility
- **Result box:** Mean, Std Dev, Skewness, Kurtosis

#### Section 2 — Value at Risk (VaR)
**Canvas:** `varCanvas` (700×400)

- Same loss distribution with VaR threshold line
- **Slider:** "Confidence level" (90% to 99.9%)
- VaR line drawn vertically at the loss percentile
- Region to the left of VaR shaded in accent
- **Buttons:** "1-day VaR" | "10-day VaR" | "Annual VaR" (using √t scaling)
- **Caveat box (amber):** "√t scaling assumes independent returns with constant volatility. In real markets, volatility clustering and fat tails mean this scaling is only approximate."
- Three methods compared:
  - Empirical: percentile of the simulation sample
  - Parametric: μ - z·σ (normal assumption)
  - Monte Carlo model: from fresh simulation
- *(Note: "Historical" renamed to "Empirical" since the data is simulated, not true market history)*
- **Result box:** `VaR(95%) = £VALUE` | `VaR(99%) = £VALUE` for each method
- **Insight box:** "VaR answers: 'What is the worst loss I can expect X% of the time?' But it says nothing about how bad things get in the remaining tail. A portfolio with VaR = £1M could lose £2M or £200M in the worst cases."

#### Section 3 — Expected Shortfall (CVaR)
**Canvas:** `esCanvas` (700×400)

- Loss distribution with both VaR and ES marked
- ES shaded as the average of the tail beyond VaR
- **Slider:** "Confidence level" (linked to Section 2)
- Visually: VaR is a line, ES is the centroid of the shaded tail region
- **Buttons:** "Compare Normal vs Fat-tailed" — shows side-by-side how ES diverges more under fat tails
- **Result box:** `VaR(99%) = £VALUE` | `ES(99%) = £VALUE` | `Ratio ES/VaR = VALUE`
- **Insight box:** "Expected Shortfall is the average loss in the worst cases — it captures tail risk that VaR ignores. Under Basel III, banks must now use ES rather than VaR for market risk capital requirements."

#### Section 4 — Coherent Risk Measures
- Panel (no canvas): the four axioms displayed as styled cards:
  1. **Monotonicity** — if portfolio X always loses more than Y, then ρ(X) ≥ ρ(Y)
  2. **Translation invariance** — adding cash c reduces risk by exactly c: ρ(X + c) = ρ(X) - c
  3. **Positive homogeneity** — scaling by λ > 0 scales risk: ρ(λX) = λρ(X)
  4. **Subadditivity** — ρ(X + Y) ≤ ρ(X) + ρ(Y) — diversification never increases risk
- **Key result card:** "VaR is NOT coherent (fails subadditivity). ES IS coherent."
- **Concrete subadditivity failure example** (visually prominent): Two bonds each default with 1% probability independently. Individually: VaR₉₉ = 0 (no loss). Together: VaR₉₉ > 0 (diversification *increases* measured risk under VaR). Show this with a simple animated/interactive panel to make the shock value obvious.
- **Insight box:** "Subadditivity is the mathematical expression of diversification. A risk measure that violates it can punish you for diversifying — which is economically absurd. This is why regulators moved from VaR to ES."

#### Section 5 — What Have We Learnt?
- Summary: loss distribution → VaR → ES → coherent risk → regulatory context
- Key formulas: VaR, ES definitions
- Regulatory reference: Basel III (FRTB), PRA SS1/23
- Connections to: portfolio theory (on site), Black-Scholes (on site), Monte Carlo (on site)

**Estimated complexity:** ~1,100 lines | **Canvases:** 3

---

## 16. Interest Rates — `interest_rates.html`

**Chapter:** Quant Finance | **Accent:** `#10b981` / `16,185,129` | **Difficulty:** ●●○○

**Title:** Interest Rates
**Subtitle:** *Term structure and the mathematics of borrowing costs*

**Meta description (156 chars):**
`Explore interest rate mathematics interactively. Visualise yield curves, forward rates, discount factors, and the term structure of interest rates.`

**Educational goal:** Students understand the yield curve as a snapshot of borrowing costs across maturities, see how forward rates are implied by spot rates, and grasp discount factors as the fundamental building block.

**Reference:** `yield_curve.html`, `compound_interest.html`

### Sections

#### Section 1 — The Yield Curve
**Canvas:** `yieldCanvas` (700×400)

- Yield curve: x-axis = maturity (0 to 30 years), y-axis = yield (%)
- **Buttons:** "Normal (upward)" | "Inverted" | "Flat" | "Humped" — preset curve shapes
- **Slider:** "Short rate" (0% to 8%) | "Long rate" (0% to 8%) | "Hump position" (2 to 10 years)
- Yields interpolated using a Nelson-Siegel model
- Key maturities labelled: 3m, 1y, 2y, 5y, 10y, 30y
- **Result box:** Selected yield at each key maturity
- **Insight box:** "The yield curve reflects expectations, risk premia, and liquidity effects — not just forecasts of future interest rates. An inverted yield curve — where short rates exceed long rates — has preceded every US recession since 1955."

#### Section 2 — Discount Factors and Present Value
**Canvas:** `discountCanvas` (600×400)

- Plot of discount factor D(t) = e^(-r(t)·t) vs maturity
- Bars showing the present value of £1 received at different future dates
- **Slider:** "Payment maturity" — selects when the £1 is received
- As maturity increases: discount factor decreases (future money is worth less)
- Under different yield curves: discount factors change shape
- **Formula display:** `D(t) = exp( -∫₀ᵗ r(u) du )` — show the general form, with a note that D(t) = e^(-r(t)·t) is only exact when the instantaneous rate is constant
- **Result box:** `D(t) = e^(-r(t) × t) = VALUE` | `PV of £1 in t years = £VALUE`
- **Insight box:** "A discount factor answers: 'How much is a pound received in t years worth today?' It is the fundamental building block of all fixed-income pricing."

#### Section 3 — Forward Rates
**Canvas:** `forwardCanvas` (700×400)

- Spot yield curve and implied forward rate curve plotted together
- Forward rate: f(t₁, t₂) = [r(t₂)·t₂ - r(t₁)·t₁] / (t₂ - t₁)
- **Slider:** "Forward start" (t₁) and "Forward end" (t₂)
- Highlighted: the region between t₁ and t₂ on the yield curve
- The forward rate computed and displayed
- Geometric interpretation: the rate that makes investing for t₁ then rolling at the forward rate equivalent to investing for t₂
- **Additional formula:** `f(t₁,t₂) = -d/dt ln D(t)` — connecting forward rates directly to discount factors (powerful conceptual bridge)
- **Result box:** `f(t₁, t₂) = VALUE%` with the no-arbitrage equation
- **Insight box:** "Forward rates are not predictions of future rates — they are the rates implied by the current term structure such that no arbitrage exists. If you could lock in different rates, you would have a money machine."

#### Section 4 — Bond Pricing from the Curve
**Canvas:** `bondCanvas` (600×400)

- A coupon bond's cash flows shown as vertical bars at payment dates
- Each cash flow discounted back to today using the yield curve
- Present values drawn as shorter bars below each cash flow
- Total = bond price
- **Sliders:** "Coupon rate" (0% to 10%) | "Maturity" (1 to 30 years) | "Face value" (£100)
- **Button:** "Par" | "Premium" | "Discount" — shifts yields to create each pricing scenario
- **Result box:** `Bond price = Σ c·D(tᵢ) + F·D(T) = £VALUE` | `Yield to maturity = VALUE%`
- **DV01 panel:** "Traders measure bond risk using DV01 — the price change from a 1 basis point move in rates." Show computed DV01 for the current bond.
- **Insight box:** "A bond's price is simply the sum of its discounted cash flows. When market yields rise, bond prices fall — and vice versa. This inverse relationship is the most important concept in fixed income."

#### Section 5 — What Have We Learnt?
- Summary: yield curve → discount factors → forward rates → bond pricing
- Key formulas: D(t), forward rate, bond price
- Connections to: compound interest (on site), yield curve construction (on site), bond pricing (on site)

**Estimated complexity:** ~1,000 lines | **Canvases:** 4

---

## 17. Stochastic Calculus — `stochastic_calculus.html`

**Chapter:** Quant Finance | **Accent:** `#10b981` / `16,185,129` | **Difficulty:** ●●●○

**Title:** Stochastic Calculus
**Subtitle:** *Calculus for random processes — Itô's lemma and SDEs*

**Meta description (158 chars):**
`Explore stochastic calculus visually. See Brownian motion paths, understand Itô's lemma, solve stochastic differential equations, and derive Black-Scholes.`

**Educational goal:** Students see why ordinary calculus fails for random paths (infinite variation), understand Itô's lemma as the chain rule for stochastic processes, and see how it leads to Black-Scholes.

**Reference:** `brownian_motion.html`, `black_scholes.html`

### Sections

#### Section 1 — Brownian Motion: The Random Path
**Canvas:** `bmCanvas` (700×400)

- Multiple Brownian motion paths W(t) plotted simultaneously
- **Slider:** "Number of paths" (1 to 50)
- **Slider:** "Time steps" (100 to 10,000)
- **Seed toggle:** Lock for reproducibility
- Properties displayed: E[W(t)] = 0, Var[W(t)] = t
- **Button:** "Show ΔW distribution" — histogram of increments (should be normal)
- **Button:** "Show quadratic variation" — plots [W]_t = t (straight line, not zero!)
- **Toggle:** "Smooth function" | "Brownian motion" — contrasts quadratic variation = 0 (smooth) vs = t (BM). This contrast makes the whole idea click instantly.
- **Result box:** For one path: W(T) = VALUE, [W]_T = VALUE ≈ T
- **Insight box:** "Brownian motion has a strange property: its quadratic variation is not zero (as it would be for any smooth function). It equals t — this simple fact is why ordinary calculus breaks down and Itô calculus is needed."

#### Section 2 — Why Ordinary Calculus Fails
**Canvas:** `failCanvas` (600×400)

- Plot f(W(t)) where f(x) = x² and W(t) is Brownian motion
- Show the naive chain rule: df = 2W dW (ordinary calculus)
- Show the Itô correction: df = 2W dW + dt
- **Button:** "Compute both" — runs both calculations side-by-side
- Naive version drifts away from the true values; Itô version matches
- The difference between them grows linearly (the dt correction term)
- **Result box:** Shows both formulas and their numerical values
- **Insight box:** "When you differentiate f(W(t)) = W², ordinary calculus gives df = 2W dW. But that is wrong by exactly dt. The extra term comes from the non-zero quadratic variation of Brownian motion. This correction — Itô's insight — is the foundation of mathematical finance."

#### Section 3 — Itô's Lemma
**Canvas:** `itoCanvas` (700×400)

- Interactive: choose a function f(x) and a process X(t) = μdt + σdW
- **Buttons:** "f(x) = x²" | "f(x) = eˣ" | "f(x) = ln(x)" | "f(x) = 1/x"
- Shows the full Itô expansion: df = f'(X)dX + ½f''(X)(dX)²
- With dX = μdt + σdW, expand (dX)² = σ²dt
- **Multiplication table** displayed explicitly: `(dW)² = dt` | `dt·dW = 0` | `(dt)² = 0` — students find this mystical otherwise, showing the rules demystifies the algebra
- Final result: df = [f'(X)μ + ½f''(X)σ²]dt + f'(X)σdW
- Colour-coded: drift terms in emerald, diffusion terms in cyan, the ½f''σ² correction in amber
- **Slider:** "Drift μ" | "Volatility σ"
- **Result box:** Full Itô expansion with numerical values
- **Insight box:** "Itô's lemma is the chain rule for stochastic calculus. The extra ½f''(X)σ²dt term — which has no analogue in ordinary calculus — comes from the non-vanishing quadratic variation. It is this term that transforms geometric Brownian motion into the Black-Scholes equation."

#### Section 4 — Geometric Brownian Motion and Black-Scholes
**Canvas:** `gbmCanvas` (700×400)

- Multiple GBM paths: S(t) = S₀ exp((μ - σ²/2)t + σW(t))
- **Sliders:** "Drift μ" | "Volatility σ" | "Initial price S₀"
- Show how Itô's lemma applied to ln(S) gives the solution
- Derivation walkthrough:
  - dS/S = μdt + σdW (the SDE)
  - Apply Itô with f = ln: d(ln S) = (μ - σ²/2)dt + σdW
  - Integrate: ln S(t) - ln S(0) = (μ - σ²/2)t + σW(t)
  - Exponentiate: S(t) = S₀ exp(...)
- **Expected value formula:** `E[S(t)] = S₀ e^{μt}` — students are often surprised the expected value ignores the −σ²/2 term
- **Result box:** Mean path vs median path (they differ because of the -σ²/2 correction!)
- **Implementation note:** Generate increments as ΔW ~ N(0, Δt) then accumulate — do not simulate W(t) directly in large steps (numerical stability)
- **Insight box:** "The -σ²/2 term in the exponent is pure Itô. Without it, you would predict that the average stock price grows faster than it actually does. This seemingly small correction is the difference between getting Black-Scholes right and getting it wrong."

#### Section 5 — What Have We Learnt?
- Summary: Brownian motion → quadratic variation → Itô's lemma → GBM → Black-Scholes
- Key formulas: Itô's lemma, GBM solution
- The Itô-Stratonovich distinction (brief note)
- Connections to: Black-Scholes (on site), Brownian motion (on site), Monte Carlo (on site)
- Reference: Shreve, "Stochastic Calculus for Finance II"

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## Design Compliance Checklist

Same as Batch 1 — see `docs/BATCH1_SPECIFICATION.md`. Additionally, all Quant Finance pages must follow the financial simulation conventions: seeded PRNG, show-the-formula, glass-box transparency, regulatory references.

**Approved — proceeding to build.**

### SME Feedback Summary (incorporated above)
- **Risk Measures:** √t scaling caveat added; "Historical" → "Empirical"; distribution toggle includes Mixture of Normals; simulation cap 50k; concrete bond-default subadditivity example
- **Interest Rates:** Yield curve insight reworded (not just forecasts); integral form of D(t); discount-factor identity for forwards; DV01 panel in bond section
- **Stochastic Calculus:** Smooth vs BM toggle for quadratic variation; explicit multiplication table (dW²=dt etc.); E[S(t)] formula; incremental ΔW generation for numerical stability
