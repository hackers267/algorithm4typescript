import Queue from "../src/queue";

describe("queue", () => {
  test("queue enqueue and dequeue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
  test("queue size", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toEqual(3);
  });
  test("queue isEmpty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });
  test("queue not isEmpty", () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy();
  });
  test("queue iterator", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    const array = [...queue];
    const target = [1, 2, 3, 4];
    array.forEach((value, index) => {
      expect(value).toEqual(target[index]);
    });
  });
});
