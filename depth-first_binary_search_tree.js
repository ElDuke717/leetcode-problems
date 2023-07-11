// This is all that's need to create a basic binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// We create a new binary search tree by creating a new node
// with values for every node
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

// We then set the left and right values for each node
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// ****This is the non-recursive, iterative solution that uses a stack***
// starting at the root, get the left and right values if they exist
// and push them onto an array and then move to the next node
// using a stack data structure allows us to handle the branching values

// Time: O(n)
// Space: O(n)
const depthFirstValues = (root) => {
  // test if root is null
  if (root === null) return [];
  // array to hold values
  const values = [];
  // use the stack array to hold nodes, stack holds the first node
  const stack = [root];
  // use a while loop to iterate over the stack
  while (stack.length > 0) {
    // the current node is the what's popped off the stack
    const current = stack.pop();
    // push the value of current to the values array
    values.push(current.value);
    // as long as current has values
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return values;
};

console.log(depthFirstValues(a)); // [ 'a', 'c', 'f', 'b', 'e', 'd' ]

//* **The Recursive Solution ***/
// Time: O(n)
// Space: O(n)

// This solution uses recursion to traverse down either side of the tree.
const depthFirstValuesRecursive = (root) => {
  // base case
  if (root === null) return [];
  // recurse down the left branch from root
  const leftValues = depthFirstValuesRecursive(root.left);
  // recurse down the right branch from the root
  const rightValues = depthFirstValuesRecursive(root.right);
  // return the root plus the evaluated result from leftValues and rightValues
  return [root.value, ...leftValues, ...rightValues];
};

console.log(depthFirstValuesRecursive(a)); //  [ 'a', 'b', 'd', 'e', 'c', 'f' ]
