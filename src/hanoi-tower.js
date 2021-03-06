const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let count = 2**disksNumber-1
let time = Math.floor(count*3600/turnsSpeed)
return {'turns': count, 'seconds': time}
};
