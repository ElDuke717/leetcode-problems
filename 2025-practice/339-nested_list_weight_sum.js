/*
You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.

 */

// Determine the depth of the nested list
// Use a recursive function to traverse the nested list
// For each element, if it's an integer, add it to the sum
// If it's a list, recursively call the function with the list and depth + 1
// Return the sum

class NestedInteger {
  constructor(value, isInt = false) {
    this.value = value;
    this.isInt = isInt;
  }

  isInteger() {
    return this.isInt;
  }

  getInteger() {
    return this.isInt ? this.value : null;
  }

  getList() {
    return this.isInt ? [] : this.value; // Assuming 'value' is the list
  }
}

/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList) {
  const traverse = (list, depth) => {
    let sum = 0;
    for (const element of list) {
      if (Array.isArray(element)) {
        // If element is an array, recursively traverse it
        sum += traverse(element, depth + 1);
      } else if (typeof element === 'number') {
        // If element is a number, add to sum with depth weighting
        sum += element * depth;
      }
    }
    return sum;
  };
  // recursive call to traverse, allowing for the depth to be passed in
  return traverse(nestedList, 1);
};


// Test cases
console.log(depthSum([[1,1],2,[1,1]])); // 10
console.log(depthSum([1,[4,[6]]])); // 27
console.log(depthSum([[1,1],2,[1,1]])); // 10