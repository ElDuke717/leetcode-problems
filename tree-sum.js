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

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// console.log(a);

// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

const treeSum = (root) => {
  if (root === null) return 0;
  // use depth first traversal get all values of the tree
  let sum = 0;
  // nodes array to holds each node, initially with root
  const nodes = [root];
  // iterate over the nodes
  while (nodes.length > 0) {
    // pop off each node, grab values of each left and right
    const current = nodes.pop();
    // add the value of the current node to sum
    sum += current.val;
    // push current nodes to the nodes array
    if (current.right !== null) nodes.push(current.right);
    if (current.left !== null) nodes.push(current.left);
  }
  // return sum
  return sum;
};

console.log(treeSum(a)); // 21

// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// console.log(treeSum(a)) // 10
