import{a as u,i as d}from"./assets/vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function f(t,o){const i="https://books-backend.p.goit.global/books/",r=`${t}`;let e;o&&(e={category:`${o}`});const s=`${i}${r}`,n=await u.get(s,{params:e});if(n.data.length===0)throw new Error("Error");return n.data}const a=document.querySelector(".switch-box"),c=document.querySelector(".switch-button");c.addEventListener("click",t=>{c.dataset.switch==="true"?(c.classList.remove("new-position"),a.classList.remove("new-background"),c.dataset.switch="false"):(c.classList.add("new-position"),a.classList.add("new-background"),c.dataset.switch="true")});const m={galleryBooks:document.querySelector(".js-gallery-books"),btnMore:document.querySelector(".btn-more"),listCategoryTitle:document.querySelector(".list-category-title")};function l(t){d.error({title:"Error",message:t})}async function b(){try{const t=await f("top-books");for(const o of t)g(o),o.books.length>=1?h(o):l("Sorry, there are no items in this category")}catch(t){l(`Failed to render books:${t}`)}}function g(t){const o=`<li id="${t.list_name}" class="list-category-books">
    <h2 class="list-category-title">${t.list_name}</h2>
    <ul class="list-book">
     </ul>    
    </li>
    <button type="button" class="btn-more">See more</button>`;m.galleryBooks.insertAdjacentHTML("beforeend",o)}function p(t){const{book_image:o,author:i,title:r,_id:e,contributor:s,list_name:n}=t;if(n)return`
    <li class="card book-item" data-id="${e}">
    <img class="book-img" src="${o}" alt="${s} ${r}">
    <h3 class="title-book">${r}</h3>
    <p class="author">${i}</p>
    </li>
   `}function y(t){return t.map(p).join("")}function h(t){const o=t.list_name,i=document.getElementById(o).querySelector(".list-book"),r=y(t.books);i.insertAdjacentHTML("afterbegin",r)}b();
//# sourceMappingURL=commonHelpers.js.map
