//1.Displaying objects
var student = {
  name: "David Ravy",
  sclass: "VI",
  rollno: 12,
};
for (let item in student) {
  console.log(item, student[item]);
}
//2.Deleting object
console.log("before");
for (let item in student) {
  console.log(item, student[item]);
}
delete student.rollno;

console.log("after");
for (let item in student) {
  console.log(item, student[item]);
}
//3.Length of object
const size = Object.getOwnPropertyNames(student);
console.log(size.length);
//4.Display reading status
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (let item in library) {
  console.log(library[item]);
}
// library.forEach((item) => {
//   console.log(item.title + " " + item.author + " " + item.readingStatus);
// });
//5. Volume of cylinder
var V = 0;
function volume(r, h, p = 3.14) {
  V = p * (r * r) * h;
  return V;
}
console.log(volume(2, 7).toFixed(4));
var cyl = {
  radius: 6,
  height: 9,
};
//6.Sorting an array
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
function compareID(a, b) {
  if (a.libraryID < b.libraryID) {
    return -1;
  } else if (a.libraryID > b.libraryID) {
    return 1;
  } else {
    return 0;
  }
}

console.log("Before Sorting");
console.log(library);
var lib = library.slice(0);
console.log("After Sorting");
console.log(lib.sort(compareID));
