import Node from "./node";

/**
 * @author silence_zhpf
 * @desc 基本的数据结构背包
 * @version: 0.1.0
 */
export default class Bag<T> {
  private first: Node | null = null;

  private n: number = 0;

  /**
   * @author silence_zhpf
   * @desc 向背包中添加值
   * @param {T} item 添加的元素值
   */
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

  /**
   * @author silence_zhpf
   * @desc 获取背包的大小
   * @returns {number} 背包大小
   */
  get size() {
    return this.n;
  }

  /**
   * @author silence_zhpf
   * @desc 判断背包是否为空
   * @returns {boolean} 背包是否为空
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
