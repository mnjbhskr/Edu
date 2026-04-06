# MC-2 through MC-7 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish 6 interactive HTML pages completing the Market Conventions & Quant Language series for mathsedu.org.

**Architecture:** Each module is a single self-contained HTML file (all CSS/JS inline) following the MC-1 template pattern. Built in 3 dependency-ordered batches using parallel subagents for independent modules. After each batch: site integration and series nav updates.

**Tech Stack:** HTML5, Canvas 2D API, vanilla JavaScript. No frameworks, no build tools, no external libraries.

**Design Spec:** `docs/superpowers/specs/2026-03-28-mc2-to-mc7-consolidated-design.md`
**Template Reference:** `mc1_day_counts.html` (1170 lines)

---

## File Map

### New Files (6)
| File | Module | Lines (est.) |
|------|--------|-------------|
| `mc2_vol_surface.html` | Volatility Quoting | ~1200 |
| `mc3_fx_options.html` | FX Options | ~1300 |
| `mc4_ir_vol.html` | IR Vol | ~1400 |
| `mc5_credit.html` | Credit Derivatives | ~1200 |
| `mc6_commodities.html` | Commodity Options | ~1200 |
| `mc7_bootstrapping.html` | Swap Bootstrapping | ~1400 |

### Modified Files (per batch)
- `index.html` — add topics to Quantitative Finance array (~line 1450)
- `topic-finance.html` — add cards (~line 491) and learning order entries (~line 504)
- `sitemap.xml` — add URL entries before `</urlset>`
- `level-advanced.html` — add page-cards for Advanced modules
- `level-a-level.html` — add page-card for MC-6 (Intermediate)
- All previously-built `mc*.html` files — update series nav links

---

## Batch 1: MC-2 + MC-4 + MC-6 (Parallel)

These three modules are independent (all depend only on MC-1). Build with 3 parallel subagents.

---

### Task 1: Build MC-2 — Volatility Quoting: Surface to Model Input

**Files:**
- Create: `mc2_vol_surface.html`

Each subagent receives the full MC-1 template CSS block and adapts the content. The subagent prompt must include:

- [ ] **Step 1: Create mc2_vol_surface.html with full HTML structure**

Create the file at repo root. Structure:

**Head section:** Copy MC-1 pattern exactly, substituting:
- `<title>Volatility Quoting: Surface to Model Input</title>`
- Meta description: "Convert between strike, delta, and moneyness representations. Build and explore the volatility surface from market quotes with interactive tools." (148 chars)
- Canonical: `https://mathsedu.org/mc2_vol_surface.html`
- JSON-LD: educationalLevel "Advanced", teaches "Volatility surface conventions and strike representations"
- OG/Twitter tags with MC-2 values

**CSS block:** Copy MC-1's entire `<style>` block verbatim. Add one new class for 3D canvas:
```css
.surface-canvas{cursor:grab}
.surface-canvas:active{cursor:grabbing}
```

**Body structure — 8 sections:**

1. **Introduction — Why Markets Quote Vol** — narrative explaining normalisation. Insight box about information content.

2. **Strike Representations** — `.dcf-table` with 4 rows: Absolute Strike (K), Moneyness (K/F), Delta (Δ), Standard Deviations. Collapsible: "Log-moneyness and why models prefer it".

3. **Converting Delta to Strike** — `.formula-block`: `K = F × exp(−N⁻¹(Δ) × σ√T + ½σ²T)`. Worked example: 25Δ call, F=100, σ=20%, T=1y → K=116.76. Collapsible: full derivation.

4. **Interactive: Strike Converter** — 5 form inputs (delta, forward, vol, maturity, rate). Step-by-step output showing N⁻¹(Δ), σ√T, and final K. Result box with absolute strike and log-moneyness.

5. **The Vol Surface** — Narrative on skew/smile and term structure. Static canvas (700×250) showing equity skew vs FX smile as two schematic curves.

6. **Interactive: Vol Surface Explorer** — 4 sliders (ATM vol 5-60%, skew −0.5 to 0.5, smile 0-0.3, max maturity). Canvas (700×400) rendering 3D wireframe with perspective projection. Mouse drag to rotate (track azimuth/elevation). Hover tooltip for σ(K,T).

7. **Where It Matters** — `.explain` section: SABR calibration, local vol (Dupire), risk management.

8. **Cross-links & Explore Next** — Links to volatility_smiles.html, black_scholes.html, mc1_day_counts.html.

**Series nav:** MC-2 `.active`, MC-1 as `<a class="series-item built">` link, MC-3–MC-7 as `.future`.

**Footer:** Standard pattern from MC-1.

**JavaScript — key functions:**

