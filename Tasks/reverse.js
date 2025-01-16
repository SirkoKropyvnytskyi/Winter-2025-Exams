// Refactor following solution
// Reverse dict, exchange keys and values
'use strict';

const reverse = (data) => {
  return Object.keys(data).reduce((result, key) => {
    result[data[key]] = key;
    return result;
  }, {});
};

module.exports = reverse;