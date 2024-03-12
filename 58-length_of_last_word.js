/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.
*/

//Example:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

//i: string
//o: number

// trim the original string to remove trailing spaces
// find the last consecutive sequence of characters that are not letters
// iterate over the string phrase backward and add the first character
// continue adding characters until you reach a space
// count all characters
// when reach first space after a character, return the count
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let chars = 0;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] !== ' ') {
      chars += 1;
    } else {
      break;
    }
  }
  return chars;
};

const phrase1 = 'Hello World';
const phrase2 = '   fly me   to   the moon  ';
const phrase3 = 'luffy is still joyboy';
const phrase4 = ' a ';
const phrase5 = ' ';
const phrase6 = 'a';

console.log(`${phrase1} last word length is`, lengthOfLastWord(phrase1)); // 5
console.log(`${phrase2} last word length is`, lengthOfLastWord(phrase2)); // 4
console.log(`${phrase3} last word length is`, lengthOfLastWord(phrase3)); // 6
console.log(`${phrase4} last word length is`, lengthOfLastWord(phrase4)); // 1
console.log(`${phrase5} last word length is`, lengthOfLastWord(phrase5)); // 6
console.log(`${phrase6} last word length is`, lengthOfLastWord(phrase6)); // 6
