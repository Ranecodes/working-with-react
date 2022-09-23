import React from "react";

//create root component- App component

function Car({data}){
  return <div className="car">{`${data.brand} ${data.color} ${data.year}`}</div>
}

function App() {
  const cars = [
    {
      brand: "Tesla",
      color: "Red",
      year: "2022"
    },
    {
      brand: "Audi",
      color: "Black",
      year: "2018"
    },
    {
      brand: "BMW",
      color: "Yellow",
      year: "2010"
    }
  ]

  const listOfCars = cars.map((car) => {
    return <Car data={car}/>
  })

  return <section className="car-container">{listOfCars}</section>
}

export default App;
