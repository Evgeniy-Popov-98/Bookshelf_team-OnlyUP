import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js';
import {
  getDatabase,
  set,
  ref,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAiHMRmzDBAqcYFfN8ZIsy0hTAA26EdBLs',
  authDomain: 'best-sopping-books.firebaseapp.com',
  databaseURL:
    'https://best-sopping-books-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'best-sopping-books',
  storageBucket: 'best-sopping-books.appspot.com',
  messagingSenderId: '2228333882',
  appId: '1:2228333882:web:0918902ccb7c0915197403',
  measurementId: 'G-N7PXX6R205',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Create new Users
const auth = getAuth();

const buttonOpenModal = document.querySelector('.h-user');

buttonOpenModal.addEventListener('click', e => {
  e.preventDefault();
  const modalSingUser = document.querySelector('.sizeUp');
  modalSingUser.classList.add('show-modal');
});

const buttonSingUp = document.querySelector('#btn-open-up');

buttonSingUp.addEventListener('click', event => {
  event.preventDefault();
  const valueUser = document.querySelector('#username').value;
  const valueEmail = document.querySelector('#email').value;
  const valuePassword = document.querySelector('#current-password').value;

  let username = valueUser;
  let email = valueEmail;
  let password = valuePassword;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      set(database, 'users/' + user.uid),
        {
          username: username,
          email: email,
        };
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

//sing up users

// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
