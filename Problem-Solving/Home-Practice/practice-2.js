// loop ব্যবহার করে string টি reverse করো।
// original string
const text = "javascript";
// empty string for reversed text
let reversed = "";
// loop from last character
for (let i = text.length - 1; i >= 0; i--) {
  // add characters one by one
  reversed = reversed + text[i];
}console.log(reversed);
// problem:2
// word এর মধ্যে কতটি vowel (a,e,i,o,u) আছে তা বের করো।
const word = "programming";
const vowels = "aeiou";
let count = 0;
// loop through characters
for (let char of word) {
  // check if vowel
  if (vowels.includes(char)) {
    count++;
  }
}
console.log(count);
