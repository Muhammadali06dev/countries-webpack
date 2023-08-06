(()=>{"use strict";const e=document.querySelector(".loader"),t=function(t){t?e.classList.remove("hidden"):e.classList.add("hidden")},n=async e=>{t(!0);const n=await fetch(e);if(n.ok){const e=await n.json();return t(!1),e}throw t(!1),new Error("Something went wrong")},s=document.querySelector(".cards"),a=e=>{s.innerHTML="",e.forEach((e=>{const t=e.name.common,n=e.population,a=e.region,c=e.capital?e.capital:"NO Capital",o=e.flags.svg,r=document.createElement("li");r.classList.add("cards__item"),r.innerHTML=`\n         <a href="./about.html?country=/name/${t}">\n            <img src=${o} alt="${t}-flag" width="267" height="160">\n            <div class="cards__item-inner">\n               <h3 class="cards__title">${t}</h3>\n               <p class="population">Population: <span>${n}</span></p>\n               <p class="region">Region: <span>${a}</span></p>\n               <p class="capital">Capital: <span>${c}</span></p>\n            </div>\n         </a>\n         `,s.append(r)}))},c=(document.querySelector(".country-info"),document.querySelector(".search"));c.search.addEventListener("input",(()=>{const e=c.search.value.toLowerCase(),t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((n,s)=>{n.textContent.toLowerCase().includes(e)?t[s].style.display="block":t[s].style.display="none"}))}));const o=document.querySelectorAll(".search__select-list li"),r=document.querySelector(".search__select span");o.forEach((e=>{e.addEventListener("click",(()=>{let t;r.textContent=e.textContent,t="All"==e.textContent?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/region/${e.textContent}`,n(t).then((e=>{a(e)})).catch((e=>{alert(e.message)}))}))})),n("https://restcountries.com/v3.1/all").then((e=>{a(e)})).catch((e=>{console.log(e.message)}))})();