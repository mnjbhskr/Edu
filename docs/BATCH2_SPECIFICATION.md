# Batch 2 — Physics Topic Page Specifications

**Scope:** 8 new interactive visualisation pages
**Status:** Draft — awaiting review and approval before build

---

## Overview

| # | Topic | File | Chapter | Accent | Difficulty | educationalLevel |
|---|-------|------|---------|--------|------------|-----------------|
| 7 | Electromagnetism | `electromagnetism.html` | Physics | `#14b8a6` / `20,184,166` | 2 | Intermediate |
| 8 | Quantum Mechanics | `quantum_mechanics.html` | Physics | `#14b8a6` / `20,184,166` | 3 | Advanced |
| 9 | Quantum Tunnelling | `quantum_tunnelling.html` | Physics | `#14b8a6` / `20,184,166` | 3 | Advanced |
| 10 | Quantum Entanglement | `quantum_entanglement.html` | Physics | `#14b8a6` / `20,184,166` | 3 | Advanced |
| 11 | Fluid Dynamics | `fluid_dynamics.html` | Physics | `#14b8a6` / `20,184,166` | 2 | Intermediate |
| 12 | Nuclear Physics | `nuclear_physics.html` | Physics | `#14b8a6` / `20,184,166` | 2 | Intermediate |
| 13 | Pendulum Dynamics | `pendulum_dynamics.html` | Physics | `#14b8a6` / `20,184,166` | 2 | Intermediate |
| 14 | The Lorenz System | `lorenz_system.html` | Physics | `#14b8a6` / `20,184,166` | 3 | Advanced |

---

## 7. Electromagnetism — `electromagnetism.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●○○

**Title:** Electromagnetism
**Subtitle:** *Forces between charged particles and the fields they create*

**Meta description (158 chars):**
`Explore electromagnetic forces interactively. Visualise Coulomb's law, magnetic forces on moving charges, and the Lorentz force with real-time simulations.`

**Educational goal:** Students understand how electric and magnetic forces combine, the Lorentz force law, and how moving charges create magnetic fields.

**Reference:** `electric_field_lines.html`, `magnetic_fields.html`

### Sections

#### Section 1 — Coulomb's Law in Action
**Canvas:** `coulombCanvas` (700×450)

- Two charged particles on a 2D plane, draggable
- Force vectors drawn on each particle (arrows proportional to F = kq₁q₂/r²)
- **Sliders:** "Charge q₁" (-5 to +5 μC) | "Charge q₂" (-5 to +5 μC)
- Like charges repel (arrows point apart), unlike attract (arrows point toward)
- Force magnitude and direction displayed in result box
- Electric field lines drawn between the charges (streamlines)
- **Insight box:** "Coulomb's law is an inverse-square law — double the distance, quarter the force. This same pattern appears in gravity, light intensity, and sound."

#### Section 2 — Magnetic Force on a Moving Charge
**Canvas:** `magForceCanvas` (600×500)

- 3D perspective view (isometric) showing a uniform magnetic field (grid of arrows or crosses/dots for into/out of screen)
- A charged particle moves through the field
- **Button:** "Launch particle" — particle traces a circular path due to F = qv × B
- **Sliders:** "Velocity" | "Charge" | "Field strength B"
- Radius of circular orbit: r = mv/(qB) — displayed in result box
- **Buttons:** "B into page" | "B out of page" | "B horizontal"
- Path traced with fading trail
- **Insight box:** "The magnetic force is always perpendicular to the velocity — it changes direction but never speed. That is why charged particles orbit in circles in a magnetic field."

#### Section 3 — The Lorentz Force
**Canvas:** `lorentzCanvas` (700×500)

- Combined E and B fields
- **Buttons:** "E only" | "B only" | "E + B" | "Crossed E × B"
- Particle trajectory in each configuration:
  - E only: parabolic (like projectile motion)
  - B only: circular
  - E + B parallel: helical
  - E × B crossed: drift motion (cycloid)
- **Slider:** "E field strength" | "B field strength"
- Trajectory animated with trail
- **Result box:** Shows F = q(E + v × B) with colour-coded components
- **Insight box:** "The Lorentz force unifies electricity and magnetism into a single equation. It is the foundation of particle accelerators, mass spectrometers, and plasma physics."

