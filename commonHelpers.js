import{a as l,i as a}from"./assets/vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function u(t,o){const i="https://books-backend.p.goit.global/books/",s=`${t}`;let e;o&&(e={category:`${o}`});const r=`${i}${s}`,n=await l.get(r,{params:e});if(n.data.length===0)throw new Error("Error");return n.data}const d={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title")};function c(t){a.error({title:"Error",message:t})}async function f(){try{const t=await u("top-books");for(const o of t)m(o),o.books.length>=1?p(o):c("Sorry, there are no items in this category")}catch(t){c(`Failed to render books:${t}`)}}function m(t){const o=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;d.galleryBooks.insertAdjacentHTML("beforeend",o)}function b(t){const{book_image:o,author:i,title:s,_id:e,contributor:r,list_name:n}=t;if(n)return`
    <li class="card book-item" data-id="${e}">
    <img class="book-img" src="${o}" alt="${r} ${s}">
    <h3 class="title-book">${s}</h3>
    <p class="author">${i}</p>
    </li>
   `}function g(t){return t.map(b).join("")}function p(t){const o=t.list_name,i=document.getElementById(o).querySelector(".list-book"),s=g(t.books);i.insertAdjacentHTML("afterbegin",s)}f();
//# sourceMappingURL=commonHelpers.js.map
