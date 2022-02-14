function sumSquareDifference(endNum) {
  const arrayOfNums = Array.from({ length: endNum }, (_, i) => i + 1);
  return squareOfSum(arrayOfNums) - sumOfSquares(arrayOfNums);

  function sumOfSquares(arrayOfNums) {
    return arrayOfNums.reduce((prev, curr) => prev + Math.pow(curr, 2));
  }

  function squareOfSum(arrayOfNums) {
    return Math.pow(
      arrayOfNums.reduce((prev, curr) => prev + curr),
      2
    );
  }
}

console.log(sumSquareDifference(100));
