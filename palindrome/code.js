/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formatted = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) >= "a".charCodeAt(0) &&
      s.charCodeAt(i) <= "z".charCodeAt(0)
    ) {
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

console.log(isPalindrome("A man, a plan, a canal: Panama"));
