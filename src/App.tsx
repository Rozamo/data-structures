import React from "react";
import { Stack } from "../lib/main";

const App = () => {
  const stack = new Stack<number>();

  stack.push(1);

  console.log({ stack, stackSize: stack.size, top: stack.top });

  stack.push(2);
  console.log({ stack, stackSize: stack.size, top: stack.top });

  const popped = stack.pop();

  console.log({ stack, popped, stackSize: stack.size, top: stack.top });

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
