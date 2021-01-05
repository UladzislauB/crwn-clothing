import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBS5jwWI4ejQreBdoigjluyyjhbfNWV6mE",
  authDomain: "crwn-server.firebaseapp.com",
  projectId: "crwn-server",
  storageBucket: "crwn-server.appspot.com",
  messagingSenderId: "593357293524",
  appId: "1:593357293524:web:2856dfb70afe3b0aa6b841",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
