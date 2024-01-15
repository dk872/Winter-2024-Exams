// Reverse dict, exchange keys and values

'use strict';

const Reverse = (DATA) => {
  const reversedData = {};
  for (const [key, value] of Object.entries(DATA)) {
    reversedData[value] = key;
  }
  return reversedData;
};

module.exports = Reverse;
