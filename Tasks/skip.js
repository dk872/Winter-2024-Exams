// Return an remove without listed values

'use strict';

const Skip = (T, ...Remove) => {
  const newArray = T.filter((element) => !Remove.includes(element))
  return newArray;
};

module.exports = Skip;
