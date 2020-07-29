import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOQFnVpLtjeU8Gw6TQyFQu9hrQybodI7A",
  authDomain: "clone-4cb8e.firebaseapp.com",
  databaseURL: "https://clone-4cb8e.firebaseio.com",
  projectId: "clone-4cb8e",
  storageBucket: "clone-4cb8e.appspot.com",
  messagingSenderId: "553428402731",
  appId: "1:553428402731:web:4ab915bd97673f0025606e",
  measurementId: "G-N2ND32TBNE"
});

const auth = firebase.auth();

export { auth };