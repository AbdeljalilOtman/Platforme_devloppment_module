import firebase from 'firebase/app' // the core part of firebase package
import { getFirestore } from 'firebase/firestore';
// Then we import any features from firebase that we want to use
// in our case it is cloud firestore
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB5RMb8QDeb5CcnPtCIPq7dysVZxGniYyg",
    authDomain: "jobwebapp-f66ab.firebaseapp.com",
    projectId: "jobwebapp-f66ab",
    storageBucket: "jobwebapp-f66ab.appspot.com",
    messagingSenderId: "108654387985",
    appId: "1:108654387985:web:aec7a3036c408fa9a3e2b0"
  };
// Step 1 : init firebase
// we use the firebaseConfig to init the connection to our firebase backend
firebase.initializeApp(firebaseConfig)
// Step 2 : Init the firestore service
// If we want to do any communication with the firestore db (eg. add documents)
// we can use projectFirestore variable
const projectFirestore = firebase.firestore()
//Step 3 : Export projectFirestore
// This will enable the use the firebase in different components
export {projectFirestore}

