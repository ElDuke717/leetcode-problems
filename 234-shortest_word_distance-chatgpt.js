/*
Given an array of strings wordsDict and two different strings that already exist in the array word1
and word2, return the shortest distance between these two words in the list.
*/

function shortestDistance(wordsDict, word1, word2) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < wordsDict.length; i+=1) {
    if (wordsDict[i] === word1 || wordsDict[i] === word2) {
      const targetWord = wordsDict[i] === word1 ? word2 : word1;
      for (let j = i + 1; j < wordsDict.length; j+=1) {
        if (wordsDict[j] === targetWord) {
          minDistance = Math.min(minDistance, j - i);
          break;
        }
      }
    }
  }
  return minDistance === Number.MAX_SAFE_INTEGER ? -1 : minDistance;
}

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
); // 3
console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
);
console.log(shortestDistance(["a", "a", "b", "b"], "a", "b"));
console.log(shortestDistance(["a", "c", "b", "a"], "a", "b"));
