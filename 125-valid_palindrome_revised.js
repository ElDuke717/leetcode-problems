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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '');
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

console.log(
  'A man, a plan, a canal: Panama',
  isPalindrome('A man, a plan, a canal: Panama'),
  'true'
); // true
console.log('race a car', isPalindrome('race a car'), 'false'); // false
console.log('ab_a', isPalindrome('ab_a'), 'true'); // true
console.log('0P', isPalindrome('0P'), 'false'); // false
console.log('race a car', isPalindrome('race a car'), 'false'); // false
console.log(
  '"Marge, let\'s "[went]." I await {news} telegram."',
  isPalindrome('Marge, let\'s "[went]." I await {news} telegram."')
);
