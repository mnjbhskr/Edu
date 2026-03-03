# Chapter 11: The Mathematics of Intelligence
## Build Specification for mathsedu.org
### Complete Claude Code Implementation Guide

---

## Overview & Philosophy

This chapter adds 15 interactive pages to mathsedu.org covering the mathematics
underlying artificial intelligence, neural networks, and large language models.

**Core thesis of the chapter:**
> LLMs are not magic. They are built from linear algebra, probability,
> optimisation, and information theory — mathematics you already understand.

**Pedagogical arc:**
```
Geometry of meaning → Learning by descent → Composition of layers
→ The Transformer → Language as probability → Agents as feedback loops
```

**Intended audience:** Curious minds from A-level through graduate — the same
audience as the rest of mathsedu.org. No prior ML knowledge assumed. The
mathematics is rigorous; the presentation is visual and intuitive.

---

## Design System (MUST FOLLOW EXACTLY)

Every page must match the existing site's design language precisely.

### HTML/CSS Standards

```css
/* Core palette — do not deviate */
background: #0a0a1a          /* page background */
color: #e0e0e0               /* primary text */
font-family: Georgia, 'Times New Roman', serif   /* body text */
font-family: 'Courier New', monospace            /* maths / code */
accent green: #10b981        /* interactive elements, highlights */
accent cyan: #22d3ee         /* secondary highlights */
accent gold: #fbbf24         /* warnings, important callouts */
accent pink: #f472b6         /* additional accent */
muted text: #808098          /* labels, descriptions */
panel bg: rgba(255,255,255,0.025)  /* section backgrounds */
border: rgba(255,255,255,0.06)     /* all panel borders */
```

### Page Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[TOPIC NAME]</title>
    <style>/* FULL INLINE CSS — no external stylesheets */</style>
</head>
<body>
<div class="container">
    <a class="back" href="index.html">← Back to Index</a>
    <h1>[Topic Name]</h1>
    <p class="subtitle">[One compelling sentence — use em dashes, make it memorable]</p>

    <!-- Section 1 -->
    <h2>1. [Section Title] — [Evocative Subtitle]</h2>
    <div class="panel">
        <h3>[PANEL LABEL IN UPPERCASE]</h3>
        <div class="formula-block">
            <div class="math-line">...</div>
        </div>
        <canvas id="..." width="700" height="400"></canvas>
        <!-- controls -->
    </div>
    <div class="insight-box">💡 [Core insight in 1–2 sentences]</div>

    <!-- Sections 2, 3, ... -->

    <!-- Final: Explain panel -->
    <div class="explain">
        <div class="explain-name">Why This Matters</div>
        <div class="explain-text">...</div>
    </div>
</div>
<script>/* ALL JAVASCRIPT INLINE */</script>
</body>
</html>
```

### Component Classes (use identically to existing pages)

| Class | Purpose |
|-------|---------|
| `.panel` | Each interactive section wrapper |
| `.formula-block` | Monospace formula display area |
| `.math-line` | Single line of mathematics |
| `.insight-box` | Green left-bordered key insight |
| `.btn` / `.btn.active` | Toggle buttons |
| `.slider-row` | Label + range input + value display |
| `.result-box` | Highlighted output values |
| `.explain` | Bottom explanatory panel |
| `.stats-row` / `.stat-box` | Live statistics display |

### Canvas Standards
- Width: 700px, Height: 300–500px depending on content
- Background: `#0a0a1a` (match page)
- Grid lines: `rgba(255,255,255,0.04)`
- Primary data colour: `#10b981`
- Secondary data: `#22d3ee`, `#fbbf24`, `#f472b6`
- Text on canvas: Georgia or Courier New, colour `#808098` for labels

### Colour Coding for Math Variables (use consistently across ALL pages)
- `<span class="green">` — outputs, results, model predictions
- `<span class="gold">` — parameters, weights, learnable quantities
- `<span class="cyan">` — inputs, data, queries
- `<span class="pink">` — loss, error, gradients
- `<span class="muted">` — annotations, definitions

---

## Index Page Integration

Add Chapter 11 to `index.html` with this entry:

```javascript
{
    title: "The Mathematics of Intelligence",
    subtitle: "How neural networks and language models actually work",
    icon: "🧠",
    color: "#a78bfa",   /* violet — distinct from existing chapters */
    topics: [
        /* 15 topics listed below */
    ]
}
```

Also add a **"Map of AI" entry point** as the first card — a visual diagram
showing the learning pathway through all 15 pages.

---

## Chapter Entry Point

### File: `ai_mathematics_map.html`
**Title:** The Mathematics of Intelligence — A Map
**Subtitle:** *From a single number to a system that speaks — the complete mathematical journey*

**Purpose:** Chapter landing page with clickable concept map.

**Visual — Canvas Diagram:**
Draw a flowing directed graph with five columns:

```
[Representation]  →  [Learning]  →  [Architecture]  →  [Language]  →  [Agency]
   Embeddings         Gradient        Attention         Next Token      Agents
   Softmax            Descent         Transformer       Prediction      RAG
   Neuron             Backprop        Positional        Toy LLM         CoT
                      Overfitting     Encoding
                      Optimisers
```

- Each node is a clickable rounded rectangle
- Hovering highlights the node and shows a one-line description
- Clicking navigates to that page
- Connecting arrows animate in sequence on load (draw one by one)
- Completed pages show a subtle green glow (use localStorage to track visits)

**Opening text:**
> "In 2017, eight researchers at Google published a paper titled
> 'Attention Is All You Need.' It described an architecture so elegant
> that within five years it would power systems capable of passing bar
> exams, writing code, and composing poetry. The mathematics behind it
> is not new — it is linear algebra and probability, dressed in a new
> configuration. This chapter shows you exactly how."

**Difficulty:** 1 (entry point, no maths on this page itself)

---

## LEVEL 1 — Representation

*The mental primitives: how information becomes geometry*

---

### Page 1: Vectors & Embeddings

**File:** `vectors_and_embeddings.html`
**Title:** Vectors & Embeddings
**Subtitle:** *How a word becomes a point in space — and why meaning is geometry*
**Difficulty:** 1

