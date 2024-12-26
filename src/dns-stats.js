const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const changeDomains = domains.map(el => {
    return el.split(".").reverse();
  })

  const result = {}

  for (let i = 0; i < changeDomains.length; i += 1) {
    let subStr = changeDomains[i]
    let str = ""
    for (let j = 0; j < subStr.length; j += 1) {
      str += "." + subStr[j]
      if (str in result) {
        result[str] += 1; 
      } else {
        result[str] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
