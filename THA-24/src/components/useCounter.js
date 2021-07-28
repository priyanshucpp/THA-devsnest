import React, { useState } from "react";
const useCounter = () => {
  const [value, setValue] = useState(0);
  //for increment
  const increase = () => {
    setValue(value + 1);
  };
  //for decreament
  const decrease = () => {
    setValue(value - 1);
  };
  //zero value
  const zero = () => {
    setValue(0);
  };
  return {
    value,
    increase,
    decrease,
    zero,
  };
};
export default useCounter;
