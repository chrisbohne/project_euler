function sumOfMultiplesOfThreeOrFive(belowNumber) {
  let sum = 0;
  for (let i = 1; i < belowNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i
  }
  return sum;
}

console.log(sumOfMultiplesOfThreeOrFive(1000))