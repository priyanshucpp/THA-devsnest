const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.img} alt="" />
        <div className="title">{props.title || "Card Title"}</div>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Card;
