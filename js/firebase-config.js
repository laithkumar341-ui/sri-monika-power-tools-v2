// Firebase Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6xwCOI8p7NW9X6Zf4J0o6W1LPV73j8NQ",
  authDomain: "sri-monika-power-tools.firebaseapp.com",
  projectId: "sri-monika-power-tools",
  storageBucket: "sri-monika-power-tools.firebasestorage.app",
  messagingSenderId: "656947936561",
  appId: "1:656947936561:web:b527d9fdc7f4ad7f6c0410"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);