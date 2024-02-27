import{g}from"./assets/NZheader-f18f011e.js";import{i as v}from"./assets/vendor-8cce9181.js";const S=document.querySelector("body"),f=document.querySelector(".modal"),b=document.querySelector(".backdrop"),$=document.querySelector(".modal-close-btn"),u=document.querySelector(".modal-list-btn");async function w(e){document.addEventListener("keydown",M);const a=await g(e);C(a),u.addEventListener("click",function(){T(e),u.blur()})}function C(e){var l,r;b.style.display="flex",S.style.overflow="hidden";const a=((l=e.buy_links.find(i=>i.name==="Amazon"))==null?void 0:l.url)||"",s=((r=e.buy_links.find(i=>i.name==="Apple Books"))==null?void 0:r.url)||"",o=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${a}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${s}">
    </li>
  </ul>
`;f.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${o}
    </div>  
  </div>
`,f.appendChild($),f.appendChild(u),f.querySelectorAll(".platform-image").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}function T(e){const a=u.textContent.trim(),s=localStorage.getItem("shoppingList"),o=JSON.parse(s)||{};a==="add to shopping list"?(o[e]=!0,u.textContent="remove from the shopping list"):(o[e]&&delete o[e],u.textContent="add to shopping list"),localStorage.setItem("shoppingList",JSON.stringify(o))}document.addEventListener("DOMContentLoaded",function(){$.addEventListener("click",function(){h()}),b.addEventListener("click",function(e){e.target===b&&h()})});function M(e){e.key==="Escape"&&(h(),document.removeEventListener("keydown",M))}function h(){b.style.display="none",S.style.overflow="auto"}const _="category";async function E(e){const a=document.querySelector(".js-booksgallery");a.innerHTML="";try{const o=await g(_,e);A(o),B(e)}catch(o){console.error("Failed to fetch books:",o)}const s=document.querySelectorAll(".cardCategory");document.addEventListener("click",o=>{for(const l of s){let r=l.dataset.id;o.target.parentNode===l&&w(r)}})}function A(e){const a=document.querySelector(".booksgallery"),s=e.map(o=>`
      <li class="booksgallery-item cardCategory" data-id="${o._id}">
          <img class="gallery-image" src="${o.book_image}" alt="${o.description}">
          <h3 class="name-book">${o.title}</h3>
          <p class="author-book">${o.author}</p>
      </li>`).join("");a.insertAdjacentHTML("beforeend",s)}function B(e){const a=document.querySelector(".selected-title"),s=e.split(" "),o=s[s.length-1];s.pop(),a.innerHTML=`${s.join(" ")} <span class="selected-color">${o} </span>`}const L={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const a=await g("category-list");let s='<li data-category="top-books" class="category-books-item">All categories</li>';a.forEach(r=>{s+=`<li class="category-books-item" data-category="${r.list_name}">${r.list_name}</li>`}),L.allListCategories.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".category-books-item").forEach(r=>{r.addEventListener("click",l)});function l(r){r.preventDefault();const i=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),n=r.target.innerHTML;for(const d of a)d.list_name===n&&(i.style.display="none",t.style.display="block",E(n));n==="All categories"&&(i.style.display="block",t.style.display="none")}}e()});function k(e){v.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const n=await g("top-books");L.galleryBooks.innerHTML="";for(const d of n)s(d),d.books.length>=1?r(d):k("Sorry, there are no items in this category")}catch(n){k(`Failed to render books:${n}`)}e=t});async function a(){try{let y=function(c){const m=document.querySelector(".js-home-pg"),p=document.querySelector(".js-selected-page"),q=c.srcElement.dataset.id;m.style.display="none",p.style.display="block",E(q)};const t=await g("top-books");for(const c of t)s(c),c.books.length>=1?r(c):k("Sorry, there are no items in this category");const n=document.querySelectorAll(".card");document.addEventListener("click",c=>{for(const m of n){let p=m.dataset.id;c.target.parentNode===m&&w(p)}}),document.querySelectorAll(".btn-more").forEach(c=>{c.addEventListener("click",y)})}catch(t){k(`Failed to render books:${t}`)}}function s(t){const n=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;L.galleryBooks.insertAdjacentHTML("beforeend",n)}function o(t){const{book_image:n,author:d,title:y,_id:c,contributor:m,list_name:p}=t;if(p)return`
    <li class="card book-item" data-id="${c}">
    <img class="book-img" src="${n}" alt="${m} ${y}">
    <h3 class="title-book">${y}</h3>
    <p class="author">${d}</p>
    </li>
   `}function l(t){return t.map(o).join("")}function r(t){const n=i(t),d=t.list_name;document.getElementById(d).querySelector(".list-book").insertAdjacentHTML("afterbegin",n)}function i(t){let n;return window.innerWidth>=768&&window.innerWidth<=1439?n=l(t.books.slice(0,3)):window.innerWidth>=1440?n=l(t.books):n=l(t.books.slice(0,1)),n}a()});
//# sourceMappingURL=commonHelpers.js.map
