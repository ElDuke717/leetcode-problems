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

const maxProfit = (prices) => {
  // set max to negative infinity
  let max = 0;
  // set left to zero, right to 1 for initial indices
  let left = 0;
  let right = 1;
  // initialize profit
  let profit;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      // assign profit to prices right minus left
      profit = prices[right] - prices[left];
      // reassing max
      max = Math.max(max, profit);
    } else {
      // else assign left to right, increment right
      left = right;
    }
    right += 1;
  }
  return max;
};

// Time: O(n)
// 

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
// console.log(maxProfitBrute(bigAssArray))


/*
The time complexity of this solution is O(n), where n is the length of the input array. 

This is because the algorithm makes a single pass through the prices array, incrementing either the left or right pointer with each iteration through the while loop. Each operation inside the loop (comparison, subtraction, reassigning variables, etc.) has a constant time complexity. 

So, despite the fact that there are multiple operations happening within the loop, since none of these operations scale with the size of the input, and since we're only looping through the prices array once, we say the overall time complexity of the algorithm is linear, or O(n).
*/
