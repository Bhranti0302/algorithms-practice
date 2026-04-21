/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq = {};

    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1;
    }

    let result = -1;

    for(let key in freq){
        let num = Number(key);

        if(freq[key] === num){
            result =  Math.max(result,num)
        }
    }
    
    return result
};