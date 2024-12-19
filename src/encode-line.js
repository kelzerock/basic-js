const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split("");
  let check = "";
  let count = 1;
  let result = "";
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] !== check) {
      let countResult = count > 1 ? "" + count : "";
      result += countResult + check;
      check = strArr[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  let countResult = count > 1 ? "" + count : "";
  return result + countResult + check;
}

module.exports = {
  encodeLine
};
