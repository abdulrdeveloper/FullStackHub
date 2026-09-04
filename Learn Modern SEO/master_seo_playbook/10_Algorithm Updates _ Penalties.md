## 10. Algorithm Updates & Penalties

### 10.1 Major Google Algorithm Updates

| Update | Year | What it targeted |
|---|---|---|
| Panda | 2011 | Thin, duplicate, low-quality content |
| Penguin | 2012 | Manipulative link building, keyword-stuffed anchors |
| Hummingbird | 2013 | Query understanding, semantic search |
| Pigeon | 2014 | Local search ranking improvements |
| Mobile-Geddon | 2015 | Non-mobile-friendly sites penalized |
| RankBrain | 2015 | Machine learning for ambiguous queries |
| Medic | 2018 | YMYL sites (health, finance, legal) hit hardest |
| BERT | 2019 | Natural language understanding |
| Core Web Vitals | 2021 | LCP, FID, CLS as ranking signals |
| Helpful Content Update | 2022–2023 | AI-mass-produced, SEO-first content devalued |
| March 2024 Core Update | 2024 | Biggest spam crackdown ever; many sites deindexed |
| AI Overviews | 2024–2025 | AI-generated answers reduce click-through for info queries |

---

### 10.2 Types of Penalties

**1. Algorithmic Penalty (not a manual action):**
- Triggered automatically by algorithm updates
- No notification in GSC
- Detected by sudden traffic drop correlated with an update date
- Resolved by fixing the underlying quality/link issues — no "submit for reconsideration"

**2. Manual Action (Google reviewer flags your site):**
- Visible in GSC → Security & Manual Actions → Manual Actions
- Types: thin content, unnatural links, cloaking, hidden text, user-generated spam
- Requires fixing the issue + submitting a reconsideration request

**Check algorithm update dates:**
- `Google Search Status Dashboard`
- `MozCast` — algorithmic weather showing SERP volatility
- `Semrush Sensor` — similar volatility tracker
- `Search Engine Roundtable` (Barry Schwartz) — best real-time reporting

---

### 10.3 How to Recover from a Penalty

**Step 1: Diagnose**
- Compare traffic drop date to known update dates (use `Semrush Sensor` or `Moz History`)
- Identify which pages/sections lost traffic (GSC → Performance, filter by date)
- Manual action check: GSC → Manual Actions

**Step 2: Identify the cause**
- Traffic drop = content-related → run a content audit
- Backlink spike/drop correlation → run a link audit
- Many pages deindexed → Coverage report + robots.txt check

**Step 3: Fix for content issues (Panda/Helpful Content)**
- Audit all pages: keep (good traffic + quality), improve (thin but valuable), consolidate (merge), or delete (no traffic, no value)
- Improve E-E-A-T: add author bios, primary sources, original data
- Remove or noindex thin pages with no traffic
- Rewrite shallow content to match competitor depth

**Step 4: Fix for link issues (Penguin/Link Spam)**
- Export backlink profile from Ahrefs + Google Search Console
- Identify toxic links: irrelevant sites, link networks, hacked sites, over-optimized anchors
- Contact webmasters to request removal (save outreach emails)
- Create disavow file with remaining toxic links and submit via GSC → Disavow Tool

**Disavow file format:**
```
# Toxic links from link farm network identified on 2025-01-15
domain:spammy-linkfarm.com
domain:another-bad-site.net
https://specificbadpage.com/links/
```

**Step 5: Wait and monitor**
- Algorithm recoveries happen on next refresh cycle (can be days to months)
- Manual action recovery: submit reconsideration request via GSC; typically 2–4 weeks for response

---

### 10.4 What to Avoid (Ongoing)

**Content:**
- Pages with no original value — just rephrasing existing content
- AI-generated articles without human review, examples, or data
- Doorway pages — multiple near-identical pages for slight keyword variations
- Cloaking — showing different content to Googlebot vs. users
- Keyword stuffing (still happens in 2025)

**Links:**
- Buying links (even "sponsored" links without `rel="sponsored"` tag)
- Participating in link exchanges ("I link to you, you link to me" at scale)
- PBN (Private Blog Network) links
- Site-wide footer/sidebar links (pass too much anchor text)
- Over-optimized exact-match anchor text on a high % of links

**Technical:**
- Scraped content published at scale
- Excessive ads above the fold (page layout algorithm)
- Intrusive interstitials/popups on mobile (Google may penalize)
- Parasite SEO on your own domain (giving third parties subdomains to rank their content — now a direct penalty target)

**AI prompt for recovery:**
```
Act as an SEO penalty recovery specialist. My website [domain] lost 
[X]% of organic traffic around [date]. 

Based on this data [paste GSC performance data, coverage data, and 
Ahrefs backlink data], help me:

1. Identify whether this is likely a Helpful Content, Link Spam, 
   or Core algorithm issue
2. Create a content audit framework — what criteria to use for 
   keep/improve/delete/consolidate decisions
3. Write a link audit process to identify toxic backlinks
4. Draft a Google reconsideration request template (if manual action)
5. Create a 90-day recovery plan with weekly milestones
```

### Common Mistakes
- Panicking and making major site changes right after an update (wait and analyze first)
- Disavowing good links along with bad ones (audit carefully)
- Fixing only symptoms (deleting pages) without fixing the cause (improving quality)
- Submitting reconsideration request before actually fixing the issues
- Not keeping a backup of the disavow file

### Section Checklist
- [ ] Google Search Console → Manual Actions checked (should show "No issues detected")
- [ ] Traffic monitoring: alert set up for >20% weekly drop (Google Analytics Intelligence)
- [ ] Algorithm update calendar bookmarked (Search Engine Roundtable)
- [ ] Disavow file maintained and updated when toxic links found
- [ ] Content audit done annually: thin pages identified and actioned
- [ ] No tactics on the "what to avoid" list above in active use

---

