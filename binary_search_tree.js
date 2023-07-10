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
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

// We then set the left and right values for each node
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
