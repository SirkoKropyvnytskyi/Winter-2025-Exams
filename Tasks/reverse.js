// Refactor following solution
// Reverse dict, exchange keys and values

const reverse = (data) => {
  const result = {};
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const value = data[key];
    result[value] = key;
  });
  return result;
};

module.exports = reverse;
