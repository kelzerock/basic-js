const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
let count=0;
newArr=arr.flat(1000)
for(let i = 0; i<newArr.length;i++){
  if(newArr[i]=="^^"){
    count++
  }


}
return count
};
