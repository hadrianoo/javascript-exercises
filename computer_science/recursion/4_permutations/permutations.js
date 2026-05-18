const permutations = function (inputArray) {
  if (inputArray.length === 0) return [[]];
  if (inputArray.length === 1) return [inputArray];

  const answer = [];
  for (let i = 0; i < inputArray.length; i++) {
    const tempArray = permutations(
      inputArray.filter((item, index) => index !== i),
    ).map((item) => [inputArray[i], ...item]);

    answer.push(...tempArray);
  }
  return answer;
};
// Do not edit below this line
module.exports = permutations;
