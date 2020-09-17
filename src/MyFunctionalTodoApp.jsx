import React, { useState } from "react";
import MyFunctionalTodoList from "./MyFunctionalTodoList";

const MyFunctionalTodoApp = () => {
  const initialTodos = ["Hello", "This", "Is", "Simple", "List"];

  const [todos, setTodos] = useState(initialTodos);

  const onAddTodoClick = () => {
    let todo = document.getElementById("todo").value;
    document.getElementById("todo").value = "";
    setTodos([...todos, todo]);
  };

  const onTodoItemClick = (id) => {
    todos.splice(id, 1);
    setTodos([...todos]);
  };

  return (
    <div>
      <h1>This is my functional todo app</h1>
      <input type="text" id="todo" />
      <input
        type="button"
        id="addTodo"
        value="Add Todo"
        onClick={onAddTodoClick}
      />
      <MyFunctionalTodoList todos={todos} onTodoItemClick={onTodoItemClick} />
    </div>
  );
};

export default MyFunctionalTodoApp;
