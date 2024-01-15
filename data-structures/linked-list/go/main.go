package main

import "fmt"

type Node struct {
	Value interface{}
	Next  *Node
}

func NewNode(value interface{}) *Node {
	return &Node{Value: value, Next: nil};
}

type LinkedList struct {
	Head   *Node
	Tail   *Node
	Length int
}

func NewLinkedList(value interface{}) *LinkedList {

	newLinkedList := &LinkedList{Head: nil, Tail: nil, Length: 0}
	
	if(value == nil){
		return newLinkedList
	}

	// newNode := &Node{
	// 	Value: value, Next: nil,
	// }

	newNode := NewNode(value)

	newLinkedList.Head = newNode
	newLinkedList.Tail = newNode
	newLinkedList.Length = 1

	return newLinkedList

}

func (l *LinkedList) Append(value interface{}) {
	// newNode := &Node{
	// 	Value: value,
	// 	Next: nil,
	// }

	newNode := NewNode(value)

	l.Tail.Next = newNode
	l.Tail = newNode

	l.Length++
}

func (l *LinkedList) Prepend(value interface{}){
	// newNode := &Node{
	// 	Value: value,
	// 	Next: nil,
	// }

	newNode := NewNode(value)

	newNode.Next = l.Head
	l.Head = newNode

	l.Length++
}

func (l *LinkedList) Get(index int) *Node {
	if index < 0 || index >= l.Length {
		return nil
	}

	tempNode := l.Head
	for i := 0; i < index; i++ {
		tempNode = tempNode.Next
	}

	return tempNode
}

func (l *LinkedList) Set(index int, value interface{}) bool {
	tempNode := l.Get(index)

	if tempNode == nil {
		return false
	}

	tempNode.Value = value

	return true
}

func (l *LinkedList) Insert(index int, value interface{}) bool {
	if index < 0 || index > l.Length + 1 || l.Length == 0 {
		return false
	}

	prevNode := l.Get(index-1)

	if prevNode == nil {
		return false
	}

	// newNode := &Node{
	// 	Value: value,
	// 	Next: nil,
	// }

	newNode := NewNode(value)

	newNode.Next = prevNode.Next
	prevNode.Next = newNode

	l.Length++

	return true
}

func (l *LinkedList) RemoveFirst() *Node {
	if l.Length == 0 {
		return nil
	}
	tempNode := l.Head
	if l.Length == 1 {
		l.Head = nil
		l.Tail = nil
	} else {
	l.Head = l.Head.Next
	tempNode.Next = nil
	}

	l.Length--

	return tempNode
}

func (l *LinkedList) RemoveLast() *Node {
	if l.Length == 0 {
		return nil
	}

	prevNode := l.Head
	tempNode := l.Head

	for tempNode.Next != nil {
		prevNode = tempNode
		tempNode = tempNode.Next
	}

	prevNode.Next = nil
	l.Tail = prevNode
	l.Length--

	if l.Length == 0 {
		l.Head = nil
		l.Tail = nil
	}

	return tempNode

}

func (l *LinkedList) Remove(index int) *Node {
	if l.Length == 0 {
		return nil
	}

	if index == 0 {
		return l.RemoveFirst()
	}

	if index == l.Length - 1 {
		return l.RemoveLast()
	}

	prevNode := l.Get(index - 1)

	if prevNode == nil {
		return nil
	}

	tempNode := prevNode.Next
	prevNode.Next = tempNode.Next
	tempNode.Next = nil

	l.Length--

	return tempNode

}

func (l *LinkedList) Reverse() bool {
	if l.Length == 0 {
		return false
	}

	var prevNode *Node = nil
	tempNode := l.Head
	nextNode := l.Head

	l.Head = l.Tail
	l.Tail = tempNode;

	for i := 0; i < l.Length; i++ {
		nextNode = tempNode.Next
		tempNode.Next = prevNode
		prevNode = tempNode
		tempNode = nextNode
	}
	

	return true
}

func (l *LinkedList) PrintList() []interface{} {
	nodeSlice := make([]interface{}, 0)

	tempNode := l.Head

	for tempNode != nil {
		nodeSlice = append(nodeSlice, tempNode.Value)
		tempNode = tempNode.Next
	}

	return nodeSlice
}

func main() {

	myLinkedList := NewLinkedList(1)
	
	// Append
	myLinkedList.Append(2)
	
	// Prepend
	myLinkedList.Prepend(3)
	
	// Set
	myLinkedList.Set(1,7)

	// RemoveFirst
	myLinkedList.Append(8)
	myLinkedList.RemoveFirst()

	// RemoveLast
	myLinkedList.Prepend(10)
	myLinkedList.RemoveLast()

	// Remove
	myLinkedList.Remove(1)

	
	// Reverse
	myLinkedList.Append(11)
	myLinkedList.Insert(1,22)
	fmt.Println(myLinkedList.PrintList());
	myLinkedList.Reverse()
 
	fmt.Println(myLinkedList.PrintList());
}