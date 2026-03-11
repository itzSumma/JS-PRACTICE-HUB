// Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const [one, two, three, , , , seven] = arr;
console.log(one, two, three, seven);

// Object
let obj = {
  name: "Hablu",
  address: "Khablu",
  age: 10,
  street: "10A B434",
  city: "Dhaka",
  division: "Dhaka",
  language: "Bangla",
  hobby: "test",
  location: {
    district: "Dhaka",
    union: "Test",
    address: {
      streetNumber: "10A",
      house: "10B",
    },
  },
};

let {
  street,
  name,
  address,
  age,
  location: {
    address: { streetNumber, house },
  },
  ...rest
} = obj;

// console.log(street, name, address, age, rest);
console.log(address, location);
