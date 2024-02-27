import"./assets/storage-5e2df8da.js";import{a as W,i as z}from"./assets/vendor-8cce9181.js";async function h(e,t){const l="https://books-backend.p.goit.global/books/",n=`${e}`;let i;t&&(i={category:`${t}`});const s=`${l}${n}`,a=await W.get(s,{params:i});if(a.data.length===0)throw new Error("Error");return a.data}const f="TASKS_KEY";function _(e,t){localStorage.setItem(e,JSON.stringify(t))}function B(e){return JSON.parse(localStorage.getItem(e))}function U(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.getAttribute("id");let l=[];const n=B(f);for(const i of n)i.constID!==t&&l.push(i);_(f,l)}const I=document.querySelector(".js-hhome"),C=document.querySelector(".js-hshopping");document.addEventListener("DOMContentLoaded",j);I.addEventListener("click",j);C.addEventListener("click",P);function j(){I.classList.add("hhome-btn"),C.classList.remove("hshopping-btn")}function P(e){e.homeBtn.classList.remove("hhome-btn"),C.classList.add("hshopping-btn")}const F=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}];let E=document.querySelector(".plus-btn"),q=document.querySelector(".second-btn");const T=document.querySelectorAll(".header-link");document.querySelectorAll(".header-item");for(let e=0;e<T.length;e++)T[e].setAttribute("href",`${F[e].url}`);E.addEventListener("click",function(){E.style.display="none",q.style.display="flex";const e=document.querySelectorAll(".header-item");for(let t=0;t<3;t++)e[t].style.display="none"});q.addEventListener("click",function(){E.style.display="flex",q.style.display="none";const e=document.querySelectorAll(".header-item");for(let t=0;t<3;t++)e[t].style.display="flex"});const D=document.querySelector("body"),k=document.querySelector(".modal"),v=document.querySelector(".backdrop"),x=document.querySelector(".modal-close-btn"),d=document.querySelector(".modal-list-btn-add"),m=document.querySelector(".modal-list-btn-remove");let $;async function H(e){m.setAttribute("id",`${e}`),$=e,document.addEventListener("keydown",O);const t=await h($);K(t);try{const l=B(f);console.log(l);for(const n of l)console.log(n),n.constID===e&&(console.log(!0),d.style.display="none",m.style.display="flex")}catch{}d.addEventListener("click",w),m.addEventListener("click",S)}function K(e){var i,s;v.style.display="flex",D.style.overflow="hidden";const t=((i=e.buy_links.find(a=>a.name==="Amazon"))==null?void 0:i.url)||"",l=((s=e.buy_links.find(a=>a.name==="Apple Books"))==null?void 0:s.url)||"",n=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${t}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${l}">
    </li>
  </ul>
`;k.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description-modal">${e.description}</p>
      ${n}
    </div>  
  </div>
`,k.appendChild(x),k.appendChild(d),k.appendChild(m),k.querySelectorAll(".platform-image").forEach(a=>{a.addEventListener("click",()=>{const o=a.dataset.url;o?window.open(o,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){x.addEventListener("click",function(){A()}),v.addEventListener("click",function(e){e.target===v&&A()})});function O(e){e.key==="Escape"&&(A(),document.removeEventListener("keydown",O))}function A(){d.removeEventListener("click",w),d.removeEventListener("click",S),v.style.display="none",D.style.overflow="auto",d.style.display="flex",m.style.display="none"}function w(){const e=B(f)||[];e.push({constID:$}),_(f,e),d.style.display="none",m.style.display="flex",d.removeEventListener("click",w),m.addEventListener("click",S)}function S(e){U(e),d.style.display="flex",m.style.display="none",d.removeEventListener("click",S),d.addEventListener("click",w)}const R="category";async function N(e){const t=document.querySelector(".js-booksgallery");t.innerHTML="";try{const n=await h(R,e);J(n),Q(e)}catch(n){console.error("Failed to fetch books:",n)}document.querySelectorAll(".cat-book-image-overlay").forEach(n=>{n.addEventListener("click",i=>{const s=i.target.closest(".booksgallery-item");if(s){const a=s.dataset.id;H(a)}})})}function J(e){const t=document.querySelector(".booksgallery"),l=e.map(n=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${n._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${n.book_image}" alt="${n.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${n.title}</h3>
          <p class="author-book">${n.author}</p>
      </li>`).join("");t.insertAdjacentHTML("beforeend",l)}function Q(e){const t=document.querySelector(".selected-title"),l=e.split(" "),n=l[l.length-1];l.pop(),t.innerHTML=`${l.join(" ")} <span class="selected-color">${n} </span>`}const M={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const t=await h("category-list");let l='<li data-category="top-books" class="category-books-item">All categories</li>';t.forEach(s=>{l+=`<li class="category-books-item" data-category="${s.list_name}">${s.list_name}</li>`}),M.allListCategories.insertAdjacentHTML("beforeend",l),document.querySelectorAll(".category-books-item").forEach(s=>{s.addEventListener("click",i)});function i(s){s.preventDefault();const a=document.querySelector(".js-home-pg"),o=document.querySelector(".js-selected-page"),r=s.target.innerHTML;for(const u of t)u.list_name===r&&(a.style.display="none",o.style.display="block",N(r));r==="All categories"&&(a.style.display="block",o.style.display="none")}}e()});function b(e){z.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const o=window.innerWidth;if(e>768||e<768&&o>=768||e>=768&&o<=1440&&(e<=768||o>=1439))try{const r=await h("top-books");M.galleryBooks.innerHTML="";for(const u of r)l(u),u.books.length>=1?s(u):b("Sorry, there are no items in this category")}catch(r){b(`Failed to render books:${r}`)}e=o});async function t(){try{let y=function(c){const p=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),L=c.srcElement.dataset.id;p.style.display="none",g.style.display="block",N(L)};const o=await h("top-books");for(const c of o)l(c),c.books.length>=1?s(c):b("Sorry, there are no items in this category");document.querySelectorAll(".book-image-overlay").forEach(c=>{c.addEventListener("click",p=>{const g=p.target.closest(".card");if(g){const L=g.dataset.id;H(L)}})}),document.querySelectorAll(".btn-more").forEach(c=>{c.addEventListener("click",y)})}catch(o){b(`Failed to render books:${o}`)}}function l(o){const r=`<li id="${o.list_name}" class="list-category-books">
    <h2 class="list-category-title">${o.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${o.list_name}">See more</button>`;M.galleryBooks.insertAdjacentHTML("beforeend",r)}function n(o){const{book_image:r,author:u,title:y,_id:c,contributor:p,list_name:g}=o;if(g)return`
    <li class="card book-item book-hover" data-id="${c}">
       <div class="wrapper-overlay">
        <img class="book-img-home" src="${r}" alt="${p} ${y}">
        <div class="book-image-overlay" aria-label="${y}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${y}</h3>
    <p class="author">${u}</p>
    </li>
    `}function i(o){return o.map(n).join("")}function s(o){const r=a(o),u=o.list_name;document.getElementById(u).querySelector(".list-book").insertAdjacentHTML("afterbegin",r)}function a(o){let r;return window.innerWidth>=768&&window.innerWidth<=1439?r=i(o.books.slice(0,3)):window.innerWidth>=1440?r=i(o.books):r=i(o.books.slice(0,1)),r}t()});
//# sourceMappingURL=commonHelpers.js.map
