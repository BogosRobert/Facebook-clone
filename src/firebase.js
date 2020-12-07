import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEAp6VymqHcHx2caEPd19leruIrigXLg0",
    authDomain: "roro-facebook.firebaseapp.com",
    databaseURL: "https://roro-facebook.firebaseio.com",
    projectId: "roro-facebook",
    storageBucket: "roro-facebook.appspot.com",
    messagingSenderId: "633832861992",
    appId: "1:633832861992:web:d9c274816caaf611a8e01d",
    measurementId: "G-HEGJ3ZM78D",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;