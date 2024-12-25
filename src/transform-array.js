const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  //check incoming data, is it Array.
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  //check incoming array, is all element number
  if (arr.every((el) => typeof el === "number") && arr.length > 0) return arr;
  const transformArr = [];
  const discardPosition = [];

  for (let ind = 0; ind < arr.length; ind += 1) {
    const el = arr[ind];
    if (el === "--double-next") {
      if (ind + 1 < arr.length) {
        transformArr.push(arr[ind + 1]);
      }
    } else if (el === "--discard-next") {
      if (arr[ind + 1]) {
        ind += 1;
        discardPosition.push(ind);
      }
    } else if (el === "--discard-prev") {
      if (transformArr.length > 0) {
        if (!discardPosition.includes(ind - 1)) transformArr.pop();
      }
    } else if (el === "--double-prev") {
      if (transformArr.length > 0) {
        if (!discardPosition.includes(ind - 1))
          transformArr.push(transformArr[transformArr.length - 1]);
      }
    } else {
      transformArr.push(el);
    }
  }
  return transformArr;
}

module.exports = {
  transform,
};
