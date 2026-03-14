# Batch 4 — AI & Intelligence Topic Page Specifications

**Scope:** 7 new interactive visualisation pages
**Status:** Draft — awaiting review and approval before build

---

## Overview

| # | Topic | File | Chapter | Accent | Difficulty | educationalLevel |
|---|-------|------|---------|--------|------------|-----------------|
| 18 | Activation Functions | `activation_functions.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 2 | Intermediate |
| 19 | Loss Landscapes | `loss_landscapes.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 2 | Intermediate |
| 20 | Universal Approximation | `universal_approximation.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 2 | Intermediate |
| 21 | Reinforcement Learning | `reinforcement_learning.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 2 | Intermediate |
| 22 | Generative Models | `generative_models.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 3 | Advanced |
| 23 | Tokenisation | `tokenisation.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 1 | Beginner |
| 24 | Neural ODEs | `neural_odes.html` | AI & Intelligence | `#a78bfa` / `167,139,250` | 3 | Advanced |

---

## 18. Activation Functions — `activation_functions.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●○○

**Title:** Activation Functions
**Subtitle:** *Non-linearity that enables neural network expressiveness*

**Meta description (155 chars):**
`Explore activation functions interactively. Compare ReLU, sigmoid, tanh, GELU and more. See why non-linearity is essential for neural network learning.`

**Educational goal:** Students understand why linear networks collapse to a single layer, see each activation function's shape and derivative, and grasp the practical trade-offs (vanishing gradients, dead neurons).

**Reference:** `neuron_and_activation.html`

### Sections

#### Section 1 — Why Non-Linearity?
**Canvas:** `whyCanvas` (700×400)

- Interactive demo: a 2-layer network trying to learn XOR (a non-linearly separable problem)
- **Buttons:** "Linear activation" | "ReLU activation"
- With linear: decision boundary is always a straight line — fails on XOR
- With ReLU: decision boundary curves — solves XOR
- Training animated: weights update, decision boundary shifts
- **Result box:** Accuracy after training: Linear = ~50%, ReLU = ~100%
- **Insight box:** "Without non-linearity, stacking layers is pointless — any composition of linear functions is just another linear function. The activation function is what gives deep networks their power."

#### Section 2 — The Activation Zoo
**Canvas:** `zooCanvas` (700×500)

- Grid display of activation functions, each in its own subplot:
  - Sigmoid: σ(x) = 1/(1+e⁻ˣ)
  - Tanh: tanh(x)
  - ReLU: max(0, x)
  - Leaky ReLU: max(αx, x)
  - ELU: x if x>0, α(eˣ-1) if x≤0
  - GELU: x·Φ(x)
  - Swish/SiLU: x·σ(x)
  - Softplus: ln(1+eˣ)
- Each subplot: function in accent, derivative in cyan (dashed)
- **Button toggle:** "Show function" | "Show derivative" | "Show both"
- **Click interaction:** Click on any subplot to expand it to full canvas
- **Insight box:** "ReLU dominates in practice because it is fast to compute and does not saturate for positive inputs. GELU — used in GPT and BERT — approximates ReLU but is smooth everywhere."

#### Section 3 — The Vanishing Gradient Problem
**Canvas:** `vanishCanvas` (600×400)

- Deep network diagram (5-10 layers)
- Gradient magnitude at each layer shown as bar height
- **Buttons:** "Sigmoid" | "Tanh" | "ReLU" — changes activation
- With sigmoid: gradients shrink exponentially toward early layers (bars get tiny)
- With ReLU: gradients maintain magnitude (bars stay level)
- **Slider:** "Number of layers" (2 to 20)
- **Result box:** Gradient at layer 1: VALUE (as fraction of layer N gradient)
- **Insight box:** "Sigmoid squashes its input into [0,1], so the maximum gradient is 0.25. After 10 layers, that is 0.25¹⁰ ≈ 10⁻⁶. The gradient has vanished. ReLU's gradient is either 0 or 1 — it does not shrink through layers."

#### Section 4 — Dead Neurons and Leaky ReLU
**Canvas:** `deadCanvas` (600×400)

