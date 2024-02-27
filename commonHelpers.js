import{g as k}from"./assets/NZheader-f18f011e.js";import{i as I}from"./assets/vendor-8cce9181.js";const b="TASKS_KEY";function q(e,r){localStorage.setItem(e,JSON.stringify(r))}function M(e){return JSON.parse(localStorage.getItem(e))}function D(e){if(e.target.nodeName!=="BUTTON")return;const r=e.target.getAttribute("id");let o=[];const n=M(b);for(const l of n)l.constID!==r&&o.push(l);q(b,o)}const A=document.querySelector("body"),f=document.querySelector(".modal"),L=document.querySelector(".backdrop"),C=document.querySelector(".modal-close-btn"),d=document.querySelector(".modal-list-btn-add"),u=document.querySelector(".modal-list-btn-remove");let E;async function T(e){u.setAttribute("id",`${e}`),E=e,document.addEventListener("keydown",_);const r=await k(E);H(r);try{const o=M(b);console.log(o);for(const n of o)console.log(n),n.constID===e&&(console.log(!0),d.style.display="none",u.style.display="flex")}catch{}d.addEventListener("click",S),u.addEventListener("click",v)}function H(e){var l,a;L.style.display="flex",A.style.overflow="hidden";const r=((l=e.buy_links.find(i=>i.name==="Amazon"))==null?void 0:l.url)||"",o=((a=e.buy_links.find(i=>i.name==="Apple Books"))==null?void 0:a.url)||"",n=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${r}">
    </li>
    <li>
      <img src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${o}">
    </li>
  </ul>
`;f.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description">${e.description}</p>
      ${n}
    </div>  
  </div>
`,f.appendChild(C),f.appendChild(d),f.appendChild(u),f.querySelectorAll(".platform-image").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){C.addEventListener("click",function(){$()}),L.addEventListener("click",function(e){e.target===L&&$()})});function _(e){e.key==="Escape"&&($(),document.removeEventListener("keydown",_))}function $(){d.removeEventListener("click",S),d.removeEventListener("click",v),L.style.display="none",A.style.overflow="auto",d.style.display="flex",u.style.display="none"}function S(){const e=M(b)||[];e.push({constID:E}),q(b,e),d.style.display="none",u.style.display="flex",d.removeEventListener("click",S),u.addEventListener("click",v)}function v(e){D(e),d.style.display="flex",u.style.display="none",d.removeEventListener("click",v),d.addEventListener("click",S)}const N="category";async function B(e){const r=document.querySelector(".js-booksgallery");r.innerHTML="";try{const n=await k(N,e);O(n),W(e)}catch(n){console.error("Failed to fetch books:",n)}const o=document.querySelectorAll(".cardCategory");document.addEventListener("click",n=>{for(const l of o){let a=l.dataset.id;n.target.parentNode===l&&T(a)}})}function O(e){const r=document.querySelector(".booksgallery"),o=e.map(n=>`
      <li class="booksgallery-item cardCategory" data-id="${n._id}">
          <img class="gallery-image" src="${n.book_image}" alt="${n.description}">
          <h3 class="name-book">${n.title}</h3>
          <p class="author-book">${n.author}</p>
      </li>`).join("");r.insertAdjacentHTML("beforeend",o)}function W(e){const r=document.querySelector(".selected-title"),o=e.split(" "),n=o[o.length-1];o.pop(),r.innerHTML=`${o.join(" ")} <span class="selected-color">${n} </span>`}const w={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const r=await k("category-list");let o='<li data-category="top-books" class="category-books-item">All categories</li>';r.forEach(a=>{o+=`<li class="category-books-item" data-category="${a.list_name}">${a.list_name}</li>`}),w.allListCategories.insertAdjacentHTML("beforeend",o),document.querySelectorAll(".category-books-item").forEach(a=>{a.addEventListener("click",l)});function l(a){a.preventDefault();const i=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),s=a.target.innerHTML;for(const m of r)m.list_name===s&&(i.style.display="none",t.style.display="block",B(s));s==="All categories"&&(i.style.display="block",t.style.display="none")}}e()});function h(e){I.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const s=await k("top-books");w.galleryBooks.innerHTML="";for(const m of s)o(m),m.books.length>=1?a(m):h("Sorry, there are no items in this category")}catch(s){h(`Failed to render books:${s}`)}e=t});async function r(){try{let p=function(c){const y=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),j=c.srcElement.dataset.id;y.style.display="none",g.style.display="block",B(j)};const t=await k("top-books");for(const c of t)o(c),c.books.length>=1?a(c):h("Sorry, there are no items in this category");const s=document.querySelectorAll(".card");document.addEventListener("click",c=>{for(const y of s){let g=y.dataset.id;c.target.parentNode===y&&T(g)}}),document.querySelectorAll(".btn-more").forEach(c=>{c.addEventListener("click",p)})}catch(t){h(`Failed to render books:${t}`)}}function o(t){const s=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;w.galleryBooks.insertAdjacentHTML("beforeend",s)}function n(t){const{book_image:s,author:m,title:p,_id:c,contributor:y,list_name:g}=t;if(g)return`
    <li class="card book-item" data-id="${c}">
    <img class="book-img" src="${s}" alt="${y} ${p}">
    <h3 class="title-book">${p}</h3>
    <p class="author">${m}</p>
    </li>
   `}function l(t){return t.map(n).join("")}function a(t){const s=i(t),m=t.list_name;document.getElementById(m).querySelector(".list-book").insertAdjacentHTML("afterbegin",s)}function i(t){let s;return window.innerWidth>=768&&window.innerWidth<=1439?s=l(t.books.slice(0,3)):window.innerWidth>=1440?s=l(t.books):s=l(t.books.slice(0,1)),s}r()});
//# sourceMappingURL=commonHelpers.js.map
