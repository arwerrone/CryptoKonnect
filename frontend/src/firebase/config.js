import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA8WgRIwTtrkMEVRyGVLcxI8ULQ22XKAWs',
  authDomain: 'chat87-c7fae.firebaseapp.com',
  projectId: 'chat87-c7fae',
  storageBucket: 'chat87-c7fae.appspot.com',
  messagingSenderId: '794622377358',
  appId: '1:794622377358:web:957eb33a9df49cd9ce78df'
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
