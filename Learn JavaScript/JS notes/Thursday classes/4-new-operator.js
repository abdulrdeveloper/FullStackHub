// It is mostly used with Constructor Functions

// Constructor
// 1. capital latter name  [String, Number, Array, Object]
// 2. Should be Executed by "new" Operator

function User(name) {
  this.name = name;
  this.isPaid = false;
};

const aj = new User("Ani");
// console.log(aj);

// new ka jaadu...
// 1. this = {}
// 2. operations 
// 3. return this;

// function User(name) {
//   this = {};
   
//   this.name = name;
//   this.isPaid = false;


//   return this;
// };

