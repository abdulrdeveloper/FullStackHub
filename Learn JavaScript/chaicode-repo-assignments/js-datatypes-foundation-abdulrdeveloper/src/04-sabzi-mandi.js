/**
 * 🥬 Sabzi Mandi Shopping Cart - Array Basics
 *
 * Amma sabzi mandi gayi hain. Unka shopping cart (array) hai.
 * Items add karna, remove karna, check karna — sab array basic methods se.
 * Tu Amma ka digital thela bana!
 *
 * Methods to explore: .push(), .pop(), .unshift(), .indexOf(),
 *   .includes(), .length, .concat(), Array.isArray()
 *
 * Functions:
 *
 *   1. addToCart(cart, item)
 *      - .push() se item ko cart ke end mein add karo
 *      - Return: new cart length (push returns this automatically)
 *      - Agar cart Array nahi hai (Array.isArray use karo), return -1
 *      - Agar item empty string hai ya string nahi hai, return cart.length without adding
 *      - Example: addToCart(["tamatar", "pyaaz"], "mirchi") => 3
 *
 *   2. addUrgentItem(cart, item)
 *      - .unshift() se item ko cart ke BEGINNING mein add karo (pehle khareedna hai!)
 *      - Return: updated cart array
 *      - Agar cart not array, return []
 *      - Agar item valid string nahi hai, return cart unchanged
 *      - Example: addUrgentItem(["pyaaz", "mirchi"], "dhaniya") => ["dhaniya", "pyaaz", "mirchi"]
 *
 *   3. removeLastItem(cart)
 *      - .pop() se last sabzi remove karo
 *      - Return: the removed item
 *      - Agar cart not array ya empty hai, return undefined
 *      - Example: removeLastItem(["tamatar", "pyaaz", "mirchi"]) => "mirchi"
 *
 *   4. isInCart(cart, item)
 *      - .includes() se check karo ki item cart mein hai ya nahi
 *      - Agar cart not array, return false
 *      - Example: isInCart(["tamatar", "pyaaz"], "pyaaz") => true
 *      - Example: isInCart(["tamatar", "pyaaz"], "mirchi") => false
 *
 *   5. mergeCarts(cart1, cart2)
 *      - .concat() se do carts ko combine karo
 *      - Return: new merged array
 *      - Agar koi bhi array nahi hai, usse empty array [] maan lo
 *      - Example: mergeCarts(["tamatar"], ["mirchi", "adrak"]) => ["tamatar", "mirchi", "adrak"]
 *
 * @example
 *   addToCart(["tamatar", "pyaaz"], "mirchi")        // => 3
 *   addUrgentItem(["pyaaz"], "dhaniya")              // => ["dhaniya", "pyaaz"]
 *   removeLastItem(["tamatar", "pyaaz", "mirchi"])   // => "mirchi"
 */
export function addToCart(cart, item) {

  if (!Array.isArray(cart)) {
    return -1;
  }

  if (item == "" || typeof item !== "string") {
    return cart.length;
  }
  return cart.push(item);
}

export function addUrgentItem(cart, item) {

  if (!Array.isArray(cart)) {
    return [];
  }
  if (typeof item !== "string" || item == "") {
    return cart;
  }
  cart.unshift(item);
  return cart;
}

export function removeLastItem(cart) {

  if(!Array.isArray(cart) || cart == ""){
    return undefined;
  }
 let container = cart.pop();
 return container;
}

export function isInCart(cart, item) {
  if(!Array.isArray(cart)){
    return false;
  }
  if(cart.includes(item)){
    return true;
  }
  else{
    return false;
  }
}

export function mergeCarts(cart1, cart2) {
  if(!Array.isArray(cart1)){
    cart1= [];
  }
  if(!Array.isArray(cart2)){
    cart2= [];
  }

  let newarray = cart1.concat(cart2);
  return newarray;
}
