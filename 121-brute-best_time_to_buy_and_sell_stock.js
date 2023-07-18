/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 

Constraints:

    1 <= prices.length <= 105
    0 <= prices[i] <= 104
    
*/

// subtract each element from each subsequent element
// declare max, set to negative infinity
// if difference is greater than max, assign new value to max
// return max

/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force, non - optimized solution

/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force, non - optimized solution

const maxProfitBrute = (prices) => {
  // max holds current max
  let max = -Infinity;
  // iterate over the arrays
  for (let i = 0; i < prices.length; i += 1) {
    for (let j = i + 1; j < prices.length; j += 1) {
      // subract i from jth element
      const diff = prices[j] - prices[i];
      // compare with max, if greater, then reassign
      if (diff > max) max = diff;
    }
  }
  // return max 0 if result is less than zero
  return max < 0 ? 0 : max;
};

console.log(maxProfitBrute([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfitBrute([7, 6, 4, 3, 1])); // 0


/*
This is not the most efficient solution as its time complexity is O(n^2), where n is the length of the prices array. But it will produce the correct results. If you're experiencing any problems with this code, please provide more details.
*/
