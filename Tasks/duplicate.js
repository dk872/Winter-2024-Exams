// Return an array without duplicates

'use strict';

const duplicate = (value, N) => {
  if (N <= 0) {
    return [];
  } else {
    const result = Array(N).fill(value);
    return result;
  }
};

module.exports = duplicate;
