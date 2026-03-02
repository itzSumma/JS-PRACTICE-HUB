/* =========================================
        🚀 DAY 4 — JS Freestyle Problems
        (Method free — map/filter/reduce তুমি ঠিক করবে)
========================================= */

/* 
? Problem 1
একটা array আছে, সব element cube করো। 
const numbers = [2, 3, 4, 5];
Expected Output: [8, 27, 64, 125]
*/
//* Ans:
// const numbers = [2, 3, 4, 5];
// // const cube = numbers.map(num=> num*num*num)
// const cube = numbers.map(num=>Math.pow(num , 3))
// console.log(cube)
/* 
? Problem 2
50 এর কম mark থাকা students বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 30 },
  { name: "Dipu", mark: 90 }
];
Expected Output: [{ name: "Ali", mark: 45 }, { name: "Chotu", mark: 30 }]
*/
//* Ans:
// const students = [
//   { name: "Ali", mark: 45 },
//   { name: "Babu", mark: 75 },
//   { name: "Chotu", mark: 30 },
//   { name: "Dipu", mark: 90 }
// ];
// const filterStudents = students.filter(student => student.mark<50);
// console.log(filterStudents);
/* 
? Problem 3
সব numbers যোগ করো। 
const nums = [10, 20, 30, 40];
Expected Output: 100
*/
//* Ans:
// const nums = [10, 20, 30, 40];
// const total = nums.reduce((sum , num)=> sum+num, 0);
// console.log(total);
/* 
? Problem 4
প্রথম student যার mark > 80 খুঁজে বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 90 }
];
Expected Output: { name: "Chotu", mark: 85 }
*/
//* Ans:
// const students = [
//   { name: "Ali", mark: 45 },
//   { name: "Babu", mark: 75 },
//   { name: "Chotu", mark: 85 },
//   { name: "Dipu", mark: 90 }
// ];
// const talentedStudent = students.find (student => student.mark >80);
// console.log(talentedStudent);
/* 
Problem 5
index সহ fruits print করো। 
const fruits = ["Mango", "Banana", "Apple", "Orange"];
Expected Output:
0 - Mango
1 - Banana
2 - Apple
3 - Orange
*/
//* Ans:
const fruits = ["Mango", "Banana", "Apple", "Orange"];
fruits.forEach((fruit,index)=>{
   
    console.log(`${index} - ${fruit}`);
})
/* 
?Problem 6
mark > 50 student এর শুধু নাম বের করো। 
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 30 }
];
Expected Output: ["Babu", "Chotu"]
*/
//* Ans:
const students = [
  { name: "Ali", mark: 45 },
  { name: "Babu", mark: 75 },
  { name: "Chotu", mark: 85 },
  { name: "Dipu", mark: 30 }
];
const marksOver50 = students.filter (student=> student.mark>50);
console.log(marksOver50);
/* 
?Problem 7
সব element multiply করো। 
const nums = [1, 2, 3, 4, 5];
Expected Output: 120
*/
//* Ans:
const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((acc,num)=> acc*num,1);
console.log(total)
/* 
? 8
Object থেকে name, email, city বের করো। 
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: { city: "Dhaka", country: "Bangladesh" }
};
Expected Output: Rahim rahim@gmail.com Dhaka
*/
//* Ans:
const user = {
  id: 101,
  name: "Rahim",
  email: "rahim@gmail.com",
  address: { city: "Dhaka", country: "Bangladesh" }
};
console.log(user.name,user.email,user.address.city)
/* 
?Problem 9
Variable hoisting output কি হবে লিখে দেখো। 
console.log(aVar);
var aVar = 50;

console.log(bVar);
let bVar = 30;
Expected Output: ? 
*/
//* Ans:
// aVar = undefined;
// ReferenceError: Cannot access 'bVar' before initialization  // TDZ(let)
/* 
?Problem 10
Closure counter তৈরি করো, প্রত্যেকবার call করলে +1 হবে। 
function counter() {
  let count = 0;
  return function() {
    // তোমার code এখানে
  }
}
const myCounter = counter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
*/
//* Ans:

function counter() {
  let count = 0;
  return function() {
   count ++;
   return count;
  }
}
const myCounter = counter();
myCounter(); 
myCounter(); 
myCounter(); 
/* 
? Problem 11
even numbers এর square যোগ করো। 
const numbers = [1, 2, 3, 4, 5, 6];
Expected Output: 56
*/
//* Ans:
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)   // even numbers
  .map(num => num * num)          // square
  .reduce((sum, num) => sum + num, 0);  // total
console.log(result);
/* 
? Problem 12
price > 500 object এর total quantity বের করো। 
const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 3 },
  { name: "Shoes", price: 1500, quantity: 1 },
  { name: "Cap", price: 300, quantity: 5 }
];
Expected Output: 4
*/
//* Ans:
const cart = [
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Pant", price: 800, quantity: 3 },
  { name: "Shoes", price: 1500, quantity: 1 },
  { name: "Cap", price: 300, quantity: 5 }
];

const totalQuantity = cart.reduce((sum, item) => {
  if (item.price > 500) {
    return sum + item.quantity;
  }
  return sum;
}, 0);

// Arrow function + reduce
// const totalQuantity = cart.reduce((sum, item) => item.price > 500 ? sum + item.quantity : sum, 0);

// console.log(totalQuantity); 