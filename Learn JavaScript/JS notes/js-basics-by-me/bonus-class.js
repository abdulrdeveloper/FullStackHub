// ============================================================
//                  JAVASCRIPT COMPLETE NOTES
// ============================================================


// ============================================================
//  1. FUNCTIONS
// ============================================================

// --- Function Declaration ---
function sayhello(a, b) {
    return a * b;
}
let finaloutput = sayhello(5, 8);
console.log(finaloutput); // 40

// --- Function Expression ---
const greet = function () {
    return "Hello!";
};
console.log(greet()); // Hello!

// --- Arrow Function ---
const greetArrow = () => "Hello!";
console.log(greetArrow()); // Hello!

// --- Arrow Function with Parameters ---
const multiply = (a, b) => a * b;
console.log(multiply(5, 8)); // 40


// ============================================================
//  2. IF - ELSE
// ============================================================

let userage = 25;
if (userage <= 10) {
    console.log("you are a child");
} else if (18 >= userage && userage > 10) {
    console.log("you are a teen");
} else if (20 >= userage && userage > 18) {
    console.log("you are an adult");
} else if (40 >= userage && userage > 20) {
    console.log("you are a mature man.");
} else {
    console.log("Best of luck, dear senior dev.");
}


// ============================================================
//  3. TERNARY OPERATOR
// ============================================================

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult


// ============================================================
//  4. SWITCH STATEMENT
// ============================================================

let day = "Friday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}


// ============================================================
//  5. LOOPS
// ============================================================

// --- For Loop ---
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// --- While Loop ---
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// --- Do While Loop ---
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);

// --- For...of Loop (Arrays) ---
const fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}

// --- For...in Loop (Objects) ---
const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
};
for (let key in artifact) {
    console.log(`${key}: ${artifact[key]}`);
}

// --- Nested Loop ---
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row} Col ${col}`);
    }
}

// --- Break & Continue ---
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Loop band
    console.log(i); // 0, 1, 2
}

for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Skip 3
    console.log(i); // 0, 1, 2, 4
}


// ============================================================
//  6. ARRAYS
// ============================================================

let students = ["Abdul", "Ali", "Ahmad", "Hamza", "Sohail", "Anas"];

// --- Create Arrays ---
const carriage1 = ["Veer", "Ayush", "Ravi", "Abdul"];
const passenger = Array("Veer", "Ayush", "Ravi", "Abdul"); // same result
const threeEmptySeats = Array(3); // [ <3 empty items> ]
const singlePassenger = Array.of(3); // [3]

// --- Access Items ---
console.log(students[0]); // Abdul
console.log(students[2]); // Ahmad

// --- Check Item ---
console.log(students.includes("Anas")); // true
console.log(students.includes("Zain")); // false

// --- Slice (Immutable) ---
console.log(students.slice(2, 5)); // ['Ahmad', 'Hamza', 'Sohail']

// --- Splice (Mutates) ---
students.splice(1, 1, "Zain"); // Remove Ali, Add Zain

// --- Add/Remove Items ---
students.unshift("Rahul"); // Add at start
students.push("Adam");     // Add at end
students.shift();          // Remove from start
students.pop();            // Remove from end

// --- Other Methods ---
console.log(students.length);         // Count
console.log(students.indexOf("Ahmad")); // Find index
students.reverse();                    // Reverse array
console.log(students.join(", "));      // Join to string

// --- Sort ---
const ticketNumbers = [100, 59, 8, 25, 78];
const sortedAsc = [...ticketNumbers].sort((a, b) => a - b); // Ascending
const sortedDesc = [...ticketNumbers].sort((a, b) => b - a); // Descending
console.log(sortedAsc);  // [8, 25, 59, 78, 100]
console.log(sortedDesc); // [100, 78, 59, 25, 8]


// ============================================================
//  7. HIGHER ORDER FUNCTIONS
// ============================================================

// --- forEach (No return) ---
students.forEach((student, index) => {
    console.log(`#${index + 1}: ${student}`);
});

// --- map (Returns new array) ---
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// --- filter ---
const orders = [
    { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
    { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
    { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

const spicyOrders = orders.filter(item => item.spicy === true);
console.log(spicyOrders);

// --- reduce ---
const totalRevenue = orders.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);
console.log(totalRevenue); // Total revenue

// --- Advanced Reduce (Grouping) ---
const grouped = orders.reduce((acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
}, { spicy: [], mild: [] });
console.log(grouped);


// ============================================================
//  8. OBJECTS
// ============================================================

const artifactObj = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "volcanic glass",
};

// --- Object Methods ---
const keys = Object.keys(artifactObj);    // Only keys
const values = Object.values(artifactObj);  // Only values
const entries = Object.entries(artifactObj); // Keys + Values

// --- Loop through Object ---
for (let [key, value] of Object.entries(artifactObj)) {
    console.log(`${key}: ${value}`);
}

// --- Array to Object ---
const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
];
const priceListObject = Object.fromEntries(priceList);
console.log(priceListObject);

// --- Object to Array ---
const priceListArray = Object.entries(priceListObject);
console.log(priceListArray);


// ============================================================
//  9. FREEZE & SEAL
// ============================================================

// --- Freeze (Nothing can change) ---
const displayCase = {
    artifact: "Obsidian",
    location: "Hall A, Case 3",
    locked: true,
};
Object.freeze(displayCase);
displayCase.location = "New Location"; // Not worked
displayCase.newProp = "test";         // Not worked
delete displayCase.locked;             // Not worked
console.log(Object.isFrozen(displayCase)); // true

// --- Seal (Can edit, cannot add/delete) ---
const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true,
};
Object.seal(catalogEntry);
catalogEntry.description = "Gold city means Zurich"; // Works ✅
catalogEntry.newProp = "test";                   // Not worked ❌
delete catalogEntry.id;                              // Not worked ❌
console.log(Object.isSealed(catalogEntry)); // true


// ============================================================
//  10. HOISTING
// ============================================================

// --- var (Hoisted, default = undefined) ---
console.log(a); // undefined
var a = 5;

// --- let/const (TDZ - ReferenceError) ---
// console.log(b); // ReferenceError
let b = 10;

// --- Function Declaration (Hoisted) ---
sayHi(); // Works! ✅
function sayHi() {
    console.log("Hi!");
}

// --- Function Expression (Not Hoisted) ---
// greetMe(); // ReferenceError ❌
const greetMe = () => "Hello!";