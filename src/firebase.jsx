import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDxVt3P3-L120xsmqGDxCjkCHxMvyJW3C0",
    authDomain: "test-app-f4013.firebaseapp.com",
    projectId: "test-app-f4013",
    storageBucket: "test-app-f4013.appspot.com",
    messagingSenderId: "781967947878",
    appId: "1:781967947878:web:111d5f4938db3739b915a7",
    databaseURL: "https://test-app-f4013-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig);