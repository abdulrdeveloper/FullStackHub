function TataCar(chassisNumber, modelName){
    this.chassisNumber = chassisNumber
    this.modelName = modelName
    this.fuelLevel = 100
}

TataCar.prototype.status = function () {
    return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`
}




function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.greet = function() {
  console.log("Hello " + this.name)
}

const ali = new User("Ali", 25)
const sara = new User("Sara", 22)

ali.greet()   // Hello Ali
sara.greet()  // Hello Sara


// 1000 users banao - greet function sirf EK baar memory mein hoga
// Sab share karenge ✅

/* 
new — ek template (constructor) se multiple objects banata hai. Memory efficient hota hai kyunki methods prototype pe shared hote hain. Real use: Date, Map, Set, Classes — sab andar se new use karte hain. */