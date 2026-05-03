const orders = [
    {dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2},
    {dish: "Dragon Ramen", price: 12, spicy: true, qty: 1},
    {dish: "Caesar Salad", price: 9, spicy: false, qty: 3},
    {dish: "Inferno Wings", price: 11, spicy: true, qty: 2},
    {dish: "Truffle Risotto", price: 18, spicy: false, qty: 1},
];


////////////////////////////////////////////////////// FOR EACH ///////////////////////////////////////////////////////

orders.forEach((eachitem,index) =>{
    console.log(`#${index+1} : ${eachitem.qty}x ${eachitem.dish} `);
});

// yay direct print ho jaiy ga lakin 

const myData = orders.forEach((eachitem,index) =>{
    return (`#${index+1} : ${eachitem.qty}x ${eachitem.dish} `);
});
console.log(myData);
/*
jaise hi hamne ek variable mai save krkay print krnay ki kooshish ki to vo undefined aaa gya matlab ke forEach kuch bi return nai krta */


////////////////////////////////////////////////////// MAP METHOD ///////////////////////////////////////////////////////


orders.map((eachitem,index)=>{
    console.log(` #${index+1} : ${eachitem.dish} $${eachitem.price * eachitem.qty} `);
});
// yay direct print ho jaiy ga lakin agar ham variable mai store krwa kr check kray kay kia yay return krta he ke nai ?

const myMapData = orders.map((eachitem,index)=>{
    return (` #${index+1} : ${eachitem.dish} $${eachitem.price * eachitem.qty} `);
});
console.log(myMapData);

/* It is also return and printing data 
So ForEach return nai krta kuch bi 
and Map always return krta he with new clone array
*/


////////////////////////////////////////////////////// Filter ///////////////////////////////////////////////////////


// filter mai hamesha ham condition dete hain agar apnay yaha per bi method pass kia to garbar krogay ,
const myfilterData = orders.filter (eachitem => {
   return  eachitem.spicy === true
});
console.log(myfilterData);
/* to iss trha se ham filter ko bi use kr saktay hain ek array per apply krkay uskay object mai se condition ke hisaab se
value lay saktay hain and yay bi return krta he */


////////////////////////////////////////////////////// Reduce  ///////////////////////////////////////////////////////


// Reduce ko ham mostly shopping cart mai use krtay hain jaha per total calculate kia jata he  | means ke total calculate krnay mai mostly use hota he


const totalRevenue = orders.reduce((total, eachitem) => {
    return total + (eachitem.price * eachitem.qty)
},0);
/* reduce ek bohat powerful method he , ismay 
 - ek total/sum hota he and 
 - 2nd parameter eachitem wala hota he , 
 - eachitem calculate krnay mai help krta he and
 - total sab calculate datako uss ke bahir 0 mai add krta rehta he jabtak process complete na ho jaiy and 
 - final value return krta he and show krwa deta he */
 console.log(totalRevenue);
 // yay return krta he value ko  

  
////////////////////////////////////////////////////// Sort  ///////////////////////////////////////////////////////


const ticketNumbers = [100,59,8,25,78]

// ❌ Gatcha - Wrong sort
const sortedW = ticketNumbers.sort();
console.log(sortedW);  // [100, 25, 59, 78, 8]

// jaise hi hamne sort krnay ki try kia to yay nai hoa yay js mai gatcha he 


const sortedNumbers = ticketNumbers.sort((a,b) => a-b);
console.log(sortedNumbers); // [8, 25, 59, 78, 100] ✅

/* jaise hi hamne ise aysay kia to sorted number of array mil gya 
 - iska workflow : 
 - sabse pehle 2 values a,b values (0,1 index) ko layta he and unko subtract krkay final nikalta he and
 fir next index per chla jata he and iss trha se har index per jata he and final sabse choti value fir 
 uss se bari fir uss se bari and iss trha se complete sort bnata he | yay original bi change krta he */

 