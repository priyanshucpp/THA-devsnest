// import { combineReducers } from "redux";
// import inputData from "./input";

// const rootReducer = combineReducers({
//   userState: inputData,
// });
// export default rootReducer;
import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  Todo: TodoReducer,
});

export default rootReducer;
