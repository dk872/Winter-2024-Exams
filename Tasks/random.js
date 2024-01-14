// Generate random integer value in given range

'use strict';

const Random = (min, max = min) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