- Grid of "neurons" — each shows its current activation value
- Training simulation: random inputs flow through a network with ReLU
- Neurons that always output 0 (dead) are coloured in muted grey
- **Slider:** "Learning rate" (0.001 to 1.0) — high LR kills more neurons
- **Buttons:** "ReLU" | "Leaky ReLU" — with Leaky ReLU, fewer neurons die
- Count of dead neurons displayed
- **Result box:** "Dead neurons: VALUE/TOTAL (VALUE%)"
- **Insight box:** "A ReLU neuron that receives a large negative gradient update may shift its weights so that it never activates again — it is 'dead.' Leaky ReLU avoids this by allowing a small gradient for negative inputs."

#### Section 5 — What Have We Learnt?
- Summary: non-linearity → activation zoo → vanishing gradients → dead neurons
- Quick reference table: function, range, derivative, pros/cons
- Connections to: the single neuron (on site), backpropagation (on site), gradient descent (on site)

**Estimated complexity:** ~1,000 lines | **Canvases:** 4

---

## 19. Loss Landscapes — `loss_landscapes.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●○○

**Title:** Loss Landscapes
**Subtitle:** *The geometry of neural network optimisation*

**Meta description (154 chars):**
`Visualise neural network loss landscapes. Explore gradient descent paths, local minima, saddle points, and the role of learning rate in optimisation.`

**Educational goal:** Students see the loss function as a surface in weight space, understand why saddle points are more problematic than local minima in high dimensions, and build intuition for learning rate effects.

**Reference:** `gradient_descent.html`

### Sections

#### Section 1 — The Loss Surface in 2D
**Canvas:** `surfaceCanvas` (700×500)

- Contour map of a loss function L(w₁, w₂)
- **Buttons:** "Simple bowl" | "Two minima" | "Saddle point" | "Rastrigin (many minima)" | "Rosenbrock (narrow valley)"
- Gradient descent path plotted from a starting point
- **Click interaction:** Click to set the starting point
- **Slider:** "Learning rate" (0.001 to 1.0)
- Path animated step by step with arrows showing gradient direction
- **Buttons:** "GD" | "SGD (noisy)" | "Momentum" | "Adam" — compare optimisers
- **Result box:** Current loss, iteration count, convergence status
- **Insight box:** "The loss landscape determines everything about training. A smooth bowl converges easily. A landscape with saddle points and narrow valleys is why we need momentum and adaptive learning rates."

#### Section 2 — Learning Rate Effects
**Canvas:** `lrCanvas` (600×400)

- Same landscape as Section 1, showing three GD paths simultaneously with different learning rates
- **Sliders:** "LR low" | "LR medium" | "LR high"
- Low LR: converges slowly but reliably (blue path)
- Medium LR: converges efficiently (accent path)
- High LR: oscillates or diverges (amber/pink path)
- Loss vs iteration curve plotted below for all three
- **Result box:** Final loss and iterations for each
- **Insight box:** "Too small a learning rate wastes computation. Too large and the optimiser bounces around or even diverges. The 'Goldilocks zone' depends on the landscape curvature — which is why adaptive methods like Adam adjust the rate automatically."

#### Section 3 — Saddle Points vs Local Minima
**Canvas:** `saddleCanvas` (600×500)

- 3D wireframe of a loss surface (isometric projection) with a saddle point at the centre
- Gradient descent paths approaching the saddle from different directions
- Some paths get stuck at the saddle, others escape
- **Slider:** "Noise level" (SGD noise) — higher noise helps escape saddle points
- **Button:** "Add momentum" — shows how momentum carries the optimiser past saddle points
- Eigenvalues of the Hessian at the saddle shown: one positive, one negative
- **Result box:** "Hessian eigenvalues: λ₁ = VALUE, λ₂ = VALUE" | "Saddle point (mixed signs)"
- **Insight box:** "In high-dimensional networks, saddle points are far more common than local minima. At a saddle, the loss decreases in some directions and increases in others. SGD noise and momentum both help escape these plateaux."

