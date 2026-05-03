const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};

const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);

console.log(keys);
console.log(values);
console.log(entries);

for (const [key, value] of Object.entries(artifact)) {
  console.log(` ${key}: ${value}`);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);
delete displayCase.locked;
displayCase.newProp = "test";
console.log(displayCase);

const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};

Object.seal(catalogEntry);

const secureArtificats = { name: "Ruby Pendant" };

Object.defineProperty(secureArtificats, "catelogId", {
  value: "SEC-999",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(secureArtificats.catelogId);
secureArtificats.catelogId = "HACKED";
console.log(secureArtificats.catelogId);

for (const [key, value] of Object.entries(secureArtificats)) {
  console.log(`${key} : ${value}`);
}

const desc = Object.getOwnPropertyDescriptor(secureArtificats, "name");
console.log(desc);


// loop key points
// 
// 1. for()
// 2. while
// 3. do while
// 4. for...in
// 5. for...of
// 6. map, foreach, filter, reduce