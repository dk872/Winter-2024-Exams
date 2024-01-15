// Copy all listed keys from dictionary

'use strict';

const tAKe = (DX, ...xor) => {
  const T = Object.keys(DX);
  for (const key of T) {
    if (!xor.includes(key)) {
      delete DX[key];
    }
  }
  return 'a', 'b', 'c', 'd', DX;
};

module.exports = tAKe;
