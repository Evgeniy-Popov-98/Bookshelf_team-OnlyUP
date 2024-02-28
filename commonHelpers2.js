import{i as c,a as g,T as n,g as h}from"./assets/switch-button-43392486.js";import"./assets/vendor-f87d3a68.js";const d="/JS-new_teamProject/assets/IMG_9606-a8e7c57b.png",m="/JS-new_teamProject/assets/amazon-2651c11a.svg",u="/JS-new_teamProject/assets/book-5e54f05d.svg",f="/JS-new_teamProject/assets/trash-121ef440.svg",o=document.querySelector(".shoppinglist-shoppinglist");function S(){const t=o.querySelector(".shoppinglist-text");if(t)return t;const s=document.createElement("h1");return s.classList.add("shoppinglist-text"),s.innerHTML=`
        <span class="shoppinglist-text1">Shopping</span>
        List
    `,s}o.appendChild(S());const l=`
<h1 class="shoppinglist-text">Shopping
	<span class="shoppinglist-text1">List</span>
</h1>
<div class="shoppinglist-blocks">
    <h2 class="text">This page is empty, add some books and proceed to order.</h2>
    <img src="${d}" alt="Shopping Image" class="shoppinglist-img96061">
</div>
`;async function k(){try{const t=c(n);if(!t||!t.length){o.innerHTML=l;return}let s="";for(const e of t){const i=await h(e.constID);s+=b(i,e)}o.innerHTML+=s}catch(t){console.error("Error fetching book data:",t)}}function b(t,s){const e=t.description?t.description:"With our diverse range of titles, you're sure to find the perfect companion for cozy nights in. Treat yourself to the joy of reading and explore the endless possibilities that await within the pages of our books.";return console.log(e),`
<div class="container-block" id="${s.constID}">    
    <img src="${t.book_image}" alt="${t.title}" class="book-image">
    <div class="text-area">
        <h2 class="shopping-list-title">${t.title}</h2>
        <h2 class="shopping-list-title-name">${t.list_name}</h2>
        <p class="shopping-list-description">${e}</p>
        <h2 class="shopping-list-author">${t.author}</h2>
    </div>
        <button class="trash-btn"><img src="${f}" alt=""></button>
        <ul class="links">
            <li><img src="${m}" class="amazon"></li>
            <li><img src="${u}" class="apple-book"></li>
        </ul>
</div>
  `}o.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const e=s.closest(".container-block"),i=e.getAttribute("id");let a=[];const p=c(n);for(const r of p)r.constID!==i&&a.push(r);g(n,a),e.remove(),o.querySelector(".container-block")||(o.innerHTML=l)}});k();
//# sourceMappingURL=commonHelpers2.js.map
