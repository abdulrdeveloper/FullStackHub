const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionDish(){
        return `${this.name} cooks an ancient family recipe`
    }
}

/* Prototype ka sabse important use inheritance he and inheritance ka matlab he ke yay sara oper wala data new ko transfer kr do yahi hota he inheritance ke data ko kisi or mai without repeat transfer krdo */

const raj = Object.create(prithviraj);
console.log(raj.name);

/* yaha per jab hamne raj print krwaya to empty object aya kyo ke hamne inhirantance kia he lakin khud ka kamaya hoa to nai he na iss liay jab raj.name kia to fir uska data show hoa  */

raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function(){
    return `${this.name} runs the family business`
};
console.log(raj);


const ranbir = Object.create(raj);
ranbir.name = "ranbir",
ranbir.generation = "son"
ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies`
}


console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionDish());

/* yay all print hoay and data print kia 
Apne paas nahi hai toh baap se maango, baap ke paas nahi toh dada se — yahi hai prototype chain! */





Array.prototype.last = function (){
    return this[this.length-1]
}

console.log([1,2,3].last());
console.log(["A","B","C"].last());
/* yay last array ka index deta he and yay just fun ke liay sai he but real world projects mai ise use krnay se avoid krna chahiyay  */