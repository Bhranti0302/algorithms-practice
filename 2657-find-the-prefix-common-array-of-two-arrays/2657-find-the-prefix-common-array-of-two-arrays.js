/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let n = A.length;
    let freq = {};
    let common = 0;
    let ans = [];

    for (let i = 0; i < n; i++) {
        // Add A[i]
        freq[A[i]] = (freq[A[i]] || 0) + 1;
        if (freq[A[i]] === 2) {
            common++;
        }

        // Add B[i]
        freq[B[i]] = (freq[B[i]] || 0) + 1;
        if (freq[B[i]] === 2) {
            common++;
        }

        ans.push(common);
    }

    return ans;
};