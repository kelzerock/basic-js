const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArray = n.toString().split("");
  let numbers = []
  for (let i = 0; i < numArray.length; i += 1) {
    numbers.push(numArray.filter((el, index) => index !== i).join(""));
  }
  let result = numbers.map(el => Number(el))
  return Math.max(...result)
}

module.exports = {
  deleteDigit
};
