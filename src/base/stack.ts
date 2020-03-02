import Node from "./node";

/**
 * @author silence_zhpf
 * @desc: 基础数据结构：栈
 * @version: 0.1.0
 */
export default class Stack {
  private first: Node | null = null;

  private n: number = 0;

  /**
   * @author silence_zhpf
   * @desc 获取栈的大小
   * @returns {number} 返回栈的大小
   */
  public get size() {
    return this.n;
  }

  /**
   * @author silence_zhpf
   * @desc 入栈操作
   * @param item 入栈的元素值
   */
  public push(item: any) {
    const oldFirst = this.first;
    const first = new Node(item);
    first.next = oldFirst;
    this.first = first;
    this.n += 1;
  }

  /**
   * @author silence_zhpf
   * @desc 出栈操作
   * @returns {any} 返回出栈元素
   * @throws 当栈为空时，执行出栈操作，抛出异常
   */
  public pop() {
    if (this.first !== null) {
      const { item } = this.first;
      this.first = this.first.next;
      this.n -= 1;
      return item;
    }
    throw new RangeError("The stack is empty");
  }

  /**
   * @author silence_zpf
   * @desc 从栈中取最近入栈的值，但不删除值。
   * @returns {any}
   */
  public peek() {
    if (this.first) {
      const { item } = this.first;
      return item;
    }
    throw new RangeError("This stack is empty");
  }

  /**
   * @author silence_zhpf
   * @desc 判断栈是否为空
   * @returns {boolean} 返回栈是否为空
   */
  public isEmpty() {
    return this.first === null;
  }

  private [Symbol.iterator]() {
    return this;
  }

  private next() {
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
