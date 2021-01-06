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

export const createUserprofileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const {displayName, email} = userAuth
        const createAt = new Date()
        try {
            await userRef.set({displayName, email, createAt, ...additionalData})
        } catch(error){
            console.log('error in creating user', error.message)
        }
    }
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)
export default firebase