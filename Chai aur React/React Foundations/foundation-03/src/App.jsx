
import "./App.css";
import AvatarCard from "./components/AvatarCard.jsx";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX",
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM",
  },
];

// function Shell({ title, children }) {
//   return (
//     <section>
//       <p>Resuable shell</p>
//       <h2>{title}</h2>
//       {children}
//       <p>this is for test</p>
//     </section>
//   );
// }



function App() {
  return (
    <>

      {/* <h1>Childern in react</h1>
      <Shell title="Batman">
        <h1>this is inside Shell</h1>
        <p>this is also inside shell</p>
      </Shell>
      <h1>hello from Rachit</h1> */}

      <section>
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.id} avatar={avatar} level={avatar.id === 1 ? "Captain" : undefined} />
        ))}
      </section>

    </>
  );
}

export default App;
