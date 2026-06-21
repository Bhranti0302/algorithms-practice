/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    // Step 1: Sort costs in ascending order
    costs.sort((a, b) => a - b);

    let count = 0;

    // Step 2: Buy cheapest ice creams first
    for (let i = 0; i < costs.length; i++) {
        if (coins >= costs[i]) {
            coins -= costs[i];
            count++;
        } else {
            break;
        }
    }

    return count;
};