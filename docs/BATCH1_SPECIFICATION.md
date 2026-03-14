# Batch 1 — Topic Page Specifications

**Scope:** 6 new interactive visualisation pages
**Status:** APPROVED — ready to build (approved 2026-03-14)

---

## Overview

| # | Topic | File | Chapter | Accent | Difficulty | educationalLevel |
|---|-------|------|---------|--------|------------|-----------------|
| 1 | Tessellations | `tessellations.html` | Geometry | `#f87171` / `248,113,113` | 2 | Intermediate |
| 2 | Galois Theory | `galois_theory.html` | Algebra | `#60a5fa` / `96,165,250` | 3 | Advanced |
| 3 | Determinants | `determinants.html` | Linear Algebra | `#22d3ee` / `34,211,238` | 2 | Intermediate |
| 4 | Multivariable Calculus | `multivariable_calculus.html` | Calculus | `#fb923c` / `251,146,60` | 3 | Advanced |
| 5 | Vector Calculus | `vector_calculus.html` | Calculus | `#fb923c` / `251,146,60` | 3 | Advanced |
| 6 | Polar Coordinates | `polar_coordinates.html` | Algebra | `#60a5fa` / `96,165,250` | 2 | Intermediate |

**Note on chapter accents:** The TECHNICAL_BLUEPRINT.md §4.2 defines Geometry as `#f87171` and Algebra as `#60a5fa`. The Design System v2.0 defines Geometry as `#10b981` (Emerald). The Geometry pages were recently remediated to use `#10b981`. **Decision needed:** Which accent for Geometry — `#f87171` (blueprint) or `#10b981` (design system)? The specs below use `#10b981` to match the design system and the recently remediated pages.

---

## 1. Tessellations — `tessellations.html`

**Chapter:** Geometry | **Accent:** `#10b981` / `16,185,129` | **Difficulty:** ●●○○

**Title:** Tessellations
**Subtitle:** *Patterns that tile the plane without gaps or overlaps*

**Meta description (155 chars):**
`Explore regular, semi-regular, and Penrose tessellations interactively. Discover which shapes tile the plane and why, with live tiling visualisations.`

**Educational goal:** Students understand why only certain regular polygons tessellate, explore semi-regular tilings, and see how non-periodic tilings (Penrose) challenge intuition.

### Sections

#### Section 1 — Regular Polygon Tiling Lab
**Canvas:** `tilingCanvas` (700×500)

- Interactive canvas showing a plane being tiled by a chosen regular polygon
- **Buttons:** Triangle (3) | Square (4) | Pentagon (5) | Hexagon (6) | Heptagon (7) | Octagon (8)
- When a polygon is selected, the canvas attempts to tile the plane:
  - For 3, 4, 6: tiles successfully fill the canvas with no gaps, coloured in alternating shades of the accent
  - For 5, 7, 8: tiles attempt to fit but gaps appear, highlighted with a subtle pink (`#F472B6`) fill to show the impossibility
- **Slider:** "Polygon size" — scales the tiles from small (many) to large (few)
- **Result box:** Shows the interior angle calculation: `(n-2) × 180° / n = X°` and whether `360 / X` is an integer
- **Insight box:** "Only three regular polygons tessellate the plane: triangles (60°), squares (90°), and hexagons (120°). The interior angle must divide 360° exactly."

#### Section 2 — Vertex Configuration Explorer
**Canvas:** `vertexCanvas` (600×400)

- Shows a single vertex with polygons arranged around it
- **Buttons:** Preset configurations — `3.3.3.3.3.3` | `4.4.4.4` | `6.6.6` | `3.3.3.4.4` | `3.3.4.3.4` | `3.6.3.6` | `3.12.12` | `4.8.8`
- Each button arranges the correct polygons around the central vertex
- Angle sum displayed live: shows each polygon's contribution and the total (must equal 360°)
- **Result box:** "Angle sum: 60° + 60° + 60° + 60° + 60° + 60° = 360° ✓" (using emerald for the check)
- Different polygon types get different fill colours (all muted, accent-tinted)

#### Section 3 — Semi-Regular (Archimedean) Tilings
**Canvas:** `archiCanvas` (700×500)

