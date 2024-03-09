import{a as Y,i as D}from"./vendor-8cce9181.js";import{initializeApp as F}from"https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";import{getDatabase as J,set as V,ref as S,get as Z,update as G}from"https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";import{getAuth as Q,createUserWithEmailAndPassword as X,updateProfile as ee,signOut as B,onAuthStateChanged as te,signInWithEmailAndPassword as se}from"https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function Le(e,s){const n="https://books-backend.p.goit.global/books/",i=`${e}`;let t;s&&(t={category:`${s}`});const o=`${n}${i}`,a=await Y.get(o,{params:t});if(a.data.length===0)throw new Error("Error");return a.data}const h="TASKS_KEY",k="USER_KEY";function p(e,s){localStorage.setItem(e,JSON.stringify(s))}function E(e){return JSON.parse(localStorage.getItem(e))}function Se(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.getAttribute("id");let n=[];const i=E(h);for(const t of i)t.constID!==s&&n.push(t);p(h,n)}document.addEventListener("DOMContentLoaded",function(){const e=window.location.href,s=document.querySelector(".js-hhome"),n=document.querySelector(".js-hshopping"),i=document.querySelector(".header-home-link"),t=document.querySelector(".hshopping-icon");e.includes("index.html")?(s.classList.add("header-newbg"),i.classList.remove("header-home-link")):e.includes("shoppinglist.html")&&(n.classList.add("header-newbg"),s.classList.remove("header-newbg"),t.classList.remove("hshopping-icon"))});document.querySelector(".hmob-burger-menu");const q=document.querySelector(".hburger-menu-icon"),d=document.querySelector(".hclose-menu-icon"),C=document.querySelector(".js-hmob-modal"),N=document.querySelector(".light");q.addEventListener("click",ne);function ne(e){e.preventDefault(),q.classList.toggle("is-visible"),d.classList.toggle("is-visible"),C.classList.toggle("is-visible"),N.style.overflow="hidden",d.style.display="flex"}d.addEventListener("click",()=>{q.classList.toggle("is-visible"),d.classList.toggle("is-visible"),C.classList.toggle("is-visible"),N.style.overflow="visible",d.style.display="none"});const oe=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}],f=document.querySelector(".plus-btn"),b=document.querySelector(".second-btn"),v=document.querySelector(".header-menu"),U=document.querySelectorAll(".header-link");document.querySelectorAll(".header-item");for(let e=0;e<U.length;e++)U[e].setAttribute("href",`${oe[e].url}`);f.addEventListener("click",function(){f.style.display="none",b.style.display="flex",v.style.transform="translateY(-156px)",v.style.transition="transform 2s allow-discrete"});b.addEventListener("click",function(){f.style.display="flex",b.style.display="none",v.style.transform=""});const x=document.querySelector(".switch-box"),y=document.querySelector(".switch-button"),g=document.querySelector("body"),w="";let l=!1;document.addEventListener("DOMContentLoaded",()=>{E(w)&&T()});y.addEventListener("click",T);function T(){l?(y.classList.remove("new-position"),x.classList.remove("new-background"),g.classList.remove("dark"),g.classList.add("light"),l=!1,p(w,l)):(y.classList.add("new-position"),x.classList.add("new-background"),g.classList.remove("light"),g.classList.add("dark"),l=!0),l&&p(w,l)}const A=document.querySelector(".number-shopping-list");document.addEventListener("DOMContentLoaded",ie);function ie(){let e=E(h);!e.length===0?A.innerHTML=`${e.length}`:A.innerHTML="0"}function ke(e){D.error({title:"Error",message:e})}function z(e){D.success({title:"Ok",message:e})}const re={apiKey:"AIzaSyDHiSfvnjzVWJqWI_IEEi6bW_1h4HyJ_fU",authDomain:"form-authorization-4890a.firebaseapp.com",databaseURL:"https://form-authorization-4890a-default-rtdb.europe-west1.firebasedatabase.app",projectId:"form-authorization-4890a",storageBucket:"form-authorization-4890a.appspot.com",messagingSenderId:"168346739495",appId:"1:168346739495:web:c2181a801d16964f053f02"},ce=F(re),I=J(ce),c=Q(),ae=document.querySelector(".h-user"),L=document.querySelector(".h-user-mobail-sign"),le=document.querySelector(".h-user-mobail"),r=document.querySelector("#favDialog"),ue=document.querySelector("#btn-close"),P=document.querySelector("#btn-open-up");document.querySelector("#btn-open-in");const u=document.querySelector(".link-singUp"),m=document.querySelector(".link-singIn"),_=document.querySelector(".wrap-form"),H=document.querySelector(".form-authorization"),K=document.querySelector(".user"),W=document.querySelector(".wrap-desk-btn"),de=document.querySelector(".user-nickname-name");document.querySelector(".js-hmob-modal");ue.addEventListener("click",()=>{r.close()});ae.addEventListener("click",()=>{r.showModal(),u.classList.add("text-decoration-line")});L.addEventListener("click",()=>{r.showModal()});P.addEventListener("click",M);H.addEventListener("submit",j);u.addEventListener("click",R);m.addEventListener("click",$);le.addEventListener("click",ge);P.addEventListener("click",M);H.addEventListener("submit",j);u.addEventListener("click",R);m.addEventListener("click",$);async function M(){const e=document.getElementById("email").value,s=document.getElementById("current-password").value,n=document.getElementById("username").value;await X(c,e,s).then(i=>{const t=i.user;V(S(I,"users/"+t.uid),{username:n,email:e}),z("New account created"),ee(t,{displayName:n}).then(()=>{p(k,{displayName:n}),updateUIWithUsername(n)}).catch(o=>{console.log(o.message)})})}async function me(){console.log(!0),u.classList.add("text-decoration-line"),m.classList.remove("text-decoration-line");const e=document.getElementById("email").value,s=document.getElementById("current-password").value;await se(c,e,s).then(n=>{const i=n.user,t=new Date;G(S(I,"users/"+i.uid),{last_login:t}),z("You loged in")}).catch(n=>{console.log(n.message)})}function ge(){B(c).then(()=>{localStorage.removeItem(k),O(),window.location.href="index.html"}).catch(e=>{console.log(e.message)})}function pe(){B(c).then(()=>{W.innerHTML=`<button class="h-user">
          Sign up
          <svg class="h-user-sign" width="20" height="20">
            <use href="./images/icons.svg#icon-arrow"></use>
          </svg>
        </button>`,document.querySelector(".h-user").addEventListener("click",()=>{r.showModal()}),window.location.href="index.html",localStorage.removeItem(k)}).catch(e=>{console.log(e.message)})}c.currentUser;te(c,e=>{if(e){const s=e.uid,n=S(I,`users/${s}`);Z(n).then(i=>{if(i.exists()){const o=i.val().username;de.textContent=o}else console.log("Дані про користувача відсутні в базі даних")}).catch(i=>{console.error("Помилка при отриманні даних користувача:",i)})}O()});function j(e){e.preventDefault(),O()}function O(){window.matchMedia("(min-width: 768px)").matches?he():(K.classList.remove("hidden"),fe())}function R(){u.classList.add("text-decoration-line"),m.classList.remove("text-decoration-line");const e=`
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
  `;r.classList.remove("sizeIn"),r.classList.add("sizeUp"),_.innerHTML=e,document.querySelector("#btn-open-up").addEventListener("click",M)}function $(){u.classList.remove("text-decoration-line"),m.classList.add("text-decoration-line");const e=`<div class="wrap-input">
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
  `;r.classList.remove("sizeUp"),r.classList.add("sizeIn"),_.innerHTML=e,document.querySelector("#btn-open-in").addEventListener("click",me)}function he(){const e=c.currentUser;if(e){const s=e.displayName;W.innerHTML=`<div class="user-nickname-desk toggleMenu">
        <div class="user-nickname-desk-auth">
          <svg class="user-nickname-icon" width="37" height="37">
            <use href="../images/icons.svg#icon-user"></use>
          </svg>
          <p class="user-nickname-name">${s}</p>
          <svg class="user-icon-caret-down" width="23" height="26">
            <use href="../images/icons.svg#icon-caret-down"></use>
          </svg>
        </div>
      </div>
      <div class="h-user-logout-desk">	  
		<p class="user-nickname-name-modal">Do you want to go out?</p> 
        <button class="btnLogOutClose">
          Log out
          <svg class="h-user-sign-mobail" width="20" height="20">
            <use href="../images/icons.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>`,r.close();const n=document.querySelector(".h-user-logout-desk"),i=document.querySelector(".user-icon-caret-down"),t=document.querySelector(".toggleMenu"),o=document.querySelector(".btnLogOutClose");t.addEventListener("click",()=>{n.classList.toggle("h-user-logout-desk-active"),i.classList.toggle("user-icon-caret-down-active")}),o.addEventListener("click",pe)}}function fe(){if(!c.currentUser&&window.matchMedia("(max-width: 768px)").matches){L.classList.remove("hidden"),K.classList.add("hidden");return}else{L.classList.add("hidden"),r.close();return}}export{h as T,p as a,ie as c,ke as e,Le as g,E as i,Se as r};
//# sourceMappingURL=form-authorization-960e5dc8.js.map
