/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numNeedDict = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const subTraction = target - num;
    if (subTraction in numNeedDict) {
      return [index, numNeedDict[subTraction]];
    } else {
      numNeedDict[num] = index;
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
