import React from "react";
import "./style.css";
import Card from "./components/Card";
function App(props) {
  return (
    <div className="App">
      <h1 className="h1">Calorie List</h1>
      <div className="list">
        <Card food="Pizza" number="56" />
        <Card food="Burger" number="69" />
        <Card food="Coke" number="500" />
        <Card food="Brownie" number="180" />
        <Card food="Fried Rice" number="90" />
        <Card food="Lasagna" number="200" />
        <Card food="Pani Puri" number="10" />
      </div>
    </div>
  );
}
export default App;
