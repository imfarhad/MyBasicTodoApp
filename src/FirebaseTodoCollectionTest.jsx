import React from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

const FirebaseTodoCollectionTest = () => {
  const todoCollectionRef = useFirestore().collection("todos");
  const dbtodos = useFirestoreCollectionData(todoCollectionRef);

  const onItemDoubleClick = (name) => {
    console.log(name + "-- to be deleted");
  };

  return (
    <ul>
      {dbtodos.map((item, id) => (
        <li key={id} onDoubleClick={() => onItemDoubleClick(item.name)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default FirebaseTodoCollectionTest;
