## 2. Keyword Research

### 2.1 Search Intent

**What it is:** The underlying reason a user types a query. Google categorizes intent into 4 types:

| Intent Type | Example Query | What User Wants |
|---|---|---|
| Informational | "how to fix crawl errors" | Learn something |
| Navigational | "Ahrefs login" | Go to a specific site |
| Commercial | "best keyword research tools 2025" | Compare before buying |
| Transactional | "buy Ahrefs subscription" | Complete a purchase |

**Why it matters:** Matching a "best CRM for small business" query (commercial) with a product page (transactional) kills your rankings. Google looks at what type of content dominates page 1 for any query — match that format.

**How to determine intent:**
1. Search the keyword manually in incognito
2. Look at what page 1 shows: blog posts = informational, product pages = transactional
3. Check the SERP features: featured snippets = informational, Shopping ads = transactional
4. Look at the words used: "how", "what" = info; "buy", "price", "vs" = commercial/transactional

---

### 2.2 Long-Tail Keywords

**What it is:** Keywords with 3+ words, lower volume, lower competition, higher conversion rate.

**Why it matters:** 70% of all searches are long-tail. A site with 50 DA ranking for "best project management software for remote teams with time tracking" is more realistic and more converting than trying to rank for "project management software."

**Real example:**
- Head term: `email marketing` (Vol: 110,000/mo, KD: 85)
- Long-tail: `email marketing for saas companies b2b` (Vol: 400/mo, KD: 22)
- The long-tail converts at 3x the rate with 1/10th the competition

**Finding long-tail keywords:**
- Google Autocomplete (type keyword + alphabet: "email marketing a...", "email marketing b...")
- "People Also Ask" boxes
- Reddit/Quora for how real users phrase problems
- Ahrefs → Keywords Explorer → "Questions" filter
- Semrush → Keyword Magic Tool → "Questions"

---

### 2.3 LSI Keywords (Latent Semantic Indexing)

**What it is:** Semantically related terms that co-occur with your main keyword. Google uses these to understand context and topic depth.

**Why it matters:** A page about "apple" that mentions "fruit", "orchard", "vitamin C" is clearly about the fruit. One that mentions "Mac", "iOS", "Steve Jobs" is about the company. LSI terms help Google understand which.

**How to find LSI keywords:**
- Scroll to the bottom of Google SERP — "Searches related to..."
- Use `LSIGraph.com` (free)
- Ahrefs → "Also rank for" report
- Pull the top 5 ranking pages for your keyword → run through `tfidf.io` or Surfer SEO

**Real example for "content marketing":**
- LSI terms: editorial calendar, content strategy, buyer persona, blog traffic, lead generation, content distribution, SEO writing

---

### 2.4 Tools Comparison

| Tool | Cost | Best For |
|---|---|---|
| Google Keyword Planner | Free | Volume data, PPC intent |
| Google Search Console | Free | Finding what you already rank for |
| Ahrefs | $99–$399/mo | Competitor research, backlink data |
| Semrush | $120–$450/mo | Full-suite: keywords + audits |
| Ubersuggest | Free–$29/mo | Beginners, limited data |
| Keywords Everywhere | $10/100k credits | Browser extension, quick data |
| AnswerThePublic | Free (3/day) | Question-based keywords |
| Surfer SEO | $89–$219/mo | Content optimization, NLP analysis |
| Mangools (KWFinder) | $29–$79/mo | KD accuracy, affordable |

---

### 2.5 Keyword Research Workflow

1. **Seed keywords** → brainstorm 10–20 core topic terms
2. **Expand** → run seeds through Ahrefs/Semrush, export keyword lists
3. **Filter** → remove KD > 60 (for new sites), volume < 50, irrelevant intent
4. **Group by intent** → cluster into informational, commercial, transactional buckets
5. **Map to pages** → one primary keyword per page, 3–5 secondary keywords
6. **Prioritize** → low KD + decent volume + high business value first

**AI prompt:**
```
Act as an expert keyword researcher. I run a [describe website/business]. 
My main topic is [topic]. 

Give me:
1. 10 head keywords with estimated search volume and competition level
2. 20 long-tail keyword variations grouped by search intent (informational, 
   commercial, transactional)
3. 10 question-based keywords from "People Also Ask" style queries
4. 5 LSI terms I should include on each page

Format as a table with columns: Keyword | Intent | Est. Volume | Competition | Notes
```

### Common Mistakes
- Targeting only high-volume keywords (KD 80+ as a new site = wasted effort)
- Ignoring search intent — writing blog posts for transactional keywords
- Stuffing multiple competing keywords into one page (keyword cannibalization)
- Not re-doing keyword research annually — intent and volume shift
- Using only one tool — cross-validate with at least two sources

### Section Checklist
- [ ] Every target page has one primary keyword and 3–5 secondary
- [ ] Intent confirmed by checking page 1 SERP manually
- [ ] Long-tail variants identified for each cluster
- [ ] LSI terms noted for each page
- [ ] No two pages targeting the same primary keyword (cannibalization check)

---

