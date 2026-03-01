# Chapter 11 — Quantitative Finance
## Full Design Specification

*Designed from Hull, Wilmott, and Capinski & Zastawniak*
*Philosophy: grounded in market reality, not just textbook theory*

---

## Design Principles for This Chapter

1. **Match existing style** — dark theme (#0a0a1a), Georgia serif, Canvas-based interactivity, `.panel` and `.btn` classes, chapter accent colour, difficulty dots, back-link navigation, responsive layout
2. **Ground in reality** — use actual market instruments (US Treasury bills, real yield curve shapes, observed volatility smiles) rather than abstract examples wherever possible
3. **Show where theory breaks down** — every model topic should include a "Theory vs Reality" section that lets the user toggle between the textbook assumption and what markets actually do
4. **Practitioner language** — explain concepts in the language traders and quants actually use, not just academic notation
5. **Interactive "what if"** — every visualisation should let the user change parameters and immediately see consequences

## Chapter Metadata

| Field | Value |
|-------|-------|
| Chapter number | 11 |
| Title | Quantitative Finance |
| Subtitle | Where mathematics meets the markets |
| Icon | `$` (Unicode: \u0024) or `₿` — suggest `$` for universality |
| Accent colour | `#10b981` (emerald green — "money green", distinct from all existing chapter colours) |
| Topics | 12 |
| Difficulty range | 1 to 4 |
| Quote suggestion | *"The market can stay irrational longer than you can stay solvent." — John Maynard Keynes* |

## Existing Chapter Accent Colours (for reference)

| Chapter | Colour |
|---------|--------|
| 1. Logic | `#c084fc` purple |
| 2. Numbers | `#fbbf24` gold |
| 3. Geometry | `#f87171` red |
| 4. Algebra | `#60a5fa` blue |
| 5. Trig | `#34d399` green |
| 6. Calculus | `#fb923c` orange |
| 7. Linear Algebra | `#22d3ee` cyan |
| 8. Probability | `#f472b6` pink |
| 9. Analysis | `#818cf8` indigo |
| 10. Beautiful Results | `#fcd34d` yellow |
| **11. Quant Finance** | **`#10b981` emerald** |

---

## Topic 1: Time Value of Money & Compound Interest

| Field | Value |
|-------|-------|
| File | `compound_interest.html` |
| Difficulty | 1 (accessible entry point) |
| Card description | *"A pound today is worth more than a pound tomorrow — the foundation of all finance"* |
| Textbook refs | Hull Ch. 4; C&Z Ch. 2; Wilmott Ch. 1 |
| Cross-references | `logarithms_exponentials.html`, `sequences_series.html` |

### Sections

#### 1. The Growth of £1
- **Canvas**: Animated line chart showing £1 growing over time
- **Sliders**: Annual rate (1%–20%), time horizon (1–50 years)
- **Toggle**: Simple interest (straight line) vs compound interest (exponential curve)
- **Key insight**: Watch the gap between linear and exponential growth widen — this is why Einstein reportedly called compound interest "the eighth wonder of the world"

#### 2. Compounding Frequency
- **Canvas**: Multiple curves overlaid — annual, semi-annual, quarterly, monthly, daily, continuous
- **Slider**: Compounding frequency from 1 to 365+ to continuous
- **Key insight**: As frequency → ∞, the curve converges to e^(rt). Show the number e emerging naturally from finance, not just abstract maths
- **Formula display**: (1 + r/n)^(nt) → e^(rt), animated step by step

#### 3. Discounting — Working Backwards
- **Canvas**: Future cash flow timeline with arrows pointing backward to present value
- **Interactive**: Place cash flows at future dates, see their present values shrink with distance
- **Real-world grounding**: "If a T-Bill pays £10,000 in 6 months, what should you pay today?" — connect to actual Treasury bill pricing
- **Slider**: Discount rate, showing how PV changes

#### 4. Real-World Application: The T-Bill
- **Panel**: Show an actual T-Bill structure — face value £10,000, 26-week maturity
- **Interactive**: Input the discount rate (e.g., 5.25%), compute the purchase price
- **Explain**: "This is exactly how the US Treasury prices its bills — pure time value of money"
- **Display**: Price = Face × (1 − rate × days/360) for discount convention, vs Price = Face / (1 + rate × days/365) for investment convention. Show both and explain why conventions differ.

#### 5. Why This Matters
- **Explain panel**: Every formula in this chapter builds on discounting. Black-Scholes discounts expected payoffs. Bond prices are discounted cash flows. The yield curve is a map of discount rates across time.

---

## Topic 2: Random Walks & Brownian Motion

| Field | Value |
|-------|-------|
| File | `brownian_motion.html` |
| Difficulty | 2 |
| Card description | *"The drunken walk that models stock prices — from coin flips to continuous motion"* |
| Textbook refs | Hull Ch. 12; Wilmott Ch. 4–5; C&Z Ch. 3 |
| Cross-references | `probability_distributions.html`, `central_limit_theorem.html` |

### Sections

#### 1. The Random Walk
- **Canvas**: Animated step-by-step random walk — coin flip at each step, +1 or −1
- **Controls**: Step button, auto-play, speed slider
- **Multiple paths**: Show 5–10 simultaneous walks in different colours fanning out
- **Key insight**: Even though each step is fair, the paths can drift far from zero. Show the √t scaling of the spread.

#### 2. Scaling to Brownian Motion
- **Canvas**: Same random walk but with slider controlling step size (Δt)
- **As Δt shrinks**: path becomes smoother, converging to continuous Brownian motion
- **Key insight**: This is the Central Limit Theorem in action — many small random steps produce a Gaussian continuous process
- **Overlay**: Show the ±σ√t envelope growing as a shaded cone

#### 3. Geometric Brownian Motion — The Stock Price Model
- **Canvas**: GBM paths with drift μ and volatility σ
- **Sliders**: μ (drift, −10% to +30%), σ (volatility, 5% to 80%)
- **Key insight**: Log-normal distribution — prices can't go negative. Show the distribution of final prices as a histogram on the right edge
- **Toggle: "Theory vs Reality"**:
  - **Theory**: Log-normal returns, constant volatility, independent increments
  - **Reality**: Overlay a histogram of actual equity index daily returns showing fat tails, negative skew, and volatility clustering. Annotate: "Real markets have fatter tails than the model predicts — this matters enormously for risk management"

#### 4. Properties of Brownian Motion
- **Interactive panel**: Show three key properties visually
  - **Continuous everywhere**: Zoom into a path — it never jumps
  - **Differentiable nowhere**: Zoom further — it's always jagged. "This is why ordinary calculus fails and we need Itô calculus"
  - **Quadratic variation = t**: Animate the sum of squared increments converging to t as partition refines. This is the key to stochastic calculus.

---

## Topic 3: Interest Rates — The Language of Fixed Income

| Field | Value |
|-------|-------|
| File | `interest_rates.html` |
| Difficulty | 2 |
| Card description | *"Spot, forward, par, discount factor — four ways to say the same thing"* |
| Textbook refs | Hull Ch. 4, 28–31; Wilmott Ch. 14, 16–17; C&Z Ch. 10–11 |
| Cross-references | `compound_interest.html`, `sequences_series.html` |

### Sections

#### 1. The Discount Factor Curve
- **Canvas**: Time axis (0 to 30 years), plot D(t) = present value of £1 received at time t
- **Key insight**: "Everything in fixed income is built from this one curve. A discount factor is the most fundamental object — it tells you what £1 in the future is worth today."
- **Interactive**: Drag points on the DF curve, everything else updates

#### 2. Four Representations of the Same Curve
- **Canvas**: Four synchronized panels, each showing the same information differently
  - **Panel A — Discount Factors**: D(t) curve, always decreasing from 1
  - **Panel B — Zero (Spot) Rates**: z(t) where D(t) = e^(−z(t)·t), the continuously compounded rate for borrowing from today to time t
  - **Panel C — Forward Rates**: f(t₁,t₂), the rate implied for borrowing between two future dates. Show the instantaneous forward rate f(t)
  - **Panel D — Par Rates**: The coupon rate that makes a bond trade at par (price = 100) for each maturity
- **Key insight**: "These are four languages for the same information. Traders switch between them depending on context — bond traders think in yields, derivatives traders think in forwards, risk managers think in discount factors."
- **Interactive**: Drag any one curve and watch all four update simultaneously

#### 3. Bootstrapping a Yield Curve
- **Canvas**: Step-by-step animation of building a yield curve from market instruments
- **Step 1**: Use T-Bill prices (up to 1 year) to get short-end discount factors
- **Step 2**: Use swap rates (1–30 years) to extend the curve via bootstrap
- **Animate**: Each instrument "pins down" one more point on the curve. Show the curve extending as each instrument is added.
- **Real-world grounding**: Use realistic market rates (e.g., 6-month T-Bill at 5.2%, 2-year swap at 4.5%, 10-year swap at 4.1%, 30-year at 4.3%)

#### 4. Forward Rates — What Do They Mean?
- **Canvas**: Two strategies visualised side by side
  - Strategy A: Lock in the 2-year zero rate today
  - Strategy B: Lock in the 1-year rate today, then roll into the 1-year forward rate starting in year 1
  - **No-arbitrage**: Both must give the same result. Animate the cash flows.
- **Explain**: "The forward rate is not a prediction of where rates will be — it is the rate that prevents arbitrage between the two strategies"

#### 5. Yield Curve Shapes & What They Signal
- **Interactive**: Preset buttons for real-world yield curve regimes
  - **Normal** (upward sloping — "the economy is healthy, investors demand more for longer risk")
  - **Inverted** (downward sloping — "historically precedes recessions; the market expects rate cuts")
  - **Flat** (transition between regimes)
  - **Humped** (short and long rates below medium-term — "policy uncertainty")
- **Overlay**: Show the forward curve implied by each shape. "An inverted yield curve implies negative forward rates far out — the market is pricing in significant rate cuts"

---

## Topic 4: Bond Pricing & Risk

| Field | Value |
|-------|-------|
| File | `bond_pricing.html` |
| Difficulty | 2 |
| Card description | *"Price a real Treasury bond from first principles — cash flows, yields, and the risks in between"* |
| Textbook refs | Hull Ch. 4, 6; Wilmott Ch. 14; C&Z Ch. 2, 10 |
| Cross-references | `interest_rates.html`, `compound_interest.html`, `derivatives.html` |

### Sections

#### 1. Anatomy of a Bond
- **Canvas**: Visual timeline of a coupon bond's cash flows
- **Interactive**: Set face value, coupon rate, maturity, payment frequency
- **Display**: Each coupon as a bar on the timeline, principal repayment as the large final bar
- **Explain**: "A bond is just a series of promised cash flows. The price is the sum of their present values."

#### 2. Pricing from First Principles
- **Canvas**: Each cash flow shown with a discount arrow back to today
- **Formula display**: P = Σ C/(1+y)^t + F/(1+y)^n, animated term by term
- **Real-world example**: "US Treasury 4.5% Aug 2034" — input the actual coupon and maturity, compute the price for a given yield
- **Key insight**: Show the price updating live as yield changes — the inverse relationship is fundamental

#### 3. Price-Yield Relationship
- **Canvas**: The famous convex price-yield curve
- **Interactive**: Drag along the yield axis, watch price respond non-linearly
- **Overlay**: The tangent line at current yield = duration approximation
- **Show the error**: "Duration is a linear approximation. The gap between the tangent line and the actual curve is the convexity effect — it always helps the bondholder."
- **Sliders**: Coupon rate and maturity — show how they change the shape of the curve (longer maturity = steeper, lower coupon = more convex)

#### 4. Duration & Convexity
- **Canvas**: Two bonds side by side — a 2-year and a 30-year
- **Animate**: Apply the same yield shock (+100bps) to both. The 30-year moves much more.
- **Display**: Modified duration, Macaulay duration, convexity for each
- **Key insight**: "Duration is the weighted average time to receive cash flows — but it's also the percentage price sensitivity to yield. These two meanings are mathematically the same thing."
- **Interactive**: Slider for yield shock — show duration working well for small shocks, convexity correction needed for large ones

#### 5. T-Bill vs Coupon Bond vs Zero-Coupon Bond
- **Canvas**: Three instruments side by side with their cash flow diagrams
- **Compare**: T-Bill (pure discount, quoted on discount basis), coupon bond (semi-annual payments), zero-coupon bond (single payment at maturity)
- **Show**: How each is priced differently but all derive from the same discount factor curve
- **Real-world**: "T-Bills are quoted as a discount rate, not a price. A 5% T-Bill with 180 days to maturity costs 100 × (1 − 0.05 × 180/360) = 97.50. The actual yield is higher than 5% — can you see why?"

---

## Topic 5: Portfolio Theory & the Efficient Frontier

| Field | Value |
|-------|-------|
| File | `efficient_frontier.html` |
| Difficulty | 2 |
| Card description | *"Markowitz's Nobel-winning insight — how diversification creates the only free lunch in finance"* |
| Textbook refs | Wilmott Ch. 21; C&Z Ch. 5; Hull (implicit via CAPM) |
| Cross-references | `correlation_regression.html`, `vectors.html`, `linear_algebra.html` |

### Sections

#### 1. Risk and Return of a Single Asset
- **Canvas**: Scatter plot of monthly returns for a single asset as a time series
- **Display**: Mean return (μ) and standard deviation (σ) as statistics
- **Explain**: "In finance, we measure risk as the standard deviation of returns. More volatile = more risky. The question is: can we reduce risk without giving up return?"

#### 2. Two-Asset Portfolio
- **Canvas**: The famous bullet/hyperbola in (σ, μ) space
- **Sliders**: Weight in asset A (0% to 100%), correlation between A and B (−1 to +1)
- **Key insight**: As correlation decreases, the bullet bends left — the portfolio achieves lower risk than either asset alone. At ρ = −1, risk can be eliminated entirely.
- **Animate**: Sweep the weight slider to trace the portfolio along the curve
- **"The free lunch"**: Highlight the minimum variance portfolio. "Diversification reduces risk for free — this is the only free lunch in finance."

#### 3. The Efficient Frontier (Many Assets)
- **Canvas**: Cloud of random portfolios (thousands of dots) in risk-return space, with the efficient frontier as the upper-left boundary
- **Interactive**: Draggable asset dots (5–8 assets) — change an asset's return or risk, watch the frontier redraw
- **Correlation matrix**: Small interactive grid where user can adjust pairwise correlations
- **Highlight**: Minimum variance portfolio and tangency portfolio (when risk-free rate is toggled on)

#### 4. Capital Market Line
- **Toggle**: Add a risk-free asset (rate slider, e.g., 4%)
- **Canvas**: The straight line from the risk-free rate tangent to the efficient frontier
- **Key insight**: "With a risk-free asset, every optimal portfolio is a blend of cash and the tangency portfolio. The tangency portfolio is the 'market portfolio' — this is the foundation of CAPM."
- **Explain**: Connect to the next logical step — if everyone holds the market portfolio, then an asset's risk contribution is measured by its beta, not its total volatility

#### 5. Theory vs Reality
- **Panel**: "Markowitz assumed: returns are normally distributed, correlations are stable, investors are rational"
- **Reality toggles**:
  - "In a crisis, correlations spike toward 1 — diversification fails when you need it most" — show correlation matrix shifting in a stress scenario
  - "Return distributions have fat tails — extreme events happen more often than the model predicts"
  - "Transaction costs, taxes, and short-selling constraints change the frontier"
- **Conclude**: "Portfolio theory is the starting point, not the final answer. Every practitioner uses it, but every practitioner also knows its limits."

---

## Topic 6: Option Payoffs & Trading Strategies

| Field | Value |
|-------|-------|
| File | `option_payoffs.html` |
| Difficulty | 1 |
| Card description | *"Calls, puts, and the building blocks of every structured trade"* |
| Textbook refs | Hull Ch. 8–10; Wilmott Ch. 1–2; C&Z Ch. 7 |
| Cross-references | `compound_interest.html` |

### Sections

#### 1. What Is an Option?
- **Canvas**: Animated scenario — you pay a small premium now for the right (not obligation) to buy/sell later
- **Two panels**: Call option (right to buy) and Put option (right to sell)
- **Slider**: Strike price K on a price axis, with stock price S moving
- **Highlight**: When S > K for a call, the option has intrinsic value. When S < K, it expires worthless. "The most you can lose is the premium."

#### 2. Payoff Diagrams
- **Canvas**: Classic hockey-stick payoff diagrams
- **Interactive**: Drag the strike price K, toggle between call/put, long/short
- **Four fundamental positions**: Long call, short call, long put, short put — each with payoff and profit (payoff minus premium) overlaid
- **Key insight**: "Short positions have unlimited (or large) potential losses — this is why selling options requires margin"

#### 3. Strategy Builder
- **Canvas**: Multi-leg position builder
- **Controls**: Add legs — select call/put, buy/sell, strike, quantity
- **Live payoff**: Combined payoff diagram updates as legs are added
- **Preset strategies** (buttons):
  - **Bull Call Spread** — buy low-strike call, sell high-strike call. "Limited risk, limited reward, directional bet"
  - **Straddle** — buy call + buy put at same strike. "Betting on volatility, not direction"
  - **Butterfly** — buy 1 low, sell 2 middle, buy 1 high. "Betting the stock stays near the middle strike"
  - **Iron Condor** — sell strangle, buy wider strangle. "The bread-and-butter income trade"
  - **Protective Put** — long stock + long put. "Portfolio insurance"
- **Display**: Max profit, max loss, breakeven points for each strategy

#### 4. Put-Call Parity
- **Canvas**: Visual proof — show that long call + short put + PV(K) = stock price
- **Interactive**: Drag S, K, or r — watch both sides of the equation adjust to maintain equality
- **Explain**: "This is a no-arbitrage relationship. If it breaks, you can make a risk-free profit. In practice, market makers enforce it continuously."
- **Real-world**: "This is why you can synthesise any position — a call is really a leveraged stock position plus insurance"

---

## Topic 7: Binomial Option Pricing

| Field | Value |
|-------|-------|
| File | `binomial_pricing.html` |
| Difficulty | 2 |
| Card description | *"Price an option with a tree — the intuitive path to Black-Scholes"* |
| Textbook refs | Hull Ch. 11; Wilmott Ch. 3; C&Z Ch. 8 |
| Cross-references | `binomial_theorem.html`, `probability_distributions.html`, `option_payoffs.html` |

### Sections

#### 1. One-Step Model
- **Canvas**: Single node splitting into two outcomes — stock goes up to Su or down to Sd
- **Sliders**: u (up factor), d (down factor), r (risk-free rate)
- **Key insight**: "We can replicate the option payoff exactly by holding Δ shares and borrowing B at the risk-free rate. If we can replicate it, we can price it."
- **Animate**: Show the replicating portfolio — Δ shares + B cash matches the option payoff in both states
- **Display**: Risk-neutral probability p = (e^(rΔt) − d)/(u − d). "This is not the real probability of going up — it is the probability that makes the expected return equal to the risk-free rate"

#### 2. Multi-Step Tree
- **Canvas**: Recombining binomial tree, expanding from 1 to n steps
- **Slider**: Number of steps (1 to 50)
- **Animate**: Forward pass (stock prices at each node), then backward induction (option values flowing backward, nodes lighting up green/red)
- **Toggle**: European vs American — for American options, highlight nodes where early exercise is optimal (option value < intrinsic value)
- **Display**: Option price at root, converging as steps increase

#### 3. Convergence to Black-Scholes
- **Canvas**: Two plots side by side
  - Left: Binomial tree price vs number of steps (oscillating, converging)
  - Right: The Black-Scholes price as a horizontal line
- **Animate**: Watch the binomial price converge as n increases from 5 to 500
- **Key insight**: "The binomial model IS Black-Scholes in the limit. Cox, Ross, and Rubinstein showed that as steps → ∞, the tree converges to the continuous-time formula."

#### 4. Risk-Neutral Valuation — The Key Idea
- **Canvas**: Side-by-side comparison
  - Left: "Real world" — stock has expected return μ = 12%, option price = ???
  - Right: "Risk-neutral world" — stock has expected return r = 5%, option price = same answer!
- **Explain**: "The option price doesn't depend on μ — it doesn't matter whether you think the stock will go up or down. This is the most important idea in derivatives pricing."
- **Interactive**: Change μ in the real-world panel — the option price doesn't change. Change σ — it does change.

#### 5. Early Exercise — When Is American Worth More?
- **Canvas**: Binomial tree with American option values at each node, early exercise boundary highlighted in a distinct colour
- **Two cases visualised**:
  - **American put on non-dividend stock**: Deep in-the-money puts — show nodes where exercising immediately (capturing intrinsic value) beats holding (because the present value of the strike minus stock is large, and you earn interest on the strike received). Animate the exercise boundary as a curve in (S, t) space.
  - **American call on dividend-paying stock**: Just before an ex-dividend date, early exercise may be optimal to capture the dividend. Show the dividend threshold: exercise if dividend > K(1 − e^(−rΔt)). Below threshold → hold; above → exercise early.
- **Interactive**: Slider for dividend yield — watch the early exercise region for calls appear and grow as dividends increase. For puts, slider for interest rate — higher r makes early exercise more attractive.
- **Key insight**: "American calls on non-dividend stocks are never exercised early — the time value is always worth more than early exercise. This is why American and European call prices are identical when there are no dividends. American puts, however, can always be worth more."
- **Display**: Price difference (American − European) for both calls and puts across a range of parameters
- **Real-world**: "This is why CBOE lists both American-style equity options (where early exercise matters for puts) and European-style index options (where it doesn't). Settlement differs too — equity options deliver shares, index options settle in cash."

---

## Topic 8: The Black-Scholes Model

| Field | Value |
|-------|-------|
| File | `black_scholes.html` |
| Difficulty | 3 |
| Card description | *"The most famous formula in finance — and why every trader knows where it's wrong"* |
| Textbook refs | Hull Ch. 12–13; Wilmott Ch. 6, 8; C&Z continuous time chapter |
| Cross-references | `differential_equations.html`, `derivatives.html`, `binomial_pricing.html`, `brownian_motion.html` |

### Sections

#### 1. The Black-Scholes Formula
- **Canvas**: Option price surface — a 3D-style surface plot with S on x-axis, t on y-axis, price on z-axis (rendered as a colour-mapped 2D heatmap with contour lines)
- **Sliders**: σ (10%–80%), r (0%–10%), K (adjustable)
- **Toggle**: Call / Put
- **Formula display**: The full Black-Scholes formula with each component highlighted and explained:
  - N(d₁) = "delta, the hedge ratio"
  - N(d₂) = "probability of finishing in the money (under risk-neutral measure)"
  - Ke^(−rT) = "present value of the strike — the discounted cost of exercising"
- **Animate**: As T → 0, the surface collapses to the payoff diagram (hockey stick)

#### 2. The Five Inputs
- **Canvas**: Five slider panels, each showing how the option price responds to one input while others are held constant
  - S (spot price) — monotonically increasing for calls
  - K (strike) — monotonically decreasing for calls
  - T (time to expiry) — decreasing as time passes (time decay)
  - σ (volatility) — always increasing (more uncertainty = more option value)
  - r (risk-free rate) — increasing for calls (cost of carry)
- **Key insight**: "Of these five inputs, four are observable. Only σ must be estimated — or implied from market prices. This is why volatility is the central concept in options."

#### 3. The Assumptions — and Where They Fail
- **Panel with toggles** for each Black-Scholes assumption:
  - **"Constant volatility"** → Toggle ON: flat vol surface. Toggle OFF: show actual market vol smile/skew. "This is the single biggest failure of Black-Scholes. Markets trade on a volatility surface, not a single number."
  - **"Log-normal returns"** → Toggle ON: nice bell curve of log-returns. Toggle OFF: overlay actual market returns showing fat tails, especially on the left. "The 1987 crash was a 20+ sigma event under log-normal — essentially impossible. It happened."
  - **"Continuous trading"** → "You can't hedge continuously. Transaction costs and discrete rebalancing create hedging errors."
  - **"No dividends"** → "Easily fixable — Merton's extension accounts for continuous dividends"
  - **"Constant rates"** → "Matters more for long-dated options. For short-dated equity options, this is usually fine."

#### 4. Implied Volatility — The Market's Language
- **Canvas**: Input a market option price → solve for the σ that makes Black-Scholes match
- **Interactive**: Slider for market price — watch implied vol change
- **Key insight**: "Traders don't quote option prices in pounds — they quote them in implied volatility. When a trader says 'vol is 25', they mean the Black-Scholes σ that matches the market price. Black-Scholes is used as a translation device even by people who know the model is wrong."
- **Newton-Raphson animation**: Show the iterative root-finding converging to the implied vol

#### 5. The Hedging Argument (Optional Advanced Section)
- **Canvas**: Animated derivation — construct a portfolio of option + Δ shares that is risk-free for an instant
- **Step through**: Show the PDE emerging: ∂V/∂t + ½σ²S²∂²V/∂S² + rS∂V/∂S − rV = 0
- **Explain**: "This is a partial differential equation. Its solution is the Black-Scholes formula. The key insight: because we can hedge away all the risk, the option must earn the risk-free rate."

---

## Topic 9: The Greeks

| Field | Value |
|-------|-------|
| File | `greeks.html` |
| Difficulty | 3 |
| Card description | *"Delta, gamma, theta, vega, rho — the trader's dashboard for managing risk"* |
| Textbook refs | Hull Ch. 17; Wilmott Ch. 8, 10 |
| Cross-references | `derivatives.html`, `taylor_series.html`, `black_scholes.html` |

### Sections

#### 1. The Five Greeks — Dashboard View
- **Canvas**: Five synchronised panels, each plotting one Greek as a function of spot price S
- **Global sliders**: σ, T, K, r — all five panels update simultaneously
- **Toggle**: Call / Put
- **Each panel**:
  - **Delta (Δ)**: ∂V/∂S — the hedge ratio. S-curve from 0 to 1 for calls. "How many shares to hold to hedge"
  - **Gamma (Γ)**: ∂²V/∂S² — the curvature. Bell-shaped, peaks at-the-money. "How fast delta changes — the cost of discrete hedging"
  - **Theta (Θ)**: ∂V/∂t — time decay. Always negative for long options. "The daily bleed of option value"
  - **Vega (ν)**: ∂V/∂σ — volatility sensitivity. Bell-shaped like gamma. "The most traded Greek — when you buy options, you're really buying vega"
  - **Rho (ρ)**: ∂V/∂r — rate sensitivity. Usually small for equity options. "Matters more for long-dated or FX options"

#### 2. The Greek Surface — Heatmap View
- **Canvas**: 2D heatmap of any selected Greek across (S, T) space
- **Dropdown**: Select which Greek to display
- **Colour scale**: Blue (low) to red (high)
- **Key insight**: "At-the-money short-dated options have the highest gamma and theta — this is where the action is. Gamma and theta are two sides of the same coin."
- **Animate**: Watch the heatmap evolve as time passes — gamma concentrates at the strike near expiry

#### 3. Delta Hedging Simulation
- **Canvas**: Animated stock price path with hedging actions
- **Step-by-step**: At each time step:
  1. Stock price moves (random)
  2. New delta is computed
  3. Portfolio is rebalanced (buy/sell shares)
  4. P&L from hedge error is tracked
- **Slider**: Rebalancing frequency (every tick vs daily vs weekly)
- **Key insight**: "More frequent hedging = smaller error but higher transaction costs. In practice, traders rebalance when delta moves by a threshold, not on a schedule."
- **Display**: Cumulative P&L of the hedge, showing it converges to the option premium as hedging becomes more frequent

#### 4. Gamma-Theta Trade-Off
- **Canvas**: Plot gamma vs theta for a portfolio
- **Explain**: "If you're long gamma, you're short theta (and vice versa). Long gamma means you profit from big moves but bleed time decay every day. Short gamma means you collect premium but face large losses on big moves."
- **Interactive**: Build a position (ATM straddle, OTM butterfly) and see where it sits on the gamma-theta spectrum
- **Real-world**: "Market makers are typically short gamma near expiry and manage it by scalping delta — buying low, selling high, many times per day"

---

## Topic 10: Monte Carlo Simulation in Finance

| Field | Value |
|-------|-------|
| File | `monte_carlo_finance.html` |
| Difficulty | 2 |
| Card description | *"Simulate thousands of futures to price one option — the brute-force approach that works"* |
| Textbook refs | Hull Ch. 19; Wilmott Ch. 76–83 |
| Cross-references | `law_of_large_numbers.html`, `central_limit_theorem.html`, `brownian_motion.html` |

### Sections

#### 1. The Basic Idea
- **Canvas**: Fan of GBM price paths spreading out from today's stock price
- **Controls**: Number of paths (10, 100, 1000, 10000), auto-animate button
- **Watch**: Paths drawn progressively, fanning out like a trumpet
- **At expiry**: Evaluate the payoff for each path, show the histogram of payoffs on the right edge
- **Display**: Monte Carlo price = e^(−rT) × mean(payoffs). Show running average converging.

#### 2. Convergence
- **Canvas**: Running estimate of option price vs number of paths
- **Overlay**: ±2 standard error bands shrinking as 1/√n
- **Key insight**: "Monte Carlo converges slowly — to halve the error, you need four times the paths. This is why variance reduction techniques matter."
- **Compare**: Show the estimate converging toward the known Black-Scholes price (for European options where we have a closed-form answer)

#### 3. Variance Reduction
- **Toggle buttons** for different techniques:
  - **Antithetic variates**: For each random path, also simulate the "mirror" path. Show pairs of paths and the tighter convergence.
  - **Control variates**: Use a correlated quantity with a known answer to reduce noise. Show the adjusted estimate converging faster.
- **Canvas**: Side-by-side convergence plots — naive vs variance-reduced
- **Key insight**: "In practice, antithetic variates roughly double your efficiency for free"

#### 4. Pricing Exotic Options
- **Presets** (buttons):
  - **Asian option**: Show the running average along each path, payoff based on average price
  - **Barrier option (knock-out)**: Paths that touch the barrier turn grey/die. Payoff only for surviving paths.
  - **Lookback option**: Track the maximum along each path, payoff based on the high-water mark
- **Key insight**: "These options have no closed-form price — Monte Carlo is often the only practical method. This is where simulation earns its keep."
- **Display**: Compare price to the European option — explain why the exotic is cheaper or more expensive

#### 5. Beyond Log-Normal
- **Toggle**: Switch from GBM to jump-diffusion (Merton model) or stochastic volatility (Heston model)
- **Canvas**: Show how the path character changes — occasional jumps, or volatility that itself fluctuates
- **Key insight**: "Monte Carlo's greatest strength is flexibility — change the model, and the simulation adapts. This is much harder with PDE or tree methods."

---

## Topic 11: Volatility Smiles & Surfaces

| Field | Value |
|-------|-------|
| File | `volatility_surface.html` |
| Difficulty | 3 |
| Card description | *"Black-Scholes assumes flat volatility — markets disagree, and the disagreement tells a story"* |
| Textbook refs | Hull Ch. 18; Wilmott Ch. 9 |
| Cross-references | `black_scholes.html`, `probability_distributions.html`, `option_payoffs.html` |

### Sections

#### 1. The Volatility Smile
- **Canvas**: Plot implied volatility vs strike price (or moneyness K/S) for a single expiry
- **Display**: The characteristic U-shape (equity skew / FX smile)
- **Overlay**: The flat line that Black-Scholes assumes — "If Black-Scholes were correct, this would be a flat line at every strike. It isn't."
- **Interactive**: Drag individual implied vols at different strikes to explore the curve shape

#### 2. Equity Skew vs FX Smile
- **Toggle**: Switch between two markets
  - **Equity index** (e.g., S&P 500): Steep downside skew — low-strike puts have much higher implied vol. "After 1987, the market prices crash protection very expensively."
  - **FX** (e.g., EUR/USD): More symmetric smile — both wings elevated. "Currency markets price large moves in either direction."
- **Explain**: "The shape of the smile encodes the market's view on the distribution of returns — fatter left tail (equity) or fatter both tails (FX)"

#### 3. The Volatility Surface
- **Canvas**: Full 3D surface — strike on x-axis, time to expiry on y-axis, implied vol on z-axis
- **Rendering**: Colour-mapped surface with contour lines, rotatable (or fixed perspective with good depth cues)
- **Interactive**: Drag a point on the surface to see the vol at that strike/expiry
- **Presets**: Typical surface shapes for different regimes:
  - **Calm market**: Mild skew, low overall level
  - **Pre-earnings**: Elevated vol for the near-term expiry, term structure inverted
  - **Crisis**: High vol everywhere, extreme skew, steep term structure

#### 4. What the Surface Tells You
- **Panel**: "The vol surface is the market's implied probability distribution for the stock price"
- **Canvas**: Derive the risk-neutral density from the surface using Breeden-Litzenberger formula — show how the smile maps to a non-log-normal distribution with fat tails and negative skew
- **Toggle**: Compare the implied distribution (from market prices) vs the log-normal distribution (Black-Scholes assumption)
- **Key insight**: "The smile is the market telling you that Black-Scholes is wrong. Out-of-the-money puts being 'expensive' means the market assigns higher probability to crashes than log-normal."

#### 5. Sticky Strike vs Sticky Delta
- **Panel**: "When the underlying moves, how does the surface move?"
- **Canvas**: Two models animated:
  - **Sticky strike**: Vol at a given strike stays constant as S moves. "Each strike has its own fixed vol."
  - **Sticky delta**: Vol at a given moneyness (delta) stays constant. "The smile moves with the underlying."
- **Key insight**: "The truth is somewhere in between, and it varies by market and regime. Getting this right matters enormously for hedging."

#### 6. The VIX — Wall Street's Fear Gauge
- **Canvas**: Animated construction of the VIX from the volatility surface
- **Step 1 — The Inputs**: Show a strip of out-of-the-money S&P 500 option prices across strikes for the two nearest monthly expiries. "The VIX is built from real, traded option prices — not from a model."
- **Step 2 — The Formula**: Visualise the CBOE VIX formula: a weighted sum of OTM option prices across all liquid strikes. Show each option's contribution as a bar whose width is the strike spacing and whose height is the option price divided by K². The integral under these bars is the variance.
  - σ² = (2/T) Σ (ΔKᵢ/Kᵢ²) e^(rT) Q(Kᵢ) — show each term highlighted as the animation sweeps across strikes
- **Step 3 — Interpolation**: Blend the two expiry estimates to get a 30-day forward variance. "VIX targets exactly 30 calendar days of implied volatility."
- **Interactive**: Slider to shift the overall level of option prices up/down — watch VIX respond. Slider to steepen/flatten the skew — watch VIX change (skew matters because deeper OTM puts have higher vol and contribute more).
- **Key insight**: "VIX is not the ATM implied vol — it is a model-free measure of total implied variance derived from the entire strip of option prices. It captures the smile, not just the centre. When traders say 'VIX is at 20', they mean the market is pricing in roughly 20% annualised volatility for the S&P 500 over the next 30 days."
- **Real-world context panel**:
  - VIX 12–15: "Calm, complacent markets"
  - VIX 20–25: "Elevated concern, typical correction territory"
  - VIX 30–40: "Significant stress — markets are pricing in large daily moves"
  - VIX 50+: "Crisis levels — 2008 financial crisis peaked at 80, Covid crash at 82"
- **Display**: "The CBOE invented VIX in 1993 and launched VIX futures in 2004 and VIX options in 2006. An entire ecosystem of volatility trading exists built on this single number derived from the options surface."

---

## Topic 12: Stochastic Calculus & Itô's Lemma

| Field | Value |
|-------|-------|
| File | `itos_lemma.html` |
| Difficulty | 4 |
| Card description | *"Why ordinary calculus fails for random processes — and the correction term that fixes everything"* |
| Textbook refs | Hull Ch. 12; Wilmott Ch. 5; C&Z continuous-time chapter |
| Cross-references | `derivatives.html`, `integration.html`, `differential_equations.html`, `brownian_motion.html` |

### Sections

#### 1. The Problem with Ordinary Calculus
- **Canvas**: A smooth function f(x) with its tangent line — ordinary chain rule works perfectly
- **Below**: A Brownian path — try to draw a tangent. "There is no tangent. The path is continuous but differentiable nowhere."
- **Key insight**: "The chain rule df = f'(x)dx assumes dx² ≈ 0. For Brownian motion, (dW)² = dt, which is NOT zero. This is the fundamental issue."

#### 2. Quadratic Variation — The Key Difference
- **Canvas**: Partition [0,T] into n intervals. Compute Σ(ΔWᵢ)² along a Brownian path
- **Animate**: As n increases, the sum converges to T (not to zero!)
- **Compare**: Do the same for a smooth path — the sum converges to zero
- **Display**: "For smooth functions: Σ(Δx)² → 0 as partition refines. For Brownian motion: Σ(ΔW)² → T. This non-vanishing quadratic variation is what forces the correction term in Itô's formula."

#### 3. Itô's Lemma — The Corrected Chain Rule
- **Canvas**: Side-by-side comparison
  - **Ordinary calculus**: df = f'(x) dx — the familiar chain rule
  - **Itô calculus**: df = f'(X) dX + ½ f''(X) (dX)² — the extra term!
- **Interactive**: Pick f(x) from a dropdown (x², eˣ, ln(x), 1/x)
- **For each f**: Show the Itô formula explicitly, with the correction term highlighted
- **Canvas below**: Apply f to a simulated Brownian path. Show the Itô integral tracking the actual function values, while the "naive" (ordinary calculus) integral drifts away.

#### 4. The Most Important Application: Geometric Brownian Motion
- **Start**: dS/S = μ dt + σ dW — the stock price model
- **Question**: What is d(ln S)? — this tells us the distribution of returns
- **Apply Itô**: f(S) = ln(S), f'(S) = 1/S, f''(S) = −1/S²
- **Result**: d(ln S) = (μ − ½σ²) dt + σ dW
- **Canvas**: Animate both S and ln(S) side by side
- **Key insight**: "The ½σ² correction is why the expected log return is μ − ½σ², not μ. This drift reduction is real — it's why geometric average returns are always below arithmetic average returns. Volatility destroys wealth."
- **Interactive**: Slider for σ — watch the drift of ln(S) decrease as volatility increases. "At σ = 100%, the expected log return drops by 50 percentage points from the arithmetic return."

#### 5. From Itô's Lemma to Black-Scholes
- **Canvas**: The logical chain, visualised as a flow diagram:
  1. Stock follows GBM: dS = μS dt + σS dW
  2. Option price V(S,t) is a function of S and t
  3. Apply Itô's lemma to V → get dV in terms of dS, dt
  4. Construct hedged portfolio: Π = V − ΔS, choose Δ = ∂V/∂S
  5. The dW terms cancel → portfolio is risk-free → must earn rate r
  6. This gives the Black-Scholes PDE
- **Step through**: Each step animates, connecting the stochastic calculus to the practical pricing formula
- **Conclude**: "Itô's lemma is the mathematical engine that drives all of derivatives pricing. Without the correction term, the Black-Scholes formula would be wrong."

---

## Index Page Integration

### Chapter entry in `index.html`

```javascript
{
    title: "Quantitative Finance",
    subtitle: "Where mathematics meets the markets",
    icon: "$",
    color: "#10b981",
    topics: [
        { title: "Time Value of Money",
          desc: "A pound today is worth more than a pound tomorrow \u2014 the foundation of all finance",
          file: "compound_interest.html", difficulty: 1 },
        { title: "Random Walks & Brownian Motion",
          desc: "The drunken walk that models stock prices \u2014 from coin flips to continuous motion",
          file: "brownian_motion.html", difficulty: 2 },
        { title: "Interest Rates \u2014 The Language of Fixed Income",
          desc: "Spot, forward, par, discount factor \u2014 four ways to say the same thing",
          file: "interest_rates.html", difficulty: 2 },
        { title: "Bond Pricing & Risk",
          desc: "Price a real Treasury bond from first principles \u2014 cash flows, yields, and duration",
          file: "bond_pricing.html", difficulty: 2 },
        { title: "Portfolio Theory & the Efficient Frontier",
          desc: "Markowitz\u2019s Nobel-winning insight \u2014 the only free lunch in finance",
          file: "efficient_frontier.html", difficulty: 2 },
        { title: "Option Payoffs & Trading Strategies",
          desc: "Calls, puts, and the building blocks of every structured trade",
          file: "option_payoffs.html", difficulty: 1 },
        { title: "Binomial Option Pricing",
          desc: "Price an option with a tree \u2014 the intuitive path to Black-Scholes",
          file: "binomial_pricing.html", difficulty: 2 },
        { title: "The Black-Scholes Model",
          desc: "The most famous formula in finance \u2014 and why every trader knows where it\u2019s wrong",
          file: "black_scholes.html", difficulty: 3 },
        { title: "The Greeks",
          desc: "Delta, gamma, theta, vega, rho \u2014 the trader\u2019s dashboard for managing risk",
          file: "greeks.html", difficulty: 3 },
        { title: "Monte Carlo Simulation",
          desc: "Simulate thousands of futures to price one option \u2014 brute force that works",
          file: "monte_carlo_finance.html", difficulty: 2 },
        { title: "Volatility Smiles & Surfaces",
          desc: "Black-Scholes assumes flat volatility \u2014 markets disagree, and the disagreement tells a story",
          file: "volatility_surface.html", difficulty: 3 },
        { title: "Stochastic Calculus & It\u00F4\u2019s Lemma",
          desc: "Why ordinary calculus fails for random processes \u2014 the correction that fixes everything",
          file: "itos_lemma.html", difficulty: 4 },
    ]
}
```

### Updated site totals
- **73 visualisations** across **11 chapters** + 1 appendix

---

## Style Reference

Every topic page must follow the existing conventions:

```
Background:       #0a0a1a
Text:             #e0e0e0
Font:             Georgia, 'Times New Roman', serif
Container:        max-width: 960px, margin: 0 auto
Back link:        <a class="back" href="index.html">← Back to Index</a>
                  colour #606078, hover colour = chapter accent (#10b981)
h1:               font-size: 1.8em, font-weight: 400, color: #fff
Subtitle:         color: #808098, font-style: italic
h2:               font-size: 1.15em, font-weight: 400
Panels:           .panel class — rgba(255,255,255,0.025) bg, 10px radius
Buttons:          .btn class — rgba(255,255,255,0.035) bg, active uses chapter accent
Canvas:           border-radius: 10px, border: 1px solid rgba(255,255,255,0.06)
Sliders:          accent-color: #10b981 (chapter colour)
Math formulas:    Courier New monospace, #c0c0d8
Accent highlights: #10b981 (emerald) for key values, active states, computed results
Responsive:       @media(max-width:600px) — canvas width:100%, stacked layouts
Footer:           Standard site footer with credits
```

---

## Build Order (Suggested)

Build in pedagogical dependency order:

1. `compound_interest.html` — standalone foundation, no dependencies
2. `brownian_motion.html` — standalone, connects to existing probability chapters
3. `option_payoffs.html` — standalone, simple interactivity
4. `interest_rates.html` — builds on compound interest
5. `bond_pricing.html` — builds on interest rates
6. `efficient_frontier.html` — standalone, connects to existing stats chapters
7. `binomial_pricing.html` — builds on option payoffs
8. `black_scholes.html` — builds on binomial pricing + Brownian motion
9. `greeks.html` — builds on Black-Scholes
10. `monte_carlo_finance.html` — builds on Brownian motion + option payoffs
11. `volatility_surface.html` — builds on Black-Scholes + Greeks
12. `itos_lemma.html` — capstone, builds on everything

---

*This specification is designed to be built one topic at a time, each as a self-contained HTML file following the project's established conventions.*