**Core mathematical idea:**
Embedding = function mapping discrete objects (words, tokens) to ℝⁿ
such that semantic similarity ≈ geometric proximity.

**Core equation:**
```
cosine_similarity(u, v) = (u · v) / (‖u‖ × ‖v‖)
```

---

**Section 1: Words as Coordinates**

*Canvas (700×400): 2D interactive word embedding space*
- Plot ~20 pre-computed word vectors projected to 2D via PCA
- Use words from concrete categories: animals, royalty, geography, emotions
- Colour by category (green=animals, cyan=places, gold=royalty, pink=emotions)
- Each word is a draggable dot with its label
- Draw a line between any two selected words showing cosine similarity

*Controls:*
- Dropdown: Select word A, Select word B
- Live display: `cosine similarity = 0.847`
- Toggle: "Show clusters" — draws convex hull around each category

*Formula block:*
```
similarity(king, queen)  = 0.91   ← very similar
similarity(king, banana) = 0.12   ← unrelated
similarity(Paris, France) = 0.88  ← strong association
```

*Insight box:*
> 💡 A neural network never "reads" words — it works with vectors of
> numbers. Meaning is encoded as direction and distance in space.

---

**Section 2: The Famous Analogy**

*Canvas (700×300): Vector arithmetic visualisation*
- Show the classic: `king - man + woman ≈ queen`
- Draw vectors as arrows from origin
- Animate the subtraction and addition geometrically
- Show the result vector pointing near "queen"

*Controls:*
- Dropdown: Build your own analogy from available words
- Button: "Compute" — animate the vector arithmetic

*Formula block:*
```
king   ≈ [0.72,  0.45, -0.31, ...]   (300 dimensions in real GPT)
man    ≈ [0.68,  0.41, -0.28, ...]
woman  ≈ [0.65, -0.39, -0.27, ...]
queen  ≈ [0.69, -0.43, -0.30, ...]

king - man + woman ≈ queen   ← geometry captures meaning
```

*Insight box:*
> 💡 Word2Vec (2013) showed that arithmetic on word vectors recovers
> semantic relationships. The vector for "capital" works for any country.
> Mathematics found the structure that language intuition had always felt.

---

**Section 3: High-Dimensional Intuition**

*Canvas (700×300): Dimension visualisation — compare 2D, 3D, 100D, 768D*
- Show how capacity (number of orthogonal directions) grows with dimensions
- Animate a 2D circle expanding into a 3D sphere expanding into a hypersphere
- Show "GPT-4 uses 12,288 dimensions" as a stat

*Insight box:*
> 💡 Humans think in 3 dimensions. Transformers think in 12,288.
> In high dimensions, there is enough room to encode every nuance of
> every word in every language simultaneously.

---

**Connections to existing pages:** Cross-link to `vectors.html`, `svd.html`

**Real-world hook:**
> ChatGPT represents every word as a vector of 12,288 numbers.
> The entire English language is a geometry problem.

**References:**
- Mikolov et al., "Efficient Estimation of Word Representations" (2013) — Word2Vec
- Pennington et al., "GloVe: Global Vectors for Word Representation" (2014)
- Visualisation tool: https://projector.tensorflow.org

---

### Page 2: Probability & Softmax

**File:** `probability_and_softmax.html`
**Title:** Probability & Softmax
**Subtitle:** *Raw scores become probabilities — the gateway between algebra and uncertainty*
**Difficulty:** 1

**Core mathematical idea:**
Softmax maps any real-valued vector (logits) to a probability distribution.
Temperature controls the sharpness of that distribution.

**Core equation:**
```
softmax(zᵢ) = exp(zᵢ) / Σⱼ exp(zⱼ)
```

---

**Section 1: From Scores to Probabilities**

*Canvas (700×350): Side-by-side bar chart — logits vs softmax output*
- Left panel: raw logit scores (can be negative, any magnitude)
- Right panel: softmax probabilities (always sum to 1, always positive)
- Draggable bars on the left — right panel updates live
- Show the running sum = 1.000 in green

*Controls:*
- "Randomise logits" button
- Number of classes slider (3 to 8)

*Formula block:*
```
logits:       [2.1,  0.8, -0.5,  3.2]
exp(logits):  [8.17, 2.23, 0.61, 24.5]
sum of exp:   35.51
softmax:      [0.23, 0.06, 0.02, 0.69]   ← sums to 1.00
```

*Insight box:*
> 💡 A neural network never directly outputs probabilities.
> It outputs raw scores (logits). Softmax is the function that
> converts confidence scores into a proper probability distribution.

---

**Section 2: Temperature — The Creativity Dial**

*Canvas (700×350): Three panels showing softmax at different temperatures*
- Low temperature (T=0.1): one bar dominates — "confident"
- Medium temperature (T=1.0): normal softmax
- High temperature (T=2.0): nearly uniform — "creative/random"

*Controls:*
- Temperature slider: 0.1 → 3.0
- "Same logits, different temperature" — show all three simultaneously

*Formula block:*
```
softmax_T(zᵢ) = exp(zᵢ/T) / Σⱼ exp(zⱼ/T)

T → 0:  winner-takes-all (deterministic)
T = 1:  standard softmax
T → ∞:  uniform distribution (random)
```

*Insight box:*
> 💡 When you set ChatGPT's "temperature" to 0, you get deterministic
> responses. At high temperature, it gets creative — and occasionally
> wrong. The temperature parameter lives here, in this formula.

---

**Section 3: Cross-Entropy Loss**

*Canvas (700×300): Probability distribution vs true label*
- Show a "true label" bar and the model's prediction distribution
- Animate the cross-entropy loss as the distributions diverge / converge

*Formula block:*
```
cross-entropy loss L = -Σᵢ yᵢ × log(p̂ᵢ)

true label y:  [0, 0, 1, 0]   ← the correct answer is class 3
prediction p̂:  [0.1, 0.2, 0.6, 0.1]
loss L:        -log(0.6) = 0.51   ← lower is better
```

*Insight box:*
> 💡 Cross-entropy is how we measure the cost of being wrong.
> The entire training process of an LLM is the minimisation of this
> single number across billions of examples.

---

**Connections to existing pages:** Cross-link to `probability_distributions.html`, `bayes_theorem.html`

