const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if(date === undefined){return 'Unable to determine the time of year!'}
  function isValidDate(value) {
    var dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}
// if (!(date instanceof Date)){return 'THROW'}
let season = ''
  if(isValidDate(date)){season = date.getMonth()}
  else {throw new Error()}
  if (!date.getTime() === date.getTime()) {
    throw new Error();
}
  console.log(season)
if(season<=1 || season>=11){return 'winter'}
  else if(season>=2 && season<=4){return 'spring'}
  else if(season>=5 && season<=7){return 'summer'}
  else if(season>=8 && season<=10){return 'autumn'}
  
};
 