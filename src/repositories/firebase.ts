// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAplaGx7gHhdXytyrUGDR3kP_zk5HlkDPI',
  authDomain: 'data-management-26d71.firebaseapp.com',
  projectId: 'data-management-26d71',
  storageBucket: 'data-management-26d71.appspot.com',
  messagingSenderId: '953042510276',
  appId: '1:953042510276:web:6e8c8b9f5ce594fda14491',
  measurementId: 'G-BYQ15D31S7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
