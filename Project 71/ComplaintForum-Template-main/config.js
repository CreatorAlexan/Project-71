import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyB-aV2RcGmQu66lsuftZ3mUVYexg1w9Eo8",
  authDomain: "complaint-forum-72250.firebaseapp.com",
  projectId: "complaint-forum-72250",
  storageBucket: "complaint-forum-72250.appspot.com",
  messagingSenderId: "559638695082",
  appId: "1:559638695082:web:695d908be42f9d8103d4d3"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