- Full-plane tiling using semi-regular patterns
- **Buttons:** All 8 Archimedean tilings by vertex configuration
- Canvas fills the plane with the selected semi-regular tiling
- Each polygon type uses a distinct colour from the palette (emerald, cyan, amber tints at low opacity)
- **Insight box:** "There are exactly 8 semi-regular tessellations — tilings that use two or more regular polygons with the same arrangement at every vertex. Archimedes catalogued them over 2,000 years ago."

#### Section 4 — Penrose Tiling
**Canvas:** `penroseCanvas` (600×600)

- Generates a Penrose tiling using kites and darts (or thick/thin rhombi)
- **Slider:** "Subdivisions" (1–6) — controls the depth of subdivision, starting from a simple star and refining
- Progressive revelation: each subdivision step doubles the complexity
- Two tile types coloured distinctly (accent + complementary)
- **Insight box:** "Penrose tilings are aperiodic — they never repeat, yet follow strict matching rules. They were discovered in the 1970s, and similar patterns appear in Islamic architecture dating back centuries."

#### Section 5 — Create Your Own Tiling
**Canvas:** `customCanvas` (700×500)

- Click to place polygon tiles on the canvas
- **Buttons:** Select polygon type (triangle, square, hexagon)
- **Button:** "Snap to grid" toggle — enables/disables vertex snapping
- **Button:** "Clear" — resets the canvas
- Polygons snap to existing edges when placed near them
- Gap detection: any uncovered area highlighted in pink at low opacity
- **Result box:** Shows coverage percentage and gap count

#### Section 6 — What Have We Learnt?
- Summary explanation panel using `.explain` class
- Key formula: interior angle = `(n-2) × 180° / n`
- Connections to: crystallography, Islamic art, Escher's work, quasicrystals

**Estimated complexity:** ~1,200 lines | **Canvases:** 5 | **Reference:** `transformations.html`

---

## 2. Galois Theory — `galois_theory.html`

**Chapter:** Algebra | **Accent:** `#60a5fa` / `96,165,250` | **Difficulty:** ●●●○

**Title:** Galois Theory
**Subtitle:** *The bridge between field extensions and symmetry groups*

**Meta description (158 chars):**
`Visualise Galois theory: see how polynomial roots, field extensions, and symmetry groups connect. Explore why quintic equations have no general formula.`

**Educational goal:** Students grasp how the symmetry group of a polynomial's roots determines whether it can be solved by radicals. The Abel-Ruffini theorem becomes visual, not just stated.

### Sections

#### Section 1 — Roots of Polynomials in the Complex Plane
**Canvas:** `rootsCanvas` (600×600)

- Complex plane with unit circle and axes
- **Buttons:** Preset polynomials — `x² - 2` | `x³ - 2` | `x⁴ - 1` | `x⁵ - 1` | `x³ - 3x + 1` | `x⁵ - x + 1`
- Roots plotted as glowing dots on the complex plane
- Conjugate pairs connected with dashed lines
- **Slider:** Coefficient perturbation — smoothly varies one coefficient to show roots migrating
- **Result box:** Lists all roots with their values (real and complex parts)
- Lines of symmetry (reflection through real axis for real-coefficient polynomials) shown as guides

#### Section 2 — Permutations of Roots
**Canvas:** `permCanvas` (650×400)

- Shows the roots from Section 1 arranged in a circle
- **Buttons:** Apply specific permutations — e.g., (1 2), (1 2 3), (1 2)(3 4)
- When a permutation is applied, roots animate to their new positions (smooth arc transitions)
- Tracks which permutations preserve the algebraic relations among roots
- **Result box:** Shows the permutation in cycle notation and whether it's a valid automorphism
- **Insight box:** "Not every permutation of the roots is an automorphism of the field extension. Only those that preserve all polynomial relations qualify — these form the Galois group."

#### Section 3 — The Galois Group
**Canvas:** `galoisCanvas` (500×500)

- Cayley table of the Galois group for the selected polynomial (from Section 1)
- Clickable cells that highlight the row and column elements
- Group elements labelled with their permutation cycle notation
- **Buttons:** Show subgroups | Show normal subgroups | Show quotient
- Subgroups highlighted as coloured blocks within the table
- **Result box:** Group name (e.g., "S₃", "Z₄", "A₅"), order, and whether it's solvable
- **Insight box:** "A polynomial is solvable by radicals if and only if its Galois group is a solvable group — one that can be broken down through a chain of normal subgroups with abelian quotients."

#### Section 4 — The Tower of Field Extensions
**Canvas:** `towerCanvas` (500×500)

