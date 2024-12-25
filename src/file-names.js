const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  names.forEach((el, ind) => {
    let count = 0;
    if (ind === 0) {
      result.push(el);
    } else {
      for (let i = 0; i < ind; i += 1) {
        console.log({ name: result[i], el });
        if (result[i] === el) {
          count += 1;
        } else {
          let positionName = result[i].lastIndexOf("(");
          let name =
            positionName === -1 ? result[i] : result[i].slice(0, positionName);
          if (name === el) {
            count += 1;
          }
        }
      }
      if (count) {
        result.push(el + `(${count})`);
      } else {
        result.push(el);
      }
    }
  });
  return result;
}

module.exports = {
  renameFiles,
};
