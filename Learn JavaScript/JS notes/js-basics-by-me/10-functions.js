console.log(brewPortion("Healing Herbs", 3));
function brewPortion(ingredient, dose) {
    return `Brewing potion with ${ingredient} (x${dose})... Potion ready `
}

/* 
Jab ham function ko kisi variable mai store krtay hain toh function ko naam dene ka koi faida nahi!
Variable ka naam hi function ka naam ban jata hai! */

const mixElixir = function (ingredient) {                 // yaha per callback nai dia only parameter dia he and still working
    return `Mixing elexir with ${ingredient}`;
};
console.log(mixElixir("SupraMan"));

// Arrow Function
const distilEssence = (ingredient) => {
    return `Mixing elexir with ${ingredient}`;
};
console.log(distilEssence("RedColor"));



// // /* ------------------------------------------------ Agruments Object in JS -------------------------------------------- */



// // /*----------- Simple Function --------------- */


// // /* Jo bhi values pass karo bina parameter define kiye automatically mil jaati hain! JS khud se ek object bna kr usmay add krdeta he */

function oldBrewingLogs() {          // yaha per na hi function ka name dia and na hi parameter dia | sab automatically JS ne handle kr lia
    console.log(typeof arguments);
    console.log(arguments);         // yaha per only arguments write kia baqi kuch nai dia | arguments 2 hain 2oono hi nai diay
}
oldBrewingLogs("sage", "Rosemary"); // yaha print krnay ke liay argument day diay but inside nai diay fir bi JS ne auto sab handle kr lia

// /* JS in simple function bi like :  Koi values aa rahi hain function mein...Parameter bhi nahi diya...
// Koi baat nahi! Main khud ek object bana deta hoon...
// Arguments = {
//     0: "sage",
//     1: "Rosemary"
// }
// // Yeh object JS ne khud banaya! Tu kuch nahi kiya! */


// /* --------------- Arrow Function -------------------- */


/* Arrow Function mai : Jab tak manually parameter pass nai krtay tab tak process nai hota and 
yay orgumants bi manually lata he khud se nai bnata  
aur inn values ko usme store kar deta hoon! */

oldBrewingLogs = () => { // yaha per parameter nai dia
    console.log(arguments); // Program Crash krday ga | Console mai ja kr try catch use krkay Problem identify kro  
}
oldBrewingLogs("sage", "Rosemary");

// iska simple point yay he ke - JS arrow function mai arguments automatically nai banta jabkay - simple function mai bna deta he 

/* JS in array function be like : hmaray yaha aisa hi hota he agar arrow function mai 
parameter nai diay to arguments bi auto generate nai hongay kuch bi nai hoga just errors */


// /* ---------------------------------- Conversion of Object into Array ----------------------------- */


const objectData = function () {
    console.log(arguments);                  // yay most cases mai object datatype mai hi data print krta he

    const work = Array.from(arguments);   // Ham from use krkay object ko array mai convert kr saktay hain but yay ek single array bnata hay 
    console.log(work);

    const workreverse = Object.entries(arguments);  /* Object ko Nested Array mein convert | Object -> nested array 
     ham entries word use krkay ek object ko nested array bna saktay hain har item ki specific array hogi 
    agar 3 items hain to 1 gloablly array hogi and 3 arrays of items - yay nested array bnata he har item ki ek array */
    console.log(workreverse);

    const work2reverse = Object.fromEntries(workreverse); /* nested array ko object mai reverse kr deta he |  nested array -> object
     agar nested array ho to fir hi work kray ga otherwise yay work nai kray ga */
    console.log(work2reverse);

};
objectData("Abdul", "Pasta", "Yup Crazy");

/*
Outputs :

    console.log(arguments)                         --->  give data as it is in object  
        Output : [Arguments] { '0': 'Abdul', '1': 'Pasta', '2': 'Yup Crazy' }

    const work = Array.from(arguments)             --->  Convert object into a single array 
        Output: [ 'Abdul', 'Pasta', 'Yup Crazy' ]

    const workreverse = Object.entries(arguments)  ---> Convert Object into Nested Array (each entries in a array) |
    only work if [key:value] both values are given, if we give only values then it creates keys automatically,
        Output: [ [ '0', 'Abdul' ], [ '1', 'Pasta' ], [ '2', 'Yup Crazy' ] ]

    const work2reverse = Object.fromEntries(workreverse); --> Reverse the Nested Array into Object 
        Output: { '0': 'Abdul', '1': 'Pasta', '2': 'Yup Crazy' }

  */



/* --------------------------- If program Crashes then use try catch ---------------------------------- */


/* to hamne dekha ke arrow function mai bi program crash hota he to ose bi try catch se solve krnay ki try krtay hain */

oldCheckLogs = () => {
    try{
        console.log(arguments);
    }
    catch(error){
        console.log(error.message);
    }
}

oldCheckLogs("sage", "Rosemary");   /* Arrow function mein arguments object nahi hota
   Isliye try-catch use karke error handle kar sakte hain
   Error catch hoga: "arguments is not defined" | agar nai hoa to browser ke console mai try kro */


/* -----------------------------  PURE vs IMPURE Function ---------------------- */

/*
<<<<<--------------- Pure Function | immutate rakhta he ----------------->>>> */

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));  // 5
console.log(add(2, 3));  // 5 (hamesha same!)
console.log(add(2, 3));  // 5 (phir se same!)

/* Same input = Same output (hamesha!)
Kuch bhi bahar change nahi karta (no side effects) 


<<< --------------- Impure Function | mutate krta he ---------------- >>>
Impure Function - Kuch Gadbad Karta Hai! */

let total = 0;

function addToTotal(num) {
    total = total + num;  // Bahar ki value change kar raha! 
    return total;
}

console.log(addToTotal(5));  // 5
console.log(addToTotal(5));  // 10 (different output!)
console.log(addToTotal(5));  // 15 (phir alag!)

/* Same input, different output ho sakta hai
Bahar ki cheezein change karta hai
*/


/* ---------------- IIFE ( Immediately Invoked Function Expression! ) ------------------------ */


// ()()  pehle mai function likhtay hain and 2nd empty chor dia jata he and vo 2nd hi complete function ko print krwata he without any outer calling 
(function greet(){
    console.log("I ran Immediately");
})();     // iss empty () mai ham arguments bi pass kr saktay hain
// bas yahi he , yay work krta he without calling the function Name. sirf () inn ki wjaa se

(function greet(){
    console.log("I ran Immediately",Array.from(arguments));
})("Adam","Rahul");

// or

(function greet(name1,name2){
    console.log(`I ran Immediately ${name1} and ${name2}`);
})("Dear","Rahul");