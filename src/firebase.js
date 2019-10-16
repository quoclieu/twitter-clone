import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAhXdTcbdlHkN1QNLX8GP1J37cKTcsBjg8',
  authDomain: 'twitter-clone-9dbca.firebaseapp.com',
  databaseURL: 'https://twitter-clone-9dbca.firebaseio.com',
  projectId: 'twitter-clone-9dbca',
  storageBucket: 'twitter-clone-9dbca.appspot.com',
  messagingSenderId: '620991524821',
  appId: '1:620991524821:web:e860204a78ebcd8dd3d75c',
  measurementId: 'G-3RLF0J53YB'
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const firebaseMessages = databaseRef.child('messages');
