import Bag from "@src/base/bag";

describe("bag", () => {
  test("bag size", () => {
    const bag = new Bag();
    bag.add(1);
    bag.add(1);
    bag.add(1);
    expect(bag.size).toEqual(3);
  });
  test("bag isEmpty", () => {
    const bag = new Bag();
    expect(bag.isEmpty()).toBeTruthy();
  });
  test("bag not isEmpty", () => {
    const bag = new Bag();
    bag.add(1);
    expect(bag.isEmpty()).toBeFalsy();
  });
  test("bag iterator", () => {
    const bag = new Bag();
    bag.add(1);
    bag.add(2);
    bag.add(3);
    bag.add(4);
    const target = [1, 2, 3, 4];
    const array = [...bag];
    target.forEach(value => {
      expect(array.includes(value)).toBeTruthy();
    });
  });
});
