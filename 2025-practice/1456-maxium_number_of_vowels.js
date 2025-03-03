/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/


// Initiate a counter for vowels in the current window
// Check the first substring of length k, count how many vowels are in it, set counter to that number
// Slide the window to the right, subtract the last letter if it was a vowel, add the new letter if it is a vowel


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    // Create a set of vowels for faster look-up
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    // Max count of vowels
    let maxCount = 0;
    // Count of vowels in the current window
    let count = 0;
    // iterate over the first k characters
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }
    // Set the max count to the count of vowels in the first window
    maxCount = count;
    // Slide the window to the right
    for (let i = k; i < s.length; i++) {
        // Subtract the last letter if it was a vowel
        if (vowels.has(s[i - k])) {
            count--;
        }
        // Add the new letter if it is a vowel
        if (vowels.has(s[i])) {
            count++;
        }
        // Update the max count
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};


console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2