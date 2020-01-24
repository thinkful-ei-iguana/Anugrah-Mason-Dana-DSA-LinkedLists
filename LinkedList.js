import _Node from './_Node';

const Node = require('./_Node');

export default class LinkedList {
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
      while (currNode !== null) {
        currNode = currNode.next;
      }
      //set the last node's next
      currNode.next = new _Node(
        value,
        null
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
      currNode !== null
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
}
