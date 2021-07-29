import React, { useState } from "react";
import "./Card.css";
// import "./App.css";
function Card(props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [calorie, setCalorie] = useState(props.calorie);

  function validate() {
    setEditing(false);
    let newCalorie = calorie.replace(/\D/g, "");
    setCalorie(newCalorie);
  }

  return (
    <>
      <div className="outer">
        {editing ? (
          <input
            className="newInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2 className="item_name">{title}</h2>
        )}
        {editing ? (
          <input
            className="newInput"
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}
          />
        ) : (
          <p className="information">
            You Have Consumed {calorie} Calories Today!!
          </p>
        )}
        <div className="buttons">
          <button className="btn" id="delete" onClick={props.handleDelete}>
            DELETE
          </button>
          <button
            className="btn"
            id="edit"
            onClick={() => (editing ? validate() : setEditing(true))}
          >
            {editing ? "SAVE" : "EDIT"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
// import React, { useEffect, useState } from "react";

// function Card({ food, number, data, setData, index }) {
//   function deleted() {
//     const newData = data.filter((item, el) => {
//       console.log(index);
//       if (index != el) {
//         return item;
//       }
//     });
//     setData(newData);
//   }
//   return (
//     <div className="box">
//       <h1 classname="food">{food}</h1>
//       <button onClick={deleted}>Delete</button>
//       <h2>You have consumed {number} calories today</h2>
//     </div>
//   );
// }
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
