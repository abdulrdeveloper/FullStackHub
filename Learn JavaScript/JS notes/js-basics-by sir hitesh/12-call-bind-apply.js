// call and apply => basic chef (kitchen)
// bind => return a new function
//
//
//
function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style !`;
}
console.log(cookDish());

const sharmaKitchen = { name: "Sharma jis Kitchen" };
const guptaKitchen = { name: "Gupta jis Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Muglai"));

const guptaOrder = ["Chole kulche", "Punjabi Dhaba"];

console.log(cookDish.apply(guptaKitchen, guptaOrder));

const bills = [100, 30, 45, 50];

Math.max.apply(null, bills);
Math.max(...bills);

function reportDelivery(location, status) {
  return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = { name: "Ranveer" };

console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick up"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT"));

const bindReport = reportDelivery.bind(deliveryBoy);
console.log(bindReport("Haridwar", "WHAT"));
