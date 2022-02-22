function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a*b;
}

function divide(a, b) {
  if (b === 0) return false;
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}