/*
 You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*/

// declare canJump, takes one parameter an array of numbers
// declare goal equal to array length - 1, goal is the index of the last element
// declare index, initially set to zero
// index is incremented by each elements value
// continue to iterate while index is less than goal
// if index === goal, return true
// iterate over the array, starting at zero index, use a while loop?
// if the sum of the value at each index added together equals goal, return true
// otherwise return false

function canJump(nums) {
    let maxReach = 0; // The furthest we can reach
    const goal = nums.length - 1;
  
    for (let i = 0; i <= maxReach && i <= goal; i++) {
      // Update maxReach if the current index + nums[index] is farther
      maxReach = Math.max(maxReach, i + nums[i]);
      // If maxReach is equal to or has surpassed the goal, return true
      if (maxReach >= goal) {
        return true;
      }
    }
  
    // If the loop completes without returning true, reaching the goal is impossible
    return false;
  }

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([0])); // true
console.log(canJump([1])); // true
console.log(canJump([2, 5, 0, 0])); // true
/*
Figure out the condition - 
if nums[index] + index > goal or nums[index] === 0, return false
if nums
 */
