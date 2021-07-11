const heelo1 = {
  Name: "First",
  Info: "This is MY 1st object",
};
const heelo2 = {
  Name: "Second",
  Info: "This is MY 2nd object ",
};
const heelo3 = {
  Name: "Third",
  Info: "This is MY 3rd object ",
};

function dev() {
  console.log(this);
  console.log(this.Info);
}

function sum(a, b) {
  console.log(this);
  console.log("Sum of given number is", a + b);
}

dev.call(heelo1);
sum.call(heelo2, 2, 3);

sum.apply(heelo3, [4, 6]);

var valSum = sum.bind(heelo1, 2, 4);
valSum();

function sum(...arr) {
  console.log(this);
  console.log(arr);
  var total = 0;
  for (i of arr) {
    total += i;
  }
  console.log(total);
}

sum.call(heelo1, 3, 4, 5);
sum.call(heelo3, 2, 3, 34, 54, 2);