#### Section 4 — Optimiser Comparison
**Canvas:** `optimCanvas` (700×500)

- Challenging landscape (Rosenbrock or narrow valley)
- Multiple optimiser paths plotted simultaneously:
  - SGD (blue)
  - SGD + Momentum (cyan)
  - RMSProp (amber)
  - Adam (accent)
- All start from the same point
- **Slider:** "Global learning rate" — scales all optimisers proportionally
- Path efficiency: fewer steps to reach minimum = better
- **Result box:** Iterations to converge for each optimiser
- **Insight box:** "Adam combines the best of momentum (remembers direction) and RMSProp (adapts to curvature). It is the default optimiser for most deep learning because it works well across diverse landscapes."

#### Section 5 — What Have We Learnt?
- Summary: loss surface → learning rate → saddle points → optimiser comparison
- Key concepts: gradient, curvature, learning rate schedules, adaptive methods
- Connections to: gradient descent (on site), backpropagation (on site), overfitting (on site)

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 20. Universal Approximation — `universal_approximation.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●○○

**Title:** Universal Approximation
**Subtitle:** *Why neural networks can learn any function*

**Meta description (157 chars):**
`Visualise the universal approximation theorem. See how neural networks with one hidden layer can approximate any continuous function by combining simple units.`

**Educational goal:** Students see the theorem in action — building up a complex function by summing sigmoid/ReLU bumps, and understand that width (not depth) guarantees approximation.

### Sections

#### Section 1 — One Neuron, One Step
**Canvas:** `stepCanvas` (700×400)

- A single sigmoid neuron: σ(wx + b)
- **Sliders:** "Weight w" (-10 to 10) | "Bias b" (-5 to 5)
- Shows how changing w steepens the sigmoid (approaches a step function)
- Shows how changing b shifts the step left/right
- Target function drawn as a dashed line (e.g., a simple step)
- **Result box:** Output = σ(VALUE × x + VALUE)
- **Insight box:** "One sigmoid neuron produces one soft step. By making the weight very large, the step becomes sharp. By adjusting the bias, you choose where the step occurs."

#### Section 2 — Two Neurons, One Bump
**Canvas:** `bumpCanvas` (700×400)

- Two sigmoid neurons subtracted: σ(w(x-a)) - σ(w(x-b)) creates a bump
- **Sliders:** "Left edge a" | "Right edge b" | "Steepness w"
- Shows how subtracting two steps creates a localised bump
- **Slider:** "Height" — scales the bump amplitude
- Target: a rectangular pulse → the bump approximates it
- **Result box:** Bump formula displayed
- **Insight box:** "Two neurons, one subtraction — and you have a bump. A bump that can be positioned anywhere, made any width, and scaled to any height. This is the building block."

#### Section 3 — N Neurons, Any Function
**Canvas:** `approxCanvas` (700×500)

- Target function drawn as a bold dashed line
- **Buttons:** Target presets — "Sine wave" | "Square wave" | "Sawtooth" | "Gaussian" | "Custom (draw)"
- **Slider:** "Number of hidden neurons N" (1 to 100)
- Network output drawn as a solid accent line, building up bump by bump
- As N increases: approximation improves visually
- **Button:** "Step through" — adds one neuron at a time, showing each bump's contribution
- Error = ∫|f(x) - network(x)|² displayed, decreasing as N grows
- **Result box:** `Mean squared error = VALUE with N neurons`
- **Insight box:** "This is the universal approximation theorem in action. With enough neurons in a single hidden layer, a neural network can approximate any continuous function to any desired accuracy. The theorem guarantees existence — training finds the actual weights."

#### Section 4 — Width vs Depth
**Canvas:** `depthCanvas` (600×400)

- Compare: wide-shallow network (1 hidden layer, many neurons) vs narrow-deep network (many layers, few neurons per layer)
- Both approximate the same target function
- **Sliders:** "Neurons (wide)" (5 to 100) | "Layers (deep)" (2 to 10, neurons per layer fixed at 5)
- Error vs parameter count plotted for both architectures
- Deep networks can be more parameter-efficient for some functions
- **Result box:** "Wide: N params, error = VALUE | Deep: M params, error = VALUE"
- **Insight box:** "The universal approximation theorem works with one hidden layer — but that may require exponentially many neurons. Depth is the engineering answer: deep networks can represent the same functions with far fewer parameters. This is why 'deep learning' is deep."

#### Section 5 — What Have We Learnt?
- Summary: one step → one bump → N bumps → any function → depth efficiency
- The theorem statement (Cybenko 1989, Hornik 1991)
- Connections to: the single neuron (on site), backpropagation (on site), transformer architecture (on site)

**Estimated complexity:** ~1,000 lines | **Canvases:** 4

---

## 21. Reinforcement Learning — `reinforcement_learning.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●○○

