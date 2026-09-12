const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log(threeEmptySeats.length);
const passenger = Array("Veer", "Ayush", "Ravi");

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const tempTrain = ["A", "B", "C", "D", "E"];
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);

// push, pop, shift, unshift, splice
//
// // concat, slice, flat (React, redux)

// const trainCopy = wholeTrain.slice()
//
// Searching: indexOf, includes, find, findIndex
//

console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray("Ravi"));

//key points
// 1. [] Array(4)
// 2. array are 0 based
// 3. Mutating methods: push pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatmap [1, 2, 3, [5, 6]]
// 5. Searching includes
// 6. Array.isArray()

// 1D Array 
const ekKamra = ["Red", "Blue", "Green"];
console.log(ekKamra[0]);
console.log(ekKamra[2]);

// 2D Array

const ekFloor = [
  ["Red", "Blue", "Green"],
  ["White", "Black", "Yellow"]
];
console.log(ekFloor[1][0]);
console.log(ekFloor[0][1]);

// 3D Array

const pooriBuilding = [
  [
    ["Red", "Blue"],
    ["White", "Black"]
  ],
  [
    ["Yellow", "Pink"],
    ["Green", "Purple"]
  ]
];
console.log(pooriBuilding[1][0][1]);
console.log(pooriBuilding[0][1][0]);