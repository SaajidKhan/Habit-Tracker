import firebase from "firebase";
require("@firebase/firrestore");

var firebaseConfig = {
    apiKey: "AIzaSyB7hVSdwJ4eSJjsPX1ipSDGM93IiJ4Gq_o",
    authDomain: "habittracker-1375c.firebaseapp.com",
    projectId: "habittracker-1375c",
    storageBucket: "habittracker-1375c.appspot.com",
    messagingSenderId: "978615283219",
    appId: "1:978615283219:web:17a41dafbc48fec6f699e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()