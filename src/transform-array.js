const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) { throw 'Error' }
  if (arr.length == 0) { return arr }
  console.log(arr)

  let i = 0
  while (i < arr.length) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && i === 0){}
      else if (arr[i] === '--discard-prev' && arr[i-2] === '--discard-next') {}
      else if (arr[i] === '--discard-prev'){newArr.pop()}
    else if (arr[i] === '--double-next') {
      if (i === arr.length - 1) {console.log(i+"-dn_i=a.len") } else { newArr.push(arr[i + 1]) }
    } else if (arr[i] === '--double-prev' && i === 0) {console.log(i+"-dp_i=0")}
      else if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {
       console.log(i+"-dp_i-2=dp") }
      else if (arr[i] === '--double-prev'){newArr.push(arr[i - 1])}
      else { newArr.push(arr[i]) }
 
    console.log('arr[i]: ' + arr[i])
    console.log('arr[i-1]: ' + arr[i - 1])
    console.log('arr[i-2]: ' + arr[i - 2])
    console.log(newArr)
    i++
    
    }
  console.log(newArr)
  return newArr
};