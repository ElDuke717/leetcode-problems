
const shortestDistance = function(wordsDict, word1, word2) {
    // add an edge case to make sure that word1 and word2 are present in wordsDict
    if (!wordsDict.includes(word1) || !wordsDict.includes(word2)) { return 'One of the words is not in the list!'};
    // declare variable wI, nothing assigned to it yet.
    const w1l = [];
    // iterate over wordsDict, get the index of word1 and word2
    const w2l = [];
    for (let i = 0; i < wordsDict.length; i++){
        // if str at index is equal to word1, assign the value to w1
        if (wordsDict[i] === word1) { 
            w1l.push(i);
            // console.log('w1', w1)
        };
        // if str at index is equal to word2, assign the value to w2
        if (wordsDict[i] === word2) { 
            w2l.push(i);
            //console.log('w2l', w2l)
        };
    }
    // return the absolute value of the difference between w1 and w2
    return Math.abs(w1l[w1l.length - 1] - w2l[0]);
}

console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")); // 3
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"));
console.log(shortestDistance(["a","a","b","b"], 'a', 'b'));
console.log(shortestDistance(["a","c","b","a"], 'a', 'b'));