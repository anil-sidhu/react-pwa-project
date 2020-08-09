import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDapQkiSjc3D9d8URUmqnMeTgHzncnYlec",
    authDomain: "notitest-23d74.firebaseapp.com",
    databaseURL: "https://notitest-23d74.firebaseio.com",
    projectId: "notitest-23d74",
    storageBucket: "notitest-23d74.appspot.com",
    messagingSenderId: "747346753847",
    appId: "1:747346753847:web:dc76704736a5129e9902b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase