const assert = require('assert');
const { add, subtract } = require('../src/index');

// Test add
assert.strictEqual(add(2, 3), 5, 'add(2, 3) should equal 5');
assert.strictEqual(add(-1, 1), 0, 'add(-1, 1) should equal 0');
assert.strictEqual(add(0, 0), 0, 'add(0, 0) should equal 0');

// Test subtract
assert.strictEqual(subtract(5, 3), 2, 'subtract(5, 3) should equal 2');
assert.strictEqual(subtract(0, 5), -5, 'subtract(0, 5) should equal -5');

console.log('All tests passed ✅');
