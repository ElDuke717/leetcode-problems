/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  // initiate counter k at 2
  let k = 2;
  // iterate over the array, starting at index of 2
  for (let i = 2; i < nums.length; i += 1) {
    // if nums at current index is not equal to 
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k += 1;
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));


// Alternate Solution:

function removeDuplicates2(nums) {
    let count = 1; // Start from 1 as the first element is always included
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            // Reset count for a new number
            nums[count++] = nums[i];
        } else if (nums[i] === nums[i - 1] && (count < 2 || nums[count - 2] !== nums[i])) {
            // Allow a duplicate if the number before the current position is different
            nums[count++] = nums[i];
        }
    }
    return count;
}


console.log(removeDuplicates2([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 1, 2, 3, 3]));
