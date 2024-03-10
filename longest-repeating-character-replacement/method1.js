/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 1) {
    return s.length;
  }

  let max = 0;
  let start = 0;
  let firstChangedPosition = 0;
  let currentChar = s[0];
  let currentLength = 0;

  if (k > 0) {
    let copyK = k;
    while (start < s.length) {
      if (currentChar !== s[start]) {
        if (copyK > 0) {
          firstChangedPosition = start;
          copyK -= 1;
          currentLength++;
        } else {
          copyK = k;
          currentLength = 0;
          start = firstChangedPosition;
        }
      } else {
        currentLength++;
      }
      if (currentLength > max) {
        max = currentLength;
      }
      start++;
    }
    start = s.length - 1;
    currentChar = s[s.length - 1];
    currentLength = 0;
    while (start >= 0) {
      if (currentChar !== s[start]) {
        if (copyK > 0) {
          firstChangedPosition = start;
          copyK -= 1;
          currentLength++;
        } else {
          copyK = k;
          currentLength = 0;
          start = firstChangedPosition;
        }
      } else {
        currentLength++;
      }
      if (currentLength > max) {
        max = currentLength;
      }
      start--;
    }
  } else {
    while (start < s.length) {
      if (currentChar === s[start]) {
        currentLength++;
      } else {
        currentLength = 1;
        currentChar = s[start];
      }
      if (currentLength > max) {
        max = currentLength;
      }
      start++;
    }

    start = s.length - 1;
    currentChar = s[s.length - 1];
    currentLength = 0;
    while (start >= 0) {
      if (currentChar === s[start]) {
        currentLength++;
      } else {
        currentLength = 1;
        currentChar = s[start];
      }
      if (currentLength > max) {
        max = currentLength;
      }
      start--;
    }
  }

  return max;
};

console.log(characterReplacement("AABABBA", 1));
