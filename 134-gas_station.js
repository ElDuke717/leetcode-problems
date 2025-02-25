/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

 

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

Example 2:

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
Explanation:
You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 0. Your tank = 4 - 3 + 2 = 3
Travel to station 1. Your tank = 3 - 3 + 3 = 3
You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
Therefore, you can't travel around the circuit once no matter where you start.

 

Constraints:

    n == gas.length == cost.length
    1 <= n <= 105
    0 <= gas[i], cost[i] <= 104

LeetCode 134 is a problem titled "Gas Station". Here's a brief explanation:

There are N gas stations along a circular route, where the amount of gas at each station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from station `i` to its next station `(i+1)`. You begin the journey with an empty tank at one of the gas stations.

The problem is to determine if you can complete the circuit once starting at any station. If so, return the starting gas station's index. If there is more than one solution, return the smallest one. If there is no solution, return -1.

The problem is solved by checking if the total gas is greater than or equal to the total cost. If it is, there must be a solution. Then, we find the starting point by iterating over the gas and cost arrays and maintaining a tank variable. If at any point the tank becomes negative, we reset it to zero and set the starting point to the next station.

Here's a JavaScript solution for the problem:

```javascript
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let start = 0;
    let tank = 0;

    for(let i = 0; i < gas.length; i++){
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];
        if(tank < 0){
            start = i + 1;
            tank = 0;
        }
    }

    if(totalGas < totalCost){
        return -1;
    } else {
        return start;
    }
};
```

This solution first checks if the total gas is enough to cover the total cost. If not, it returns -1. If it is, it then iterates over the gas and cost arrays, updating the tank with the difference between the gas and cost at each station. If at any point the tank is less than 0, it sets the start to the next station and resets the tank to 0. Finally, it returns the start station.


*/

// The problem is to figure out if the circuit can be completed once starting at any gas station (index number).  If starting at a particular index allows it, record that any other indices that allow it and return the smallest index.  If not, return -1.

// Start with gas at zero, add gas at each index and

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// Function to find the starting gas station index from where you can complete the circuit
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0; // Total amount of gas available
    let totalCost = 0; // Total cost to travel between all stations
    let start = 0; // Starting gas station index
    let tank = 0; // Current gas in the tank
  
    // Iterate through all gas stations
    for (let i = 0; i < gas.length; i++) {
      totalGas += gas[i]; // Add gas available at current station to total gas
      totalCost += cost[i]; // Add cost to move to next station to total cost
      tank += gas[i] - cost[i]; // Update tank gas after reaching the next station
  
      // If tank is negative, you can't reach the next station from the current starting point
      if (tank < 0) {
        start = i + 1; // Update start to the next station
        tank = 0; // Reset tank because you're starting afresh from the next station
      }
    }
  
    // After checking all stations, if total gas is less than total cost,
    // it's impossible to complete the circuit
    if (totalGas < totalCost) {
      return -1;
    } else {
      // Otherwise, return the starting station index
      return start;
    }
  };
  

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));
