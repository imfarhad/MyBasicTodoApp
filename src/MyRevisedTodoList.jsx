import React from "react";

export class MyRevisedTodoList extends React.Component {
  handleClick = (item) => {
    console.log(item);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((item, id) => (
            <li key={id} onClick={() => this.handleClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
