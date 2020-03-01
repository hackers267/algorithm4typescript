import { parentheses } from "@src/parentheses";

describe("parentheses", () => {
  test("The leftBracket'count more than the rightBracket'count", () => {
    const brackets = "([[[]]]";
    const isParentheses = parentheses(brackets);
    expect(isParentheses).toBeFalsy();
  });
  test("The leftBracket'count less than the rightBracket'count", () => {
    const brackets = "({[[]]}))";
    const isParentheses = parentheses(brackets);
    expect(isParentheses).toBeFalsy();
  });
  test("The leftBracket'count equals the rightBracket'count,but not match", () => {
    const brackets = "([{]})";
    const isParentheses = parentheses(brackets);
    expect(isParentheses).toBeFalsy();
  });
  test("match", () => {
    const brackets = "(([{{}}]))";
    const isParentheses = parentheses(brackets);
    expect(isParentheses).toBeTruthy();
  });
});
