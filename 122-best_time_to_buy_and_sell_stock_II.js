/* 
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

// Strategy
// variable profit holds the sum of all profits made
// follow the same pattern as 121
// the key difference is that after you sell, you buy again and can then sell again, adding to the profit
// essentially, you're reseting the algorithm or starting again at the beginning of the array after the first sale is made

// The solution is actually much simpler - all you need to do is increment total profit if the difference is positive between days.

const maxProfit = (prices) => {
  // declare totalProfit, set to zero
  let totalProfit = 0;
  // loop over the array
  for (let i = 0; i < prices.length - 1; i++) {
    // if prices on the left are less than the value on the right, add the difference to totalProfit
    if (prices[i] < prices[i + 1]) {
      totalProfit += prices[i + 1] - prices[i];
    }
  }
  return totalProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([7,6,4,3,1])); // 0