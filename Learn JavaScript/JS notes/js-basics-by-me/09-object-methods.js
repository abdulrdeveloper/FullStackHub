const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "volcanice glass",
};

const keys = Object.keys(artifact);
console.log(keys);   // only keys print kray ga

const values = Object.values(artifact);
console.log(values); // only values print kray ga

const entries = Object.entries(artifact)
console.log(entries);  // keys and values both ko print krday ga


/* we can see them using for of loop also */
for (let [key,value] of Object.entries(artifact)){
    console.log(`${key}: ${value}`);
}


/* ---------------------------------- Convert a Array into Object | Reverse Object to Array | Array to Object -------------------------- */


const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000]
]

// convert array into Object
const priceListObject = Object.fromEntries(priceList);
console.log(priceListObject);

//Reverse a Object into nested Array
const priceListArray = Object.entries(priceListObject);
console.log(priceListArray);

// agar ham Object.entries kray to nested array banta he and 
// agar only object.values per apply kray to jo outside per ek object ki layer he vo simply array mai convert ho jati he
const pricelistoutsidearray = Object.values(priceListObject)
console.log(pricelistoutsidearray);  /* converted outside object layer into array


/* ----------------------------------- Freeze in JavaScript ----------------------------- */


const displayCase = {
    artifact : "Obsidian",
    location : "Hall A, Case 3",
    locked: true,
};


Object.freeze(displayCase);
delete displayCase.locked; // nai hoa kyo ke freeze mai kuch bi delte nai hota

displayCase.newProp = "test"; // nai hoa 
console.log(displayCase);

displayCase.location = " Legend city means Geneva "; // not worked
console.log(displayCase);
/* So, iss trha se ham freeze ka use krkay kisi ko bi item ko unlock kr saktay hain */


/* ----------------------------------- Seal in JavaScript ----------------------------- */

const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true
}

Object.seal(catalogEntry);
catalogEntry.description = " Gold city means Zurich ";
console.log(catalogEntry);


/* ---------------------------------------------------------------- SEAL vs FREEZE ------------------------------------- */

// seal mai ham data ko edit kr saktay hain lakin new data add ya delete nai kr saktay .
// Freeze mai ham data change bi nai kr saktay 


/* ------------------------------------------ Special way to add item in a Object -------------------------------------- */

const secureArtificats = { name:"Adam" }
Object.defineProperty(secureArtificats, "age",{  // aysay ham bta saktay hain kis object  mai and konsi key add krni he
    value: 20,  // aysay ham koi bi value day saktay hain
    writable:false, // means:  iss new value ko change nai kr saktay
    enumerable: true, // means: kia yay value loop mai aani chahiyay ya nai ? to yay property bohat special he
    configurable: false,   // means : isko delete ya redefine kr saktay hain kia ? 
});

console.log(secureArtificats.age);
secureArtificats.age = 30;  // silent fail not work because we set limits on this key value
console.log(secureArtificats.age);

/* So, iss trha se ham khud restrictions add kr saktay hain , jo ke bohat special he , ham normal method se bi kr saktay hain but usmay itna access nai milta  */

/* and jab ham koi bahir ki libraries import krtay hain to unmay bi agar loop naa chl raha ho ya data change nai ho raha ho to yay ho sakta he, ose aysay access kr saktay hain */

const desc = Object.getOwnPropertyDescriptor(secureArtificats, "age");
console.log(desc);

/* { value: 20, writable: false, enumerable: true, configurable: false }  
yay vohi value day dayta he jo hamne define property per add ki thi. iss trha se ham vo set limitation dekh saktay hain */


// loop key points
// 1. for loop // sabse optimized loop | always big projects mai ise use kro | fast code
// 2. while loop 
// 3. do-while loop
// 4. for-in loop // mostly on objects | avoid on array
// 5. for of loop //
// 6. map,for-each,filter, filter, reduce