const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) { throw 'Error' }
  if (arr.length == 0) { return arr }
   let i = 0
  while (i < arr.length) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && i === 0){}
      else if (arr[i] === '--discard-prev' && arr[i-2] === '--discard-next') {}
      else if (arr[i] === '--discard-prev'){newArr.pop()}
    else if (arr[i] === '--double-next') {
      if (i === arr.length - 1) {} else { newArr.push(arr[i + 1]) }
    } else if (arr[i] === '--double-prev' && i === 0) {}
      else if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {}
      else if (arr[i] === '--double-prev'){newArr.push(arr[i - 1])}
      else { newArr.push(arr[i]) }
     i++

    }
   return newArr
};