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

/**
 * *Find the first character that does not repeat.
 **Input: "aabbcde"
 **ANS:
*/
function firstUnique(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
}
console.log(firstUnique("aabbcde"));

/*
*Find two numbers that add up to a target.
*Input: [2, 7, 11, 15], target = 9
*ANS:
*/
function twoSum(arr, target) {
  let map = {};
  for (let num of arr) {
    let diff = target - num;

    if (map[diff]) {
      return [diff, num];
    }
    map[num] = true;
  }
}
console.log(twoSum([2,7,11,15], 9)); 