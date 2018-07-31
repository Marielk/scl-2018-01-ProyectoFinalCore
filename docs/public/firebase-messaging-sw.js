importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.2.0/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB1Tu-ClefIDA5lnEpjS1IMcuxjI492-9I",
  authDomain: "if-visitor.firebaseapp.com",
  databaseURL: "https://if-visitor.firebaseio.com",
  projectId: "if-visitor",
  storageBucket: "if-visitor.appspot.com",
  messagingSenderId: "943782866392"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();