// Find an intersection of two dictionaries

'use strict';

const intersectionOfDictionaries = (object1, object2) => {
  const firstKeys = Object.keys(object1);
  for (const attributeName of firstKeys) {
    object1[attributeName] !== object2[attributeName] && delete object1[attributeName];
  }
  return object1;
};

module.exports = intersectionOfDictionaries;
