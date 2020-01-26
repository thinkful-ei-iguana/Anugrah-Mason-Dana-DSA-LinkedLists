const LinkedList = require('./LinkedList');
const DoublyLinkedList = require('./DoublyLinkedList');

function main() {
  // let SLL = new LinkedList();
  // console.log(SLL.isempty());
  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');
  // SLL.insertLast('Tauhida');
  // SLL.remove('squirrel'); //should print item not found
  // SLL.insertBefore('Boomer', 'Athena');
  // SLL.remove('Tauhida');
  // SLL.insertBefore(
  //   'Squirrel',
  //   'something else'
  // );

  // console.log(SLL.isempty());
  // SLL.insertAfter('Helo', 'Hotdog');
  // SLL.insertAt(3, 'Kat');
  // SLL.display();
  // console.log(SLL.size());
  // console.log(
  //   SLL.findPrevious('Starbuck').value
  // );
  // console.log(SLL.findLast().value);
  // SLL.reverse();
  // SLL.remove('Helo');
  // console.log(
  //   SLL.head.value,
  //   SLL.findMiddle().value
  // );
  // let deleted = SLL.findPrevious(
  //   'Hotdog'
  // );
  // SLL.remove('Husker');
  // console.log(
  //   deleted.value,
  //   SLL.includes(SLL.findMiddle()),
  //   SLL.includes(deleted)
  // );
  // console.log(SLL.hascycle());
  // let CycleList = new LinkedList();

  // CycleList.insertLast('Boomer');
  // CycleList.insertLast('Helo');
  // CycleList.insertLast('Husker');
  // CycleList.insertLast('Starbuck');
  // CycleList.insertLast('Tauhida');
  // CycleList.findLast().next = CycleList.findPrevious(
  //   'Tauhida'
  // ); //should set a cycle

  // console.log(CycleList.hascycle());
  let DLL = new DoublyLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertBefore(
    'Picon',
    'Saggitaron'
  );
  DLL.insertAfter('Gemenon', 'Tauron');
  DLL.remove('Picon');
  DLL.insertAt('Picon', 3);

  // console.log(DLL);
  DLL.print();
  console.log(DLL.find('Gemenon'));
  DLL.reverse();
  DLL.print();
}

main();
