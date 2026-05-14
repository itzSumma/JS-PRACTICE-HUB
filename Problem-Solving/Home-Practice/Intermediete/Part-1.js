/*
 *You are building an ecommerce application.You have an array of product objects.
* Each product contains:name,category,price
 * Your task is to group the products based on their category. 
 */

/*
 * Input: const products = [
  *{ name: "iPhone 15", category: "Mobile", price: 1200 },
  *{ name: "Samsung S24", category: "Mobile", price: 1100 },
  *{ name: "MacBook Pro", category: "Laptop", price: 2500 },
  *{ name: "Dell XPS", category: "Laptop", price: 2000 },
 * { name: "AirPods", category: "Accessories", price: 250 },
];
*Output:{
  Mobile: [
  *  { name: "iPhone 15", category: "Mobile", price: 1200 },
   *{ name: "Samsung S24", category: "Mobile", price: 1100 }
  ],

  Laptop: [
   * { name: "MacBook Pro", category: "Laptop", price: 2500 },
    *{ name: "Dell XPS", category: "Laptop", price: 2000 }
  ],

  Accessories: [
    *{ name: "AirPods", category: "Accessories", price: 250 }
  ]
}
 */
 //*ANS:

 const products = [
  { name: "iPhone 15", category: "Mobile", price: 1200 },
  { name: "Samsung S24", category: "Mobile", price: 1100 },
  { name: "MacBook Pro", category: "Laptop", price: 2500 },
  { name: "Dell XPS", category: "Laptop", price: 2000 },
  { name: "AirPods", category: "Accessories", price: 250 },
];

const groupedProducts = products.reduce((accumulator, product) => {
  const category = product.category;
  if (!accumulator[category]) {
     accumulator[category] = [];
  }
  accumulator[category].push(product);

  return accumulator;
}, {}); 

console.log(groupedProducts);