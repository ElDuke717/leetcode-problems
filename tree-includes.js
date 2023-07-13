//  Write a function, treeIncludes, that takes in the root of a binary tree and a target value.  The function should return a boolean indicating whether or not the tree contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// Use depth first traversal to visit each node
// if target is encountered, return true
// use the iterative approach

// Depth First Version
const treeIncludesD = (root, target) => {
  // edge case - if root is null, return false
  if (root === null) return false;
  // declare nodes, initially an array with root in it.
  const nodes = [root];
  // run a while loop over the nodes, adding each to nodes array
  while (nodes.length > 0) {
    // pop off the last node, make it current
    const current = nodes.pop();
    // add conditional, if current.val equals target, return true
    if (current.val === target) {
      return true;
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
  return false;
};

console.log(treeIncludesD(a, "e")); // -> true

// Recursive Depth First Version
const treeIncludesRD = (root, target) => {
  // first base case, if root is null, return false
  if (root === null) return false;
  // second base case, if root.val equals target, return true
  if (root.val === target) return true;
  // recursive case, return treeIncludes on left and right nodes
  const leftNodes = treeIncludesRD(root.left, target);
  const rightNodes = treeIncludesRD(root.right, target);
  // return leftNodes || rightNodes - if either is true, return true
  return leftNodes || rightNodes;
};

console.log(treeIncludesRD(a, "e"));

// Breadth First Version
const treeIncludesB = (root, target) => {
  // edge case - if root is null, return false
  if (root === null) return false;
  // declare nodes, initially an array with root in it.
  const nodes = [root];
  // run a while loop over the nodes, adding each to nodes array
  while (nodes.length > 0) {
    // shift off the first node, make it current
    const current = nodes.shift();
    // add conditional, if current.val equals target, return true
    if (current.val === target) {
      return true;
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
  return false;
};

console.log(treeIncludesB(a, "e")); // -> true
