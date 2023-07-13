// Write a function tree min value that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.  You may assume the tree is non-empty.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Use depth first traversal to visit each node
// compare each value to min, initially set to Infinity

const treeMinValue = (root) => {
  // declare min, assigned to Infinity
  let min = Infinity;
  // declare nodes, initially an array with root in it.
  const nodes = [root];
  // run a while loop over the nodes, adding each to nodes array
  while (nodes.length > 0) {
    // pop off the last node, make it current
    const current = nodes.pop();
    // add conditional, if current.val equals target, return true
    if (current.val < min) {
      min = current.val;
    }
    // push nodes onto the nodes array
    if (current.right !== null) {
      nodes.push(current.right);
    }
    if (current.left !== null) {
      nodes.push(current.left);
    }
  }
  // otherwise return false
  return min;
};

console.log(treeMinValue(a)); // -> -2
