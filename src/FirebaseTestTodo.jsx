import React from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';

const FirebaseTestTodo = () => {
    const todoRef = useFirestore().collection('todos').doc('4pqnd9qJsUipBZk79rO4');
    const myTodo = useFirestoreDocData(todoRef);
    const name = myTodo.name;

    return(
        <div>
            Todo Name from Firebase: {name}
        </div>
    )
}

export default FirebaseTestTodo;