let inputData = "1 и -5.8 или 10 хотя 34 + -5.3 и 73";

function getMinMax(str) {
  let numbers = str.match(/-?\d+(\.\d+)?/g).map(Number);
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let result = { min, max };
  return result;
}

console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }
