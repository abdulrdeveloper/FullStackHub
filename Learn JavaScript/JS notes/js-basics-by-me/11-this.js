/* To hamne dekha ke conditionals loops functions yay almost sab languages mai same hi hotay hain to fir JavaScript mai kia alag he jo un others language mai nai hay ?
1. this |  yay JavaScript mai jis level per use hota he or kisi language mai uss level per use nai hota or language mai bi exist krta he but js mai bohat ultra level per use hota he 
2. call , bind, apply , new , prototypes yay sab bi only JS mai paiy jatay hain or yahi JS ko real JS bnatay hain kyo ke only isi language mai paiy jatay hain 
yahi se sab poliphils niklay hain mostly interview mai pochtay hain
timers , DOM , Fetch yay bi js ke parts hain but core nai hotay inko JS ke saath attatch kia jata he */


console.log(this);  // agar ise node mai kray to {} yay ata he but 
console.log(this);  // agar ise browser ke console mai kray to windows object ata he 
/* Matlab ke this keyword ek hero ke actor ki trha he jo alag alag movies mai alag alag role play krta he and Yeh depend karta hai KE KAHAN aur KAISE call hua */

/* Globally means agar koi script hi nai he to kia role play kray ga this */
// mostly ise strict mode mai use krtay hain globally agar check krna ho to 



function ranveerWithNoScript(){
    "use strict";
    return typeof this;  // yaha per typeof krnay se undefined milta he
}
console.log(ranveerWithNoScript());
// to stric mode mai yay undefined ata he also type bi undefined ati he ,



function ranveerWithNoScript1(){
    return typeof this; // yaha per typeof krnay se object milta he braces ya undefined nai milta
}
console.log(ranveerWithNoScript1());
/* to yay agar ham likhay without strict to node per yay node ka global object day ga data bi , and broswer per kray to browser ka global object (data) day ga macOS per alag day ga linux per alag*/
// matlab ke function ke andar this ka concept kuch or hota he and use strict krtay hain to kuch or hota he and agar console mai kray to kuch or concept hota he , 
// to yay dekhne prtay hain ke this jo he vo kis ko point kr raha he function mai 



const bollywoodFilm = {
    name: "Bajiro Mastani",
    lead: "Ranveer",
    introduce(){
        return `${this.lead} performs in ${this.name}`
    },
};
console.log(bollywoodFilm.introduce());

/* Har object ke andar ek this hota he jo uss object kay andar ki all properties ko appoint krta hay unko access krta he overall uss object  kay scope ko appoint krta he */


/////////////////////////////// " This " interview question ////////////////////////////////

const filmDirector = {
    name: `Sanjay Leela Bhansali`,
    cast: [`Ranveer`, `Deepika`, `Priyanka`],

    announceCast() {
        this.cast.forEach((actor) => 
        console.log(`${this.name} introduces ${actor}`))
    }
}
filmDirector.announceCast();
/* Yay interviews mai bohat baar pocha jata he ya to object hota he ya fir array ko lay latay hain cast per but yay yaad rakhna he ke "this" arrow function
ke andar nai chlta but agar regular function ke inner arrow function he to vo work kray ga kyo ke regular function mai "this" work krta he  */


////////////////////// yaha per gatcha hota he ///////////////////

const filmSet = {
    crew: "Spot boys",
    prepareProps(){
        console.log(`Outer this.crew: ${this.crew}`)

    function arrangeChairs(){
        console.log(`Outer this.crew: ${this.crew}`)
    }
    arrangeChairs(); // irregular nested function does not inherit this | matlab ke nested function mai yaha tak this nai pohanchta and iska data undefined ho jata he 

    const arrangeLights = () => {
        console.log(`Arrow this.crew: ${this.crew}`);
    }
    arrangeLights();   // Arrow function me this tab work karta hai jab outer function ka this sahi ho. Agar outer function ka this hi galat ho to arrow bhi galat ho jayega.
},  // Arrow function apna this nahi banati , Yeh outer function ka this use karti hai
}
filmSet.prepareProps();



const actor = {
    name: "Ranveer",
    bow(){
        return `${this.name} takes a bow`
    }
}
const detachedBow = actor.bow
console.log(detachedBow());
/* ismay undefined takes a bow  print hoa he means ke jo method he vo sirf khud ka refernce print kray ga na ke jo uske paas pehle se reh chuka he uska bi ,
Function ko object se nikaal diya
to uska this connection toot gaya.
Isliye ise kehte hain:
"Detached method loses its context"
Detached = Method ko uske object se alag nikaal liya gaya hai.


*/