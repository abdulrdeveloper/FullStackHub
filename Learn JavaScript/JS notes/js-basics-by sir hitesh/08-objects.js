const hero = {
  name: "Luna the Brave",
  class: "Mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};

hero.weapon = "Fire";

delete hero.level;

const ranger = {
  name: "Lakshya the swift",
  agility: 80,
  stealth: undefined,
};

console.log("name" in ranger);
console.log("stealth" in ranger);
console.log("toString" in ranger);

console.log(ranger.hasOwnProperty("toString"));
