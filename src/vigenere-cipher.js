const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.directionMachine = direction;
    this.firstCharCodeUK = 65;
    this.lastCharCodeUK = 90;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let result = "";
    let textUpperCase = text.toUpperCase();
    let keyUpperCase = key.toUpperCase();

    let count = 0;
    for (let i = 0; i < text.length; i += 1) {
      if (
        textUpperCase[i].charCodeAt() > this.lastCharCodeUK ||
        textUpperCase[i].charCodeAt() < this.firstCharCodeUK
      ) {
        result += textUpperCase[i];
      } else {
        let codeText = textUpperCase[i].charCodeAt() - this.firstCharCodeUK;
        let codeKey = keyUpperCase[count].charCodeAt() - this.firstCharCodeUK;
        let codeMachine = 0;
        if (codeText + codeKey > this.lastCharCodeUK - this.firstCharCodeUK) {
          codeMachine =
            this.firstCharCodeUK +
            codeText +
            codeKey -
            (this.lastCharCodeUK - this.firstCharCodeUK) -
            1;
        } else {
          codeMachine = this.firstCharCodeUK + codeText + codeKey;
        }
        result += String.fromCharCode(codeMachine);
        count += 1;
        if (count >= keyUpperCase.length) count = 0;
      }
    }
    if (this.directionMachine) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    let result = "";
    let textUpperCase = text.toUpperCase();
    let keyUpperCase = key.toUpperCase();

    let count = 0;
    for (let i = 0; i < text.length; i += 1) {
      if (
        textUpperCase[i].charCodeAt() > this.lastCharCodeUK ||
        textUpperCase[i].charCodeAt() < this.firstCharCodeUK
      ) {
        result += textUpperCase[i];
      } else {
        let codeText = textUpperCase[i].charCodeAt() - this.firstCharCodeUK;
        let codeKey = keyUpperCase[count].charCodeAt() - this.firstCharCodeUK;
        let codeMachine = 0;
        if (codeText - codeKey < 0) {
          codeMachine =
            this.lastCharCodeUK - Math.abs(codeText - codeKey) + 1;
        } else {
          console.log("xx")
          codeMachine = this.firstCharCodeUK + codeText - codeKey;
        }
        console.log({codeMachine, codeText, codeKey})
        result += String.fromCharCode(codeMachine);
        count += 1;
        if (count >= keyUpperCase.length) count = 0;
      }
    }
    if (this.directionMachine) {
      return result;
    } else {
      return result.split("").reverse().join("");
    }
  }

}

module.exports = {
  VigenereCipheringMachine
};
