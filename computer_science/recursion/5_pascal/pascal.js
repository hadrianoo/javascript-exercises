const pascal = function (n) {
  if (n === 1) return [1];

  let newArr = [];
  const array = [0, ...pascal(n - 1), 0];

  for (let i = 0; i < n; i++) {
    newArr.push(array[i] + array[i + 1]);
  }
  return newArr;
};

// Do not edit below this line
module.exports = pascal;
