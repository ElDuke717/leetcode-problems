/*
 Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  // intiate a variable to hold the length
  let i = 0;
  // loop over the array, starting at the second index
  for (let j = 1; j < nums.length; j += 1) {
    // check to see if the current element is the same as the previous value
    if (nums[j] !== nums[i]) {
      i += 1;
      // if not the same, increment the counter
      nums[i] = nums[j];
    }
  }

  // return the count
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
