import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";
function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="img" />
        <div className="content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy,delicious and Nutritons</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="img" />
        <div className="content">
          <h2 className="text-2xl mb-2">Egg Salads</h2>
          <p className="mb-2">Crispy,delicious and Nutritons</p>
          <span>$20</span>
        </div>
      </div>
    </>
  );
}

export default Content;
