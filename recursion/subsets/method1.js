/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const backtracking = (arr = [], index = 0) => {
      result.push(arr);
      if (arr.length === nums.length) {
          return;
      }

      for (let i = index; i < nums.length; i++) {
          backtracking([...arr, nums[i]], i + 1)
      }
  }
  backtracking();
  return result;
};