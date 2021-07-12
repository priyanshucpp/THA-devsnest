import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        var newCount = count + 1;
        setCount(newCount++);
        // console.log(newCount);
      }}
    >
      {count}
    </button>
  );
};
export default Button;
