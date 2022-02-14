function nthPrimeNumber(n) {
  let numbersFound = 0;
  let nthNumber = 0;
  let i = 2;

  while (numbersFound < n) {
    if (isPrime(i)) {
      nthNumber = i;
      numbersFound++;
    }
    i++;
  }

  return nthNumber;

  function isPrime(number) {
    if (number === 2) return true;
    const limit = Math.ceil(Math.sqrt(number));
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) return false;
    }
    return number > 1;
  }
}

console.log(nthPrimeNumber(6));

function isPrime(number) {
  const limit = Math.ceil(Math.sqrt(number));
  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

console.log(isPrime(2));
