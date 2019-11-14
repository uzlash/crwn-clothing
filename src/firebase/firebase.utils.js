import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDmMBqd-Fbxt0vRt_Ha32rUxlLIrRVo16Y",
    authDomain: "crwn-db-1daf9.firebaseapp.com",
    databaseURL: "https://crwn-db-1daf9.firebaseio.com",
    projectId: "crwn-db-1daf9",
    storageBucket: "crwn-db-1daf9.appspot.com",
    messagingSenderId: "9373509652",
    appId: "1:9373509652:web:7c53e563e38b9ab53f5f01",
    measurementId: "G-88PZ0CKEL5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;