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
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [1, 2, 3, 4, 5], target: 8, expected: [2, 4] },
  { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
  { nums: [1, 1, 1, 1, 1], target: 2, expected: [0, 1] },
  { nums: [1, 2, 5, 6, 7], target: 12, expected: [3, 4] },
  { nums: [5, 75, 25], target: 100, expected: [1, 2] },
  { nums: [3, 5, -4, 8, 11, 1, -1, 6], target: 10, expected: [2, 4] },
];

testCases.forEach(({ nums, target, expected }, index) => {
  const result = twoSum(nums, target);
  console.log(
    `Test Case ${index + 1}: `,
    result.toString() === expected.toString()
      ? 'Passed'
      : `Failed (Expected: ${expected}, Got: ${result})`,
  );
});
