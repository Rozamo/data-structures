import Stack from "../Stack";

describe("Stack", () => {
  it("Should create an empty stack", () => {
    const stack = new Stack();
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should push elements to the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toBe(3);
    expect(stack.top).toBe(3);
  });

  it("Should pop elements from the stack", () => {
    const stack = new Stack([1, 2, 3]);
    const popped = stack.pop();
    expect(popped).toBe(3);
    expect(stack.size).toBe(2);
    expect(stack.top).toBe(2);
  });

  it("Should clear the stack", () => {
    const stack = new Stack([1, 2, 3]);
    stack.clear();
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("Should check if the stack is empty", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("Should return undefined when stack is empty and top element is accessed", () => {
    const stack = new Stack();
    expect(stack.top).toBeUndefined();
  });

  it("Should return undefined when stack is empty and top element is popped", () => {
    const stack = new Stack();
    expect(stack.pop()).toBeUndefined();
  });
});
