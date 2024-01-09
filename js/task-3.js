'use strict';
class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value; // Get current string
  }
  padEnd(str) {
    this.#value = `${this.#value}${str}`; // Add to the end of string
  }
  padStart(str) {
    this.#value = `${str}${this.#value}`; // Add to the start of string
  }
  padBoth(str) {
    this.#value = `${str}${this.#value}${str}`; // Add to the start and end of string
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
