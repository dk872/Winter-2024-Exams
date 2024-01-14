// Copy all listed keys from dictionary

'use strict';

const tAKe = (DX, ...xor) => {
  const copiedObject = {}
  for (const key in DX) {
    if (DX.hasOwnProperty(key) && xor.includes(key)) {
      copiedObject[key] = DX[key];
    }
  }
  return copiedObject;
};

module.exports = tAKe;
