/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const totalRow = matrix.length;
  const totalColumn = matrix[0].length;
  for (let i = 0; i < totalRow; i++) {
      const n = totalColumn - 1 - i;
      let row = 0;
      for (let j = i; j < n; j++) {
          swap(matrix, i, j, i + row, n);
          swap(matrix, i, j, n, n - row);
          swap(matrix, i, j, n - row, i);
          row++;
      }
  }
};
const swap = (matrix, i1, j1, i2, j2) => {
  const tmp = matrix[i1][j1];
  matrix[i1][j1] = matrix[i2][j2];
  matrix[i2][j2] = tmp;
};