const playerHealth = 100
const hasSheild = true
const hasSword = false

if (playerHealth <= 30 && hasSheild) {
    console.log("Hurry Up")
}

const isLoggedIn = true
const hasCourseAccess = false
if (isLoggedIn && hasCourseAccess) {
    console.log("You Can Now watch videos");
}

const isMailVerified = true;
const isPhoneNumberVerified = true;
if (isMailVerified || isPhoneNumberVerified) {
    console.log("You are Verified");
}

/* Switch Statement */
const path = prompt(`Enter Path Route: (Eg: East, West, South, North, Left, Right)`);
path.toLowerCase();
switch (path) {
    case "left":
        console.log("You Chosen Left");
        break;
    case "right":
        console.log("You Chosen Right");
        break;
    case "north":
        console.log("You Chosen North");
        break;
    case "south":
        console.log("You Chosen South");
        break;
    case "east":
        console.log("You Chosen East");
        break;
    default:
        console.log("Pleae Try again");
        break;
}
/* iss trha se ham user ko bta saktay hain kay usne select kia kya he means ke ham ek hi condition per multiple statements use kr saktay hain */