## 4. Technical SEO

### 4.1 Page Speed

**What it is:** How fast a page loads and becomes interactive for users.

**Why it matters:** Page speed is a confirmed ranking factor (since 2010 for desktop, 2018 for mobile). More importantly, 53% of mobile users abandon sites that take over 3 seconds to load.

**Core targets:**
| Metric | Target |
|---|---|
| Time to First Byte (TTFB) | < 200ms |
| First Contentful Paint (FCP) | < 1.8s |
| Total page size | < 2MB |
| HTTP requests | < 50 |

**Speed improvement tactics:**
1. **Hosting:** Move to a VPS or quality managed hosting (Kinsta, WP Engine, Cloudways) — shared hosting is the #1 speed killer
2. **CDN:** Use Cloudflare (free tier is good enough for most sites)
3. **Image compression:** Use WebP format. Tools: Squoosh, ShortPixel, Imagify
4. **Lazy loading:** `loading="lazy"` on images below the fold
5. **Minify CSS/JS:** Use WP Rocket (WordPress) or manual build tools (Vite, Webpack)
6. **Remove unused plugins/scripts:** Every unused script is dead weight
7. **Browser caching:** Set `Cache-Control` headers
8. **Enable GZIP/Brotli compression:** On the server level

**Testing tools:**
- `PageSpeed Insights` (Google) — real CWV data
- `GTmetrix` — waterfall view, identifies specific bottlenecks
- `WebPageTest.org` — most detailed, test from global locations
- `Chrome DevTools → Network tab` — raw timing data

---

### 4.2 Core Web Vitals

**What it is:** Google's official UX metrics, used as ranking signals since June 2021.

#### LCP — Largest Contentful Paint
**What:** Time until the largest visible element (hero image, H1) is rendered.
**Target:** < 2.5 seconds
**Fixes:**
- Preload the LCP element: `<link rel="preload" as="image" href="hero.webp">`
- Use a fast CDN
- Avoid lazy loading on the hero/above-fold image
- Optimize server response time

#### CLS — Cumulative Layout Shift
**What:** How much the page layout unexpectedly shifts during loading.
**Target:** < 0.1
**Fixes:**
- Set explicit width/height on all images: `<img width="800" height="600">`
- Reserve space for ads and embeds with CSS aspect-ratio
- Avoid inserting content above existing content dynamically
- Use `font-display: swap` cautiously — web fonts cause layout shifts

#### INP — Interaction to Next Paint
**What:** Measures delay between user interaction (click, tap, key press) and next visual update. Replaced FID in March 2024.
**Target:** < 200ms
**Fixes:**
- Reduce main thread blocking JavaScript
- Break up long tasks (> 50ms) into smaller async chunks
- Use `scheduler.postTask()` or `requestIdleCallback()`
- Remove or defer third-party scripts (chat widgets, tag managers)

**Measuring CWVs:**
- **Field data** (real users): Google Search Console → Core Web Vitals report
- **Lab data** (simulated): Lighthouse, PageSpeed Insights
- Field data is what Google uses for ranking — lab data is diagnostic only

---

### 4.3 Mobile-First Indexing

**What it is:** Google crawls and indexes the mobile version of your site. If mobile version has less content than desktop, that's what gets ranked.

**How to implement:**
- Use responsive design (one codebase, CSS media queries) — not separate m.site.com
- Same content on mobile and desktop
- Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Test with Chrome DevTools → device emulation or Google's Mobile-Friendly Test
- Tap targets: buttons/links minimum 48×48px, 8px spacing

---

### 4.4 SSL / HTTPS

**What it is:** Encrypts data between server and user. Confirmed ranking signal since 2014.

**Implementation:**
- Get a free SSL certificate from Let's Encrypt (auto-renews every 90 days)
- Most hosting providers (Cloudflare, Kinsta, SiteGround) handle this automatically
- Redirect all HTTP → HTTPS: `301` redirect at server level
- Redirect `www` to `non-www` (or vice versa) — pick one canonical form
- Check for mixed content: HTTP resources loaded on HTTPS page break the padlock

---

### 4.5 robots.txt

**What it is:** A plain text file at `yourdomain.com/robots.txt` that tells crawlers what to crawl.

**Syntax:**
```
User-agent: *
Disallow: /wp-admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /search?
Allow: /wp-admin/admin-ajax.php

User-agent: Googlebot
Disallow:

Sitemap: https://yourdomain.com/sitemap.xml
```

**What to block:**
- Admin panels
- Search result pages (infinite crawl trap)
- Duplicate parameter URLs (`?sort=`, `?ref=`)
- Cart and checkout pages
- Staging subdirectories

**What NOT to block:**
- CSS and JavaScript files — Googlebot needs these to render pages
- Any page you want indexed

