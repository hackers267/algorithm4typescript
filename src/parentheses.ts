import Stack from "./base/stack";

/**
 * @author silence_zhpf
 * @desc 判断一个字符串内括号是否正确配对
 * @param {string} bracketStr 只包含括号的字符串
 * @returns {boolean} 字符串内括号是否正确配对
 */
/*
 * 不匹配的情况：
 * 1. 左右括号数不一致
 * 2. 左右括号配对不争取
 */
function parentheses(bracketStr: string) {
  const stack = new Stack();
  const leftBracketSet = new Set(["(", "[", "{"]);
  const rightBracketSet = new Set([")", "]", "}"]);
  function getBracketCount(set: Set<string>) {
    return (string: string) =>
      string.split("").reduce((previousValue: number, currentValue: string) => {
        if (set.has(currentValue)) {
          return previousValue + 1;
        }
        return previousValue;
      }, 0);
  }
  const getLeftBracketCount = getBracketCount(leftBracketSet);
  const getRightBracketCount = getBracketCount(rightBracketSet);
  const rightBracketCount = getLeftBracketCount(bracketStr);
  const leftBracketCount = getRightBracketCount(bracketStr);
  /*
   * 左右括号数不一致，返回 false
   */
  if (leftBracketCount !== rightBracketCount) {
    return false;
  }
  const isLeftBracket = (s: string) => leftBracketSet.has(s);
  const isPair = (left: string, right: string) => {
    const pairs = ["()", "[]", "{}"];
    const pair = `${left}${right}`;
    return pairs.includes(pair);
  };

  const rightHasLeft = bracketStr.split("").every(value => {
    if (isLeftBracket(value)) {
      stack.push(value);
      return true;
    }
    const bracketLeft = stack.pop();
    return isPair(bracketLeft, value);
  });
  return rightHasLeft && stack.isEmpty();
}
export { parentheses };
