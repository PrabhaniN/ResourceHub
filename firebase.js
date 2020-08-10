import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyBYEvRHyy6RPyTU3HNi2Acwegs3eslCaoA",
  authDomain: "resourcehub-3da7f.firebaseapp.com",
  databaseURL: "https://resourcehub-3da7f.firebaseio.com",
  projectId: "resourcehub-3da7f",
  storageBucket: "resourcehub-3da7f.appspot.com",
  messagingSenderId: "784135351169",
  appId: "1:784135351169:web:9d3a715c55e48c33925680",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
