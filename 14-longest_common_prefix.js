/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

 */

// Original Submission

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let current = strs[0];
  let temp = '';

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < current.length; j++) {
      if (current[j] === strs[i][j]) {
        temp += current[j];
      } else {
        break;
      }
    }
    current = temp;
    temp = '';
  }
  return current;
};

// Optimized for Time Complexity


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
};
