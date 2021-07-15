import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
// import Button from "./components/button";
// import Chess from "./components/Chess";
function App(props) {
  const [data, setData] = useState([
    {
      food: "Pizza",
      number: 56,
    },
    {
      food: "Burger",
      number: 69,
    },
    {
      food: "Coke",
      number: 500,
    },
    {
      food: "Brownie",
      number: 180,
    },
    {
      food: "Fried Rice",
      number: 90,
    },
    {
      food: "Lasagna",
      number: 56,
    },
    {
      food: "Pani Puri",
      number: 10,
    },
  ]);
  return (
    <div className="list">
      <h2 style={{ margin: "auto" }}>Calorie List</h2>
      <div classname="container">
        {data.map((item, index) => (
          <Card
            food={item.food}
            number={item.number}
            data={data}
            setData={setData}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
