const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="food">{props.food}</h1>
        <h2 className="calorie">
          You have consumed {props.number} calories today
        </h2>
      </div>
    </div>
  );
};
export default Card;
