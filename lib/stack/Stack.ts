class Stack<T> {
  #stack: T[];

  constructor(initialEntries?: unknown) {
    this.#stack = Array.isArray(initialEntries) ? initialEntries : [];
  }

  /**
   * Get the top element of the stack
   */
  get top(): T {
    return this.#stack[this.#stack.length - 1];
  }

  /**
   * Get the size of the stack
   */
  get size(): number {
    return this.#stack.length;
  }

  /**
   * Push an element to the stack
   * @param entry The element to push
   */
  push = (element: T) => {
    this.#stack.push(element);
  };

  /**
   * Remove the top element from the stack
   * @returns The top element of the stack which was removed
   */
  pop = (): T | undefined => {
    return this.#stack.pop();
  };

  /**
   * Clear the stack
   */
  clear = () => {
    this.#stack = [];
  };

  /**
   * Check if the stack is empty
   * @returns True if the stack is empty, false otherwise
   */
  isEmpty = (): boolean => {
    return this.#stack.length === 0;
  };
}

export default Stack;
