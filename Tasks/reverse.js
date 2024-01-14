// Reverse dict, exchange keys and values

'use strict';

const reverseData = (data) => {
  const reversedData = {};
  for (const [key, value] of Object.entries(data)) {
    reversedData[value] = key;
  }
  return reversedData;
};

module.exports = reverseData;
