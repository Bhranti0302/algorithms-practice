/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function dfs(r, c, pr, pc) {
        visited[r][c] = true;

        const directions = [[1,0], [-1,0], [0,1], [0,-1]];

        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // check bounds + same character
            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] === grid[r][c]
            ) {
                if (!visited[nr][nc]) {
                    if (dfs(nr, nc, r, c)) {
                        return true;
                    }
                } 
                // visited and not parent → cycle
                else if (nr !== pr || nc !== pc) {
                    return true;
                }
            }
        }

        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1)) {
                    return true;
                }
            }
        }
    }

    return false;
};