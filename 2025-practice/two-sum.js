/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Create a cache object to store the numbers and their indices
// Iterate over the array, and for each number, check if the target - number exists in the cache
// If it does, return the indices of the two numbers
// Otherwise, add the number to the cache with its index
// If no solution is found, return an empty array
var twoSum = function(nums, target) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (cache[diff] !== undefined) {
            return [cache[diff], i];
        }
        cache[nums[i]] = i;
    }
    return [];
};

// Test Case 1
function testCase1() {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    console.log(result);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Expected ${expected}, but got ${result}`);
  }
  
  // Test Case 2
  function testCase2() {
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    const result = twoSum(nums, target);
    console.log(result);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Expected ${expected}, but got ${result}`);
  }
  
  // Test Case 3
  function testCase3() {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    console.log(result);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Expected ${expected}, but got ${result}`);
  }
  
  // Call the test cases
  testCase1();
  testCase2();
  testCase3();
  