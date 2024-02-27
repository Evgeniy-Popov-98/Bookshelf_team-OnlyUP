import"./assets/storage-2ca05d50.js";import{a as x,i as N}from"./assets/vendor-8cce9181.js";async function f(e,s){const n="https://books-backend.p.goit.global/books/",o=`${e}`;let i;s&&(i={category:`${s}`});const r=`${n}${o}`,l=await x.get(r,{params:i});if(l.data.length===0)throw new Error("Error");return l.data}const h="TASKS_KEY";function B(e,s){localStorage.setItem(e,JSON.stringify(s))}function M(e){return JSON.parse(localStorage.getItem(e))}function O(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.getAttribute("id");let n=[];const o=M(h);for(const i of o)i.constID!==s&&n.push(i);B(h,n)}const T=document.querySelector(".js-hhome"),A=document.querySelector(".js-hshopping");document.addEventListener("DOMContentLoaded",C);T.addEventListener("click",C);A.addEventListener("click",W);function C(){T.classList.add("hhome-btn"),A.classList.remove("hshopping-btn")}function W(e){e.homeBtn.classList.remove("hhome-btn"),A.classList.add("hshopping-btn")}const _=document.querySelector("body"),k=document.querySelector(".modal"),v=document.querySelector(".backdrop"),j=document.querySelector(".modal-close-btn"),d=document.querySelector(".modal-list-btn-add"),u=document.querySelector(".modal-list-btn-remove");let w;async function I(e){u.setAttribute("id",`${e}`),w=e,document.addEventListener("keydown",D);const s=await f(w);z(s);try{const n=M(h);console.log(n);for(const o of n)console.log(o),o.constID===e&&(console.log(!0),d.style.display="none",u.style.display="flex")}catch{}d.addEventListener("click",L),u.addEventListener("click",S)}function z(e){var i,r;v.style.display="flex",_.style.overflow="hidden";const s=((i=e.buy_links.find(l=>l.name==="Amazon"))==null?void 0:i.url)||"",n=((r=e.buy_links.find(l=>l.name==="Apple Books"))==null?void 0:r.url)||"",o=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${s}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${n}">
    </li>
  </ul>
`;k.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description-modal">${e.description}</p>
      ${o}
    </div>  
  </div>
`,k.appendChild(j),k.appendChild(d),k.appendChild(u),k.querySelectorAll(".platform-image").forEach(l=>{l.addEventListener("click",()=>{const t=l.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){j.addEventListener("click",function(){$()}),v.addEventListener("click",function(e){e.target===v&&$()})});function D(e){e.key==="Escape"&&($(),document.removeEventListener("keydown",D))}function $(){d.removeEventListener("click",L),d.removeEventListener("click",S),v.style.display="none",_.style.overflow="auto",d.style.display="flex",u.style.display="none"}function L(){const e=M(h)||[];e.push({constID:w}),B(h,e),d.style.display="none",u.style.display="flex",d.removeEventListener("click",L),u.addEventListener("click",S)}function S(e){O(e),d.style.display="flex",u.style.display="none",d.removeEventListener("click",S),d.addEventListener("click",L)}const U="category";async function H(e){const s=document.querySelector(".js-booksgallery");s.innerHTML="";try{const o=await f(U,e);K(o),F(e)}catch(o){console.error("Failed to fetch books:",o)}document.querySelectorAll(".cat-book-image-overlay").forEach(o=>{o.addEventListener("click",i=>{const r=i.target.closest(".booksgallery-item");if(r){const l=r.dataset.id;I(l)}})})}function K(e){const s=document.querySelector(".booksgallery"),n=e.map(o=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${o._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${o.book_image}" alt="${o.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${o.title}</h3>
          <p class="author-book">${o.author}</p>
      </li>`).join("");s.insertAdjacentHTML("beforeend",n)}function F(e){const s=document.querySelector(".selected-title"),n=e.split(" "),o=n[n.length-1];n.pop(),s.innerHTML=`${n.join(" ")} <span class="selected-color">${o} </span>`}const q={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const s=await f("category-list");let n='<li data-category="top-books" class="category-books-item">All categories</li>';s.forEach(r=>{n+=`<li class="category-books-item" data-category="${r.list_name}">${r.list_name}</li>`}),q.allListCategories.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".category-books-item").forEach(r=>{r.addEventListener("click",i)});function i(r){r.preventDefault();const l=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),a=r.target.innerHTML;for(const m of s)m.list_name===a&&(l.style.display="none",t.style.display="block",H(a));a==="All categories"&&(l.style.display="block",t.style.display="none")}}e()});function b(e){N.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const a=await f("top-books");q.galleryBooks.innerHTML="";for(const m of a)n(m),m.books.length>=1?r(m):b("Sorry, there are no items in this category")}catch(a){b(`Failed to render books:${a}`)}e=t});async function s(){try{let y=function(c){const p=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),E=c.srcElement.dataset.id;p.style.display="none",g.style.display="block",H(E)};const t=await f("top-books");for(const c of t)n(c),c.books.length>=1?r(c):b("Sorry, there are no items in this category");document.querySelectorAll(".book-image-overlay").forEach(c=>{c.addEventListener("click",p=>{const g=p.target.closest(".card");if(g){const E=g.dataset.id;I(E)}})}),document.querySelectorAll(".btn-more").forEach(c=>{c.addEventListener("click",y)})}catch(t){b(`Failed to render books:${t}`)}}function n(t){const a=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;q.galleryBooks.insertAdjacentHTML("beforeend",a)}function o(t){const{book_image:a,author:m,title:y,_id:c,contributor:p,list_name:g}=t;if(g)return`
    <li class="card book-item book-hover" data-id="${c}">
       <div class="wrapper-overlay">
        <img class="book-img-home" src="${a}" alt="${p} ${y}">
        <div class="book-image-overlay" aria-label="${y}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${y}</h3>
    <p class="author">${m}</p>
    </li>
    `}function i(t){return t.map(o).join("")}function r(t){const a=l(t),m=t.list_name;document.getElementById(m).querySelector(".list-book").insertAdjacentHTML("afterbegin",a)}function l(t){let a;return window.innerWidth>=768&&window.innerWidth<=1439?a=i(t.books.slice(0,3)):window.innerWidth>=1440?a=i(t.books):a=i(t.books.slice(0,1)),a}s()});
//# sourceMappingURL=commonHelpers.js.map
