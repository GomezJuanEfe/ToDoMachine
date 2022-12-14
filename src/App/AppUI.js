import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoForm } from "../TodoForm";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../Modal"

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

        <TodoList>
          {error && <p>Sorry, there was an error...</p>}
          {loading && <p>Loading, please wait...</p>}
          {(!loading && !searchedTodos.length) && <p>Add your first TO-DO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}

        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export { AppUI };