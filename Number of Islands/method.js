/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const row = grid.length;
  if (row) {
    const col = grid[0].length;
    const landDict = {};
    let count = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const key = getKey(i, j);
        if (grid[i][j] === "1" && !(key in landDict)) {
          updateLand(i, j, grid, row, col, landDict);
          count++;
        }
      }
    }
    return count;
  }
  return 0;
};
const updateLand = (i, j, grid, row, col, landDict = {}) => {
  if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === "0") {
    return;
  }
  const key = getKey(i, j);
  if (!(key in landDict)) {
    landDict[key] = true;
    updateLand(i + 1, j, grid, row, col, landDict);
    updateLand(i - 1, j, grid, row, col, landDict);
    updateLand(i, j + 1, grid, row, col, landDict);
    updateLand(i, j - 1, grid, row, col, landDict);
  }
};
const getKey = (i, j) => {
  return `${i}-${j}`;
};
