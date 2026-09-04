## 5. Content SEO

### 5.1 E-E-A-T

**What it is:** Experience, Expertise, Authoritativeness, Trustworthiness. Google's framework for evaluating content quality, used by Search Quality Raters.

| Factor | What it means | How to signal it |
|---|---|---|
| Experience | First-hand experience with the topic | Case studies, personal examples, photos, "I tested this" language |
| Expertise | Depth of knowledge | Technical accuracy, author credentials, cited sources |
| Authoritativeness | Industry recognition | Backlinks from authority sites, citations, awards, media mentions |
| Trustworthiness | Overall honesty and safety | HTTPS, privacy policy, clear authorship, accurate information, no hidden agendas |

**Practical E-E-A-T implementation:**
- Add author bio with credentials on all articles
- Link to primary sources (studies, official docs)
- Show real data, not just opinions
- Keep content updated — stale dates hurt E-E-A-T for YMYL topics
- Get featured in industry publications (authoritativeness)
- YMYL topics (health, finance, legal) require the highest E-E-A-T — Google is harshest here

---

### 5.2 Topical Authority

**What it is:** The degree to which Google considers your site an expert on a specific topic based on content depth and breadth.

**Why it matters:** A site that covers every angle of "email marketing" (tools, strategy, automation, metrics, copy, A/B testing, deliverability) ranks higher across all email marketing terms than a site with one good article on the topic.

**How to build it:**
1. Pick a core topic (not too broad — not "marketing"; not too narrow — not "Gmail tabs")
2. Map every subtopic your audience cares about
3. Create content for every subtopic (content cluster model — see 5.3)
4. Interlink all related content
5. Avoid creating content outside your established topics until authority is built

**Topical authority check:**
- Search `site:yourdomain.com [topic]` — how many relevant pages exist?
- Ahrefs → Site Explorer → Organic Keywords → filter by topic — are you ranking across the topic cluster?

---

### 5.3 Content Clusters

**What it is:** A hub-and-spoke model where one pillar page covers a broad topic at a high level, and multiple cluster pages dive deep into subtopics — all interlinked.

**Structure:**
```
PILLAR: "Email Marketing: The Complete Guide"
  ├── CLUSTER: Email Subject Line Best Practices
  ├── CLUSTER: How to Build an Email List from Scratch
  ├── CLUSTER: Email Marketing Automation Workflows
  ├── CLUSTER: Email Marketing KPIs and Metrics
  ├── CLUSTER: Cold Email vs. Warm Email: Key Differences
  └── CLUSTER: Best Email Marketing Tools Compared
```

**Why it works:**
- Pillar page ranks for head keyword; cluster pages rank for long-tail variants
- Internal links distribute authority from the pillar to clusters and back
- Demonstrates topical depth to Google

**Building a cluster:**
1. Start with the pillar page (broad, high KD, accepts lower initial rankings)
2. Publish 6–12 cluster pages targeting related long-tail keywords
3. From each cluster page: link back to pillar + 2–3 other clusters
4. From pillar: link to all clusters

---

### 5.4 Search Intent Matching

**What it is:** Writing content in the format, depth, and angle that Google's algorithm expects for a given keyword.

**The 3 Cs of search intent:**
1. **Content Type** — blog post, video, product page, tool, PDF?
2. **Content Format** — how-to guide, listicle, comparison, tutorial, definition?
3. **Content Angle** — beginner-friendly, expert-level, for specific industry, cheapest/fastest?

**Real example:**
- Keyword: `how to do keyword research`
- SERP shows: how-to blog posts (Content Type), step-by-step guides with numbered lists (Content Format), beginner-friendly with tool recommendations (Content Angle)
- Write: a step-by-step beginner guide with free tool recommendations — not a video, not a listicle of tools, not a deep technical paper

**AI prompt for content SEO:**
```
Act as a content strategist with deep SEO knowledge.

I want to build topical authority around the topic: [your core topic].

1. Create a full content cluster map with:
   - 1 pillar page title and target keyword
   - 15 cluster page titles with target keywords (mix of informational and commercial intent)
   - Internal linking map showing how pages connect

2. For the pillar page "[title]", create a full outline with:
   - H1, H2s, H3s
   - Key points for each section
   - Recommended word count
   - E-E-A-T signals to include
   - 3 competitor URLs to analyze

3. What content gaps exist that competitors likely haven't covered?
```

### Common Mistakes
- Writing thin content and expecting to rank against 3,000-word competitors
- Creating duplicate cluster pages targeting the same keyword (cannibalization)
- Publishing and forgetting — E-E-A-T requires updating content regularly
- Ignoring YMYL requirements — medical or financial content needs expert authorship
- Building content without a cluster strategy (random topics instead of a topical map)
- Using AI-generated content without adding real examples, experience, or data

### Section Checklist
- [ ] Author bio on all articles (name, credentials, social proof)
- [ ] Content updated with current year/data
- [ ] Pillar page created for each core topic
- [ ] 6–12 cluster pages per pillar, all interlinked
- [ ] Every page's format (type, format, angle) matches SERP expectation
- [ ] Primary sources linked (studies, official documentation)
- [ ] No thin content pages (under 800 words for informational queries)

---

