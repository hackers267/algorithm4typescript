export default class Node {
  item: any;

  next: Node | null;

  constructor(item: any) {
    this.item = item;
    this.next = null;
  }
}
