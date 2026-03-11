function myFunc(a, b) {
  console.log(a, b);
}
// Function expression
const myFunc2 = function (a, b) {
  console.log(a, b);
};

// Arrow function (es6)
const myFunc3 = (a=1, b=1) => a * b;

const multiply = myFunc3(10000000000);
console.log(multiply);


const myFunc4 = (name="Hablu") => console.log(`Hello, ${name}. Good night! `);

myFunc4()