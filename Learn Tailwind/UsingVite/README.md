# Tailwind CSS Cheat Sheet (CSS to Tailwind)

Here is a comprehensive list of standard CSS properties and their exact equivalent in Tailwind CSS.

## 1. Typography (Text & Fonts)

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `color: red;` | `text-red-500` | Text color |
| `font-size: 16px;` | `text-base` | Font size (xs, sm, base, lg, xl, 2xl...) |
| `font-weight: 700;` | `font-bold` | Font weight (light, normal, semibold, bold...) |
| `text-align: center;` | `text-center` | Text alignment (left, center, right, justify) |
| `text-decoration: underline;`| `underline` | Underline text (also: `line-through`, `no-underline`) |
| `text-transform: uppercase;`| `uppercase` | Uppercase text (also: `lowercase`, `capitalize`) |

## 2. Backgrounds & Colors

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `background-color: blue;` | `bg-blue-500` | Background color |
| `background-image: linear-gradient(...);`| `bg-gradient-to-r from-red-500 to-blue-500` | Gradient backgrounds |
| `opacity: 0.5;` | `opacity-50` | Element opacity (0, 25, 50, 75, 100) |

## 3. Spacing (Margin & Padding)

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `margin: 1rem;` | `m-4` | Margin on all sides |
| `margin-top: 1rem;` | `mt-4` | Margin top (mb: bottom, ml: left, mr: right) |
| `margin-left: auto; margin-right: auto;`| `mx-auto` | Center element horizontally |
| `padding: 1rem;` | `p-4` | Padding on all sides |
| `padding-left: 1rem; padding-right: 1rem;`| `px-4` | Padding horizontal (py-4 for vertical) |

## 4. Sizing (Width & Height)

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `width: 100%;` | `w-full` | Full width |
| `width: 100vw;` | `w-screen` | Screen width |
| `height: 100vh;` | `h-screen` | Screen height |
| `max-width: 28rem;` | `max-w-md` | Maximum width (sm, md, lg, xl...) |

## 5. Layout (Flexbox & Grid)

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `display: flex;` | `flex` | Flexbox container |
| `flex-direction: column;` | `flex-col` | Flex direction column (default is row) |
| `justify-content: center;` | `justify-center` | Align items horizontally in flex |
| `align-items: center;` | `items-center` | Align items vertically in flex |
| `gap: 1rem;` | `gap-4` | Gap between flex/grid items |
| `display: grid;` | `grid` | Grid container |
| `grid-template-columns: repeat(3, minmax(0, 1fr));`| `grid-cols-3` | 3 equal columns layout |

## 6. Borders & Rounded Corners

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `border: 1px solid currentColor;`| `border` | Standard 1px border |
| `border-width: 2px;` | `border-2` | Border thickness |
| `border-color: #ef4444;` | `border-red-500` | Border color |
| `border-radius: 0.5rem;` | `rounded-lg` | Border radius (sm, md, lg, full) |
| `border-radius: 9999px;` | `rounded-full` | Perfectly round (for circles/pills) |

## 7. Effects & Shadows

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `box-shadow: 0 10px 15px...;`| `shadow-lg` | Box shadow (sm, md, lg, xl, 2xl) |
| `filter: blur(4px);` | `blur-sm` | Blur effect |

## 8. Transitions, Transforms & Interactivity

| CSS | Tailwind CSS | Description |
| :--- | :--- | :--- |
| `transition-property: all;` | `transition-all` | Enable transitions |
| `transition-duration: 300ms;`| `duration-300` | Transition timing (75, 100, 200, 300, 500, 1000) |
| `transform: scale(1.1);` | `scale-110` | Scale element size by 10% |
| `:hover { color: white; }` | `hover:text-white` | Pseudo-classes (hover, focus, active, disabled) |

## 9. Responsive Design

In Tailwind, you use prefixes to apply styles at specific screen sizes (Mobile-first approach):

*   **Mobile (default):** e.g., `text-base`
*   **Tablet (`sm:` & `md:`):** e.g., `md:text-lg` (apply on screens > 768px)
*   **Desktop (`lg:` & `xl:`):** e.g., `lg:flex-row` (apply on screens > 1024px)
