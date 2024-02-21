/* This LeetCode problem you're tackling is a common one, often referred to as "Merge Sorted Array." It tests your understanding of array manipulation and sorting algorithms. Let's break down the prompt for clarity and then discuss a strategy for solving it.

Understanding the Prompt:
Given: Two sorted integer arrays nums1 and nums2.
Array Sizes: nums1 has a size of m + n, where m is the number of actual initial elements, and n is the number of elements in nums2. The last n elements in nums1 are set to 0 and should be replaced during the merge. nums2 has a size of n.

Objective: Merge nums2 into nums1 so that nums1 becomes a single sorted array. The merging should be done in-place in nums1, utilizing the 0 placeholders to fill in the elements of nums2.

Strategy:
To solve this, you'll want to take advantage of the fact that both arrays are already sorted. You can start merging from the end of nums1 (from the last non-zero element) and nums2 (from its last element), comparing which one has the larger value and placing the larger value in the correct position from the end of nums1. This way, you avoid overwriting any elements in nums1 that need to be merged.

Pointers: Use three pointers. Let's call them i, j, and k.

i starts at m - 1, the last actual element of nums1.
j starts at n - 1, the last element of nums2.
k starts at m + n - 1, the last position in nums1 where the merged elements should be placed.
Merging: Compare the elements at i and j. Place the larger one at index k in nums1 and move the corresponding pointer (i or j) and k backwards (decrement them).

If nums1[i] > nums2[j], set nums1[k] = nums1[i] and decrement i and k.
Else, set nums1[k] = nums2[j] and decrement j and k.
Edge Cases: After the main loop, there might still be elements left in nums2 that haven't been copied (if any elements in nums2 are smaller than all elements in nums1). Copy any remaining elements from nums2 into the beginning of nums1.
*/

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else {
      nums1[k] = nums2[j];
      j -= 1;
    }
    k -= 1;
  }
  // return the merged array
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]

