const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDHiSfvnjzVWJqWI_IEEi6bW_1h4HyJ_fU",
  authDomain: "form-authorization-4890a.firebaseapp.com",
  projectId: "form-authorization-4890a",
  storageBucket: "form-authorization-4890a.appspot.com",
  messagingSenderId: "168346739495",
  appId: "1:168346739495:web:c2181a801d16964f053f02"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth()


const btnSingUp = document.querySelector('.h-user')
const btnSingUpMob = document.querySelector('.h-user-mobail')
const dialog = document.querySelector('#favDialog')
const btnClose = document.querySelector('#btn-close')
const btnOpenUp = document.querySelector('#btn-open-up')
const btnOpenIn = document.querySelector('#btn-open-in')
const linkSingUp = document.querySelector('.link-singUp')
const linkSingIn = document.querySelector('.link-singIn')
const wrapInput = document.querySelector('.wrap-input')



btnClose.addEventListener("click", () => {
  dialog.close();
});
btnSingUp.addEventListener("click", () => {
    dialog.showModal();
  });
btnSingUpMob.addEventListener("click", () => {
    dialog.showModal();
  });

  btnOpenUp.addEventListener("click", singUp)
  function singUp(){
    const email =document.getElementById('email').value;
    const password =document.getElementById('current-password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
   console.log(result);
  })
  .catch((error) => {
    console.log(error.code); 
    console.log(error.message); 
  });
  }

linkSingUp.addEventListener('click', onLinkSingUpClick)
linkSingIn.addEventListener('click', onLinkSingInClick)

function onLinkSingUpClick(){
  btnOpenIn.classList.add('hidden');
  btnOpenUp.classList.remove('hidden');
  const markup=`
  <input class="input" type="text" name="name" placeholder="NAME" id="username" autocomplete="username">
  <input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
  <input class="input" type="password" name="password" placeholder="PASSWORD" id="current-password" autocomplete="current-password">
  `
  dialog.style.height = '516px';
  wrapInput.innerHTML = markup;
}

function onLinkSingInClick(){
  btnOpenUp.classList.add('hidden');
  btnOpenIn.classList.remove('hidden');
  const markup=`
  <input class="input" type="email" name="email" placeholder="EMAIL" id="email" autocomplete="email">
  <input class="input" type="password" name="password" placeholder="PASSWORD" id="current-password" autocomplete="current-password">
  `;
  
  dialog.style.height = '434px'
  wrapInput.innerHTML = markup;
}


btnOpenIn.addEventListener("click", singIn)

function singIn(){ 

  const email = document.getElementById('email').value;
const password = document.getElementById('current-password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
   
    console.log(result, 1);
   
  })
  .catch((error) => {
    console.log(error.code); 
    console.log(error.message); 
  });
}

