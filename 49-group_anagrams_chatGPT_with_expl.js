/*
Given an array of strings strs, group the anagrams together. You can return the answer in any 
order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
*/

var groupAnagrams = function (strs) {
  // map is a cache/hashmap to store sorted string as key and anagrams as the value in an array
  let map = {};
  // iterate over the strs array
  for (let str of strs) {
    // sortedStr sorts the characters of each string and rejoins them
    let sortedStr = str.split('').sort().join('');
    // if map already contains a sorted version of a string, then push the string to an array implicity assigned as key to that value
    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      // if the sorted string is not a property on map, then assign the string in an array as value on map at the key sortedstring
      map[sortedStr] = [str];
    }
  }
  console.log(map);
  // return the values of map, each one an array
  return Object.values(map);
};

console.log(
  groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
