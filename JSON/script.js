 const data = '{"product":"phone","price":15000,"inStock":true}'
const jsonData = JSON.parse(data)
console.log(jsonData.price) // 15000
               //2
const obj = { a: 1, b: 2 }
const json = JSON.stringify(obj)

console.log(typeof obj) //object  
console.log(typeof json)  //string(json is always string)

 const data2 = {product:"phone",price:15000,inStock:true, update:"20 June"};
console.log(data2);
console.log(typeof data2);
 //Obj ===== JSON
 const dataJSON =JSON.stringify(data2) ;
 console.log(dataJSON);
 console.log(typeof dataJSON);
  //JSON ==== Obj
  const jsonData2 = JSON.parse(dataJSON);
  console.log(jsonData2.product);
  console.log(jsonData2.price);