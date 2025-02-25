/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1

 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // edge case, if the array is empty return zero
  if (citations.length === 0) return 0;
  // edge case, if the array's length is 1
  if (citations.length === 1) return 1;
  // sort the array in descending order
  const sort = citations.sort((a, b) => b - a);
  // declare h, current number of citations.
  let h;
  // iterate over the array, if i (rank) is less than or equal to the citation, that's the h index, return i.  i will always give you the previous number to the element that has less citations than rank position
  for (let i = 0; i < sort.length; i++) {
    h = sort[i];
    if (i >= h) {
      return i;
    }
  }
  // continue the loop otherwise, return sort.length if all citations exceed rank.
  return sort.length;
};

console.log(hIndex([3, 0, 6, 1, 5])); // 3
console.log(hIndex([1, 3, 1])); // 1
console.log(hIndex([0, 0, 0, 0])); // 0
console.log(hIndex([])); // 0
console.log(hIndex([1, 2, 3, 4, 5])); // 3
console.log(hIndex([0, 1, 3, 6, 20, 23, 25, 60, 100])); // 6
console.log(hIndex([1])); // 1
console.log(hIndex([100])); //
console.log(hIndex([0, 1])); // 1
console.log(hIndex([11, 15])); // 2