**References:**
- Shannon, "A Mathematical Theory of Communication" (1948)
- Goodfellow et al., "Deep Learning" textbook, Chapter 3

---

## LEVEL 2 — Learning

*How a network discovers structure by descending into valleys*

---

### Page 3: The Single Neuron

**File:** `neuron_and_activation.html`
**Title:** The Single Neuron
**Subtitle:** *One weighted sum, one decision — the atom from which all intelligence is built*
**Difficulty:** 1

**Core mathematical idea:**
A neuron computes a weighted sum of its inputs, adds a bias, then applies
a non-linear activation function. Non-linearity is what makes neural
networks more than linear regression.

**Core equation:**
```
output = activation(w₁x₁ + w₂x₂ + ... + wₙxₙ + b)
       = activation(w · x + b)
```

---

**Section 1: Building a Neuron**

*Canvas (700×350): Neuron diagram*
- Show 3 inputs x₁, x₂, x₃ with weight labels on connecting lines
- Weights displayed as line thickness AND colour (positive=green, negative=red)
- Sum node in the middle
- Activation applied to the right → output
- Sliders for each weight and bias; output updates live

*Controls:*
- 3 weight sliders: -2.0 to +2.0
- Bias slider: -2.0 to +2.0
- Toggle: ReLU / Sigmoid / Tanh / Step

*Formula block:*
```
z    = w₁x₁ + w₂x₂ + w₃x₃ + b    ← weighted sum (pre-activation)
ŷ    = σ(z)                         ← activation function applied
```

*Insight box:*
> 💡 One neuron is just a weighted sum followed by a threshold.
> The brain has 86 billion of them. A GPT-4 equivalent has ~1.7 trillion
> parameters — weights that were all set by gradient descent.

---

**Section 2: Activation Functions — Why Non-linearity Matters**

*Canvas (700×350): Four activation functions plotted side by side*
- ReLU: `max(0, z)` — piecewise linear, most common
- Sigmoid: `1/(1+e⁻ᶻ)` — squashes to (0,1), used in output layers
- Tanh: `(eᶻ-e⁻ᶻ)/(eᶻ+e⁻ᶻ)` — squashes to (-1,1)
- GELU: smooth approximation to ReLU — used in GPT

*Controls:*
- Click to select which activation is active
- Show derivative alongside each (relevant for backprop)
- Animate: "Stack two linear layers without activation → still linear"

*Formula block:*
```
ReLU(z)    = max(0, z)              ← zero for negatives, identity for positives
Sigmoid(z) = 1 / (1 + e^(-z))      ← smooth step from 0 to 1
Tanh(z)    = (e^z - e^(-z))
             ─────────────           ← symmetric around zero
             (e^z + e^(-z))
GELU(z)    ≈ z × Φ(z)              ← used in GPT models
```

*Insight box:*
> 💡 Without activation functions, a million-layer network collapses
> to a single matrix multiplication. Non-linearity is what allows
> neural networks to approximate any function.

---

**Section 3: The Decision Boundary**

*Canvas (700×350): 2D classification visualisation*
- Plot two classes of points (blue vs orange) in 2D space
- A single neuron draws a linear decision boundary
- User can drag the two weight sliders and watch the line rotate
- Show: XOR problem — one neuron cannot solve it → motivates depth

*Insight box:*
> 💡 One neuron = one straight line. The XOR problem requires
> a curved boundary — and that requires multiple layers.
> This is why deep networks exist.

---

**References:**
- McCulloch & Pitts, "A Logical Calculus of Ideas Immanent in Nervous Activity" (1943)
- Rosenblatt, "The Perceptron" (1958)
- Glorot et al., "Deep Sparse Rectifier Neural Networks" (2011) — ReLU

---

### Page 4: Gradient Descent & Loss Landscapes

**File:** `gradient_descent.html`
**Title:** Gradient Descent
**Subtitle:** *Learning is a ball rolling downhill in a billion-dimensional space*
**Difficulty:** 2

**Core mathematical idea:**
Training a neural network = finding the minimum of a loss function
L(θ) by iteratively moving parameters θ in the direction of steepest descent.

**Core equation:**
```
θ ← θ − η ∇L(θ)
```

---

**Section 1: The Loss Landscape**

*Canvas (700×400): 3D perspective loss surface*
- Render a smooth bowl-shaped surface with bumps (local minima, saddle points)
- A red ball sits at a starting position
- "Run" button: ball rolls downhill following gradient arrows
- Show gradient arrows (green) at the current position
- Learning rate slider changes step size — show overshooting at high η

*Controls:*
- Learning rate η: 0.01 to 2.0
- "Random start" button
- Surface dropdown: "Convex bowl", "Ravine", "Noisy landscape"
- Play/Pause/Step

*Formula block:*
```
gradient ∇L = [∂L/∂θ₁,  ∂L/∂θ₂,  ...,  ∂L/∂θₙ]

step:   θ_new  =  θ_old  −  η × ∇L(θ_old)
                            ↑
                     learning rate
```

*Insight box:*
> 💡 GPT-4 has ~1 trillion parameters. Gradient descent navigates
> a loss landscape of 1 trillion dimensions — and somehow finds
> a remarkably good solution every time.

---

**Section 2: Learning Rate — The Most Important Hyperparameter**

*Canvas (700×300): Loss vs iterations for three learning rates*
- Animate three simultaneous runs: η too small (slow), η just right (converges), η too large (diverges/oscillates)
- Each shown as a coloured line on the loss-vs-step plot

*Controls:*
- Three independent η sliders
- "Race" button: animate all three simultaneously

*Formula block:*
```
η too small:  takes 10,000 steps to converge
η just right: converges in 200 steps  ← Goldilocks zone
η too large:  loss oscillates and explodes
```

*Insight box:*
> 💡 A learning rate that is too large causes the ball to overshoot
> the valley and bounce back and forth. Real LLM training uses
> learning rate schedules — large at first, then reduced.

---

**Section 3: Stochastic Gradient Descent**

*Canvas (700×300): Full gradient vs mini-batch vs single sample paths*
- Show three paths down the same landscape
- Full gradient: smooth, direct
- Mini-batch (SGD): noisy but converges
- Single sample: very noisy

*Controls:*
- Batch size slider: 1 (SGD) → 32 → 256 → full batch
- Noise level slider

*Formula block:*
```
Full gradient:    use ALL training examples → expensive but exact
Mini-batch SGD:   use B examples → noisy but fast and generalises better
Single sample:    B=1 → cheapest, noisiest

In practice: B = 256 to 4096 for large language models
```

*Insight box:*
> 💡 The noise in SGD is a feature, not a bug. It helps models
> escape sharp local minima and find flatter, more general solutions.
> This is partly why LLMs trained on mini-batches generalise so well.

---

**Connections to existing pages:** Cross-link to `derivatives.html`, `differential_equations.html`

**Real-world hook:**
> Training GPT-3 consumed approximately 3.14×10²³ floating point operations.
> Every one of those operations was a step of gradient descent.

**References:**
- Rumelhart, Hinton & Williams, "Learning Representations by Backpropagating Errors" (1986)
- Robbins & Monro, "A Stochastic Approximation Method" (1951)
- Visualisation: https://distill.pub/2017/momentum/

---

### Page 5: Backpropagation

**File:** `backpropagation.html`
**Title:** Backpropagation
**Subtitle:** *How blame flows backwards — the chain rule as the engine of learning*
**Difficulty:** 2

**Core mathematical idea:**
Backpropagation is efficient computation of gradients via the chain rule,
flowing error signals backwards through the network.

**Core equation:**
```
∂L/∂wᵢ = (∂L/∂output) × (∂output/∂zᵢ) × (∂zᵢ/∂wᵢ)
         ─────────────────────────────────────────────
                        chain rule
```

---

**Section 1: The Computational Graph**

*Canvas (700×400): Small 3-layer network (2→3→2→1)*
- Each node is a computation: multiply, add, activate
- Forward pass: animate values flowing left to right (cyan)
- Backward pass: animate gradients flowing right to left (pink/red)
- Node thickness = magnitude of gradient
- Click any node to see its local derivative

*Controls:*
- "Forward pass" button (cyan animation)
- "Backward pass" button (pink animation)
- "Step by step" mode — highlights one node at a time

*Formula block:*
```
FORWARD:   x → z = Wx+b → a = ReLU(z) → ŷ → L = loss(ŷ, y)
BACKWARD:  ∂L/∂ŷ → ∂L/∂z = ∂L/∂ŷ × ∂ŷ/∂z → ∂L/∂W = ∂L/∂z × xᵀ
```

*Insight box:*
> 💡 Backprop is just the chain rule — applied systematically to a
> graph of computations. Rumelhart, Hinton and Williams published it
> in 1986. It took another 25 years for it to change the world.

---

**Section 2: Vanishing & Exploding Gradients**

*Canvas (700×300): Gradient magnitude through 10 layers*
- Bar chart showing gradient magnitude at each layer
- Sigmoid activation: bars shrink to near zero (vanishing)
- No normalisation: bars grow to infinity (exploding)
- ReLU with batch norm: bars stay roughly constant

*Controls:*
- Activation function selector
- Number of layers: 5 to 20
- "Show gradient flow" animation

*Insight box:*
> 💡 Before ReLU and residual connections, training deep networks was
> nearly impossible — gradients would vanish before reaching early layers.
> The "deep learning revolution" required solving this exact problem.

---

**Connections to existing pages:** Cross-link to `derivatives.html`, `fundamental_theorem_calculus.html`

**References:**
- Rumelhart, Hinton & Williams (1986) — original backprop paper
- Hochreiter, "The Vanishing Gradient Problem" (1991)
- He et al., "Deep Residual Learning for Image Recognition" (2015) — ResNets solve vanishing gradients

---

### Page 6: Overfitting & Generalisation

**File:** `overfitting_generalisation.html`
**Title:** Overfitting & Generalisation
**Subtitle:** *The fundamental tension of learning — memorising vs understanding*
**Difficulty:** 2

**Core mathematical idea:**
Bias-variance tradeoff: a model can fail by being too simple (high bias)
or by memorising training data (high variance). Regularisation manages this.

---

**Section 1: The Polynomial Fitting Demo**

*Canvas (700×400): Scatter plot with polynomial regression curves*
- 15 noisy data points generated from a sine curve
- Fit polynomial of degree d (slider: 1 to 14)
- Show: degree 1 = underfit, degree 5 = good, degree 13 = overfit
- Two lines: training error (solid), test error (dashed)
- Classic U-shaped test error curve on the right mini-panel

*Controls:*
- Degree slider: 1 to 14
- "New data" button (regenerate noise)
- Toggle: show training vs test points

*Insight box:*
> 💡 A degree-14 polynomial fits every training point perfectly —
> and is spectacularly wrong everywhere else. Language models with
> billions of parameters face exactly this challenge.

---

**Section 2: Regularisation Techniques**

*Canvas (700×300): Same polynomial demo with regularisation*
- L2 (Ridge) regularisation: adds penalty λ‖w‖²
- Dropout: randomly zero out neurons during training
- Show how each technique tames the overfit curve

*Formula block:*
```
Standard loss:    L(θ)
L2 regularised:   L(θ) + λ × Σᵢ wᵢ²    ← penalise large weights
Dropout:          randomly set 20% of activations to 0 during training
                  → forces redundant representations
```

---

**Real-world hook:**
> "GPT-4 has 1.7 trillion parameters but was trained on only ~13 trillion
> tokens. Preventing overfitting at this scale requires careful architecture
> design, dropout, and weight decay — all variants of the same idea."

---

## LEVEL 3 — The Transformer

*The architecture that changed everything*

---

### Page 7: The Attention Mechanism

**File:** `attention_mechanism.html`
**Title:** The Attention Mechanism
**Subtitle:** *Which words should pay attention to which — the question that transformed AI*
**Difficulty:** 3

**Core mathematical idea:**
Attention computes a weighted average of value vectors, where weights
are determined by the compatibility between query and key vectors.

**Core equation:**
```
Attention(Q, K, V) = softmax(QKᵀ / √d) × V
```

This is **the single most important equation in modern AI.**

---

**Section 1: The Intuition — Reading a Sentence**

*Canvas (700×380): Sentence attention heatmap*
- Display the sentence: "The animal didn't cross the street because it was too tired"
- Show attention weights as a heatmap (0=dark, 1=bright green)
- Highlight: when processing "it", attention is highest on "animal"
- User can click any word to see which words it attends to
- Animated: watch attention weights shift as you move through the sentence

*Controls:*
- Dropdown: select different example sentences
- Click a word → highlight its attention connections
- Toggle: show as heatmap / show as arrows (thickness = weight)

*Insight box:*
> 💡 The classic example: "The animal didn't cross the street
> because it was too tired." To understand "it", you must attend
> to "animal." The attention mechanism learns to do this automatically.

---

**Section 2: Queries, Keys, and Values**

*Canvas (700×400): QKV diagram with matrices*
- Three word tokens as rows
- Multiply by Wq → Q matrix (query: "what am I looking for?")
- Multiply by Wk → K matrix (key: "what do I contain?")
- Multiply by Wv → V matrix (value: "what do I contribute?")
- Animate: Q·Kᵀ → attention scores → softmax → weights → weighted sum of V

*Controls:*
- "Step through" animation showing each matrix operation
- Show numerical values in each cell
- Scale factor (1/√d) slider — show why it's needed to prevent vanishing gradients

*Formula block:*
```
for each token i:
    query qᵢ   = Wq × xᵢ    ← what am I looking for?
    key   kⱼ   = Wk × xⱼ    ← what does token j offer?
    value vⱼ   = Wv × xⱼ    ← what does token j contribute?

    score(i,j) = qᵢ · kⱼ / √d     ← compatibility
    weight(i,j) = softmax(score)    ← normalised attention
    output_i   = Σⱼ weight(i,j) × vⱼ  ← weighted average
```

*Insight box:*
> 💡 Attention is literally a search operation. Q is the query
> (like a Google search). K is the index. V is the content returned.
> The entire mechanism is differentiable — weights are learned, not programmed.

---

**Section 3: Multi-Head Attention**

*Canvas (700×300): Multiple attention heads running in parallel*
- Show 4 attention heads each with different heatmaps on the same sentence
- Head 1 might attend to syntactic relationships (subject-verb)
- Head 2 to semantic relationships (pronoun-antecedent)
- Head 3 to positional relationships (adjacent words)

*Formula block:*
```
MultiHead(Q,K,V) = Concat(head₁, ..., headₕ) × Wᴼ

where  headᵢ = Attention(QWᵢQ, KWᵢK, VWᵢV)

GPT-3:   h = 96 attention heads
GPT-4:   h = ~128 attention heads (estimated)
```

*Insight box:*
> 💡 Multiple heads allow the model to attend to different
> types of relationships simultaneously. One head tracks
> grammar; another tracks semantics; another tracks style.

---

**Real-world hook:**
> "Attention Is All You Need" (Vaswani et al., 2017) introduced this mechanism.
> It has 7,000+ citations and spawned BERT, GPT, T5, and every major LLM.

**References:**
- Vaswani et al., "Attention Is All You Need" (2017)
- Bahdanau et al., "Neural Machine Translation by Jointly Learning to Align and Translate" (2015) — original attention
- Clark et al., "What Does BERT Look at?" (2019) — what attention heads actually learn
- Interactive: https://distill.pub/2016/augmented-rnns/

---

### Page 8: Positional Encoding

**File:** `positional_encoding.html`
**Title:** Positional Encoding
**Subtitle:** *Order is not free — how Transformers learn where words stand*
**Difficulty:** 2

**Core mathematical idea:**
Transformers process all tokens simultaneously (not sequentially).
Positional encoding injects order information by adding a unique vector
to each position's embedding.

**Core equation:**
```
PE(pos, 2i)   = sin(pos / 10000^(2i/d))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d))
```

---

**Section 1: Why Order Matters**

*Canvas (700×250): Sentence meaning changed by word order*
- Display: "The dog bit the man" vs "The man bit the dog"
- Same words, radically different meaning
- Show that without positional info, attention treats these identically

*Insight box:*
> 💡 Unlike RNNs which read left-to-right, Transformers see all
> tokens at once. Without positional encoding, "dog bites man"
> and "man bites dog" would be mathematically identical.

---

**Section 2: Sinusoidal Encoding Waves**

*Canvas (700×380): Heatmap of positional encoding matrix*
- Rows = positions (0 to 50)
- Columns = encoding dimensions (0 to 127)
- Each cell coloured by PE value
- Show the sinusoidal waves of different frequencies

*Controls:*
- Dimension slider: select a single dimension → show the sine/cosine wave
- Position slider: select a single position → show its encoding vector
- Toggle: sinusoidal vs learned positional encoding

*Formula block:*
```
dimension 0:  sin(pos/1)           ← high frequency, changes every token
dimension 2:  sin(pos/100)         ← medium frequency
dimension d:  sin(pos/10000^(d/D)) ← very low frequency

Together they create a unique "fingerprint" for every position.
```

*Insight box:*
> 💡 The sinusoidal encoding is elegant: each dimension oscillates
> at a different frequency. Like a binary number system, this
> guarantees every position has a unique, smooth encoding.
> And relative positions can be computed via simple linear transformations.

---

**References:**
- Vaswani et al. (2017) — original sinusoidal encoding
- Su et al., "RoFormer: Enhanced Transformer with Rotary Position Embedding" (2021) — modern alternative used in LLaMA

---

### Page 9: The Transformer Architecture

**File:** `transformer_architecture.html`
**Title:** The Transformer Architecture
**Subtitle:** *How all the pieces fit — the complete machine that reads and writes language*
**Difficulty:** 3

**Core mathematical idea:**
The Transformer stacks: Embedding → [Multi-Head Attention + Feed-Forward] × N → Output.
Residual connections and layer normalisation enable stable training of very deep networks.

---

**Section 1: The Full Architecture Diagram**

*Canvas (900×500): Interactive annotated architecture diagram*
- Draw the complete encoder block (or decoder for GPT)
- Components: Token Embedding → Positional Encoding → [LayerNorm → MultiHead Attention → Residual → LayerNorm → FFN → Residual] × N → Output
- Each component is a hoverable box showing its formula and purpose
- Click any component → expand panel below explaining it

*Controls:*
- N (number of layers) slider: 1 to 24
- Show data dimensions flowing through (d_model label on each connection)
- "GPT-3 scale" button: show actual dimensions (d=12288, N=96)

*Formula block:*
```
Transformer block (one layer):
    x' = LayerNorm(x + MultiHeadAttention(x, x, x))    ← residual + attention
    x'' = LayerNorm(x' + FFN(x'))                       ← residual + feed-forward

FFN(x) = max(0, xW₁ + b₁)W₂ + b₂    ← 2-layer MLP with ReLU

Residual: output = input + f(input)
→ gradients can flow directly, skipping layers
→ enables training networks 100+ layers deep
```

*Insight box:*
> 💡 The feed-forward layer has more parameters than the attention layer —
> it acts as the "memory" of the model. The attention layer routes
> information; the FFN stores knowledge about facts and relationships.

---

**Section 2: GPT vs BERT — Decoder vs Encoder**

*Canvas (700×300): Side-by-side comparison*
- GPT: causal masking — each token attends only to previous tokens
- BERT: bidirectional — each token attends to all tokens
- Show the attention mask (triangular vs full)

*Insight box:*
> 💡 GPT predicts what comes next (generation). BERT understands
> what is already there (comprehension). Same architecture, different masking.

---

**References:**
- Vaswani et al. (2017) — the Transformer
- Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers" (2019)
- Radford et al., "Language Models are Unsupervised Multitask Learners" (2019) — GPT-2
- Illustrated Transformer: https://jalammar.github.io/illustrated-transformer/ (excellent companion)

---

## LEVEL 4 — Language Models

*When architecture meets language: probability over words*

---

### Page 10: Next-Token Prediction

**File:** `next_token_prediction.html`
**Title:** Next-Token Prediction
**Subtitle:** *Everything an LLM does reduces to one question: what comes next?*
**Difficulty:** 2

**Core mathematical idea:**
A language model is a probability distribution over sequences.
It is trained to predict P(token_t | token_1, ..., token_{t-1}).
All apparent "understanding" emerges from this objective.

**Core equation:**
```
P(w₁, w₂, ..., wₙ) = Π P(wₜ | w₁, ..., wₜ₋₁)
```

---

**Section 1: The Prediction Game**

*Canvas (700×350): Interactive sentence completion*
- Show a partial sentence: "The cat sat on the ___"
- Bar chart of top-10 next-token probabilities
- User can type any partial sentence; live probabilities update
- Powered by a simple bigram/trigram model computed in JS (not the Anthropic API)

*Controls:*
- Text input: type a partial sentence
- "Sample" button: pick from distribution → extend sentence → repeat
- Temperature slider: change the sampling distribution
- Show entropy of the distribution

*Insight box:*
> 💡 An LLM doesn't choose the right answer — it samples from
> a probability distribution. At temperature 1.0, GPT-4 is
> literally rolling a very sophisticated weighted die.

---

**Section 2: Entropy & Uncertainty**

*Canvas (700×300): Entropy visualisation*
- Show two sentences: one with low entropy (predictable: "The sky is ___")
- And one with high entropy (unpredictable: "My favourite colour is ___")
- Animate entropy as the "width" of the probability distribution

*Formula block:*
```
entropy H = -Σᵢ p(xᵢ) × log₂ p(xᵢ)

"The sky is blue"       → low entropy (0.3 bits) — very predictable
"My hobby is ______"    → high entropy (4.1 bits) — many options
perplexity = 2^H        → average branching factor of prediction
```

*Insight box:*
> 💡 Perplexity is how we measure language model quality.
> A perplexity of 8 means the model is, on average, as confused
> as if it were choosing between 8 equally likely next tokens.

---

**Section 3: Hallucination — The Mathematical View**

*Canvas (700×300): Token probability flow*
- Show a case where a low-probability but plausible-sounding token gets sampled
- Illustrate how errors compound: one wrong token shifts all subsequent probabilities
- Show: "Paris is the capital of Germany" — token by token, each step high probability

*Insight box:*
> 💡 Hallucination is not lying — it's fluent probability sampling gone
> wrong. The model assigns high probability to grammatically coherent,
> semantically plausible, but factually incorrect sequences.

---

**References:**
- Shannon, "A Mathematical Theory of Communication" (1948) — entropy, perplexity
- Bengio et al., "A Neural Probabilistic Language Model" (2003) — first neural LM

---

### Page 11: Training a Tiny Language Model

**File:** `toy_language_model.html`
**Title:** Train Your Own Language Model
**Subtitle:** *A vocabulary of 12 words, trained in your browser — the full pipeline in miniature*
**Difficulty:** 2

**Core mathematical idea:**
A language model is estimated empirically: count co-occurrences,
normalise to probabilities, then apply maximum likelihood estimation.
A bigram model is the simplest useful language model.

---

**Section 1: The Corpus**

*Interface: Editable text area + analysis panel*
- Pre-loaded micro-corpus (20 sentences about a simple topic, e.g. weather)
- Display token vocabulary: 12–15 unique words
- Show token frequencies as bar chart
- User can add/remove sentences and watch statistics update

*Formula block:*
```
Vocabulary V:  {sun, rain, cloud, warm, cold, today, tomorrow, ...}
Tokenisation:  "the sun is warm" → [the, sun, is, warm]
Bigram:        P(warm | sun) = count(sun warm) / count(sun)
```

---

**Section 2: The Bigram Probability Table**

*Canvas (700×400): Interactive bigram matrix heatmap*
- Rows = current word, Columns = next word
- Cell colour = probability (dark=low, bright green=high)
- Cell click: "sun → warm: probability 0.43"
- Update live as user edits corpus

*Controls:*
- "Add sentence" input box
- "Reset to default" button
- Toggle: show raw counts / show probabilities

*Insight box:*
> 💡 This 12×12 table is a language model. GPT-4 has a vocabulary
> of 100,000 tokens and works in 12,288 dimensions — but the core
> idea is identical: estimate P(next token | context).

---

**Section 3: Generate Text**

*Interface: Generation panel*
- "Start word" dropdown
- "Temperature" slider
- "Generate" button: produces sentence by sampling the bigram table
- Show each step: current word → probability distribution → sample → next word
- Compare temperature=0.1 (repetitive/deterministic) vs temperature=2.0 (random)

