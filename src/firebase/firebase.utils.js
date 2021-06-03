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


  //userAuth: Object from Google Firebase once signin with Google
  export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () =>  auth.signInWithPopup(provider)