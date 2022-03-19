import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyADauJEcU6gJZ0UyWzXgJSztmZne2GRilY',
  authDomain: 'motify-redux.firebaseapp.com',
  databaseURL: 'https://motify-redux-default-rtdb.firebaseio.com',
  projectId: 'motify-redux',
  storageBucket: 'motify-redux.appspot.com',
  messagingSenderId: '772080161218',
  appId: '1:772080161218:web:004e62bb0b56fddf69865b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
