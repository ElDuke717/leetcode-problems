/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105

Follow up:

    Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
    Could you do it in-place with O(1) extra space?

 */

// # Using JavaScript Methods
// slice of the end of the array with k elements length
// concat the sliced end to the beginning of the array

// # Programmatic Approach
// make a separate counter that starts at 0,
// subtract the counter from the length of the array
// incremement the counter at each iteration
// with each iteration, take element at nums[counter], assign it to the first element
// increment the index of each existing element

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   let rotate;

//   for (let i = 0; i < k; i += 1) {
//     rotate = nums.pop();
//     nums.unshift(rotate);
//   }
//   return nums;
// };

// The most efficient and easier to understand solution:

var rotate = function (nums, k) {
  k = k % nums.length; // Handle rotations larger than array length - use the remainder for k
  reverse(nums, 0, nums.length - 1); // Step 1: Reverse the whole array
  reverse(nums, 0, k - 1); // Step 2: Reverse the first k elements - re-reverses the first elements
  reverse(nums, k, nums.length - 1); // Step 3: Reverse the rest, the original elements that were at the start

  // Helper function to reverse a portion of the array
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
