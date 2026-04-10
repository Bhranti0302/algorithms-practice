/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map();

    // Step 1: store indices
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    let minDist = Infinity;

    // Step 2: check triples
    for (let indices of map.values()) {
        if (indices.length < 3) continue;

        for (let i = 0; i <= indices.length - 3; i++) {
            let first = indices[i];
            let third = indices[i + 2];

            let dist = 2 * (third - first);
            minDist = Math.min(minDist, dist);
        }
    }

    return minDist === Infinity ? -1 : minDist;
};