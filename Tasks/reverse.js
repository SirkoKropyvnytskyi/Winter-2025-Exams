// Refactor following solution
// Reverse dict, exchange keys and values

const reverse = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    const value = data[key];
    data[value] = key;
    delete data[key];
  });
  return data;
};

module.exports = reverse;
