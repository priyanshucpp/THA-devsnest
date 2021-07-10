import Square from "./Square";
import Black from "./black";
const Chess = () => {
  return (
    <div>
      <div className="container">
        <div className="board">
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
        </div>
        <div className="board">
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
        </div>
        <div className="board">
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
        </div>
        <div className="board">
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
        </div>
        <div className="board">
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
        </div>
        <div className="board">
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
        </div>
        <div className="board">
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
          <Square />
          <Black />
        </div>
      </div>
    </div>
  );
};
export default Chess;
