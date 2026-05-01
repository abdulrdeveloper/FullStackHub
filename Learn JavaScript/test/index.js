    //  let num1 = Number(prompt("Enter First Number: "));
    //    let num2 = Number(prompt("Enter Second Number: "));
    //     function sayhello(a,b){
    //         return a * b;
    //     }
    //     /* we give 2 numbersin function (those numbers are given by the user) */
    //     let finaloutput = sayhello(num1,num2);
    //     alert("Hello Dear , Your calculation is: " + finaloutput);
    //     console.log(`Hello Dear , Your calculation is: ${finaloutput}`);

    //     /* it`s reuse of function, we give 2 numbers to the function by ourself */

    //     let userinput = sayhello(5,8);
    //     console.log(userinput);
        
//     let userage = Number(prompt(`Enter Your Age`));
//     if(userage <= 10){
//         console.log(`you are a child`);
//    }
//     else if(18 >= userage && userage > 10 ){
//          console.log(`you are a teen`);
//     }
//     else if(20 >= userage && userage > 18){
//         console.log(`you are an adault`);
//     }
//     else if(40 >= userage && userage > 20 ){
//         console.log(`you are mature man .`);
//     }
//     else{
//         console.log(`Best of luck , dear senior dev. `);
//     }

// let filesize = 1024 ;            // Just suppose the file size is 1024MB 
// let currentfiledownload = 3000;     
// // We wrote current download 3000MB of the file means statement is false , so the loop will not work but 
// do{                                 
// // it will run code atleast 1 time
//     console.log("increase the mb after every iterate");
//     currentfiledownload = currentfiledownload + 40;   /* (data comes in chunk from the server so it can be 10,20,30 etc everytime) */
// }
// while (filesize > currentfiledownload);      // then it checks the statement

// let counter = 2;
// while (counter < 6 ){
//   console.log (counter)
//   counter++;  
// }


// Create the countdown variable
let countdown = 5;
// Write your while loop
while( countdown > 0){
    console.log(countdown);
  countdown--;
}
console.log("Blast off!");