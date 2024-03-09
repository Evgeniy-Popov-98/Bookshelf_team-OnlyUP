import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import {
  getDatabase,
  ref,
  set,
  update,
  get,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import {
  addItemLocalStorage,
  infoItemLocalStorage,
  USER_KEY,
} from './localStorage';
import { errorMessage, successMessage, userExists } from './API/messageError';

const firebaseConfig = {
  apiKey: 'AIzaSyDHiSfvnjzVWJqWI_IEEi6bW_1h4HyJ_fU',
  authDomain: 'form-authorization-4890a.firebaseapp.com',
  databaseURL:
    'https://form-authorization-4890a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'form-authorization-4890a',
  storageBucket: 'form-authorization-4890a.appspot.com',
  messagingSenderId: '168346739495',
  appId: '1:168346739495:web:c2181a801d16964f053f02',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

const btnSingUp = document.querySelector('.h-user');
const btnSingUpMob = document.querySelector('.h-user-mobail-sign');
const btnLogOutMob = document.querySelector('.h-user-mobail');
const dialog = document.querySelector('#favDialog');
const btnClose = document.querySelector('#btn-close');
const btnOpenUp = document.querySelector('#btn-open-up');
const btnOpenIn = document.querySelector('#btn-open-in');
const linkSingUp = document.querySelector('.link-singUp');
const linkSingIn = document.querySelector('.link-singIn');
const wrapForm = document.querySelector('.wrap-form');
const form = document.querySelector('.form-authorization');
const navMob = document.querySelector('.user');
const btnWrapDesk = document.querySelector('.wrap-desk-btn');
const textNickName = document.querySelector('.user-nickname-name');
const mobMenu = document.querySelector('.js-hmob-modal');

// ----------------------- прослуховувачі---------------------------------------

btnClose.addEventListener('click', () => {
  dialog.close();
});
btnSingUp.addEventListener('click', () => {
  dialog.showModal();
  linkSingUp.classList.add('text-decoration-line');
});
btnSingUpMob.addEventListener('click', () => {
  dialog.showModal();
});

btnOpenUp.addEventListener('click', singUp);
form.addEventListener('submit', onFormSubmit);
linkSingUp.addEventListener('click', onLinkSingUpClick);
linkSingIn.addEventListener('click', onLinkSingInClick);
//btnOpenIn.addEventListener('click', singIn)
btnLogOutMob.addEventListener('click', onLogOutClick);

btnOpenUp.addEventListener('click', singUp);
form.addEventListener('submit', onFormSubmit);
linkSingUp.addEventListener('click', onLinkSingUpClick);
linkSingIn.addEventListener('click', onLinkSingInClick);

// ----------------------- SingUp---------------------------------------

async function singUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('current-password').value;
  const username = document.getElementById('username').value;

  await createUserWithEmailAndPassword(auth, email, password).then(
    userCredential => {
      const user = userCredential.user;

      set(ref(db, 'users/' + user.uid), {
        username: username,
        email: email,
        // profile_picture: imageUrl,
      });
      successMessage('New account created');
      updateProfile(user, { displayName: username })
        .then(() => {
          const userData = {
            displayName: username,
          };
          addItemLocalStorage(USER_KEY, userData);
          updateUIWithUsername(username);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  );
}

// ----------------------- вхід SingIn--------------------------------------

async function singIn() {
  console.log(true);
  linkSingUp.classList.add('text-decoration-line');
  linkSingIn.classList.remove('text-decoration-line');

  const email = document.getElementById('email').value;
  const password = document.getElementById('current-password').value;
  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const dt = new Date();
      update(ref(db, 'users/' + user.uid), {
        last_login: dt,
      });
      successMessage('You loged in');
      //   addItemLocalStorage(USER_KEY, db.users.username);
    })
    .catch(error => {
      console.log(error.message);
    });
}
// btnOpenIn.addEventListener('click', singIn);

// ----------------------- LogOut mob---------------------------------------
// let isAuthenticated = false;

function onLogOutClick() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem(USER_KEY);
      //   isAuthenticated = false;
      matchMedia();
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.log(error.message);
    });
}

// ----------------------- LogOut tab/desk---------------------------------------

