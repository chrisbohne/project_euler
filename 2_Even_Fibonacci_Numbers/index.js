function sumOfEvenFibonacciNumbers(maxValue) {
  if (maxValue === 0 || maxValue === 1) return 0
  let sum = 2;
  function getFibonacciNums(firstVal, secondVal) {
    const currFib = firstVal + secondVal;
    if (currFib > maxValue) return
    if (currFib % 2 === 0) sum += currFib
    getFibonacciNums(secondVal, currFib)
  }
  getFibonacciNums(1,2)
  return sum
}

console.log(sumOfEvenFibonacciNumbers(8))