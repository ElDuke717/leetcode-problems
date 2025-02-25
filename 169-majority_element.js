/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // declare majority, assigned nums length divided by 2
  const majority = nums.length / 2;
  // declare cache, stores the nums and their number of occurences
  const cache = {};
  // iterate over nums, if it's in the cache, add one, if not, make it's value one, if it's value is greate than majority, return it
  for (let i = 0; i < nums.length; i += 1) {
    if (!cache[nums[i]]) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]] += 1;
    }
    if (cache[nums[i]] > majority) return nums[i];
  }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
