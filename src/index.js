import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from "firebase";
import App from './App';
import './index.css';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDs-Ra-4nJ_P5qS0BtW1ae1sXu1RVMhZxg",
    authDomain: "schoolfinder-9666c.firebaseapp.com",
    databaseURL: "https://schoolfinder-9666c.firebaseio.com",
    storageBucket: "schoolfinder-9666c.appspot.com",
    messagingSenderId: "38867372316"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
// var database = firebase.database();

// var school = database().ref('schools/0')
// 	.once('value')
// 	.then(function(snapshot) {
// 	  return snapshot.val();
// 	})
// 	.done();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
