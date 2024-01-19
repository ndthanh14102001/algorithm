/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var dict = {};

  let result = "";

  let begin = 0;
  let end = 0;
  let head = 0;

  let minLength = s.length + 1;
  let counter = t.length;

  for (var i = 0; i < t.length; i++) {
    if (t[i] in dict) {
      dict[t[i]] += 1;
    } else {
      dict[t[i]] = 1;
    }
  }
  while (end < s.length) {
    if (s[end] in dict) {
      if (dict[s[end]] > 0) {
        counter--;
      }
      dict[s[end]] -= 1;
    }
    end += 1;

    while (counter === 0) {
      if (end - begin < minLength) {
        minLength = end - begin;
        head = begin;
      }
      if (s[begin] in dict) {
        dict[s[begin]] += 1;
        if (dict[s[begin]] > 0) {
          counter++;
        }
      }
      begin++;
    }
  }
  if (minLength === s.length + 1) {
    return "";
  }
  for (let i = head; i < head + minLength; i++) {
    result += s[i];
  }
  return result;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
