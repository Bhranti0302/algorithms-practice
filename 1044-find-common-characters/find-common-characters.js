/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let freq = {};

    // Step 1: count first word
    for (let char of words[0]) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: compare with rest
    for (let i = 1; i < words.length; i++) {
        let temp = {};

        for (let char of words[i]) {
            temp[char] = (temp[char] || 0) + 1;
        }

        // take minimum
        for (let key in freq) {
            freq[key] = Math.min(freq[key], temp[key] || 0);
        }
    }

    // Step 3: build result
    let result = [];

    for (let char in freq) {
        for (let i = 0; i < freq[char]; i++) {
            result.push(char);
        }
    }

    return result;
};