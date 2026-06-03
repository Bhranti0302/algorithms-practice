/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // last element in nums1 (valid part)
    let j = n - 1; // last element in nums2
    let k = m + n - 1; // last position in nums1

    // Merge from the end
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If nums2 still has elements
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};