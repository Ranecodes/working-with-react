import React, { useEffect, useState } from "react";

// create a custom hook
const useGetData = (type) => {
  //set up the state
  const [data, setData] = useState([]);

  // use effect hook
  useEffect(() => {
    //lists
    const cars = [
      {
        id: 1,
        name: "BMW",
        year: "2019",
      },
      {
        id: 2,
        name: "Audi",
        year: "2018",
      },
      {
        id: 3,
        name: "Mercedes",
        year: "2017",
      },
    ];
    // books
    const books = [
      {
        id: 1,
        name: "Harry Potter",
      },
      {
        id: 2,
        name: "Lord of the Rings",
      },
    ];

    // do magic...
    if (type === "cars") {
      setData(cars);
    } else if (type === "books") {
      setData(books);
    } else {
      setData([]);
    }
  }, [type]);

  return [data];
};

//Root Component
function App() {
  const [data] = useGetData("cars");

  console.log(data)

  return <section></section>;
}

export default App;
