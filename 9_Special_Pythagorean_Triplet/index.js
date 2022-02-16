// a^2 + b^2 =c^2 && a + b + c = 1000
// a^2 + b^2 = (1000 - a - b)^2
// a^2 + b^2 = (1000 - (a + b))^2
// a^2 + b^2 = 1000^2 - 2000(a+b) + (a + b)^2
// a^2 + b^2 = 1000000 - 2000(a+b) + a^2 + 2ab + b^2
// 0 = 1000000 - 2000(a+b) + 2ab
// 1000(a+b) - ab = 500000
// 1000a + 1000b - ab = 500000
// a(1000 - b) + 1000b = 500000
// a = (500000 - 1000b) / (1000 - b)

//a^2 + b^2 = c^2 && a + b + c = sum
//a^2 + b^2 = (sum - (a + b))^2
//a^2 + b^2 = sum^2 - 2*sum(a+b) + (a + b)^2
// 0 = sum^2 - 2*sum(a+b) + 2ab
// sum(a+b) - ab = (sum^2)/2
// sum*a + sum*b - ab = (sum^2)/2
// a(sum -b) + sum*b = (sum^2)/2
// a = ((sum^2)/2 - sum*b) / (sum -b)

function findPythagoreanTriplet(sum) {
  let a;
  let b;
  let c;

  for (let i = 1; i < sum; i++) {
    a = (Math.pow(sum, 2) / 2 - sum * i) / (sum - i);
    if (Math.floor(a) === a) {
      b = i;
      c = sum - a - b;
      break;
    }
  }

  return `a=${a}; b=${b}; c=${c}`;
}

console.log(findPythagoreanTriplet(1000));
