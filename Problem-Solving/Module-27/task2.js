/*
? Qs: 1
Primitive এবং Non-Primitive data type আলাদা করে চিহ্নিত করো।

const a = 10;
const b = "Hello";
const c = true;
const d = null;
const e = undefined;
const f = [1, 2, 3];
const g = { name: "Karim" };

 কোনগুলো primitive?
 কোনগুলো non-primitive?
*/
// Ans:
//store simple value (Primitive)
const a = 10;        // Number
const b = "Hello";   // String
const c = true;      // Boolean
const d = null;      // Null
const e = undefined; // Undefined

//store multiple value(Non-Primitive)
const f = [1, 2, 3];      // Array
const g = { name: "Karim" }; // Object
/*
? Qs: 2
নিচের কোডের output কী হবে এবং কেন হবে?

let x;
console.log(x);

 undefined কেন আসে explain করো।
*/

// Ans:

 //My Explanation for why its undefine
// In JavaScript, if you make a variable like let x; but don’t give it any value, JavaScript says its value is undefined. This just means the variable exists, but it is empty. So console.log(x); will show undefined. If you try to use a variable that you never created, then JavaScript will give an error.
/*
? Qs: 3
নিচের মানগুলো থেকে কোনগুলো truthy আর কোনগুলো falsy?

0
1
""
"Hello"
null
undefined
[]
{}
false

 আলাদা করে লিখো।
*/
 // Falsy values
 0
""
null
undefined
false

// Truthy values
1
"Hello"
[]
{}
// Ans:

/*
? Qs: 4
নিচের কোডের output কী হবে?

console.log(5 == "5");
console.log(5 === "5");
console.log(false == 0);
console.log(false === 0);

 implicit conversion explain করো।
*/
;
// Ans:
// (==) double equality checks value only, performs type conversion (implicit conversion)
console.log(5 == "5");   //True
console.log(false == 0); // False
//(===)Strict equality → checks value and type, no type conversion
console.log(5 === "5");  // False
console.log(false === 0) // False
/*
? Qs: 5
নিচের কোডে error হবে কিনা? হলে কেন?

{
  let a = 10;
}
console.log(a);

 block scope explain করো।
*/

// Ans:
{
  let a = 10;    // 'a' is created inside this block
  console.log(a); // so it works here and prints 10 perfectly
}

console.log(a); // Gives "ERROR!"  because 'a' cannot be used outside of the block
                 // because 'let' is  a block scoped
 //  When you use let inside { }, the variable exists only inside that block. Outside the block, it disappears, so console.log(a) gives a ReferenceError.
/*/
? Qs: 6
Closure কীভাবে কাজ করে নিচের উদাহরণ দিয়ে explain করো।

function counter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

const result = counter();
result();
result();

 Output কী হবে? কেন?
*/

// Ans:
function counter() {
  let count = 0;           // outer variable
  return function() {       // inner function
    count++;                // inner function can access 'count'
    console.log(count);
  }
}

const result = counter();   // counter() runs and returns inner function
result();                   // prints 1
result();                   // prints 2
//  How closure works here ==>

// Outer function: counter() makes a variable count = 0.

// Inner function: The function inside counter() can use count.

// Closure: Even after counter() finishes, the inner function remembers count.

// Each call: When you run result(), it adds 1 to the same count and prints it.
//A closure is just an inner function that remembers variables from its outer function.
/*
? Qs: 7
Callback function ব্যবহার করে এমন একটি function বানাও যেখানে একটি function আরেকটি function কে parameter হিসেবে নেয়।

 Example: greet("Rahim", callbackFunction)
*/

// Ans:

/*
? Qs: 8
Pass by value এবং pass by reference নিচের উদাহরণ দিয়ে explain করো।

let num = 10;
function changeValue(x) {
  x = 20;
}
changeValue(num);
console.log(num);

এবং

let obj = { name: "Rahim" };
function changeName(o) {
  o.name = "Karim";
}
changeName(obj);
console.log(obj.name);

 দুইটার output explain করো।
*/

// Ans:

// Step 1: num is 10
let num = 10;   
// Step 2: x is a copy of num not the original one
function changeValue(x) { 
  // Step 3: changing x does NOT affect num
  x = 20; 
  console.log(x)
}
// Step 4: num is still 10
changeValue(num); 
// Step 5: prints 10, original num did not change
console.log(num); 
//[Note]==>
//  1.Primitive types (numbers, strings, booleans) → pass by value
//2.Function gets a copy, so changing it inside the function does not affect the original variable

                           //AND

let obj = { name: "Rahim" }; 
// obj is an object with a property 'name'
function changeName(o) { 
  // o is a reference to obj (both point to the same object)
  o.name = "Karim"; 
  // changing o.name also changes obj.name
}
changeName(obj); 
// calling the function → the object's name is also changed
console.log(obj.name); 
// prints "Karim" → the original object is modified here

//Pass by Reference (Objects & Arrays)
// Objects and arrays are passed by reference
// The function gets a link to the original object
// So if you change it inside the function, the original also changes
// 
/*
? Qs: 9
map ব্যবহার করে নিচের array থেকে সব সংখ্যাকে double করো।

const numbers = [2, 4, 6, 8];

 Output হবে: [4, 8, 12, 16]
*/

// Ans:
const numbers = [2, 4, 6, 8];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 
/*
? Qs: 10
filter, find এবং reduce ব্যবহার করে নিচের কাজগুলো করো।

const products = [
  { name: "Mobile", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Watch", price: 3000 }
];

 ১. ১০,০০০ টাকার বেশি product filter করো
 ২. price 3000 এমন product খুঁজে বের করো
 ৩. সব product এর total price বের করোJ
*/

// Ans:
const products = [
  { name: "Mobile", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Watch", price: 3000 }
];

//1000 taka products
const expensive = products.filter( product =>product.price >10000);
console.log(expensive) //if  I want MULTIPLE things use "Filter"
 
const cheapPrice = products.find(product => product.price ===3000);
console.log(cheapPrice); // If I want ONE specific thing "Find"
const total = products.reduce((sum, product) => sum + product.price, 0);  // If I want to BUILD something
console.log(total);
