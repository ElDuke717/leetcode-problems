/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const objectifier = (str, obj = {}) => {
    [...str].forEach((el) =>
      !obj.hasOwnProperty(el) ? (obj[el] = 1) : (obj[el] += 1)
    );
    return obj;
  };
  // declare const sObj, an empty object to hold letters in s
  const scache = objectifier(s);
  // tcache stores number of each element in t
  const tcache = objectifier(t);
  // iterate over tcache, and if each letter count is equal to tcache, pass over it, if not, return false
  if (Object.keys(scache).length !== Object.keys(tcache).length) {
    return false;
  }
  for (const key in scache) {
    if (scache[key] !== tcache[key]) {
      return false;
    }
  }
  // return true
  return true;
};
