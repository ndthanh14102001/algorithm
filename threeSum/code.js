var twoSum = (nums, startIndex, target) => {
  const dict = {};
  for (let i = startIndex; i < nums.length; i++) {
      const subTraction = target - nums[i];
      if (subTraction in dict) {
          return [subTraction, nums[i]]
      }
      dict[nums[i]] = true;
  }
  return [];
}
/**
* @param {number[]} nums
* @return {number[][]}
*/
var threeSum = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
      const twoSumResult = twoSum(nums, i + 1, 0 - nums[i])
      if (twoSumResult.length === 2) {
          result.push([nums[i], ...twoSumResult])
      }
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))