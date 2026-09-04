## 8. AI + SEO Workflows

### 8.1 Keyword Research with AI

**What AI can do:**
- Expand a seed keyword into hundreds of variations
- Group keywords by intent
- Generate questions your audience asks
- Suggest keyword clusters
- Identify content gaps

**What AI cannot do:**
- Give accurate search volume data (it hallucinates numbers — verify with Ahrefs/Semrush)
- Access real-time SERP data
- Know what keywords competitors are ranking for

**Workflow:**

Step 1 — Generate seed list:
```
Give me 50 keyword ideas for a B2B SaaS company that sells project management 
software to marketing agencies. Include head terms, long-tail variations, and 
question-based keywords. Group by topic cluster. Do not make up volume data.
```

Step 2 — Validate in Ahrefs/Semrush → export volume + KD

Step 3 — Map to content:
```
I have these 30 keywords [paste list]. Group them into 5 content clusters. 
For each cluster: identify the pillar keyword, 5 supporting keywords, 
recommended content type (blog/tool/landing page), and search intent 
(informational/commercial/transactional).
```

---

### 8.2 Meta Tag Writing with AI

**Workflow:**

```
You are an SEO copywriter. Write optimized meta tags for the following page:

Page topic: [describe page]
Primary keyword: [keyword]
Secondary keywords: [2–3 keywords]
Target audience: [describe]
Content summary: [2–3 sentences about what's on the page]

Deliverables:
1. Title tag (max 60 characters, keyword in first 3 words, compelling)
2. Meta description (max 155 characters, includes primary keyword, ends with CTA)
3. H1 tag (max 70 characters, different from title but includes keyword)
4. Open Graph title (for social sharing, can be slightly longer/clickbait-friendly)
5. Open Graph description (1–2 sentences, social-friendly)

Give 3 variations of each. Bold your recommended choice.
```

---

### 8.3 Content Generation with AI

**What actually works:**
- AI for research, outlines, and first drafts
- Human for: real examples, personal experience, opinion, data points, fact-checking
- AI for: editing, restructuring, adding LSI terms, generating FAQs, meta tags

**Anti-patterns:**
- Publishing raw AI output without editing — Google's Helpful Content System detects and devalues it
- AI-generated statistics without verification — models fabricate data
- 5,000-word AI articles with no original thought — thin content that happens to be long

**Solid content generation workflow:**

```
Step 1 — Research prompt:
Summarize everything a reader should know about [topic] to write a comprehensive 
guide. Include: key concepts, common misconceptions, current best practices 
(caveat: your training data may be outdated), and the top 10 questions 
people ask about this topic. Do not add fluff or motivational language.

Step 2 — Outline prompt:
Create a detailed outline for an article targeting the keyword "[keyword]". 
The reader is [describe audience]. The article should match this search intent: 
[informational/commercial/transactional]. 
Include: H1, H2s, H3s, key points under each section, recommended word count 
per section, and where to add examples, data, and CTAs.

Step 3 — Section drafting:
Write section [H2 title] for my article about [topic]. 
Use simple, direct language. No fluff. Include:
- A concrete real-world example
- One practical tip the reader can apply today
- One common mistake to avoid
Target: [word count] words.

Step 4 — Enhancement:
Here is a section I've drafted: [paste content]
Enhance it by:
1. Adding 3 LSI keywords naturally from this list: [paste LSI terms]
2. Improving the first sentence to be more hook-worthy
3. Adding a transition sentence to the next section: [next section title]
4. Suggesting one place to add a data table or visual
```

---

### 8.4 Technical Audit with AI

```
Act as a technical SEO auditor. I'll paste the HTML source of my homepage. 
Analyze it and identify ALL technical SEO issues.

For each issue, provide:
- The exact problem (quote the relevant HTML)
- Why it matters for SEO
- The exact fix with corrected code
- Priority: Critical / High / Medium / Low

Categories to check:
- Title tag and meta tags (present, length, keywords)
- Canonical tag (present, correct URL, HTTPS)
- Robots meta tag (unintentional noindex?)
- Structured data (present? valid?)
- Open Graph tags (present?)
- Heading hierarchy (H1 present? multiple H1s? proper nesting?)
- Image alt attributes (missing? keyword stuffed?)
- Internal links (descriptive anchors? broken hrefs?)
- Page speed signals (render-blocking scripts? unoptimized images?)
- Mobile viewport tag

[Paste HTML source here]
```

---

### 8.5 Schema Markup Generation with AI

```
Generate complete, valid JSON-LD schema markup for the following:

Schema type needed: [FAQ / Article / Product / LocalBusiness / HowTo / Review]

Details:
[Paste all relevant information — for FAQ: questions and answers; 
for Product: name, price, availability, reviews; etc.]

Requirements:
- Use schema.org vocabulary
- Include all recommended properties for this schema type
- Format as valid JSON (no trailing commas, proper escaping)
- Add a comment above each property explaining what it does
- Wrap in <script type="application/ld+json"> tags

Validate using: https://search.google.com/test/rich-results
```

---

### 8.6 AI Tools Comparison for SEO

| Tool | Best SEO Use Case | Limitation |
|---|---|---|
| Claude (Anthropic) | Long-form content, technical analysis, structured outputs, schema generation | No real-time SERP data |
| ChatGPT (OpenAI) | Brainstorming, first drafts, plugin/GPT integrations | Inconsistent fact accuracy |
| Gemini (Google) | GSC/GA4 data analysis via integration, Google product context, Workspace workflows | Conservative outputs; weaker for creative copy |
| Perplexity AI | Research with citations, current event SEO, competitor monitoring | Shorter outputs, not for content generation at scale |
| Surfer SEO AI | NLP-optimized content with real keyword data | Expensive, limited outside content workflow |
| Frase.io | AI brief creation using real SERP data | Less powerful AI model |
| Jasper | Team content workflows at scale | Generic output quality |
| Alli AI | Technical SEO automation at scale | Expensive for small sites |

**AI prompt for this workflow section:**
```
You are an SEO automation consultant. I want to build an AI-assisted 
SEO workflow for my team of [size] producing [X articles/month].

Design a complete workflow covering:
1. Keyword research → content brief creation (AI + tool steps)
2. Content writing (AI + human collaboration model)
3. On-page optimization checklist (AI-assisted)
4. Internal linking strategy (how to automate suggestions)
5. Meta tag generation at scale
6. Monthly content audit (what to update vs. delete vs. consolidate)

For each step: list the tools, prompts, and human review checkpoints.
```

### Common Mistakes
- Using AI volume estimates as real data — always validate with actual tools
- Over-relying on AI for E-E-A-T signals — AI has no real experience
- Publishing first-draft AI content — treat it as a starting point, not a final product
- Using the same prompt for every article — content sounds identical, Google detects patterns
- Not version-controlling prompts — when something works, save it

### Section Checklist
- [ ] Keyword research: AI-generated lists validated against Ahrefs/Semrush
- [ ] Content brief created with AI before writing begins
- [ ] All AI drafts reviewed, fact-checked, and enhanced with original examples
- [ ] Meta tags generated via AI prompt, length verified manually
- [ ] Schema generated by AI, validated via Rich Results Test
- [ ] Prompt library maintained for repeatable workflows

---

