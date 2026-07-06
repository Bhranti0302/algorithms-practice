/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    // Step 1: Sort
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1]; // end desc
        return a[0] - b[0]; // start asc
    });

    let count = 0;
    let maxEnd = 0;

    for (let [start, end] of intervals) {
        if (end > maxEnd) {
            count++;          // not covered
            maxEnd = end;     // update max
        }
        // else → covered, ignore
    }

    return count;
};