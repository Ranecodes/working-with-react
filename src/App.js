import React, { useState } from "react";

//create root component- App component

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (event) => console.log("Button Clicked!");

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
    console.log(counter);
  };

  return (
    <section className="counter-container">
      <div className="counter-label">{counter}</div>
      <button className="action-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="action-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </section>
  );
}
export default App;
