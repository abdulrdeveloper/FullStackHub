function TataCar(chassisNumber, modelName) {
  
  this.chassisNumber = chassisNumber;
  
  this.modelName = modelName;
  this.fuelLevel = 100;
  
}

TataCar.prototype.status = function () {
  return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
};

const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");

console.log(car1.modelName);
console.log(car2.modelName);
console.log(car1.status());
console.log(car2.status());

// this is not same as above
//
//
function createAutoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto ${this.id} running on ${this.route}`;
    },
  };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-kanpu");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());
