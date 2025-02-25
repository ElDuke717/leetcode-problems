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
//   // declare prods, assigned the value of an empty array
//   let prods = [];

//   // iterate over nums
//   if (
//     nums.every((el) => el === 0) ||
//     nums.filter((el) => el === 0).length >= 2
//   ) {
//     // console.log('they are all zeroes');
//     prods = Array.from({ length: nums.length }, () => 0);
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
//       // push sum to the array prods
//       prods.push(rest);
//     }
//   }
//   // return prods
//   return prods;
// };

// ChatGPT modified solution to make it faster:

// Define the function productExceptSelf that takes an array of numbers as input
var productExceptSelf = function (nums) {
  // Initialize an array to store the resulting products
  let prods = [];
  // Initialize leftProduct with 1 to calculate product of elements to the left of each element
  let leftProduct = 1;
  // Initialize rightProduct with 1 to calculate product of elements to the right of each element
  let rightProduct = 1;

  // First pass: calculate the running product of elements to the left of each element
  for (let i = 0; i < nums.length; i++) {
    // Store the running product up to the left of the current element
    prods[i] = leftProduct;
    // Update leftProduct for the next element in the array
    leftProduct *= nums[i];
  }

  // Second pass: calculate the running product of elements to the right of each element
  for (let i = nums.length - 1; i >= 0; i--) {
    // Multiply the current value in prods by the running product to the right
    // This effectively calculates the product of all elements except the current one
    prods[i] *= rightProduct;
    // Update rightProduct for the next (to the left) element in the array
    rightProduct *= nums[i];
  }

  // Loop to fix any `-0` to `0` (This step is optional and specific to JavaScript's handling of -0)
  for (let i = 0; i < prods.length; i++) {
    if (prods[i] === -0) prods[i] = 0;
  }

  // Return the final array containing the product of all elements except self for each element
  return prods;
};

// Example usage
console.log(productExceptSelf([3, 0, 6, 1, 5])); // Expected output: [0, 90, 0, 0, 0]

/*
This code implements a solution to the problem of finding the products of all elements 
in an array, except for the current element.

Here's a step-by-step explanation of how it works:

    The code first initializes the prods array, and two variables leftProduct and 
    rightProduct to 1.

    In the first for loop, it iterates through the nums array from the left to the right 
    and multiplies each leftProduct with the current element, and then stores the result in 
    the prods array at the current position.

    In the second for loop, it iterates through the nums array from the right to the left 
    and multiplies each rightProduct with the current element, and then multiplies the result 
    with the corresponding value in the prods array at the current position.

    In the third for loop, it checks each value in prods array and replaces any value of -0 
    with 0.

    Finally, it returns the prods array which contains the products of all elements in nums 
    array, except for the current element.
*/

// https://pythontutor.com/visualize.html#code=var%20productExceptSelf%20%3D%20function%20%28nums%29%20%7B%0A%20%20let%20prods%20%3D%20%5B%5D%3B%0A%20%20let%20leftProduct%20%3D%201%3B%0A%20%20let%20rightProduct%20%3D%201%3B%0A%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20nums.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20prods%5Bi%5D%20%3D%20leftProduct%3B%0A%20%20%20%20leftProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%20%20for%20%28let%20i%20%3D%20nums.length%20-%201%3B%20i%20%3E%3D%200%3B%20i--%29%20%7B%0A%20%20%20%20prods%5Bi%5D%20*%3D%20rightProduct%3B%0A%20%20%20%20rightProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%20%20//%20%20%20%7D%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20prods.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28prods%5Bi%5D%20%3D%3D%3D%20-0%29%20prods%5Bi%5D%20%3D%200%3B%0A%20%20%7D%0A%20%20return%20prods%3B%0A%7D%3B%0A%0Aconsole.log%28productExceptSelf%28%5B1,%202,%203,%204%5D%29%29%3B&cumulative=false&curInstr=58&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false

// console.log(productExceptSelf([1, 2, 3, 4]));
// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([0, 0])); // [0,0]
// console.log(productExceptSelf([0, 4, 0])); // [0,0,0];
// https://pythontutor.com/render.html#code=/**%0A%20*%20%40param%20%7Bnumber%5B%5D%7D%20nums%0A%20*%20%40return%20%7Bnumber%5B%5D%7D%0A%20*/%0A//%20Define%20the%20function%20productExceptSelf%20that%20takes%20an%20array%20of%20numbers%20as%20input%0Avar%20productExceptSelf%20%3D%20function%20%28nums%29%20%7B%0A%20%20//%20Initialize%20an%20array%20to%20store%20the%20resulting%20products%0A%20%20let%20prods%20%3D%20%5B%5D%3B%0A%20%20//%20Initialize%20leftProduct%20with%201%20to%20calculate%20product%20of%20elements%20to%20the%20left%20of%20each%20element%0A%20%20let%20leftProduct%20%3D%201%3B%0A%20%20//%20Initialize%20rightProduct%20with%201%20to%20calculate%20product%20of%20elements%20to%20the%20right%20of%20each%20element%0A%20%20let%20rightProduct%20%3D%201%3B%0A%0A%20%20//%20First%20pass%3A%20calculate%20the%20running%20product%20of%20elements%20to%20the%20left%20of%20each%20element%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20nums.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20//%20Store%20the%20running%20product%20up%20to%20the%20left%20of%20the%20current%20element%0A%20%20%20%20prods%5Bi%5D%20%3D%20leftProduct%3B%0A%20%20%20%20//%20Update%20leftProduct%20for%20the%20next%20element%20in%20the%20array%0A%20%20%20%20leftProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%0A%20%20//%20Second%20pass%3A%20calculate%20the%20running%20product%20of%20elements%20to%20the%20right%20of%20each%20element%0A%20%20for%20%28let%20i%20%3D%20nums.length%20-%201%3B%20i%20%3E%3D%200%3B%20i--%29%20%7B%0A%20%20%20%20//%20Multiply%20the%20current%20value%20in%20prods%20by%20the%20running%20product%20to%20the%20right%0A%20%20%20%20//%20This%20effectively%20calculates%20the%20product%20of%20all%20elements%20except%20the%20current%20one%0A%20%20%20%20prods%5Bi%5D%20*%3D%20rightProduct%3B%0A%20%20%20%20//%20Update%20rightProduct%20for%20the%20next%20%28to%20the%20left%29%20element%20in%20the%20array%0A%20%20%20%20rightProduct%20*%3D%20nums%5Bi%5D%3B%0A%20%20%7D%0A%0A%20%20//%20Loop%20to%20fix%20any%20%60-0%60%20to%20%600%60%20%28This%20step%20is%20optional%20and%20specific%20to%20JavaScript's%20handling%20of%20-0%29%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20prods.length%3B%20i%2B%2B%29%20%7B%0A%20%20%20%20if%20%28prods%5Bi%5D%20%3D%3D%3D%20-0%29%20prods%5Bi%5D%20%3D%200%3B%0A%20%20%7D%0A%0A%20%20//%20Return%20the%20final%20array%20containing%20the%20product%20of%20all%20elements%20except%20self%20for%20each%20element%0A%20%20return%20prods%3B%0A%7D%3B%0A%0A%0A//%20Example%20usage%0Aconsole.log%28productExceptSelf%28%5B3,%200,%206,%201,%205%5D%29%29%3B%20//%20Expected%20output%3A%20%5B0,%2090,%200,%200,%200%5D&cumulative=false&curInstr=16&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
console.log(productExceptSelf([4, 3, 2, 1, 2])); // [12,16,24,48,24]
