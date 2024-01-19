var binary = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((right + left) / 2);
  let index = 0;
  while (left < right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[middle] === target) {
      return middle;
    }
    if (target > nums[middle]) {
      left = middle;
      middle = right / left + middle;
    } else {
      right = middle;
      middle = Math.floor(right / 2);
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let indexGap = 0;
  let currentArray = [nums[0]];
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] < nums[index - 1]) {
      const searchBinaryResult = binary(currentArray, target);
      if (searchBinaryResult !== -1) {
        return indexGap + searchBinaryResult;
      } else {
        currentArray = [nums[index]];
        indexGap = index;
      }
    } else {
      currentArray.push(nums[index]);
    }
  }
  return indexGap + binary(currentArray, target);
};

// console.log(search([0, 1, 2, 4, 5, 6, 7], 5));
//console.log(search([0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([6, 7, 0, 1, 2, 4, 5], 5));
