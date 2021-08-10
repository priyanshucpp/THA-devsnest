// const userLogin = () => {
//   return {
//     type: "Login",
//   };
// };
// const userLogout = () => {
//   return {
//     type: "Logout",
//   };
// };

// const name = (value) => {
//   console.log(value);
//   return {
//     type: "username",
//     payload: value,
//   };
// };
// const email = (value) => {
//   return {
//     type: "email",
//     payload: value,
//   };
// };
// export { userLogin, userLogout, name, email };
const addItem = (item) => {
  return {
    type: "ADD_Todo",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "Remove_Todo",
    payload: id,
  };
};

const taskDone = (id) => {
  return {
    type: "Task_Done",
    payload: id,
  };
};

export { addItem, removeItem, taskDone };
