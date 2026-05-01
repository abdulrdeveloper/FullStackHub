// yya var he ise kabhi use nai krna yay deprecate nai hoa lakin yay globally work krnay lag jata he
var shipname = "The Amber";
console.log("ShipName: ", shipname)


// // hamesha let/const use krna chahiyay
let crewCount = 12;
crewCount = 14;
console.log("crew count: ", crewCount);


// 90% ise use krtay hain industry mai | Block level scope | not reassignable
const captainName = "Jak Sparrow";
// captainName = "Abdul"; it will give error because it cannot be changed
console.log("CaptainName: ", captainName);


if (true) {
    var leakyTreasure = "Gold coins";
}
console.log(leakyTreasure) // write outside of the if statement
/* jab hamne ise print krwaya to isne print krdia jabkay yay to
 inside nai outside he ise print nai krna chahiyay tha , iss liay
 ham ise use nai krtay kyoke yay globally code mi jaha per bi value
 ho ose show krwa deta he, avoid using it */


//   Some Standerd Practice Naming Rules //
let shipSpeed = 22;
let _privatelog = "Secret";
let MONGODB_URL = "";
let name = "Abdul";


// object mai complete refernce change krna allowed nai hota
const treasureChest = {
    gold: 20,
    rubies: 50,
    maps: 3,
}
treasureChest.gold = 40; // yay work kray ga, content manipulate kr rahay hain ham 
// treasureChest = {gold : 60} yay error day ga complete refernce allowed nai hota, yay work nai krega
console.log(treasureChest);


//arrays
const crewRoaster = ["Alok", "Abdul", "Tanish"]
crewRoaster.push("Ali");
console.log(crewRoaster);

crewRoaster[0] = "Aliii";  // yay 0 index wali value ko direct replace krkay new value add kray ga
console.log(crewRoaster);
console.log(crewRoaster[2]); // yay 2 index wali value ko print kray ga

