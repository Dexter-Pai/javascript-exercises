const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function() {
  return [...arguments[0]].reduce((total, value) => total += value , 0)
};

const multiply = function(numarray) {
  return numarray.reduce((total, value) => total *= value)
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(numOfFactorial) {
  let array = [];
  if (numOfFactorial === 0) return 1;
	for(let i = 1; i <= numOfFactorial; i++) array.push(i);
  return array.reduce((total, value) => total *= value);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
