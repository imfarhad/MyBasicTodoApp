import React from "react";

const MyFunctionalTodoList = ({ todos }) => (
  <div>
    <div>Here goes the list</div>
    <ul>
      {todos.map((item, id) => (
        <li key={id}>{item}</li>
      ))}
    </ul>
  </div>
);

export default MyFunctionalTodoList;
