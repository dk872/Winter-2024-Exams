// Get one random element from an array

'use strict';

const SAMPLE = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

module.exports = SAMPLE;
