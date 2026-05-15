/*
 *You are building a personal finance dashboard. You have an array of transaction objects. Each transaction has a description, an amount, and a type ("income" or "expense"). Group these transactions so the user can see their total earnings and total spending separately. 
 */
InPut:const transactions = [
  { description: "Salary", amount: 5000, type: "income" },
  { description: "Grocery", amount: 200, type: "expense" },
  { description: "Freelance Project", amount: 1200, type: "income" },
  { description: "Rent", amount: 1000, type: "expense" },
  { description: "Internet Bill", amount: 50, type: "expense" }
];
//**ANS*/
const transactions = [
  { description: "Salary", amount: 5000, type: "income" },
  { description: "Grocery", amount: 200, type: "expense" },
  { description: "Freelance Project", amount: 1200, type: "income" },
  { description: "Rent", amount: 1000, type: "expense" },
  { description: "Internet Bill", amount: 50, type: "expense" }
];

const groupedTransactions = transactions.reduce((acc, transaction) => {
  const type = transaction.type;

  // Step 1: If the "income" or "expense" key doesn't exist, create it
  if (!acc[type]) {
    acc[type] = [];
  }

  // Step 2: Push the current transaction into the correct array
  acc[type].push(transaction);

  return acc;
}, {});

console.log(groupedTransactions);