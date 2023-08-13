import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzcpqnboSQj5XUXCx_OpyclX5X42vde_Y",
  authDomain: "qblog-26b0a.firebaseapp.com",
  projectId: "qblog-26b0a",
  storageBucket: "qblog-26b0a.appspot.com",
  messagingSenderId: "613844351388",
  appId: "1:613844351388:web:f1a8c65dedfc634fd7f059",
  measurementId: "G-FRWG7YYDVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);