# Topic 8: HTTP Status Codes & Submitting Sitemaps

## 1. Important HTTP Status Codes (Responses & Errors)
HTTP status codes are messages a server sends to the browser indicating the status of the request. These are crucial for SEO.

* **200 OK:** The request was successful. This is the ideal status for all functioning web pages.
* **301 Moved Permanently:** The URL has been permanently moved to a new location. This is excellent for SEO because it passes most of the "link equity" (ranking power) to the new page.
* **302 Found (Moved Temporarily):** The server is currently responding from a different link, but the original link should be kept for future use. It does *not* pass full SEO value.
* **303 See Other:** Similar to a 302, it redirects the user to a different page. Often used to prevent form re-submission when a user refreshes a page. 
* **404 Not Found:** The requested page could not be found. Too many 404 errors can harm user experience. It's best to redirect deleted pages (using 301) or create a custom, user-friendly 404 page.

## 2. Connecting Your Site to Google Search Console (GSC)
To monitor your site's SEO performance and submit sitemaps, you need to connect your domain to a tool like Google Search Console. 

**Steps to Connect:**
1. Go to **Google Search Console**.
2. Click **Add Property**.
3. You will see two options: **Domain** (requires DNS verification) and **URL Prefix** (easier, allows HTML tag/file verification).
4. **Verification:** Choose a method to prove you own the site. The most common methods are:
   * **HTML Tag:** Adding a meta tag to the `<head>` of your website's homepage.
   * **DNS Record:** Adding a TXT record to your domain provider (like GoDaddy, Namecheap).
5. Once verified, Google will start collecting data about your site's search traffic.

## 3. What is a Sitemap & How to Submit It?
A **XML Sitemap** is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines read this file to efficiently crawl your site.

**How to Submit a Sitemap in GSC:**
1. Once your site is verified in Google Search Console, go to the dashboard.
2. In the left-hand menu, click on **Sitemaps**.
3. In the "Add a new sitemap" field, enter the URL of your sitemap (usually ending in `/sitemap_index.xml` or `/sitemap.xml`).
4. Click **Submit**.
5. Google will show the status as "Success" once it successfully parses the sitemap. This helps Google index your pages much faster.
