/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    // declare max assigned -Infinity
    let max = -Infinity;
   // make a helper function that sums the elements in an array 
   const sum = (arr) => {
      let x = 0;
      for (let i = 0; i<arr.length; i++) {
        x += arr[i]
      }
      return x;
    }
    // iterate over all the arrays, using the helper function to sum the elements
    // if sum of array is greater than max, set max to sum
    accounts.forEach((arr) => {
        const arrSum = sum(arr);  // compute sum once
        if (arrSum > max) {
          max = arrSum;  // update max if needed
        }
      });
    // return max 
    return max;
};

const accounts1 = [[1,2,3],[3,2,1]] // 6
const accounts2 = [[1,5],[7,3],[3,5]] // 10

console.log(maximumWealth(accounts1));
console.log(maximumWealth(accounts2));

/*
The time complexity of your function is actually better than \(O(n^2)\) if we analyze it carefully. Here's the breakdown:

1. You have a single `forEach` loop that iterates over each of the sub-arrays in `accounts`. This loop runs \(n\) times where \(n\) is the number of sub-arrays.

2. Inside that loop, you have a `sum` function that takes \(O(m)\) time to run, where \(m\) is the length of each sub-array.

3. The problem is that you're calling `sum(arr)` twice if `sum(arr) > max`. Each call to `sum` runs in \(O(m)\) time. But because the calls are not nested and don't happen for every element, we don't multiply this with the outer loop's complexity.

So, the total time complexity could be looked at as \(O(n \times m)\) due to the `forEach` loop and the `sum` function.

However, you can optimize this function to remove the repeated call to `sum(arr)` like this:

```javascript
var maximumWealth = function(accounts) {
    let max = -Infinity;
    const sum = (arr) => {
      let x = 0;
      for (let i = 0; i < arr.length; i++) {
        x += arr[i];
      }
      return x;
    }
    accounts.forEach((arr) => {
      const arrSum = sum(arr);  // compute sum once
      if (arrSum > max) {
        max = arrSum;  // update max if needed
      }
    });
    return max;
};
```

This will keep your time complexity at \(O(n \times m)\) but remove the unnecessary repeated work, making your function more efficient.
*/