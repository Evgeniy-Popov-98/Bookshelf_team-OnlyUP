import{a as q}from"./vendor-8cce9181.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();async function A(t,o){const s="https://books-backend.p.goit.global/books/",r=`${t}`;let e;o&&(e={category:`${o}`});const n=`${s}${r}`,i=await q.get(n,{params:e});if(i.data.length===0)throw new Error("Error");return i.data}const y="TASKS_KEY";function u(t,o){localStorage.setItem(t,JSON.stringify(o))}function S(t){return JSON.parse(localStorage.getItem(t))}function I(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target.getAttribute("id");let s=[];const r=S(y);for(const e of r)e.constID!==o&&s.push(e);u(y,s)}document.addEventListener("DOMContentLoaded",function(){const t=window.location.href,o=document.querySelector(".js-hhome"),s=document.querySelector(".js-hshopping"),r=document.querySelector(".header-home-link"),e=document.querySelector(".hshopping-icon");t.includes("index.html")?(o.classList.add("header-newbg"),r.classList.remove("header-home-link")):t.includes("shoppinglist.html")&&(s.classList.add("header-newbg"),o.classList.remove("header-newbg"),e.classList.remove("hshopping-icon"))});document.querySelector(".hmob-burger-menu");const f=document.querySelector(".hburger-menu-icon"),c=document.querySelector(".hclose-menu-icon"),b=document.querySelector(".js-hmob-modal"),v=document.querySelector(".light");f.addEventListener("click",E);function E(t){t.preventDefault(),f.classList.toggle("is-visible"),c.classList.toggle("is-visible"),b.classList.toggle("is-visible"),v.style.overflow="hidden",c.style.display="flex"}c.addEventListener("click",()=>{f.classList.toggle("is-visible"),c.classList.toggle("is-visible"),b.classList.toggle("is-visible"),v.style.overflow="visible",c.style.display="none"});const B=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}],d=document.querySelector(".plus-btn"),m=document.querySelector(".second-btn"),g=document.querySelector(".header-menu"),w=document.querySelectorAll(".header-link");document.querySelectorAll(".header-item");for(let t=0;t<w.length;t++)w[t].setAttribute("href",`${B[t].url}`);d.addEventListener("click",function(){d.style.display="none",m.style.display="flex",g.style.transform="translateY(-156px)",g.style.transition="transform 2s allow-discrete"});m.addEventListener("click",function(){d.style.display="flex",m.style.display="none",g.style.transform=""});const L=document.querySelector(".switch-box"),h=document.querySelector(".switch-button"),a=document.querySelector("body"),p="";let l=!1;document.addEventListener("DOMContentLoaded",()=>{S(p)&&k()});h.addEventListener("click",k);function k(){l?(h.classList.remove("new-position"),L.classList.remove("new-background"),a.classList.remove("dark"),a.classList.add("light"),l=!1,u(p,l)):(h.classList.add("new-position"),L.classList.add("new-background"),a.classList.remove("light"),a.classList.add("dark"),l=!0),l&&u(p,l)}export{y as T,u as a,A as g,S as i,I as r};
//# sourceMappingURL=switch-button-7f14999f.js.map
