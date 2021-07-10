// // //   .then((data) => console.log(data))
// // //   .then((res) => res.json());
// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// async function getData(username) {
//   // console.log("hello world");
//   const res = await fetch("https://api.quotable.io/random");
//   // console.log(res);
//   const data = await res.json();
//   console.log(data.content);
//   // return "hello";
// }
// btn.addEventListener("click", async () => {
//   const username = input.value;
//   let response = getData(username);
//   let user = await response;
//   // console.log(user);
// });
// // console.log(a);
// // a.then((data) => console.log(data));
// // localStorage.setItem("username", "priyanshucpp");
// // const username = localStorage.getItem("username");
// // console.log(username);

let btn = document.getElementById("btn");
let author = document.getElementById("author");
let output = document.getElementById("output");
btn.addEventListener("click", getQuote);
async function getQuote() {
  const res = await fetch("https://api.quotable.io/random");
  // console.log(res);
  const data = await res.json();
  // console.log(data.content);
  // console.log(data.author);
  output.innerHTML = data.content;
  author.innerHTML = data.author;
}
