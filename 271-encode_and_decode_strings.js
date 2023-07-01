/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
  // ... your code
  return encoded_string;
}

Machine 2 (receiver) has the function:

vector<string> decode(string s) {
  //... your code
  return strs;
}

So Machine 1 does:

string encoded_string = encode(strs);

and Machine 2 does:

vector<string> strs2 = decode(encoded_string);

strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

You are not allowed to solve the problem using any serialize methods (such as eval).
*/

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  // declare code assigned to the value of the strings joined with an asterisk, then each char is split on an array
  let code = strs.join("Û").split("");
  // iterate over the array code, replacing each element not an asterisk with it's charcode,
  console.log(code);
  for (let i = 0; i < code.length; i++) {
    if (code[i] === " ") {
      code[i] = "þ";
    }
    // get the charCodeAt for each character, subtract one from it
    code[i] = code[i].charCodeAt() - 1;
    // replace charCode with new character
    code[i] = String.fromCharCode(code[i]);
  }
  // return the elements joined with a -
  return code.join("");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  // split is assigned the value of s split onto an array.
  let split = s.split("");
  // iterate over split
  for (let i = 0; i < split.length; i++) {
    // change each letter to corresponding charcode plus 1
    split[i] = split[i].charCodeAt() + 1;
    // replace each code with it's corresponding char
    split[i] = String.fromCharCode(split[i]);
    // replace asterisks with a space
    if (split[i] === "Û") {
      split[i] = " ";
    }
  }
  // join all characters together
  // split characters into separate strings with split passing in a space.
  // return the array
  split.join("").split(" ");
  return split.map((el) => el.replace("þ", " "));
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const encoded = encode(["Hello", "World"]);
const message = encode([""]);
const trouble = encode(["", "4 "]);
// console.log(decode(encoded));
// console.log(decode(message));
console.log(decode(trouble)); // ["","4 "]
