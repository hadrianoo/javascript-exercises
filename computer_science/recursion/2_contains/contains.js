const contains = function (object, searchValue) {
  const values = Object.values(object);

  if (values.includes(searchValue)) return true;
  const objectsToSearch = values.filter(
    (item) => typeof item === "object" && item !== null,
  );
  return objectsToSearch.some((item) => contains(item, searchValue));
};

// Do not edit below this line
module.exports = contains;
