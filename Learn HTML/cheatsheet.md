# HTML Cheat Sheet

This cheat sheet is organized in a simple way:
1. What it is
2. Why it is used
3. Syntax
4. Example

## 1. HTML Basic Structure

| Item | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document | Ensures correct page rendering | `<!DOCTYPE html>` | `<!DOCTYPE html>` |
| `<html>` | Root element of the page | Wraps the whole document | `<html>...</html>` | `<html lang="en">...</html>` |
| `<head>` | Contains page information | Holds title, meta tags, and links | `<head>...</head>` | `<head><title>My Page</title></head>` |
| `<body>` | Contains visible page content | Shows text, images, links, and forms | `<body>...</body>` | `<body><h1>Hello</h1></body>` |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

## 2. Text and Headings

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<h1>` to `<h6>` | Headings | To show titles and section names | `<h1>Text</h1>` | `<h2>Sub Heading</h2>` |
| `<p>` | Paragraph | To write normal text | `<p>Text</p>` | `<p>This is a paragraph.</p>` |
| `<br>` | Line break | To break the line | `<br>` | `First line<br>Second line` |
| `<hr>` | Horizontal rule | To create a divider | `<hr>` | `<hr>` |

```html
<h1>Main Title</h1>
<h2>Sub Title</h2>
<p>This is a paragraph.</p>
<br />
<hr />
```

## 3. Text Formatting

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<b>` | Bold text | To make text bold | `<b>Text</b>` | `<b>Important</b>` |
| `<strong>` | Important text | For strong emphasis | `<strong>Text</strong>` | `<strong>Warning</strong>` |
| `<i>` | Italic text | To make text slanted | `<i>Text</i>` | `<i>Example</i>` |
| `<em>` | Emphasized text | For emphasis | `<em>Text</em>` | `<em>Focus</em>` |
| `<mark>` | Highlighted text | To mark important content | `<mark>Text</mark>` | `<mark>Done</mark>` |

```html
<b>Bold</b>
<strong>Important</strong>
<i>Italic</i>
<em>Emphasized</em>
<mark>Highlighted</mark>
```

## 4. Links and Images

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<a>` | Link | To move to another page or website | `<a href="url">Text</a>` | `<a href="https://example.com">Visit</a>` |
| `<img>` | Image | To show pictures on the page | `<img src="path" alt="text" />` | `<img src="image.jpg" alt="My image" />` |

```html
<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="My image" width="300" height="200" />
```

## 5. Lists

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<ul>` | Unordered list | For bullet points | `<ul>...</ul>` | `<ul><li>One</li></ul>` |
| `<ol>` | Ordered list | For numbered steps | `<ol>...</ol>` | `<ol><li>First</li></ol>` |
| `<li>` | List item | Each item inside a list | `<li>Text</li>` | `<li>Milk</li>` |

```html
<ul>
  <li>Milk</li>
  <li>Tea</li>
  <li>Coffee</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>
```

## 6. Tables

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<table>` | Table container | To display data in rows and columns | `<table>...</table>` | `<table>...</table>` |
| `<tr>` | Table row | To create a row | `<tr>...</tr>` | `<tr><td>Ali</td></tr>` |
| `<th>` | Table header | To define column names | `<th>Text</th>` | `<th>Name</th>` |
| `<td>` | Table data cell | To store cell values | `<td>Text</td>` | `<td>20</td>` |

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>
</table>
```

## 7. Forms

| Element | What it is | Why it is used | Syntax | Example |
| --- | --- | --- | --- | --- |
| `<form>` | Form container | To collect user input | `<form>...</form>` | `<form>...</form>` |
| `<input>` | Input field | To type text or choose options | `<input type="text" />` | `<input type="email" />` |
| `<label>` | Label for input | To describe the input | `<label for="id">Text</label>` | `<label for="name">Name</label>` |
| `<button>` | Button | To submit or trigger action | `<button type="submit">Text</button>` | `<button>Send</button>` |

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <button type="submit">Submit</button>
</form>
```

## 8. Common Attributes

| Attribute | What it is | Why it is used | Example |
| --- | --- | --- | --- |
| `id` | Unique identifier | To target one specific element | `id="main"` |
| `class` | Group name | To style multiple elements | `class="box"` |
| `src` | Source path | For images or media files | `src="image.jpg"` |
| `href` | Link target | For links | `href="page.html"` |
| `alt` | Alternative text | For image description | `alt="My image"` |
| `target` | Open behavior | To open a link in a new tab | `target="_blank"` |

## 9. Semantic Tags

| Tag | What it is | Why it is used |
| --- | --- | --- |
| `<header>` | Page header | For the top section |
| `<nav>` | Navigation | For menu links |
| `<main>` | Main content | For the main part of the page |
| `<section>` | Section | To group related content |
| `<article>` | Article | For stand-alone content |
| `<aside>` | Sidebar | For extra information |
| `<footer>` | Footer | For bottom information |

```html
<header>Site Header</header>
<nav>Navigation</nav>
<main>Main Content</main>
<footer>Footer</footer>
```

## 10. Quick Notes
- HTML is used to structure a webpage.
- CSS is used for design.
- JavaScript is used for interaction.
- Tags usually come in pairs.
- Some tags are self-closing, like `<img>` and `<br>`.
