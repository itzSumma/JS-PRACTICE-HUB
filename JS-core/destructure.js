
// Array destructure
 let arr = [10,20,30,40,50,60,70];
//  let ten =arr[5];
//  let forty =arr[2];
//  let fifth =arr[4];
//  console.log(ten,forty,fifth);
 let [ten,twenty, ,forty, ,sixty]=arr;  //maintain sequence
 console.log(ten,twenty,forty)

 //Object Destructuring
 let person = {
    name: "Tisha",
    age: 24,
    roll:12,
    address:{
        city:"Dhaka",
        street:"d-4 banani",
        country:"Bangladesh"
    },
    isMarried :false,
    isMillioner :true,
    homeTown:null
 };
// let name = person.name;
// let age = person.age;
// let city = person.address.city;
let {
    roll:myRoll,
    name:myName,
    address:{
        city,street
    },
}=person;
// let {name,age:myAge,address:{city}}=person  // can update key
// console.log(name,myAge,city)
// console.log(myRoll,myName,address)
console.log(myRoll,myName,city,street)