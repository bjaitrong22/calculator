//business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1,number2) {
  return number1/number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a numer: "));
const number2 = parseInt(prompt("Enter another number: "));

window.alert("\n" + number1 + "+" + number2 + "=" + add(number1,number2) + "\n" + number1 + "-" + number2 + "=" + subtract(number1, number2) + "\n" + number1 + "*" + number2 + "=" + multiply(number1,number2) + "\n" + number1 + "/" + number2 + "=" + divide(number1,number2) + "\n");