/**
 * 💒 Shaadi RSVP Manager - Callback Functions
 *
 * Big fat Indian wedding ki planning chal rahi hai! Guest list manage
 * karna hai using callback functions. Callback matlab ek function jo
 * doosre function ko argument ke roop mein diya jaata hai.
 *
 * Functions:
 *
 *   1. processGuests(guests, filterFn)
 *      - guests: array of guest objects
 *      - filterFn: callback function that takes a guest, returns true/false
 *      - Returns: array of guests for which filterFn returned true
 *      - Agar guests not array or filterFn not function, return []
 *
 *   2. notifyGuests(guests, notifyCallback)
 *      - Calls notifyCallback(guest) for EACH guest in array
 *      - Collects return values from each callback call
 *      - Returns: array of callback results
 *      - Agar guests not array or notifyCallback not function, return []
 *
 *   3. handleRSVP(guest, onAccept, onDecline)
 *      - If guest.rsvp === "yes", call onAccept(guest) and return its result
 *      - If guest.rsvp === "no", call onDecline(guest) and return its result
 *      - If guest.rsvp is anything else, return null
 *      - Agar guest null/undefined or callbacks not functions, return null
 *
 *   4. transformGuestList(guests, ...transformFns)
 *      - Takes guest array and any number of transform functions
 *      - Each transformFn takes an array and returns a new array
 *      - Apply transforms LEFT to RIGHT (first fn first)
 *      - Return the final transformed array
 *      - Agar guests not array, return []
 *
 * Hint: Callbacks are just functions passed as arguments to other functions.
 *   The receiving function decides WHEN to call them.
 *
 * @example
 *   processGuests(
 *     [{ name: "Rahul", side: "bride" }, { name: "Priya", side: "groom" }],
 *     guest => guest.side === "bride"
 *   )
 *   // => [{ name: "Rahul", side: "bride" }]
 *
 *   handleRSVP({ name: "Amit", rsvp: "yes" }, g => `${g.name} is coming!`, g => `${g.name} declined`)
 *   // => "Amit is coming!"
 */
export function processGuests(guests, filterFn) {
  if (!Array.isArray(guests) || typeof filterFn !== "function") return [];
  return guests.filter(guest => filterFn(guest)); // call function that takes a guest 
}

export function notifyGuests(guests, notifyCallback) {
  if (!Array.isArray(guests) || typeof notifyCallback !== "function") return [];
  return guests.map(guest => notifyCallback(guest));  // yaha per saath hi ham bol rhay hain ke har guest ko notifyCallback mai push krtay jao
}

export function handleRSVP(guest, onAccept, onDecline) {
  if (typeof guest === "undefined" || guest === null || typeof onAccept !== "function" || typeof onDecline !== "function") return null;
  if (guest.rsvp === "yes") {
    let call = onAccept(guest);
    return call;
  }
  else if (guest.rsvp === "no") {
    let call = onDecline(guest);
    return call;
  }
  else {
    return null;
  }
}

export function transformGuestList(guests, ...transformFns) {
  if(!Array.isArray(guests)) return [];
  return transformFns.reduce((oldNumberOfFunction,currentNumberOfFunction) => currentNumberOfFunction(oldNumberOfFunction) ,guests) // yaha per hamne 2 parameters add kiay and current function ko old function per chla dia iss trha se final guests wali array mai store hota jaiy ga
}
