// Reverse dict, exchange keys and values

'use strict';

const reverseDict = (data) => {
  const reversedData = {};
  for (const [key, value] of Object.entries(data)) {
    reversedData[value] = key;
  }
  return reversedData;
};

module.exports = reverseDict;
