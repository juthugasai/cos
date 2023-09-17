import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByybKSVjh6VR4HvuDn94qxCyHKjm1kiqI",
  authDomain: "cosmox-90271.firebaseapp.com",
  projectId: "cosmox-90271",
  storageBucket: "cosmox-90271.appspot.com",
  messagingSenderId: "100518749459",
  appId: "1:100518749459:web:fa06e5287aae1cfbc766e6"
};

let firebaseApp;

if (firebase.apps.length === 0) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	firebaseApp = firebase.app();
}

const auth = firebase.auth();

export { auth};
