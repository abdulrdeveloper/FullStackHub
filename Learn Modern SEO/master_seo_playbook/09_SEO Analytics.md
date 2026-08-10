## 9. SEO Analytics

### 9.1 Google Search Console (GSC)

**What it is:** Free tool from Google showing how your site performs in Google Search. Actual Google data — not estimates.

**Most important reports:**

**Performance Report:**
- Total clicks, impressions, CTR, average position
- Filter by: page, country, device, search type
- **Key use:** Find pages with high impressions but low CTR (fix title/meta). Find pages ranking position 5–15 (optimize to push to top 3).

```
High impressions + low CTR = title/meta problem → rewrite them
Position 5–15 + decent volume = prioritize for content improvement
Position 1–3 + low CTR = SERP feature opportunity (schema markup)
```

**Coverage Report:**
- Valid pages, errors, warnings, excluded pages
- **Key use:** Find and fix 404s, soft 404s, crawl errors, noindex issues

**Core Web Vitals Report:**
- Real field data for LCP, CLS, INP — by page
- **Key use:** Identify poor/needs improvement pages; prioritize fixes

**Sitemaps:**
- Submit sitemap, see how many URLs are indexed vs. submitted

**Links Report:**
- Top linked pages, top anchor text, external sites linking most
- **Key use:** Monitor link profile, spot unnatural anchor text patterns

---

### 9.2 Ahrefs Basics

**What it is:** Paid tool ($99+/mo) with the best backlink database and competitive keyword data.

**Most-used reports:**

| Report | Path | Use |
|---|---|---|
| Organic Keywords | Site Explorer → Organic Keywords | See what you rank for |
| Keyword Gaps | Competitive Analysis → Content Gap | Find keywords competitors rank for that you don't |
| Backlink Profile | Site Explorer → Backlinks | Monitor inbound links |
| Top Pages | Site Explorer → Top Pages | Your best traffic pages |
| Broken Backlinks | Site Explorer → Broken Backlinks | Redirect recovery opportunities |
| Keywords Explorer | Keywords Explorer | Research new keywords |
| Site Audit | Site Audit | Technical SEO issues |
| Rank Tracker | Rank Tracker | Monitor keyword position changes |

**Ahrefs workflow for competitor analysis:**
1. Enter competitor domain in Site Explorer
2. Go to Top Pages → filter by traffic (highest first)
3. Open the top 20 pages — what topics drive their traffic?
4. For each topic, check if you have competing content
5. Gaps → add to content roadmap

---

### 9.3 Metrics That Actually Matter

**Vanity metrics (look good, mean little):**

| Metric | Why it's misleading |
|---|---|
| Total impressions | Impressions without clicks = invisible rankings |
| Domain Authority | Not a Google metric; easily gamed |
| Bounce rate (GA4: Engagement Rate) | High bounce on correct answer pages is fine |
| Total backlinks | 10 high-quality links > 1,000 directory links |

**Metrics that drive business outcomes:**

| Metric | Where to find | Target |
|---|---|---|
| Organic traffic (sessions) | GA4 → Acquisition → Organic | Growing MoM |
| Organic conversions | GA4 → Goals + Organic channel | Depends on business |
| Keyword rankings in top 3 | GSC or Ahrefs Rank Tracker | Increase over time |
| Click-through rate (CTR) | GSC → Performance | >3% for most queries |
| Pages indexed | GSC → Coverage | Close to pages submitted |
| Core Web Vitals — LCP | GSC → Core Web Vitals | >75% "Good" URLs |
| Referring domains (unique) | Ahrefs → Site Explorer | Growing over time |
| Share of Voice | Ahrefs / Semrush → Market Explorer | % of clicks vs. competitors |

**AI prompt for analytics:**
```
I'm analyzing my SEO data. Here is my Google Search Console data for the 
last 3 months [paste data or describe]:

- Top pages by clicks
- Average CTR by page
- Average position by keyword
- Core Web Vitals summary

Analyze this data and tell me:
1. Which 5 pages have the highest improvement potential? (high impressions, 
   low CTR or positions 5–20)
2. What does the CTR data tell me about my title/meta quality?
3. Based on position data, which pages are "near the top" and worth prioritizing?
4. What on-page and off-page actions would you take first?
5. Create a 30-60-90 day SEO action plan based on this data.
```

### Common Mistakes
- Tracking DA/DR as a primary success metric — it's not a Google signal
- Not setting up Google Analytics 4 conversions for organic traffic
- Ignoring the GSC Coverage report — indexing issues destroy rankings silently
- Measuring rankings without tying them to traffic or conversions
- Not segmenting GSC data by device — mobile vs desktop performance differs
- Checking rankings daily instead of monitoring trends weekly/monthly

### Section Checklist
- [ ] GSC set up and verified with correct property (domain or URL-prefix)
- [ ] GA4 linked to GSC
- [ ] Organic conversion goals set up in GA4
- [ ] Rank tracking set up for top 20 target keywords (Ahrefs or GSC)
- [ ] Monthly: review GSC Performance for CTR opportunities
- [ ] Monthly: check Coverage report for new errors
- [ ] Quarterly: run Ahrefs Site Audit and fix critical issues
- [ ] Quarterly: do competitor content gap analysis

---

