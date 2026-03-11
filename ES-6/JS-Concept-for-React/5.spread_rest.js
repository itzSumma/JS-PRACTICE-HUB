// Rest
function myFunc(a, b, ...rest) {
  console.log(a, b, rest);
}
// myFunc(1, 2, 3, 4, 6, 67, 7, 7, 100, 200);

// Spread
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];


let arr3 = [...arr, ...arr2];
// console.log(arr3);

arr.push(500);

console.log(arr);
console.log(arr3);

let person = {
  name: "Hablu",
  age: 25,
};
let computer = {
  monitor: "LG",
  SSD: "256GB",
  graphicsCard: "8GB",
};


let newObj = {
  ...person,
  ...computer,
};
console.log(newObj);
