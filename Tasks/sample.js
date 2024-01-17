// Get one random element from an array

'use strict';

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

module.exports = getRandomElement;
