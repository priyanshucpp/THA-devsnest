import React from "react";

import "./App.css";
import Button from "./components/button";
// import Chess from "./components/Chess";
function App() {
  return (
    <div>
      {/* <Chess /> */}
      There are 4 counter components instances that each manage their own state,
      <br />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}
export default App;
