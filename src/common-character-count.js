const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(s1.length === 0 || s2.length === 0) return 0;
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let set = Array.from(new Set(arr1));
  let count = 0;
  for (let i = 0; i < set.length; i += 1) {
    let length1 = arr1.filter(el => el === set[i]).length;
    let length2 = arr2.filter(el => el === set[i]).length;
    count += Math.min(length1, length2)
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
