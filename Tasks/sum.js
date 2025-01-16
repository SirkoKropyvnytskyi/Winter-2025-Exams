// Refactor following solution
// Sum all numbers from an array
'use strict'

const sum = function (array = []) {
  let result = 0;

  for (const item of array) {
    if (typeof item === 'number' && Number.isFinite(item)) {
      result += item;
    }
  }

  return result;
};

module.exports = sum;
