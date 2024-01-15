// Reverse an array, you can't use .reverse()

'use strict';

const reverseArray = (inputArray) => {
  const reversedArray = [];
  for (const item of inputArray) {
    reversedArray.unshift(item);
  }
  return reversedArray;
};

module.exports = reverseArray;
