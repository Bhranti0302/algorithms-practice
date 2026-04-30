/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const getValCost = (x) => {
        if (x === 0) return [0, 0];
        if (x === 1) return [1, 1];
        return [2, 1];
    };

    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(k + 1).fill(-Infinity))
    );

    let [val, cost] = getValCost(grid[0][0]);

    if (cost <= k) {
        dp[0][0][cost] = val;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let [v, c] = getValCost(grid[i][j]);

            for (let pc = 0; pc <= k; pc++) {
                if (i === 0 && j === 0) continue;

                if (i > 0 && dp[i - 1][j][pc] !== -Infinity) {
                    let newCost = pc + c;
                    if (newCost <= k) {
                        dp[i][j][newCost] = Math.max(
                            dp[i][j][newCost],
                            dp[i - 1][j][pc] + v
                        );
                    }
                }

                if (j > 0 && dp[i][j - 1][pc] !== -Infinity) {
                    let newCost = pc + c;
                    if (newCost <= k) {
                        dp[i][j][newCost] = Math.max(
                            dp[i][j][newCost],
                            dp[i][j - 1][pc] + v
                        );
                    }
                }
            }
        }
    }

    let res = Math.max(...dp[m - 1][n - 1]);

    return res === -Infinity ? -1 : res;
};
