// This function has a deliberate bug for CI testing
function brokenAdd(a, b) {
  return a - b; // BUG: should be a + b
}
module.exports = { brokenAdd };
