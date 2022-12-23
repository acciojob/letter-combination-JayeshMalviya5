function letterCombinations(input_digit) {
  const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '0': ['0'],
  '1': ['1']
};

function getAllCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    return map[digits[0]];
  }

  const result = [];
  const combinations = getAllCombinations(digits.slice(1));
  for (const letter of map[digits[0]]) {
    for (const combination of combinations) {
      result.push(letter + combination);
    }
  }
  return result;
}
}

module.exports = letterCombinations;
