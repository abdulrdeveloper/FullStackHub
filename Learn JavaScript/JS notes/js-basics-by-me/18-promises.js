function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, { dish, status: "prepared" }), 100)
}

function pickupOrderCB(order, cb) {
    setTimeout(() => cb(null, { ...order, status: "pickud-up" }), 100)
}

function deliverOrderCB(order, cb) {
    setTimeout(() => cb(null, { order, status: "delivered" }), 100)
}

/* null hamne iss liay lgaya kyo ke jab ham ise run krwatay hain to pehla return error ata he , agar apko ise handle nai krna to return null krdo , vese yay kabhi use nai hota bohat rare he kyo ke yay bohat complex khatarnak and baykar wala syntax he  */
/* but agar pehla error nai aya and order aa gya to ose kese handle krna pray ga */




// old machines mai jab promises nai hota thay tab aise likhtay thay  yay kisi ko jaldi samaj nai atay thay
prepareOrderCB("Biryani", (err, order) => {
    if (err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        deliverOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`);
        });
    });
});



// ab isi same code ko promises se likhtay hain 
// promises ke 3 states/types hotay hain ya to vo pending hoga ya fulfilled ya rejected

function prepareOrder(dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dish) {
                reject(new Error("No dish is there"));
                return;
            }
            console.log(`${dish} is ready`);
            resolve({ dish, status: "prepared" });
        }, 100);
    });
}

/* yay bilkul sabse oper walay prepared ki 2 lines ki trha hay but yay zyaada better he  */

function pickupOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${order} is ready`);
            resolve({ ...order, status: "pickedup" });
        }, 100);
    });
}

function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${order} is ready`);
            resolve({ ...order, status: "delivered" });
        }, 100);
    });
}

