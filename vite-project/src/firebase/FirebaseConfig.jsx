// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCo9MbvTOIsDvutpQtzWTMWMEUf8t4keWI",
//   authDomain: "zersp-1d99b.firebaseapp.com",
//   projectId: "zersp-1d99b", 
//   storageBucket: "zersp-1d99b.appspot.com",
//   messagingSenderId: "817032057431",
//   appId: "1:817032057431:web:7e759b3f0b65dcec114912"
// };

// const app = initializeApp(firebaseConfig);
// const fireDB = getFirestore(app);
// const auth = getAuth(app)
// export {fireDB,auth } ;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtNA8mPMBWvRKF6CBhWIfCwRREGDjb3tA",
  authDomain: "zersp1.firebaseapp.com",
  projectId: "zersp1",
  storageBucket: "zersp1.appspot.com",
  messagingSenderId: "454339006244",
  appId: "1:454339006244:web:a2fe3511ec9dcff8426db1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;