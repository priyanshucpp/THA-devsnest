import React, { useEffect, useState } from "react";

function Card({ food, number, data, setData, index }) {
  function deleted() {
    const newData = data.filter((item, el) => {
      console.log(index);
      if (index != el) {
        return item;
      }
    });
    setData(newData);
  }
  return (
    <div className="box">
      <h1 classname="food">{food}</h1>
      <button onClick={deleted}>Delete</button>
      <h2>You have consumed {number} calories today</h2>
    </div>
  );
}
// const Card = (index, food, number) => {

//   return (
//     <div>
//       <div className="container">
//         <div className="card">
//           <h1 classname="food">{food}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Card;
