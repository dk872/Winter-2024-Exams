// Copy all listed keys from dictionary

'use strict';

const copyKeysFromDictionary = (originalDictionary, ...keysToCopy) => {
  const T = Object.keys(originalDictionary);
  for (const key of T) {
    if (!keysToCopy.includes(key)) {
      delete originalDictionary[key];
    }
  }
  return originalDictionary;
};

module.exports = copyKeysFromDictionary;
