const playerHealth = 75;
const hasShield = true;
const hasSword = false;

if (playerHealth <= 30 && hasShield) {
}

const isLoggedIn = true;
const hasCourseAccess = false;

if (isLoggedIn || hasCourseAccess) {
  //allow to watch videos
}

const courseLauched = true;

const chosenPath = "left";

switch (chosenPath) {
  case "right":
    console.log("User selected right");
    break;
  case "top":
    console.log("User selected top");
    break;
  case "left":
    console.log("User selected top");
    break;
  default:
    "Jiska koi nhi hota, uska defaul hota h";
}
