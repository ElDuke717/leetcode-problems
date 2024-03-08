/*
Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average O(1) time complexity.

 

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

 

Constraints:

    -231 <= val <= 231 - 1
    At most 2 * 105 calls will be made to insert, remove, and getRandom.
    There will be at least one element in the data structure when getRandom is called.


 */

// Make a constructor function that acts as a class to perform the given operations.
var RandomizedSet = function () {
  // cache holds values passed to the instance of the class.
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  //   if (!val) return null;
  if (this.set.has(val))
    // check set to determine if val is present, if so, return false
    return false;
  // if the set does not contain the element, add it and return true
  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // if the set does not contain the value, return false
  if (!this.set.has(val)) return false;
  // if this set contains the value, delete it, return true
  this.set.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.set.length === 0) {
    return 0;
  }

  // first check if the set's length is greater than zero
  else if (!this.set.length !== 0) {
    // convert the set to an array using spread syntax
    let array = [...this.set];
    // return the element at the random index of the array, as determined by the array's length
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const stuff = new RandomizedSet();

console.log(stuff);

stuff.insert(1);
stuff.insert(1);
stuff.insert(2);
stuff.remove(1);
stuff.insert(4);
stuff.insert(6);

console.log(stuff.getRandom());

console.log(stuff);

console.log(stuff.set);

const array = [1, 2, 3, 4, 5, 6];

/*
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]
*/

const things = new RandomizedSet();

console.log(things);

console.log(things.insert());
console.log(things.insert(1));
console.log(things.remove(2));
console.log(things.insert(2));
console.log(things.getRandom());
console.log(things.remove(1));
console.log(things.insert(2));
console.log(things.getRandom());

const poops = new RandomizedSet();

console.log(poops.remove(0));
console.log(poops.remove(0));
console.log(poops.insert(0));
console.log(poops.getRandom());
console.log(poops.remove(0));
console.log(poops.insert(0));
