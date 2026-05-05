// JS Specs say
// Object keys ==> string, symbol....

// A symbol is a “primitive unique value” with an optional description.
let baby = Symbol("mai ka ladle");

// Symbols are always unique, even the description is same
let yntp = Symbol("ak");
let rehman = Symbol("ak");
// console.log(Symbol("ak") === Symbol("ak")); //false


// Use Case 
// Hidden Properties, skipped by for..in loop

// Global Symbol 
// they exists in global symbol registry.
// we can access it by "key"

let org = Symbol.for("ChaiCode");

let company = Symbol.for("ChaiCode");

console.log(org === company); // true;

// console.log(Symbol.keyFor(org));

// System Symbols    <-- less use
// Symbol.iterator   <-- less use
// Symbol.toPrimive  <-- object to permitive

// Technically, symbols are not 100% hidden. 
// There is a built-in method Object.getOwnPropertySymbols(obj)