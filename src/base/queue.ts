import Node from "./node";

/**
 * @author silence_zhpf
 * @desc 基础的数据结构：队列
 * @version 0.1.0
 */
export default class Queue<T> {
  private n: number = 0;

  private first: Node | null = null;

  private last: Node | null = null;

  /**
   * @author silence_zhpf
   * @desc 获取队列的大小
   * @returns {number}  队列的大小值
   */
  get size() {
    return this.n;
  }

  /**
   * @author silence_zhpf
   * @desc 入列操作
   * @param {T} item 入列元素值
   */
  enqueue(item: T) {
    if (this.first === null) {
      const node = new Node(item);
      this.last = node;
      this.first = node;
      this.n += 1;
    } else if (this.first.next === null) {
      const node = new Node(item);
      this.last = node;
      this.first.next = node;
      this.n += 1;
    } else {
      const oldLast = this.last as Node;
      const last = new Node(item);
      oldLast.next = last;
      this.last = last;
      this.n += 1;
    }
  }

  /**
   * @author silence_zhpf
   * @desc 出列操作
   * @returns {any} 返回队列中最早添加的元素
   * @throws 当队列为空，仍然执行出列操作，抛出异常。
   */
  dequeue() {
    if (this.first !== null) {
      const { item } = this.first;
      this.first = this.first.next;
      return item;
    }
    throw new RangeError("The queue is Empty");
  }

  /**
   * @author silence_zhpf
   * @desc 队列是否为空
   * @returns {boolean} 队列是否为空
   */
  isEmpty() {
    return this.first === null;
  }

  private [Symbol.iterator]() {
    return this;
  }

  private next() {
    if (this.first === null) {
      return {
        done: true,
        value: null
      };
    }
    const value = this.first.item;
    this.first = this.first.next;
    return { value, done: false };
  }
}
