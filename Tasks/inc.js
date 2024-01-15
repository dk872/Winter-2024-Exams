// Increment all numbers in dictionary

'use strict';

const incrementNumbers = (formatComplete, ...restVariables) => {
  for (const [key, value] of Object.entries(formatComplete)) {
    if (typeof value === 'number') {
      formatComplete[key] += 1;
    }
  }
  return formatComplete;
};

module.exports = incrementNumbers;
