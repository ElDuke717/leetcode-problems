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
    if (+split[i] !== NaN && split[i + 1] === "#") {
      cache[i + 2] = i + Number(split[i]) + 2;
    }
  }
  console.log(cache);
  // iterate over cache
  for (const key in cache) {
    // declare seg, no assigned value yet
    let seg;
    // slice s between key and value, assign to seg
    seg = split.slice(key, cache[key]);
    // decode each element of seg
    for (let i = 0; i < seg.length; i++) {
      seg[i] = seg[i].charCodeAt() + 1;
      // convert each number back to a character
      seg[i] = String.fromCharCode(seg[i]);
    }
    // push each seg to hold
    hold.push(seg.join(""));
  }
  return hold;
};

console.log(decode("5#Gdkkn5#Vnqkc"));
