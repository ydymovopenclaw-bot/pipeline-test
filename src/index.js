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

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = { add, subtract, multiply, divide, power, squareRoot, factorial };
