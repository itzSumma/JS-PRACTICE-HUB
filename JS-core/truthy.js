let data ;
data =0;  //falsy
data =  ""; // falsy
data =  " "; // truthy
data = "0"; // truthy
data= false;
data= true;
data= null;// falsy
data=undefined; // falsy
data ={}; //truthy
data =[]; //truthy

if (data){
    console.log("truthy")
} else{
    console.log("falsy")
}

             // type -1
let price = 0;
if(price){
    console.log("Price is truthy");
}
            //type-2
let priceB = 0;
if(!price){
    console.log("Price is falsy");
}
           //type-3
           let value = 0;
if(!!value){
    console.log("Value is falsy");
}

        // (!)
console.log(!true);     // false
console.log(!false);    // true

console.log(!1);        // false (1 is truthy)
console.log(!0);        // true (0 is falsy)

console.log(!"Hello");  // false (non-empty string is truthy)
console.log(!"");       // true (empty string is falsy)

console.log(![]);       // false (array is truthy)
console.log(!{});       // false (object is truthy)

       //(!!)
 console.log(!!true);     // true
console.log(!!false);    // false

console.log(!!1);        // true
console.log(!!0);        // false

console.log(!!"Hello");  // true
console.log(!!"");       // false

console.log(!![]);       // true
console.log(!!{});       // true

console.log(!!null);     // false
console.log(!!undefined);// false
console.log(!!NaN);      // false      
       