```javascript
/* Cumulative Normal CDF — Abramowitz & Stegun 26.2.17 */
function normcdf(x) {
    if (x < -8) return 0;
    if (x > 8) return 1;
    var a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    var a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x) / Math.sqrt(2);
    var t = 1.0 / (1.0 + p * x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t * Math.exp(-x*x);
    return 0.5 * (1.0 + sign * y);
}

/* Inverse Normal CDF — Beasley-Springer-Moro */
function norminv(p) {
    if (p <= 0) return -8;
    if (p >= 1) return 8;
    if (p < 0.5) return -norminv(1 - p);
    var a = [-3.969683028665376e+01, 2.209460984245205e+02,
             -2.759285104469687e+02, 1.383577518672690e+02,
             -3.066479806614716e+01, 2.506628277459239e+00];
    var b = [-5.447609879822406e+01, 1.615858368580409e+02,
             -1.556989798598866e+02, 6.680131188771972e+01,
             -1.328068155288572e+01];
    var c = [-7.784894002430293e-03, -3.223964580411365e-01,
             -2.400758277161838e+00, -2.549732539343734e+00,
              4.374664141464968e+00, 2.938163982698783e+00];
    var d = [7.784695709041462e-03, 3.224671290700398e-01,
             2.445134137142996e+00, 3.754408661907416e+00];
    var pLow = 0.02425, pHigh = 1 - pLow;
    var q, r;
    if (p < pLow) {
        q = Math.sqrt(-2 * Math.log(p));
        return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
               ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
    } else if (p <= pHigh) {
        q = p - 0.5; r = q * q;
        return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q /
               (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
    } else {
        q = Math.sqrt(-2 * Math.log(1 - p));
        return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) /
                ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1));
    }
}

/* Delta to Strike conversion */
function deltaToStrike(delta, F, sigma, T, r) {
    var sqrtT = Math.sqrt(T);
    var ninv = norminv(delta);
    var K = F * Math.exp(-ninv * sigma * sqrtT + 0.5 * sigma * sigma * T);
    return K;
}

/* HiDPI canvas setup */
function hiDPI(canvas) {
    var dpr = window.devicePixelRatio || 1;
    var w = canvas.width, h = canvas.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return { ctx: ctx, w: w, h: h };
}

/* Vol surface builder: parametric model */
function buildSurface(atmVol, skew, smile, tMin, tMax, nK, nT) {
    // Generate sigma(k, t) grid where k = log-moneyness
    // sigma(k,t) = atmVol + skew * k + smile * k^2 + term structure decay
    var surface = [];
    for (var it = 0; it < nT; it++) {
        var t = tMin + (tMax - tMin) * it / (nT - 1);
        var row = [];
        for (var ik = 0; ik < nK; ik++) {
            var k = -0.5 + 1.0 * ik / (nK - 1);
            var vol = atmVol + skew * k + smile * k * k;
            // Term structure: short-dated vols higher
            vol *= 1 + 0.3 * Math.exp(-t);
            row.push({ k: k, t: t, vol: Math.max(vol, 0.01) });
        }
        surface.push(row);
    }
    return surface;
}

/* 3D wireframe rendering with perspective projection */
function render3D(ctx, w, h, surface, azimuth, elevation, pad) {
    // Project 3D point (k, t, vol) to 2D (px, py)
    // Rotation by azimuth and elevation
    // Draw wireframe lines along both k and t directions
    // Colour by vol level
}
```

- [ ] **Step 2: Verify MC-2 renders correctly**

Open in browser. Check:
- Series nav shows MC-2 active, MC-1 linked
- All 8 sections render
- Strike Converter produces correct output (25Δ, F=100, σ=20%, T=1 → K≈116.76)
- Vol Surface Explorer renders 3D wireframe and responds to sliders
- Mouse drag rotates surface
- Mobile responsive at 375px

---

### Task 2: Build MC-4 — Interest Rate Vol: Normal vs Lognormal

**Files:**
- Create: `mc4_ir_vol.html`

- [ ] **Step 1: Create mc4_ir_vol.html with full HTML structure**

Same MC-1 template pattern. Substitutions:
- Title: "Interest Rate Volatility: Normal vs Lognormal"
- Subtitle: "When rates went negative, the models had to change — and so did the conventions"
- Meta description: "Convert between lognormal (Black) and normal (Bachelier) volatility. Calibrate SABR to swaption smiles with interactive tools and step-by-step working." (155 chars)
- Canonical: `https://mathsedu.org/mc4_ir_vol.html`
- Difficulty: Advanced (3/4)

**Series nav:** MC-4 `.active`, MC-1 as `<a class="series-item built">`, rest `.future`.

**9 sections** as specified in design spec (see Section 5 of consolidated spec).

**Key JavaScript functions:**

