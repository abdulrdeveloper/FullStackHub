/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */
export function createPaanOrder(basePaan, customizations) {
  if(typeof basePaan !== "object" || basePaan === null || Array.isArray (basePaan)){
    return {};
  }
  if(typeof customizations !== "object" || customizations === null || Array.isArray(customizations)){
    return Object.assign({}, basePaan);
  }
  else{
    return Object.assign({}, basePaan, customizations);
  }
}

export function freezeMenu(menu) {
  if(typeof menu !== "object" || menu === null || Array.isArray (menu)){
    return {};
  }
  return Object.freeze(menu);
}

export function updatePrices(menu, increase) {
  if(typeof menu !== "object" || menu === null || typeof increase !== "number"){
    return {};
  }

  let finalarray = Object.entries(menu);  // object ko array mai convert kia

  function increasevalue([key,value]){    // jo converted array hogi usmay 2 input hongay ek key means name and 2oosri value hogi like apple:30;  
    return [key, value + increase]; // key ko same rakha lakin value mai increase krdia jitna bi hoga.
  }   
  let newarray = finalarray.map(increasevalue);    // map se callback kia takay callback bi ho jaiy and return bi mil jaiy
  return Object.fromEntries(newarray);         // again array ko object mai covert krkay return krdia 
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  if(typeof regularMenu !== "object" || regularMenu === null || Array.isArray(regularMenu)){
    regularMenu = {};
  }
   if(typeof specialsMenu !== "object" || specialsMenu === null || Array.isArray(specialsMenu)){
    specialsMenu = {};
  }
  return {...regularMenu,...specialsMenu}; // ... it will copy all and also override double item 
}
