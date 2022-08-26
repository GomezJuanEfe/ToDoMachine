import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: 'This is a list of default TO-DOs', completed: false },
  { text: 'This is a completed TO-DO', completed: true }
]



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
