const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  let cat = "^^"
  for (let i = 0; i < matrix.length; i += 1) {
    let submatrix = matrix[i];
    for (let j = 0; j < submatrix.length; j += 1) {
      if (matrix[i][j] === cat) count += 1;
    }
  }
  return count;
}

module.exports = {
  countCats
};
