import { useState } from "react";
import React from "react";

function App() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount(count++);
  }

  function decrease() {
    setCount(count--);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
