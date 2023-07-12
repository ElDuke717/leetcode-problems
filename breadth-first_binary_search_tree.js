// first, we create a new binary search tree by creating a new node with values for every node
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

// Think: breadth first traversal uses a queue, whereas a depth first traversal uses a stack

const breadthFirstValues = (root) => {
  // edge case: if the root is null, return an empty array
  if (root === null) return [];
  // use breadth first traversal to get all values of the tree
  const values = [];
  // use a stack to hold the nodes - we'll traverse differently
  const stack = [root];
  // iterate through the tree with a while loop, pushing values at each level
  while (stack.length > 0) {
    // shift off the first node, in this case we use a queue instead of a stack
    const current = stack.shift();
    // push the value of current to the values array
    values.push(current.val);
    // if there's a left or right value, push it onto the stack
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return values;
};

// n = number of nodes
// Time: O(n)
// Space: O(n)

console.log(breadthFirstValues(a)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// Note - there is no recursive solution for breadth first traversal - the queue order
// prevents the use of recursion as is used in depth first traversal.
