//Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
  if (
    !Array.isArray(nums) ||
    nums.some((x) => typeof x !== "number") ||
    nums.length < 3
  )
    return "invalid entry";
  nums.sort((a, c) => a - c);
  console.log(nums[0], nums[1], nums[nums.length - 1]);
  console.log(
    nums[nums.length - 1],
    nums[nums.length - 2],
    nums[nums.length - 3]
  );
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

// console.log(maximumProduct([1,2,3]))
// console.log(maximumProduct([1,2,3,4]))
// console.log(maximumProduct([-1,-2,-3]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));
