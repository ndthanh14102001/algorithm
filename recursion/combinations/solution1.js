/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const backtracking = (numbers = []) => {
      if (numbers.length === k) {
          result.push([...numbers])
          return;
      }
      const maxNum = n - (k - numbers.length - 1)
      const lastNumber = numbers[numbers.length - 1]
      for (let i = lastNumber + 1 || 1; i <= maxNum; i++) {
          numbers.push(i);
          backtracking(numbers)
          numbers.pop()
      }
  }
  backtracking();
  return result;
};

