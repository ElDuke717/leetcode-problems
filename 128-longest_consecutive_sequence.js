/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// sort the array - actually we can't because the sort alorithm is O(n log n)
// iterate over the array
// determine the difference between the consective elements
// if the difference is 1, increment the counter,
// if the difference is less than or greater than 1, push the value of counter to
// an array hold, then reset counter to zero

// This solution won't work because it is O(n log n) and probably won't work for arrays that have
// more than one consecutive sequence.
// const longestConseqSeq = (arr) => {
//   // sort the array values
//   const seq = arr.sort((a, b) => a - b);
//   // count assigned to zero
//   let count = 1;
//   // counts holds different counts
//   const hold = [];
//   console.log(seq);
//   // iterate over seq
//   for (let i = 0; i < seq.length; i += 1) {
//     if (seq[i + 1] - seq[i] === 1) {
//       count += 1;
//     }
//     hold.push(count)
//   }
//   console.log(count);
//   console.log(hold);
//   return Math.max(...hold)
// };

// Create a set from the input array to have only unique values and O(1) lookup time
// Iterate over the array and see if the current value minus 1 is in the set
// If it is not, then we know that the current value is the start of a consecutive sequence
// We can then iterate and increment the current value until it is not in the set

const longestConseqSeq = (arr) => {
  // declare set, a new Set based on array to get unique values
  const set = new Set(arr);
  // declare a variable to hold the longest sequence
  let longest = 0;
  // iterate over the array, check if the current value minus 1 is in the set
  // sets do not support access by index, so we have to use a for of loop
  for (const num of set) {
    // Check if the current value minus 1 is in the set
    if (set.has(num - 1)) continue;
    // if it is not, then we know that the current value is the start of a consecutive sequence
    // we can then iterate and increment the current value until it is not in the set
    let current = num;

    const count = 1;
    while (set.has(current + 1)) {
    // increment current and longest
      current += 1;
      longest += 1;
    }
    // update longest, assign the value of the math.max of longest and count
    longest = Math.max(longest, count);
  }

  // return the longest sequence
  return longest;
};

console.log(longestConseqSeq([100, 4, 200, 1, 3, 2]));
console.log(longestConseqSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
