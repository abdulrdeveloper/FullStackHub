/* Permitive | Non Permitive Data Types
In ko completely yaad rakhnay ki zroorat nai hoti just yay remember rakhna ke iss trha ki datatypes bi exist krti hain
*/

const weaponName = "Flame Sword";
console.log("Weapon: ", weaponName);
console.log("Type: ", typeof weaponName);

const attackPower = 75;  // number datatype
const attackUpgrade = 1.5; // number datatype

const bigIntPower = 7512345674323456743234567n;  // number datatype | Sir never used it before
const isLoggedIn = true; // true or false value
let bonusEffect; // undefined datatype | value hi nai he

const curseStatus = null; // iska matlab he ke value ki place hay but value intensionally absent he
/* null tab likho jab apko user ko btana he ke kuch bi nai he ans like weather btatay time kyo ke yaha per 0 nai likh saktay vo bi temprature he so yaha per null likhna better he */
console.log(typeof curseStatus); // null ki datatype object he

const uniqueRuneId = Symbol("It`s a unique Value");
const uniqueRuneId2 = Symbol("It`s a unique Value");

if (uniqueRuneId === uniqueRuneId2) {
    console.log(true);
}
else {
    console.log(false);
}
console.log("Rune: ", uniqueRuneId.toString()) // Always use toString when you use Symbol
// yay false aya he iska matlab ke symbol ek unique value bna deta he jo koi bi nai janta iss liay even ke comparision krnay per bi false ata he
// yay mostly api keys ya passwords mai use hota he takay har kisi ka unique symbol ho | immutable + unique


/* Non-Permitive */

// Ojects //
const heroState = {
    name: "Deepak",
    level: 12,
    class: "Range",
}
console.log("Hero: ", heroState, " | type: ", typeof heroState) // object datatype

// arrays
const inventory = ["Flame Sword", "Health Potion", "Shield"];
console.log("inventory: ", inventory, " | type: ", typeof inventory) // object datatype

// functions 
function castSpell() {
    return "Firsball";
}
console.log("Spell Type: ", typeof castSpell); // function datatype

// non permitive mai mostly objct datatype ke hi hotay hain 


console.log(typeof "ChaiCode");
console.log(typeof 34);
console.log(typeof 32n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });


/* Copy a Item */

let originalHP = 100;
let cloneHP = originalHP;
cloneHP = 80;
console.log("OriginalHP: ", originalHP);
console.log("CloneHP: ", cloneHP);

// yay to easily ho jaiy ga orignal mai koi change nai aiy ga only clone mai change aiy ga

/* but in array or object */
const originalSword = {
    name: "Flame Sword",
    damage: 75,
    typeofw: "fire",
}
const clonesword = originalSword;
clonesword.damage = 80;
console.log(clonesword);
console.log(originalSword);

/* to jaise hi hamne object per yay try kia to
uski clone and original value bi change hogai */
/* iss liay yay method array/object per apply nai krta uske liay alag method he */


/*---------------------------------- Shallow Clone -------------------------------------*/


/* let`s make a copy of nested object */
const armorOriginal = {
    name: "Iron Plate",
    defence: 80,
    buff: {
        fire: 10
    }
}

/* yay ... dots only 1st object copy krtay hain na ke complete nested, yay completed nested copy nai krtay balkay agar apnay ... use krkay object copy kia he
 to vo to ho jaiy ga but agar uske inner ek or object tha to vo nai hoga and uska refernce mil jaiy ga (means ke jo value change krogay vo original mai bi hogi) */

const armorCopy = { ...armorOriginal };
armorCopy.buff.fire = 30;
console.log(armorCopy);
console.log(armorOriginal);
/* just yay tha ...  3 dots yay spread operator he , yay all items/values ko spread krta he and 
fir unki copy bna deta he iss trha se original mai koi change nai hota and copy bi ho jati he */


/*---------------------------------- Deep Clone -------------------------------------*/


/* Copy complete nested object */
const portionOriginal = {
    name: "Health",
    effects: {
        heal: 40,
        injuried: 55,
        mana: {
            workload: 34
        }
    }
}
const portionCopy = structuredClone(portionOriginal);
portionCopy.effects.mana.workload = 100;
console.log(portionCopy);
console.log(portionOriginal);

/* amazing it's working , only copy mai change hoa he original mai change nai hoa */
