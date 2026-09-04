# Topic 8: HTTP Status Codes aur Sitemap Submission

## 1. Zaroori HTTP Status Codes (Responses aur Errors)
Jab koi browser kisi server se page mangta hai, toh server ek 3-digit code return karta hai jise HTTP status code kehte hain. SEO ke liye inko samajhna bohot zaroori hai.

* **200 OK:** Iska matlab hai request successful rahi aur page theek se load ho gaya hai. SEO ke liye yeh best hai.
* **301 Moved Permanently:** Yeh batata hai ki page permanently naye URL par shift ho gaya hai. Agar aap URL change karte hain, toh 301 redirect use karna best hai kyunki yeh purane page ki "SEO value / Link juice" naye page par transfer kar deta hai.
* **302 Found (Moved Temporarily):** Page temporarily kisi aur URL par re-direct kiya gaya hai. Yeh SEO value transfer nahi karta. Isko tabhi use karein jab aap wapas purane URL par aane wale hon.
* **303 See Other:** Yeh 302 jaisa hi hota hai, mostly form submissions ke baad use hota hai taaki agar user page refresh kare toh form dobara submit na ho jaye.
* **404 Not Found:** Iska matlab error hai, yaani jo page aap dhoond rahe hain wo exist nahi karta. Website par zyada 404 errors hona bura hai. Iske liye humesha ek custom 404 page design karein ya 301 redirect lagayein.

## 2. Website ko Domain/Search Engine se Connect Karna
Apni website ki SEO performance dekhne aur control karne ke liye usey **Google Search Console (GSC)** se connect karna padta hai.

**Connect karne ke Steps:**
1. **Google Search Console** par jayein.
2. **Add Property** par click karein.
3. Apna domain ya website ka URL enter karein.
4. **Verification (Malikana Haq Saabit Karna):** Aapko prove karna hoga ki yeh website aapki hai. Iske main tareeqe hain:
   * **HTML Tag:** Ek chota code apni website ke header (`<head>`) section mein paste karna.
   * **DNS Verification:** Apne domain provider (jaise GoDaddy) ke DNS settings mein ek TXT record add karna.
5. Verify hone ke baad, Google aapki website ka data dikhana shuru kar dega.

## 3. Sitemap Kya Hai aur Kaise Submit Karein?
**Sitemap** ek files ki list (XML file) hoti hai jisme aapki website ke sabhi important pages ke links hote hain. Yeh Google ke bots ko guide karta hai ki aapki website mein kya kya hai taaki wo jaldi crawl kar sakein.

**Sitemap Submit karne ka Tareeqa:**
1. Google Search Console open karein.
2. Left menu mein **Sitemaps** ke option par click karein.
3. "Add a new sitemap" ke box mein apni sitemap ka aakhri hissa dalein (jaise `sitemap.xml` ya `sitemap_index.xml`).
4. **Submit** par click karein.
5. Thodi der mein status "Success" ho jayega. Iska matlab hai Google ne aapke sare links dekh liye hain aur ab unhe jaldi index karega.
