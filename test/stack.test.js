const Stack = require('../Stack');

describe('Instantiating a Stack class', () => {
  let stack;
  beforeAll(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.top).toEqual(-1);
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.size()).toEqual(0);
  });

  it('is not an array', () => {
    expect(stack.items).toEqual({});
  });
});

describe('Manipulating data inside a stack', () => {
  let stack;
  beforeAll(() => {
    stack = new Stack();
  });
  it('can store (push) data to the top', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    expect(stack.items).toEqual({ 0: 40, 1: 20, 2: 30, 3: 40, 4: 50 });
    expect(stack.isEmpty()).toEqual(false);
    expect(stak.top).toEqual(4);
    expect(stack.size()).toEqual(5);
    expect(stack.peek()).toEqual(50);
  });

  it('can pop out the top value', () => {
    expect(stack.pop()).toEqual(50);
    expect(stack.items).toEqual({ 0: 40, 1: 20, 2: 30, 3: 40 });
    expect(stack.peek()).toEqual(40);
    expect(stack.size()).toEqual(4);
  });

  it('can handle methods with empty stack', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.top).toEqual(-1);
    expect(stack.size()).toEqual(0);
    expect(stack.items).toEqual({});
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });
});
