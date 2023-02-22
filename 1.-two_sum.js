// declare twoSum, takes two params, nums an array and target, a number
// JavaScript code

//declare twoSum, takes two parameters, nums (array) and target(number)
function twoSum(nums, target) {
  //declare cache, set to an empty object
  const cache = {};
  // iterate over the nums array
  for (let i = 0; i < nums.length; i++) {
    // declare n, assigned the value of nums[i]
    const n = nums[i];
    // declare diff, difference between target and n
    const diff = target - n;
    // if diff is already in cache as a key,
    if (cache.hasOwnProperty(diff)) {
      // return an array with cache's value at diff and the index i of nums array
      return [cache[diff], i];
    }
    // otherwise, assign the prop cache[n] the index at i
    cache[n] = i;
  }
  return;
}

console.log(twoSum([2, 1, 5, 3], 4));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//Python code - chatGPT will translate this as a class
// class Solution:
//   def twoSum(self, nums: List[int], target: int) -> List[int]:
//     prevMap = {} # val : index

//     for i, n in enumerate(nums):
//       diff = target - n
//       if diff in prevMap:
//         return [prevMap[diff], i]
//       prevMap[n] = i
//     return