- Vertical tower diagram showing field extensions: Q ⊂ Q(√2) ⊂ Q(√2, √3) ⊂ ...
- Each level is a horizontal bar, width proportional to the degree of the extension
- **Buttons:** Example towers — `√2` | `∛2` | `ζ₅` (5th root of unity) | `unsolvable quintic`
- Animated build-up: bars appear one at a time from the bottom
- Degree labels between levels (e.g., "[Q(√2) : Q] = 2")
- Corresponding Galois group elements shown alongside each level
- **Insight box:** "Each step in the tower corresponds to adjoining a root. The degree of each extension tells you how much 'new information' that root carries."

#### Section 5 — Why the Quintic Has No Formula
**Canvas:** `quinticCanvas` (600×400)

- Side-by-side comparison:
  - Left: the tower for x⁴ - 2 (solvable) — group S₄ has a composition series with abelian quotients
  - Right: the tower for x⁵ - x + 1 (not solvable by radicals) — group S₅, A₅ is simple and non-abelian
- **Button:** "Animate proof" — steps through the argument:
  1. Show S₅ contains A₅
  2. Show A₅ is simple (no normal subgroups)
  3. Show the composition series cannot have all abelian quotients
  4. Conclude: no formula in radicals
- **Result box:** "S₅ is not solvable → no radical formula for the general quintic"
- **Insight box:** "Évariste Galois proved this at age 19, the night before he died in a duel. His letter, scrawled in haste, founded an entire branch of mathematics."

#### Section 6 — What Have We Learnt?
- Summary: the connection polynomial → roots → permutations → Galois group → solvability
- Timeline: Abel (1824), Galois (1832), modern formulation

**Estimated complexity:** ~1,400 lines | **Canvases:** 5 | **Reference:** `group_theory.html`

---

## 3. Determinants — `determinants.html`

**Chapter:** Linear Algebra | **Accent:** `#22d3ee` / `34,211,238` | **Difficulty:** ●●○○

**Title:** Determinants
**Subtitle:** *A single number capturing the essence of a matrix*

**Meta description (153 chars):**
`Visualise matrix determinants as area and volume scaling factors. Explore 2×2 and 3×3 determinants with interactive geometric interpretations.`

**Educational goal:** Students see the determinant as a geometric quantity (area/volume scaling, orientation) rather than just a calculation recipe.

### Sections

#### Section 1 — The 2×2 Determinant as Area
**Canvas:** `areaCanvas` (600×500)

- Shows the unit square [e₁, e₂] and its image under a 2×2 matrix transformation
- **Matrix input:** 2×2 grid of number inputs (a, b, c, d) with bracket symbols
- **Preset buttons:** Identity | Rotation 45° | Shear | Scale 2× | Reflection | Singular
- Unit square drawn in muted white outline
- Transformed parallelogram drawn in accent colour with semi-transparent fill
- Area of the parallelogram displayed as `|det(A)| = |ad - bc|`
- When det < 0: orientation flip indicated by reversing the fill pattern and showing a pink indicator
- When det = 0: parallelogram collapses to a line, highlighted with amber
- **Slider:** "Animate parameter" — smoothly interpolates from identity to the selected matrix
- **Result box:** `det(A) = ad - bc = (a)(d) - (b)(c) = VALUE` with colour-coded terms

#### Section 2 — Geometric Meaning: Scaling and Orientation
**Canvas:** `geoCanvas` (600×400)

- Grid of dots transformed by the matrix
- Shows how the grid stretches, shears, and possibly flips
- **Buttons:** "Show eigenvectors" | "Show area grid" | "Animate transformation"
- Eigenvectors overlaid as bold coloured arrows when toggled
- Area grid shows unit cells, each with its scaled area value
- **Insight box:** "The determinant tells you three things at once: how much areas scale (|det|), whether orientation is preserved (sign of det), and whether the transformation is invertible (det ≠ 0)."

#### Section 3 — The 3×3 Determinant as Volume
**Canvas:** `volumeCanvas` (600×500)

- 3D wireframe view of a unit cube and its image under a 3×3 matrix
- Simple isometric projection (no WebGL — pure Canvas 2D with isometric math)
- **Matrix input:** 3×3 grid of number inputs
- **Preset buttons:** Identity | Rotation | Scale | Singular (det=0)
- Unit cube in muted outline, transformed parallelepiped in accent
- Volume = |det(A)| displayed alongside
- **Slider:** "Rotation angle" — rotates the viewing angle of the 3D projection
- **Result box:** Shows the cofactor expansion calculation step by step

