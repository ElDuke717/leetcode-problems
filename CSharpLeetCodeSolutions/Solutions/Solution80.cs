 namespace CSharpLeetCodeSolutions.Solutions {
    public class Solution80 {
        public static void Run() {
            // Example usage:
            int[] nums = {1, 1, 1, 2, 2, 3};
            int result = RemoveDuplicates(nums);
            
            // Output the result to the terminal
            Console.WriteLine($"Array after removing duplicates has length: {result}");
            for (int i = 0; i < result; i++) {
                Console.Write(nums[i] + " ");
            }
            Console.WriteLine(); // New line for clean output
        }

        public static int RemoveDuplicates(int[] nums) {
            int j = 1; // Pointer for the unique element position 
            int count = 1; // Tracks occurrences of the current element

            for (int i = 1; i < nums.Length; i++) {
                if (nums[i] == nums[i - 1]) {
                    count++;
                } else {
                    count = 1;
                }

                if (count <= 2) {
                    nums[j++] = nums[i];
                }
            }

            return j;
        }
    }
}
