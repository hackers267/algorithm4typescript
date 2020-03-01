import Node from "./node";

export default class Bag<T> {
  private first: Node | null = null;

  private n: number = 0;

  add(item: T) {
    const first = new Node(item);
    if (this.first !== null) {
      first.next = this.first;
      this.first = first;
    } else {
      this.first = first;
    }
    this.n += 1;
  }

  get size() {
    return this.n;
  }

  isEmpty() {
    return this.first === null;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    if (this.first === null) {
      return {
        value: null,
        done: true
      };
    }
    const { item } = this.first;
    this.first = this.first.next;
    return {
      value: item,
      done: false
    };
  }
}
