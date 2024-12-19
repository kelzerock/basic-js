const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string") return false;
  let num = parseFloat(sampleActivity);
  if(isNaN(num) || num <= 0 || num >= 15) return false;
  let result = Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(result)
}

module.exports = {
  dateSample
};
