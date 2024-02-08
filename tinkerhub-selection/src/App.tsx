import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const date = new Date();
  return (
    <>
      <button
        onClick={() => {
          setCount(Math.random() * date);
        }}
      >
        click for random number
      </button>
      <div>{`The random number is ${Math.floor(count)}`}</div>
    </>
  );
}

export default App;
