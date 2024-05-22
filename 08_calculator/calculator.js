const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
  let result = 0;
	for (const arg of args) {
    if(Array.isArray(arg))
    {
      for (let i = 0; i < arg.length; i++) {
        let a = Number.parseInt(arg[i]);
        if(Number.isInteger(a))
          result += a;
        else
          result += 0;
      }
    }
    else
    {
      let a = Number.parseInt(arg);
      if(Number.isInteger(a))
        result += a;
      else
        result += 0;
    }
  }
  return result;
};

const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    let a = Number.parseInt(array[i]);
    if(Number.isInteger(a))
      result *= a;
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if(a === 0) return 1;
  let result = 1;
	for(let i = 1; i <= a; i++)
  {
    result *= i;
  }
  return Number.parseInt(result);
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
