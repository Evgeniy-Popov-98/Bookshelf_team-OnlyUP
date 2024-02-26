import{a as E,i as $}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();async function m(e,t){const r="https://books-backend.p.goit.global/books/",n=`${e}`;let o;t&&(o={category:`${t}`});const s=`${r}${n}`,i=await E.get(s,{params:o});if(i.data.length===0)throw new Error("Error");return i.data}const b=document.querySelector("body"),c=document.querySelector(".modal"),d=document.querySelector(".backdrop"),L=document.querySelector(".modal-close-btn"),a=document.querySelector(".modal-list-btn");async function B(e){document.addEventListener("keydown",S);const t=await m(e);q(t),a.addEventListener("click",function(){C(e),a.blur()})}function q(e){var o,s;d.style.display="flex",b.style.overflow="hidden";const t=((o=e.buy_links.find(i=>i.name==="Amazon"))==null?void 0:o.url)||"",r=((s=e.buy_links.find(i=>i.name==="Apple Books"))==null?void 0:s.url)||"",n=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${t}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${r}">
    </li>
  </ul>
`;c.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${n}
    </div>  
  </div>
`,c.appendChild(L),c.appendChild(a),c.querySelectorAll(".platform-image").forEach(i=>{i.addEventListener("click",()=>{const k=i.dataset.url;k?window.open(k,"_blank"):console.error("Platform URL not found.")})})}function C(e){const t=a.textContent.trim(),r=localStorage.getItem("shoppingList"),n=JSON.parse(r)||{};t==="add to shopping list"?(n[e]=!0,a.textContent="remove from the shopping list"):(n[e]&&delete n[e],a.textContent="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(n))}document.addEventListener("DOMContentLoaded",function(){L.addEventListener("click",function(){f()}),d.addEventListener("click",function(e){e.target===d&&f()})});function S(e){e.key==="Escape"&&(f(),document.removeEventListener("keydown",S))}function f(){d.style.display="none",b.style.overflow="auto"}const g={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};function u(e){$.error({title:"Error",message:e})}let l=window.innerWidth;window.addEventListener("resize",async()=>{const e=window.innerWidth;if(l>768||l<768&&e>=768||l>=768&&e<=1440&&(l<=768||e>=1439))try{const t=await m("top-books");g.galleryBooks.innerHTML="";for(const r of t)v(r),r.books.length>=1?w(r):u("Sorry, there are no items in this category")}catch(t){u(`Failed to render books:${t}`)}l=e});async function M(e){try{const t=await m("top-books");for(const n of t)v(n),n.books.length>=1?w(n):u("Sorry, there are no items in this category");const r=document.querySelectorAll(".card");document.addEventListener("click",n=>{for(const o of r){let s=o.dataset.id;n.target.parentNode===o&&B(s)}})}catch(t){u(`Failed to render books:${t}`)}}function v(e){const t=`<li id="${e.list_name}" class="list-category-books">
    <h2 class="list-category-title">${e.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;g.galleryBooks.insertAdjacentHTML("beforeend",t)}function A(e){const{book_image:t,author:r,title:n,_id:o,contributor:s,list_name:i}=e;if(i)return`
    <li class="card book-item" data-id="${o}">
    <img class="book-img" src="${t}" alt="${s} ${n}">
    <h3 class="title-book">${n}</h3>
    <p class="author">${r}</p>
    </li>
   `}function p(e){return e.map(A).join("")}function w(e){const t=_(e),r=e.list_name;document.getElementById(r).querySelector(".list-book").insertAdjacentHTML("afterbegin",t)}function _(e){let t;return window.innerWidth>=768&&window.innerWidth<=1439?t=p(e.books.slice(0,3)):window.innerWidth>=1440?t=p(e.books):t=p(e.books.slice(0,1)),t}async function T(){const e=await m("category-list");let t='<li data-category="top-books" class="category-books-item">All categories</li>';e.forEach(o=>{t+=`<li class="category-books-item" data-category="${o.list_name}">${o.list_name}</li>`}),g.allListCategories.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".category-books-item").forEach(o=>{o.addEventListener("click",n)});function n(o){o.preventDefault();const s=o.target.innerHTML;for(const i of e)i.list_name;s==="All categories"&&document.querySelector(".category-books-item").dataset.category}}const y=document.querySelector(".js-hhome"),h=document.querySelector(".js-hshopping");y.addEventListener("click",O);h.addEventListener("click",j);function O(e){e.preventDefault(),y.classList.add("hhome-btn"),h.classList.remove("hshopping-btn")}function j(e){e.preventDefault(),y.classList.remove("hhome-btn"),h.classList.add("hshopping-btn")}M();T();
//# sourceMappingURL=commonHelpers.js.map