*Insight box:*
> 💡 The generated text is grammatically plausible but meaningless —
> because a bigram model has no understanding, only statistics.
> GPT-4 uses the same mechanism across 100 trillion parameters and 1.4 trillion tokens
> of training data. Scale creates the illusion of understanding.

---

## LEVEL 5 — Agents & Reasoning

*When language models take action*

---

### Page 12: Scaling Laws

**File:** `scaling_laws.html`
**Title:** Scaling Laws
**Subtitle:** *Why bigger is reliably better — the power laws that predict intelligence*
**Difficulty:** 2

**Core mathematical idea:**
Neural language model loss scales as a power law with model size (N),
dataset size (D), and compute (C). This relationship is empirically
precise and holds over many orders of magnitude.

**Core equation:**
```
L(N) ≈ (Nₒ/N)^αN    where αN ≈ 0.076
L(D) ≈ (Dₒ/D)^αD    where αD ≈ 0.095
```

---

**Section 1: The Power Law**

*Canvas (700×380): Log-log plot of loss vs scale*
- X-axis (log scale): model parameters from 1M to 100B
- Y-axis (log scale): validation loss
- Points from actual models: GPT-2 (1.5B), GPT-3 (175B), etc.
- A straight line fits on log-log axes → power law
- User can drag the line and see predicted loss at any scale

*Controls:*
- Toggle: parameters / compute / data as X-axis
- "Fit line" button — animate least-squares fit
- Extrapolate to GPT-4 scale and compare to reported perplexity

*Insight box:*
> 💡 If you plot loss vs parameters on log-log axes, you get
> a straight line. This means AI capabilities follow a power law —
> predictable, systematic, and (so far) unbroken.

---

**Section 2: Chinchilla Scaling — Optimal Compute**

*Canvas (700×300): Compute-optimal frontier*
- Plot: for a given compute budget C, what is the optimal (N, D) split?
- Show: original GPT-3 was compute-suboptimal (too big, not enough data)
- Show: Chinchilla (70B, 1.4T tokens) outperforms GPT-3 (175B, 300B tokens)

*Insight box:*
> 💡 The Chinchilla paper (2022) showed that for optimal performance,
> you should train on ~20 tokens per parameter.
> GPT-3 used only 1.7 tokens per parameter — it was starved of data.

---

**References:**
- Kaplan et al., "Scaling Laws for Neural Language Models" (2020) — OpenAI
- Hoffmann et al., "Training Compute-Optimal Large Language Models" (2022) — DeepMind Chinchilla

---

### Page 13: Chain-of-Thought Reasoning

**File:** `chain_of_thought.html`
**Title:** Chain-of-Thought Reasoning
**Subtitle:** *Thinking out loud — how scratchpad reasoning unlocks harder problems*
**Difficulty:** 2

**Core mathematical idea:**
Chain-of-thought (CoT) prompting causes the model to generate intermediate
reasoning steps. This effectively increases the "computation depth"
available to solve a problem, bypassing limitations of direct prediction.

---

**Section 1: The Problem with Direct Answers**

*Canvas (700×300): Token probability comparison — direct vs CoT*
- Problem: "A bat and ball cost $1.10 total. The bat costs $1 more than the ball. How much is the ball?"
- Direct answer: P("$0.10") is high (but wrong — answer is $0.05)
- CoT answer: P("Let me think... ball=x, bat=x+1, x+x+1=1.10, 2x=0.10, x=0.05") → correct

*Insight box:*
> 💡 Without chain-of-thought, the model uses a single forward pass
> to answer. With CoT, it uses hundreds of forward passes —
> one per reasoning token. More compute = better answers.

---

**Section 2: The Reasoning Tree**

*Canvas (700×400): Branching reasoning tree*
- Show a maths problem with multiple solution paths
- Tree branching at each decision step
- Highlight correct path in green, dead ends in red
- Animate: standard sampling vs beam search vs Tree-of-Thoughts

*Insight box:*
> 💡 The insight behind "thinking" models (o1, o3, DeepSeek R1):
> spend more tokens computing before giving an answer.
> Intelligence can be rented with compute.

---

**References:**
- Wei et al., "Chain-of-Thought Prompting Elicits Reasoning" (2022) — Google
- Yao et al., "Tree of Thoughts: Deliberate Problem Solving" (2023)

---

### Page 14: Retrieval-Augmented Generation

**File:** `retrieval_augmented_generation.html`
**Title:** Retrieval-Augmented Generation
**Subtitle:** *Memory on demand — augmenting a language model with a searchable knowledge base*
**Difficulty:** 2

**Core mathematical idea:**
RAG = encode query as vector → find nearest documents in vector database
→ inject as context → generate grounded response.
This is vector similarity search applied to knowledge retrieval.

---

**Section 1: The Vector Database**

*Canvas (700×380): 2D vector space with documents as points*
- ~30 document points scattered in 2D embedding space
- User types a query → query vector plotted → nearest k documents highlighted
- Cosine distance circles shown around query point
- Retrieved documents listed below

*Controls:*
- Query text input
- k (number of retrieved documents) slider: 1 to 10
- Distance metric toggle: cosine / euclidean

*Insight box:*
> 💡 A vector database is a library where the shelves are organised
> by meaning, not alphabet. Similar ideas are geometrically nearby.
> RAG gives an LLM a dynamic, updatable external memory.

---

**Section 2: The RAG Pipeline**

*Canvas (700×300): Animated pipeline diagram*
- Step 1: User query → encode to vector
- Step 2: Vector database search → retrieve top-k documents
- Step 3: Documents + query → prompt → LLM
- Step 4: Grounded response

*Insight box:*
> 💡 Without RAG, a model's knowledge is frozen at training time.
> With RAG, it can reason over any document you give it.
> This is how enterprise AI systems access private company knowledge.

---

### Page 15: Agentic AI Systems

**File:** `agentic_systems.html`
**Title:** Agentic AI Systems
**Subtitle:** *When a language model takes action — the feedback loop that creates agency*
**Difficulty:** 2

