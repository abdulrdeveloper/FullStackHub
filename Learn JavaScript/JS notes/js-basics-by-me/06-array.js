const carriage1 = ["Veer", "Ayush", "Ravi","Abdul"]
const passenger = Array("Veer", "Ayush", "Ravi","Abdul"); // yay bi same work krta he ek array mai 4 items add krday ga
console.log(carriage1);
console.log(passenger);

/* ------------------------------- Create 3 empty arrays ------------------------------- */

const emptyCarriage = []
const threeEmptySeats = Array(3) // yay 3 empty seats/slots bna dayta he =>  [ <3 empty items> ] | Koi value nahi hai, sirf jagah reserved hai
console.log(threeEmptySeats.length);  // 3

/* ------------------------------ Create 1 array of 3 items ----------------------------- */

const singlePassenger = Array.of(3); // yay ek array (box) mai 3 items ki trha hain | Ek daba jisme 3 likha hai | yay 3 ko array ke andar daal dayta he
console.log(singlePassenger.length); // 1

/* ------------------------------ Create Array from string/any Value ------------------------------- */

let trainCode = Array.from("ABDUL");
console.log(trainCode); // It spread all letters and creates array of this string.
/* output:          [ 'A', 'B', 'D', 'U', 'L' ]           */


const tempTrain = ["A","B","C","D","E"]
tempTrain.length = 3; // yay only 3 indexes rakhta he baqi sab remove kr deta he | yay original mai se remove krta he and data lost ho jata he .
console.log(tempTrain);
tempTrain.length = 5; // again krnay per bi nai aiy ga | ==>>  [ 'A', 'B', 'C', <2 empty items> ]
console.log(tempTrain);

//push end per start krta he
console.log(tempTrain.pop("1")); // yay end se remove krta he
console.log(tempTrain);

// shift start se remove krta he
// unshift start pay add krta he


/* ---------------------------------splice ----------------------- */


let temptraincopy = structuredClone(tempTrain);
console.log(temptraincopy.pop("1"));
temptraincopy.splice(0,2,"Orange","Red"); 
// splice(start, deleteCount, item1, item2, ...) | splice mutate krta he | means ke original array mai changes krta he 
console.log(temptraincopy);


/* --------------------------------- Slice Method ------------------------------ */


const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits.slice(0,3)); // it removed 0-2 index , it will not remove the 3rd index
// slice(start, end) - end index NOT included    slice mutate nahi he | means ke original array change nai krta safe hi rakhta he


// ------------------------------- mutate | direct original change krta he ------------------------------------ 

//push , pop , shift , unshift, splice

// ------------------------------- immutate | return new array and keeps original array same without changing it 

//concat, slice, flat , flatmap

const trainCopy = fruits.slice();
/* ham iss trha se bi copy kr saktay hain data ko kyo ke yay new copy return krta he*/
trainCopy[0] = "ZZZZZ";
console.log(trainCopy); /* it changed */
console.log(fruits);    /* it is original not changed means slice method is also work */


/* ---------------------------------- Searching per Methods ------------------------------------- */


// searching indexOf , includes , find, findIndex
console.log(typeof []); 
console.log(Array.isArray());

// flatMap nested index remove kr deta he 
// Before: [1,2,3,[4,5,6],7]
// After Applying FlatMap: [1,2,3,4,5,6,7];


/*
1. Create array like this []
2. Avoid this Array(n)
3. Array are 0 based , bahir jao gay to kuch nai milay ga error aiy gay undefined etc , like agar array mai 4 index hain to 6 likhogay to undefined aiy ga
4. Mutating Methods : push, pop , shift, unshift, splice
5. Slice , concat, flat, flatmap
*/
