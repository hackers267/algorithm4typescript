import Node from "./node";

export default class Stack {
  private first: Node | null = null;

  public get size() {
    return this.n;
  }

  private n: number = 0;

  push(item: any) {
    const oldFirst = this.first;
    const first = new Node(item);
    first.next = oldFirst;
    this.first = first;
    this.n += 1;
  }

  pop() {
    if (this.first) {
      const { item } = this.first;
      this.first = this.first.next;
      this.n -= 1;
      return item;
    }
    return null;
  }

  isEmpty() {
    return this.first === null;
  }
}
