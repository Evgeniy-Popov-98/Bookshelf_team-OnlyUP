import{i as l,a as g,T as i,g as h}from"./assets/switch-button-43392486.js";import"./assets/vendor-f87d3a68.js";const d="/Bookshelf_team-OnlyUP/assets/IMG_9606-a8e7c57b.png",m="/Bookshelf_team-OnlyUP/assets/amazon-2651c11a.svg",u="/Bookshelf_team-OnlyUP/assets/book-5e54f05d.svg",f="/Bookshelf_team-OnlyUP/assets/trash-121ef440.svg",o=document.querySelector(".shoppinglist-shoppinglist");function k(){const t=o.querySelector(".shoppinglist-text");if(t)return t;const s=document.createElement("h1");return s.classList.add("shoppinglist-text"),s.innerHTML=`
        <span class="shoppinglist-text1">Shopping</span>
        List
    `,s}o.appendChild(k());const c=`
<h1 class="shoppinglist-text">Shopping
	<span class="shoppinglist-text1">List</span>
</h1>
<div class="shoppinglist-blocks">
    <h2 class="text">This page is empty, add some books and proceed to order.</h2>
    <img src="${d}" alt="Shopping Image" class="shoppinglist-img96061">
</div>
`;async function y(){try{const t=l(i);if(!t||!t.length){o.innerHTML=c;return}let s="";for(const e of t){const n=await h(e.constID);s+=b(n,e)}o.innerHTML+=s}catch(t){console.error("Error fetching book data:",t)}}function b(t,s){const e=document.querySelector(".loader-shopping");e.style.display="none";const n=t.description?t.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";return`
<div class="container-block" id="${s.constID}">    
    <img src="${t.book_image}" alt="${t.title}" class="book-image">
    <div class="text-area">
        <h2 class="shopping-list-title">${t.title}</h2>
        <h2 class="shopping-list-title-name">${t.list_name}</h2>
        <p class="shopping-list-description">${n}</p>
        <h2 class="shopping-list-author">${t.author}</h2>
    </div>
        <button class="trash-btn"><img src="${f}" alt=""></button>
        <ul class="links">
            <li><a target="_blank" href="${t.buy_links[0].url}"><img src="${m}" class="amazon"></a></li>
            <li><a target="_blank" href="${t.buy_links[1].url}"><img src="${u}"  class="apple-book"></a></li>
        </ul>
</div>
  `}o.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const e=s.closest(".container-block"),n=e.getAttribute("id");let a=[];const p=l(i);for(const r of p)r.constID!==n&&a.push(r);g(i,a),e.remove(),o.querySelector(".container-block")||(o.innerHTML=c)}});y();
//# sourceMappingURL=commonHelpers2.js.map
