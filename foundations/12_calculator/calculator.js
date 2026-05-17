const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, item) => acc * item);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let fact = a;
  if (a === 0) return 1;
  for (let i = 1; i < a; i++) {
    fact *= (a - i)
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
