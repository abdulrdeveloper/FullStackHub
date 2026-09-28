// console.log("Swastik");
// Promise.resolve("resolveed value").then((v) => {
//   console.log("Microtask ", v);
// });
// console.log("Avishek");

function boilWater(time) {
  return new Promise((res, rej) => {
    console.log("Krte h ji boil water");
    if (typeof time !== "number" || time < 0) {
      rej(new Error("ms must be in number and greater than zero"));
    }
    setTimeout(() => {
      res("Ubal gya");
    }, time);
  });
}
// we call the function and then we can use then catch block to handle the promise
boilWater(200)
  .then((msg) => console.log("Resolved: ", msg))
  .catch((err) => console.log("Rejected: ", err.message));


  // like this we can make functions which return promises and we can use them in async await or then catch block

  function grindLeaves() {
  return Promise.resolve("Leaves grounded");
}

function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => res("Steeped tea"), time);
  });
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}
