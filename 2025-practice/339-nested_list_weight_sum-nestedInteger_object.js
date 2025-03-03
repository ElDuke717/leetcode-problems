// Mock NestedInteger for local testing
class NestedInteger {
    constructor(value) {
      this.value = value;
    }
    
    isInteger() {
      return typeof this.value === 'number';
    }
    
    getInteger() {
      return this.isInteger() ? this.value : null;
    }
    
    getList() {
      return !this.isInteger() ? this.value : null;
    }
  }
  
  // Convert a normal JS structure to NestedInteger structure
  function convertToNestedInteger(item) {
    if (typeof item === 'number') {
      return new NestedInteger(item);
    }
    return new NestedInteger(item.map(convertToNestedInteger));
  }
  
  // Test cases - Create arrays of NestedInteger objects
  const testCase1 = [[1,1],2,[1,1]].map(convertToNestedInteger);
  const testCase2 = [1,[4,[6]]].map(convertToNestedInteger);
  
  var depthSum = function(nestedList) {
    const traverse = (list, depth) => {
      let sum = 0;
      for (const element of list) {
        if (element.isInteger()) {
          sum += element.getInteger() * depth;
        } else {
          sum += traverse(element.getList(), depth + 1);
        }
      }
      return sum;
    };
    return traverse(nestedList, 1);
  };
  
  console.log(depthSum(testCase1)); // Should output 10
  console.log(depthSum(testCase2)); // Should output 27
  