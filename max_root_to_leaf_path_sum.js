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

// take a depth first approach - add up the result of each node
// push the sum of each node to an array
// return the max of the array


// Here's one potential solution
// const maxPathSum = (root) => {
//   // Base case, if the root doesn't exist or is falsy, return zero
//   if (!root) return 0;

//   // calculate max sum for left and right subtrees
//   // uses recursion to work down the tree
//   const leftMax = Math.max(0, maxPathSum(root.left));
//   const rightMax = Math.max(0, maxPathSum(root.right));

//   // return maximum path sum
//   return root.val + Math.max(leftMax, rightMax);
// };

// Structy solution
const maxPathSum = (root) => {
  // if the root is null, return the smallest possible value
  if (root === null) return -Infinity;
  // if both left and right are null, then it's leaf node, return it's value
  if (root.left === null && root.right === null) return root.val;
  // maxChild is assigned the max value of the path each time it passes
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
  
  return root.val + maxChild;
};

console.log(maxPathSum(a)); // -> 18

/**   EXPLANATION OF SOLUTION
Let's break down the code:

```javascript
const maxPathSum = (root) => {
```
We are declaring a function called `maxPathSum` that takes a root node of a binary tree as an argument.

```javascript
  if (root === null) return -Infinity;
```
If the passed node is `null`, meaning we've traversed to an end without a child node in the tree, we return `-Infinity`. This is used as a base case for our recursion and also to ensure we don't try to access properties of `null`.

```javascript
  if (root.left === null && root.right === null) return root.val;
```
If the current node has no child nodes (both `root.left` and `root.right` are `null`), it means we've reached a leaf node. For a leaf node, the maximum path sum is the value of the node itself. Hence, we return `root.val`.

```javascript
  const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
```
This line of code is where the recursion occurs. We make recursive calls to `maxPathSum()` for both the left and right child of the current node. This allows us to explore all paths in the tree from the current node. We use `Math.max()` to select the larger of the two sums. This effectively means we're selecting the path (either left or right) that yields the maximum sum.

```javascript
  return root.val + maxChild; 
};
```
Finally, we return the sum of the current node value (`root.val`) and the maximum sum obtained from either of its subtrees (`maxChild`). This represents the maximum path sum from the current node downwards.

This function will return the maximum path sum in the binary tree starting from the root node down to a leaf. It's worth noting that the function assumes all node values are non-negative, as it returns `-Infinity` when `root` is `null`. If negative values can be present in the tree, adjustments would need to be made to this code.
*/