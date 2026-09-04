/**
 * 🥛 Punjab ki Famous Lassi Stand Chain - Constructor Functions & Prototype
 *
 * Punjab ki mashoor lassi stand chain hai jahan har stand pe fresh lassi milti
 * hai. Tumhe constructor function se lassi stands banana hai aur prototype pe
 * methods add karne hain. `new` keyword se har stand ek naya instance banega
 * aur prototype methods sab instances share karenge.
 *
 * Constructor: LassiStand(name, city)
 *   Called with `new` keyword. Sets up:
 *   - this.name = name
 *   - this.city = city
 *   - this.menu = [] (empty array, flavors will be added)
 *   - this.orders = [] (empty array)
 *   - this._nextOrderId = 1 (internal counter for auto-increment)
 *
 * Prototype Methods (add on LassiStand.prototype):
 *
 *   addFlavor(flavor, price)
 *     - Pushes { flavor, price } to this.menu
 *     - No duplicates allowed: agar flavor already exists (same name), return -1
 *     - Price must be > 0, otherwise return -1
 *     - Returns menu length after adding
 *
 *   takeOrder(customerName, flavor, quantity)
 *     - Validates ki flavor this.menu mein exists hai
 *     - Quantity must be > 0
 *     - Creates order object:
 *       { id: auto-increment (starting 1), customer: customerName,
 *         flavor, quantity, total: price * quantity, status: "pending" }
 *     - Pushes to this.orders
 *     - Returns order id
 *     - Agar flavor invalid ya quantity <= 0: return -1
 *
 *   completeOrder(orderId)
 *     - Finds order by id, sets status to "completed"
 *     - Returns true if found and updated
 *     - Returns false if not found or already completed
 *
 *   getRevenue()
 *     - Returns sum of totals for orders with status "completed" only
 *     - Pending orders count nahi honge
 *
 *   getMenu()
 *     - Returns a COPY of the menu array (not the original reference)
 *     - Modifying returned array should not affect internal menu
 *
 * Function: isLassiStand(obj)
 *   - Returns true if obj is an instance of LassiStand (use instanceof)
 *   - Returns false otherwise
 *
 * Rules:
 *   - LassiStand must be a constructor function (not a class)
 *   - Methods must be on prototype, NOT inside constructor
 *   - No duplicate flavors in menu (check by flavor name string)
 *   - Order ids auto-increment starting from 1
 *   - getMenu returns a copy, not the original array
 *
 * @param {string} name - Lassi stand ka naam
 * @param {string} city - City jahan stand hai
 *
 * @example
 *   const stand = new LassiStand("Sardar ji", "Amritsar");
 *   stand.addFlavor("mango", 40);          // => 1
 *   stand.addFlavor("rose", 35);           // => 2
 *   stand.addFlavor("mango", 45);          // => -1 (duplicate)
 *   stand.takeOrder("Rahul", "mango", 2);  // => 1
 *   stand.takeOrder("Priya", "rose", 1);   // => 2
 *   stand.completeOrder(1);                 // => true
 *   stand.getRevenue();                     // => 80
 *   isLassiStand(stand);                    // => true
 *   isLassiStand({});                       // => false
 */
export function LassiStand(name, city) {
  // Your code here
}

// Add prototype methods here:
// LassiStand.prototype.addFlavor = function(flavor, price) { ... }
// LassiStand.prototype.takeOrder = function(customerName, flavor, quantity) { ... }
// LassiStand.prototype.completeOrder = function(orderId) { ... }
// LassiStand.prototype.getRevenue = function() { ... }
// LassiStand.prototype.getMenu = function() { ... }

export function isLassiStand(obj) {
  // Your code here
}
