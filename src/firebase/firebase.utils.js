import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyChD5LamBV_b2iADwyeHdeDczVVi4MA6Jk",
    authDomain: "cwnd-44a77.firebaseapp.com",
    projectId: "cwnd-44a77",
    storageBucket: "cwnd-44a77.appspot.com",
    messagingSenderId: "323268783970",
    appId: "1:323268783970:web:96eb472d936868186f463b",
    measurementId: "G-4RKQEVRKTP"
  }
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)
export default firebase