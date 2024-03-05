import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth";
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  USER_KEY,
} from './localStorage';
import { errorMessage, successMessage } from './API/messageError';

const firebaseConfig = {
  apiKey: "AIzaSyDHiSfvnjzVWJqWI_IEEi6bW_1h4HyJ_fU",
  authDomain: "form-authorization-4890a.firebaseapp.com",
  databaseURL: "https://form-authorization-4890a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "form-authorization-4890a",
  storageBucket: "form-authorization-4890a.appspot.com",
  messagingSenderId: "168346739495",
  appId: "1:168346739495:web:c2181a801d16964f053f02"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();


const btnSingUp = document.querySelector('.h-user')
const btnSingUpMob = document.querySelector('.h-user-mobail-sign')
const btnLogOutMob = document.querySelector('.h-user-mobail')
const dialog = document.querySelector('#favDialog')
const btnClose = document.querySelector('#btn-close')
const btnOpenUp = document.querySelector('#btn-open-up')
const btnOpenIn = document.querySelector('#btn-open-in')
const linkSingUp = document.querySelector('.link-singUp')
const linkSingIn = document.querySelector('.link-singIn')
const wrapForm = document.querySelector('.wrap-form')
const form = document.querySelector('.form-authorization')
const navMob = document.querySelector('.user');
const btnWrapDesk = document.querySelector('.wrap-desk-btn')
const textNickName = document.querySelector('.user-nickname-name')



// ----------------------- прослуховувачі---------------------------------------
 
btnClose.addEventListener("click", () => {
  dialog.close();
});
btnSingUp.addEventListener("click", () => {
    dialog.showModal();
  });
btnSingUpMob.addEventListener("click", () => {
    dialog.showModal();
  });

btnOpenUp.addEventListener('click', singUp)
form.addEventListener('submit', onFormSubmit)
linkSingUp.addEventListener('click', onLinkSingUpClick)
linkSingIn.addEventListener('click', onLinkSingInClick)
//btnOpenIn.addEventListener('click', singIn)
btnLogOutMob.addEventListener('click', onLogOutClick)


 // ----------------------- SingUp---------------------------------------

function singUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('current-password').value;
  const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
    //   return userCredential.user.updateProfile({
    //     displayName: username
    //   });
    // })
    // .then(() => {
    //   const user = auth.currentUser;
    //   const userData = {
    //     displayName: user.displayName,
    //   };
      //   addItemLocalStorage(USER_KEY, userData);
      

      const user = userCredential.user;

      set(ref(db, 'users/' + user.uid), {
        username: username,
        email: email,
        // profile_picture: imageUrl,
      })
      successMessage('New account created');
})
.catch((error) => {
  errorMessage(error.message);
});
}

// ----------------------- вхід SingIn--------------------------------------
  
function singIn() {
  const email = document.getElementById('email').value;
  const password =document.getElementById('current-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const dt = new Date();
      update(ref(db, 'users/' + user.uid), {
        last_login: dt,
      })
      successMessage('You are log in');
})
.catch((error) => {
  errorMessage(error.message);
});
}
btnOpenUp.addEventListener('click', singUp)
form.addEventListener('submit', onFormSubmit)
linkSingUp.addEventListener('click', onLinkSingUpClick)
linkSingIn.addEventListener('click', onLinkSingInClick)
//btnOpenIn.addEventListener('click', singIn)


// ----------------------- LogOut mob---------------------------------------


function onLogOutClick() {
  signOut(auth).then(() => {
    btnSingUpMob.classList.remove('hidden');
  navMob.classList.add('hidden');
  window.location.href = 'index.html';
  localStorage.removeItem(USER_KEY); 
}).catch((error) => {
  errorMessage(error.message);
});
}

// ----------------------- LogOut tab/desk---------------------------------------

