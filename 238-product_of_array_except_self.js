/*
Given an integer array nums, return an array answer such that answer[i] is 
equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

//input is an array of numbers, nums
//o: arr of numbers

// MY SOLUTION:  this code works, but is too slow

/*
    Feedback on how to make the code faster: 
    
    Pre-compute the product of all elements: Before the loop starts, compute the product of 
    all elements in the array, then divide that product by each element in the loop. This 
    eliminates the need to compute the product multiple times, improving the performance of 
    the code.

    Avoid unnecessary array slicing: The code uses nums.slice(0, i) and nums.slice(i + 1) 
    to remove the current element from the array. Instead of creating new arrays, consider 
    using two variables to keep track of the product from the left and the right of the 
    current element.

    Avoid using .reduce: The code uses .reduce to compute the product of all elements in the 
    array, but that can be time-consuming. Consider using a for loop to compute the product 
    directly, rather than using .reduce.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   // declare sums, assigned the value of an empty array
//   let sums = [];

//   // iterate over nums
//   if (
//     nums.every((el) => el === 0) ||
//     nums.filter((el) => el === 0).length >= 2
//   ) {
//     // console.log('they are all zeroes');
//     sums = Array.from({ length: nums.length }, () => 0);
//   } else {
//     for (let i = 0; i < nums.length; i++) {
//       // declare variable rest, assigned the value of an array with current element sliced out
//       // and multiplied together with reduce
//       let rest =
//         // splice out the element we don't want
//         [...nums.slice(0, i), ...nums.slice(i + 1)]
//           // use reduce to multiply all the elements together
//           .reduce((a, c) => a * c, 1);
//       // convert any -0 to 0
//       if (rest === -0) {
//         rest = 0;
//       }
//       // push sum to the array sums
//       sums.push(rest);
//     }
//   }
//   // return sums
//   return sums;
// };

// ChatGPT modified solution to make it faster:

var productExceptSelf = function (nums) {
  let sums = [];
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    sums[i] = leftProduct;
    leftProduct *= nums[i];
    console.log("left", leftProduct);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    sums[i] *= rightProduct;
    rightProduct *= nums[i];
    console.log("right", rightProduct);
  }
  //   }
  for (let i = 0; i < sums.length; i++) {
    if (sums[i] === -0) sums[i] = 0;
  }
  return sums;
};

/*
This code implements a solution to the problem of finding the products of all elements 
in an array, except for the current element.

Here's a step-by-step explanation of how it works:

    The code first initializes the sums array, and two variables leftProduct and 
    rightProduct to 1.

    In the first for loop, it iterates through the nums array from the left to the right 
    and multiplies each leftProduct with the current element, and then stores the result in 
    the sums array at the current position.

    In the second for loop, it iterates through the nums array from the right to the left 
    and multiplies each rightProduct with the current element, and then multiplies the result 
    with the corresponding value in the sums array at the current position.

    In the third for loop, it checks each value in sums array and replaces any value of -0 
    with 0.

    Finally, it returns the sums array which contains the products of all elements in nums 
    array, except for the current element.
*/

// https://pythontutor.com/visualize.html#code=var%20productExceptSelf%20%3D%20function%20%28nums%29%20%7B%0A%20%20let%20sums%20%3D%20%5B%5D%3B%0A%20%20let%20leftProduct%20%3D%201%3B%0A%20%20let%20rightProduct%20%3D%201%3B%0A%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20nums.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20sums%5Bi%5D%20%3D%20leftProduct%3B%0A%20%20%20%20leftProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%20%20for%20%28let%20i%20%3D%20nums.length%20-%201%3B%20i%20%3E%3D%200%3B%20i--%29%20%7B%0A%20%20%20%20sums%5Bi%5D%20*%3D%20rightProduct%3B%0A%20%20%20%20rightProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%20%20//%20%20%20%7D%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20sums.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28sums%5Bi%5D%20%3D%3D%3D%20-0%29%20sums%5Bi%5D%20%3D%200%3B%0A%20%20%7D%0A%20%20return%20sums%3B%0A%7D%3B%0A%0Aconsole.log%28productExceptSelf%28%5B1,%202,%203,%204%5D%29%29%3B&cumulative=false&curInstr=58&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0, 0])); // [0,0]
// console.log(productExceptSelf([0, 4, 0])); // [0,0,0];
console.log(productExceptSelf([4, 3, 2, 1, 2])); // [12,16,24,48,24]
