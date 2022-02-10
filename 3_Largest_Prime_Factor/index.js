function largestPrimeFactor(number) {
  function isPrime(number) {
    const limit = Math.sqrt(number)
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) return false
    }
    return number > 1
  }
  var limitOfFinalNumber = Math.ceil(Math.sqrt(number))
  while (!(isPrime(limitOfFinalNumber) && number % limitOfFinalNumber === 0)) {
    limitOfFinalNumber -= 2
  }
  return limitOfFinalNumber
}

console.log(largestPrimeFactor(600851475143))