**Title:** Reinforcement Learning
**Subtitle:** *Learning through trial, error, and reward*

**Meta description (155 chars):**
`Explore reinforcement learning interactively. Watch agents learn grid worlds, understand Q-learning, and see the exploration-exploitation trade-off in action.`

**Educational goal:** Students understand the RL loop (state → action → reward → next state), see Q-values converge through experience, and grasp exploration vs exploitation.

### Sections

#### Section 1 — The Grid World
**Canvas:** `gridCanvas` (600×600)

- 8×8 grid world with:
  - Start position (emerald)
  - Goal position (gold, with reward +10)
  - Walls/obstacles (dark)
  - Traps (pink, reward -5)
- Agent shown as an accent-coloured dot
- **Buttons:** "Step" (one action) | "Episode" (run to completion) | "Train 100 episodes" | "Reset"
- Agent moves according to its current policy
- Path traced with fading trail
- **Result box:** Episode reward, steps taken, episodes trained

#### Section 2 — Q-Learning Visualised
**Canvas:** `qCanvas` (600×600)

- Same grid, but each cell shows its Q-values as four directional arrows (up/down/left/right)
- Arrow length and colour proportional to Q-value (high = accent, low = muted)
- **Button:** "Train 1 episode" | "Train 100" | "Train 1000" | "Reset Q-table"
- Watch Q-values propagate backward from the goal as training progresses
- **Slider:** "Learning rate α" (0.01 to 1.0)
- **Slider:** "Discount factor γ" (0.1 to 0.99)
- Q-update equation displayed: Q(s,a) ← Q(s,a) + α[r + γ max Q(s',a') - Q(s,a)]
- **Result box:** Max Q at start, total reward per episode (learning curve)
- **Insight box:** "Q-learning discovers the value of each action in each state through trial and error. The discount factor γ determines how far ahead the agent looks. High γ values produce patient, far-sighted agents."

#### Section 3 — Exploration vs Exploitation
**Canvas:** `exploreCanvas` (600×400)

- Multi-armed bandit problem: 5 slot machines with different (unknown) reward distributions
- **Slider:** "Epsilon ε" (0 to 1) — the exploration rate
- Simulation: agent pulls arms, builds up estimates, balances exploring new arms vs exploiting the best known
- Running averages for each arm displayed as bars
- True means shown as dashed lines (hidden initially, revealed with toggle)
- **Buttons:** "ε-greedy" | "UCB" | "Thompson Sampling" — compare strategies
- **Result box:** Total reward, regret (vs optimal)
- **Insight box:** "The exploration-exploitation dilemma is fundamental to RL: should the agent try something new (explore) or stick with what works (exploit)? Too much exploration wastes time; too little and you miss better options."

#### Section 4 — Policy Visualisation
**Canvas:** `policyCanvas` (600×600)

- Grid world with arrows showing the learned optimal policy
- Each cell has one dominant arrow (the greedy action)
- **Button:** "Show value function" — cells coloured by V(s) = max Q(s,a)
- **Button:** "Show policy" — arrows only
- **Button:** "Animate optimal path" — agent follows the optimal policy from start to goal
- Heat map of visit frequency shown as cell opacity
- **Result box:** Optimal path length, expected reward

