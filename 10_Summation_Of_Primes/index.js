function summationOfPrimes(num) {
  let sum = 0;
  const primeArr = createPrimeArr(num);

  for (let i = 2; i < num; i++) {
    if (primeArr[i]) sum += i;
  }

  return sum;

  // using sieve of Eratosthenes (great alogrithm for finding prime numbers)
  function createPrimeArr(num) {
    // create Array from 0 to num - 1
    const arr = new Array(num).fill(true);
    // remove multiples of prime numbers (2,3,5...) and set the index to false
    for (let i = 2; i * i < num; i++) {
      if (arr[i] === true) {
        for (let j = i * i; j < num; j += i) {
          arr[j] = false;
        }
      }
    }
    // returns arr where all indexes set to true are primes (except index 0 and 1)
    return arr;
  }
}

console.log(summationOfPrimes(2000000));
