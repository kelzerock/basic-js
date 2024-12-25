const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function createArr(x, y) {
    const arr = [];
    for (let i = 0; i < x; i += 1) {
      let subArr = [];
      arr.push(subArr);
      for (let j = 0; j < y; j += 1) {
        subArr.push(0);
      }
    }
    return arr;
  }
  let resultMatrix = createArr(matrix.length, matrix[0].length);
  for (let i = 0; i < matrix.length; i += 1) {
    let subMatrix = matrix[i];
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        // if(typeof resultMatrix[i][j] === "number") resultMatrix[i][j] += 1;
        if (i >= 1 && i < matrix.length && j >= 1 && j < subMatrix.length) resultMatrix[i - 1][j - 1] += 1;
        if (i >= 1 && i < matrix.length) resultMatrix[i - 1][j] += 1;
        if (i >= 1 && i < matrix.length && j < subMatrix.length) resultMatrix[i - 1][j + 1] += 1;
        if (j >= 1 && j < subMatrix.length) resultMatrix[i][j - 1] += 1;
        // if(resultMatrix[i][j]) resultMatrix[i][j] += 1;
        if (j < subMatrix.length) resultMatrix[i][j + 1] += 1;
        if (i < matrix.length && j >= 1 && j < subMatrix.length) resultMatrix[i + 1][j - 1] += 1;
        if(i < matrix.length) resultMatrix[i + 1][j] += 1;
        if(i < matrix.length && j < subMatrix.length) resultMatrix[i + 1][j + 1] += 1;
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper,
};
