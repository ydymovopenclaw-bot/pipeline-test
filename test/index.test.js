const assert = require('assert');
const { add, subtract, multiply, divide } = require('../src/index');

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

console.log('All tests passed ✅');
