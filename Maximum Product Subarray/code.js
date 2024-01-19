/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let multi = 1;
  let max = nums[0];
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
      multi *= nums[i];
      if (multi >= max) {
          max = multi;
          maxIndex = i;
      }

  }
  max = nums[maxIndex];
  multi = 1;
  for (let i = maxIndex; i >= 0; i--) {
      multi *= nums[i];
      if (multi >= max) {
          max = multi;
      }

  } 
  return max;
};

console.log(maxProduct([3,-1,4]))