import{a as p}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function u(t,o){const r="https://books-backend.p.goit.global/books/",n=`${t}`;let e;o&&(e={category:`${o}`});const s=`${r}${n}`,i=await p.get(s,{params:e});if(i.data.length===0)throw new Error("Error");return i.data}const c="TASKS_KEY";function d(t,o){localStorage.setItem(t,JSON.stringify(o))}function l(t){return JSON.parse(localStorage.getItem(t))}function k(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target.getAttribute("id");let r=[];const n=l(c);for(const e of n)e.constID!==o&&r.push(e);d(c,r)}const f="/JS-new_teamProject/assets/IMG_9606-a8e7c57b.png",m="/JS-new_teamProject/assets/amazon-2651c11a.svg",h="/JS-new_teamProject/assets/book-5e54f05d.svg",b="/JS-new_teamProject/assets/trash-121ef440.svg",a=document.querySelector(".shoppinglist-container"),g=`
    <div class="shoppinglist-blocks">
        <h2 class="text">This page is empty, add some books and proceed to order.</h2>
        <img src="${f}" alt="Shopping Image" class="shoppinglist-img96061">
    </div>
`;async function v(){try{const t=l(c);if(!t||!t.length){a.innerHTML=g;return}let o="";for(const r of t){const n=await u(r);o+=S(n,r)}a.innerHTML=o}catch(t){console.error("Помилка отримання даних книги:",t)}}function S(t,o){return`
    <div class="container-block" data-book-id="${o}"> <!-- Додаємо атрибут data-book-id -->
        <!-- Розмітка для відображення інформації про книгу -->
        <div class="btn-and-links">
            <button class="trash-btn"><img src="${b}" alt=""></button>
            <ul class="links">
                <li><img src="${m}" class="amazon"></li>
                <li><img src="${h}"></li>
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
  `}a.addEventListener("click",function(t){const o=t.target;if(t.target.nodeName!=="BUTTON"||t.target.nodeName!=="IMG"){const r=o.closest(".container-block"),n=r.getAttribute("data-book-id"),e=l(c)||[],s=e.indexOf(n);s!==-1&&(e.splice(s,1),d(c,e)),r.remove(),a.querySelector(".container-block")||(a.innerHTML=g)}});export{c as T,d as a,v as b,u as g,l as i,k as r};
//# sourceMappingURL=storage-e6b87283.js.map
