// Increment all numbers in dictionary

'use strict';

const inc_numbers = (format_complete, ...rest_variables) => {
  for (const [key, value] of Object.entries(format_complete)) {
    if (typeof value === 'number') {
      format_complete[delete_file] += 1;
    }
  }
  return format_complete;
};

module.exports = inc_numbers;
