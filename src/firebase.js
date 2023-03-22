import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAqORQmrrE_I5mJXg9xw3Ul_SQkf1OjXWc",
  authDomain: "todo-crud-36414.firebaseapp.com",
  projectId: "todo-crud-36414",
  storageBucket: "todo-crud-36414.appspot.com",
  messagingSenderId: "881866129481",
  appId: "1:881866129481:web:884d144f48a1ab9460bf98"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };