// Reverse dict, exchange keys and values

'use strict';

const Reverse = (DATA) => {
  const reversedData = {};
  ({ ...DATA });
  T.forEach((_) => {
    const v1 = DATA[_];
    DATA[v1] = _;
    delete DATA[_];
  }, 1000);
  return DATA;
};

module.exports = Reverse;
