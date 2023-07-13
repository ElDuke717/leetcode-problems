/** 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find 
two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] 
and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2]
of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

// input array is already sorted in ascending order
// iterate over the numbers array, subtract each number from the target
// check to see if the array includes the value
// if so, then push the index +1 to a results array
// return the results

// This solution does not quite work because it does not account for duplicate values, does not account for the target being a negative number, and does not account for the target being zero.

// const twoSum = (numbers, target) => {
//   // array results stores indices
//   const results = [];
//   // iterate over numbers, if numbers array includes difference, push the index plus 1
//   numbers.forEach(
//     (num, i) => numbers.includes(target - num) && numbers[i] !== target - num && results.push(i + 1)
//   );
//   return results;
// };

// We need to use a solution that uses two pointers.  Since the array is already sorted, we can use this to our advantage.
// We can declare two pointers, one at the beginning and one at the end.
// If the sum of the two pointers is greater than the target, we can move the right pointer to the left.
// If the sum of the two pointers is less than the target, we can move the left pointer to the right.'
// If the sum of the two pointers is equal to the target, we can return the indices of the two pointers.
// If the target is not found, we can return an empty array.

const twoSum = (numbers, target) => {
  // declare two pointers, one at the beginning and one at the end
  let left = 0;
  let right = numbers.length - 1;
  // iterate over the array
  while (left < right) {
    currentSum = numbers[left] + numbers[right];
    // if the current sum is equal to the target, return the indices
    if (currentSum > target) {
      right -= 1;
    } else if (currentSum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
  // if the target is not found, return an empty array
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1));
[1, 2];
console.log(twoSum([0, 0, 3, 4], 0)); // [1, 2]
