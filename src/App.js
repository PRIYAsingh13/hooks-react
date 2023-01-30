import React, { useState } from "react";
import "./App.css";

const App = () => {
  const state = useState();
  const [count, setCount] =  useState(0)


  // let count = 1;
  const Incriment = () => {
setCount( count + 1)
    // count++;
    // console.log("clicked" + count++);
  };

  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={Incriment}> click me</button>
      </div>
    </>
  );
};

export default App;
