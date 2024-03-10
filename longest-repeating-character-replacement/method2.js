/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const lengths = [];
  const chars = [];

  let currentChar = s[0];
  let length = 0;
  for (let index = 0; index <= s.length; index++) {
    if (index == s.length) {
      lengths.push(length);
      chars.push(currentChar);
      break;
    }
    const char = s[index];
    if (char === currentChar) {
      length++;
    } else {
      lengths.push(length);
      chars.push(currentChar);
      length = 1;
      currentChar = char;
    }
  }

  let max = 0;
  for (let index = 0; index < chars.length; index++) {
    const char = chars[index];

    let length = lengths[index];
    let copyK = k;

    let left = index - 1;
    while (left >= 0) {
      if (char === chars[left]) {
        length += lengths[left];
      } else {
        if (copyK >= lengths[left]) {
          copyK -= lengths[left];
          length += lengths[left];
        } else {
          length += copyK;
          copyK = 0;
          break;
        }
      }

      left--;
    }

    let right = index + 1;
    while (right < chars.length) {
      if (char === chars[right]) {
        length += lengths[right];
      } else {
        if (copyK >= lengths[right]) {
          copyK -= lengths[right];
          length += lengths[right];
        } else {
          length += copyK;
          copyK = 0;
          break;
        }
      }

      right++;
    }
    if (length > max) {
      max = length;
    }
  }
  return max;
};

console.log(characterReplacement("AABABBA", 1));
