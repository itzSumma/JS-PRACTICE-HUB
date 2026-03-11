// Map, filter, find, optionally reduce

const products = [
  {
    id: 1,
    name: "iPhone 14",
    brand: "Apple",
    type: "phone",
    price: 999,
    rating: 4.8,
    ram: "6GB",
    storage: "128GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    type: "phone",
    price: 899,
    rating: 4.7,
    ram: "8GB",
    storage: "256GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 3,
    name: "Google Pixel 8",
    brand: "Google",
    type: "phone",
    price: 799,
    rating: 4.6,
    ram: "8GB",
    storage: "128GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 4,
    name: "Xiaomi 13",
    brand: "Xiaomi",
    type: "phone",
    price: 699,
    rating: 4.5,
    ram: "12GB",
    storage: "256GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 5,
    name: "MacBook Air M2",
    brand: "Apple",
    type: "laptop",
    price: 1199,
    rating: 4.9,
    ram: "8GB",
    storage: "256GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 6,
    name: "Dell XPS 13",
    brand: "Dell",
    type: "laptop",
    price: 1099,
    rating: 4.7,
    ram: "16GB",
    storage: "512GB",
    company: {
      name: "Apple",
      bs: "test",
    },
  },
  {
    id: 7,
    name: "HP Spectre x360",
    brand: "HP",
    type: "laptop",
    price: 1249,
    rating: 4.6,
    ram: "16GB",
    storage: "1TB",
    company: null,
  },
  {
    id: 8,
    name: "Lenovo ThinkPad X1",
    brand: "Lenovo",
    type: "laptop",
    price: 1299,
    rating: 4.8,
    ram: "16GB",
    storage: "512GB",
    company: {
      bs: "test",
    },
  },
];

// map
// const newProducts = products.map((pd) =>
//   pd.price >= 1000
//     ? { ...pd, isExpensive: true }
//     : { ...pd, isExpensive: false },
// );
const newProducts = products.map((pd) => {
  // console.log(pd, "pd");
  return { ...pd, isExpensive: pd.price >= 1000 };
});
console.log(newProducts);

// Filter
// const expensiveProducts = products.filter((pd) => pd.price >= 1000 );
const expensivePhones = products.filter(
  (pd) => pd.price >= 1000 && pd.type === "phone",
);
// console.log(expensivePhones);

// if (expensivePhones.length === 0) {
//   console.log("Expensive phone nai");
// } else {
//   console.log("Expensive phone ache");
// }

// find
const expensiveProduct = products.find((pd) => pd.price >= 3000);
// console.log(expensiveProduct);

const expensiveLaptops = products
  .filter((pd) => pd.price >= 1000 && pd.type === "laptop")
  .map((pd) => ({
    id: pd.id,
    name: pd.name,
    brand: pd.brand,
    companyName: pd.company?.name,
  }));

console.log(expensiveLaptops);
