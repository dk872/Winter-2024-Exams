// Reverse an array, you can't use .reverse()

'use strict';

const invert = (inputArray) => {
  const reversedArray = [];
  for (let i = inputArray.length - 1; i >= 0; i--) {
    reversedArray.push(inputArray[i]);
  }
  return reversedArray;
};

module.exports = invert;