#### Section 5 — What Have We Learnt?
- Summary: grid world → Q-learning → exploration/exploitation → optimal policy
- Key equation: Q-learning update rule
- Connections to: game theory, robotics, AlphaGo, recommendation systems

**Estimated complexity:** ~1,100 lines | **Canvases:** 4

---

## 22. Generative Models — `generative_models.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●●○

**Title:** Generative Models
**Subtitle:** *GANs, VAEs, diffusion models, and generative systems*

**Meta description (152 chars):**
`Explore generative AI models visually. See how GANs, VAEs, and diffusion models learn to generate data by transforming noise into structured patterns.`

**Educational goal:** Students understand the core idea of generative modelling (learning a data distribution and sampling from it), and see how three major architectures approach this differently.

### Sections

#### Section 1 — What Is a Generative Model?
**Canvas:** `genCanvas` (700×400)

- 2D scatter plot of training data (e.g., two clusters, a ring, a spiral)
- **Buttons:** "Two clusters" | "Ring" | "Spiral" | "Swiss roll"
- **Button:** "Generate samples" — model generates new points from learned distribution
- Generated points in accent, training data in muted
- Quality metric: how well generated samples match the training distribution
- **Slider:** "Training epochs" — show progressive improvement
- **Result box:** "KL divergence = VALUE (lower is better)"
- **Insight box:** "A generative model learns the probability distribution of the training data, then draws new samples from it. The challenge is: how do you learn a complex distribution from examples alone?"

#### Section 2 — GANs: The Adversarial Game
**Canvas:** `ganCanvas` (700×500)

- Two networks visualised:
  - Generator (G): transforms noise z into fake data (accent arrows)
  - Discriminator (D): tries to distinguish real from fake (emerald/pink classification)
- 2D data distribution: real data points and generated points on the same plot
- **Button:** "Train 1 step" | "Train 100 steps" | "Reset"
- Watch generated distribution converge to the real distribution
- Discriminator boundary drawn (decision surface)
- **Slider:** "Generator capacity" — number of hidden neurons
- **Result box:** Discriminator accuracy (should approach 50% at equilibrium)
- **Insight box:** "GANs are a game between two networks: the generator tries to fool the discriminator, and the discriminator tries to catch fakes. At equilibrium, the generator produces data indistinguishable from real — and the discriminator is reduced to guessing."

#### Section 3 — VAEs: The Probabilistic Encoder
**Canvas:** `vaeCanvas` (700×500)

- Encoder-decoder architecture shown as a diagram
- Input data → encoder → latent space z (2D for visualisation) → decoder → reconstruction
- **Button:** "Encode training data" — maps all points to the 2D latent space
- Latent space shown as a scatter plot with KDE contours
- **Button:** "Sample from latent" | "Interpolate between points"
- Interpolation: smoothly move through latent space between two data points — decoded outputs shown
- **Slider:** "KL weight β" — balance reconstruction vs latent regularity
- **Result box:** Reconstruction error + KL divergence = ELBO
- **Insight box:** "VAEs force the latent space to be smooth and regular (by penalising deviation from a normal distribution). This means you can generate new data by simply sampling from a normal distribution and decoding."

#### Section 4 — Diffusion Models: Noise to Signal
**Canvas:** `diffusionCanvas` (700×400)

- Forward process: clean data progressively corrupted with Gaussian noise (shown as a sequence of states)
- Reverse process: noise progressively cleaned into data
- **Slider:** "Diffusion step t" (0 to T) — scrub through the noising/denoising process
- **Button:** "Forward (corrupt)" | "Reverse (generate)" — animate the full process
- Shows a 2D distribution being noised to isotropic Gaussian, then denoised back
- **Result box:** Current noise level σ(t), signal-to-noise ratio
- **Insight box:** "Diffusion models learn to reverse the process of adding noise. By learning one small denoising step at a time, they can generate complex data from pure noise. This is how DALL-E, Midjourney, and Stable Diffusion work."

#### Section 5 — What Have We Learnt?
- Summary: generative modelling → GANs → VAEs → diffusion
- Comparison table: GAN vs VAE vs Diffusion (training stability, mode coverage, sample quality)
- Connections to: next-token prediction (on site), transformer architecture (on site)

