# HTML Template Reference

Replace all `{{PLACEHOLDERS}}` with actual values. See [chapter-config.md](chapter-config.md) for chapter-specific values.

## Complete Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}}</title>
    <meta name="description" content="{{DESCRIPTION}}">
    <link rel="canonical" href="https://mathsedu.org/{{FILENAME}}">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "{{TITLE}}",
      "url": "https://mathsedu.org/{{FILENAME}}",
      "description": "{{DESCRIPTION}}",
      "educationalLevel": "{{LEVEL}}",
      "teaches": "{{TEACHES}}",
      "learningResourceType": "Interactive visualisation",
      "interactivityType": "active",
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "creator": {
        "@type": "Person",
        "name": "Manoj Bhaskar"
      },
      "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      "isPartOf": {
        "@type": "Course",
        "name": "{{CHAPTER_NAME}}",
        "url": "https://mathsedu.org/"
      }
    }
    </script>
    <meta property="og:title" content="{{TITLE}}">
    <meta property="og:description" content="{{DESCRIPTION}}">
    <meta property="og:url" content="https://mathsedu.org/{{FILENAME}}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="A Visual Discovery of Mathematics">
    <meta property="og:locale" content="en_GB">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{{TITLE}}">
    <meta name="twitter:description" content="{{DESCRIPTION}}">
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#0a0a1a;color:#e0e0e0;font-family:Georgia,'Times New Roman',serif;line-height:1.6}
        .container{max-width:960px;margin:0 auto;padding:24px 28px 48px}
        .back{color:#606078;text-decoration:none;font-size:0.85em}
        .back:hover{color:{{ACCENT}}}
        h1{font-size:1.8em;font-weight:400;color:#fff;margin:16px 0 4px}
        .subtitle{color:#808098;font-style:italic;margin-bottom:28px}
        h2{font-size:1.15em;font-weight:400;color:#fff;margin:28px 0 12px}
        canvas{display:block;border-radius:10px;border:1px solid rgba(255,255,255,0.06)}
        .panel{background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:18px 22px;margin-bottom:20px}
        .panel h3{font-weight:400;font-size:0.8em;color:#808098;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px}
        .btn-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
        .btn{background:rgba(255,255,255,0.035);border:1px solid rgba(255,255,255,0.07);color:#b0b0c4;padding:5px 13px;border-radius:6px;cursor:pointer;font-family:Georgia,serif;font-size:0.92em;transition:all 0.2s}
        .btn:hover{background:rgba(255,255,255,0.07);color:#e0e0ef}
        .btn.active{background:rgba({{ACCENT_RGB}},0.13);border-color:rgba({{ACCENT_RGB}},0.4);color:{{ACCENT}}}
        .math-line{font-family:'Courier New',monospace;font-size:0.92em;color:#c0c0d8;margin:4px 0;line-height:1.8}
        .math-line .green{color:{{ACCENT}}}.math-line .cyan{color:#22d3ee}.math-line .gold{color:#fbbf24}.math-line .gray{color:#808098}
        .math-line .muted{color:#808098}
        .slider-row{display:flex;align-items:center;gap:14px;margin:10px 0}
        .slider-row label{color:#a0a0b8;font-size:0.9em;min-width:130px}
        .slider-row input[type=range]{flex:1;max-width:300px;accent-color:{{ACCENT}};cursor:pointer}
        .slider-val{color:{{ACCENT}};font-family:'Courier New',monospace;font-size:1.05em;min-width:60px;text-align:right}
        .result-box{background:rgba({{ACCENT_RGB}},0.06);border:1px solid rgba({{ACCENT_RGB}},0.2);border-radius:8px;padding:14px 18px;margin:14px 0}
        .result-big{font-size:1.5em;color:{{ACCENT}};font-family:'Courier New',monospace;font-weight:bold}
        .explain{background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px 24px;margin-top:20px}
        .explain-name{color:{{ACCENT}};font-size:1.1em;margin-bottom:6px}
        .explain-text{color:#a0a0b8;font-size:0.9em;line-height:1.75}
        .formula-block{margin:8px 0;padding:10px 14px;background:rgba(255,255,255,0.02);border-radius:6px;font-family:'Courier New',monospace;font-size:0.95em;line-height:2}
        .grid-legend{display:flex;gap:16px;flex-wrap:wrap;margin:10px 0;font-size:0.85em}
        .legend-item{display:flex;align-items:center;gap:6px}
        .legend-swatch{width:12px;height:3px;border-radius:1px}
        .insight-box{background:rgba({{ACCENT_RGB}},0.04);border-left:3px solid rgba({{ACCENT_RGB}},0.3);border-radius:0 8px 8px 0;padding:12px 16px;margin:14px 0;font-size:0.88em;color:#a0a0b8;line-height:1.7}
        @media(max-width:600px){
            canvas{width:100%!important;height:auto!important}
            .slider-row{flex-wrap:wrap}.slider-row label{min-width:100%}
        }
    </style>
</head>
<body>
<div class="container">
    <a class="back" href="index.html">&larr; Back to Index</a>
    <h1>{{TITLE_HTML}}</h1>
    <p class="subtitle">{{SUBTITLE}}</p>

    <!-- ═══════════════════════════════════════════════════════════
         Section 1: {{SECTION_1_TITLE}}
         ═══════════════════════════════════════════════════════════ -->
    <h2>1. {{SECTION_1_TITLE}}</h2>
    <div class="panel">
        <h3>{{SECTION_1_SUBTITLE}}</h3>
        <canvas id="canvas1" width="700" height="400"></canvas>

        <!-- Legend (if needed) -->
        <div class="grid-legend">
            <div class="legend-item"><div class="legend-swatch" style="background:{{ACCENT}}"></div><span style="color:{{ACCENT}}">Label</span></div>
        </div>

        <!-- Toggle buttons (if needed) -->
        <div class="btn-row">
            <button class="btn active" id="btn1A">Option A</button>
            <button class="btn" id="btn1B">Option B</button>
        </div>

        <!-- Parameter sliders -->
        <div class="slider-row">
            <label>Parameter:</label>
            <input type="range" id="slider1" min="0" max="100" value="50">
            <span class="slider-val" id="val1">50</span>
        </div>

        <!-- Results -->
        <div class="result-box">
            <div id="results1" class="math-line"></div>
        </div>

        <!-- Insight -->
        <div class="insight-box">
            Key insight text here.
        </div>
    </div>

    <!-- Add more sections as needed, following the same pattern -->

</div>

<script>
/* ================================================================
   Section 1: {{SECTION_1_TITLE}}
   ================================================================ */
var cvs1 = document.getElementById('canvas1');
var ctx1 = cvs1.getContext('2d');
var W1 = cvs1.width, H1 = cvs1.height;
var PAD1 = { left: 70, right: 30, top: 30, bottom: 50 };

function draw1() {
    var plotW = W1 - PAD1.left - PAD1.right;
    var plotH = H1 - PAD1.top - PAD1.bottom;

    // Read slider values
    var param = parseInt(document.getElementById('slider1').value);
    document.getElementById('val1').textContent = param;

    // Clear
    ctx1.clearRect(0, 0, W1, H1);

    // Grid
    ctx1.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx1.lineWidth = 1;
    // ... draw grid lines

    // Axes
    ctx1.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx1.lineWidth = 1.5;
    ctx1.beginPath();
    ctx1.moveTo(PAD1.left, PAD1.top);
    ctx1.lineTo(PAD1.left, H1 - PAD1.bottom);
    ctx1.lineTo(W1 - PAD1.right, H1 - PAD1.bottom);
    ctx1.stroke();

    // Data
    // ... draw visualisation

    // Labels
    ctx1.fillStyle = '#808098';
    ctx1.font = '12px Georgia, serif';
    ctx1.textAlign = 'center';
    // ... draw axis labels

    // Update results
    document.getElementById('results1').innerHTML = '...';
}

// Event listeners
document.getElementById('slider1').addEventListener('input', draw1);
document.getElementById('slider1').addEventListener('touchstart', function(e) { e.stopPropagation(); }, { passive: true });

// Initial draw
draw1();
</script>

<footer style="text-align:center;padding:28px 20px 18px;color:#505068;font-size:0.72em;line-height:1.7;border-top:1px solid rgba(255,255,255,0.04);margin-top:30px">
    <div>&copy; 2025&ndash;2026 Manoj Bhaskar &middot; Coded by <a href="https://claude.ai/claude-code" style="color:#606078;text-decoration:none" target="_blank" rel="noopener">Claude</a> &middot; <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" style="color:#606078;text-decoration:none" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a></div>
</footer>
</body>
</html>
```

## Placeholder Reference

| Placeholder | Description | Example |
|-------------|-------------|---------|
| `{{TITLE}}` | Page title (plain text, use `&amp;` for &) | `Compound Interest &amp; Time Value of Money` |
| `{{TITLE_HTML}}` | Title in body (can use HTML entities) | `Compound Interest &amp; Time Value of Money` |
| `{{DESCRIPTION}}` | Meta description, 140–160 chars | `Visualise compound interest and the time value of money.` |
| `{{FILENAME}}` | HTML filename | `compound_interest.html` |
| `{{CHAPTER_NAME}}` | Chapter name for JSON-LD isPartOf | `Quantitative Finance` |
| `{{LEVEL}}` | educationalLevel for JSON-LD | `Beginner`, `Intermediate`, or `Advanced` |
| `{{TEACHES}}` | teaches field for JSON-LD | `Compound interest and time value of money` |
| `{{ACCENT}}` | Chapter accent hex colour | `#10b981` |
| `{{ACCENT_RGB}}` | Accent as RGB values (for rgba()) | `16,185,129` |
| `{{SUBTITLE}}` | Italic subtitle below h1 | `A pound today is worth more than a pound tomorrow` |

## Difficulty → educationalLevel mapping

| Difficulty | educationalLevel |
|------------|-----------------|
| 1 | Beginner |
| 2 | Intermediate |
| 3 | Advanced |
| 4 | Advanced |
