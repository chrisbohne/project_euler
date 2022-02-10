function smallestMultiple (startValue, endValue) {
  let number = endValue;
  while (!canBeDividedByAll(number, startValue, endValue)) {
    if (number % 2 === 0) number += 2
    else number++
  }
  return number

  function canBeDividedByAll(number, startValue, endValue) {
    for (let i = startValue; i <= endValue; i++) {
      if (!(number % i === 0)) return false
    }
    return true
  }
}

console.log(smallestMultiple(1,20))