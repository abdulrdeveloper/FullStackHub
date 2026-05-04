// pending, done(fulfil, resolve), nope(not, reject, nako)
//
/*
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Chaicode");
    rej(new Error("Chaicode"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

promise
  .then((data) => {
    newData = data.toUpperCase();
    return newData;
  })
  .then((data) => {
    return data + ".com";
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "Chai";
  })
  .then(console.log);
  */

const turant = Promise.resolve("Turant");
console.log(turant);

const allPromise = Promise.allSettled([ // yaha per agar .any lga day to agar ek bi resolve hogya to vo vahi stop ho jaiy ga , and .all bi he jo sabkay status dayta he and ek .allsettled bi hay jo sab kay errors and resolve bi show krwata he
  Promise.resolve("Chai"),
  Promise.resolve("Code"),
  Promise.reject("Error"),
]);

// allPromise.then(console.log);         // yay promises console.log se nai balkay .then se print kiay jatay hain output mai show krwaanay ke liay

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("Masterji"));
  }, 3000);
});

async function nice() {               // await only async mai hi work krta he
  try {
    const result = await hPromise;    // yaha per ham .then lga saktay thay lakin vo bohat complex ho jata he yaha hamne await likha jo bolta he ruk ja bhai hmara maal aa raha he peechay se
    console.log(result);
  } catch (error) {
    console.log("Error aa gya ji", error.message);
  }
}

nice();


// to yay rej agar likhna ho to .then use nai krtay or na hi simple async await se hota he , balkay iskay liay ham try catch ka use krtay hain takay error ko handle kr sakay