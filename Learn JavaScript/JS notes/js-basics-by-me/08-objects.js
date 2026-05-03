const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
};
/*
1. hero[" "] ham iss tra se bi kisi value ko access kr saktay hain yay tab use 
hota he jab value kahi bahir se dynamically aa rahi ho kyo ke yay space sign etc handle kr leta he

2. hero.name  yay tab use krtay hain jab hmay pta ho ke value object mai available he , 
mostly hardcoded mai jab ham khud likhtay hain to ise use krtay hain , clean hay but limited
*/

/* -------------------- add in object ------------------------ */

hero.weapon = "Fire"; // added at the end of the object
console.log(hero);


/* -------------------- Delete from object ------------------------ */

delete hero.weapon // deleted the weapon from objet


/* -------------------- Own proprty check in Array ------------------------ */

const ranger = {
    name: "Lakshya the swift",
    agility: 80,
    stealth: undefined,
};

console.log("name" in ranger);     // true 
console.log("stealth" in ranger);  // true
console.log("toString" in ranger); // true

/* to hamne dekha yay sab true aya jabkay toString to hmaray paas nai he to fir yay kaha se aya . to yay usne 
  object ke prototypes se check kr kay bta dia ke ha available he (yay check nai kia hmara he ya nai bas yay check
  kr lia ke exist krta he) */

/* iss trha ki cheezo se bachnay ke liay ham  hasOwnProperty use krtay hain */
console.log(ranger.hasOwnProperty("toString"));  // false
// yay check kray ga ke kia yay hmari on property hay ya console mai se prototypes mai se lia gya he