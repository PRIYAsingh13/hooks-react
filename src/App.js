import React, { useState } from "react";
import "./App.css";

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };


  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={Increment}> Increment</button>
        <button onClick={Decrement}> Decrement</button>
      </div>
    </>
  );
};

export default App;
