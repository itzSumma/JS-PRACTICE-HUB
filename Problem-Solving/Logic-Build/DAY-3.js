/*
 * Find the factorial of a number.
 */

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

/*
 * Check whether a number is prime or not.
 */

function isPrime(num) {
  if (num <= 1) {
    return "Not Prime";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }

  return "Prime";
}

console.log(isPrime(7));