```javascript
/* normcdf(x) — same as MC-2 */

/* Black-76 call price */
function blackCall(F, K, sigma, T) {
    if (sigma <= 0 || T <= 0) return Math.max(F - K, 0);
    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(F / K) + 0.5 * sigma * sigma * T) / (sigma * sqrtT);
    var d2 = d1 - sigma * sqrtT;
    return F * normcdf(d1) - K * normcdf(d2);
}

/* Bachelier (normal model) call price */
function bachelierCall(F, K, sigmaN, T) {
    if (sigmaN <= 0 || T <= 0) return Math.max(F - K, 0);
    var sqrtT = Math.sqrt(T);
    var d = (F - K) / (sigmaN * sqrtT);
    return (F - K) * normcdf(d) + sigmaN * sqrtT * normpdf(d);
}

function normpdf(x) {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

/* Approximate conversion: normal vol ≈ lognormal vol × forward */
function approxNormalVol(sigmaLN, F) {
    return sigmaLN * F;
}

/* Exact conversion via price matching (bisection) */
function blackToNormal(F, K, sigmaLN, T) {
    var blackPrice = blackCall(F, K, sigmaLN, T);
    var lo = 0.0001, hi = 2.0;
    for (var i = 0; i < 50; i++) {
        var mid = (lo + hi) / 2;
        var bachPrice = bachelierCall(F, K, mid, T);
        if (bachPrice < blackPrice) lo = mid;
        else hi = mid;
    }
    return (lo + hi) / 2;
}

/* SABR implied vol — Hagan et al. 2002 approximation */
function sabrImpliedVol(F, K, T, alpha, beta, rho, nu) {
    if (Math.abs(F - K) < 1e-10) {
        // ATM approximation
        var Fb = Math.pow(F, 1 - beta);
        var term1 = alpha / Fb;
        var term2 = ((1-beta)*(1-beta)*alpha*alpha) / (24*Fb*Fb);
        var term3 = rho*beta*nu*alpha / (4*Fb);
        var term4 = (2 - 3*rho*rho)*nu*nu / 24;
        return term1 * (1 + (term2 + term3 + term4) * T);
    }
    var FK = F * K;
    var FKbeta = Math.pow(FK, (1-beta)/2);
    var logFK = Math.log(F / K);
    var z = (nu / alpha) * FKbeta * logFK;
    var xz = Math.log((Math.sqrt(1 - 2*rho*z + z*z) + z - rho) / (1 - rho));
    if (Math.abs(xz) < 1e-10) xz = 1;
    else xz = z / xz;
    var prefix = alpha / (FKbeta * (1 + (1-beta)*(1-beta)*logFK*logFK/24 + Math.pow((1-beta)*logFK, 4)/1920));
    var correction = 1 + (((1-beta)*(1-beta)*alpha*alpha)/(24*FKbeta*FKbeta) + rho*beta*nu*alpha/(4*FKbeta) + (2-3*rho*rho)*nu*nu/24) * T;
    return prefix * xz * correction;
}

/* SABR calibration — Newton-Raphson for {alpha, rho, nu} given fixed beta */
function calibrateSABR(F, T, beta, marketStrikes, marketVols) {
    // Minimise sum of squared errors between SABR vols and market vols
    // Start with alpha = ATM_vol * F^(1-beta), rho = 0, nu = 0.3
    // Gradient descent or Nelder-Mead simplex
    var alpha = marketVols[0] * Math.pow(F, 1 - beta);
    var rho = 0, nu = 0.3;
    for (var iter = 0; iter < 200; iter++) {
        // Compute errors and adjust using finite-difference gradients
        var eps = 1e-5;
        var err = sabrError(F, T, alpha, beta, rho, nu, marketStrikes, marketVols);
        var dAlpha = (sabrError(F,T,alpha+eps,beta,rho,nu,marketStrikes,marketVols) - err) / eps;
        var dRho = (sabrError(F,T,alpha,beta,rho+eps,nu,marketStrikes,marketVols) - err) / eps;
        var dNu = (sabrError(F,T,alpha,beta,rho,nu+eps,marketStrikes,marketVols) - err) / eps;
        var lr = 0.0001;
        alpha -= lr * dAlpha;
        rho -= lr * dRho;
        nu -= lr * dNu;
        rho = Math.max(-0.99, Math.min(0.99, rho));
        nu = Math.max(0.01, nu);
        alpha = Math.max(0.001, alpha);
    }
    return { alpha: alpha, rho: rho, nu: nu };
}

function sabrError(F, T, alpha, beta, rho, nu, strikes, vols) {
    var err = 0;
    for (var i = 0; i < strikes.length; i++) {
        var model = sabrImpliedVol(F, strikes[i], T, alpha, beta, rho, nu);
        if (!isFinite(model)) return 1e10;
        err += (model - vols[i]) * (model - vols[i]);
    }
    return err;
}
```

- [ ] **Step 2: Verify MC-4 renders correctly**

