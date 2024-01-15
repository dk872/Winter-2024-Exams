// Reverse an array, you can't use .reverse()

'use strict';

const invert = (inputArray) => {
  const T = [];
  for (const i of inputArray) {
    T.unshift(i);
  }
  return T;
};

module.exports = invert;
