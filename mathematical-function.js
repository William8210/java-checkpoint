function factorialFive() {
  let n = 5;
  let result = 1;
  for (let i = 2; i <= 5; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialFive());

// PRIME NUMBER
function primeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(primeNumber(3));

// FIBONACCI SEQUENCE

function fibonacciSequence(n) {
  let fibSequence = [];
  if (n <= 0) {
    return fibSequence;
  } else if (n === 1) {
    return [0];
  }

  fibSequence.push(0, 1);

  for (let i = 2; i < n; i++) {
    let nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextNumber);
  }

  return fibSequence;
}
console.log(fibonacciSequence(5));
