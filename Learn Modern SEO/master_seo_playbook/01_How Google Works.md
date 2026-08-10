## 1. How Google Works

### 1.1 Crawling

**What it is:** Googlebot (a web spider) discovers URLs by following links, reading sitemaps, and checking previously crawled pages. It fetches HTML, CSS, JS, and other resources.

**Why it matters:** If Googlebot can't reach your page, it can't index or rank it. Crawl budget is finite — wasted crawls on low-value pages mean important pages get crawled less often.

**How it works technically:**
- Googlebot starts from a seed list of known URLs
- It follows `<a href>` links and discovers new pages
- Pages are added to a crawl queue, prioritized by PageRank-like signals
- Crawl rate is throttled to avoid overloading servers
- JavaScript rendering is done by a second-wave "Caffeine" pipeline — often delayed by hours to days

**What controls crawling:**
| Signal | Effect |
|---|---|
| `robots.txt` | Blocks or allows crawling specific paths |
| `Crawl-Delay` directive | Slows Googlebot down |
| Server response time | Slow = fewer pages crawled per session |
| Internal link structure | Orphan pages rarely get crawled |
| XML sitemap | Signals priority URLs directly |

**Key facts:**
- Googlebot uses a mobile user-agent by default (mobile-first indexing since 2023)
- Disallowing in `robots.txt` ≠ deindexing. Use `noindex` for that.
- Fetch and render tool in Google Search Console shows exactly what Googlebot sees

---

### 1.2 Indexing

**What it is:** After crawling, Google parses the page content, extracts signals (text, links, structured data, metadata), and stores them in the index — a massive key-value store mapping queries to documents.

**Why it matters:** Indexed ≠ ranked well. But not indexed = invisible.

**How indexing decisions are made:**
- Content quality threshold: thin, duplicate, or near-duplicate pages are excluded
- Canonical resolution: Google picks one URL when duplicates exist
- `noindex` meta tag or HTTP header → page excluded
- Soft 404s (page returns 200 but content says "not found") → dropped
- Pages blocked by `robots.txt` still get indexed if linked from external sites — Google sees the URL but not the content

**Check indexing status:**
```
site:yourdomain.com
```
Or use Google Search Console → Coverage report.

---

### 1.3 Ranking

**What it is:** When a query is entered, Google runs a multi-stage ranking pipeline across ~200+ signals to return the most relevant, authoritative, high-quality results.

**Core ranking systems (confirmed):**
| System | What it does |
|---|---|
| PageRank | Measures link-based authority |
| BERT / MUM | Understands natural language meaning |
| RankBrain | Interprets novel queries using ML |
| Helpful Content System | Penalizes low-value, AI-mass-produced content |
| Link Spam System | Devalues manipulative links |
| Core algorithm updates | Broad quality recalibrations (multiple/year) |

**The ranking signal categories:**
1. **Relevance** — Does the content match the query's intent?
2. **Authority** — How many quality links point to the page and domain?
3. **Quality** — E-E-A-T signals, content depth, originality
4. **UX** — Core Web Vitals, mobile-friendliness, HTTPS
5. **Freshness** — Recency matters more for news, trending queries
6. **Context** — User location, search history, device

**AI prompt for this section:**
```
You are a technical SEO consultant. Explain in plain English why a specific page 
at [URL] might not be ranking despite being indexed. Consider: crawl issues, 
indexing issues, relevance signals, authority gaps, and UX factors. 
List the most likely causes in order of probability.
```

### Common Mistakes
- Blocking CSS/JS in `robots.txt` — Google can't render the page correctly
- Using `noindex` on pages you want ranked (happens in staging → production migrations)
- Relying on `sitemap.xml` alone without building internal links
- Assuming "indexed" means "ranking" — they are separate events

### Section Checklist
- [ ] Verify Googlebot can crawl all important pages via GSC → Crawl Stats
- [ ] Check `robots.txt` for accidental blocks
- [ ] Confirm target pages are indexed (`site:` search or GSC Coverage)
- [ ] Review Core Web Vitals in GSC → Page Experience
- [ ] No `noindex` tags on pages you want ranked

---
