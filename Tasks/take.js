// Copy all listed keys from dictionary

'use strict';

const copyKeysFromDictionary = (originalDictionary, ...keysToCopy) => {
  const copiedObject = {}
  for (const key in originalDictionary) {
    if (originalDictionary.hasOwnProperty(key) && keysToCopy.includes(key)) {
      copiedObject[key] = originalDictionary[key];
    }
  }
  return copiedObject;
};

module.exports = copyKeysFromDictionary;
