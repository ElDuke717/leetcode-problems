/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

 

Constraints:

    3 <= nums.length <= 3000
    -105 <= nums[i] <= 105

BCR stands for "Best Conceivable Runtime" in the context of algorithms. It is a theoretical lower bound on the time complexity of an algorithm. In other words, it's the fastest you could possibly hope the algorithm to be given the nature of the problem it's solving. 

BCR is a useful concept when trying to optimize algorithms because it gives you an idea of when you can stop optimizing. If your algorithm is already running at its BCR, then any further attempts at optimization are likely to be a waste of time.

For example, if you have a sorting algorithm, the BCR is O(n log n) time. Any comparison-based sorting algorithm must be at least this time complexity because this is the minimum number of comparisons needed to sort n items. If your algorithm already runs in O(n log n) time, then it's unlikely you'll be able to optimize it further.

BCR for this problem is O(n^2)

This function finds all unique triplets in the array which gives the sum of zero. It uses two pointers technique (left and right pointers) and the property of sorted arrays to find these triplets.

The way the solution is set up, `nums[i]` will never be duplicated in the triplet because the other two elements are chosen from the remaining array after index `i`, using two pointers `l` and `r`. `l` starts from `i + 1`, so it will always be a distinct element after `nums[i]`. Similarly, `r` starts at the end of the array and moves towards `l`, it also will be a distinct element after `nums[i]`.

Also, the algorithm has a check to prevent processing the same number twice consecutively: 

```javascript
if (i === 0 || nums[i] !== nums[i - 1]) { 
  // the rest of the loop
}
```
This check ensures that if the same number appears more than once in the input array (since the array is sorted), the algorithm will only process it once, preventing duplicate triplets where `nums[i]` is the first number.

Therefore, in the triplets formed, `nums[i]` does not overlap or duplicate with the other numbers in the triplets.

    */

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