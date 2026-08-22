/**
 * 🖌️ Mehndi Canvas - style Property Manipulation
 *
 * Digital mehndi design tool bana rahe hain! Haath pe patterns draw
 * karenge using CSS styles. element.style se inline styles lagao -
 * background color, size, border, opacity, transform sab kuch.
 * Jaise mehndi artist ek ek line khenchta hai, waise hi tum ek ek
 * style property set karoge.
 *
 * Functions:
 *
 *   1. applyBaseStyle(element, color, size)
 *      - Sets element.style properties:
 *        backgroundColor = color
 *        width = size + "px"
 *        height = size + "px"
 *        borderRadius = "50%"
 *      - Returns the element
 *      - Agar element null/undefined, return null
 *
 *   2. setPatternStyle(element, styles)
 *      - Takes an object of CSS style properties
 *        e.g., { border: "2px solid brown", opacity: "0.8", transform: "rotate(45deg)" }
 *      - Applies each property to element.style
 *      - Returns count of properties applied
 *      - Agar element null/undefined, return -1
 *      - Agar styles not object or null, return 0
 *
 *   3. getComputedStyles(element, properties)
 *      - Takes an array of style property names
 *        e.g., ["backgroundColor", "width", "opacity"]
 *      - Returns object with those properties and their current values
 *        from element.style
 *        e.g., { backgroundColor: "brown", width: "100px", opacity: "0.8" }
 *      - Agar element null/undefined, return null
 *      - Agar properties not array, return null
 *
 *   4. toggleVisibility(element)
 *      - If element.style.display is "none", set it to ""
 *      - Else set element.style.display to "none"
 *      - Returns the new display value ("none" or "")
 *      - Agar element null/undefined, return null
 *
 *   5. animateElement(element, frames)
 *      - Takes array of style objects (animation frames)
 *        e.g., [{ opacity: "0" }, { opacity: "0.5" }, { opacity: "1" }]
 *      - Simplified version: just applies the LAST frame's styles to element
 *      - Returns total number of frames
 *      - Agar element null/undefined, return -1
 *      - Agar frames not array or empty, return -1
 *
 * Hint: element.style.propertyName = "value" se inline style lagao.
 *   Camel case use karo (backgroundColor, not background-color).
 *
 * @example
 *   const el = document.createElement("div");
 *
 *   applyBaseStyle(el, "brown", 100);
 *   // => el (with backgroundColor: "brown", width: "100px",
 *   //    height: "100px", borderRadius: "50%")
 *
 *   setPatternStyle(el, { border: "2px solid gold", opacity: "0.9" });
 *   // => 2 (two properties applied)
 *
 *   getComputedStyles(el, ["backgroundColor", "opacity"]);
 *   // => { backgroundColor: "brown", opacity: "0.9" }
 *
 *   toggleVisibility(el);
 *   // => "none" (element hidden)
 *
 *   animateElement(el, [{ opacity: "0" }, { opacity: "1" }]);
 *   // => 2 (last frame applied: opacity is now "1")
 */
export function applyBaseStyle(element, color, size) {
  // Your code here
}

export function setPatternStyle(element, styles) {
  // Your code here
}

export function getComputedStyles(element, properties) {
  // Your code here
}

export function toggleVisibility(element) {
  // Your code here
}

export function animateElement(element, frames) {
  // Your code here
}
