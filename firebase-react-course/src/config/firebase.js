// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCwRKlULslOR7i_99JRYgvA1SUF0Ulfao',
  authDomain: 'fir-course-6e0a8.firebaseapp.com',
  projectId: 'fir-course-6e0a8',
  storageBucket: 'fir-course-6e0a8.appspot.com',
  messagingSenderId: '347489506815',
  appId: '1:347489506815:web:190fbe08fe304acbd203ca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
