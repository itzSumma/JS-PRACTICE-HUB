// array of numbers
const numbers = [10, 45, 67, 23, 89, 67, 34];

// first we create two variables
// largest will store the biggest number
// secondLargest will store the second biggest number
let largest = -Infinity;
let secondLargest = -Infinity;

// loop through the array
for (let num of numbers) {

  // check if current number is greater than largest
  if (num > largest) {

    // if yes then previous largest becomes secondLargest
    secondLargest = largest;

    // update largest with current number
    largest = num;

  }

  // check if number is smaller than largest
  // but greater than secondLargest
  else if (num > secondLargest && num !== largest) {

    // update secondLargest
    secondLargest = num;
  }
}

// print the result
console.log("Second Largest Number:", secondLargest);