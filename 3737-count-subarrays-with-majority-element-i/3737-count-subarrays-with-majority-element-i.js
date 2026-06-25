/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, k) {
    let n = nums.length;

    let arr = nums.map(num => num === k ? 1 : -1);

    let prefixSum = 0;
    let count = 0;

    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < n; i++) {
        prefixSum += arr[i];

        for (let [key, val] of map) {
            if (key < prefixSum) {
                count += val;
            }
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};