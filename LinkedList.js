const _Node = require('./_Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  size() {
    let currentNode = this.head;
    let count = 0;
    if (!currentNode) {
      return count;
    }

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  isempty() {
    return !this.head;
  }

  findPrevious(item) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; //couldn't find item
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }

    return previousNode;
  }

  findLast() {
    if (this.isempty()) {
      console.log(
        'empty list: yer lookin at the last thing '
      );
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null; //couldn't find item
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  insertFirst(value) {
    //point to the head since it is either null or the first element
    this.head = new _Node(
      value,
      this.head
    );
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      //set the last node's next

      currNode.next = new _Node(
        value,
        null
      );
      console.log(
        new _Node(value, null)
      );
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    //if it is the first one
    if (this.head.value === item) {
      return this.head;
    }
    //all others
    let currNode = this.head.next;
    let previousNode = this.head;

    while (
      currNode !== null &&
      currNode.value !== item
    ) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    } else {
      previousNode.next = currNode.next;
      //how come we don't delete it from memory? will it be garbage collection
    }
  }

  insertBefore(item, insert) {
    let currItem = this.head;
    let previousItem = this.head;
    if (!currItem) {
      console.log(
        'item does not exist'
      );
      return;
    }

    while (
      currItem !== null &&
      currItem.value !== item
    ) {
      previousItem = currItem;
      currItem = currItem.next;
    }

    if (currItem === null) {
      console.log(
        'item you want to insert before doesnt exist'
      );
      return;
    }
    let newitem = new _Node(
      insert,
      currItem
    );
    previousItem.next = newitem;
    console.log(
      `item inserted before ${currItem.value} and after ${previousItem.value}`
    );
  }

  insertAfter(item, insert) {
    let currItem = this.head;
    if (!currItem) {
      console.log(
        'item does not exist'
      );
      return;
    }

    while (
      currItem !== null &&
      currItem.value !== item
    ) {
      currItem = currItem.next;
    }

    if (currItem === null) {
      console.log(
        'item you want to insert after doesnt exist'
      );
      return;
    }
    let newitem = new _Node(
      insert,
      currItem.next
    );
    currItem.next = newitem;
    console.log(
      `item inserted after ${currItem.value}`
    );
  }

  insertAt(position, insert) {
    let currItem = this.head;
    if (position === 0) {
      this.head = new _Node(
        insert,
        this.head
      );
    }
    if (!currItem) {
      console.log('Empty LinkedList');
      return;
    }
    for (
      let i = 0;
      i < position - 1;
      i++
    ) {
      currItem = currItem.next;
    }
    let newNode = new _Node(
      insert,
      currItem.next
    );
    currItem.next = newNode;
    console.log(
      `inserted ${insert} at position ${position}. Before ${newNode.next.value} and after ${currItem.value}`
    );
    return;
  }

  reverse() {
    if (this.isempty()) {
      console.log(
        'empty list: yer lookin at the last thing '
      );
    }
    let currentNode = this.head;
    let previousNode = this.head;
    
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
     
    currentNode.next = previousNode;
    previousNode.next = null;

    return this.reverse()
  }

}
module.exports = LinkedList;
