const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDHiSfvnjzVWJqWI_IEEi6bW_1h4HyJ_fU',
  authDomain: 'form-authorization-4890a.firebaseapp.com',
  projectId: 'form-authorization-4890a',
  storageBucket: 'form-authorization-4890a.appspot.com',
  messagingSenderId: '168346739495',
  appId: '1:168346739495:web:c2181a801d16964f053f02',
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

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

btnClose.addEventListener('click', () => {
  dialog.close();
});
btnSingUp.addEventListener('click', () => {
  dialog.showModal();
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

function singUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('current-password').value;
  const username = document.getElementById('username').value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      return userCredential.user.updateProfile({
        displayName: username,
      });
    })
    .then(() => {
      alert('New account created');
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
}

function onLinkSingUpClick() {
  // btnOpenIn.classList.add('hidden');
  // btnOpenUp.classList.remove('hidden');
  const markup = `
  <div class="wrap-input">
                    <input class="input" type="text" name="name" placeholder="NAME" id="username" autocomplete="username">
                    <input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
                    <input class="input" type="password" name="password" placeholder="PASSWORD" id="current-password" autocomplete="current-password">
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
  const markup = `<div class="wrap-input">
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

function singIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('current-password').value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log(auth.currentUser);
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.message);
    });
}
btnOpenUp.addEventListener('click', singUp);
form.addEventListener('submit', onFormSubmit);
linkSingUp.addEventListener('click', onLinkSingUpClick);
linkSingIn.addEventListener('click', onLinkSingInClick);
//btnOpenIn.addEventListener('click', singIn)

function onFormSubmit(e) {
  e.preventDefault();
  if (window.matchMedia('(min-width: 768px)').matches) {
    updateMenuTab();
  } else {
    navMob.classList.remove('hidden');
    updateMenu();
  }
}

function updateMenu() {
  btnSingUpMob.classList.add('hidden');
  dialog.close();
}

function onLogOutClick() {
  btnSingUpMob.classList.remove('hidden');
  navMob.classList.add('hidden');
  window.location.href = 'index.html';
}

function updateMenuTab() {
  const user = firebase.auth().currentUser;
  if (user) {
    const username = user.displayName;
    btnWrapDesk.innerHTML = `<div class="user-nickname-desk toggleMenu">
      <svg class="user-nickname-icon" width="37" height="37">
        <use href="./images/icons.svg#icon-user"></use>
      </svg>
      <p class="user-nickname-name">${username}</p>
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
    const toggleMenu = document.querySelector('.toggleMenu');
    toggleMenu.addEventListener('click', () => {
      btnLogOutTab.classList.toggle('hidden');
    });

    btnLogOutTab.addEventListener('click', onLogOutDeskClick);
  } else {
    console.log('User is not signed in');
  }
}

function onLogOutDeskClick() {
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
}
