const LinkedList = require('./LinkedList');

function main() {
  let SLL = new LinkedList();
  console.log(SLL.isempty());
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel'); //should print item not found
  SLL.insertBefore('Boomer', 'Athena');
  SLL.remove('Tauhida');
  SLL.insertBefore(
    'Squirrel',
    'something else'
  );

  console.log(SLL.isempty());
  SLL.insertAfter('Helo', 'Hotdog');
  SLL.insertAt(3, 'Kat');
  SLL.display();
  console.log(SLL.size());
  console.log(
    SLL.findPrevious('Starbuck').value
  );
  console.log(SLL.findLast().value);
}

main();
