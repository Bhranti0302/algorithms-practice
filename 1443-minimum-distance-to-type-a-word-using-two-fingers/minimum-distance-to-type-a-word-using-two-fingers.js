/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const memo = new Map();

    // Convert char to (row, col)
    function getPos(c) {
        let idx = c.charCodeAt(0) - 65;
        return [Math.floor(idx / 6), idx % 6];
    }

    function dist(a, b) {
        if (a === -1) return 0; // free start
        let [x1, y1] = getPos(a);
        let [x2, y2] = getPos(b);
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    function dp(i, f1, f2) {
        if (i === word.length) return 0;

        let key = `${i},${f1},${f2}`;
        if (memo.has(key)) return memo.get(key);

        let curr = word[i];

        // move finger1
        let cost1 = dist(f1, curr) + dp(i + 1, curr, f2);

        // move finger2
        let cost2 = dist(f2, curr) + dp(i + 1, f1, curr);

        let res = Math.min(cost1, cost2);
        memo.set(key, res);

        return res;
    }

    return dp(0, -1, -1);
};