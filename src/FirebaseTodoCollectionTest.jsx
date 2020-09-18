import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

const FirebaseTodoCollectionTest = () => {
  const todoCollectionRef = useFirestore().collection("todos");
  const todos = useFirestoreCollectionData(todoCollectionRef);
  return (
    <ul>
      {todos.map((item, id) => (
        <li key={id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default FirebaseTodoCollectionTest;
