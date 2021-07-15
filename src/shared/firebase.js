import firebase from "firebase/app";

// 사용할 것들을 전부 불러옵니다 :)
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1iCXwSmW_I3nclO6S2_pUglwXxB0iE1w",
  authDomain: "my-first-project-aea25.firebaseapp.com",
  databaseURL: "https://my-first-project-aea25-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-first-project-aea25",
  storageBucket: "my-first-project-aea25.appspot.com",
  messagingSenderId: "88748168333",
  appId: "1:88748168333:web:55507d9373b0de1965fec4",
  measurementId: "G-JDZR23XJY2"// 인증 정보를 넣어주세요!
  
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };
