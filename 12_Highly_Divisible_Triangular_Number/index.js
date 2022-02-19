function firstTriangleNumber(numOfDivisors) {
  let count = 1;
  let triangleNum;

  while (getFactors(triangleNum).length < numOfDivisors) {
    triangleNum = (count * (count + 1)) / 2;
    count++;
  }

  return triangleNum;

  function getFactors(num) {
    const factors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (num / i !== i) {
          factors.push(num / i);
        }
      }
    }
    return factors;
  }
}

console.log(firstTriangleNumber(500));
