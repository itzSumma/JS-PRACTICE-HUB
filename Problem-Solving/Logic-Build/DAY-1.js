/*
*Find two numbers that add up to a target.(Input: "listen", "silent")
*ANS:
*/
function isAnagram(str1, str2) {
  let s1 = str1.split("").sort().join("");
  let s2 = str2.split("").sort().join("");
  return s1 === s2;
}
console.log(isAnagram("listen", "silent")); 

/*
*Find the number that appears most times in an array.
* Input: [1, 2, 2, 3, 3, 3, 4]
*ANS:
*/
function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;
  let result;
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      result = num;
    }
  }
  return result;
}
console.log(mostFrequent([1,2,2,3,3,3,4])); 

