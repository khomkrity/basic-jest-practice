const Stack = class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  isEmpty() {
    return Object.keys(this.items).length > 0 ? false : true;
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
