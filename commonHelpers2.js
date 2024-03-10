import{i as l,a as h,c as g,T as n,g as d}from"./assets/form-authorization-de6f1548.js";import"./assets/vendor-8cce9181.js";import"https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";import"https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";import"https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";const m="/Bookshelf_team-OnlyUP/assets/IMG_9606-a8e7c57b.png",u="/Bookshelf_team-OnlyUP/assets/amazon-2651c11a.svg",f="/Bookshelf_team-OnlyUP/assets/book-5e54f05d.svg",k="/Bookshelf_team-OnlyUP/assets/trash-121ef440.svg",o=document.querySelector(".shoppinglist-shoppinglist");function y(){const t=o.querySelector(".shoppinglist-text");if(t)return t;const s=document.createElement("h1");return s.classList.add("shoppinglist-text"),s.innerHTML=`
        <span class="shoppinglist-text1">Shopping</span>
        List
    `,s}o.appendChild(y());const c=`
<h1 class="shoppinglist-text">Shopping
	<span class="shoppinglist-text1">List</span>
</h1>
<div class="shoppinglist-blocks">
    <h2 class="text">This page is empty, add some books and proceed to order.</h2>
    <img src="${m}" alt="Shopping Image" class="shoppinglist-img96061">
</div>
`;async function b(){try{const t=l(n);if(!t||!t.length){o.innerHTML=c;return}let s="";for(const e of t){const i=await d(e.constID);s+=S(i,e)}o.innerHTML+=s}catch(t){console.error("Error fetching book data:",t)}}function S(t,s){const e=document.querySelector(".loader-shopping");e.style.display="none";const i=t.description?t.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";return`
<div class="container-block" id="${s.constID}">    
    <img src="${t.book_image}" alt="${t.title}" class="book-image">
    <div class="text-area">
        <h2 class="shopping-list-title">${t.title}</h2>
        <h2 class="shopping-list-title-name">${t.list_name}</h2>
        <p class="shopping-list-description">${i}</p>
        <h2 class="shopping-list-author">${t.author}</h2>
    </div>
        <button class="trash-btn"><img src="${k}" alt=""></button>
        <ul class="links">
            <li><a target="_blank" href="${t.buy_links[0].url}"><img src="${u}" class="amazon"></a></li>
            <li><a target="_blank" href="${t.buy_links[1].url}"><img src="${f}"  class="apple-book"></a></li>
        </ul>
</div>
  `}o.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const e=s.closest(".container-block"),i=e.getAttribute("id");let a=[];const p=l(n);for(const r of p)r.constID!==i&&a.push(r);h(n,a),e.remove(),g(),o.querySelector(".container-block")||(o.innerHTML=c)}});b();
//# sourceMappingURL=commonHelpers2.js.map
