/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// declare containsDuplicate, takes one param, an array of numbers, nums
var containsDuplicate = function (nums) {
  // declare cache, assigned the value of an empty object
  const cache = {};
  // iterate over nums, if cache does not include element, add element as key, set value to 1
  for (let i = 0; i < nums.length; i++) {
    // if cache includes element, increment cache at element by 1
    cache.hasOwnProperty(nums[i])
      ? (cache[nums[i]] += 1)
      : (cache[nums[i]] = 1);
    if (cache[nums[i]] > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 3])); // true
console.log(containsDuplicate([1, 2, 3])); // false
console.log(containsDuplicate([1, 2, 3, 4, 4])); // true
