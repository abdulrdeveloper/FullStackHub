const creMembers = 40;
const fuelTons = 142.42;
constlight_speed = 299_888_888;
// inn sab ki datatype number he

const infinityRange = Infinity
const NegativeinfinityRange = -Infinity

// yay bi exist krtay hain but sir ne kabhi use nai kiay 

const notANumber = NaN;
"5"
"abdul"
"ali"
/* Remember 2 NaN kabhi equal nai hotay hain, kyo ke NaN ka matlab he ke not a number ,
matlab ke kuch bi ho sakta he hmay nai pta , and isi trha se agar 2 NaN ko compare krogay 
to false hi aiy ga kyo ke vo Not a number kuch bi ho saktay hain , yay bilkul 2 inifities
ki trha he kyo ke hmay nai pta aap konsi 2 infinities ko compare krrhay hain */


/*--------------------------- Number khud mai hi ek type he -----------------------------*/

console.log(Number.MAX_SAFE_INTEGER); // Sabse bari safe integer value jo ham likh kr use kr saktay hain
console.log(Number.MIN_SAFE_INTEGER); // Sabse choti safe integer value jo ham likh kr use kr saktay hain
console.log(Number.EPSILON);          // Floating Point ko compare krta he

/* JS problem */

const float1 = 0.1;
const float2 = 0.2;

if(float1 + float2 === 0.3){
    console.log(true);
}
else false;
/* yay false aiy ga kyo ke js mai float ko bohat lengthy se check krtay hain and last per false kr dia jata he */

console.log(Number.isNaN(float1))      // false
console.log(Number.isInteger(float1))  // false
console.log(Number.isFinite(float1))   // true
// yay true ya false value dayta he


/* ------------------- Parse System | Conversion ------------------ */

const fuelReading = "142.75 tons"
const sectorCode = "0xA3"
const countDown = "007"

console.log(parseInt(fuelReading));
console.log(parseInt(sectorCode ));
console.log(parseFloat(countDown));
/* parse int: yay apna best try krta he ke given value ko integar mai convert kr sakay, starting 00 bi remove kr deta he, agar na convert ho to 0 day dayta he same for float  */
/* parse float: yay apna best try krta he ke given value ko float mai convert kr sakay, starting 00 bi remove kr deta he, agar na convert ho to 0 day dayta he same for int  */



/* ------------------------------- Math library inside JS ---------------------------- */



const thrustForce = 4.567;  // closest integar value 5 hay 
console.log(Math.round(thrustForce));  // yay closet integar krta he closet value kay saath even vo round up ho ya round down,
console.log(Math.floor(thrustForce));  // yay round down krta he
console.log(Math.ceil(thrustForce));   // always round up krta he
console.log(Math.trunc(thrustForce));  // yay bolta he ke decimal htaa do

const temps = [-120, 50, 40, -30]
console.log(Math.min(...temps));
console.log(Math.max(...temps));

// yay spread krkay individually check krkay sabse lowest print krday ga


/*------------------------------------- Epsilon ka Use --------------------------------------- */

function getvalue(a,b){
    return Math.abs(a-b) < Number.EPSILON 
}
/* yay bolta he ke pehle a-b kro jo value aiy ose abs krdo means ke agar -4 hay to 4 krdo (-ive sign remove kr deta he) and fir compare kro
epsilon ki value se agar epsilon ki value bari he to true krdo kyo ke epsilon ki value bohat choti hoti almost equal to the comparision */

console.log(getvalue(0.1+0.2,0.3)); // true
console.log(getvalue(0.1+0.3,0.3)); // false

/*
1. a - b → Do numbers ka farq nikalo
const a = 0.1 + 0.2;  // 0.30000000000000004
const b = 0.3;         // 0.3

a - b  // 0.00000000000000004 (bahut chhota farq)


2. Math.abs(a - b) → Farq ko positive banao
// Agar a chhota hai ya bara hai, farq hamesha positive chahiye

Math.abs(5 - 3)   // 2
Math.abs(3 - 5)   // 2 (negative nahi!)

Math.abs(0.30000000000000004 - 0.3)  // 0.00000000000000004


3. < Number.EPSILON → Check karo farq bahut chhota hai?
Number.EPSILON  // 0.0000000000000002220446...

// Agar farq EPSILON se chhota hai = "almost equal"
0.00000000000000004 < 0.0000000000000002220446  
// true ✓ - matlab numbers practically barabar hain! */