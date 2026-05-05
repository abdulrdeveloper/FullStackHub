const user2 = {
  name: "John",
  email: "john@gmail.com",
  address: {
    full: "adad adlfjdafj city",
    zip: "432322"
  },
}


// if (user.address) {
//   if (user.address.city) {
//     console.log(user.address.city);
//   } else {
//     console.log(user.address.full);
//   }
// } else {
//   console.log('empty');
// }


// logical and it returns first falsy or last truty 
// console.log(user.address && user.address.city);

// ?.
console.log(user.address?.zip);

// When to add 
// when we are not sure.

