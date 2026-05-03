const prithviraj = {
  name: "Prithviraj",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const raj = Object.create(prithviraj);
raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function () {
  return `${this.name} runs the family business`;
};
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.hitesh = "hitesh"


console.log([1, 2, 3].hitesh)

String.prototype.upperCase = function () {
  
}

console.log([1, 2, 3].last());
console.log(["Ani", "hitesh", "Akash"].last());





Array.prototype.mapTwo = function () {
  this
}