import React from "react";
import { useState } from "react";

export default function App() {
  setInterval(refreshTime, 1000);
  let time = new Date().toLocaleTimeString();
 

  let [newTime, setTime] = useState(time);
  function refreshTime() {
    const upDate = new Date().toLocaleTimeString();
    setTime(upDate);
  }
  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  );
}
