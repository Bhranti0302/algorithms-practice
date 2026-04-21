/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(" ");
    
    if (pattern.length !== words.length) {
        return false;
    }

    // FIX HERE
    let map1 = Object.create(null);
    let map2 = Object.create(null);

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];

        if (map1[char] !== undefined && map1[char] !== word) {
            return false;
        }

        if (map2[word] !== undefined && map2[word] !== char) {
            return false;
        }

        map1[char] = word;
        map2[word] = char;
    }

    return true;
};