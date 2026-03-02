# Chapter Configuration

Reference data for all chapters. Use this when creating a new visualisation to get the correct accent colour, chapter name, and context.

## Chapters

| # | Title | Subtitle | Icon | Accent | RGB | Topics |
|---|-------|----------|------|--------|-----|--------|
| 1 | Logic & Proof | The grammar of mathematics | ⇒ | `#c084fc` | `192,132,252` | 3 |
| 2 | Numbers | From counting to infinity | ℕ | `#fbbf24` | `251,191,36` | 6 |
| 3 | Geometry | Euclid's gift to the world | △ | `#f87171` | `248,113,113` | 8 |
| 4 | Algebra | The art of the unknown | χ | `#60a5fa` | `96,165,250` | 6 |
| 5 | Trigonometry & Waves | The mathematics of oscillation | ∿ | `#34d399` | `52,211,153` | 7 |
| 6 | Calculus | The mathematics of change | ∫ | `#fb923c` | `251,146,60` | 7 |
| 7 | Linear Algebra | The mathematics of space and transformation | → | `#22d3ee` | `34,211,238` | 5 |
| 8 | Probability & Statistics | The mathematics of uncertainty | ∑ | `#f472b6` | `244,114,182` | 6 |
| 9 | Analysis & Topology | The mathematics of rigour and shape | ∞ | `#818cf8` | `129,140,248` | 6 |
| 10 | Beautiful Results | The crown jewels of mathematics | ★ | `#fcd34d` | `252,211,77` | 6 |
| 11 | Quantitative Finance | Where mathematics meets the markets | £ | `#10b981` | `16,185,129` | 10 |

## Appendix

| Title | Icon | Accent | RGB | Topics |
|-------|------|--------|-----|--------|
| Physics | ⚛ | `#a78bfa` | `167,139,250` | 1 |

## Notes

- The accent colour is used for: `.back:hover`, `.btn.active`, slider `accent-color`, `.slider-val`, `.result-box` border/background, `.explain-name`, `.insight-box` border, and formula highlighting
- RGB values are needed for `rgba()` calls in CSS (button active state, result boxes, insight boxes)
- When adding a new chapter, also update the `chapters` array in `index.html` with `title`, `subtitle`, `icon`, `color`, and `topics`
