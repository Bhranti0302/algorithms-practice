/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let arr = [];
    
    // Step 1: Flatten grid
    for (let row of grid) {
        for (let num of row) {
            arr.push(num);
        }
    }
    
    // Step 2: Check feasibility
    let remainder = arr[0] % x;
    for (let num of arr) {
        if (num % x !== remainder) return -1;
    }
    
    // Step 3: Sort array
    arr.sort((a, b) => a - b);
    
    // Step 4: Find median
    let median = arr[Math.floor(arr.length / 2)];
    
    // Step 5: Calculate operations
    let operations = 0;
    for (let num of arr) {
        operations += Math.abs(num - median) / x;
    }
    
    return operations;
};