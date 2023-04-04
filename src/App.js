import React from 'react';

//import Scss
import './assets/scss/themes.scss';

//imoprt Route
import Route from './Routes';

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend 
import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD4nQ3epSr3Hf2KoPdWZrTC4eWfxcjzk3U",
//   authDomain: "velzon-56c8a.firebaseapp.com",
//   projectId: "velzon-56c8a",
//   storageBucket: "velzon-56c8a.appspot.com",
//   messagingSenderId: "1007415464971",
//   appId: "1:1007415464971:web:0d6488ccf0f990a478a30e",
//   measurementId: "G-M0Q9P48W9S"
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
