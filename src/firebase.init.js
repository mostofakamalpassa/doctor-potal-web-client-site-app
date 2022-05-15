// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_APIKEY,
//   authDomain:process.env.REACT_APP_AUTHDOMAIN,
//   projectId:process.env.REACT_APP_PROJECTID,
//   storageBucket:process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
//   appId:process.env.REACT_APP_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyDY8WCF0tKKxqytmysYJzxr89-zpNJOFyk",
  authDomain: "doctors-portal-6d275.firebaseapp.com",
  projectId: "doctors-portal-6d275",
  storageBucket: "doctors-portal-6d275.appspot.com",
  messagingSenderId: "226796590655",
  appId: "1:226796590655:web:1c89c5bffa8c148c0e8a8a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;