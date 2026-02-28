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

function toCamelCase(str) {
  if (!str) return str;
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

function toSnakeCase(str) {
  if (!str) return str;
  return str
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/[-](.)/g, '_$1');
}

function toKebabCase(str) {
  if (!str) return str;
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/[_](.)/g, '-$1');
}

module.exports = { add, subtract, multiply, divide, power, squareRoot, toCamelCase, toSnakeCase, toKebabCase };
