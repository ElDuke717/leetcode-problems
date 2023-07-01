/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// solve first recursively, then without recursion.

/**
 * @param {string} s
 * @return {boolean}
 */

//declare isPalindrome, has one param, a string
var isPalindrome = function (s) {
  // assing s the value of s with punctuation and spaces removed.
  s = s.toLowerCase().replace(/[^\w]+/gi, "");
  //base case:
  // if str.length === 0, return true
  if (s.length === 0 || s.length === 1) {
    return true;
    // test if first and last element are the same
  } else if (s[0] === s[s.length - 1]) {
    // recursive case
    s = s.slice(1, s.length - 1);
    return isPalindrome(s);
  }
  return false;
};

//console.log(isPalindrome('racecar')); // true
console.log(isPalindrome("A man, a plan, a canal: Panama", "true")); // true
console.log(isPalindrome("race a car")); // false
console.log("ab_a", isPalindrome("ab_a"), "true"); // true
console.log("0P", isPalindrome("0P"), "false"); // false
console.log("race a car", isPalindrome("race a car"), "false"); // false

// function palindrome(string) {
//   string = string.toLowerCase().replace(/[^\w\s]|_/g, '');
//   if (string.length === 0) return true;
//   else if (string[0] === string[string.length - 1]) {
//     string = string.slice(1, string.length - 1);
//     return palindrome(string);
//   }
//   return false;
// }

// console.log(palindrome('A man, a plan, a canal: Panama'));
