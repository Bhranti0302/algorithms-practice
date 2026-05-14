/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let n = Math.max(...nums);

    // Condition 1: length check
    if (nums.length !== n + 1) return false;

    let freq = new Array(n + 1).fill(0);

    // Count frequencies
    for (let num of nums) {
        if (num > n) return false; // invalid number
        freq[num]++;
    }

    // Check 1 to n-1 appear exactly once
    for (let i = 1; i < n; i++) {
        if (freq[i] !== 1) return false;
    }

    // Check n appears exactly twice
    if (freq[n] !== 2) return false;

    return true;
};