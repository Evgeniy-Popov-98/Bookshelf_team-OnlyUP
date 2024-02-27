import{g as f}from"./assets/NZheader-437011d9.js";import{i as I}from"./assets/vendor-8cce9181.js";const b="TASKS_KEY";function A(e,a){localStorage.setItem(e,JSON.stringify(a))}function M(e){return JSON.parse(localStorage.getItem(e))}function D(e){if(e.target.nodeName!=="BUTTON")return;const a=e.target.getAttribute("id");let n=[];const o=M(b);for(const l of o)l.constID!==a&&n.push(l);A(b,n)}const T=document.querySelector("body"),k=document.querySelector(".modal"),h=document.querySelector(".backdrop"),C=document.querySelector(".modal-close-btn"),d=document.querySelector(".modal-list-btn-add"),u=document.querySelector(".modal-list-btn-remove");let w;async function _(e){u.setAttribute("id",`${e}`),w=e,document.addEventListener("keydown",B);const a=await f(w);H(a);try{const n=M(b);console.log(n);for(const o of n)console.log(o),o.constID===e&&(console.log(!0),d.style.display="none",u.style.display="flex")}catch{}d.addEventListener("click",L),u.addEventListener("click",S)}function H(e){var l,r;h.style.display="flex",T.style.overflow="hidden";const a=((l=e.buy_links.find(i=>i.name==="Amazon"))==null?void 0:l.url)||"",n=((r=e.buy_links.find(i=>i.name==="Apple Books"))==null?void 0:r.url)||"",o=`
  <ul class="buy-links-list">
    <li>
      <img src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${a}">
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
      <p class="description">${e.description}</p>
      ${o}
    </div>  
  </div>
`,k.appendChild(C),k.appendChild(d),k.appendChild(u),k.querySelectorAll(".platform-image").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.url;t?window.open(t,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){C.addEventListener("click",function(){$()}),h.addEventListener("click",function(e){e.target===h&&$()})});function B(e){e.key==="Escape"&&($(),document.removeEventListener("keydown",B))}function $(){d.removeEventListener("click",L),d.removeEventListener("click",S),h.style.display="none",T.style.overflow="auto",d.style.display="flex",u.style.display="none"}function L(){const e=M(b)||[];e.push({constID:w}),A(b,e),d.style.display="none",u.style.display="flex",d.removeEventListener("click",L),u.addEventListener("click",S)}function S(e){D(e),d.style.display="flex",u.style.display="none",d.removeEventListener("click",S),d.addEventListener("click",L)}const x="category";async function j(e){const a=document.querySelector(".js-booksgallery");a.innerHTML="";try{const o=await f(x,e);N(o),O(e)}catch(o){console.error("Failed to fetch books:",o)}document.querySelectorAll(".cat-book-image-overlay").forEach(o=>{o.addEventListener("click",l=>{const r=l.target.closest(".booksgallery-item");if(r){const i=r.dataset.id;_(i)}})})}function N(e){const a=document.querySelector(".booksgallery"),n=e.map(o=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${o._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${o.book_image}" alt="${o.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${o.title}</h3>
          <p class="author-book">${o.author}</p>
      </li>`).join("");a.insertAdjacentHTML("beforeend",n)}function O(e){const a=document.querySelector(".selected-title"),n=e.split(" "),o=n[n.length-1];n.pop(),a.innerHTML=`${n.join(" ")} <span class="selected-color">${o} </span>`}const q={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const a=await f("category-list");let n='<li data-category="top-books" class="category-books-item">All categories</li>';a.forEach(r=>{n+=`<li class="category-books-item" data-category="${r.list_name}">${r.list_name}</li>`}),q.allListCategories.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".category-books-item").forEach(r=>{r.addEventListener("click",l)});function l(r){r.preventDefault();const i=document.querySelector(".js-home-pg"),t=document.querySelector(".js-selected-page"),s=r.target.innerHTML;for(const m of a)m.list_name===s&&(i.style.display="none",t.style.display="block",j(s));s==="All categories"&&(i.style.display="block",t.style.display="none")}}e()});function v(e){I.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",()=>{let e=window.innerWidth;window.addEventListener("resize",async()=>{const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{const s=await f("top-books");q.galleryBooks.innerHTML="";for(const m of s)n(m),m.books.length>=1?r(m):v("Sorry, there are no items in this category")}catch(s){v(`Failed to render books:${s}`)}e=t});async function a(){try{let y=function(c){const p=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),E=c.srcElement.dataset.id;p.style.display="none",g.style.display="block",j(E)};const t=await f("top-books");for(const c of t)n(c),c.books.length>=1?r(c):v("Sorry, there are no items in this category");document.querySelectorAll(".book-image-overlay").forEach(c=>{c.addEventListener("click",p=>{const g=p.target.closest(".card");if(g){const E=g.dataset.id;_(E)}})}),document.querySelectorAll(".btn-more").forEach(c=>{c.addEventListener("click",y)})}catch(t){v(`Failed to render books:${t}`)}}function n(t){const s=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;q.galleryBooks.insertAdjacentHTML("beforeend",s)}function o(t){const{book_image:s,author:m,title:y,_id:c,contributor:p,list_name:g}=t;if(g)return`
    <li class="card book-item book-hover" data-id="${c}">
       <div class="wrapper-overlay">
        <img class="book-img" src="${s}" alt="${p} ${y}">
        <div class="book-image-overlay" aria-label="${y}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${y}</h3>
    <p class="author">${m}</p>
    </li>
    `}function l(t){return t.map(o).join("")}function r(t){const s=i(t),m=t.list_name;document.getElementById(m).querySelector(".list-book").insertAdjacentHTML("afterbegin",s)}function i(t){let s;return window.innerWidth>=768&&window.innerWidth<=1439?s=l(t.books.slice(0,3)):window.innerWidth>=1440?s=l(t.books):s=l(t.books.slice(0,1)),s}a()});
//# sourceMappingURL=commonHelpers.js.map