function onLogOutDeskClick() {
  signOut(auth).then(() => {
  btnWrapDesk.innerHTML = `<button class="h-user">
          Sign up
          <svg class="h-user-sign" width="20" height="20">
            <use href="./images/icons.svg#icon-arrow"></use>
          </svg>
        </button>`
  
  const btnSingUp = document.querySelector('.h-user');
  btnSingUp.addEventListener("click", () => {
    dialog.showModal();
  });
  window.location.href = 'index.html';
  localStorage.removeItem(USER_KEY); 
}).catch((error) => {
  errorMessage(error.message);
});
  
  //signOut(auth);
}

// ----------------------- прослуховувач з бібілотеки на вхід\вихід користувача---------------------------------------

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  
    if (user) {
      textNickName.textContent = user.displayName || '';
    } else {
      textNickName.textContent = '';
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const userData = infoItemLocalStorage(USER_KEY);
  if (userData) {
         matchMedia();
        textNickName.textContent = userData.displayName;
      } else {
        textNickName.textContent = '';
      }
    
});


// ----------------------- зміна медіа запитів ---------------------------------------

function onFormSubmit(e) {
  e.preventDefault();
  matchMedia();
}
function matchMedia() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    updateMenuTab();
    infoItemLocalStorage(USER_KEY)
} else {
    navMob.classList.remove('hidden');
    updateMenu();
}
}


// ----------------------- Розмітка---------------------------------------

function onLinkSingUpClick(){
  // btnOpenIn.classList.add('hidden');
  // btnOpenUp.classList.remove('hidden');
  const markup=`
  <div class="wrap-input">
                    <input class="input" type="text" name="name" placeholder="NAME" id="username" autocomplete="username">
                    <input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
                    <input class="input" type="password" name="password" placeholder="PASSWORD" id="current-password" autocomplete="current-password">
                </div>
                <button type="submit" id="btn-open-up">sing up</button>
  `
  dialog.classList.remove('sizeIn');
  dialog.classList.add('sizeUp');
  wrapForm.innerHTML = markup;
  const btnOpenUp = document.querySelector('#btn-open-up');
  btnOpenUp.addEventListener('click', singUp);
}



function onLinkSingInClick(){
  const markup=`<div class="wrap-input">
  <input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
  <input class="input" type="password" name="password" placeholder="PASSWORD" id="current-password" autocomplete="current-password">
  </div>
  <button type="submit" id="btn-open-in">sing in</button>
  `;
  dialog.classList.remove('sizeUp');
  dialog.classList.add('sizeIn');
  wrapForm.innerHTML = markup;
  const btnOpenIn = document.querySelector('#btn-open-in');
  btnOpenIn.addEventListener('click', singIn);
}

function updateMenuTab() {
  const user = auth.currentUser;
  console.log(user);
  if (user) {
    const username = user.displayName; 
    btnWrapDesk.innerHTML = `<div class="user-nickname-desk toggleMenu">
      <div class="user-nickname-desk-auth">
        <svg class="user-nickname-icon" width="37" height="37">
          <use href="./images/icons.svg#icon-user"></use>
        </svg>
        <p class="user-nickname-name">${username}</p>
        <svg class="user-icon-caret-down" width="23" height="26">
          <use href="./images/icons.svg#icon-caret-down"></use>
        </svg>
      </div>
    </div>
    <div class="h-user-logout-desk hidden">
      <button >
        Log out
        <svg class="h-user-sign-mobail" width="20" height="20">
          <use href="./images/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>`;
    dialog.close();
    const btnLogOutTab = document.querySelector('.h-user-logout-desk');
    const toggleMenu = document.querySelector('.toggleMenu')
    toggleMenu.addEventListener('click', () => {
      btnLogOutTab.classList.toggle('hidden');
    });

    btnLogOutTab.addEventListener("click", onLogOutDeskClick);
  } else {
    errorMessage('User is not signed in');
  }
}

function updateMenu() {
  
  btnSingUpMob.classList.add('hidden');
  dialog.close();
}

