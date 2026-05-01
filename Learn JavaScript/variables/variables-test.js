// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));

// function greetuser(a,b){
//     return (a+b);
// }
// let finaloutput = greetuser(num1,num2);

// for (i=1; i <= finaloutput; i++){
//     console.log(i);
// }

// function sayhello(){
//     function sayhellotoone(){
//         return "a";
//     }
//     return sayhellotoone();
// }
// let final = sayhello();
// console.log (final);

// let userage = Number(prompt("Enter your age: "));
// let username = () => {
//     if(userage < 18){
//         console.log("chill");
//     }
//     else{
//         console.log("focus on your journey");
//     }
// }
// let final = username();
// console.log(final); 

// let students = ["Abdul","Ali","Ahmad","Hamza","Sohail","Anas"];
// students.push("Adam");
// console.log (students);

// let students = ["Abdul","Ali","Ahmad","Hamza","Sohail","Anas"];
// students.unshift("Rahul");
// console.log(students);

// function pizza(){
//    return "printed pizza";
// }
// console.log(pizza());

// function makeBiryani() {
//     return "🍛 Biryani";
// }

// function makePizza() {
//     return "🍕 Pizza";
// }

// function makeBurger() {
//     return "🍔 Burger";
// }

// // EK BAAR likh diya (reusable!)
// function cook(recipeFunction) {
//     console.log("👨‍🍳 Order liya");
//     console.log("Bana raha hoon...");
//     return recipeFunction();
// }

// // Ab sirf yeh karo
// console.log(cook(recipeFunction));
// cook(makePizza);
// cook(makeBurger);



// let students = ["Abdul","Ali","Ahmad","Hamza","Sohail","Anas"];

// learn=(username)=>{
//     console.log(username);
// }
// students.forEach(learn=(username)=>{
//     console.log(username);
// });

// let names = ["Abdul", "Ali", "Ahmad"];
// for(let i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// let names2 = ["Abdul", "Ali", "Ahmad"];

// function user(nameofstudent){
//     console.log(nameofstudent);
// }
// names2.forEach(user);


/* Output:
Hello Abdul! Welcome to the class! 👋
Hello Ali! Welcome to the class! 👋
Hello Ahmad! Welcome to the class! 👋
*/

// let students = [1, 2, 3, 4, 5, 6];
// let studentsdouble = [];


// let numbersDouble = students.map(numberinside => numberinside * 2);
// console.log(numbersDouble);  // [2, 4, 6, 8, 10, 12]

// 1.



// const nums = [3, 10, 24, 90]   // array ko bnaya and nums mai save kia

// const result = map(e => e * 10 + 1)    // result ke andar map premeter ko call krdia ab complete  e * 10 + 1  fn ke andar save ho jaiy ga

// function map(fn) {    // map parameter call kia tha to data fn mai save hogya
//     const result = [];   // ek empty array bnaya takay sab yaha store ho sakay
//     for (let i = 0; i < nums.length; i++) {  //nums array per for run kia takay har item bahir aa sakay
//         const Elementbynum = nums[i];    // jo items ka data aya unsab ko one by one ek Elementbynum mai save krwaya 
//         const finalitem = fn(Elementbynum);    // jo hamne paramete dia tha uss parameter mai Elementbynum ka reference day dia takay yaha se data lay lay and vo finaldata 
//         result.push(finalitem);      // jo final item he ose push ka use krkay new array kay last se add krdia one by one all.
//     }
//     return result;                 // yay sab final jo array banay gi, new wali ose return krwa dia
// }

// console.log(result);               // ab final mai result ke inner function print kr dia 


