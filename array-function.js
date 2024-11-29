let numbers = [34, 12, 89, 5, 67, 2];

function sumNumbers(num) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += num[i];
  }
  return sum;
}
let addNumbers = sumNumbers(numbers);
console.log(addNumbers);

// finding maximum
let scores = [34, 12, 89, 5, 67, 2];
function maxNumbers(num) {
  let max = [0];
  for (i = 1; i < num.length; i++)
    if (num[i] > max) {
      max = num[i];
    }
  return max;
}
let maximumNumber = maxNumbers(scores);
console.log(maximumNumber);

//finding the minimum

let data = [34, 12, 89, 5, 67, 2];
function minNumbers(num) {
  let min = num[0]; // the num must always be declared
  for (i = 1; i < num.length; i++)
    if (num[i] < min) {
      min = num[i];
    }
  return min;
}
let minimumNumber = minNumbers(data);
console.log(minimumNumber);

//filtering elements in an array based on a condition

let studentAge = [12, 15, 9, 8, 13, 18, 4];
let threshold = 9;
function filterAge(num, condition) {
  return num.filter(condition);
}
let filteredAge = filterAge(studentAge, (num) => num <= threshold);
console.log(filteredAge);
