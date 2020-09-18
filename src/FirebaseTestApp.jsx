import React from "react";
import { SuspenseWithPerf } from "reactfire";
import FirebaseTodoCollectionTest from "./FirebaseTodoCollectionTest";

const FirebaseTestApp = () => {
  return (
    <div>
      <SuspenseWithPerf fallback={"loading...."} traceId={"load status"}>
        <FirebaseTodoCollectionTest />
      </SuspenseWithPerf>
    </div>
  );
};

export default FirebaseTestApp;
