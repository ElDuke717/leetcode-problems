/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.

Constraints:

    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length
*/

// declare a new set based on the string to get the unique characters
// create a hash containing the number of each letter
// figure out what character has the most occurences
// get the longest set of repeating characters - builds on longest substring
// add character to make substring longer

const characterReplacement = (s, k) => {
  // max_length to keep track of length of substring with same char
  let max_length = 0;
  // array char_count to store count of each character in current window
  const char_count = new Array(26).fill(0);
  // start = 0, end = 0 for sliding window
  let start = 0;
  for (let end = 0; end < s.length; end += 1) {
    // Increment the count of the current character in the charCount array
    char_count[s.charCodeAt(end) - 'A'.charCodeAt()] += 1;
    // Calculate the length of the current window
    const window_length = end - start + 1;

    // calculate the number of characters that need to be changed
    const changes_required = window_length - Math.max(...char_count);

    // Check if the current window is valid
    if (changes_required <= k) {
      max_length = Math.max(max_length, window_length); // Update the maximum length
    } else {
      char_count[s.charCodeAt(start) - 'A'.charCodeAt()]--; // Decrement the count of the character at the start
      start++; // Move the start pointer to the right
    }
  }

  return max_length;
};

console.log(characterReplacement('ABAB', 2));

/*

Explanation:
1. We initialize `max_length` to 0 as we haven't found any substring yet.
2. `char_count` is an array of size 26 (corresponding to the 26 uppercase English letters) that will store the count of each character in the current window. We initialize it with zeros using the `fill()` method.
3. The `start` pointer is initialized to 0, which represents the start of the window.
4. We iterate through the string using the `end` pointer.
5. At each iteration, we increment the count of the current character in `char_count` using `s.charCodeAt(end) - 'A'.charCodeAt()`.
6. We calculate the length of the current window (`window_length`) as `end - start + 1`.
7. We calculate the number of characters that need to be changed (`changes_required`) to make all characters in the window the same using `Math.max(...char_count)`.
8. If `changes_required` is less than or equal to `k`, the current window is valid. We update `max_length` if the current window length is greater.
9. If the current window is not valid (i.e., `changes_required` is greater than `k`), we adjust the window by moving the `start` pointer to the right and decrementing the count of the character at the start in `char_count`.
10. We repeat this process until the `end` reaches the end of the string.
11. Finally, we return `max_length` as the result, which represents the length of the longest substring containing the same letter with at most `k` changes.

This JavaScript solution follows the same logic as the previous Python solution, but with the necessary modifications for the JavaScript syntax.

*/