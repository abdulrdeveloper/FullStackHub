/**
 * 🥬 Amma ki Sabzi Mandi Shopping
 *
 * Amma subah subah sabzi mandi gayi hain. Unke paas ek shopping list hai
 * (kaunsi sabzi, kitne kg) aur mandi mein har sabzi ka rate alag hai.
 * Amma smart hain - agar koi sabzi Rs 80/kg se zyada hai, toh nahi leni!
 *
 * Rules (use for...of loop):
 *   - shoppingList is an array of objects: [{ name: "aloo", qty: 2 }, ...]
 *   - priceList is an object: { aloo: 30, tamatar: 40, ... }
 *   - Loop through each item in shoppingList using for...of
 *   - Skip the item if:
 *     (a) sabzi ka naam priceList mein nahi hai (not available in mandi)
 *     (b) price per kg > Rs 80 (too expensive, Amma says "bahut mehenga hai!")
 *   - For valid items, add to bill and build items array
 *
 * @param {Array<{name: string, qty: number}>} shoppingList - Amma ki list
 * @param {Object<string, number>} priceList - Mandi ke rates (per kg)
 * @returns {{ items: Array<{name: string, qty: number, cost: number}>, totalBill: number }}
 *
 * @example
 *   sabziMandiBill(
 *     [{ name: "aloo", qty: 2 }, { name: "shimla mirch", qty: 1 }],
 *     { aloo: 30, tamatar: 40, shimla_mirch: 90 }
 *   )
 *   // shimla mirch not in priceList (key mismatch), shimla_mirch > 80
 *   // => { items: [{ name: "aloo", qty: 2, cost: 60 }], totalBill: 60 }
 *
 *   sabziMandiBill([], { aloo: 30 })
 *   // => { items: [], totalBill: 0 }
 */
export function sabziMandiBill(shoppingList, priceList) {
  let items = [];
  let totalBill = 0;

  for (let item of shoppingList) {
    let sabziname = item.name;
    let quantity = item.qty;
    let priceofitem = priceList[sabziname]; // sabzi ke name se uska price find out kray gay price list mai se
    if (!(sabziname in priceList)) {
      continue; // Is item ko skip karo, next item pe jao
    }

    if (priceofitem > 80) {
      continue; // Is item ko skip karo, next item pe jao
    }

    let totalcost = quantity * priceofitem;
    totalBill = totalBill+totalcost; 
/* 
Yay purana total bill (jo pehle se add ho chuka hai) aur current item ki 
totalcost (qty * priceofitem) ko add karta hai takay final total show karwa sakay. */

    items.push({    // yay sab data items array mai push kr deta he
      name: sabziname,
      qty: quantity,
      cost: totalcost, /* Yahan 'cost' mein totalcost daala hai (na ke sirf priceofitem).
  Kyunki test expect karta hai ke cost mein us sabzi ka TOTAL paisa ho,
  na ke sirf per kg rate. */
    });
  }
  return { items: items, totalBill: totalBill }
}