**Estimated complexity:** ~1,200 lines | **Canvases:** 4

---

## 23. Tokenisation — `tokenisation.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●○○○

**Title:** Tokenisation
**Subtitle:** *Converting text and sequences into tokens*

**Meta description (150 chars):**
`Explore tokenisation interactively. See how text is split into tokens using character, word, and BPE methods. Understand how language models see language.`

**Educational goal:** Students understand that models do not see words — they see tokens. They learn how BPE works step by step and why tokenisation affects model behaviour.

### Sections

#### Section 1 — What Are Tokens?
- Interactive text input box (styled)
- **Text input:** Type any text
- Below: three tokenisation methods shown simultaneously:
  - **Character-level:** each character is a token (coloured individually)
  - **Word-level:** each word is a token (coloured individually)
  - **BPE (subword):** subword units (coloured, showing merges)
- Token count for each method displayed
- **Result box:** "Character tokens: VALUE | Word tokens: VALUE | BPE tokens: VALUE"
- **Insight box:** "Language models do not read words — they read tokens. The choice of tokenisation directly affects what the model can learn and how efficiently it uses its context window."

#### Section 2 — Byte-Pair Encoding Step by Step
**Canvas:** `bpeCanvas` (700×500)

- Animated BPE training on a small corpus (e.g., "low lower lowest")
- Starting vocabulary: individual characters
- **Button:** "Next merge" — performs one BPE merge step:
  1. Count all adjacent pairs
  2. Find the most frequent pair
  3. Merge it into a new token
  4. Update the corpus
- Vocabulary displayed as a growing list
- Corpus displayed with current tokenisation highlighted
- Merge history shown as a table
- **Slider:** "Auto-run speed" — animates the merge process
- **Result box:** "Vocabulary size: VALUE | Most frequent pair: VALUE"
- **Insight box:** "BPE starts with individual characters and greedily merges the most common pairs. Common words become single tokens ('the', 'and'), while rare words are split into subword pieces ('un' + 'expect' + 'ed'). This balances vocabulary size with coverage."

#### Section 3 — Tokenisation Quirks
- Interactive panels showing surprising tokenisation behaviour:
  - **Numbers:** "123456" → different token splits for different numbers
  - **Spaces:** leading spaces become part of tokens
  - **Languages:** non-English text produces more tokens for the same content
  - **Code:** programming languages tokenise differently from natural language
- For each quirk: input example, tokenised output, and explanation
- **Insight box:** "Tokenisation is not neutral. English text uses fewer tokens than equivalent Chinese or Arabic text — meaning English speakers get more content per context window. This is an active area of fairness research."

#### Section 4 — Vocabulary Size Trade-offs
**Canvas:** `vocabCanvas` (600×400)

- Plot: x-axis = vocabulary size, y-axis = average tokens per sentence
- As vocabulary grows: fewer tokens needed (more efficient encoding)
- But: embedding table grows (more parameters)
- Trade-off visualised as two crossing curves
- **Slider:** "Vocabulary size" (100 to 100,000, log scale)
- Example sentence tokenised at each vocabulary size
- **Result box:** "Vocab: VALUE | Tokens/sentence: VALUE | Embedding params: VALUE"
- **Insight box:** "Large vocabularies mean fewer tokens per sentence (good for context length) but more parameters in the embedding table (expensive). GPT-4 uses ~100,000 tokens; this is a carefully chosen balance."

#### Section 5 — What Have We Learnt?
- Summary: tokens → BPE → quirks → vocabulary trade-offs
- Key concepts: subword tokenisation, vocabulary, context window efficiency
- Connections to: vectors & embeddings (on site), next-token prediction (on site), transformer architecture (on site)

**Estimated complexity:** ~900 lines | **Canvases:** 2

---

## 24. Neural ODEs — `neural_odes.html`

**Chapter:** AI & Intelligence | **Accent:** `#a78bfa` / `167,139,250` | **Difficulty:** ●●●○

