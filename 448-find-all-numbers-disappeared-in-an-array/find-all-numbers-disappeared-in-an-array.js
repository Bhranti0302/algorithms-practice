/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const set = new Set(nums);
    let result=[];

    for(let i=0; i<nums.length; i++){
        if(!set.has(i+1)) result.push(i+1)
    }

    return result;

};