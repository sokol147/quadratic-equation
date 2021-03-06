module.exports = function solveEquation(equation) {
  const pattern = /-?\s?\d+/g;
  const numbers = [];
  let numbersAsString = equation.match(pattern);

  for(let i = 0, len = numbersAsString.length; i < len; i++){
    numbers.push(numbersAsString[i].replace(/\s+/g, ''));
  }

  let a = numbers[0];
  let b = numbers[2];
  let c = numbers[3];

  const D = Math.pow(b,2) - 4 * a * c;

  const xOne = (- b + Math.sqrt(D)) / (2 * a);
  const xTwo = (- b - Math.sqrt(D)) / (2 * a);

  const result = [Math.round(xOne),Math.round(xTwo)];

  return result.sort(function(x,y){return x - y});;
}
