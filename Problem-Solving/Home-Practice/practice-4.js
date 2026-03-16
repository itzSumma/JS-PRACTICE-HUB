/**
 * *Check if a string is a palindrome (same forward and backward).
**Example:

Input: "madam"
Input: "hello"
**ANS
 */
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


