const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr)){
  let out = arr.some(item => {  
    if(typeof(item)==='string') {
        return true
      } else {return false}})
      // console.log(out)
    } else {return false}
    // if(out === false){return false} else {}

    let newArr = arr.filter(item => {
      return typeof (item) === 'string'
    })
    // console.log(newArr)
    let newArr1 = newArr.map(item =>{
      return item.toUpperCase().trim()
    })
    // console.log(newArr1)
    newArr1.sort()
    // console.log(newArr1)
    let arrLit= newArr1.map(item =>{
      return item[0]
    })
  
    return arrLit.join('')
  };