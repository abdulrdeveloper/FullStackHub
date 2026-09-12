const crewMembers = 40;
const fuelTons = 142.42;
const light_speed = 299_888_999;

const infiniteRange = Infinity;
const negativeInfiniteRange = -Infinity;
const notANumber = NaN;

console.log(1 / 0);
console.log(-1 / 0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.isNaN(notANumber));

const fuelReading = "142.75 tons";
const sectorCode = "0xA3";
const countDown = "007";

console.log(parseInt(countDown));
console.log(parseInt("111", 2));  // it will convert binary to decimal , 111 means 7 in decimal and 2 means in how many base we are giving the number (binary is base 2)

const thrustForce = 4.567;

console.log(Math.round(thrustForce));
console.log(Math.floor(thrustForce));
console.log(Math.ceil(thrustForce));
console.log(Math.trunc(thrustForce));

const temps = [-120, 43, 56, -23];
console.log(Math.min(...temps));


console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

function almostEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(almostEqual(0.1 + 0.2, 0.3));


// Math.abs(a - b) dono numbers ka sirf 'gap' nikalta hai (minus sign ko hata kar).
  // Misal: (0.1 + 0.2) aur 0.3 ka gap = 0.00000000000000004 hota hai.
  // Number.EPSILON galti ki aakhri limit hai, jo lag bhag 0.00000000000000022 hoti hai.
  // Logic: Kyun ke hamara gap (...04) EPSILON ki limit (...22) se chota hai, 
  // isliye hum inhein barabar (true) maan lete hain.