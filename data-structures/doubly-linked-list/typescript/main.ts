import { DoublyLinkedlist } from "./DoublyLinkedList";

const myDLL = new DoublyLinkedlist(1);
myDLL.append(2);
myDLL.append(3);

myDLL.prepend(0);

myDLL.set(1, 11);

myDLL.insert(1, 1);

myDLL.insert(3, 13);

myDLL.removeLast();

myDLL.removeFirst();

myDLL.insert(2, 2);
myDLL.insert(2, 2);

myDLL.remove(2);

myDLL.printList();

myDLL.reverse();
myDLL.printList();
