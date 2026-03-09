// loop ব্যবহার করে string টি reverse করো।
// original string
const text = "javascript";
// empty string for reversed text
let reversed = "";
// loop from last character
for (let i = text.length - 1; i >= 0; i--) {
  // add characters one by one
  reversed = reversed + text[i];
}
console.log(reversed);
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
// problem-3
// sentence থেকে সবচেয়ে বড় word বের করো।
const sentence = "I love learning javascript programming";
// convert sentence to array
const words = sentence.split(" ");
let longest = "";
// loop through words
for (let word of words) {
  // check word length
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log(longest);

// যে student এর mark সবচেয়ে বেশি তার name বের করো।
const students = [
  { name: "Rahim", mark: 75 },
  { name: "Karim", mark: 90 },
  { name: "Sakib", mark: 85 },
  { name: "Tamim", mark: 95 },
];
let highest = 0;
let topStudent = "";
// loop through students
for (let student of students) {
  // check highest mark
  if (student.mark > highest) {
    highest = student.mark;
    topStudent = student.name;
  }
}
console.log(topStudent);
