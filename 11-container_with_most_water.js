/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

To understand this problem, check out the graph example on Leetcode.  Essentially, you have to determine the largest area of bar height combinations.  
*/

// Determine the greatest area
// The greatest area is determined by the difference between each element times the distance from each other.
// iterate over each element
// the highest it can be is the smaller of the two elements
// multiply smaller value by distance from i to j?
// Push the area to an array, then get the max from the array

// we should use two pointers in this case, but how/where do we implement them?

const maxAreaBrute = (heights) => {
  // max area is initially assigned zero
  let max = 0;
  // iterate and compare the differences
  for (let i = 0; i < heights.length; i += 1) {
    for (let j = i + 1; j < heights.length; j += 1) {
      // calculate the height, which is the smaller of i and j
      const height = Math.min(heights[i], heights[j]);
      // get the width, which is the difference between j and i
      const width = j - i;
      // get the area, height * width;
      const area = height * width;
      // assign maxArea to the higher value
      max = Math.max(area, max);
    }
  }
  // return the max
  return max;
};

// maxAreaBrute is O(n^2) because of the nested for loops, as the length of the array increases, the steps increase exponentially

console.log(maxAreaBrute([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

const maxAreaOpt = (heights) => {
  // assign maxArea to zero
  let maxArea = 0;
  // assign left to zero to get first element
  let left = 0;
  // assign right to last element
  let right = heights.length - 1;

  // while loop to iterate over and generate areas
  while (left < right) {
    // get the height, the lowest of values
    const height = Math.min(heights[left], heights[right]);
    // the width is right - left, the distance between the two
    const width = right - left;
    // are is height * width
    const area = height * width;
    // maxArea is reassigned to the higher value
    maxArea = Math.max(maxArea, area);

    // continue to move pointers depending on value
    if (heights[left] < heights[right]) {
      // increment left to move it right
      left += 1;
    } else {
      // decrement right to move it left
      right -= 1;
    }
  }
  return maxArea;
};

console.log(maxAreaOpt([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxAreaOpt([1, 1])); // 1
