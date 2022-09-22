import React, { useState } from "react";

//create root component- App component

function App() {
  const handleChange = (event) => {
    event.preventDefault();
    console.log("Value is: " , event.target.value)
  }
  
  return (
    <section>
      <form className="form-container">
        <input onChange={handleChange} type="text" placeholder="Enter your name"></input>
        <input type="text" placeholder="Enter your email"></input>
        <input type="text" placeholder="Enter your address"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
export default App;
