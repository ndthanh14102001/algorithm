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

const getKey = (str) => {
  const count = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const asciiCode = char.charCodeAt(0);
    const positionInAphabet = asciiCode - "a".charCodeAt(0);
    count[positionInAphabet]++;
  }

  let key = "";
  for (let index = 0; index < count.length; index++) {
    const element = count[index];
    key += `${element}${String.fromCharCode(index + "a".charCodeAt(0))}`;
  }
  return key;
};

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
