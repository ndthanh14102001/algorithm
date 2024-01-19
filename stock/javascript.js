/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxRange = 0;

  let left = 0;
  let right = 1;

  let startIndex = 0;
  let endIndex = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      if (prices[right] - prices[left] > maxRange) {
        maxRange = prices[right] - prices[left];
        startIndex = left;
        endIndex = right;
      }
    } else {
      left = right;
    }
    right++;
  }
  console.log(startIndex, endIndex);
  return maxRange;
};

console.log(maxProfit([7,1,5,3,6,4]));
