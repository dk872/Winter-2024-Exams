// Find an intersection of two dictionaries

'use strict';

const intersectDictionaries = (object1, object2) => {
  const result = {};
  const firstKeys = Object.keys(object1);
  for (const attributeName of firstKeys) {
    if (object2[attributeName] === object1[attributeName]) {
      result[attributeName] = object1[attributeName];
    }
  }
  return result;
};

module.exports = intersectDictionaries;
