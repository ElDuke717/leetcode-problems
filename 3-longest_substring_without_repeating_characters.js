/*
Given a string s, find the length of the longest
substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

const lengthOfLongestSubstring = (str) => {
  // declare charSet, assigned to an empty set with the set constructor
  const charSet = new Set();
  // declare l assigned initial value of zero
  let l = 0;
  // max is length of longest sequence, initially zero
  let max = 0;
  // loop over str
  for (let r = 0; r < str.length; r += 1) {
    // while loop, if charSet has the current element
    while (charSet.has(str[r])) {
      // delete the left character from charSet
      charSet.delete(str[l]);
      // increment left pointer
      l += 1;
    }
    // add right character
    charSet.add(str[r]);
    // reassing max to largest of current max or charSet size
    max = Math.max(max, charSet.size);
  }
  // return max
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

// PythonTutor walk through of the solution https://tinyurl.com/3kav6zp4

/*
The function `lengthOfLongestSubstring` is finding the length of the longest substring without repeating characters. 

Here's how the algorithm works:

1. Initialize a set `charSet` to keep track of the unique characters in the current substring, a left pointer `l` at the start of the string, and `max` to keep track of the maximum length of a substring found so far.

2. Start from the right pointer `r`, iterate the string from left to right (0 to n-1).

3. In each iteration, check whether the current character is already in the set:
    - If it is, remove the leftmost character from the set and move the left pointer one step to the right. This is done using a while loop that continues until the current character is not in the set.
    - If it's not, add the current character to the set.

4. After the check, calculate the maximum length of the substring found so far, which is the maximum between the current `max` and the size of the set `charSet`.

5. Continue this process until the right pointer has scanned through the entire string.

6. Return the `max` which represents the length of the longest substring without repeating characters.

Here's a step-by-step walkthrough of the function using the input string 'abcabcbb':

- In the first iteration, the characters 'a', 'b', 'c' are added to `charSet` since they are not repeating. The `max` is updated to 3.
- When it encounters the second 'a', it enters the while loop and removes the first 'a' from the `charSet` and moves the left pointer. 
- This continues for the second 'b', and 'c'. Each time, the first occurrence is removed and the left pointer is moved right. 
- Finally, when it encounters the last two 'b's, it again removes the elements from the `charSet` until there are no more duplicates. 
- At the end, the `max` is 3 which is the length of 'abc'.

In terms of time complexity, the algorithm runs in O(n) time where n is the length of the string. This is because in the worst case, each character will be visited twice, once by the right pointer and once by the left pointer.

The space complexity of the algorithm is O(min(n, m)) where n is the length of the string and m is the size of the character set. This is the space used by the set to store the characters. In a scenario where the string is larger than the character set (for example ASCII where m would be 128), the space complexity would be O(m). On the other hand, if the string is smaller than the character set, the space complexity would be O(n).

*/
