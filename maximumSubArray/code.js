var maxSubArray = function (nums) {
  let max = nums[0];
  let currentSum = 0;
  for (let index = 0; index < nums.length; index++) {
    currentSum = currentSum > 0 ? currentSum : 0;
    currentSum += nums[index];

    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};
console.log("maxSubArray", maxSubArray([-3, -1]));
