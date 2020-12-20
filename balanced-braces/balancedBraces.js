function balancedBraces(str) {
  const opening = { "[": true, "(": true, "{": true };
  const closing = { "]": true, ")": true, "}": true };
  const map = { "[": "]", "(": ")", "{": "}" };
  const stack = [];
  const charArray = str.split("");

  for (let i = 0; i < charArray.length; i++) {
    const currentChar = charArray[i];
    if (opening[currentChar]) {
      stack.push(currentChar);
    } else if (closing[currentChar]) {
      const lastOpenedBrace = stack.pop();
      if (currentChar !== map[lastOpenedBrace]) {
        return false;
      }
    }
  }

  return stack.length ? false : true;
}

module.exports = {
  balancedBraces,
};
