/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;

    for (let g of gain) {
        currentAltitude += g;           // update current height
        maxAltitude = Math.max(maxAltitude, currentAltitude); // track max
    }

    return maxAltitude;
};