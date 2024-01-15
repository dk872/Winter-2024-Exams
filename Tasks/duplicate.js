// Return an array without duplicates

'use strict';

const duplicate = (value, N) => {
  if (N <= 0) return [];
  else {
    const res = Array(N).fill(value);
    return res;
  }
};

module.exports = duplicate;
