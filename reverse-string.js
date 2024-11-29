let stringName = "William";

function reverseString(str) {
  return str.split("").reverse().join("");
}
let reversedName = reverseString(stringName);
console.log(reversedName);
console.log(stringName.length);

let sentence = "Nigeria is a blessed nation regardless of her bad leaders";
function capitalizeFirstLetter() {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
let capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(capitalizedSentence);
