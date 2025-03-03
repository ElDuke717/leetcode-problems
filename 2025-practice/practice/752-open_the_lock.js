/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

*/


/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

// Start with an initial state "0000"
// Use BFS to explore all possible combinationts by turning one wheel at a time
// Keep track of visited states to avoid cycles
// Skip any deadend combinations
// Return the minimum number of moves when the we reach the target
// Return -1 if we can't reach the target

var openLock = function(deadends, target) {
    const deadendSet = new Set(deadends); // Convert the deadends to a Set for faster look-ups
    if (deadendSet.has('0000')) return -1;  // '0000'  won't allow the rotation to start, so return -1
    if (target === '0000') return 0; // Already at target
    
    const queue = [['0000', 0]]; // [code, steps] 
    const visited = new Set(['0000']);
    
    while (queue.length > 0) {
        const [code, moves] = queue.shift(); // Get the next combination to check, the queue fills up with combinations and moves taken 
        
        if (code === target) return moves; // return the moves needed to reach the combination
        
        // Generate all possible next combinations by turning one wheel at a time, 4 positions x 2 directions = 8 possible combinations
        for (let i = 0; i < 4; i++) {
        const digit = parseInt(code[i]);
      
        // Turn digit up
        const up = (digit === 9) ? 0 : digit + 1;
        const upCode = code.substring(0, i) + up + code.substring(i + 1); // Builds a new string with the modified digit
        
        // Turn digit down
        const down = (digit === 0) ? 9 : digit - 1;
        const downCode = code.substring(0, i) + down + code.substring(i + 1); // Similar to above, but with the digit turned down
        
        // Check and add neighbors to the queue
        for (const neighbor of [upCode, downCode]) {
            if (!visited.has(neighbor) && !deadendSet.has(neighbor)) { // Check if the neighbor is not a deadend and hasn't been visited
            visited.add(neighbor); // Mark the neighbor as visited
            queue.push([neighbor, moves + 1]); // Add the neighbor to the queue with the moves taken
            }
        }
    }
  }
  
  return -1; // If we can't reach the target
};



 // Test cases
 function runTests() {
    const tests = [
      {
        description: "Starting point is a deadend",
        deadends: ["0000"],
        target: "8888",
        expected: -1
      },
      {
        description: "Target is the initial code (should be 0 moves)",
        deadends: ["1111"], // arbitrary deadend that doesn't affect the initial state
        target: "0000",
        expected: 0
      },
      {
        description: "No deadends and a reachable target ('8888')",
        deadends: [],
        target: "8888",
        // Each digit from 0 to 8 requires a minimum of 2 moves (0->9->8)
        // Total moves = 2 * 4 = 8
        expected: 8
      },
      {
        description: "LeetCode example test case",
        deadends: ["0201", "0101", "0102", "1212", "2002"],
        target: "0202",
        expected: 6
      },
      {
        description: "Target unreachable due to surrounding deadends",
        deadends: ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
        target: "8888",
        expected: -1
      }
    ];
    
    tests.forEach((test, index) => {
      const result = openLock(test.deadends, test.target);
      console.log(`Test ${index + 1} - ${test.description}: expected ${test.expected}, got ${result}`);
    });
  }
  
  runTests();