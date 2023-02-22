/*
 * @param {string} s
 * @return {boolean}
 */
//declare isPalindrome, has one param, a string
var isPalindrome = function (str) {
  str = str.toLowerCase().replace(/[\s!?,._:;{}\\'"@#()\[\]-`--]+/g, "");
  console.log(str);
  const rev = [...str].reverse().join('');
  return str === rev;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama', 'true')); // true
console.log(isPalindrome('race a car')); // false
console.log('ab_a', isPalindrome('ab_a'), 'true'); // true
console.log('0P', isPalindrome('0P'), 'false'); // false
console.log('race a car', isPalindrome('race a car'), 'false'); // false