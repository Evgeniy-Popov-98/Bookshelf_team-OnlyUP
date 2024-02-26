import{a as T,i as _}from"./assets/vendor-8cce9181.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();async function f(e,r){const s="https://books-backend.p.goit.global/books/",i=`${e}`;let o;r&&(o={category:`${r}`});const n=`${s}${i}`,c=await T.get(n,{params:o});if(c.data.length===0)throw new Error("Error");return c.data}const A="category";async function $(e){const r=document.querySelector(".js-booksgallery");r.innerHTML="";try{const s=await f(A,e);j(s),O(e)}catch(s){console.error("Failed to fetch books:",s)}}function j(e){const r=document.querySelector(".booksgallery"),s=e.map(i=>`
      <li class="booksgallery-item" id="book-${i._id}">
        <div class="container-item">
          <img class="gallery-image" src="${i.book_image}" alt="${i.description}">
          <h3 class="name-book">${i.title}</h3>
          <p class="author-book">${i.author}</p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",s)}function O(e){const r=document.querySelector(".selected-title"),s=e.split(" "),i=s[s.length-1];s.pop(),r.innerHTML=`${s.join(" ")} <span class="selected-color">${i} </span>`}const L={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const r=await f("category-list");let s='<li data-category="top-books" class="category-books-item">All categories</li>';r.forEach(n=>{s+=`<li class="category-books-item" data-category="${n.list_name}">${n.list_name}</li>`}),L.allListCategories.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".category-books-item").forEach(n=>{n.addEventListener("click",o)});function o(n){n.preventDefault();const c=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),a=n.target.innerHTML;for(const d of r)d.list_name===a&&(c.style.display="none",t.style.display="block",$(a));a==="All categories"&&(c.style.display="block",t.style.display="none")}}e()});function h(e){_.error({title:"Error",message:e})}const q=document.querySelector("body"),k=document.querySelector(".modal"),b=document.querySelector(".backdrop"),M=document.querySelector(".modal-close-btn"),p=document.querySelector(".modal-list-btn");async function H(e){document.addEventListener("keydown",C);const r=await f(e);N(r),p.addEventListener("click",function(){D(e),p.blur()})}function N(e){var o,n;b.style.display="flex",q.style.overflow="hidden";const r=((o=e.buy_links.find(c=>c.name==="Amazon"))==null?void 0:o.url)||"",s=((n=e.buy_links.find(c=>c.name==="Apple Books"))==null?void 0:n.url)||"",i=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${r}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${s}">
    </li>
  </ul>
`;k.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${i}
    </div>  
  </div>
`,k.appendChild(M),k.appendChild(p),k.querySelectorAll(".platform-image").forEach(c=>{c.addEventListener("click",()=>{const t=c.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}function D(e){const r=p.textContent.trim(),s=localStorage.getItem("shoppingList"),i=JSON.parse(s)||{};r==="add to shopping list"?(i[e]=!0,p.textContent="remove from the shopping list"):(i[e]&&delete i[e],p.textContent="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(i))}document.addEventListener("DOMContentLoaded",function(){M.addEventListener("click",function(){S()}),b.addEventListener("click",function(e){e.target===b&&S()})});function C(e){e.key==="Escape"&&(S(),document.removeEventListener("keydown",C))}function S(){b.style.display="none",q.style.overflow="auto"}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const a=await f("top-books");L.galleryBooks.innerHTML="";for(const d of a)s(d),d.books.length>=1?n(d):h("Sorry, there are no items in this category")}catch(a){h(`Failed to render books:${a}`)}e=t});async function r(){try{let y=function(l){const u=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),B=l.srcElement.dataset.id;u.style.display="none",g.style.display="block",$(B)};const t=await f("top-books");for(const l of t)s(l),l.books.length>=1?n(l):h("Sorry, there are no items in this category");const a=document.querySelectorAll(".card");document.addEventListener("click",l=>{for(const u of a){let g=u.dataset.id;l.target.parentNode===u&&H(g)}}),document.querySelectorAll(".btn-more").forEach(l=>{l.addEventListener("click",y)})}catch(t){h(`Failed to render books:${t}`)}}function s(t){const a=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;L.galleryBooks.insertAdjacentHTML("beforeend",a)}function i(t){const{book_image:a,author:d,title:y,_id:l,contributor:u,list_name:g}=t;if(g)return`
    <li class="card book-item" data-id="${l}">
    <img class="book-img" src="${a}" alt="${u} ${y}">
    <h3 class="title-book">${y}</h3>
    <p class="author">${d}</p>
    </li>
   `}function o(t){return t.map(i).join("")}function n(t){const a=c(t),d=t.list_name;document.getElementById(d).querySelector(".list-book").insertAdjacentHTML("afterbegin",a)}function c(t){let a;return window.innerWidth>=768&&window.innerWidth<=1439?a=o(t.books.slice(0,3)):window.innerWidth>=1440?a=o(t.books):a=o(t.books.slice(0,1)),a}r()});const E=document.querySelector(".switch-box"),m=document.querySelector(".switch-button");m.addEventListener("click",e=>{m.dataset.switch==="true"?(m.classList.remove("new-position"),E.classList.remove("new-background"),m.dataset.switch="false"):(m.classList.add("new-position"),E.classList.add("new-background"),m.dataset.switch="true")});const w=document.querySelector(".js-hhome"),v=document.querySelector(".js-hshopping");w.addEventListener("click",x);v.addEventListener("click",I);function x(e){e.preventDefault(),w.classList.add("hhome-btn"),v.classList.remove("hshopping-btn")}function I(e){e.preventDefault(),w.classList.remove("hhome-btn"),v.classList.add("hshopping-btn")}
//# sourceMappingURL=commonHelpers.js.map
