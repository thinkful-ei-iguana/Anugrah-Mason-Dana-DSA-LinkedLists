const _Vertex = require('./_Vertex');

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    let next = this.head;
    let newVertex = new _Vertex(
      item,
      next,
      null
    );
    this.head = newVertex;
    if (newVertex.next) {
      newVertex.next.previous = newVertex;
    }
  }

  print() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  insertLast(insert) {
    if (!this.head) {
      this.insertFirst(insert);
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    let newVertex = new _Vertex(
      insert,
      currentNode.next,
      currentNode
    );
    currentNode.next = newVertex;
  }

  insertBefore(item, insert) {
    if (!this.head) {
      console.log('there is no list');
    }
    let currentNode = this.head;
    while (
      currentNode &&
      currentNode.value !== item
    ) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      console.log('item not found');
      return;
    }
    let newVertex = new _Vertex(
      insert,
      currentNode,
      currentNode.previous
    );
    currentNode.previous = newVertex;
    newVertex.previous.next = newVertex;
  }

  insertAfter(item, insert) {
    if (!this.head) {
      console.log('there is no list');
    }
    let currentNode = this.head;
    while (
      currentNode &&
      currentNode.value !== item
    ) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      console.log('item not found');
      return;
    }
    let newVertex = new _Vertex(
      insert,
      currentNode.next,
      currentNode
    );
    currentNode.next.previous = newVertex;
    currentNode.next = newVertex;
  }

  insertAt(item, order) {
    if (order === 0) {
      let newVertex = new _Vertex(
        item,
        this.head,
        null
      );
    }

    if (!this.head) {
      console.log('there is no list');
    }

    let currentNode = this.head;
    let count = 0;
    while (count !== order) {
      if (!currentNode) {
        console.log(
          'order to insert into does not exist'
        );
      }
      count++;
      currentNode = currentNode.next;
    }
    let newVertex = new _Vertex(
      item,
      currentNode,
      currentNode.previous
    );
    currentNode.previous.next = newVertex;
    currentNode.previous = newVertex;
    // console.log(
    //   newVertex.previous.previous.value,
    //   newVertex.previous.value,
    //   newVertex.previous.next.value
    // );

    // console.log(
    //   newVertex.previous.value,
    //   newVertex.value,
    //   newVertex.next.value
    // );
    // console.log(
    //   currentNode.previous.value,
    //   currentNode.value,
    //   currentNode.next.value
    // );
  }

  remove(item) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === item) {
        currNode.previous.next =
          currNode.next;

        if (currNode.next) {
          currNode.next.previous =
            currNode.previous;
        }
        return;
      }
      currNode = currNode.next;
    }
  }

  find(item) {
    let currNode = this.head;

    while (currNode) {
      if (currNode.value === item) {
        return currNode;
      }
      currNode = currNode.next;
    }
  }
  reverse() {
    let currentNode = this.head;
    let copynext;

    while (currentNode) {
      copynext = currentNode.next;
      currentNode.next =
        currentNode.previous;
      currentNode.previous = copynext;
      this.head = currentNode;
      currentNode = copynext;
    }
  }
}
module.exports = DoublyLinkedList;