---

### 4.6 XML Sitemap

**What it is:** An XML file listing all important URLs on your site, with metadata (last modified, priority, change frequency).

**Best practices:**
- Submit via Google Search Console → Sitemaps
- Max 50,000 URLs per sitemap file; use sitemap index for larger sites
- Only include canonical URLs — no `noindex` pages, no 301 redirects, no 404s
- Auto-generate with plugins (Yoast, RankMath for WP; next-sitemap for Next.js)

**Minimal valid sitemap:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/page-slug/</loc>
    <lastmod>2025-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

### 4.7 Canonical Tags

**What it is:** HTML tag telling Google which URL is the "master" version when duplicate or near-duplicate content exists.

**Syntax:**
```html
<link rel="canonical" href="https://yourdomain.com/original-page/" />
```

**When to use:**
- Paginated content (`/blog/page/2/` → canonical to `/blog/`)
- URL parameters (`/products?color=red` → canonical to `/products/`)
- HTTP/HTTPS duplicates
- www/non-www duplicates
- Syndicated content (if you publish elsewhere, add canonical pointing back)

**Common mistake:** Self-referential canonicals are fine and encouraged. Every page should have a canonical — even if it points to itself.

---

### 4.8 404 Fixes

**What it is:** Pages that return a "404 Not Found" HTTP status, meaning the content doesn't exist.

**Why it matters:**
- Hard 404s waste crawl budget
- Lose PageRank from inbound links pointing to deleted pages
- Bad UX

**Fix workflow:**
1. Find 404s: GSC → Coverage → Not found (404), or Ahrefs → Site Audit → Broken pages
2. If the page was moved → 301 redirect to new location
3. If content is gone permanently → 301 redirect to most relevant alternative
4. If no relevant alternative → 301 redirect to category or homepage
5. Create a custom 404 page that guides users to popular content

**Redirect map example:**
```
/old-blog-post/ → /new-blog-post/ [301]
/deleted-category/ → /blog/ [301]
/old-product/ → /products/similar-product/ [301]
```

---

### 4.9 Structured Data / Schema Markup

**What it is:** JSON-LD code added to pages that tells Google explicitly what your content is — enabling Rich Results (star ratings, FAQs, recipes, events in SERPs).

**Most valuable schema types:**
| Schema Type | SERP Benefit |
|---|---|
| Article | Publisher info, date |
| FAQ | Expanded FAQ accordion in SERPs |
| HowTo | Steps shown with images |
| Product | Price, availability, ratings |
| LocalBusiness | Map pack, hours, phone |
| Review/AggregateRating | Star ratings |
| BreadcrumbList | Breadcrumb path in URL |
| Organization | Knowledge panel |

**Example: FAQ Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is keyword difficulty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keyword difficulty (KD) is a metric from 0–100 that estimates 
                 how hard it is to rank on page 1 for a given keyword, based on 
                 the authority and quality of pages currently ranking."
      }
    }
  ]
}
```

**How to add:** Place inside `<script type="application/ld+json">` in `<head>` or `<body>`.

**Validate:** Google Rich Results Test (search.google.com/test/rich-results)

**AI prompt for technical SEO:**
```
You are a senior technical SEO engineer. Perform a technical SEO audit of 
[website URL or paste the HTML source].

Identify and prioritize issues in these categories:
1. Crawlability (robots.txt, sitemap, internal links, crawl traps)
2. Indexability (noindex tags, canonical issues, thin content)
3. Core Web Vitals (LCP, CLS, INP blockers)
4. Mobile-first issues
5. Structured data opportunities

For each issue: state the problem, severity (Critical/High/Medium/Low), 
and exact fix with code example where applicable.

Output as a table: Issue | Category | Severity | Fix
```

### Common Mistakes
- Blocking CSS/JS in robots.txt (breaks rendering)
- Canonicals pointing to 301-redirected URLs
- Sitemap containing `noindex` pages or 404s
- Missing canonical tags (even on unique pages — use self-referential)
- Not setting image dimensions → CLS spikes
- Lazy loading the hero/LCP image → slower LCP
- Forgetting to redirect old URLs after site restructure

### Section Checklist
- [ ] robots.txt tested — no important pages blocked
- [ ] Sitemap submitted to GSC, only contains 200 OK + indexed pages
- [ ] All pages have canonical tags (self-referential minimum)
- [ ] HTTPS enabled, HTTP→HTTPS 301 redirect active
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms (verify in GSC field data)
- [ ] Schema markup on key page types (FAQ, Article, Product)
- [ ] Validate schema with Rich Results Test
- [ ] No 404s with inbound backlinks (check Ahrefs → Broken Backlinks)
- [ ] Custom 404 page exists and guides users

---

