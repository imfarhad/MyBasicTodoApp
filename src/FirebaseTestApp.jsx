import React from 'react';
import { SuspenseWithPerf } from 'reactfire';
import FirebaseTestTodo from './FirebaseTestTodo';

const FirebaseTestApp = () =>{
    return(
        <div>
            <SuspenseWithPerf fallback={'loading....'} traceId={'load status'}>
                <FirebaseTestTodo />
            </SuspenseWithPerf>
        </div>
    )
}

export default FirebaseTestApp;