var rotate = function (nums, k) {
  k = k % nums.length; // Handle rotations larger than array length
  reverse(nums, 0, nums.length - 1); // Step 1: Reverse the whole array
  reverse(nums, 0, k - 1); // Step 2: Reverse the first k elements
  reverse(nums, k, nums.length - 1); // Step 3: Reverse the rest

  // Helper function to reverse a portion of the array
  function reverse(arr, start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(reverse([1, 2, 3, 4, 5], 0, 5));
