/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const carry = a & b;
    a ^= b;
    b = carry << 1;
    if (b === 0 && carry === 0) break;
  }
  return a;
};
console.log(getSum(1, 3));
