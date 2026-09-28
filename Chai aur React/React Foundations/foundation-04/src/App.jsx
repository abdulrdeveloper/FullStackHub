import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(5);
  // let value = 5;

  const increase = () => {
    setValue(value + 1); // NOT so good
  };

  const decrement = () => {
    setValue(value - 1); // NOT so good
  };

  return (
    <>
      <div>
        <h1>Value: {value}</h1>
        <button onClick={increase}> ✅ </button>
        <button onClick={decrement}> ❌ </button>
      </div>
    </>
  );
}

export default App;
