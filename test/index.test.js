const assert = require('assert');
const { add, subtract, multiply, divide, power, squareRoot } = require('../src/index');

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
assert.throws(() => squareRoot(-1), /Input must be non-negative/, 'squareRoot(-1) should throw');

console.log('All tests passed ✅');
