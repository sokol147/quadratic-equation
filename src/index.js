module.exports = function solveEquation(equation) {
  // your implementation
  let pattern = /-?\s?\d+/g;

  let numbersAsString = equation.match(pattern);
  let numbers = [];

  for(let i = 0; i < numbersAsString.length; i++){
    numbers.push(numbersAsString[i].replace(/\s+/g, ''));
  }

  let a = numbers[0];
  let b = numbers[2];
  let c = numbers[3];

  let discriminant = Math.pow(b,2) - 4 * a * c;

  let xOne = (- b + Math.sqrt(discriminant)) / (2 * a);
  let xTwo = (- b - Math.sqrt(discriminant)) / (2 * a);

  let result = [Math.round(xOne),Math.round(xTwo)];

  result.sort(function(x,y){return x - y});

  return result;
}
