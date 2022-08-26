import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">You've completed {completedTodos} of {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };

// Uso el export nombrados a diferencia del export default para obligarme a usar el mismo nombre a la hora de llamar mi componente: export { TodoCounter, OtroElemento, OtroMas };