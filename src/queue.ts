import Node from "./node";

export default class Queue<T> {
  private n: number = 0;

  private first: Node | null = null;

  private last: Node | null = null;

  get size() {
    return this.n;
  }

  enqueue(item: T) {
    if (this.last === null) {
      const node = new Node(item);
      this.last = node;
      this.first = node;
      this.n += 1;
    } else {
      const oldLast = this.last;
      oldLast.next = new Node(item);
      this.n += 1;
    }
  }

  dequeue() {
    if (this.first !== null) {
      const { item } = this.first;
      this.first = this.first.next;
      return item;
    }
    throw new RangeError("The queue is Empty");
  }

  isEmpty() {
    return this.first === null;
  }
}
