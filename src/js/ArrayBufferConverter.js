/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

export default class ArrayBufferConverter {
  constructor() {}

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
