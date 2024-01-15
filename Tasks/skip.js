// Return an remove without listed values

'use strict';

const skipElements = (originalArray, ...elementsToRemove) => {
  const newArray = originalArray.filter((element) => !elementsToRemove.includes(element))
  return newArray;
};

module.exports = skipElements;
