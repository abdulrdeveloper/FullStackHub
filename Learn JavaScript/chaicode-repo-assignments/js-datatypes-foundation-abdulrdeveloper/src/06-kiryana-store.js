/**
 * 🏪 Kiryana Store Bill - Array Transform
 *
 * Gupta ji ki kiryana (grocery) store hai. Monthly hisaab kitaab karna hai —
 * items ka total nikalna, sorting karna, bill format karna.
 * Array transform methods se Gupta ji ki dukaan digital banao!
 *
 * Data format: items = [
 *   { name: "Atta", price: 40, qty: 2 },
 *   { name: "Daal", price: 80, qty: 1 },
 *   ...
 * ]
 *
 * Methods to explore: .map(), .filter(), .reduce(), .sort(), .join()
 *
 * Functions:
 *
 *   1. getItemNames(items)
 *      - .map() se sirf names nikalo
 *      - Agar items array nahi hai, return []
 *      - Example: getItemNames([{name:"Atta",price:40,qty:2}]) => ["Atta"]
 *
 *   2. getAffordableItems(items, maxPrice)
 *      - .filter() se items nikalo jinka price <= maxPrice
 *      - Agar items array nahi hai ya maxPrice number nahi hai, return []
 *      - Example: getAffordableItems([{name:"Atta",price:40},{name:"Ghee",price:500}], 100)
 *                 => [{name:"Atta",price:40}]
 *
 *   3. calculateTotal(items)
 *      - .reduce() se (price * qty) ka sum nikalo
 *      - Agar items array nahi hai ya empty hai, return 0
 *      - Example: calculateTotal([{name:"Atta",price:40,qty:2},{name:"Daal",price:80,qty:1}])
 *                 => 160
 *
 *   4. sortByPrice(items, ascending)
 *      - [...items].sort() se NEW sorted array return karo (original mat badlo!)
 *      - ascending = true => low to high, false => high to low
 *      - Agar items array nahi hai, return []
 *      - Example: sortByPrice([{name:"Ghee",price:500},{name:"Atta",price:40}], true)
 *                 => [{name:"Atta",price:40},{name:"Ghee",price:500}]
 *
 *   5. formatBill(items)
 *      - .map() se har item ko "name x qty = Rs.total" format karo
 *      - Phir .join("\n") se multi-line bill banao
 *      - Agar items array nahi hai ya empty hai, return ""
 *      - Example: formatBill([{name:"Atta",price:40,qty:2}]) => "Atta x 2 = Rs.80"
 *
 * @example
 *   getItemNames([{name:"Atta",...}])         // => ["Atta"]
 *   calculateTotal([{price:40,qty:2},...])    // => 160
 *   formatBill([{name:"Atta",price:40,qty:2}]) // => "Atta x 2 = Rs.80"
 */
export function getItemNames(items) {
  if(!Array.isArray(items)){
    return [];
  }
  function onlynames(item){
    return item.name;  // iska matlab ke jo item aiy gi ose dekhay agar vo ame word ki he to only ose return kray
  }
  return items.map(onlynames);
}

export function getAffordableItems(items, maxPrice) {
  if(!Array.isArray(items) || typeof maxPrice !== "number"){
    return [];
  }
  function checkprice(item){
    return item.price <= maxPrice;
  }
  return items.filter(checkprice);
}

export function calculateTotal(items) {
   if(!Array.isArray(items) || items.length === 0 ){
    return 0;
  }
  function sum(total,item){                 // ek total show krwaiy and ek item ko one by one check and process kray ga
    return total + (item.price*item.qty);     // final total sab calculate kr kay return krday ga and item.price * item.qty input values ko calculate kray ga
  }
  return items.reduce(sum,0);      //parameter call kia and 2nd 0 day dia takay total 0 say start ho and add hota jaiy
}

export function sortByPrice(items, ascending) {
 if(!Array.isArray(items))
  return [];

function getprice(a,b){
  if(ascending === true){   // check kia agar ascending he to 
    return a.price - b.price;     // jo a wala array ka container as a input aiy ga usmay prie dekho and b.price mai bi price dekho and dono ko minus (-) kro jo value aiy gi vo signal hoga ke iss price walay ko pehle rakho uske baad next wali ko rakho ek array mai iss trha se ek tarteeb mai sab aiy ga  | Notes yay result nai deta final yay just a and b values ko dekhta he and jo choti value hoti he ose array mai pehle lga deta he chahay vo a ki ho ya b ki
  }
  else{
    return b.price - a.price;    // agar condition false hoi to yay chlay ga and ise olta llikha he takay ascending true a-b use ho and yay uska olta b-a use ho
  }
}
  return [...items].sort(getprice);
}


export function formatBill(items) {
 if(!Array.isArray(items) || items.length === 0){
  return "";
 }
 function createbill(item){
  const total = item.price * item.qty;
  return (`${item.name} x ${item.qty} = Rs.${total}`);
 }
 return items.map(createbill).join("\n");
}