#### Section 4 — Properties of the Determinant
**Canvas:** `propsCanvas` (600×350)

- Interactive demonstration of key properties:
- **Buttons:** "Row swap" | "Row scale" | "Row add" | "Transpose"
- Each button applies the operation to a displayed matrix and shows how det changes:
  - Row swap → det changes sign (animated sign flip)
  - Row scale by k → det multiplied by k
  - Row add → det unchanged (highlighted with emerald)
  - Transpose → det unchanged
- Before/after matrices shown side by side with the determinant value
- **Result box:** "det(AB) = det(A) × det(B)" demonstrated with a product example

#### Section 5 — Cramer's Rule Visualised
**Canvas:** `cramerCanvas` (600×400)

- System of 2 equations displayed as two intersecting lines
- **Sliders:** Coefficients a₁, b₁, c₁, a₂, b₂, c₂
- Shows three parallelograms: the coefficient determinant (D), and the two numerator determinants (Dx, Dy)
- Solution point highlighted at the intersection
- **Result box:** `x = Dx/D = VALUE, y = Dy/D = VALUE`
- When D = 0: lines are parallel (no solution) or coincident (infinite solutions)
- **Insight box:** "Cramer's rule replaces each column of coefficients with the constants to find each variable — it's a ratio of areas."

#### Section 6 — Why Rotation Matrices Have det = ±1
- Short focused panel (no canvas — formula and insight only)
- Shows a general 2D rotation matrix `R(θ) = [[cos θ, -sin θ], [sin θ, cos θ]]`
- Calculates `det(R) = cos²θ + sin²θ = 1` — always, for any angle
- Shows that reflections have `det = -1` (orientation reversal)
- Key insight: "Rotations preserve area and orientation → det = 1. Reflections preserve area but flip orientation → det = -1. This is why the group of distance-preserving transformations splits neatly into rotations (det = 1) and reflections (det = -1)."
- Links to `transformations.html` for interactive exploration

#### Section 7 — What Have We Learnt?
- Summary panel with key takeaways
- Formula reference: 2×2 and 3×3 determinant formulas
- Connections to: eigenvalues (det = product of eigenvalues), invertibility, change of variables in integration

**Estimated complexity:** ~1,200 lines | **Canvases:** 5 | **Reference:** `eigenvalues.html`

---

## 4. Multivariable Calculus — `multivariable_calculus.html`

**Chapter:** Calculus | **Accent:** `#fb923c` / `251,146,60` | **Difficulty:** ●●●○

**Title:** Multivariable Calculus
**Subtitle:** *Calculus in higher dimensions — partial derivatives, gradients, and Hessians*

**Meta description (156 chars):**
`Visualise partial derivatives, gradient vectors, directional derivatives, and Hessian matrices. Explore calculus of functions with multiple variables.`

**Educational goal:** Students build geometric intuition for partial derivatives (slicing a surface), gradients (direction of steepest ascent), and the Hessian (curvature classification).

### Sections

#### Section 1 — Surfaces in 3D
**Canvas:** `surfaceCanvas` (700×500)

- Isometric wireframe rendering of f(x,y) as a surface (mesh grid)
- **Buttons:** Preset functions — `x² + y²` (paraboloid) | `sin(x)cos(y)` (egg carton) | `x² - y²` (saddle) | `e^(-(x²+y²))` (Gaussian bump) | `xy` (hyperbolic)
- **Sliders:** "Rotation" — rotates the 3D view | "Zoom" — scales the view
- Surface coloured by height using a gradient (low = muted → high = accent)
- Subtle grid lines on the surface mesh
- **Result box:** Shows the function formula

#### Section 2 — Partial Derivatives as Slices
**Canvas:** `sliceCanvas` (700×500)

- Same surface as Section 1, but with a slice plane visible
- **Buttons:** "∂f/∂x (fix y)" | "∂f/∂y (fix x)"
- **Sliders:** "Slice position" — moves the slice plane along the fixed axis
- The slice plane intersects the surface, creating a curve
- That curve is extracted and drawn in a 2D subplot (right side or below)
- A tangent line at the current point shown on the 2D curve
- Tangent slope = the partial derivative value
- **Result box:** `∂f/∂x at (x₀, y₀) = VALUE` with the derivative formula shown

