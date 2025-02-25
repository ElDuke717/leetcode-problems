namespace CSharpLeetCodeSolutions.Solutions {
    public class Solution189 {
        public static void Run() {
        // Example usage:
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        int k = 3; // Example rotation value

        // Create an instance of Solution and call Rotate
        Solution solution = new Solution();
        solution.Rotate(nums, k);

        // Output the result to the terminal
        Console.WriteLine("Rotated array:");
        Console.WriteLine(string.Join(", ", nums));
    }

    public void Rotate(int[] nums, int k) {
        // Handle rotations larger than array length - use the remainder for k
        k = k % nums.Length; 

        // Step 1: Reverse the whole array
        reverse(nums, 0, nums.Length - 1);
        // Step 2: Reverse the first k elements - re-reverses the first elements
        reverse(nums, 0, k - 1);
        // Step 3: Reverse the rest, the original elements that were at the start
        reverse(nums, k, nums.Length - 1);
    }

    // Helper function to reverse a portion of the array - note helper functions are private and lower case
    private void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
}

}
