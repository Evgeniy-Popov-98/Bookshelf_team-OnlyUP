import{i as M,a as I,r as z,g as v,T}from"./assets/switch-button-256850b9.js";import{i as O}from"./assets/vendor-f87d3a68.js";const C=document.querySelector("body"),a=document.querySelector(".modal"),f=document.querySelector(".backdrop"),x=document.querySelector(".modal-close-btn"),r=document.querySelector(".modal-list-btn-add"),d=document.querySelector(".modal-list-btn-remove"),b=document.querySelector(".modal-list-container");let q;async function _(e){d.setAttribute("id",`${e}`),q=e,document.addEventListener("keydown",A);const s=await v(q);R(s);try{const i=M(T);for(const n of i)n.constID===e&&(r.style.display="none",d.style.display="flex",b.innerText="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",window.innerWidth<=768?a.style.height="806px":a.style.height="501px")}catch{}r.addEventListener("click",L),d.addEventListener("click",w)}function R(e){var l,m;f.style.display="flex",C.style.overflow="hidden";const s=((l=e.buy_links.find(c=>c.name==="Amazon"))==null?void 0:l.url)||"",i=((m=e.buy_links.find(c=>c.name==="Apple Books"))==null?void 0:m.url)||"",n=e.description?e.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.",p=`
  <ul class="buy-links-list">
    <li>
      <img class="img-amazon" src="./images/amazon.png" alt="Amazon" class="platform-image" data-url="${s}">
    </li>
    <li>
      <img class="img-apple" src="./images/book.png" alt="Apple Books" class="platform-image" data-url="${i}">
    </li>
  </ul>
`;a.innerHTML=`
  <div class="modal-container">
  <img src="${e.book_image}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${e.title}</h2>
      <p class="modal-author">${e.author}</p>
      <p class="description-modal">${n}</p>
      ${p}
    </div>  
  </div>
`,a.appendChild(x),a.appendChild(r),a.appendChild(d),a.appendChild(b),a.querySelectorAll(".platform-image").forEach(c=>{c.addEventListener("click",()=>{const y=c.dataset.url;y?window.open(y,"_blank"):console.error("Platform URL not found.")})})}document.addEventListener("DOMContentLoaded",function(){x.addEventListener("click",function(){$()}),f.addEventListener("click",function(e){e.target===f&&$()})});r.addEventListener("click",function(){b.innerText="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",window.innerWidth<=768?a.style.height="806px":a.style.height="501px",r.removeEventListener("click",this)});d.addEventListener("click",function(){b.innerText="",window.innerWidth<=768?a.style.height="762px":a.style.height="465px",d.removeEventListener("click",this)});function A(e){e.key==="Escape"&&($(),document.removeEventListener("keydown",A))}function $(){a.classList.add("closing"),setTimeout(function(){f.style.display="none",a.classList.remove("closing")},500),r.removeEventListener("click",L),r.removeEventListener("click",w),C.style.overflow="auto",r.style.display="flex",d.style.display="none"}function L(){const e=M(T)||[];e.push({constID:q}),I(T,e),r.style.display="none",d.style.display="flex",r.removeEventListener("click",L),d.addEventListener("click",w)}function w(e){z(e),r.style.display="flex",d.style.display="none",r.removeEventListener("click",w),r.addEventListener("click",L)}const Y="category";async function B(e){const s=document.querySelector(".js-booksgallery");s.innerHTML="";try{const n=await v(Y,e);U(n),F(e)}catch(n){console.error("Failed to fetch books:",n)}document.querySelectorAll(".cat-book-image-overlay").forEach(n=>{n.addEventListener("click",p=>{const l=p.target.closest(".booksgallery-item");if(l){const m=l.dataset.id;_(m)}})})}function U(e){const s=document.querySelector(".booksgallery"),i=e.map(n=>`
      <li class="booksgallery-item cardCategory book-hover" data-id="${n._id}">
	  <div class="wrapper-overlay">
          <img class="gallery-image" src="${n.book_image}" alt="${n.description}">          
			<div class="cat-book-image-overlay">
				<p class="book-image-overlay-text quick-view-trigger">Quick view</p>
			</div>
		</div>
		<h3 class="name-book">${n.title}</h3>
          <p class="author-book">${n.author}</p>
      </li>`).join("");s.insertAdjacentHTML("beforeend",i)}function F(e){const s=document.querySelector(".selected-title"),i=e.split(" "),n=i[i.length-1];i.pop(),s.innerHTML=`${i.join(" ")} <span class="selected-color">${n} </span>`}const h={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title"),allListCategories:document.querySelector(".js-books-categories"),categoryItems:document.querySelectorAll(".category-books-item"),scrollTop:document.getElementById("scrollTop")};document.addEventListener("DOMContentLoaded",()=>{async function e(){const s=await v("category-list");let i='<li data-category="top-books" class="category-books-item">All categories</li>';s.forEach(l=>{i+=`<li class="category-books-item" data-category="${l.list_name}">${l.list_name}</li>`}),h.allListCategories.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".category-books-item").forEach(l=>{l.addEventListener("click",p)});function p(l){l.preventDefault();const m=document.querySelector(".js-home-pg"),c=document.querySelector(".js-selected-page"),y=l.target.innerHTML;for(const k of s)k.list_name===y&&(m.style.display="none",c.style.display="block",B(y));y==="All categories"&&(m.style.display="block",c.style.display="none")}}e()});function E(e){O.error({title:"Error",message:e})}document.addEventListener("DOMContentLoaded",async()=>{let e=window.innerWidth;const s=await v("top-books");window.addEventListener("resize",i);async function i(){const t=window.innerWidth;if(e>768||e<768&&t>=768||e>=768&&t<=1440&&(e<=768||t>=1439))try{n(s)}catch(o){E(`Failed to render books:${o}`)}e=t}async function n(t){try{h.galleryBooks.innerHTML="";for(const o of t)c(o),o.books.length>=1?j(o):E("Sorry, there are no items in this category");p()}catch(o){E(`Failed to render books:${o}`)}}function p(){document.querySelectorAll(".book-image-overlay").forEach(o=>{o.addEventListener("click",g=>{const u=g.target.closest(".card");if(u){const S=u.dataset.id;_(S)}})})}document.querySelectorAll(".btn-more").forEach(t=>{t.addEventListener("click",m)});function m(t){const o=document.querySelector(".js-home-pg"),g=document.querySelector(".js-selected-page"),u=t.srcElement.dataset.id;o.style.display="none",g.style.display="block",B(u)}function c(t){const o=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>
    <button type="button" class="btn-more" data-id="${t.list_name}">See more</button>`;h.galleryBooks.insertAdjacentHTML("beforeend",o)}function y(t){const{book_image:o,author:g,title:u,_id:S,contributor:W,list_name:H}=t;if(H)return`
    <li class="card book-item book-hover" data-id="${S}">
       <div class="wrapper-overlay">
        <img class="book-img-home" src="${o}" alt="${W} ${u}">
        <div class="book-image-overlay" aria-label="${u}">
            <p class="book-image-overlay-text quick-view-trigger">Quick view</p>
        </div>
       </div>
    <h3 class="title-book">${u}</h3>
    <p class="author">${g}</p>
    </li>
    `}function k(t){return t.map(y).join("")}function j(t){const o=D(t),g=t.list_name;document.getElementById(g).querySelector(".list-book").insertAdjacentHTML("afterbegin",o)}function D(t){let o;return window.innerWidth>=768&&window.innerWidth<=1439?o=k(t.books.slice(0,3)):window.innerWidth>=1440?o=k(t.books):o=k(t.books.slice(0,1)),o}n(s)});window.onscroll=()=>{window.scrollY>400?h.scrollTop.classList.remove("isShowScroll_hide"):window.scrollY<400&&h.scrollTop.classList.add("isShowScroll_hide")};h.scrollTop.addEventListener("click",()=>window.scrollTo(0,0));document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-hhome a"),s=document.querySelector(".hshopping-link");window.location.pathname==="/index.html"||window.location.pathname==="/"?(e.classList.add("active"),s.classList.remove("active")):(s.classList.add("active"),e.classList.remove("active"))});
//# sourceMappingURL=commonHelpers.js.map
