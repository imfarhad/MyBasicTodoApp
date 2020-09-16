import React from "react";

export class MyRevisedTodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, id) => (
            <li key={id} onClick={() => this.props.onItemClick(id,item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
