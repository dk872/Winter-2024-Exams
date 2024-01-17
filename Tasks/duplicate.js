// Return an array without duplicates

'use strict';

const removeDuplicates = (value, count) => {
  if (count <= 0) {
    return [];
  }
  const result = new Array(count).fill(value);
  return result;
};

module.exports = removeDuplicates;