#### Section 3 — The Gradient Vector
**Canvas:** `gradientCanvas` (600×600)

- Top-down contour map of the selected function
- Contour lines drawn at regular intervals (like a topographic map)
- **Click interaction:** Click anywhere on the contour map to place a point
- At the clicked point, draw the gradient vector as an arrow (pointing uphill, perpendicular to contours)
- Arrow length proportional to |∇f|
- **Slider:** "Show gradient field" — overlays a grid of gradient arrows across the map
- **Result box:** `∇f(x₀, y₀) = (∂f/∂x, ∂f/∂y) = (VALUE, VALUE)`
- **Insight box:** "The gradient always points in the direction of steepest ascent. Its magnitude tells you how steep that climb is. Contour lines are always perpendicular to the gradient."

#### Section 4 — Directional Derivatives
**Canvas:** `dirCanvas` (600×500)

- Contour map with a point and a direction vector
- **Slider:** "Direction angle θ" (0–360°) — rotates the direction vector
- The directional derivative value updates in real time as θ changes
- **Explicitly show the angle α between the direction vector û and the gradient ∇f** — draw both vectors from the same point with the angle arc labelled between them. This makes the dot-product formula `|∇f| cos(α)` visually obvious rather than appearing from nowhere.
- A small 1D graph below shows the directional derivative as a function of θ (sinusoidal)
- Maximum occurs when α = 0 (direction aligns with gradient, highlighted in emerald)
- Zero occurs when α = 90° (perpendicular to gradient)
- Minimum when α = 180° (pointing opposite to gradient)
- **Result box:** `Dᵤf = ∇f · û = |∇f| cos(α) = VALUE` — with α displayed alongside
- **Insight box:** "The directional derivative is the dot product of the gradient with the unit direction vector. The angle α between them determines everything: when you walk along the gradient (α = 0°), the slope is steepest. Perpendicular to it (α = 90°), the ground is level. The cos(α) factor is not a trick — it's the geometry of projection."

#### Section 5 — Critical Points and the Hessian
**Canvas:** `hessianCanvas` (600×500)

- Contour map with critical points marked
- **Buttons:** Preset functions with different critical point types — "Local min" | "Local max" | "Saddle" | "Degenerate"
- At each critical point, show the Hessian matrix and its eigenvalues
- Classification: both eigenvalues positive → local min (emerald), both negative → local max (accent), mixed signs → saddle (amber)
- **Result box:** Shows the Hessian matrix `H = [[fxx, fxy], [fxy, fyy]]`, eigenvalues, and classification
- The discriminant `D = fxx·fyy - fxy²` displayed with colour-coded sign
- **Insight box:** "The Hessian is the matrix of second partial derivatives. Its eigenvalues tell you the curvature in each principal direction — positive means concave up, negative means concave down."

#### Section 6 — What Have We Learnt?
- Summary: partial derivatives → gradient → directional derivative → Hessian → classification
- Key formulas reference card
- Connections to: optimisation (gradient descent), physics (potential fields), machine learning (loss landscapes)

**Estimated complexity:** ~1,400 lines | **Canvases:** 5 | **Reference:** `derivatives.html`

---

## 5. Vector Calculus — `vector_calculus.html`

**Chapter:** Calculus | **Accent:** `#fb923c` / `251,146,60` | **Difficulty:** ●●●○

**Title:** Vector Calculus
**Subtitle:** *Line integrals, surface integrals, divergence, and curl*

**Meta description (152 chars):**
`Visualise vector fields, line integrals, divergence, curl, and the great theorems of vector calculus. Interactive explorations of Green's and Stokes'.`

**Educational goal:** Students see vector fields as flow patterns, understand divergence as source/sink strength, curl as local rotation, and see how the fundamental theorems connect them.

### Sections

#### Section 1 — Vector Fields
**Canvas:** `fieldCanvas` (700×500)

- 2D vector field plotted as a grid of arrows
- **Buttons:** Preset fields — `(y, -x)` (rotation) | `(x, y)` (source) | `(-x, -y)` (sink) | `(y, x)` (shear) | `(-y, x)` (90° rotation) | `(sin(y), cos(x))` (complex)
- Arrow colour encodes magnitude (low = muted, high = accent)
- Arrow length proportional to magnitude (capped to prevent overlap)
- **Slider:** "Grid density" — controls how many arrows are drawn
- **Button:** "Drop particles" — releases particles that follow the flow (animated using `requestAnimationFrame`)
- Particles trace streamlines, fading over time
- **Result box:** Shows the field formula F(x,y) = (P(x,y), Q(x,y))