Check: Vol Converter produces correct output (30% lognormal at F=3% → ~90bp normal). Bachelier vs Black canvas shows divergence near zero. SABR calibration fits 3 market points.

---

### Task 3: Build MC-6 — Commodity Options & Black-76

**Files:**
- Create: `mc6_commodities.html`

- [ ] **Step 1: Create mc6_commodities.html with full HTML structure**

Same MC-1 template. Substitutions:
- Title: "Commodity Options & Black-76"
- Subtitle: "Pricing options on futures — where cost-of-carry changes everything"
- Meta description: "Price commodity options with Black-76 and compare to Black-Scholes. Explore Asian option pricing and the cost-of-carry relationship with interactive tools." (157 chars)
- Canonical: `https://mathsedu.org/mc6_commodities.html`
- Difficulty: Intermediate (2/4)

**Series nav:** MC-6 `.active`, MC-1 as `<a class="series-item built">`, rest `.future`.

**8 sections** as specified in design spec (see Section 6 of consolidated spec).

**Key JavaScript functions:**

```javascript
/* normcdf(x) — same as MC-2 */

/* Black-76 Call */
function black76Call(F, K, sigma, T, r) {
    if (sigma <= 0 || T <= 0) return Math.max(F - K, 0) * Math.exp(-r * T);
    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(F / K) + 0.5 * sigma * sigma * T) / (sigma * sqrtT);
    var d2 = d1 - sigma * sqrtT;
    return Math.exp(-r * T) * (F * normcdf(d1) - K * normcdf(d2));
}

/* Black-76 Put */
function black76Put(F, K, sigma, T, r) {
    if (sigma <= 0 || T <= 0) return Math.max(K - F, 0) * Math.exp(-r * T);
    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(F / K) + 0.5 * sigma * sigma * T) / (sigma * sqrtT);
    var d2 = d1 - sigma * sqrtT;
    return Math.exp(-r * T) * (K * normcdf(-d2) - F * normcdf(-d1));
}

/* Black-76 Greeks */
function black76Greeks(F, K, sigma, T, r, isCall) {
    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(F / K) + 0.5 * sigma * sigma * T) / (sigma * sqrtT);
    var d2 = d1 - sigma * sqrtT;
    var disc = Math.exp(-r * T);
    var nd1 = normcdf(isCall ? d1 : -d1);
    var npd1 = normpdf(d1);
    return {
        delta: disc * (isCall ? normcdf(d1) : normcdf(d1) - 1),
        gamma: disc * npd1 / (F * sigma * sqrtT),
        theta: -disc * F * npd1 * sigma / (2 * sqrtT),
        vega: disc * F * npd1 * sqrtT / 100,
        rho: -T * (isCall ? black76Call(F,K,sigma,T,r) : black76Put(F,K,sigma,T,r))
    };
}

/* Black-Scholes for comparison */
function bsCall(S, K, sigma, T, r) {
    var sqrtT = Math.sqrt(T);
    var d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * sqrtT);
    var d2 = d1 - sigma * sqrtT;
    return S * normcdf(d1) - K * Math.exp(-r * T) * normcdf(d2);
}

/* Asian option — moment matching */
function asianMomentMatch(F, K, sigma, T, r, nFixings) {
    // Mean of arithmetic average under risk-neutral measure
    var M1 = F; // E[A] = F for equally-spaced fixings on futures
    // Second moment approximation
    var sigmaEff2 = 0;
    for (var i = 0; i < nFixings; i++) {
        for (var j = 0; j < nFixings; j++) {
            var ti = T * (i + 1) / nFixings;
            var tj = T * (j + 1) / nFixings;
            var minT = Math.min(ti, tj);
            sigmaEff2 += Math.exp(sigma * sigma * minT);
        }
    }
    sigmaEff2 = Math.log(sigmaEff2 / (nFixings * nFixings)) / T;
    var sigmaEff = Math.sqrt(sigmaEff2);
    // Use Black-76 with effective vol
    return black76Call(F, K, sigmaEff, T, r);
}

/* Effective vol — bisection to find vol that reprices */
function effectiveVol(asianPrice, F, K, T, r) {
    var lo = 0.001, hi = 3.0;
    for (var i = 0; i < 50; i++) {
        var mid = (lo + hi) / 2;
        var price = black76Call(F, K, mid, T, r);
        if (price < asianPrice) lo = mid;
        else hi = mid;
    }
    return (lo + hi) / 2;
}
```

- [ ] **Step 2: Verify MC-6 renders correctly**

Check: Black-76 calculator at F=80, K=80, σ=30%, T=0.5, r=5% produces correct ATM prices. Asian pricer gives lower price than vanilla. Cost-of-carry explorer shows contango/backwardation transition.

---

### Task 4: Batch 1 Site Integration

