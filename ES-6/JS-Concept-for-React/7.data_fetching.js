// const fetchUsers = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data);
//       throw new Error("-----fsadhfhsdfhdefunknown error");
//     })
//     .catch((e) => console.log(e.message, "catch block triggered"));
// };
// fetchUsers();

const fetchUsers = async () => {
  // Loading true
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // throw new Error("unknown error");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message, "err block triggered");
  } finally {
    console.log("I am finally block, always triggered");
    // Loading false
  }
};
fetchUsers();
