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

//get the last index of a space before a word, space before a letter. Use a regex to capture this pattern. Use string.prototype.search()
// save that index to a variable
// pass the last word space index into slice
// slice off the last word, save to a variable
// return the length of that string.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const hold = [];
  for(let i=0; i<s.length; i++) {
    if (s[i] === ' ' && s[i+1] !== ' ') hold.push(i+1);
  }
  console.log(hold);
  console.log(hold[hold.length-1]);
  const index = hold[hold.length-1];
  console.log(index)
  return s.slice(index);
};


lengthOfLastWord('Hello World');
lengthOfLastWord('   fly me   to   the moon  ')

const string = '   fly me   to   the moon  '
console.log(string.length)

const regex1 = new RegExp(' [a-z]', 'g');
regex1.test(string)
console.log(regex1.lastIndex);
regex1.test(string)
console.log(regex1.lastIndex);