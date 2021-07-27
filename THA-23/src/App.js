import "./App.css";
import "./components/useCounter";
// import Api from "./Components/Api";
import React, { useState } from "react";
import useCounter from "./components/useCounter";
// function App(props) {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="App">
//       <div>{counter}</div>
//       <button onClick={counter.increase}>ADD</button>
//     </div>
//   );
// }
const App = (props) => {
  const counter = useCounter();
  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="value">{counter.value}</div>
      <div className="box">
        <button onClick={counter.increase}>ADD</button>
        <button onClick={counter.decrease}>MINUS</button>
        <button onClick={counter.zero}>ZERO</button>
      </div>
    </div>
  );
};
export default App;