**Files:**
- Modify: `index.html`, `topic-finance.html`, `sitemap.xml`, `level-advanced.html`, `level-a-level.html`
- Modify: `mc1_day_counts.html` (update series nav)

- [ ] **Step 1: Archive files**

```bash
STAMP=$(date +%Y%m%d_%H%M)
cp index.html Archive/index_${STAMP}.html
cp topic-finance.html Archive/topic-finance_${STAMP}.html
cp sitemap.xml Archive/sitemap_${STAMP}.xml
cp level-advanced.html Archive/level-advanced_${STAMP}.html
cp level-a-level.html Archive/level-a-level_${STAMP}.html
cp mc1_day_counts.html Archive/mc1_day_counts_${STAMP}.html
```

- [ ] **Step 2: Update index.html**

Add 3 entries to Quantitative Finance topics array (after MC-1 entry, before closing `]`):

```javascript
{ title: "Volatility Quoting: Surface to Model Input",
  desc: "Convert between strike, delta, and moneyness \u2014 build and explore the implied volatility surface from market quotes",
  file: "mc2_vol_surface.html", difficulty: 3 },
{ title: "Interest Rate Volatility: Normal vs Lognormal",
  desc: "Convert between Black and Bachelier vol conventions \u2014 calibrate SABR to swaption smiles with step-by-step working",
  file: "mc4_ir_vol.html", difficulty: 3 },
{ title: "Commodity Options & Black-76",
  desc: "Price options on futures with Black-76 \u2014 Asian options, cost-of-carry, and the differences from Black-Scholes",
  file: "mc6_commodities.html", difficulty: 2 },
```

- [ ] **Step 3: Update topic-finance.html**

Add 3 cards to card-grid (after MC-1 card). Add 3 entries to Suggested Learning Order.

- [ ] **Step 4: Update sitemap.xml**

Add 3 URL entries before `</urlset>`.

- [ ] **Step 5: Update level pages**

Add MC-2 and MC-4 to `level-advanced.html`. Add MC-6 to `level-a-level.html`.

- [ ] **Step 6: Update series nav in MC-1 and all Batch 1 pages**

In `mc1_day_counts.html`, update series nav: MC-2, MC-4, MC-6 change from `.future` divs to `<a class="series-item built" href="mc2_vol_surface.html">` (etc.). Add `.built` CSS class.

In each Batch 1 page's series nav: MC-1 and the other two Batch 1 modules are `<a class="series-item built">` links. The active module is `.active`. MC-3, MC-5, MC-7 remain `.future`.

- [ ] **Step 7: Commit Batch 1**

```bash
git add mc2_vol_surface.html mc4_ir_vol.html mc6_commodities.html \
        index.html topic-finance.html sitemap.xml \
        level-advanced.html level-a-level.html mc1_day_counts.html \
        Archive/
git commit -m "Add Batch 1: MC-2 (Vol Surface), MC-4 (IR Vol), MC-6 (Commodities)"
```

---

## Batch 2: MC-3 + MC-7 (Parallel)

MC-3 depends on MC-2 (vol surface language). MC-7 depends only on MC-1.

---

### Task 5: Build MC-3 — FX Options: Delta Conventions & Vol Pillars

**Files:**
- Create: `mc3_fx_options.html`

- [ ] **Step 1: Create mc3_fx_options.html with full HTML structure**

Title: "FX Options: Delta Conventions & Vol Pillars"
Subtitle: "How three market quotes define an entire volatility surface"
Meta description: "Recover the FX vol smile from ATM, risk reversal, and butterfly quotes. Compare delta conventions and ATM definitions with interactive tools." (148 chars)
Canonical: `https://mathsedu.org/mc3_fx_options.html`
Difficulty: Advanced (3/4)

**Series nav:** MC-3 `.active`, MC-1/MC-2/MC-4/MC-6 as `.built` links, MC-5/MC-7 as `.future`.

**9 sections** as specified in design spec (Section 4 of consolidated spec).

**Key JavaScript functions:**

