const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr)){
  let out = arr.some(item => {  
    if(typeof(item)==='string') {
        return true
      } else {return false}})
     } else {return false}
      let newArr = arr.filter(item => {
      return typeof (item) === 'string'
    })
     let newArr1 = newArr.map(item =>{
      return item.toUpperCase().trim()
    })
    newArr1.sort()
    let arrLit= newArr1.map(item =>{
    return item[0]
    })
  
    return arrLit.join('')
  };