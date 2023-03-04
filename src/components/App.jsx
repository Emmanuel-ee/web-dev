import { useState } from "react";
import React from "react";

function App() {
  const [text, newText] = useState("");
  const [isMouseOver, mouseAction] = useState(false);
  const [name, newName] = useState("");

  function handleChange(event) {
    newName(event.target.value);
  }
  function handleClick(event) {
    newText(name);
    event.preventDefault()
  }

  function mouseOver() {
    mouseAction(true);
  }

  function mouseOut() {
    mouseAction(false);
  }

  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          style={{ backgroundColor: !isMouseOver ? "white" : "black" }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          value={name}
          type="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
