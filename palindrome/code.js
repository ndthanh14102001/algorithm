/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formatted = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
      if (isAlphanumeric(s[i])) {
          formatted += s[i];
      }
  }

  let start = 0;
  let end = formatted.length - 1;
  while (start < formatted.length) {
      if (formatted[start] !== formatted[end]) return false;
      start++;
      end--;
  }
  return true;
};

const isAlphanumeric = (char) => {
  const charCode = char.charCodeAt(0)
  return (charCode >= "a".charCodeAt(0) &&
      charCode <= "z".charCodeAt(0)) || (charCode >= 48 && charCode <= 57)
}