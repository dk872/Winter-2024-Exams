// Copy all listed keys from dictionary

'use strict';

const copyKeysFromDictionary = (originalDictionary, ...keysToCopy) => {
  const keys = Object.keys(originalDictionary);
  for (const key of keys) {
    if (!keysToCopy.includes(key)) {
      delete originalDictionary[key];
    }
  }
  return originalDictionary;
};

module.exports = copyKeysFromDictionary;