```javascript
/* normcdf(x), norminv(p) — same as MC-2 */

/* Recover wing vols from pillars */
function pillarsToVols(atm, rr25, bf25, rr10, bf10) {
    var call25 = atm + bf25 + 0.5 * rr25;
    var put25 = atm + bf25 - 0.5 * rr25;
    var result = { atm: atm, call25: call25, put25: put25 };
    if (isFinite(rr10) && isFinite(bf10)) {
        result.call10 = atm + bf10 + 0.5 * rr10;
        result.put10 = atm + bf10 - 0.5 * rr10;
    }
    return result;
}

/* Delta to strike with premium convention adjustment */
function deltaToStrikeAdj(delta, F, sigma, T, premIncluded) {
    var sqrtT = Math.sqrt(T);
    if (!premIncluded) {
        // Standard (premium-excluded)
        return F * Math.exp(-norminv(delta) * sigma * sqrtT + 0.5 * sigma * sigma * T);
    }
    // Premium-included: iterative solution
    // Δ_prem = Δ_BS - C/S, solve numerically
    var K = F * Math.exp(-norminv(delta) * sigma * sqrtT + 0.5 * sigma * sigma * T);
    for (var i = 0; i < 20; i++) {
        var d1 = (Math.log(F / K) + 0.5 * sigma * sigma * T) / (sigma * sqrtT);
        var bsDelta = normcdf(d1);
        var callPrice = F * normcdf(d1) - K * normcdf(d1 - sigma * sqrtT);
        var premDelta = bsDelta - callPrice / F;
        var err = premDelta - delta;
        // Newton step
        var dErr = -normpdf(d1) / (K * sigma * sqrtT) * (1 + callPrice / (F * K));
        K -= err / dErr;
        if (Math.abs(err) < 1e-8) break;
    }
    return K;
}

/* DNS ATM strike */
function dnsStrike(F, sigma, T) {
    return F * Math.exp(0.5 * sigma * sigma * T);
}

/* Cubic spline interpolation for smile rendering */
function cubicSplineInterp(points) {
    // points = [{x, y}, ...] sorted by x
    // Returns function that evaluates the spline at any x
    // Natural cubic spline with zero second derivatives at endpoints
    var n = points.length - 1;
    var h = [], alpha = [], l = [], mu = [], z = [];
    // ... standard tridiagonal system solve
    // Returns interpolation function
}
```

- [ ] **Step 2: Verify MC-3 renders correctly**

Check: FX Vol Surface Builder with ATM=8.5%, RR25=−1.2%, BF25=0.3% produces 25Δ call=8.2%, put=9.4%. Delta convention toggle shows visible shift. ATM comparison shows 3 distinct strikes.

---

### Task 6: Build MC-7 — Swap Bootstrapping & Curve Construction

**Files:**
- Create: `mc7_bootstrapping.html`

- [ ] **Step 1: Create mc7_bootstrapping.html with full HTML structure**

Title: "Swap Bootstrapping & Curve Construction"
Subtitle: "From par swap rates to discount factors — the foundation of every fixed income derivative"
Meta description: "Bootstrap discount factors from par swap rates. Compare OIS and IBOR curves in the multi-curve framework. Interactive DV01 calculator with tenor bucketing." (157 chars)
Canonical: `https://mathsedu.org/mc7_bootstrapping.html`
Difficulty: Advanced (3/4)

**Series nav:** MC-7 `.active`, MC-1/MC-2/MC-4/MC-6 as `.built` links, MC-3 as `.built` (built in same batch), MC-5 as `.future`.

**9 sections** as specified in design spec (Section 7 of consolidated spec).

**Key JavaScript functions:**

```javascript
/* Bootstrap discount factors from par swap rates */
function bootstrapCurve(parRates, tenors, freq) {
    // parRates: array of par swap rates (decimal)
    // tenors: array of maturities in years [1, 2, 3, 5, 7, 10]
    // freq: payment frequency per year (1=annual, 2=semi-annual)
    var curve = []; // [{t, df}]
    // Short end: 1y discount factor from 1y par rate
    // D(1) = 1 / (1 + S_1 / freq) for 1y
    for (var i = 0; i < tenors.length; i++) {
        var T = tenors[i];
        var S = parRates[i];
        // Sum of known discount factors × day fraction
        var sumDF = 0;
        var dt = 1 / freq;
        for (var t = dt; t < T - 0.001; t += dt) {
            var df = interpDF(t, curve);
            sumDF += df * dt;
        }
        // Solve for D(T): S × (sumDF + D(T)×dt) = 1 - D(T)
        // S × sumDF × + S × D(T) × dt = 1 - D(T)
        // D(T) × (1 + S × dt) = 1 - S × sumDF
        var DT = (1 - S * sumDF) / (1 + S * dt);
        curve.push({ t: T, df: DT });
    }
    return curve;
}

/* Log-linear interpolation of discount factors */
function interpDF(t, curve) {
    if (curve.length === 0) return 1;
    if (t <= curve[0].t) {
        // Extrapolate flat from first point
        var r = -Math.log(curve[0].df) / curve[0].t;
        return Math.exp(-r * t);
    }
    if (t >= curve[curve.length - 1].t) {
        var rLast = -Math.log(curve[curve.length-1].df) / curve[curve.length-1].t;
        return Math.exp(-rLast * t);
    }
    // Find bracketing points
    for (var i = 0; i < curve.length - 1; i++) {
        if (t >= curve[i].t && t <= curve[i+1].t) {
            var frac = (t - curve[i].t) / (curve[i+1].t - curve[i].t);
            var logDF = Math.log(curve[i].df) * (1-frac) + Math.log(curve[i+1].df) * frac;
            return Math.exp(logDF);
        }
    }
    return 1;
}

/* Zero rate from discount factor */
function zeroRate(t, curve) {
    var df = interpDF(t, curve);
    if (t <= 0 || df <= 0) return 0;
    return -Math.log(df) / t;
}

/* Forward rate between two tenors */
function forwardRate(t1, t2, curve) {
    var df1 = interpDF(t1, curve);
    var df2 = interpDF(t2, curve);
    var dt = t2 - t1;
    if (dt <= 0 || df2 <= 0) return 0;
    return (df1 / df2 - 1) / dt;
}

/* Par swap rate from curve (for verification) */
function parSwapRate(T, curve, freq) {
    var dt = 1 / freq;
    var sumDF = 0;
    for (var t = dt; t <= T + 0.001; t += dt) {
        sumDF += interpDF(t, curve) * dt;
    }
    if (sumDF <= 0) return 0;
    return (1 - interpDF(T, curve)) / sumDF;
}

/* DV01 via bump-and-reprice */
function computeDV01(notional, maturity, fixedRate, curve, freq) {
    // Total DV01 and bucketed by tenor
    var bump = 0.0001; // 1bp
    // ... bump each input par rate, re-bootstrap, reprice swap
}
```

