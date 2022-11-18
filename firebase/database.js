// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';
//import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdYjQC9LfPlPob11vNxe9Uce_uhIp-ZZw",
  authDomain: "esp8266-26c6d.firebaseapp.com",
  databaseURL: "https://esp8266-26c6d-default-rtdb.firebaseio.com/",
  projectId: "esp8266-26c6d",
  storageBucket: "esp8266-26c6d.appspot.com",
  messagingSenderId: "178360833423",
  appId: "1:178360833423:web:60c0a650ae1d67d276a7fa",
  measurementId: "G-GPHR459H4T",
};

// export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };