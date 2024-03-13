/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const backtracking = (numbers = []) => {
      if (numbers.length === k) {
          result.push(numbers)
          return;
      }
      const maxNum = n - (k - numbers.length - 1)
      const lastNumber = numbers[numbers.length - 1]
      for (let i = 1; i <= n; i++) {
          if (!numbers.includes(i)) {
              backtracking([...numbers, i])
          }
      }
  }
  backtracking();
  return removeSameValues(result);
};

const removeSameValues = (array = []) => {
  const dict = {};
  const result = [];
  for (let i = 0; i < array.length; i++) {
      const key = getKey(array[i])
      if (!(key in dict)) {
          dict[key] = true;
          result.push(array[i])
      }
  }
  return result;
}
const getKey = (numbers) => {
  let exist = Array(9).fill(0)
  for (let i = 0; i < numbers.length; i++) {
      exist[numbers[i]] = numbers[i];
  }
  return exist.join("");
}