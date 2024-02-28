import{i as r,a as p,T as n,g as d}from"./assets/switch-button-5d4f229b.js";import"./assets/vendor-f87d3a68.js";const m="/JS-new_teamProject/assets/IMG_9606-a8e7c57b.png",h="/JS-new_teamProject/assets/amazon-2651c11a.svg",u="/JS-new_teamProject/assets/book-5e54f05d.svg",k="/JS-new_teamProject/assets/trash-121ef440.svg",e=document.querySelector(".shoppinglist-container"),l=`
    <div class="shoppinglist-blocks">
        <h2 class="text">This page is empty, add some books and proceed to order.</h2>
        <img src="${m}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;async function S(){try{const t=r(n);if(!t||!t.length){e.innerHTML=l;return}let s="";for(const o of t){const a=await d(o.constID);s+=f(a,o)}e.innerHTML=s}catch(t){console.error("Error fetching book data:",t)}}function f(t,s){return`
    <div class="container-block" id="${s.constID}">
        <div class="btn-and-links">
            <button class="trash-btn"><img src="${k}" alt=""></button>
            <ul class="links">
                <li><img src="${h}" class="amazon"></li>
                <li><img src="${u}"></li>
            </ul>
        </div>
        <img src="${t.book_image}" alt="${t.title}" class="book-image">
        <div class="text-area">
            <h2 class="shopping-list-title">${t.title}</h2>
            <h2 class="shopping-list-title-name">${t.list_name}</h2>
            <p class="shopping-list-description">${t.description}</p>
            <h2 class="shopping-list-author">${t.author}</h2>
        </div>
    </div>
  `}e.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const o=s.closest(".container-block"),a=o.getAttribute("id");let i=[];const g=r(n);for(const c of g)c.constID!==a&&i.push(c);p(n,i),o.remove(),e.querySelector(".container-block")||(e.innerHTML=l)}});S();
//# sourceMappingURL=commonHelpers2.js.map
