/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixes = new Set();

    // Store all prefixes from arr1
    for (let num of arr1) {
        let s = num.toString();
        for (let i = 1; i <= s.length; i++) {
            prefixes.add(s.substring(0, i));
        }
    }

    let ans = 0;

    // Check prefixes in arr2
    for (let num of arr2) {
        let s = num.toString();
        for (let i = 1; i <= s.length; i++) {
            if (prefixes.has(s.substring(0, i))) {
                ans = Math.max(ans, i);
            }
        }
    }

    return ans;
};