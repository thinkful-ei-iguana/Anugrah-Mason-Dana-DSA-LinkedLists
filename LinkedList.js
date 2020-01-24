const _Node = require('./_Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  find(item) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;

    while (currNode.value !== item) {
      if (currNode.next !== null) {
        return null; //couldn't find item
      } else {
        currNode = this.next;
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
      currNode.value !== item &&
      currNode.next !== null
    ) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode.next === null) {
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
}
module.exports = LinkedList;
