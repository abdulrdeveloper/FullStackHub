/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // checked
  if (size !== "small" && size !== "medium" && size !== "large") {
    return -1
  }
  if (type !== "regular" && type !== "latte" && type !== "cappuccino" && type !== "mocha") {
    return -1;
  }
  //base price  
  let total = 0;
  if (size === "small") {
    total = 3;
  }
  if (size === "medium") {
    total = 4;
  }
  if (size === "large") {
    total = 5;
  }
  // types
  if (type === "regular") {
    total += 0.00;
  }
  if (type === "latte") {
    total += 1.00;
  }
  if (type === "cappuccino") {
    total += 1.50;
  }
  if (type === "mocha") {
    total += 2.00;
  }
  // extras added here
  if (extras.whippedCream === true) {
    total += 0.50;
  }

  if (extras.extraShot === true) {
    total += 0.75;
  }
  return Number(total.toFixed(2));

}