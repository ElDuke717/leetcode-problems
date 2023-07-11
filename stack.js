// This is a general stack implementation

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  
  console.log(a);
  
    // This is a general stack implementation - we use the node class to construct nodes for the stack
  class Stack {
    constructor(node) {
      this.top = node;
    }
  // the push method adds a node to the top of the stack
    push(node) {
     // the next property of the node points to the former top of the stack
      node.next = this.top;
     // the top of the stack is now the node 
      this.top = node;
    }
  
    pop() {
      // edge case: if the stack is empty, return null
      if (this.top === null) {
        return null;
      }
      // node is assigned to the top node of the stack
      let node = this.top;
      // top is assigned to the next node in the stack - this removes the top node from the stack
      this.top = this.top.next;
      node.next = null; // Clear the reference to next
      // return the node that was removed from the stack
      return node;
    }
    // returns the top node of the stack
    peek() {4
      return this.top;
    }
  }
  
  // A node is added to the top of the stack when it is constructed
  let stack = new Stack(a);
  console.log(stack);
  // Add more nodes to the stack with the push method.
  stack.push(b);
  stack.push(c);
  
  console.log(stack.peek()); // Node { val: 'c', next: Node { val: 'b', next: Node { val: 'a', next: null } } }
  
  let popped = stack.pop();
  console.log(popped); // Node { val: 'c', next: null }
  
console.log(stack.peek()); // Node { val: 'b', next: Node { val: 'a', next: null } }
  
