const codeName = "Shadow Fox"
const backupName = String("Night Own")
const tamplateName = `Agent ${codeName}`
// ise string interploation bi kaha jata he | just value jo ham dete hain vo hoti he like jo value codeName mai he ose aysay ${codeName} krkay print krwa do bas ise hi string interpolation bola jata he

let intercepted = "HELLO"
intercepted[0] = "J";  // Silent Fail | ignore nai krta compilor but silent fail kr deta he
console.log(intercepted); // output : HELLO

const secretCode = "OMEGA-7"
console.log(secretCode.length);      // yay method (known as length() ) nai he yay property he .length (without braces)
console.log(secretCode.charAt(99));  // 3rd index per value btaiy ga | agar kisi index per nai he to empty string return karega (out of range)
console.log(secretCode[99]);         // 99 index exist nai krta iss liay undefined print krday ga
console.log(secretCode.at(-4));      // ( -ive side ) right side se count krtay hoay -4 index ko print krday ga | agar kisi index per nai he to undefined return karega (out of range)


const rawTransmission = "The EaGle HaS LandeD"
console.log(rawTransmission.toLowerCase());


const message = "The drop point is at Dock 7. Repeat: Dock 7"
console.log(message.includes("Dock")) // true | it checks that the given word exist in the message or not
console.log(message.indexOf("Dock")) // It tells the index of the letter
console.log(message.slice(0,9)) // yay 0-9 index print krday ga baqi sab cut krday ga


const orders = "    move-north| hold-position|extract-vip"
let orderList = orders.split("hold-position");
/* yay hold-position ko completely remove krdeta he but uss jga per kuch add nai krta | 
object datatype because split array bnata he fir uss per action perform krta he */

orderList2 = orders.replace("move-north", "Aura")  // yay remove nai replace krta he means ke remove krkay vaha per kuch new add krdayta he | string datatype
console.log(orderList, "\n", orderList2, typeof orderList, typeof orderList2)

console.log(orders.trim());

/* ----- Pad () Use to add extra digits at start / end ------- */
const missionNumber = "43"
console.log(missionNumber.padStart(6, "X")) // yay 6 digit rakhay ga agar zyaada hain to last se remove krkay 6 krday ga and agar kam hain to start mai X add krkay complete 6 krday ga
console.log(missionNumber.padEnd(4, "$")) // yay 4 digit rakhay ga agar zyaada hain to last se remove krkay 4 krday ga and agar kam hain to last per $$ add krkay complete 4 krday ga


/* ham string ke andar ternary operator bi day saktay hain */
const isloggedin = true
console.log (`${isloggedin ? "Logged In" : "Logged Out"} `)   // true
// this is how we can use ternary operator

const isSignIn = false;
const answer = isSignIn ? "Welcome back!" : "Please Login"; // false 
console.log(answer);
// is trha se ham check kr saktay hain ke true he ya false , but only for simple operators not for complex


/* Void Keyword */
console.log(void 0);
console.log(void null);
console.log(void "Abdul");
/* jab void lga dia to iska matlab he ke undefined
value kyo ke void undefined value deta he */
