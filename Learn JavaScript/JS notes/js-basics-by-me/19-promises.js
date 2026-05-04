// pending, done (fulfill, resolve), nope(not,reject,nako)
//

const promise = new Promise((resolve, reject) => {
   
    // resolve("ChaiCode"); // ek promise jo future mai kabhi complete hoga ose resolve bola jata he ,
    //  or yay promise kuch der baad complete hotay hain yay time laytay hain to ham ose setime mai likh saktay hain saath mai uska time bi

    setTimeout(()=>{
        resolve("ChaiCode");
    },2000);
});

console.log(promise);

//  setTimeout(()=>{
//         console.log("ChaiCode");
//     },3000);

// yaha per hamne settime out use kia with 3 seconds delay , takay promise 3sec ke baad complete ho
// yay ok he but good nai he kyo k hmay nai pta kay kaha kaha per kitnay time mai request aiy gi 



// jo bi value resolve ho kr ati he vo yaha per aa kr then mai store ho jati he

promise.then((finaldata)=> {
    console.log(finaldata);
}); // same chaiCode output


// interview code ~~
promise.then(console.log); // same output Chai Code why ??

