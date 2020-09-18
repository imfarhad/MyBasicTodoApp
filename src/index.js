import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider } from 'reactfire';
import FirebaseTestApp from './FirebaseTestApp';

const firebaseConfig = {
  apiKey: "AIzaSyAAE6KbgwNWp5j9JfeRMxsxm5Zchb2LBd0",
  authDomain: "mybasic-react-todoapp.firebaseapp.com",
  databaseURL: "https://mybasic-react-todoapp.firebaseio.com",
  projectId: "mybasic-react-todoapp",
  storageBucket: "mybasic-react-todoapp.appspot.com",
  messagingSenderId: "79397324806",
  appId: "1:79397324806:web:2b0844b9ab66b029291b87",
  measurementId: "G-1YRDTM9X5J"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseTestApp />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
