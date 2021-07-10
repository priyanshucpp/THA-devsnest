function clickme() {
  console.log("u clicked");
  let btn1 = document.getElementById("btn1");
  let para1 = document.getElementById("para1");
  //onclick
  if (para1.style.display != "none") {
    para1.style.display = "none";
  } else {
    para1.style.display = "block";
  }
}
//mouseover
para1.addEventListener("mouseover", function run() {
  // alert("mouse inside");
  para1.classList.remove("para1");
});
//mouseoutside
para1.addEventListener("mouseout", function ran() {
  para1.classList.add("para1");
});
//onfocus
let input1 = document.getElementById("input1");
function focus() {
  // input1.classList.remove("input1");
  // input1.classList.add(".input2");
  console.log("focussed");
}
input1.addEventListener("input", function oninput() {
  alert("You will be redirected to google.com!");
});
//onkeydown
function keydowne() {
  para1.classList.add(".italic");
}
//onkeyup
function keyup() {
  para1.classList.remove(".italic");
}
//offline
function offline() {
  alert("You are offline");
}
//mousemove
para1.addEventListener("mousemove", function move() {
  para1.classList.add(".italic");
});
