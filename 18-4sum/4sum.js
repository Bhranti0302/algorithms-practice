/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let results=[];
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length-3; i++){

        if(i>0 && nums[i]===nums[i-1]) continue;

        for(let j=nums.length-1; j>i+2; j--){

            if(j<nums.length-1 && nums[j]===nums[j+1]) continue;

            let left=i+1;
            let right=j-1;

            while(left<right){
                let sum=nums[i]+nums[left]+nums[right]+nums[j];

                if(sum===target){
                    results.push([nums[i],nums[left],nums[right],nums[j]])

                    left++;
                    right--;

                    while(left<right && nums[left]===nums[left-1]) left++;
                    while(left<right && nums[right]===nums[right+1]) right--;
                }
                else if(sum<target){
                    left++;
                }
                else{
                    right--
                }
            }
        }
    }

    return results
};