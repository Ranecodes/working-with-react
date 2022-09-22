import React, { useState } from "react";

//create root component- App component

function App() {
  onsubmit = (event) => {
    event.preventDefault();
    const { name, email, tel } = event.target.elements;
    alert(`Hello ${name.value}! Your email is ${email.value} and your phone number is ${tel.value}. You may proceed.` )
  };

  return (
    <section>
      <form className="form-container">
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
        ></input>
        <input type="text" placeholder="Enter your email" name="email"></input>
        <input
          type="tel"
          placeholder="Enter your phone number"
          name="tel"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
export default App;