- [ ] **Step 2: Verify MC-7 renders correctly**

Check: Bootstrapper with rates [4.50, 4.25, 4.10, 3.90, 3.80, 3.75]% at [1,2,3,5,7,10]y produces downward-sloping zero curve. Multi-curve toggle shows visible OIS-IBOR basis. DV01 calculator produces sensible bucketed risk.

---

### Task 7: Batch 2 Site Integration

**Files:**
- Modify: `index.html`, `topic-finance.html`, `sitemap.xml`, `level-advanced.html`
- Modify: all previously-built MC pages (series nav updates)

- [ ] **Step 1: Archive, update index.html, topic-finance.html, sitemap.xml, level pages**

Same pattern as Task 4. Add MC-3 and MC-7 entries.

- [ ] **Step 2: Update series nav in ALL built MC pages (MC-1, MC-2, MC-3, MC-4, MC-6, MC-7)**

All 6 built modules now link to each other. Only MC-5 remains `.future`.

- [ ] **Step 3: Commit Batch 2**

```bash
git add mc3_fx_options.html mc7_bootstrapping.html \
        index.html topic-finance.html sitemap.xml level-advanced.html \
        mc1_day_counts.html mc2_vol_surface.html mc4_ir_vol.html mc6_commodities.html \
        Archive/
git commit -m "Add Batch 2: MC-3 (FX Options), MC-7 (Bootstrapping)"
```

---

## Batch 3: MC-5 (Sequential)

MC-5 depends on MC-7 for the discount factor/bootstrapping framework.

---

### Task 8: Build MC-5 — Credit Derivatives: Spread to Upfront

**Files:**
- Create: `mc5_credit.html`

- [ ] **Step 1: Create mc5_credit.html with full HTML structure**

Title: "Credit Derivatives: Spread to Upfront"
Subtitle: "From running spreads to standardised coupons — how the CDS market changed after 2009"
Meta description: "Convert CDS par spreads to upfront payments. Bootstrap hazard rates from market quotes. Explore recovery rate sensitivity with interactive calculators." (155 chars)
Canonical: `https://mathsedu.org/mc5_credit.html`
Difficulty: Advanced (3/4)

**Series nav:** MC-5 `.active`, all other 6 modules as `.built` links.

**8 sections** as specified in design spec (Section 8 of consolidated spec).

**Key JavaScript functions:**

