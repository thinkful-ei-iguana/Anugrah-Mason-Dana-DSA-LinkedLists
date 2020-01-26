class _Vertex {
  constructor(value, next, previous) {
    this.next = next;
    this.value = value;
    this.previous = previous;
  }
}

module.exports = _Vertex;