#### Section 4 — Electromagnetic Induction
**Canvas:** `inductionCanvas` (600×400)

- A conducting loop near a bar magnet
- **Slider:** "Magnet position" — drag the magnet toward/away from the loop
- Magnetic flux through the loop computed and displayed
- Induced EMF = -dΦ/dt shown as a meter reading
- When flux is changing: current flows (animated charges in the wire)
- When flux is constant: no current
- **Buttons:** "Constant speed" | "Accelerating" | "Oscillating"
- **Result box:** `ε = -dΦ/dt = VALUE` (Faraday's law)
- **Insight box:** "Faraday discovered that a changing magnetic flux induces an electric current. This single insight powers every generator, transformer, and induction cooker on Earth."

#### Section 5 — What Have We Learnt?
- Summary: Coulomb → magnetic force → Lorentz → induction
- Key equations: F = kq₁q₂/r², F = qv × B, F = q(E + v×B), ε = -dΦ/dt
- Connections to: Maxwell's equations (already on site), electric motors, particle physics

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 8. Quantum Mechanics — `quantum_mechanics.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●●○

**Title:** Quantum Mechanics
**Subtitle:** *The rules governing atomic and subatomic behaviour*

**Meta description (155 chars):**
`Explore quantum mechanics visually. See wavefunctions, probability densities, measurement, superposition, and the uncertainty principle in action.`

**Educational goal:** Students develop intuition for wavefunctions as probability amplitudes, understand superposition and measurement, and see the uncertainty principle as a mathematical fact (not just philosophy).

**Reference:** `schrodinger_equation.html`, `wave_particle_duality.html`

### Sections

#### Section 1 — The Wavefunction
**Canvas:** `wfCanvas` (700×400)

- Shows ψ(x) as a complex-valued function: real part, imaginary part, and |ψ|² (probability density)
- **Buttons:** "Gaussian wave packet" | "Plane wave" | "Superposition" | "Energy eigenstate"
- **Slider:** "Wavenumber k" — changes the oscillation frequency
- Three curves plotted: Re(ψ) in accent, Im(ψ) in cyan, |ψ|² as filled area in amber
- **Button toggle:** "Show |ψ|²" | "Show Re/Im" | "Show both"
- **Result box:** Normalisation: ∫|ψ|² dx = 1
- **Insight box:** "The wavefunction ψ is not a physical wave you can see — it is a complex-valued probability amplitude. |ψ|² gives the probability density of finding the particle at position x."

#### Section 2 — Superposition
**Canvas:** `superCanvas` (700×400)

- Two wavefunctions shown individually, then their sum
- **Buttons:** "State |1⟩" | "State |2⟩" | "Superposition |1⟩ + |2⟩"
- **Slider:** "Coefficient ratio c₁/c₂" — blends between the two states
- Probability density |c₁ψ₁ + c₂ψ₂|² shown — NOT simply |ψ₁|² + |ψ₂|², demonstrating interference
- Highlight the cross terms in the expansion
- **Result box:** Shows |c₁|² + |c₂|² = 1 (normalisation) and the interference terms
- **Insight box:** "Quantum superposition is not 'the particle is in state 1 or state 2.' It is a genuinely new state where the probability amplitudes add, producing interference patterns that have no classical analogue."

#### Section 3 — Measurement and Collapse
**Canvas:** `measureCanvas` (600×500)

- Wavefunction in superposition displayed as |ψ|²
- **Button:** "Measure position" — picks a random position weighted by |ψ|², shows a spike
- After measurement, the wavefunction "collapses" to a narrow peak at the measured position
- **Button:** "Reset" — returns to the superposition
- Histogram of measurement outcomes builds up over repeated measurements
- **Slider:** "Number of trials" — runs N measurements and plots histogram
- Histogram converges to |ψ|² as N grows
- **Result box:** "Measured x = VALUE" with running statistics (mean, std)
- **Insight box:** "Before measurement, the particle has no definite position — only a probability distribution. The act of measurement selects one outcome, and the wavefunction collapses to match."

#### Section 4 — The Uncertainty Principle
**Canvas:** `uncertaintyCanvas` (600×400)

- Gaussian wave packet in position space (left) and its Fourier transform in momentum space (right)
- **Slider:** "Position uncertainty Δx" — narrowing the position wave packet automatically widens the momentum distribution, and vice versa
- Product Δx·Δp displayed, always ≥ ℏ/2
- The minimum-uncertainty state (Gaussian) shown as the equality case
- **Result box:** `Δx · Δp = VALUE ≥ ℏ/2 = 5.27 × 10⁻³⁵ J·s`
- **Insight box:** "The uncertainty principle is not about measurement limitations — it is a fundamental property of waves. A wave that is localised in space must be spread out in frequency. This is pure Fourier analysis, applied to quantum amplitudes."

#### Section 5 — What Have We Learnt?
- Summary: wavefunction → superposition → measurement → uncertainty
- Key concepts: probability amplitude, Born rule, collapse, complementarity
- Connections to: Schrödinger equation (on site), wave-particle duality (on site), quantum computing

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 9. Quantum Tunnelling — `quantum_tunnelling.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●●○

**Title:** Quantum Tunnelling
**Subtitle:** *Particles penetrating barriers classically forbidden*

**Meta description (156 chars):**
`Visualise quantum tunnelling through potential barriers. See how wavefunctions penetrate classically forbidden regions and explore the transmission coefficient.`

**Educational goal:** Students see tunnelling as a wave phenomenon (exponential decay inside the barrier, not teleportation), understand transmission probability, and connect to real applications.

**Reference:** `schrodinger_equation.html` (Section 2 already has basic tunnelling)

**Note:** `schrodinger_equation.html` already has a basic tunnelling section. This page goes deeper with dedicated visualisations, animated wave packets, and applications.

### Sections

#### Section 1 — The Potential Barrier
**Canvas:** `barrierCanvas` (700×450)

- Shows a rectangular potential barrier V₀ with a particle approaching from the left
- **Sliders:** "Particle energy E" | "Barrier height V₀" | "Barrier width a"
- Three regions drawn: free space (left), barrier (shaded), free space (right)
- Energy level E drawn as a horizontal line
- When E < V₀: classically forbidden region highlighted
- When E > V₀: classical transmission (no tunnelling needed)
- **Result box:** "E/V₀ = VALUE — classically forbidden" or "classically allowed"

#### Section 2 — Wavefunction Through the Barrier
**Canvas:** `wfBarrierCanvas` (700×450)

- Static solution: incident + reflected wave (left), exponential decay (inside), transmitted wave (right)
- **Sliders:** Same as Section 1 (linked)
- Real part of ψ drawn continuously across all three regions
- |ψ|² shown as filled area — demonstrating the exponential decay inside the barrier
- Amplitude of transmitted wave visible on the right
- **Button:** "Animate wave packet" — launches a Gaussian wave packet from the left; part reflects, part tunnels through
- **Insight box:** "The wavefunction does not abruptly stop at the barrier — it decays exponentially inside. If the barrier is thin enough, a non-zero amplitude emerges on the other side. This is tunnelling."

#### Section 3 — Transmission Coefficient
**Canvas:** `transCanvas` (600×400)

- Plot of transmission probability T vs particle energy E (for fixed V₀ and a)
- T = 1/(1 + V₀²sinh²(κa)/(4E(V₀-E))) for E < V₀
- **Sliders:** "Barrier height V₀" | "Barrier width a"
- As barrier gets thinner: T increases (curve shifts up)
- As barrier gets lower: T increases
- At E = V₀: T shown explicitly (transition point)
- For E > V₀: resonance peaks visible (Ramsauer-Townsend effect)
- **Result box:** `T = VALUE` at current energy
- **Insight box:** "The transmission coefficient depends exponentially on the barrier width — doubling the width can reduce tunnelling by orders of magnitude."

#### Section 4 — Applications of Tunnelling
- Card-based panel (no canvas) showing four real-world applications:
  1. **Alpha decay** — alpha particle tunnels out of a nucleus (diagram showing nuclear potential well)
  2. **Scanning Tunnelling Microscope** — electron tunnelling current maps atomic surfaces
  3. **Tunnel diode** — quantum tunnelling enables negative resistance
  4. **Nuclear fusion in stars** — protons tunnel through the Coulomb barrier at temperatures far too low for classical penetration
- Each card has a small schematic diagram (drawn inline or as a mini-canvas) and a 2-sentence explanation
- **Insight box:** "Without quantum tunnelling, the Sun would not shine. Protons in the solar core do not have enough energy to overcome their mutual repulsion classically — they tunnel through the Coulomb barrier."

#### Section 5 — What Have We Learnt?
- Summary: barrier → wavefunction decay → transmission coefficient → applications
- Key formula: T ≈ e^(-2κa) where κ = √(2m(V₀-E))/ℏ
- Connections to: Schrödinger equation (on site), nuclear physics, semiconductor physics

**Estimated complexity:** ~900 lines | **Canvases:** 3

---

## 10. Quantum Entanglement — `quantum_entanglement.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●●○

**Title:** Quantum Entanglement
**Subtitle:** *Bell's theorem, non-locality, and quantum correlations*

**Meta description (152 chars):**
`Explore quantum entanglement visually. Run Bell test experiments, compare local hidden variable models with quantum predictions, and see non-locality.`

**Educational goal:** Students understand entanglement as correlated measurement outcomes, see why Bell's inequality rules out local hidden variables, and distinguish entanglement from faster-than-light communication.

### Sections

#### Section 1 — Entangled Pairs
**Canvas:** `pairCanvas` (700×400)

- Two particles created at centre, fly apart to left and right detectors
- **Button:** "Create entangled pair" — animated particles separating
- **Button:** "Measure" — both detectors flash with their measurement outcome
- Outcomes always perfectly anti-correlated (if measuring same axis): ↑↓ or ↓↑
- Running tally of outcomes displayed
- **Slider:** "Detector angle" for each detector (0° to 360°) — rotates the measurement basis
- When angles match: perfect anti-correlation (100%)
- When angles differ: correlation depends on cos²(θ/2)
- **Result box:** "Correlation = VALUE" with angle difference shown

#### Section 2 — Local Hidden Variables vs Quantum Mechanics
**Canvas:** `bellCanvas` (600×500)

- Two models compared visually:
  - **Left:** Hidden variable model — each particle carries a predetermined spin card
  - **Right:** Quantum model — outcomes determined at measurement, correlated by entanglement
- **Button:** "Run 100 trials" — runs both models simultaneously
- Results plotted as bar charts: correlation vs angle for both models
- The hidden variable model produces a straight-line correlation (triangle bound)
- The quantum model produces cos²(θ/2) — violating the line at certain angles
- **Insight box:** "If particles carried hidden instruction cards (local realism), their correlations would follow a triangle-shaped bound. Quantum mechanics predicts — and experiments confirm — a smooth cosine curve that violates this bound."

#### Section 3 — Bell's Inequality
**Canvas:** `inequalityCanvas` (600×400)

- Plot: x-axis = angle difference θ, y-axis = correlation S
- Three curves: CHSH bound (|S| ≤ 2, horizontal line), quantum prediction (2√2 ≈ 2.83 at optimal angles), classical/LHV bound
- **Slider:** "Measurement angles" — adjusts the four angles in the CHSH protocol (a, a', b, b')
- At optimal angles (22.5°, 67.5°, etc.): S = 2√2, clearly violating |S| ≤ 2
- Violation region shaded in accent
- **Result box:** `S = VALUE` | `CHSH bound: |S| ≤ 2` | `Quantum max: 2√2 ≈ 2.83`
- **Insight box:** "Bell's theorem is not about philosophy — it is a mathematical inequality that real experiments violate. Nature is not locally realistic. Alain Aspect's experiments (1982) and the 2022 Nobel Prize confirmed this beyond doubt."

#### Section 4 — What Entanglement Is NOT
- Panel with three common misconceptions and corrections (no canvas):
  1. **"It's faster-than-light communication"** — No. Neither party can control their outcome. Correlations only appear when results are compared classically.
  2. **"Measuring one particle instantly changes the other"** — The outcomes are correlated, but no information is transmitted. Signalling is impossible.
  3. **"Entanglement is like having matching socks"** — No. Bell's theorem proves it cannot be explained by pre-existing properties (hidden variables).
- Each misconception in a styled card with pink (misconception) and emerald (correction)

#### Section 5 — What Have We Learnt?
- Summary: entangled pairs → correlations → Bell's inequality → non-locality
- Key result: CHSH inequality S ≤ 2, quantum maximum 2√2
- Connections to: quantum computing, quantum cryptography (BB84), quantum teleportation

**Estimated complexity:** ~1,000 lines | **Canvases:** 3

---

## 11. Fluid Dynamics — `fluid_dynamics.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●○○

**Title:** Fluid Dynamics
**Subtitle:** *How fluids move and behave*

**Meta description (150 chars):**
`Visualise fluid dynamics interactively. Explore Bernoulli's principle, laminar and turbulent flow, drag forces, and vortex formation with simulations.`

**Educational goal:** Students understand Bernoulli's principle as energy conservation for fluids, see the transition from laminar to turbulent flow, and connect mathematics to everyday fluid phenomena.

### Sections

#### Section 1 — Bernoulli's Principle
**Canvas:** `bernoulliCanvas` (700×400)

- Animated pipe flow with a constriction (Venturi tube)
- Fluid particles move through the pipe, speeding up in the narrow section
- Pressure gauges at wide and narrow sections
- **Slider:** "Flow rate" — changes particle speed
- **Slider:** "Constriction ratio" — narrows/widens the throat
- When constriction tightens: speed increases, pressure decreases (taller/shorter gauge bars)
- **Result box:** `P₁ + ½ρv₁² = P₂ + ½ρv₂²` with values
- **Insight box:** "Where the fluid speeds up, the pressure drops. This is not intuitive — but it is energy conservation. Kinetic energy increases, so pressure energy must decrease."

#### Section 2 — Laminar vs Turbulent Flow
**Canvas:** `flowCanvas` (700×500)

- Flow around a circular obstacle
- Particles trace streamlines
- **Slider:** "Reynolds number Re" (10 to 10,000 on log scale)
- Low Re: smooth laminar streamlines wrap around the obstacle
- Moderate Re: Von Kármán vortex street appears behind the obstacle
- High Re: chaotic turbulent flow with eddies
- **Slider:** "Obstacle size" — changes the cylinder radius
- **Result box:** `Re = ρvd/μ = VALUE`
- **Insight box:** "The Reynolds number is the single quantity that determines whether flow is smooth or chaotic. It is the ratio of inertial forces to viscous forces. Below ~2000, flow is laminar; above, turbulence begins."

#### Section 3 — Drag and Lift
**Canvas:** `dragCanvas` (600×400)

- Aerofoil cross-section in a flow field
- Streamlines above and below the wing
- Pressure distribution shown as arrows on the surface (shorter above, longer below = net upward force)
- **Slider:** "Angle of attack" (−10° to 30°)
- **Slider:** "Flow speed"
- At high angle of attack: stall occurs (flow separation visible)
- **Result box:** Lift = ½ρv²CₗA and Drag = ½ρv²CdA
- **Insight box:** "Lift is not primarily caused by path-length difference (a common misconception). It comes from the wing deflecting air downward — Newton's third law. The curved upper surface accelerates the flow, lowering pressure — Bernoulli's principle."

#### Section 4 — Vortex Formation
**Canvas:** `vortexCanvas` (600×500)

- Interactive: place a vortex on the canvas by clicking
- Vortex creates a circular flow field
- Particles trace spiralling streamlines around the vortex
- **Button:** "Add vortex" | "Add counter-rotating pair" | "Clear"
- **Slider:** "Vortex strength Γ"
- Two counter-rotating vortices interact and translate as a pair
- **Result box:** Velocity field v = Γ/(2πr)
- **Insight box:** "Vortices are the atoms of fluid dynamics. They store angular momentum, interact with each other, and persist remarkably. Smoke rings, tornadoes, and wingtip vortices are all examples."

#### Section 5 — What Have We Learnt?
- Summary: Bernoulli → laminar/turbulent → drag/lift → vortices
- Key equations: Bernoulli, Reynolds number, drag/lift formulas
- Connections to: aeroplane flight, weather, blood flow, plumbing

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 12. Nuclear Physics — `nuclear_physics.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●○○

**Title:** Nuclear Physics
**Subtitle:** *The mathematics of the atomic nucleus*

**Meta description (148 chars):**
`Explore nuclear physics interactively. Visualise nuclear binding energy, radioactive decay, fission, fusion, and the liquid drop model of the nucleus.`

**Educational goal:** Students understand nuclear stability through binding energy, see radioactive decay as a statistical process, and distinguish fission from fusion energetically.

### Sections

#### Section 1 — The Binding Energy Curve
**Canvas:** `bindingCanvas` (700×450)

- Classic binding energy per nucleon vs mass number (A) plot
- All stable isotopes plotted as small dots
- Notable nuclei labelled: ⁴He, ¹²C, ⁵⁶Fe (peak), ²³⁵U
- **Click interaction:** Hover/click on a point to see isotope name and B/A value
- ⁵⁶Fe highlighted as the most stable nucleus
- Left of peak: fusion releases energy (arrow annotation)
- Right of peak: fission releases energy (arrow annotation)
- **Result box:** Shows selected isotope details
- **Insight box:** "Iron-56 sits at the peak of the binding energy curve — it is the most tightly bound nucleus. Lighter elements release energy by fusing toward iron. Heavier elements release energy by splitting apart. This single curve explains both why stars shine and why nuclear bombs work."

#### Section 2 — Radioactive Decay
**Canvas:** `decayCanvas` (700×400)

- Grid of "nuclei" dots (e.g. 200) that randomly decay over time
- **Button:** "Start decay" — nuclei randomly flip from active (accent) to decayed (muted) using Poisson statistics
- **Slider:** "Half-life t½" (0.5 to 10 seconds)
- Live count of remaining nuclei displayed
- Exponential decay curve plotted alongside: N(t) = N₀ × 2^(-t/t½)
- **Button:** "Reset" | "Speed ×2"
- **Result box:** `N(t) = N₀ × (½)^(t/t½)` with current values
- **Insight box:** "Each nucleus has the same probability of decaying in any given interval — yet the aggregate follows a smooth exponential curve. This is the law of large numbers at work."

#### Section 3 — Fission
**Canvas:** `fissionCanvas` (600×400)

- Animated: a neutron approaches ²³⁵U → nucleus deforms (liquid drop model) → splits into two fragments + 2-3 neutrons
- **Button:** "Trigger fission" — runs the animation
- Energy released shown as a growing bar (emerald)
- Products labelled with mass numbers
- **Slider:** "Neutron energy" — shows how fission probability depends on neutron energy
- Chain reaction: fragments' neutrons can trigger further fissions (branching visual)
- **Result box:** Energy released ≈ 200 MeV per fission event
- **Insight box:** "One uranium-235 fission releases about 200 MeV — millions of times more energy per atom than any chemical reaction. The chain reaction, where released neutrons trigger further fissions, is what makes nuclear reactors and weapons possible."

#### Section 4 — Fusion
**Canvas:** `fusionCanvas` (600×400)

- Animated: two light nuclei (e.g. deuterium + tritium) approach each other
- Coulomb barrier shown as a potential energy curve
- **Slider:** "Kinetic energy" — nuclei must overcome or tunnel through the barrier
- When energy is sufficient (or tunnelling occurs): nuclei fuse → helium-4 + neutron + energy
- Energy released shown as a bar
- Temperature scale: shows the ~15 million K needed in stellar cores
- **Result box:** `²H + ³H → ⁴He + n + 17.6 MeV`
- **Insight box:** "Fusion powers every star in the universe. The challenge on Earth is achieving the extreme temperatures needed to overcome the Coulomb barrier — or engineering conditions where tunnelling becomes probable enough."

#### Section 5 — What Have We Learnt?
- Summary: binding energy → decay → fission → fusion
- Key equations: N(t) = N₀e^(-λt), E = mc², Q-value
- Connections to: stellar nucleosynthesis, nuclear power, medical imaging (PET scans)

**Estimated complexity:** ~1,000 lines | **Canvases:** 4

---

## 13. Pendulum Dynamics — `pendulum_dynamics.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●○○

**Title:** Pendulum Dynamics
**Subtitle:** *From simple harmonic motion to chaos*

**Meta description (152 chars):**
`Explore pendulum dynamics from simple oscillations to chaotic double pendulums. Visualise phase space, energy conservation, and sensitive dependence.`

**Educational goal:** Students see how the simple pendulum transitions from SHM (small angles) to non-linear dynamics (large angles) to chaos (double pendulum), with phase space as the unifying visualisation.

**Reference:** `simple_harmonic_motion.html`

### Sections

#### Section 1 — The Simple Pendulum
**Canvas:** `simpleCanvas` (600×450)

- Animated pendulum: bob on a rod, swinging
- **Slider:** "Initial angle θ₀" (5° to 170°)
- **Slider:** "Length L" (0.5 to 3 m)
- **Slider:** "Gravity g" (1 to 20 m/s²)
- Period displayed: exact (elliptic integral) vs SHM approximation T ≈ 2π√(L/g)
- At small angles: both periods agree (SHM valid)
- At large angles: exact period is noticeably longer
- **Result box:** `T_exact = VALUE s` | `T_SHM = VALUE s` | `Error = VALUE%`
- **Insight box:** "The simple pendulum is only simple at small angles. The textbook formula T = 2π√(L/g) is an approximation that breaks down when the angle is large. The exact solution requires elliptic integrals."

#### Section 2 — Phase Space Portrait
**Canvas:** `phaseCanvas` (600×500)

- Phase portrait: θ (horizontal) vs dθ/dt (vertical)
- Multiple trajectories shown simultaneously for different initial conditions
- **Slider:** "Energy" — sweeps through different energy levels
- Low energy: closed elliptical orbits (oscillation)
- At E = mgl: separatrix (the boundary between oscillation and rotation)
- High energy: open orbits (continuous rotation)
- Current state shown as a moving dot on the phase portrait
- **Buttons:** "Add trajectory" | "Clear" | "Show separatrix"
- **Insight box:** "Phase space reveals the pendulum's complete story at a glance. Closed orbits are oscillations. The figure-eight separatrix marks the transition to rotation. Every initial condition traces a unique, deterministic path."

#### Section 3 — Damped and Driven Pendulum
**Canvas:** `drivenCanvas` (600×450)

- Pendulum with damping and periodic driving force
- **Sliders:** "Damping γ" | "Driving amplitude A" | "Driving frequency ω"
- Low driving: steady-state oscillation at driving frequency (transients die out)
- Near resonance: large amplitude oscillations
- High driving: complex, possibly chaotic motion
- **Button:** "Show Poincaré section" — samples phase space at each driving period
- Poincaré section plotted on a companion phase portrait:
  - Periodic motion: finite number of dots
  - Quasiperiodic: dots form a smooth curve
  - Chaotic: dots fill a strange attractor
- **Result box:** Current amplitude, driving frequency/natural frequency ratio

#### Section 4 — The Double Pendulum
**Canvas:** `doubleCanvas` (600×600)

- Two-segment pendulum, animated
- **Sliders:** "θ₁ initial" | "θ₂ initial" | "Mass ratio m₂/m₁"
- **Button:** "Launch" | "Reset"
- Path trace: tip of the second pendulum leaves a fading trail
- **Button:** "Compare nearby trajectories" — launches two double pendulums with initial angles differing by 0.1°; both plotted simultaneously
- Initially track together, then diverge exponentially (sensitive dependence)
- Divergence metric displayed: |Δθ(t)| vs time
- **Insight box:** "The double pendulum is one of the simplest systems that exhibits genuine chaos. Two pendulums started with angles differing by less than a tenth of a degree will follow completely different paths within seconds. This is deterministic chaos — the equations are exact, but prediction is impossible."

#### Section 5 — What Have We Learnt?
- Summary: simple → phase space → driven → double → chaos
- Key concepts: period, phase space, separatrix, Poincaré section, sensitive dependence
- Connections to: weather prediction (Lorenz), three-body problem, chaos theory

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 14. The Lorenz System — `lorenz_system.html`

**Chapter:** Physics | **Accent:** `#14b8a6` / `20,184,166` | **Difficulty:** ●●●○

**Title:** The Lorenz System
**Subtitle:** *A three-equation system exhibiting chaos*

**Meta description (155 chars):**
`Visualise the Lorenz attractor and the mathematics of chaos. Explore sensitive dependence, strange attractors, and the butterfly effect interactively.`

**Educational goal:** Students see the Lorenz system as a concrete example of deterministic chaos, understand that simple equations can produce infinitely complex behaviour, and grasp why weather prediction has fundamental limits.

### Sections

#### Section 1 — The Lorenz Equations
**Canvas:** `lorenzCanvas` (700×600)

- 3D projection of the Lorenz attractor (butterfly shape)
- Trajectory traces out the attractor in real time, coloured by speed (slow = muted, fast = accent)
- **Sliders:** σ (sigma, 1-30, default 10) | ρ (rho, 1-50, default 28) | β (beta, 0.1-10, default 8/3)
- **Slider:** "View rotation" — rotates the 3D projection
- Equations displayed: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz
- **Button:** "Reset" | "Pause/Resume"
- Trail fades over time, but the attractor shape persists
- **Result box:** Current (x, y, z) values and time
- **Insight box:** "Edward Lorenz discovered this system in 1963 while modelling atmospheric convection. Three simple equations, three parameters — yet the solution never repeats and never settles down. This was the birth of chaos theory."

#### Section 2 — Sensitive Dependence on Initial Conditions
**Canvas:** `sensitiveCanvas` (700×500)

- Two trajectories starting from nearly identical initial conditions (differing by 10⁻⁶)
- Both plotted simultaneously: one in accent, one in amber
- Initially overlap perfectly, then suddenly diverge
- **Slider:** "Initial separation ε" (10⁻¹ to 10⁻¹⁰, log scale)
- **Button:** "Start" — launches both trajectories
- Time series plot below: |x₁(t) - x₂(t)| vs time on log scale — shows exponential growth
- Lyapunov exponent estimated from the slope
- **Result box:** `Lyapunov exponent λ ≈ VALUE` | `Prediction horizon ≈ VALUE time units`
- **Insight box:** "This is the butterfly effect. Two states of the atmosphere differing by the flap of a butterfly's wings will eventually produce entirely different weather. The divergence is exponential — small errors grow by a factor of e roughly every 0.9 time units."

#### Section 3 — Bifurcation Diagram
**Canvas:** `bifurcCanvas` (700×400)

- x-axis: parameter ρ (0 to 200), y-axis: z values at the attractor
- For each ρ, run the system to steady state, then plot the z-values of local maxima
- ρ < 1: single fixed point (origin)
- ρ = 1: pitchfork bifurcation → two fixed points
- ρ ≈ 13.9: transient chaos begins
- ρ ≈ 24.7: onset of the Lorenz attractor
- Higher ρ: periodic windows within chaos
- **Slider:** "Highlight ρ" — vertical line showing current parameter value
- **Result box:** Classification at current ρ: "Stable fixed point" | "Periodic orbit" | "Chaotic attractor"
- **Insight box:** "The bifurcation diagram is a map of all possible behaviours. As ρ increases, the system transitions from calm predictability through a landscape of increasing complexity. Periodic windows — oases of order within chaos — appear and disappear."

#### Section 4 — The Strange Attractor
**Canvas:** `attractorCanvas` (600×600)

- Dense rendering of the full Lorenz attractor (thousands of points)
- Colour-coded by z-value (creates the classic butterfly gradient)
- **Buttons:** "XY projection" | "XZ projection" | "YZ projection" | "3D rotation"
- 3D rotation mode: attractor slowly rotates, showing its fractal structure from all angles
- **Slider:** "Point density" — how many trajectory points to render
- **Result box:** "Fractal dimension ≈ 2.06" (Lorenz attractor is not a 2D surface nor a 3D volume)
- **Insight box:** "The Lorenz attractor is a strange attractor — it has a fractal dimension of approximately 2.06. Every trajectory on the attractor stays on it forever, yet no trajectory ever repeats. The attractor has zero volume but infinite length."

#### Section 5 — What Have We Learnt?
- Summary: Lorenz equations → sensitive dependence → bifurcation → strange attractor
- Key concepts: deterministic chaos, Lyapunov exponents, fractal dimension, prediction horizon
- Connections to: weather forecasting, turbulence, population dynamics, financial markets
- Historical note: Lorenz's 1963 paper and the founding of chaos theory

**Estimated complexity:** ~1,200 lines | **Canvases:** 4

---

## Design Compliance Checklist (All Pages)

Same checklist as Batch 1 — see `docs/BATCH1_SPECIFICATION.md` for the full compliance checklist covering TECHNICAL_BLUEPRINT.md, Design System v2.0, REVIEW_PROMPT.md, and the publishing checklist.

**Awaiting approval before proceeding to build.**
