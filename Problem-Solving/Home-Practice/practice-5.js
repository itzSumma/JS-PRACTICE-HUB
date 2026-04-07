// /*string এ কয়টা vowel আছে বের করো
function countVowels(str){
  let count = 0
  let vowels = "aeiou"
  
  for(let char of str){
    if(vowels.includes(char)){
      count++
    }
  }
  
  return count
}

console.log(countVowels("javascript"))

/**
 * *even number return করো  [1,2,3,4,5,6]
 */
function evenNumbers(arr){
  return arr.filter(num => num % 2 === 0)
}

console.log(evenNumbers([1,2,3,4,5,6]))

/**
 * *Capitalize First Letter
 */
function capitalizeWords(str){
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

console.log(capitalizeWords("hello world"))