#### Section 2 — Line Integrals
**Canvas:** `lineCanvas` (600×500)

- Vector field from Section 1 as background
- **Buttons:** Path presets — "Straight line" | "Circle" | "Parabola" | "Custom (draw)"
- The selected path drawn as a bold curve over the field
- Along the path, show the dot product F·dr as colour intensity (green = positive work, pink = negative work)
- **Slider:** "Path parameter t" — animates a point along the path, showing the integrand at each position
- Running total of the line integral displayed as a growing bar
- **Result box:** `∫C F·dr = VALUE`
- **Insight box:** "The line integral measures the total work done by the field along the path. Where the field pushes in the direction of travel, work is positive."

#### Section 3 — Divergence — Sources and Sinks
**Canvas:** `divCanvas` (600×500)

- Vector field with divergence visualised
- **Buttons:** Same field presets as Section 1
- At each grid point, divergence value shown as a coloured circle:
  - Positive divergence → expanding circle (source) in emerald
  - Negative divergence → contracting circle (sink) in pink
  - Zero divergence → no circle
- **Slider:** "Show flux through box" — draws a small box around the cursor position and shows the net outward flux
- **Result box:** `div F = ∂P/∂x + ∂Q/∂y = VALUE at (x,y)`
- **Insight box:** "Divergence measures how much the field spreads out from a point. Positive divergence means the point is a source; negative means it's a sink."

#### Section 4 — Curl — Local Rotation
**Canvas:** `curlCanvas` (600×500)

- Vector field with curl visualised
- At each grid point, a small rotating paddle wheel icon
- Rotation speed and direction proportional to the curl value
- Positive curl → anticlockwise rotation (accent colour)
- Negative curl → clockwise rotation (complementary colour)
- **Buttons:** Same field presets
- **Slider:** "Paddle wheel size" — scales the visual indicators
- **Result box:** `curl F = ∂Q/∂x - ∂P/∂y = VALUE at (x,y)` (for 2D, scalar curl)
- **Insight box:** "Curl measures the tendency of the field to rotate around a point. Place a tiny paddle wheel in the flow — curl tells you how fast and which way it spins."

#### Section 5 — Green's Theorem
**Canvas:** `greenCanvas` (600×500)

- Vector field with a closed curve C enclosing region D
- **Buttons:** "Circle" | "Square" | "Custom (draw)"
- Left side: line integral ∮C F·dr computed by summing along the path (animated)
- Right side: double integral ∬D (∂Q/∂x - ∂P/∂y) dA computed by summing over the area (animated grid fill)
- Both values converge to the same number — displayed side by side
- **Button:** "Animate proof" — simultaneously computes both integrals, showing equality
- **Result box:** `∮C F·dr = ∬D (∂Q/∂x - ∂P/∂y) dA = VALUE`
- **Insight box:** "Green's theorem says the circulation around a boundary equals the total curl inside. It's one of the most beautiful connections in mathematics — linking a 1D integral to a 2D one."

