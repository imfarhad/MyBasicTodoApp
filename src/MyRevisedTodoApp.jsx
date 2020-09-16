import React from "react";
import { MyRevisedTodoList } from "./MyRevisedTodoList";

export class MyRevisedTodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ["hello", "this", "is"],
    };
  }

  onAddTodoClick = () => {
    this.setState(
      {
        todos: [...this.state.todos, document.getElementById("todo").value],
      },
      () => (document.getElementById("todo").value = "")
    );
  };


  render() {
    return (
      <div>
        <input type="text" id="todo" />
        <input
          type="button"
          id="addTodo"
          value="Add Todo"
          onClick={this.onAddTodoClick}
        />
        <MyRevisedTodoList todos={this.state.todos}/>
      </div>
    );
  }
}
