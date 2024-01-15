type NodeLL = NodeLinkedList | null;

class NodeLinkedList {
  public value: any = null;
  public next: NodeLL = null;

  constructor(value: any) {
    this.value = value;
  }
}

export class LinkedList {
  private head: NodeLL = null;
  private tail: NodeLL = null;
  private length: number = 0;

  constructor(value: any) {
    this.init(value);
  }

  private init(value: any) {
    const newNode = new NodeLinkedList(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  public print() {
    let nodeArray: any = [];
    if (this.length === 0) return nodeArray;

    let tempNode = this.head;
    while (tempNode) {
      nodeArray.push(tempNode.value);
      tempNode = tempNode.next;
    }

    return nodeArray;
  }

  public append(value: any) {
    if (this.length === 0) {
      this.init(value);
      return;
    }

    const newNode = new NodeLinkedList(value);
    this.tail!.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  public prepend(value: any) {
    if (this.length === 0) {
      this.init(value);
      return;
    }

    const newNode = new NodeLinkedList(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  public get(index: number): NodeLL {
    if (index < 0 || index >= this.length) return null;

    if (this.length === 0) return null;

    let tempNode = this.head;
    for (let i = 0; i < index; i++) {
      tempNode = tempNode!.next;
    }

    return tempNode;
  }

  public set(index: number, value: any): boolean {
    if (index < 0 || index >= this.length) return false;
    const node = this.get(index);
    if (!node) return false;
    node!.value = value;
    return true;
  }

  public insert(index: number, value: any): boolean {
    if (this.length === 0) {
      this.init(value);
      return true;
    }

    const prevNode = this.get(index - 1);

    if (!prevNode) {
      return false;
    }

    const newNode = new NodeLinkedList(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  public removeFirst(): NodeLL {
    if (this.length === 0) return null;

    const tempNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = tempNode!.next;
      tempNode!.next = null;
    }

    this.length--;
    return tempNode;
  }

  public removeLast(): NodeLL {
    if (this.length === 0) return null;

    let prevNode = this.head;
    let tempNode = this.head;

    while (tempNode!.next) {
      prevNode = tempNode;
      tempNode = tempNode!.next;
    }

    prevNode!.next = null;
    this.tail = prevNode;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return tempNode;
  }

  public remove(index: number): NodeLL {
    if (this.length === 0) return null;

    let prevNode = this.get(index - 1);
    if (!prevNode) return null;

    let tempNode = prevNode!.next;
    prevNode.next = tempNode!.next;
    tempNode!.next = null;
    this.length--;

    return tempNode;
  }

  public reverse(): boolean {
    if (this.length === 0) return false;

    let prevNode: NodeLL = null;
    let tempNode: NodeLL = this.head;
    let nextNode: NodeLL = tempNode!.next;

    this.head = this.tail;
    this.tail = tempNode;

    // for (let i = 0; i < this.length; i++) {
    //   nextNode = tempNode!.next;
    //   tempNode!.next = prevNode;
    //   prevNode = tempNode;
    //   tempNode = nextNode;
    // }

    while (tempNode!.next) {
      nextNode = tempNode!.next;
      tempNode!.next = prevNode;
      prevNode = tempNode;
      tempNode = nextNode;
    }

    return true;
  }
}
