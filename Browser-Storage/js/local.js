const addNumberToLS = () => {
  const number = Math.floor(Math.random() * 100); /// a simple random equation
  console.log(number);
  localStorage.setItem("number", number);
};

const setObjToLS = () => {
  const user = {
    name: "Rahim",
    products: 3,
    price: 300,
  };
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
};

const readObjToLS =()=>{
const userJSON =localStorage.getItem("user");
console.log(userJSON);
const userObj =JSON.parse(userJSON);
console.log(userObj);
console.log(userObj.name);
console.log( typeof userJSON);

}
const getNumbersFromLS = () => {
  const number = localStorage.getItem("number");
  console.log("from saved local storage", number);
};
