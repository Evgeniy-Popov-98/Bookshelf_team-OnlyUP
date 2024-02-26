import{a as $,i as q}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();async function h(e,t){const n="https://books-backend.p.goit.global/books/",i=`${e}`;let o;t&&(o={category:`${t}`});const s=`${n}${i}`,r=await $.get(s,{params:o});if(r.data.length===0)throw new Error("Error");return r.data}const L=document.querySelector("body"),d=document.querySelector(".modal"),u=document.querySelector(".backdrop"),w=document.querySelector(".modal-close-btn"),l=document.querySelector(".modal-list-btn");async function M(e){document.addEventListener("keydown",v);const t=await h(e);T(t)}function T(e){var o,s;u.style.display="flex",L.style.overflow="hidden";const t=((o=e.buy_links.find(r=>r.name==="Amazon"))==null?void 0:o.url)||"",n=((s=e.buy_links.find(r=>r.name==="Apple Books"))==null?void 0:s.url)||"",i=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${t}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${n}">
    </li>
  </ul>
`;d.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${i}
    </div>  
  </div>
`,d.appendChild(w),d.appendChild(l),d.querySelectorAll(".platform-image").forEach(r=>{r.addEventListener("click",()=>{const b=r.dataset.url;b?window.open(b,"_blank"):console.error("Platform URL not found.")})})}function _(){const e=l.textContent.trim(),t=localStorage.getItem("shoppingList"),n=JSON.parse(t)||{};e==="add to shopping list"?(n[bookId]=!0,l.textContent="remove from the shopping list"):(n[bookId]&&delete n[bookId],l.textContent="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(n))}l.addEventListener("click",function(){_(),l.blur()});document.addEventListener("DOMContentLoaded",function(){w.addEventListener("click",function(){f()}),u.addEventListener("click",function(e){e.target===u&&f()})});function v(e){e.key==="Escape"&&(f(),document.removeEventListener("keydown",v))}function f(){u.style.display="none",L.style.overflow="auto"}const k=document.querySelector(".switch-box"),a=document.querySelector(".switch-button");a.addEventListener("click",e=>{a.dataset.switch==="true"?(a.classList.remove("new-position"),k.classList.remove("new-background"),a.dataset.switch="false"):(a.classList.add("new-position"),k.classList.add("new-background"),a.dataset.switch="true")});const S={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title")};function m(e){q.error({title:"Error",message:e})}let c=window.innerWidth;window.addEventListener("resize",async()=>{const e=window.innerWidth;if(c>768||c<768&&e>=768||c>=768&&e<=1440&&(c<=768||e>=1439))try{const t=await h("top-books");S.galleryBooks.innerHTML="";for(const n of t)B(n),n.books.length>=1?E(n):m("Sorry, there are no items in this category")}catch(t){m(`Failed to render books:${t}`)}c=e});async function C(e){try{const t=await h("top-books");for(const i of t)B(i),i.books.length>=1?E(i):m("Sorry, there are no items in this category");const n=document.querySelectorAll(".card");document.addEventListener("click",i=>{for(const o of n){let s=o.dataset.id;i.target.parentNode===o&&M(s)}})}catch(t){m(`Failed to render books:${t}`)}}function B(e){const t=`<li id="${e.list_name}" class="list-category-books">
    <h2 class="list-category-title">${e.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;S.galleryBooks.insertAdjacentHTML("beforeend",t)}function A(e){const{book_image:t,author:n,title:i,_id:o,contributor:s,list_name:r}=e;if(r)return`
    <li class="card book-item" data-id="${o}">
    <img class="book-img" src="${t}" alt="${s} ${i}">
    <h3 class="title-book">${i}</h3>
    <p class="author">${n}</p>
    </li>
   `}function p(e){return e.map(A).join("")}function E(e){const t=O(e),n=e.list_name;document.getElementById(n).querySelector(".list-book").insertAdjacentHTML("afterbegin",t)}function O(e){let t;return window.innerWidth>=768&&window.innerWidth<=1439?t=p(e.books.slice(0,3)):window.innerWidth>=1440?t=p(e.books):t=p(e.books.slice(0,1)),t}const g=document.querySelector(".js-hhome"),y=document.querySelector(".js-hshopping");g.addEventListener("click",I);y.addEventListener("click",x);function I(e){e.preventDefault(),g.classList.add("hhome-btn"),y.classList.remove("hshopping-btn")}function x(e){e.preventDefault(),g.classList.remove("hhome-btn"),y.classList.add("hshopping-btn")}C();
//# sourceMappingURL=commonHelpers.js.map
