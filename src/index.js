module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let openBrackets = [];
  let braketsPairs = {};
  let stack = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    braketsPairs[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < str.length; i++ ) {
    if (stack.length && braketsPairs[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      if (openBrackets.includes(str[i])) {
        stack.push(str[i]);
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
