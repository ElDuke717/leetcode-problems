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
  //declare hold, assigned to an array to hold converted strings
  const hold = [];
  function coder(str) {
    //declare prefix, assigned the value of the strings length and a #
    const prefix = str.length + '²';
    // split string into separate characters
    const s = [...str];
    // iterate over each character in the string and change it to the charCode
    for (let i = 0; i < s.length; i++) {
      // convert each character to a number
      s[i] = s[i].charCodeAt() - 1;
      // convert each number back to a character
      s[i] = String.fromCharCode(s[i]);
    }
    // join elements of s back together
    const converted = s.join('');
    return prefix + converted;
  }
  // iterate over words, passing into coder, push to hold
  for (let i = 0; i < strs.length; i++) {
    hold.push(coder(strs[i]));
  }
  // return hold joined together
  const finish = hold.join('');
  console.log(finish);
  return finish;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  // declare variable cache, an empty object to hold indices and numbers
  const cache = {};
  // declare hold, an empty array that will hold segments of s
  const hold = [];
  // declare const split, separating all elements of the string
  const split = [...s];
  // iterate over string s.  if split character at index i is not NaN when converted to a number and followed by hash,
  // record the index as i + 2 as key and i as value
  for (let i = 0; i < split.length; i++) {
    if (+split[i] !== NaN && split[i + 1] === '²') {
      cache[i + 2] = i + +split[i] + 2;
    }
  }
  // iterate over cache
  for (const key in cache) {
    // declare seg, no assigned value yet
    let seg;
    // slice s between key and value, assign to seg
    seg = split.slice(key, cache[key]);
    // decode each element of seg
    for (let i = 0; i < seg.length; i++) {
      // reverse the charCode conversion
      seg[i] = seg[i].charCodeAt() + 1;
      // convert each number back to a character
      seg[i] = String.fromCharCode(seg[i]);
    }
    // push each seg to hold
    hold.push(seg.join(''));
  }
  return hold;
};

//   /**
//    * Your functions will be called as such:
//    * decode(encode(strs));
//    */

const encoded = encode(['Hello', 'World']);
const stinks = encode(['WU', '$B']);
const message = encode(['']);
const trouble = encode(['', '4 ']);
console.log(decode(encoded));
console.log(decode(message));
console.log(decode(trouble)); // ["","4 "]
console.log(decode(stinks));
