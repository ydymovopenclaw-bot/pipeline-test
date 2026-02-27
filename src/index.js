/**
 * Simple math utilities for pipeline testing
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function absolute(n) {
  return Math.abs(n);
}

module.exports = { add, subtract, multiply, divide, power, squareRoot, modulo, absolute };
