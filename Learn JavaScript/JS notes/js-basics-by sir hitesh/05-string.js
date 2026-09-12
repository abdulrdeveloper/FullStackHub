const codeName = "Shadow Fox";
const backupName = String("Night Own");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "J"; // silent fail
console.log(intercepted);

const secretCode = "OMEGA-7";

console.log(secretCode.length);
console.log(secretCode.charAt(1)); // same as secretCode[1]
console.log(secretCode[1]);
console.log(secretCode.at(-1));   // same as secretCode[secretCode.length - 1]
console.log(secretCode[secretCode.length - 1]);

const rawTransmission = "ThE EaGLE has LandeD";
console.log(rawTransmission.toLowerCase());
console.log(rawTransmission.toUpperCase());

const message = "The drop point is at Dock 7. Repeat: Dock 7";

console.log(message.indexOf("Dock"));

console.log(message.slice(0, 15)); // returns a new string from index 0 to 15 (not including 15)
console.log(message.slice(15));    // returns a new string from index 15 to the end of the string

const orders = "    move-north|hold-position|extract-vip";
let orderList = orders.split("|");
console.log("Split", orderList);

const myDataValue = "SOS".split("");
console.log("Split", myDataValue);
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = "42";
console.log(missionNumber.padStart(6, "0"));

const spellCard = `

  ++==========================
  | Spell: ${myDataValue} |

  `;

// const profile = `
//   ${checker ? "true-value" : "false-value"}
//   `;

// Tagged Template literal
//
//

console.log(void "hitesh");

let generalStore = { name: "Kirana", goods: 2 };
console.log(generalStore);
generalStore = null;
console.log(generalStore);
