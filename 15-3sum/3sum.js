/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result=[];
    const sortArray=nums.sort((a,b)=>a-b);

    for(let i=0;i<sortArray.length-2;i++){
        if(i>0 && sortArray[i]===sortArray[i-1]) continue;
        let left=i+1;
        let right=sortArray.length-1;

        while(left<right){
            let sum=sortArray[i]+sortArray[left]+sortArray[right];

            if(sum<0){
                left++;
            } else if(sum>0){
                right--;
            } else{
                result.push([sortArray[i],sortArray[left],sortArray[right]]);

                while(left<right && sortArray[left]===sortArray[left+1]) left++;
                while(left<right && sortArray[right]===sortArray[right-1]) right--;

                left++;
                right--;
            }
        }
    }

    return result;
};