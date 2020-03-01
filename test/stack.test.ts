import Stack from "../src/stack";

describe("The Stack", () => {
  test("stack push", () => {
    const stack = new Stack();
    stack.push(3);
    const { size } = stack;
    expect(size).toEqual(1);
  });
  test("stack pop", () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(5);
    const item = stack.pop();
    expect(item).toEqual(5);
  });
  test("stack isEmpty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  test("stack not isEmpty", () => {
    const stack = new Stack();
    stack.push(3);
    expect(stack.isEmpty()).toBeFalsy();
  });
  test("stack iterator", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    const array = [...stack];
    const target = [4, 3, 2, 1];
    array.forEach((value, index) => {
      expect(value).toEqual(target[index]);
    });
  });
});
