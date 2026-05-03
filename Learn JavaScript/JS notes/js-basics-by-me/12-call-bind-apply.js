// call and apply => basic chef (yay simple chef ki trha hota he khud aa kr sab bna deta he ham bas kitchen and cheezay dete hain )
// bind => deligation expert (yay khud nai ata professional he yay apni team ko behjta he ) | return a new function


function cookDish(ingredient, style){
    return `${this.name} prepares ${ingredient} in ${style} style !`;
}

const sharmaKitchen = {name: "Sharma jis Kitchen"}
const guptaKitchen = {name: "Gupta jis Kitchen"}



console.log(cookDish("Paneer and Spices", "Muglai")); // agar ham ise aya likhay to ismay sirf 2 arguments pass hotay hain but hmay to this.name wala bi pass krna he to fir ?
// iss situation mai ham 3 arguments ko pass krnay ke liay call (basic chef ) ka use krtay hain

console.log(cookDish.call(sharmaKitchen,"Paneer and Spices", "Muglai"));

// call and apply 2 alag alag hain , inko yaha samajhtay hain call to samaj aa gya ab apply bi dekhte hain 
const guptaOrder = ["chole khulche", "Pubjabi Dhaba"];

console.log(cookDish.apply(guptaKitchen,guptaOrder));
// bas itna sa hi difference he apply ka use krkay ham pora array bi argument mai day saktay hain jabkay call mai ham yay nai kr saktay 



// agar hmaray paas ek array he to hamaray paas limited option hotay hain only spread operator ya apply | modern way mai log spread use krtay hain apply almost bohat kam use hota he 
const bills = ["100","55","22","105","78"]

console.log(Math.max.apply(null,bills)) // and yay sabse max show krwa day ga
console.log(Math.max(...bills)) // yay bi same work kray ga



function reportDelivery(location,status){
    return `${this.name} at ${location}: ${status}`
}


const deliveryBoy = {name:"Ranveer"};

console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("Call: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick up"]));
const bindfunction = reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT");
console.log(bindfunction());

// just yahi differ he call ko direct regular function day saktay hain but array nai 
// apply k array mai arguments dene prtay hain
// bind print nai hota yay return krta he agar print krogay to  Call:  [Function: bound reportDelivery]   yay show hoga
