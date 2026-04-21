/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let word of strs) {
        let sorted = word.split('').sort().join('');

        if (!map[sorted]) {
            map[sorted] = [];
        }

        map[sorted].push(word);
    }

    return Object.values(map);
};