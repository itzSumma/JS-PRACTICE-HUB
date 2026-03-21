/**
 * *Find the length of the longest substring without repeating characters.
 * *ANS:
 */
function longestSubstring(str) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < str.length; right++) {
    
    // If duplicate found → remove from left
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    // Update max length
    maxLength = Math.max(maxLength, seen.size);
  }
  return maxLength;
}
console.log(longestSubstring("abcabcbb"));

/**
 * *Count how many times each character appears in a string
 */
function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(charCount("aabbc"));
/**
 * *Remove all falsy values from an array.
 */
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsy([0, 1, false, 2, "", 3, null, "hello"]));
