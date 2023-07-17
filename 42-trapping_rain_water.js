/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png

Input: heights= [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

// This will take a similar approach to the maxArea problem #11
// we have to calculate the area filled by spaces in between the min highest
// min(l, r) - h[i] is the algorithm to follow
// push each value to an array as long as it's greater than zero

const trap = (heights) => {
  // iterate over the array
  // set left and right pointers
  let left = 0;
  let right = heights.length - 1;
  // set the maxvalues
  let maxLeft = heights[left];
  let maxRight = heights[right];
  // set a result to total the water
  let result = 0;

  // use a while loop to iterate over
  while (left < right) {
    // continue to move pointers depending on value
    if (maxLeft < maxRight) {
      // increment left to move it right
      left += 1;
      // reassign maxLeft to greater of two values
      maxLeft = Math.max(maxLeft, heights[left]);
      // increment result
      result += maxLeft - heights[left];
    } else {
      // decrement right to move it left
      right -= 1;
      // reassign maxRight to greater of two values
      maxRight = Math.max(maxRight, heights[right]);
      // add difference between the maxRight and the pointer
      result += maxRight - heights[right];
    }
  }
  return result;
};

// This solution is constant time

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
