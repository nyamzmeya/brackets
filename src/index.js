module.exports = function check(str, bracketsConfig) {
  let a = [];
  a.push(str[0]);
  for (let i = 1; i != str.length; i++) {
    if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
      a.push(str[i]);
    } else if (str[i] == '}' && a[a.length - 1] == '{') {
      a.pop()
    } else if (str[i] == ']' && a[a.length - 1] == '[') {
      a.pop()
    } else if (str[i] == ')' && a[a.length - 1] == '(') {
      a.pop()
    } else if ((str[i] != ')' && str[i] != '}' && str[i] != ']') && str[i] == a[a.length - 1]) {
      a.pop()
    } else if ((str[i] == 2 && a[a.length - 1] == 1) || (str[i] == 4 && a[a.length - 1] == 3) ||
    (str[i] == 6 && a[a.length - 1] == 5) || (str[i] == 7 && a[a.length - 1] == 7) ||
    (str[i] == 8 && a[a.length - 1] == 8)) {
      a.pop()
    } else {
      a.push(str[i]);
    }
  }
  return (a.length == 0);
}