```javascript
/* Survival probability from piecewise hazard rates */
function survivalProb(t, hazardRates, tenors) {
    // hazardRates[i] applies between tenors[i] and tenors[i+1]
    var Q = 1;
    var prevT = 0;
    for (var i = 0; i < tenors.length; i++) {
        if (t <= tenors[i]) {
            Q *= Math.exp(-hazardRates[i] * (t - prevT));
            return Q;
        }
        Q *= Math.exp(-hazardRates[i] * (tenors[i] - prevT));
        prevT = tenors[i];
    }
    // Beyond last tenor: flat extrapolation
    Q *= Math.exp(-hazardRates[hazardRates.length-1] * (t - prevT));
    return Q;
}

/* Protection leg PV */
function protectionLegPV(T, hazardRates, tenors, recovery, discRate) {
    // Numerical integration: (1-R) × Σ D(tᵢ) × [Q(tᵢ₋₁) - Q(tᵢ)]
    var dt = 0.25; // quarterly steps
    var pv = 0;
    var prevQ = 1;
    for (var t = dt; t <= T + 0.001; t += dt) {
        var D = Math.exp(-discRate * t);
        var Q = survivalProb(t, hazardRates, tenors);
        pv += D * (prevQ - Q);
        prevQ = Q;
    }
    return (1 - recovery) * pv;
}

/* Risky annuity (RPV01) */
function riskyAnnuity(T, hazardRates, tenors, discRate, freq) {
    var dt = 1 / freq;
    var rpv01 = 0;
    for (var t = dt; t <= T + 0.001; t += dt) {
        var D = Math.exp(-discRate * t);
        var Q = survivalProb(t, hazardRates, tenors);
        rpv01 += D * Q * dt;
    }
    return rpv01;
}

/* Par spread from hazard rates */
function parSpread(T, hazardRates, tenors, recovery, discRate) {
    var prot = protectionLegPV(T, hazardRates, tenors, recovery, discRate);
    var rpv01 = riskyAnnuity(T, hazardRates, tenors, discRate, 4);
    if (rpv01 <= 0) return 0;
    return prot / rpv01;
}

/* Upfront from spread */
function upfrontFromSpread(spread, coupon, rpv01) {
    return (spread - coupon) * rpv01;
}

/* Bootstrap hazard rates from CDS par spreads */
function bootstrapHazardRates(parSpreads, cdsTenors, recovery, discRate) {
    var hazardRates = [];
    var tenors = [];
    for (var i = 0; i < cdsTenors.length; i++) {
        var T = cdsTenors[i];
        var targetSpread = parSpreads[i];
        tenors.push(T);
        // Bisection to find h_i
        var lo = 0.0001, hi = 0.5;
        for (var iter = 0; iter < 50; iter++) {
            var mid = (lo + hi) / 2;
            hazardRates.push(mid);
            var modelSpread = parSpread(T, hazardRates, tenors, recovery, discRate);
            hazardRates.pop();
            if (modelSpread < targetSpread) lo = mid;
            else hi = mid;
        }
        hazardRates.push((lo + hi) / 2);
    }
    return { hazardRates: hazardRates, tenors: tenors };
}
```

- [ ] **Step 2: Verify MC-5 renders correctly**

Check: CDS Calculator with spread=250bp, coupon=100bp, R=40%, 5y produces upfront ~6.375%. Hazard rate bootstrapper produces increasing hazard rates from term structure. Recovery sensitivity shows correct monotonic relationship.

---

### Task 9: Final Site Integration (Batch 3 + Series Completion)

**Files:**
- Modify: `index.html`, `topic-finance.html`, `sitemap.xml`, `level-advanced.html`
- Modify: ALL 7 MC pages (final series nav — all linked)

- [ ] **Step 1: Archive, add MC-5 to all integration files**

- [ ] **Step 2: Final series nav update — all 7 modules linked**

Update every MC page: all `.future` items replaced with `<a class="series-item built">` links. The active module keeps `.active` class.

- [ ] **Step 3: Commit Batch 3 + final integration**

```bash
git add mc5_credit.html index.html topic-finance.html sitemap.xml level-advanced.html \
        mc1_day_counts.html mc2_vol_surface.html mc3_fx_options.html \
        mc4_ir_vol.html mc6_commodities.html mc7_bootstrapping.html \
        Archive/
git commit -m "Add Batch 3: MC-5 (Credit) — complete Market Conventions series"
```

---

### Task 10: Copy to Edu and Push

- [ ] **Step 1: Copy all new and modified files from Edx to Edu**

```bash
for f in mc2_vol_surface.html mc3_fx_options.html mc4_ir_vol.html \
         mc5_credit.html mc6_commodities.html mc7_bootstrapping.html \
         mc1_day_counts.html index.html topic-finance.html \
         sitemap.xml level-advanced.html level-a-level.html; do
    cp /Users/mb/Documents/GitHub/Edx/$f /Users/mb/Documents/GitHub/Edu/$f
done
```

- [ ] **Step 2: Commit and push Edu**

```bash
cd /Users/mb/Documents/GitHub/Edu
git add -A
git commit -m "Complete Market Conventions series: MC-1 through MC-7"
git push origin main
```

---

## Verification Checklist (After All Batches)

- [ ] All 7 MC pages load without console errors
- [ ] Series nav on every page links to all 7 modules correctly
- [ ] All interactive tools produce correct numerical output
- [ ] HiDPI canvases render sharply
- [ ] Mobile responsive at 375px on all pages
- [ ] All cross-links resolve (no 404s)
- [ ] index.html, topic-finance.html, sitemap.xml all reference all 7 modules
- [ ] Level pages include appropriate cards
- [ ] British English throughout (no American spellings in prose)
- [ ] Footer correct on all pages
- [ ] JSON-LD, OG, Twitter tags present on all pages
