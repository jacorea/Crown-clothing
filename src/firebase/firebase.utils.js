import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmbs51kFHNcJsLefZtYq-zcv7jVzuEXt0" ,
    authDomain: "crwn-db-9715a.firebaseapp.com",
    projectId: "crwn-db-9715a",
    storageBucket: "crwn-db-9715a.appspot.com",
    messagingSenderId: "1014427040803",
    appId: "1:1014427040803:web:8f0546baa49eb62b288596",
    measurementId: "G-15CQ63FNQ8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () =>  auth.signInWithPopup(provider)