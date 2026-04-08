/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1=new Set(nums1);
    let results=new Set();

    for(let num of nums2){
        if(set1.has(num)){ results.add(num)}
    }

    return [...results];
};