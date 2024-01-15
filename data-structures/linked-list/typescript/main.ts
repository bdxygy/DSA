import { LinkedList } from "./linkedList";

// init
const myLinkedList = new LinkedList(1);

// append
myLinkedList.append(2);
myLinkedList.append(3);

// // prepend
myLinkedList.prepend(10);
myLinkedList.prepend(11);

// // get
// console.log(myLinkedList.get(2)!.value);
// console.log(myLinkedList.get(4)!.value);

// // set
myLinkedList.set(0, 0);
myLinkedList.set(2, 9);

// insert
myLinkedList.insert(2, 10);

// removeFirst
// myLinkedList.removeFirst();
// myLinkedList.removeFirst();

// removeLast
// myLinkedList.removeLast();
// myLinkedList.removeLast();

// remove
myLinkedList.remove(1);
console.log(myLinkedList.print());
console.log(JSON.stringify(myLinkedList));

myLinkedList.reverse();
console.log(myLinkedList.print());
console.log(JSON.stringify(myLinkedList));
