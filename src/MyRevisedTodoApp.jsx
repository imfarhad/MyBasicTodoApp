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

  onItemClick = (id, todoItem) => {
    console.log(id + " clicked ---- " + todoItem + " will be removed");
    this.state.todos.splice(id,1);
    this.setState({
      todos: [...this.state.todos]
    },()=>console.log(todoItem + " removed from list"))
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
        <MyRevisedTodoList todos={this.state.todos} onItemClick={this.onItemClick}/>
      </div>
    );
  }
}
