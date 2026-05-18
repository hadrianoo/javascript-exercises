function isObject(value) {
  return typeof value === "object" && value !== null;
}

const totalIntegers = function (obj) {
  if (!isObject(obj)) return;
  const values = Object.values(obj);

  return values.reduce((sum, item) => {
    if (Number.isInteger(item)) return sum + 1;
    if (isObject(item)) return sum + totalIntegers(item);
    return sum;
  }, 0);
};

// Do not edit below this line
module.exports = totalIntegers;
