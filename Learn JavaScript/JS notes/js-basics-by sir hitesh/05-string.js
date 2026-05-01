const codeName = "Shadow Fox";
const backupName = String("Night Own");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "J"; // silent fail
console.log(intercepted);

const secretCode = "OMEGA-7";

console.log(secretCode.length);
console.log(secretCode.charAt(99));
console.log(secretCode[99]);
console.log(secretCode.at(-1));

const rawTransmission = "ThE EaGLE has LandeD";
console.log(rawTransmission.toLowerCase());

const message = "The drop point is at Dock 7. Repeat: Dock 7";

console.log(message.indexOf("Dock"));

message.slice(0, 12);

const orders = "    move-north|hold-position|extract-vip";
let orderList = orders.split("|");
console.log("Split", orderList);

const myDataValue = "SOS".split("");
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
