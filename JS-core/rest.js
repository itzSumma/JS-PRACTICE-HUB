
//Rest Operator
//Parameters should be at last
function myFunc (a,b,c,d, ...rest){
    console.log(a,b,c,d,rest);
}
myFunc(1,2,3,5,8,6,9,7,5,4);

//Spread Operator
// For Array
let arr =[10,20,30];
// console.log(arr);
console.log(...arr);
let arr2 = [...arr] //Copy Independently

console.log(Math.max(...arr)) // Get max num using spread
console.log(Math.min(...arr)) // Get min num
console.log(Math.max(100,200,300,500,400,1000))
console.log(Math.min(100,200,300,500,400,1000))

//For Object
const obj ={
    name: "Tisha",
    age: 24
};
const obj2 ={...obj}; //Copy Independently
console.log(obj);