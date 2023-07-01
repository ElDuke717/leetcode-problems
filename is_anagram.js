// const objectifier = (str, obj={}) => {
//     for (let i = 0; i < str.length; i++) {
//       obj.hasOwnProperty(str[i]) ? obj[str[i]] += 1 : obj[str[i]] = 1;
//     }
//     return obj;
//   }

// console.log(objectifier('tea'));

const isAnagram = (str1, str2) => {
  // objectifier turns a string into an object containing number of each character
  const objectifier = (str, obj = {}) => {
    for (let i = 0; i < str.length; i++) {
      obj.hasOwnProperty(str[i]) ? (obj[str[i]] += 1) : (obj[str[i]] = 1);
    }
    return obj;
  };
  const obj1 = objectifier(str1);
  const obj2 = objectifier(str2);
  if (Object.values(obj1).length !== Object.values(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("tea", "eat"));
console.log(isAnagram("tee", "eat"));
