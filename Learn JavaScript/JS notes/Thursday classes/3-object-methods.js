function viralDance() {
  console.log("Ichu Inchu Song");
}

// const dogesh = {
//   name: "Husky",
// };

// dogesh.dance = function () {
//   console.log("Ichu Ichu Song");
// };

function viralDance() {
  console.log("Ichu Inchu Song");
}

// const dogesh = {
//   name: "Husky",
//   dance: viralDance;
// };

// const dogesh = {
//   name: "Husky",
//   dance: function () {
//     console.log("Ichu Inchu Song");
//   },
// };

// Method Shorthand
const dogesh = {
  name: "Husky",
  dance() {
    console.log("Ichu Inchu Song");
  },
};

let user = {
  name: "Piyush Garg",
  age: 26,
  college: "Chitkara University",
  passout: 2021,
  gf: "Mai Ka Ladli",

  intro() {
    console.log(`Hi, my name is ${this.name}!`);
    console.log(`I am ${this.age} years old.`);
    console.log(`I studied at ${this.college} and passed out in ${this.passout}.`);
    console.log(`My girlfriend's name is ${this.gf}.`);
  },
};

// user.intro();

let piyush = user;
user = null;

piyush.intro();