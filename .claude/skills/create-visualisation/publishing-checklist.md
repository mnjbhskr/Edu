# Publishing Checklist

Follow every step when adding a new visualisation to mathsedu.org. Do not skip any.

**Archive policy:** Before modifying any existing file, copy it to `Archive/` with `_YYYYMMDD_HHMM` appended to the filename (before the extension).

## Steps

### 1. Create the HTML file

- Place at repository root: `/Users/mb/Documents/GitHub/Edu/{{FILENAME}}`
- Follow the template in [template.md](template.md)
- Ensure all SEO tags are present (meta description, canonical, JSON-LD, OG, Twitter)
- Ensure the footer is present

### 2. Update index.html

- **Archive first:** `cp index.html Archive/index_YYYYMMDD_HHMM.html`
- Find the correct chapter in the `chapters` array (starts at ~line 190)
- Add a new topic object to the chapter's `topics` array:

```javascript
{ title: "Topic Title",
  desc: "One-sentence description for the card",
  file: "filename.html", difficulty: N },
```

- `difficulty`: 1–4 (number of filled dots on the card)
- The `render()` function automatically picks up new entries

### 3. Update sitemap.xml

- **Archive first:** `cp sitemap.xml Archive/sitemap_YYYYMMDD_HHMM.xml`
- Add a new `<url>` entry before the closing `</urlset>`:

```xml
  <url>
    <loc>https://mathsedu.org/{{FILENAME}}</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
```

- Use today's date for `lastmod`

### 4. Update docs/STATUS.md

- **Archive first:** `cp docs/STATUS.md Archive/STATUS_YYYYMMDD_HHMM.md`
- Update the "Last updated" date
- Increment the "Total visualisations" count
- Update the topic count for the relevant chapter in the "Chapter Completion" table
- Add the new topic to the Build History under the appropriate phase

### 5. Update docs/FOUNDATION.md

- **Archive first:** `cp docs/FOUNDATION.md Archive/FOUNDATION_YYYYMMDD_HHMM.md`
- Add a row to the appropriate chapter's table:

```markdown
| N | Topic Title | `filename.html` | difficulty |
```

- Update the total count at the bottom of the file

### 6. Update memory

- Update `/Users/mb/.claude/projects/-Users-mb-Documents-GitHub-Edu/memory/MEMORY.md` with the new topic in the Current Status section

### 7. Commit and push

```bash
git add {{FILENAME}} index.html sitemap.xml docs/STATUS.md docs/FOUNDATION.md
git commit -m "Add [Topic Title] visualisation to [Chapter Name]"
git push
```

### 8. Google Search Console

- Remind the user to re-submit the sitemap at https://search.google.com/search-console
- The updated `sitemap.xml` will be picked up automatically, but manual submission speeds up indexing
