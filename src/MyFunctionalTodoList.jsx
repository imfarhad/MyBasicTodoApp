import React from "react";

const MyFunctionalTodoList = ({ todos, onTodoItemClick }) => {
  const handleClick = (id) => {
    onTodoItemClick(id);
  };

  return (
    <div>
      <ul>
        {todos.map((item, id) => (
          <li key={id} onDoubleClick={() => handleClick(id)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFunctionalTodoList;
