function startCompany() {
  function ca(name) {
    return `Name of your company is ${name}`;
  }
  return ca;
}

const getMeAcompany = startCompany();
const myCompanyName = getMeAcompany("Zomato");

function eternal(guest) {
  const guestName = guest;
  let count = 0;

  function zomato() {
    console.log(`Hi ${guestName}, from zomato`);
  }

  function blinkit() {
    if (count == 1) return;
    console.log(`Hi ${guestName}, from blinkit`);
    count++;
  }
  // zomato();
  // blinkit();
  return {
    zomato,
    blinkit,
  };
}

const hitesh = eternal("hitesh");
const piyush = eternal("Piyush");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();

useMemo();

const cups = ["green", "blue", "red"];

cups.map;

// closures mai vo tiffen box saath mai lay kr ata he or ise [[ SCOPE]] bola jata he  , ise cLOVE bi boltay hain but just name yaad rakhna yay 
// ham closeaure ki help se ek catche bna saktay hain jo ke 10Million calls ko bi easily handle kr sakta he , but yay good pattern nai he , agar bohat zyaada catches lgaiy to code messy ho jata he and prhnay mai difficulty hoti he.