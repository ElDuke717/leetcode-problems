   
// First sort the array in ascending order
// Then use the two pointer method from twosumII to iterate to a target
// lo is set to i + 1, hi set to nums.length,
// if sum is less than zero
// if sum is greater than zero, decrement hi

const threeSum = (numbers) => {
  // Initialize an empty array to store the resulting triplet combinations
  const res = [];

  // Sort the input array in ascending order
  const nums = numbers.sort((a, b) => a - b);

  // Iterate over the sorted array
  for (let i = 0; i < nums.length; i += 1) {
    // Check if the current number is different from the previous one to avoid processing duplicates
    if (i === 0 || nums[i] !== nums[i - 1]) {
      // Initialize two pointers, one at the next index from the current number (l),
      // and one at the end of the array (r)
      let l = i + 1;
      let r = nums.length - 1;

      // Continue processing until the two pointers meet
      while (l < r) {
        // Calculate the sum of the three numbers at the current positions
        const threes = nums[i] + nums[l] + nums[r];
        // If the sum is more than 0, decrease the right pointer to try a smaller sum
        if (threes > 0) {
          r -= 1;
        }
        // If the sum is less than 0, increase the left pointer to try a larger sum
        else if (threes < 0) {
          l += 1;
        }
        // If the sum is exactly 0, we found a valid triplet
        else {
          // Add the triplet to the results
          res.push([nums[i], nums[l], nums[r]]);
          // Increase the left pointer
          l += 1;
          // Skip duplicate triplets by moving the left pointer as long as the next number is the same as the current one
          while (nums[l] === nums[l - 1] && l < r) {
            l += 1;
          }
        }
      }
    }
  }
  // Return the array of triplets
  return res;
};

// Call the function with a sample input array
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// pythontutor of this solution https://tinyurl.com/27mpczer 