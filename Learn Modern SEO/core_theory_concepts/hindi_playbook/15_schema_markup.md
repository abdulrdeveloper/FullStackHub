# Topic 15: Schema Markup & Structured Data (Advanced Technical SEO)

## 1. Schema Markup Kya Hai?
Schema Markup (ya Structured Data) ek khaas tarah ka code (JSON-LD format mein) hota hai jo hum website ke back-end mein daalte hain. Yeh Google ko exact batata hai ke hamara content kis baaray mein hai. 
Simple words mein: Text insano ke padhne ke liye hota hai, aur Schema bots ke padhne ke liye.

## 2. Yeh Zaroori Kyun Hai? (Rich Snippets Ka Jaadu)
Aam taur par Google search mein sirf Title, URL, aur Description aata hai. Lekin kya aapne kabhi search mein yeh dekha hai:
*   ⭐ Kisi product ke neeche **Star Ratings**?
*   🕒 Kisi recipe ke neeche **Cooking Time aur Calories**?
*   ❓ Search result ke andar hi **FAQ (Sawalat)** ke drop-downs?

Inhein **Rich Snippets** kehte hain, aur yeh sirf Schema Markup lagane se aate hain.
*   **Agar nahi lagaya toh:** Aapka search result bohot simple aur boring lagega, aur log aapke mukablay mein un sites par zyada click karenge jahan star ratings ya FAQs nazar aa rahe honge (Low CTR).

## 3. AI Se Schema Code Banana
Manually JSON-LD code likhna mushkil hai aur isme brackets/commas ki galtiyan ho jati hain. AI code likhne mein expert hai aur yeh kaam seconds mein kar deta hai.

### 🤖 Schema Markup Ka AI Prompt
Apne page ke hisaab se ChatGPT ya Claude mein yeh prompt dalein:

```text
Act as an expert Technical SEO Specialist and Web Developer.

I have a webpage about [YAHAN TOPIC LIKHEIN - jaise Recipe, Product Review, ya FAQ page].

Please generate the correct, error-free JSON-LD structured data (Schema Markup) for this page.
Here is the core information you need to include:
- [DETAIL 1: e.g., Rating is 4.8 stars from 150 reviews]
- [DETAIL 2: e.g., Author name is John Doe]
- [DETAIL 3: e.g., Add 3 FAQs: Q1... A1..., Q2... A2..., etc.]

Ensure the JSON-LD is fully compliant with schema.org guidelines and ready to be pasted into the <head> section of my HTML.
```

## 4. Website Mein Kaise Lagayein?
Jab AI aapko code de de:
1.  **WordPress:** "Insert Headers and Footers" ya "RankMath" jaisa free plugin use karein aur code paste kar dein.
2.  **Custom Sites:** Apne HTML file ke `</head>` tag close hone se pehle is code ko paste karein.
3.  **Test Zaroor Karein:** Google ke **Rich Results Test** tool par ja kar apna link ya code daalein taake pata chal jaye ke koi error toh nahi hai.