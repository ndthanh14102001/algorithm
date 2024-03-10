/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const frenquency = {};
  let max = 0;
  let start = 0;
  let maxFrequence = 0;
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (char in frenquency) {
      frenquency[char] += 1;
    } else {
      frenquency[char] = 1;
    }

    const distance = end - start + 1;
    maxFrequence = Math.max(maxFrequence, frenquency[s[end]]);
    if (distance - maxFrequence > k) {
      frenquency[s[start]] -= 1;
      start++;
    } else {
      max = Math.max(distance, max);
    }
  }
  return max;
};

console.log(characterReplacement("CABBBAA", 2));
