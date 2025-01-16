// Refactor following solution
// Sum all number values in dict

const count = (obj) => {
  let sum = 0;
  Object.values(obj).forEach((value) => {
    if (typeof value === 'number') sum += value;  
  });
  return sum;  
};

module.exports = count;