function onLogOutDeskClick() {
  signOut(auth)
    .then(() => {
      btnWrapDesk.innerHTML = `<button class="h-user">
          Sign up
          <svg class="h-user-sign" width="20" height="20">
            <use href="./images/icons.svg#icon-arrow"></use>
          </svg>
        </button>`;

      const btnSingUp = document.querySelector('.h-user');
      btnSingUp.addEventListener('click', () => {
        dialog.showModal();
      });
      window.location.href = 'index.html';
      localStorage.removeItem(USER_KEY);
    })
    .catch(error => {
      console.log(error.message);
    });

  //   signOut(auth);
}

// ----------------------- прослуховувач з бібілотеки на вхід\вихід користувача---------------------------------------

const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  if (user) {
    const userId = user.uid;
    const userRef = ref(db, `users/${userId}`);
    get(userRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const userName = userData.username;
          textNickName.textContent = userName;
        } else {
          console.log('Дані про користувача відсутні в базі даних');
        }
      })
      .catch(error => {
        console.error('Помилка при отриманні даних користувача:', error);
      });
  } else {
  }

  matchMedia();
});

// -----------------------LocalStorage на вхід\вихід користувача---------------------------------------

// ----------------------- зміна медіа запитів ---------------------------------------

function onFormSubmit(e) {
  e.preventDefault();
  matchMedia();
}
function matchMedia() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    updateMenuTab();
    // infoItemLocalStorage(USER_KEY);
  } else {
    navMob.classList.remove('hidden');
    updateMenu();
  }
}

// ----------------------- Розмітка---------------------------------------

function onLinkSingUpClick() {
  linkSingUp.classList.add('text-decoration-line');
  linkSingIn.classList.remove('text-decoration-line');

  const markup = `
  <div class="wrap-input">
                    <input class="input" type="text" name="name" placeholder="NAME" id="username" autocomplete="username">
					<label class="form-label" for="email">
					<input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
					<svg class="icons-form" width="28" height="28">
						<use href="./images/symbol-defs.svg#icon-form-mail"></use>
					</svg>
				</label>
				<label class="form-label" for="current-password">
					<input class="input " type="password" name="password" placeholder="PASSWORD" id="current-password"
						autocomplete="current-password">
					<svg class="icons-form" width="28" height="28">
						<use href="./images/symbol-defs.svg#icon-form-lock"></use>
					</svg>
				</label>
                </div>
                <button type="submit" id="btn-open-up">sing up</button>
  `;
  dialog.classList.remove('sizeIn');
  dialog.classList.add('sizeUp');
  wrapForm.innerHTML = markup;
  const btnOpenUp = document.querySelector('#btn-open-up');
  btnOpenUp.addEventListener('click', singUp);
}

function onLinkSingInClick() {
  linkSingUp.classList.remove('text-decoration-line');
  linkSingIn.classList.add('text-decoration-line');

  const markup = `<div class="wrap-input">
	<label class="form-label" for="email">
					<input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
					<svg class="icons-form" width="28" height="28">
						<use href="./images/symbol-defs.svg#icon-form-mail"></use>
					</svg>
				</label>
				<label class="form-label" for="current-password">
					<input class="input " type="password" name="password" placeholder="PASSWORD" id="current-password"
						autocomplete="current-password">
					<svg class="icons-form" width="28" height="28">
						<use href="./images/symbol-defs.svg#icon-form-lock"></use>
					</svg>
				</label>
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
      <div class="h-user-logout-desk">	  
		<p class="user-nickname-name-modal">Do you want to go out?</p> 
        <button class="btnLogOutClose">
          Log out
          <svg class="h-user-sign-mobail" width="20" height="20">
            <use href="./images/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>`;
    dialog.close();
    const btnLogOutTab = document.querySelector('.h-user-logout-desk');
    const btnLogIcon = document.querySelector('.user-icon-caret-down');
    const toggleMenu = document.querySelector('.toggleMenu');
    const btnLogOutClose = document.querySelector('.btnLogOutClose');
    toggleMenu.addEventListener('click', () => {
      btnLogOutTab.classList.toggle('h-user-logout-desk-active');
      btnLogIcon.classList.toggle('user-icon-caret-down-active');
    });
    btnLogOutClose.addEventListener('click', onLogOutDeskClick);
  }
}

function updateMenu() {
  const user = auth.currentUser;

  if (!user && window.matchMedia('(max-width: 768px)').matches) {
    btnSingUpMob.classList.remove('hidden');
    navMob.classList.add('hidden');

    return;
  } else {
    btnSingUpMob.classList.add('hidden');
    dialog.close();
    return;
  }
}
