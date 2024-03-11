/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dict = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const key = getKey(str);

    key in dict ? dict[key].push(str) : (dict[key] = [str]);
  }
  return Object.values(dict);
};
/**
 * @param {string} str
 * @return {string}
 */
const getKey = (str) => {
  return str.split("").sort().join("");
};

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
