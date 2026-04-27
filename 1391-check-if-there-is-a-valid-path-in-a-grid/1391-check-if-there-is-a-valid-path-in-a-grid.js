/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Directions: up, down, left, right
    const dirs = {
        1: [[0, -1], [0, 1]],       // left, right
        2: [[-1, 0], [1, 0]],       // up, down
        3: [[0, -1], [1, 0]],       // left, down
        4: [[0, 1], [1, 0]],        // right, down
        5: [[0, -1], [-1, 0]],      // left, up
        6: [[0, 1], [-1, 0]]        // right, up
    };

    // Check if next cell connects back
    function isConnected(fromDir, nextType) {
        const [dx, dy] = fromDir;
        const reverse = [-dx, -dy];

        for (let [nx, ny] of dirs[nextType]) {
            if (nx === reverse[0] && ny === reverse[1]) {
                return true;
            }
        }
        return false;
    }

    let queue = [[0, 0]];
    let visited = new Set();
    visited.add("0,0");

    while (queue.length) {
        let [x, y] = queue.shift();

        // reached destination
        if (x === m - 1 && y === n - 1) return true;

        let type = grid[x][y];

        for (let [dx, dy] of dirs[type]) {
            let nx = x + dx;
            let ny = y + dy;

            if (
                nx >= 0 && ny >= 0 &&
                nx < m && ny < n &&
                !visited.has(`${nx},${ny}`) &&
                isConnected([dx, dy], grid[nx][ny])
            ) {
                queue.push([nx, ny]);
                visited.add(`${nx},${ny}`);
            }
        }
    }

    return false;
};