// Copy all listed keys from dictionary

'use strict';

const copyKeysFromDictionary = (originalDictionary, ...keysToCopy) => {
  const result = {};
  for (const key of keysToCopy) {
    if (originalDictionary.hasOwnProperty(key)) {
      result[key] = originalDictionary[key];
    }
  }
  return result;
};

module.exports = copyKeysFromDictionary;
