/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  
  if (typeof thali !== "object" || thali === null || Array.isArray(thali)) {
    return "";
  }
  if (typeof thali.name !== "string" || !Array.isArray(thali.items) || typeof thali.price !== "number" || typeof thali.isVeg !== "boolean") {
    return "";
  }

  let capitalletter = thali.name.toUpperCase();
  let finalprice = thali.price.toFixed(2);

  let finalveg = thali.isVeg ? "Veg" : "Non-Veg";

  let finalcommas = thali.items.join(", ");

  return `${capitalletter} (${finalveg}) - Items: ${finalcommas} - Rs.${finalprice}`;
}


export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) {
    return null;
  }

  function checkveg(thali) {
    return thali.isVeg === true;
  }

  function checknonveg(thali) {
    return thali.isVeg === false;
  }

  function checkfinalprice(total, thali) {
    return total + thali.price;
  }

  function getPrice(thali) {
    return thali.price;
  }

  function getName(thali) {
    return thali.name;
  }

  let finalveg = thalis.filter(checkveg).length;
  let finalnonveg = thalis.filter(checknonveg).length;
  let totalPrice = thalis.reduce(checkfinalprice, 0);
  let finalavgPrice = (totalPrice / thalis.length).toFixed(2);
  let finalprice = thalis.map(getPrice);
  let minnumber = Math.min(...finalprice);
  let maxnumber = Math.max(...finalprice);
  let names = thalis.map(getName);

  return {
  totalThalis: thalis.length,
  vegCount: finalveg,
  nonVegCount: finalnonveg,
  avgPrice: finalavgPrice,
  cheapest: minnumber,
  costliest: maxnumber,
  names: names
};

}

export function searchThaliMenu(thalis, query) {
  if(!Array.isArray(thalis) || typeof query !== "string"){
    return [];
  }
  
  const lowerQuery = query.toLowerCase();
  
  function matchquery(thali){
    if(thali.name.toLowerCase().includes(lowerQuery)){
      return true;
    }
    
    for(let item of thali.items){
      if (item.toLowerCase().includes(lowerQuery)) {
        return true;
      }
    }
    return false;
  }
  
  return thalis.filter(matchquery);
}

export function generateThaliReceipt(customerName, thalis) {
   if(typeof customerName !== "string" || !Array.isArray(thalis) || thalis.length === 0){
    return "";
  }
  const upperName = customerName.toUpperCase();

  function formatLineItem(thali){
    return `- ${thali.name} x Rs.${thali.price}`;
  }
  
  const lineItems = thalis.map(formatLineItem).join("\n");

  function sumPrices(total, thali){
    return total + thali.price;
  }
  
  const totalPrice = thalis.reduce(sumPrices, 0);

  return `THALI RECEIPT\n---\nCustomer: ${upperName}\n${lineItems}\n---\nTotal: Rs.${totalPrice}\nItems: ${thalis.length}`;
}
