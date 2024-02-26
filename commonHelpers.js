import{a as w,i as E}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function c(e,t){const s="https://books-backend.p.goit.global/books/",n=`${e}`;let o;t&&(o={category:`${t}`});const r=`${s}${n}`,i=await w.get(r,{params:o});if(i.data.length===0)throw new Error("Error");return i.data}const g={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};function u(e){E.error({title:"Error",message:e})}const b=document.querySelector("body"),d=document.querySelector(".modal"),m=document.querySelector(".backdrop"),L=document.querySelector(".modal-close-btn"),a=document.querySelector(".modal-list-btn");async function B(e){document.addEventListener("keydown",S);const t=await c(e);M(t),a.addEventListener("click",function(){q(e),a.blur()})}function M(e){var o,r;m.style.display="flex",b.style.overflow="hidden";const t=((o=e.buy_links.find(i=>i.name==="Amazon"))==null?void 0:o.url)||"",s=((r=e.buy_links.find(i=>i.name==="Apple Books"))==null?void 0:r.url)||"",n=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${t}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${s}">
    </li>
  </ul>
`;d.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${n}
    </div>  
  </div>
`,d.appendChild(L),d.appendChild(a),d.querySelectorAll(".platform-image").forEach(i=>{i.addEventListener("click",()=>{const k=i.dataset.url;k?window.open(k,"_blank"):console.error("Platform URL not found.")})})}function q(e){const t=a.textContent.trim(),s=localStorage.getItem("shoppingList"),n=JSON.parse(s)||{};t==="add to shopping list"?(n[e]=!0,a.textContent="remove from the shopping list"):(n[e]&&delete n[e],a.textContent="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(n))}document.addEventListener("DOMContentLoaded",function(){L.addEventListener("click",function(){f()}),m.addEventListener("click",function(e){e.target===m&&f()})});function S(e){e.key==="Escape"&&(f(),document.removeEventListener("keydown",S))}function f(){m.style.display="none",b.style.overflow="auto"}let l=window.innerWidth;window.addEventListener("resize",async()=>{const e=window.innerWidth;if(l>768||l<768&&e>=768||l>=768&&e<=1440&&(l<=768||e>=1439))try{const t=await c("top-books");g.galleryBooks.innerHTML="";for(const s of t)$(s),s.books.length>=1?v(s):u("Sorry, there are no items in this category")}catch(t){u(`Failed to render books:${t}`)}l=e});async function C(e){try{const t=await c("top-books");for(const n of t)$(n),n.books.length>=1?v(n):u("Sorry, there are no items in this category");const s=document.querySelectorAll(".card");document.addEventListener("click",n=>{for(const o of s){let r=o.dataset.id;n.target.parentNode===o&&B(r)}})}catch(t){u(`Failed to render books:${t}`)}}function $(e){const t=`<li id="${e.list_name}" class="list-category-books">
    <h2 class="list-category-title">${e.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;g.galleryBooks.insertAdjacentHTML("beforeend",t)}function T(e){const{book_image:t,author:s,title:n,_id:o,contributor:r,list_name:i}=e;if(i)return`
    <li class="card book-item" data-id="${o}">
    <img class="book-img" src="${t}" alt="${r} ${n}">
    <h3 class="title-book">${n}</h3>
    <p class="author">${s}</p>
    </li>
   `}function p(e){return e.map(T).join("")}function v(e){const t=_(e),s=e.list_name;document.getElementById(s).querySelector(".list-book").insertAdjacentHTML("afterbegin",t)}function _(e){let t;return window.innerWidth>=768&&window.innerWidth<=1439?t=p(e.books.slice(0,3)):window.innerWidth>=1440?t=p(e.books):t=p(e.books.slice(0,1)),t}async function A(e,t){try{const s=await c(e,t);j(s),O(t)}catch(s){console.error("Failed to fetch books:",s)}}function j(e){const t=document.querySelector(".booksgallery"),s=e.map(n=>`
      <li class="booksgallery-item" id="book-${n._id}">
        <div class="container-item">
          <img class="gallery-image" src="${n.book_image}" alt="${n.description}">
          <h3 class="name-book">${n.title}</h3>
          <p class="author-book">${n.author}</p>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",s)}function O(e){const t=document.querySelector(".selected-title"),s=e.split(" "),n=s[s.length-1];s.pop(),t.innerHTML=`${s.join(" ")} <span class="selected-color">${n} </span>`}async function H(){const e=await c("category-list");let t='<li data-category="top-books" class="category-books-item">All categories</li>';e.forEach(o=>{t+=`<li class="category-books-item" data-category="${o.list_name}">${o.list_name}</li>`}),g.allListCategories.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".category-books-item").forEach(o=>{o.addEventListener("click",n)});function n(o){o.preventDefault();const r=o.target.innerHTML;for(const i of e)i.list_name;r==="All categories"&&document.querySelector(".category-books-item").dataset.category}}const y=document.querySelector(".js-hhome"),h=document.querySelector(".js-hshopping");y.addEventListener("click",N);h.addEventListener("click",D);function N(e){e.preventDefault(),y.classList.add("hhome-btn"),h.classList.remove("hshopping-btn")}function D(e){e.preventDefault(),y.classList.remove("hhome-btn"),h.classList.add("hshopping-btn")}const I="category",x="Graphic Books and Manga";A(I,x);C();H();
//# sourceMappingURL=commonHelpers.js.map
