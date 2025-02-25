/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2

 */

// This problem is very similar to jump game #55, just in this case we implement a counter and return the count rather than a boolean.  Also, it's assumed that we'll always reach the end of the array, it's just a matter of counting up all the jumps

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;
    let maxReach = nums[0]; // The furthest we can reach after the first jump
    let nextMaxReach = nums[0]; // The furthest we can reach on the next jump
    let count = 1; // Start count at 1 because a jump from the first position is always needed unless the array has a single element
    
    for (let i = 1; i < nums.length; i++) { // Start from second element
        if (i > maxReach) {
            // If i is beyond maxReach, it means we can't reach this point
            return -1;
        }
        nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
        if (i === maxReach && i < nums.length - 1) { // Only increment count if we've reached maxReach and we're not at the last element
            maxReach = nextMaxReach;
            count++;
        }
    }
    return count;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([1, 2, 3, 4, 5])); // 3
console.log(jump([0])); // 0
console.log(jump([3, 2, 1, 0, 4])); //
console.log(jump([1, 2, 1, 1, 1])); // 3
