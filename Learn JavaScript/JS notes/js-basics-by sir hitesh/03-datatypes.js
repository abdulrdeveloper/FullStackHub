const weaponName = "Flame Sword";
console.log("Weapon: ", weaponName, "| type: ", typeof weaponName);

const attackPower = 75;
const attackUpgrade = 1.5;

console.log(typeof attackPower);
console.log(typeof attackUpgrade);

const isLoggedIn = true;
let bonusEffect;

let curseStatus = null;
let weatherApiResponse = null;
console.log(typeof weatherApiResponse);

const uniqueRuneId = Symbol("rune_of_fire");
const uniqueRuneId2 = Symbol("rune_of_fire");
console.log(
  "Rune: ",
  uniqueRuneId.toString(),
  "| type of: ",
  typeof uniqueRuneId,
);

const heroStats = {
  name: "Deepak",
  level: 12,
  class: "Ranger",
};

console.log("Hero: ", heroStats, " | type: ", typeof heroStats);

const inventory = ["Flame Sword", "Health Potion", "Shield"];
console.log("Inventory: ", inventory, " | type: ", typeof inventory);

function castSpell() {
  return "Fireball";
}
console.log("Spell Type ", typeof castSpell);

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;

console.log("Original HP: ", originalHP);
console.log("Cloned HP: ", cloneHP);

const originalSword = {
  name: "Flame Sword",
  damage: 75,
  typeofW: "Fire",
};

const cloneSword = originalSword;

cloneSword.damage = 100;

console.log("Original Sword: ", originalSword.damage);

const armorOriginal = {
  name: "Iron Plate",
  defence: 80,
  buff: {
    fire: 10,
  },
};

const armorCopy = { ...armorOriginal };
armorCopy.buff.fire = 90;

const potionOriginal = { name: "Health", effects: { heal: 40, mana: 30 } }
const potionCopy = structuredClone(potionOriginal)

typeof null === "object"
Array.isArray()