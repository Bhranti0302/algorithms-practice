/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    
    let reversed = parseInt(n.toString().split('').reverse().join(''));
    
    
    return Math.abs(n - reversed);
};