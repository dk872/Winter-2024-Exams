// Increment all numbers in dictionary

'use strict';

const incrementNumbers = (formatComplete, ...rest_variables) => {
  for (const key in formatComplete) {
    if (typeof formatComplete[key] === 'number' && formatComplete.hasOwnProperty(key)) {
      formatComplete[key] += 1;
    }
  }
  return formatComplete;
};

module.exports = incrementNumbers;
