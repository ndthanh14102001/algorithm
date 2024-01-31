/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxSize = 0;
  let left = 0;
  const dict = {};

  if (s.length === 0 || s.length === 1) return s.length;

  for (let i = 0; i < s.length; i++) {
    while (s[i] in dict) {
      delete dict[s[left]];
      left++;
    }

    dict[s[i]] = true;

    if (i + 1 - left > maxSize) {
      maxSize = i + 1 - left;
    }
  }
  return maxSize;
};
console.log(lengthOfLongestSubstring("au"));
