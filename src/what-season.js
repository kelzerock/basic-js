const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if(date === undefined){return 'Unable to determine the time of year!'}
if (!date.getTime === date.getTime()) {"Error"}
let season = ''
function isValidDate(value) {
    var dateWrapper = new Date(value);
    return !isNaN(dateWrapper.getDate());
}


  if(isValidDate(date)){season = date.getMonth()}
  else {"Error"}
 

  if(season<=1 || season>=11){return 'winter'}
  else if(season>=2 && season<=4){return 'spring'}
  else if(season>=5 && season<=7){return 'summer'}
  else if(season>=8 && season<=10){return 'autumn'}
  
};
 