const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  store: [],

  getLength() {
    return this.store.length;
  },
  addLink(value) {
    this.store.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number")
      throw new Error("You can't remove incorrect link!");
    const realPosition = position - 1;
    if (realPosition >= 0 && realPosition < this.store.length - 1) {
      this.store.splice(realPosition, 1);
      return this;
    } else {
      this.store = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.store = this.store.reverse();
    return this;
  },
  finishChain() {
    const result = this.store.join("~~");
    this.store = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
