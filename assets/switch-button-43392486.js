import{a as L}from"./vendor-f87d3a68.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function E(t,s){const r="https://books-backend.p.goit.global/books/",i=`${t}`;let e;s&&(e={category:`${s}`});const o=`${r}${i}`,l=await L.get(o,{params:e});if(l.data.length===0)throw new Error("Error");return l.data}const f="TASKS_KEY";function S(t,s){localStorage.setItem(t,JSON.stringify(s))}function b(t){return JSON.parse(localStorage.getItem(t))}function O(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.getAttribute("id");let r=[];const i=b(f);for(const e of i)e.constID!==s&&r.push(e);S(f,r)}document.addEventListener("DOMContentLoaded",function(){const t=window.location.href,s=document.querySelector(".js-hhome"),r=document.querySelector(".js-hshopping");t.includes("index.html")?s.classList.add("active-page"):t.includes("shoppinglist.html")&&r.classList.add("active-page")});document.querySelector(".hmob-burger-menu");const m=document.querySelector(".hburger-menu-icon"),a=document.querySelector(".hclose-menu-icon"),y=document.querySelector(".js-hmob-modal"),w=document.querySelector(".light");m.addEventListener("click",v);function v(t){t.preventDefault(),m.classList.toggle("is-visible"),a.classList.toggle("is-visible"),y.classList.toggle("is-visible"),w.style.overflow="hidden",a.style.display="flex"}a.addEventListener("click",()=>{m.classList.toggle("is-visible"),a.classList.toggle("is-visible"),y.classList.toggle("is-visible"),w.style.overflow="visible",a.style.display="none"});const k=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}],u=document.querySelector(".plus-btn"),d=document.querySelector(".second-btn"),g=document.querySelector(".header-menu"),p=document.querySelectorAll(".header-link");document.querySelectorAll(".header-item");for(let t=0;t<p.length;t++)p[t].setAttribute("href",`${k[t].url}`);u.addEventListener("click",function(){u.style.display="none",d.style.display="flex",g.style.transform="translateY(-156px)",g.style.transition="transform 2s allow-discrete"});d.addEventListener("click",function(){u.style.display="flex",d.style.display="none",g.style.transform=""});const h=document.querySelector(".switch-box"),n=document.querySelector(".switch-button"),c=document.querySelector("body");n.addEventListener("click",()=>{console.log(n.dataset.switch),n.dataset.switch==="true"?(n.classList.remove("new-position"),h.classList.remove("new-background"),n.dataset.switch="false"):(n.classList.add("new-position"),h.classList.add("new-background"),n.dataset.switch="true"),c.classList.value==="dark"?(c.classList.remove("dark"),c.classList.add("light")):(c.classList.remove("light"),c.classList.add("dark"))});export{f as T,S as a,E as g,b as i,O as r};
//# sourceMappingURL=switch-button-43392486.js.map