#### Section 6 — The Big Picture Ladder
- Compact card/panel (no canvas) showing the generalisation chain:
  - **1D:** Fundamental Theorem of Calculus — `∫ₐᵇ f'(x) dx = f(b) - f(a)` — "the integral of the derivative over an interval equals the boundary values"
  - **2D:** Green's Theorem — `∮C F·dr = ∬D (∂Q/∂x - ∂P/∂y) dA` — "circulation around a boundary equals total curl inside"
  - **3D (Stokes'):** `∮C F·dr = ∬S (∇ × F)·dS` — "circulation around a loop equals the flux of the curl through any surface bounded by it"
  - **3D (Divergence):** `∯S F·dS = ∭V (∇·F) dV` — "net flux through a closed surface equals total divergence inside"
- Each row is a visual card with dimension, theorem name, formula, and one-sentence plain-English meaning
- Colour-coded: 1D = muted, 2D = accent, 3D = cyan — showing the ascent in dimension
- **Insight box:** "All four theorems say the same thing: what happens on the boundary tells you what happens inside. Each is a generalisation of the one before. This single idea — attributed to Stokes, Green, Gauss, and ultimately Cartan — is one of the deepest in all of mathematics."

#### Section 7 — What Have We Learnt?
- Summary: fields → line integrals → divergence → curl → Green's theorem → the ladder
- Connections to: electromagnetism (Maxwell's equations), fluid dynamics, differential geometry

**Estimated complexity:** ~1,400 lines | **Canvases:** 5 | **Reference:** `derivatives.html`, `electric_field_lines.html`

---

## 6. Polar Coordinates — `polar_coordinates.html`

**Chapter:** Algebra | **Accent:** `#60a5fa` / `96,165,250` | **Difficulty:** ●●○○

**Title:** Polar Coordinates
**Subtitle:** *Radius and angle — roses, spirals, and cardioids*

**Meta description (150 chars):**
`Explore polar coordinates interactively. Convert between Cartesian and polar, draw rose curves, spirals, cardioids, and limaçons with live controls.`

**Educational goal:** Students develop fluency converting between coordinate systems and build intuition for how r = f(θ) generates curves.

### Sections

#### Section 1 — The Polar Grid
**Canvas:** `gridCanvas` (600×600)

- Polar coordinate grid: concentric circles (r = 1, 2, 3, ...) and radial lines (θ = 0, π/6, π/4, π/3, ...)
- **Click interaction:** Click anywhere to place a point
- The point's (r, θ) and (x, y) coordinates displayed simultaneously
- An animated dashed line from origin to the point, with arc showing the angle θ
- **Slider:** "Angle θ" (0 to 2π) — moves a point at fixed r around the origin
- **Slider:** "Radius r" (0 to 5) — moves a point at fixed θ outward
- **Result box:** `(r, θ) = (VALUE, VALUE°) ↔ (x, y) = (r cos θ, r sin θ) = (VALUE, VALUE)`
- **Insight box:** "Polar coordinates describe position by distance from the origin and angle from the positive x-axis. Some curves that are complicated in Cartesian coordinates become beautifully simple in polar form."

#### Section 2 — Cartesian ↔ Polar Conversion
**Canvas:** `convertCanvas` (600×400)

- Split view: left half shows Cartesian grid, right half shows polar grid
- A point plotted on both simultaneously
- **Sliders:** "x" and "y" — move the Cartesian point; polar coordinates update live
- OR **Sliders:** "r" and "θ" — move the polar point; Cartesian coordinates update live
- **Button toggle:** "Drive from Cartesian" | "Drive from Polar"
- Conversion formulas displayed below:
  - `r = √(x² + y²)`, `θ = atan2(y, x)`
  - `x = r cos θ`, `y = r sin θ`
- **Result box:** Shows both coordinate pairs with colour-coded terms

#### Section 3 — Classic Polar Curves
**Canvas:** `curvesCanvas` (600×600)

- Draws r = f(θ) curves on the polar grid
- **Buttons:** "Circle" (`r = a`) | "Cardioid" (`r = a(1 + cos θ)`) | "Limaçon" (`r = a + b cos θ`) | "Rose" (`r = a cos(nθ)`) | "Spiral" (`r = aθ`) | "Lemniscate" (`r² = a² cos(2θ)`)
- **Sliders:** Parameters `a`, `b`, `n` (context-dependent on selected curve)
- Curve drawn progressively (animated trace as θ increases from 0 to 2π or beyond)
- **Slider:** "θ max" — controls how far the curve is drawn (progressive revelation)
- Current point highlighted with a dot, with (r, θ) readout
- **Result box:** Shows the equation and parameter values
- **Insight box:** "Rose curves with n petals when n is odd, 2n petals when n is even. The cardioid — 'heart shape' — appears everywhere from acoustics to the Mandelbrot set."

#### Section 4 — Rose Curve Lab
**Canvas:** `roseCanvas` (500×500)

- Dedicated explorer for r = a cos(nθ) and r = a sin(nθ)
- **Slider:** "n" (1 to 12, step 0.5) — allows non-integer n for fascinating patterns
- **Slider:** "a" (1 to 5) — amplitude
- **Button toggle:** "cos(nθ)" | "sin(nθ)"
- Shows the curve with petals counted and labelled
- Non-integer n produces curves that don't close — drawn over multiple rotations
- **Result box:** "n = 3 → 3 petals (odd n), n = 4 → 8 petals (even n), n = 2.5 → 5 petals (2 rotations to close)"
- Pattern table showing petal count vs n

#### Section 5 — Negative r: Going Backwards
**Canvas:** `negRCanvas` (500×400)

- Shows the polar grid with a point at (r, θ)
- **Slider:** "r" (-5 to 5) — when r goes negative, the point flips through the origin to the opposite side
- Animated: as r crosses zero, the point smoothly passes through the origin and emerges at angle θ + π
- Three key cases shown simultaneously:
  - (r, θ) plotted in accent colour
  - (-r, θ) plotted in pink — shows the "opposite" interpretation
  - (r, θ + π) plotted as a dashed circle — demonstrating equivalence with (-r, θ)
- **Insight box:** "Negative r means 'go backwards along the angle.' The point (-r, θ) is the same as (r, θ + π). This is one of the most common sources of confusion in polar coordinates — but once you see it, curves like r = sin(2θ) that pass through the origin make perfect sense."
- Shows a mini-example: r = cos(θ) drawn with and without negative r handling, demonstrating how the curve traces through the origin

#### Section 6 — Area in Polar Coordinates
**Canvas:** `areaCanvas` (600×500)

- Selected curve with a shaded region
- **Buttons:** Choose curve from Section 3 presets
- **Sliders:** "θ start" and "θ end" — define the integration bounds
- Shaded region filled with accent colour at low opacity
- Area computed using A = ½ ∫ r² dθ
- Small Riemann-sum wedges visible, refining as the slider increases "subdivisions"
- **Slider:** "Subdivisions" (4 to 100) — shows convergence of the area approximation
- **Result box:** `A = ½ ∫[θ₁ to θ₂] r² dθ = VALUE`
- **Insight box:** "In polar coordinates, area is swept out in wedge-shaped sectors, not rectangles. The factor of ½ comes from the area formula for a triangle with small angle dθ."

#### Section 7 — What Have We Learnt?
- Summary: polar grid, conversions, negative r, classic curves, area formula
- Key formulas reference card
- Connections to: complex numbers (r·e^(iθ)), parametric curves, navigation, antenna patterns

**Estimated complexity:** ~1,200 lines | **Canvases:** 6 | **Reference:** `parametric_curves.html`

---

## Design Compliance Checklist (All Pages)

Every page in this batch must satisfy:

### From TECHNICAL_BLUEPRINT.md
- [ ] `<html lang="en-GB">`
- [ ] Background `#0a0a1a`, text `#e0e0e0`, font Georgia serif
- [ ] Correct chapter accent colour throughout
- [ ] HiDPI canvas setup using `setupHiDPI()` or equivalent with `devicePixelRatio`
- [ ] `requestAnimationFrame` for all animations (no `setInterval`)
- [ ] Padding: `PAD = { left: 70, right: 30, top: 30, bottom: 50 }` minimum
- [ ] Standard footer with copyright, CC BY-NC-SA 4.0
- [ ] JSON-LD, Open Graph, Twitter Card SEO tags
- [ ] Back link to `index.html`
- [ ] Responsive at 600px breakpoint

### From Design System v2.0
- [ ] Semantic colours used correctly (cyan=logic, emerald=proved, amber=discovery, pink=interesting error)
- [ ] Red (`#C62828`) reserved for safety only — never used
- [ ] Georgia for narrative, Courier New for mathematics
- [ ] Navy (`#1B365D`) for result card backgrounds
- [ ] Gold (`#B8860B`) for discovery moments only
- [ ] Panels: `rgba(255,255,255,0.025)` background, `rgba(255,255,255,0.07)` border
- [ ] Insight boxes with accent left-border

### From REVIEW_PROMPT.md
- [ ] First Impression 5-second test passes
- [ ] No clipped labels, no NaN displays
- [ ] Touch targets ≥ 44×44px
- [ ] Edge cases handled (sliders at min/max)
- [ ] British English throughout
- [ ] Mathematical accuracy verified

### Publishing Checklist
- [ ] Archive modified files before changes
- [ ] Add to `chapters` array in `index.html`
- [ ] Add to `sitemap.xml`
- [ ] Update `docs/STATUS.md` and `docs/FOUNDATION.md`
- [ ] Update relevant `topic-*.html` and `level-*.html` (remove "Coming Soon" badge)
- [ ] Commit and push

---

**Awaiting approval before proceeding to build.**
