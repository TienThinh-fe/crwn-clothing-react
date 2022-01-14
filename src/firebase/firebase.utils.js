import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCsQG21zSoNXPubfaZ-9PVvgFzqRmHK2Mc",
  authDomain: "crwn-db-fff2a.firebaseapp.com",
  projectId: "crwn-db-fff2a",
  storageBucket: "crwn-db-fff2a.appspot.com",
  messagingSenderId: "339471150230",
  appId: "1:339471150230:web:b37d9b8924589a79ad66b7",
  measurementId: "G-V1M0HQ53CM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ERROR CREATING USER: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
