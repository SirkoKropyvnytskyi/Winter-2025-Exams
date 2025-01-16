// Refactor following solution
// Sum all numbers from an array
'use strict'

const sum = function (array = []) {
  let results = [0];

  for (const item of array) {
    if (typeof item === 'number') {
      const newSum = results[results.length - 1] + item;
      results.push(newSum); 
    }
  }

  return results[results.length - 1];  
};

module.exports = sum;