**Title:** Neural ODEs
**Subtitle:** *Modelling continuous dynamics with neural networks*

**Meta description (155 chars):**
`Explore neural ODEs visually. See how neural networks can model continuous-time dynamics, replacing discrete layers with differential equations.`

**Educational goal:** Students understand that a ResNet can be seen as an Euler discretisation of an ODE, and that neural ODEs replace discrete layers with a continuous-depth transformation.

**Reference:** `differential_equations.html`

### Sections

#### Section 1 — From ResNets to ODEs
**Canvas:** `resnetCanvas` (700×400)

- Left: a ResNet block diagram — h_{t+1} = h_t + f(h_t)
- Right: the corresponding Euler step of an ODE — dh/dt = f(h)
- **Slider:** "Number of layers/steps" (1 to 100)
- As layers increase: the ResNet trajectory becomes smoother, approaching the ODE solution
- Points in a 2D feature space transformed through layers (animated)
- **Button:** "ResNet (discrete)" | "Neural ODE (continuous)" — compare
- **Result box:** Shows the discrete vs continuous formulation
- **Insight box:** "A ResNet layer computes h_{t+1} = h_t + f(h_t). This is precisely the Euler method for solving dh/dt = f(h). A neural ODE replaces discrete layers with a continuous transformation — an ODE solved by a black-box integrator."

#### Section 2 — Continuous Normalising Flows
**Canvas:** `flowCanvas` (600×600)

- 2D distribution transformation: start with a simple distribution (Gaussian), transform to a complex one (two moons, ring)
- **Buttons:** "Two moons" | "Ring" | "Spiral" — target distribution
- Animation: watch the Gaussian smoothly deform into the target
- **Slider:** "Time t" (0 to 1) — scrub through the continuous transformation
- At each t: show the current distribution as a scatter plot
- Vector field overlay showing the learned dynamics f(h, t)
- **Result box:** Log-likelihood of the transformation
- **Insight box:** "Neural ODEs define a continuous normalising flow — a smooth, invertible transformation from a simple distribution to a complex one. Because the transformation is continuous, we can compute exact log-likelihoods using the instantaneous change of variables formula."

#### Section 3 — Solving the ODE
**Canvas:** `solverCanvas` (700×400)

- A simple learned vector field f(h, t) in 2D
- Multiple trajectories from different starting points
- **Buttons:** "Euler (fixed step)" | "RK4 (fixed step)" | "Dopri5 (adaptive)" — different ODE solvers
- Euler: jagged paths with visible error
- RK4: smooth paths, moderate computation
- Adaptive: smooth paths, fewer function evaluations (shown as dots on path)
- **Slider:** "Step size" (for fixed-step methods)
- **Result box:** "Function evaluations: VALUE | Final error: VALUE"
- **Insight box:** "Neural ODEs trade layer count for solver precision. Adaptive solvers like Dormand-Prince automatically use more steps where the dynamics are complex and fewer where they are simple — achieving accuracy without wasting computation."

#### Section 4 — Advantages and Trade-offs
- Card panel (no canvas) comparing Neural ODEs with standard deep networks:
  - **Memory efficiency** — O(1) memory via adjoint method (no need to store intermediate activations)
  - **Continuous depth** — the network can be evaluated at any 'depth', not just integer layers
  - **Irregular time series** — naturally handles data arriving at non-uniform time intervals
  - **Training cost** — solving an ODE at each forward pass is computationally expensive
  - **Expressiveness** — trajectories cannot cross (topological limitation)
- Each point in a styled card with icon and brief explanation

#### Section 5 — What Have We Learnt?
- Summary: ResNet → ODE connection → continuous flows → solvers → trade-offs
- Key papers: Chen et al. 2018 ("Neural Ordinary Differential Equations")
- Connections to: differential equations (on site), gradient descent (on site), transformer architecture (on site)

**Estimated complexity:** ~1,000 lines | **Canvases:** 3

---

## Design Compliance Checklist

Same as Batch 1 — see `docs/BATCH1_SPECIFICATION.md`.

**Awaiting approval before proceeding to build.**
