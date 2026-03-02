
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.name)
//     console.log(data.email)
//     console.log(data.phone)
//   })
  
  //Async/await
  async function  getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await res.json()
    console.log(data.name)
    console.log(data.email)
    console.log(data.phone)
  }
  getUser()
   

  // my practice
   async function getUser2() {
    const rest = await fetch("https://jsonplaceholder.typicode.com/users")
    const data2 = await rest.json()
    console.log(data2.length)
     console.log(data2[0].name)
     console.log(data2[1].name)
     console.log(data2[3].name)
    
   }getUser2()