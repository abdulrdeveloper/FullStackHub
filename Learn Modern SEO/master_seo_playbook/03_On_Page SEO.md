## 3. On-Page SEO

### 3.1 Title Tag

**What it is:** The HTML `<title>` tag — appears as the clickable blue link in SERPs and on the browser tab.

**Why it matters:** #1 on-page relevance signal for search engines. Also the main driver of CTR.

**Rules:**
- Length: 50–60 characters (Google truncates at ~580px / ~60 chars)
- Primary keyword: at the front, or within the first 3 words
- Format: `Primary Keyword – Secondary Keyword | Brand`
- No clickbait — Google rewrites titles it considers misleading
- Make it compelling: numbers, power words, current year work

**Real examples:**
```
Bad:  Welcome to Our Website - Home Page
Good: Project Management Software for Remote Teams (2025) | Basecamp
Bad:  Email Marketing Tips
Good: 17 Email Marketing Tips That Actually Increase Open Rates
```

**Google rewrites title tags when:**
- Title doesn't match page content
- Title is too long
- Title is stuffed with keywords
- H1 is a better descriptor than the title

---

### 3.2 Meta Description

**What it is:** The gray snippet text shown under the blue link in SERPs. Not a direct ranking factor.

**Why it matters:** Directly affects CTR. Higher CTR = more traffic = indirect ranking signal.

**Rules:**
- Length: 150–160 characters
- Include primary keyword (Google bolds it in results)
- End with a clear call-to-action or value statement
- Unique for every page — duplicates get auto-generated replacements

**Template:**
```
[Pain point or question]. [How your page solves it]. [CTA or differentiator].
```

**Real example:**
```
Struggling to rank on Google? This complete on-page SEO guide covers title tags, 
meta descriptions, URL structure, and more — with real examples. Updated 2025.
```

---

### 3.3 URL Slug

**What it is:** The part of the URL after the domain: `yourdomain.com/[url-slug]`

**Rules:**
- Use hyphens, not underscores (`-` not `_`)
- Include primary keyword
- Keep it short: 3–5 words max
- All lowercase
- No stop words unless needed for clarity (a, the, for, of)
- Static slugs — never change post-publication (breaks inbound links)

**Examples:**
```
Bad:  /blog/post?id=1234&category=seo
Bad:  /the-complete-and-comprehensive-guide-to-on-page-seo-optimization
Good: /on-page-seo-guide
Good: /keyword-research-tools
```

---

### 3.4 H1–H3 Hierarchy

**What it is:** Heading tags that define content structure.

**Rules:**
- **H1:** One per page. Contains or closely matches the title tag. Include primary keyword.
- **H2:** Section headers. Include secondary keywords naturally.
- **H3:** Subsection headers. LSI terms, question variants.
- Never skip levels (don't go H1 → H3)
- Headings should be descriptive, not clever — they're for bots and skimmers

**Real example structure:**
```
H1: On-Page SEO: The Complete 2025 Guide
  H2: What Is On-Page SEO?
  H2: Title Tags — How to Write Them for Rankings and Clicks
    H3: How Long Should a Title Tag Be?
    H3: Where to Place Your Keyword in the Title
  H2: Meta Descriptions That Drive Clicks
  H2: Internal Linking Strategy
```

---

### 3.5 Keyword Placement

**Where to place the primary keyword:**
- Title tag (first 3 words ideally)
- H1 (exact or close variation)
- First 100 words of the content
- At least one H2
- URL slug
- Image alt text (at least one image)
- Meta description

**Frequency:** No hard rule. Use keyword density tools only as a sanity check, not a target. Write for humans; use keyword and synonyms naturally. Surfer SEO gives a content score based on NLP — aim for 70+.

---

### 3.6 Image Alt Text

**What it is:** The `alt` attribute on `<img>` tags.

**Why it matters:** Accessibility + Google Images ranking + contextual signal for the page.

**Rules:**
- Describe the image accurately
- Include keyword if it naturally fits — don't force it
- Keep under 125 characters
- No "image of" or "photo of" prefix — screen readers already say that
- Decorative images: use empty alt (`alt=""`)

**Examples:**
```html
Bad:  alt="SEO"
Bad:  alt="image123.jpg"
Bad:  alt="image of a man typing keyword research into google seo tips 2025"
Good: alt="Keyword research dashboard showing search volume and KD in Ahrefs"
```

---

### 3.7 Internal Linking

**What it is:** Links from one page on your site to another page on the same site.

**Why it matters:**
- Distributes PageRank throughout the site
- Helps Googlebot discover and crawl new pages
- Signals topical relevance between pages
- Keeps users on site longer

**Rules:**
- Use descriptive, keyword-rich anchor text (not "click here")
- Link from high-authority pages to pages you want to rank
- Every new page should get at least 3–5 internal links from existing pages
- Avoid orphan pages (pages with zero internal links pointing to them)
- Create a content cluster hub-and-spoke model: pillar page ↔ supporting posts

**Real example:**
```
In your "Content Marketing" pillar page:
→ Link to "How to Build an Editorial Calendar" (anchor: "editorial calendar")
→ Link to "B2B Content Distribution Tactics" (anchor: "content distribution")
→ Link to "Content Marketing ROI Metrics" (anchor: "measuring content ROI")
```

---

### 3.8 Content Length

**What it is:** Word count of your page content.

**The truth:** Length itself is not a ranking factor. Comprehensiveness is.

**Practical benchmarks by content type:**
| Content Type | Recommended Length |
|---|---|
| Product page | 300–800 words |
| Category page | 500–1,500 words |
| Blog post (informational) | 1,500–3,000 words |
| Pillar page / ultimate guide | 3,000–8,000 words |
| FAQ page | 500–1,200 words |

**Method:** Check the top 5 results for your target keyword. Average their word count. Beat it by 10–20% with *better* coverage, not padding.

**AI prompt for on-page SEO:**
```
Act as an on-page SEO expert. I'm writing a page targeting the keyword 
"[your keyword]". The page is a [type: blog post / product page / landing page].

Give me:
1. An optimized title tag (under 60 chars, keyword near front)
2. A meta description (under 155 chars, includes keyword, ends with CTA)
3. A recommended H1 (different from title tag but includes keyword)
4. An H2/H3 outline for the full page (at least 8 sections)
5. 5 internal linking anchor text suggestions for this page
6. 5 LSI keywords to naturally include in the content
7. One image alt text example for the hero image

Target audience: [describe your reader]
Business context: [what you sell or offer]
```

### Common Mistakes
- Title tag = H1 = URL slug (all identical) — lazy, missed opportunity
- Meta descriptions over 160 chars (truncated, wasted CTR)
- Multiple H1s on one page
- Keyword stuffing in H tags: "Best SEO Services | SEO Company | SEO Agency NYC"
- Orphan pages with no internal links
- Alt text on every image is "SEO" or left blank on informational images
- Writing 500 words when SERP shows page 1 averages 2,400 words

### Section Checklist
- [ ] Title tag: primary keyword in first 3 words, 50–60 chars
- [ ] Meta description: unique, 150–155 chars, includes keyword + CTA
- [ ] URL: short, hyphenated, keyword-included, no dynamic parameters
- [ ] H1: one per page, includes primary keyword
- [ ] Primary keyword in first 100 words of body text
- [ ] At least 3 internal links TO this page from other pages
- [ ] All images have descriptive alt text
- [ ] Content length matches or exceeds SERP competitors

---

