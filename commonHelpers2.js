import{i as l,a as p,T as n,g as m}from"./assets/switch-button-256850b9.js";import"./assets/vendor-f87d3a68.js";const h="/JS-new_teamProject/assets/IMG_9606-a8e7c57b.png",u="/JS-new_teamProject/assets/amazon-2651c11a.svg",f="/JS-new_teamProject/assets/book-5e54f05d.svg",k="/JS-new_teamProject/assets/trash-121ef440.svg",r=document.querySelector(".header-styles");screen.width<1440?(console.log(screen.width),r.style.display="none"):r.style.display="flex";const o=document.querySelector(".shoppinglist-container"),d=`
    <div class="shoppinglist-blocks">
        <h2 class="text">This page is empty, add some books and proceed to order.</h2>
        <img src="${h}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;async function S(){try{const t=l(n);if(!t||!t.length){o.innerHTML=d;return}let s="";for(const e of t){const a=await m(e.constID);s+=b(a,e)}o.innerHTML=s}catch(t){console.error("Error fetching book data:",t)}}function b(t,s){return`
    <div class="container-block" id="${s.constID}">
        <div class="btn-and-links">
            <button class="trash-btn"><img src="${k}" alt=""></button>
            <ul class="links">
                <li><img src="${u}" class="amazon"></li>
                <li><img src="${f}"></li>
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
  `}o.addEventListener("click",function(t){const s=t.target;if(t.target.parentNode.nodeName==="BUTTON"||t.target.nodeName==="BUTTON"){const e=s.closest(".container-block"),a=e.getAttribute("id");let i=[];const g=l(n);for(const c of g)c.constID!==a&&i.push(c);p(n,i),e.remove(),o.querySelector(".container-block")||(o.innerHTML=d)}});S();
//# sourceMappingURL=commonHelpers2.js.map
