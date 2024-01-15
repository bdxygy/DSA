type NodeDLLType = NodeDLL | null;

class NodeDLL {
  value: any = null;
  next: NodeDLLType = null;
  prev: NodeDLLType = null;

  constructor(value: any) {
    this.value = value;
  }
}

export class DoublyLinkedlist {
  head: NodeDLLType = null;
  tail: NodeDLLType = null;
  length: number = 0;
  private median = Math.floor(this.length / 2);

  constructor(value: any) {
    if (!value) return;
    this.init(value);
  }

  private init(value: any) {
    const newNode = new NodeDLL(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public printList() {
    const nodeArray: any = [];

    let tempNode = this.head;

    while (tempNode) {
      nodeArray.push(tempNode.value);
      tempNode = tempNode.next;
    }
  }

  public append(value: any) {
    if (this.length === 0) {
      return this.init(value);
    }

    const newNode = new NodeDLL(value);

    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  public prepend(value: any) {
    if (this.length === 0) {
      return this.init(value);
    }

    const newNode = new NodeDLL(value);

    newNode.next = this.head;
    this.head!.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  public get(index: number): NodeDLLType {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    let tempNode = this.head;

    if (index < this.median) {
      for (let i = 0; i < index; i++) {
        tempNode = tempNode!.next;
      }
    } else {
      for (let i = this.length - 1; i >= index; i--) {
        tempNode = tempNode!.prev;
      }
    }

    return tempNode;
  }

  public set(index: number, value: any) {
    if (index < 0 || index >= this.length || this.length === 0) return false;
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
  }

  public insert(index: number, value: any) {
    if (index < 0 || index > this.length + 1) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    if (index === this.length) {
      this.append(value);
      return true;
    }

    let prevNode = this.get(index - 1);

    if (!prevNode) return false;

    const newNode = new NodeDLL(value);
    let tempNode = prevNode.next;
    newNode.next = tempNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    tempNode!.prev = newNode;
    this.length++;
  }
}
