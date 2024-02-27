import{g as f,i as D,T as M,a as W,r as z,b as I}from"./assets/storage-e6b87283.js";import{i as O}from"./assets/vendor-8cce9181.js";const T=document.querySelector("body"),g=document.querySelector(".modal"),L=document.querySelector(".backdrop"),A=document.querySelector(".modal-close-btn"),b=document.querySelector(".modal-list-btn-add"),v=document.querySelector(".modal-list-btn-remove");async function _(e){document.addEventListener("keydown",j);const o=await f(e);U(o),b.addEventListener("click",function(){C(e),b.style.display="none",v.style.display="block"}),v.addEventListener("click",function(){C(e),v.style.display="none",b.style.display="block"})}function U(e){var r,i;L.style.display="flex",T.style.overflow="hidden";const o=((r=e.buy_links.find(c=>c.name==="Amazon"))==null?void 0:r.url)||"",n=((i=e.buy_links.find(c=>c.name==="Apple Books"))==null?void 0:i.url)||"",a=`
    <ul class="buy-links-list">
      <li>
        <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${o}">
      </li>
      <li>
        <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${n}">
      </li>
    </ul>
  `;g.innerHTML=`
    <div class="modal-container">
      <img src="${e.book_image}" class="modal-image">
      <div class="modal-wrap">
        <h2 class="modal-title">${e.title}</h2>
        <p class="modal-author">${e.author}</p>
        <p class="description">${e.description}</p>
        ${a}
      </div>  
    </div>
  `,g.appendChild(A),g.appendChild(b),g.appendChild(v),g.querySelectorAll(".platform-image").forEach(c=>{c.addEventListener("click",()=>{const t=c.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}function C(e){const o=D(M)||[],n=o.indexOf(e);n===-1?o.push(e):o.splice(n,1),W(M,o),z()}document.addEventListener("DOMContentLoaded",function(){A.addEventListener("click",function(){q()}),L.addEventListener("click",function(e){e.target===L&&q()})});function j(e){e.key==="Escape"&&(q(),document.removeEventListener("keydown",j))}function q(){L.style.display="none",T.style.overflow="auto"}const F="category";async function H(e){const o=document.querySelector(".js-booksgallery");o.innerHTML="";try{const a=await f(F,e);N(a),P(e)}catch(a){console.error("Failed to fetch books:",a)}document.querySelectorAll(".cat-book-image-overlay").forEach(a=>{a.addEventListener("click",r=>{const i=r.target.closest(".booksgallery-item");if(i){const c=i.dataset.id;_(c)}})})}function N(e){const o=document.querySelector(".booksgallery"),n=e.map(a=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${a._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${a.book_image}" alt="${a.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${a.title}</h3>
          <p class="author-book">${a.author}</p>
      </li>`).join("");o.insertAdjacentHTML("beforeend",n)}function P(e){const o=document.querySelector(".selected-title"),n=e.split(" "),a=n[n.length-1];n.pop(),o.innerHTML=`${n.join(" ")} <span class="selected-color">${a} </span>`}const E={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const o=await f("category-list");let n='<li data-category="top-books" class="category-books-item">All categories</li>';o.forEach(i=>{n+=`<li class="category-books-item" data-category="${i.list_name}">${i.list_name}</li>`}),E.allListCategories.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".category-books-item").forEach(i=>{i.addEventListener("click",r)});function r(i){i.preventDefault();const c=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),s=i.target.innerHTML;for(const d of o)d.list_name===s&&(c.style.display="none",t.style.display="block",H(s));s==="All categories"&&(c.style.display="block",t.style.display="none")}}e()});function h(e){O.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const s=await f("top-books");E.galleryBooks.innerHTML="";for(const d of s)n(d),d.books.length>=1?i(d):h("Sorry, there are no items in this category")}catch(s){h(`Failed to render books:${s}`)}e=t});async function o(){try{let u=function(l){const p=document.querySelector(".js-home-pg"),m=document.querySelector(".js-selected-page"),S=l.srcElement.dataset.id;p.style.display="none",m.style.display="block",H(S)};const t=await f("top-books");for(const l of t)n(l),l.books.length>=1?i(l):h("Sorry, there are no items in this category");document.querySelectorAll(".book-image-overlay").forEach(l=>{l.addEventListener("click",p=>{const m=p.target.closest(".card");if(m){const S=m.dataset.id;_(S)}})}),document.querySelectorAll(".btn-more").forEach(l=>{l.addEventListener("click",u)})}catch(t){h(`Failed to render books:${t}`)}}function n(t){const s=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;E.galleryBooks.insertAdjacentHTML("beforeend",s)}function a(t){const{book_image:s,author:d,title:u,_id:l,contributor:p,list_name:m}=t;if(m)return`
    <li class="card book-item book-hover" data-id="${l}">
       <div class="wrapper-overlay">
        <img class="book-img" src="${s}" alt="${p} ${u}">
        <div class="book-image-overlay" aria-label="${u}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${u}</h3>
    <p class="author">${d}</p>
    </li>
    `}function r(t){return t.map(a).join("")}function i(t){const s=c(t),d=t.list_name;document.getElementById(d).querySelector(".list-book").insertAdjacentHTML("afterbegin",s)}function c(t){let s;return window.innerWidth>=768&&window.innerWidth<=1439?s=r(t.books.slice(0,3)):window.innerWidth>=1440?s=r(t.books):s=r(t.books.slice(0,1)),s}o()});const B=document.querySelector(".switch-box"),y=document.querySelector(".switch-button"),k=document.querySelector("body");y.addEventListener("click",e=>{y.dataset.switch==="true"?(y.classList.remove("new-position"),B.classList.remove("new-background"),y.dataset.switch="false"):(y.classList.add("new-position"),B.classList.add("new-background"),y.dataset.switch="true"),k.classList.value==="dark"?(k.classList.remove("dark"),k.classList.add("light")):(k.classList.remove("light"),k.classList.add("dark"))});const $=document.querySelector(".js-hhome"),w=document.querySelector(".js-hshopping");document.addEventListener("DOMContentLoaded",x);$.addEventListener("click",x);w.addEventListener("click",K);function x(){$.classList.add("hhome-btn"),w.classList.remove("hshopping-btn")}function K(){$.classList.remove("hhome-btn"),w.classList.add("hshopping-btn")}w.addEventListener("click",I);
//# sourceMappingURL=commonHelpers.js.map
