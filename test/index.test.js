const assert = require('assert');
const { add, subtract, multiply, divide, power, squareRoot, toCamelCase, toSnakeCase, toKebabCase } = require('../src/index');

// Test add
assert.strictEqual(add(2, 3), 5, 'add(2, 3) should equal 5');
assert.strictEqual(add(-1, 1), 0, 'add(-1, 1) should equal 0');
assert.strictEqual(add(0, 0), 0, 'add(0, 0) should equal 0');

// Test subtract
assert.strictEqual(subtract(5, 3), 2, 'subtract(5, 3) should equal 2');
assert.strictEqual(subtract(0, 5), -5, 'subtract(0, 5) should equal -5');

// Test multiply
assert.strictEqual(multiply(3, 4), 12, 'multiply(3, 4) should equal 12');
assert.strictEqual(multiply(5, 0), 0, 'multiply(5, 0) should equal 0');

// Test divide
assert.strictEqual(divide(10, 2), 5, 'divide(10, 2) should equal 5');
assert.throws(() => divide(1, 0), /Division by zero/, 'divide(1, 0) should throw');

// Test power
assert.strictEqual(power(2, 3), 8, 'power(2, 3) should equal 8');
assert.strictEqual(power(5, 0), 1, 'power(5, 0) should equal 1');
assert.strictEqual(power(0, 0), 1, 'power(0, 0) should equal 1');
assert.strictEqual(power(3, 2), 9, 'power(3, 2) should equal 9');

// Test squareRoot
assert.strictEqual(squareRoot(9), 3, 'squareRoot(9) should equal 3');
assert.strictEqual(squareRoot(0), 0, 'squareRoot(0) should equal 0');
assert.strictEqual(squareRoot(4), 2, 'squareRoot(4) should equal 2');
assert.throws(() => squareRoot(-1), /Cannot take square root of negative number/, 'squareRoot(-1) should throw');

// Test toCamelCase
assert.strictEqual(toCamelCase('hello_world'), 'helloWorld', 'toCamelCase("hello_world") should equal "helloWorld"');
assert.strictEqual(toCamelCase('hello-world'), 'helloWorld', 'toCamelCase("hello-world") should equal "helloWorld"');
assert.strictEqual(toCamelCase('helloWorld'), 'helloWorld', 'toCamelCase already camelCase');
assert.strictEqual(toCamelCase(''), '', 'toCamelCase("") should equal ""');
assert.strictEqual(toCamelCase('a'), 'a', 'toCamelCase single char');

// Test toSnakeCase
assert.strictEqual(toSnakeCase('helloWorld'), 'hello_world', 'toSnakeCase("helloWorld") should equal "hello_world"');
assert.strictEqual(toSnakeCase('hello_world'), 'hello_world', 'toSnakeCase already snake_case');
assert.strictEqual(toSnakeCase(''), '', 'toSnakeCase("") should equal ""');
assert.strictEqual(toSnakeCase('a'), 'a', 'toSnakeCase single char');

// Test toKebabCase
assert.strictEqual(toKebabCase('hello_world'), 'hello-world', 'toKebabCase("hello_world") should equal "hello-world"');
assert.strictEqual(toKebabCase('helloWorld'), 'hello-world', 'toKebabCase("helloWorld") should equal "hello-world"');
assert.strictEqual(toKebabCase('hello-world'), 'hello-world', 'toKebabCase already kebab-case');
assert.strictEqual(toKebabCase(''), '', 'toKebabCase("") should equal ""');
assert.strictEqual(toKebabCase('a'), 'a', 'toKebabCase single char');

console.log('All tests passed ✅');
