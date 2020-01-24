const LinkedList = require('./LinkedList');

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel'); //should print item not found
  SLL.insertBefore('Boomer', 'Athena');
  SLL.insertBefore(
    'Squirrel',
    'something else'
  );
}

main();
