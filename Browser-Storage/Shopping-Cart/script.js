

//cart function

const handleAddProduct =()=>{
const productElement =document.getElementById("product");
const quantityElement = document.getElementById("quantity");
const product =productElement.value;
// const quantity = quantityElement.value;
const quantity = parseInt(quantityElement.value);
// console.log("add product",product,quantity)

showProduct(product,quantity);

addPoductToCart(product,quantity)

productElement.value="";
quantityElement.value="";
}

//empty cart
const getCart = ()=>{
    let cart = {};

    //stored in LS
    const cartJSON = localStorage.getItem("cart")
    // console.log(cartJSON)
if(cartJSON){
    cart = JSON.parse(cartJSON);

}

    return cart;
}
const addPoductToCart =(product,quantity)=>{
    const cart = getCart();

      // if existing
if(cart[product]){
cart[product] += quantity
} else{
    cart[product] = quantity;

}

    console.log("cart", cart)

    //Convert to json
const cartJSON = JSON.stringify(cart);
localStorage.setItem("cart", cartJSON)
}

const showProduct =(product,quantity)=>{
const li = document.createElement("li");
li.innerHTML = `
${product}: ${quantity}` //set dynamically
const ul = document.getElementById( "products-container");
ul.appendChild(li)

}


 /**
  * * Display product from local storage
  */

const displayStoredProducts = () =>{
    const cart = getCart();
for(let product in cart){
    const quantity = cart[product]
    console.log(product,quantity)
    showProduct(product,quantity)
}

}
displayStoredProducts()

 /*
  * 1.To save object/array in the LS 
 * 2.Convert the object to JSON  string by using JSON.stringify
 * 3.localStorage.setItem()
 */

/**
 ** 1.To get object/array from the local storage  

 * *2.Get the item from the local storage & it will be in json string
 **3.Convert the JSON string to JS obj by using JSON.parse
 */