**Core mathematical idea:**
An agent is a system that observes state, selects actions, and updates
its plan based on results. LLM-based agents wrap the model in a
Observe → Think → Act → Observe loop.

---

**Section 1: The Agent Loop**

*Canvas (700×400): Animated state machine diagram*
- Four nodes: OBSERVE → THINK → ACT → (back to OBSERVE)
- Centre: the LLM (represented as a neural network icon)
- Surrounding ring: memory, tools, environment
- Animate: query arrives → LLM thinks → calls a tool → observes result → thinks again

*Controls:*
- "Run example task" — animate a sample task (e.g. "Find and summarise three papers on attention")
- Step-by-step mode: pause at each node

*Insight box:*
> 💡 The difference between a chatbot and an agent is the loop.
> A chatbot responds once. An agent acts, observes consequences,
> and revises its plan — potentially for thousands of steps.

---

**Section 2: Tool Use & Planning**

*Canvas (700×350): Planning tree*
- Show a task decomposed into subtasks
- Each subtask: plan → tool call → result → update plan
- Tools: web search, code execution, file read, calculator
- Show the ReAct pattern: Reason + Act interleaved

*Formula block (pseudocode):*
```
while not done:
    thought  = LLM("Given: " + state + " What should I do?")
    action   = parse_action(thought)
    result   = execute_tool(action)
    state    = update(state, action, result)

ReAct = Reasoning + Acting (interleaved in the token stream)
```

*Insight box:*
> 💡 Agentic AI is the reason this technology might be transformative
> rather than just useful. A model that can write code, run it,
> observe errors, fix them, and iterate is qualitatively different
> from a model that only answers questions.

---

**References:**
- Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models" (2022)
- Park et al., "Generative Agents: Interactive Simulacra of Human Behaviour" (2023)

---

## Global Standards for Claude Code

### Every Page Must Include

1. **Back link:** `← Back to Index` linking to `index.html`
2. **Chapter breadcrumb:** `← Chapter 11: The Mathematics of Intelligence`
3. **Difficulty badge:** coloured pill (1=green, 2=cyan, 3=gold)
4. **"Prerequisites" panel:** cross-links to relevant existing pages
5. **"Further reading" panel** at bottom with 3–5 academic references
6. **Mobile responsiveness:** canvas `width:100%!important` on screens < 600px
7. **No external dependencies:** pure HTML + CSS + JS, no CDN libraries

### Interactivity Requirements

- Every canvas must respond to at least one user control
- Sliders must show live values using `<span class="slider-val">`
- All animations must have play/pause/reset controls
- All randomised elements must have a "Reset / New seed" button

### Mathematical Rigour

- Every formula displayed in the `formula-block` with colour-coded variables
- Each colour consistently means the same thing across all 15 pages
- Numerical examples shown for every abstract formula
- Units and dimensions labelled where applicable

### Language & Tone

**Phrases that work well for this chapter:**
- *"This single equation powers every chatbot, search engine, and voice assistant"*
- *"The mathematics is not new — only the scale is"*
- *"Meaning is geometry. Learning is descent. Language is probability."*
- *"At temperature 0, a language model becomes deterministic. At temperature ∞, it becomes random. Intelligence lives somewhere between certainty and chaos."*
- *"Every weight in GPT-4 was set by gradient descent. Nobody programmed what it knows."*
- *"The word 'intelligent' is a description of behaviour, not mechanism."*
- *"An embedding is a promise: similar meanings will be geometrically close."*
- *"Backpropagation is the chain rule with a purpose."*
- *"Attention is the question: of all the context available, what matters right now?"*

**Style notes:**
- Use em dashes liberally in subtitles (site convention)
- Begin insight boxes with 💡
- Keep formula explanations in plain English adjacent to symbols
- Include one surprising quantitative fact per page (GPT-4 dimensions, training compute, etc.)
- Avoid hype: describe capabilities mathematically, not mystically

### Connections Between Pages

Build this cross-reference network into each page's "Prerequisites" panel:

```
vectors_and_embeddings ←→ vectors.html (existing)
probability_and_softmax ←→ probability_distributions.html (existing)
neuron_and_activation ←→ (no prerequisite)
gradient_descent ←→ derivatives.html, differential_equations.html
backpropagation ←→ fundamental_theorem_calculus.html
overfitting ←→ correlation_regression.html
attention_mechanism → vectors_and_embeddings, probability_and_softmax
positional_encoding → fourier_transform.html (existing!)
transformer_architecture → attention_mechanism, positional_encoding
next_token_prediction → probability_and_softmax
toy_language_model → next_token_prediction
scaling_laws → logarithms_exponentials.html (existing)
chain_of_thought → next_token_prediction
retrieval_augmented_generation → vectors_and_embeddings
agentic_systems → all Level 3–4 pages
```

---

## Build Order Recommendation

Build in this sequence for maximum early impact:

| Priority | File | Why first |
|----------|------|-----------|
| 1 | `gradient_descent.html` | Most visually spectacular, connects existing maths |
| 2 | `vectors_and_embeddings.html` | Eliminates most common confusion, standalone |
| 3 | `attention_mechanism.html` | Highest public interest, most unique contribution |
| 4 | `probability_and_softmax.html` | Bridges existing probability chapter |
| 5 | `next_token_prediction.html` | Directly addresses "how does it really work?" |
| 6 | `ai_mathematics_map.html` | Chapter landing page — build once early pages exist |
| 7 | `neuron_and_activation.html` | Logical step before backprop |
| 8 | `backpropagation.html` | Requires gradient descent to exist |
| 9 | `transformer_architecture.html` | Requires attention to exist |
| 10 | `toy_language_model.html` | Fun, requires next_token_prediction |
| 11–15 | Remaining pages | Complete the chapter |

---

## index.html Updates Required

When adding this chapter to the main index:

1. Update the stats bar: "61 visualisations" → "76 visualisations"
2. Add Chapter 11 entry in the chapters array
3. Add "The Mathematics of Intelligence" to the chapter selector/filter if one exists
4. Consider a **featured callout** on the hero section: "New: The Mathematics of AI — 15 interactive explorations"

---

*Specification version 1.0 | mathsedu.org Chapter 11*
*Prepared for Claude Code implementation | March 2026*
