const Stack = class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  size() {
    let size = this.top + 1;
    return size;
  }

  isEmpty() {
    return this.size() === 0 ? true : false;
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.top];
    } else {
      return null;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      let value = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return value;
    } else {
      return null;
    }
  }
};

module.exports = Stack;
