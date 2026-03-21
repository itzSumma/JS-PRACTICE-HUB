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