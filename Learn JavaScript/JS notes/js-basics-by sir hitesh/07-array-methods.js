const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
  console.log(`  #${index + 1} : ${order.qty}x ${order.dish}`);
});
// console.log(myData);
//
const receiptLines = orders.map((o) => `${o.dish}: $${o.price * o.qty}`);
console.log(receiptLines);

const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

const totalRevenue = orders.reduce((sum, order) => {
  return sum + order.qty * order.price;
}, 0);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";

    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
const sortedW = [...ticketNumbers].sort((a, b) => a - b);
console.log(sortedW);

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Inferno Wings", price: 11, spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, spicy: false, qty: 1 },
  { dish: "Ghost Pepper Soup", price: 15, spicy: true, qty: 1 },
];

data | (v1=true, v2=false, v3=true)

const mildReport = kitchenOrders
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price * order.qty,
  }))
  .toSorted();
