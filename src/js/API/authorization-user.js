// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase//database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAiHMRmzDBAqcYFfN8ZIsy0hTAA26EdBLs',
  authDomain: 'best-sopping-books.firebaseapp.com',
  projectId: 'best-sopping-books',
  storageBucket: 'best-sopping-books.appspot.com',
  messagingSenderId: '2228333882',
  appId: '1:2228333882:web:0918902ccb7c0915197403',
  measurementId: 'G-N7PXX6R205',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database);
const analytics = getAnalytics(app);
console.log(analytics);

// Create new Users
const auth = getAuth();

const buttonOpenModal = document.querySelector('.h-user');

buttonOpenModal.addEventListener('click', e => {
  e.preventDefault();
  const modalSingUser = document.querySelector('.sizeUp');
  modalSingUser.classList.add('show-modal');
});

const buttonSingUp = document.querySelector('#btn-open-up');
console.log(buttonSingUp);

buttonSingUp.addEventListener('click', event => {
  event.preventDefault();
  const valueUser = document.querySelector('#username').value;
  console.log(valueUser);
  const valueEmail = document.querySelector('#email').value;
  console.log(valueEmail);
  const valuePassword = document.querySelector('#current-password').value;
  console.log(valuePassword);

  let user = valueUser;
  let email = valueEmail;
  let password = valuePassword;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
