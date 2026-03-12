# mathsedu.org — Agent Instructions

## Required Reading

Before making ANY changes to this repository, you MUST read:

1. **`docs/TECHNICAL_BLUEPRINT.md`** — Full architecture, CSS/JS conventions, colour system, SEO requirements, and publishing checklist
2. **`docs/REVIEW_PROMPT.md`** — QA review checklist with BLOCK/WARN severity levels

These documents are the authoritative reference for all design and development decisions.

## Archive Policy

Before modifying any existing file (index.html, sitemap.xml, STATUS.md, FOUNDATION.md, topic-*.html, level-*.html), copy it to `Archive/` with `_YYYYMMDD_HHMM` appended to the filename (before the extension). Then modify the original.

## Quick Reference

- **Stack:** Self-contained HTML5 + Canvas + vanilla JS. No frameworks, no build tools.
- **Background:** `#0a0a1a` | **Text:** `#e0e0e0` | **Font:** Georgia, serif
- **Accent colours:** Per chapter — see `docs/TECHNICAL_BLUEPRINT.md` section 4.2
- **HiDPI:** All canvases must use `devicePixelRatio` scaling
- **SEO:** Every page needs JSON-LD, Open Graph, Twitter Card tags
- **Footer:** Standard footer on every page (see blueprint)
- **British English** spelling throughout
