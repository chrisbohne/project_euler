const findLargestPalindrome = function(digits) {
  const maxNumber = Math.pow(+'9'.repeat(digits),2);

  const isPalindrome = function(number) {
    const numberToString = ''+number;
    const len = numberToString.length;
    for (let i = 0; i < len/2; i++) {
      if (!(numberToString[i] === numberToString[len -1 -i])) {
        return false
      }
    }
    return true
  }

  const hasNDigitFactor = function (number, maxNumber) {
    for (let i = maxNumber; i > Math.sqrt(number); i--) {
      if (number % i === 0) {
        console.log(i)
        return true
      }
    }
    return false
  }

  for (let i = maxNumber; i > 0; i--) {
    if (isPalindrome(i) && hasNDigitFactor(i, Math.sqrt(maxNumber))) return i
  }

  return false;
}

console.log(findLargestPalindrome(3))