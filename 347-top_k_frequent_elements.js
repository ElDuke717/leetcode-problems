/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // declare cache, an object to hold values and their count.
  const cache = {};
  // iterate over nums, if element is not in cache, add it as key and value at 1, or add 1
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] ? (cache[nums[i]] += 1) : (cache[nums[i]] = 1);
  }
  // result is assigned the value of the entries on cache, sorted in descending order by value,
  // then the k elements are sliced, lastly, map is applied to return an array of just the keys
  const result = Object.entries(cache)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((entry) => entry[0]);
  // return result
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]
console.log(topKFrequent([1], 1)); // [ '1' ]
console.log(topKFrequent([1, 2], 2)); // [ '1', '2' ]
