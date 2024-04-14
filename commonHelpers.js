import{a as y,S as g,i as L}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();//! У файлі pixabay-api.js зберігаються функції для HTTP-запитів.
const b="https://pixabay.com/api/",v="43217823-e472439c26018cf28ab0cff6b";async function d(s,r){const o=new URLSearchParams({key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r});return(await y.get(`${b}?${o}`)).data}//! У файлі render-functions.js - функції для відображення елементів інтерфейсу.
function p(s){return s.map(({largeImageURL:r,webformatURL:o,tags:a,likes:e,views:t,comments:n,downloads:h})=>`<li>
    <a href="${r}">
        <img src="${o}" alt="${a}" width="360" height="155"/>
    </a>
        <ul class="characteristics">
            <li>Likes<br> <span class="span">${e}</span></li>
            <li>Views<br> <span class="span">${t}</span></li>
            <li>Comments<br> <span class="span">${n}</span></li>
            <li>Downloads<br> <span class="span">${h}</span></li>
        </ul>
    </li>`).join("")}//! У файлі main.js знаходиться вся логіка роботи додатка.
const f=new g(".list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}),S=document.querySelector(".search-form"),m=document.querySelector(".loader"),c=document.querySelector(".search-input"),l=document.querySelector("ul"),i=document.querySelector(".load-more-button");let u=1;function w(s){s.preventDefault(),c.value.trim()!==""&&(q(),d(c.value.trim()).then(r=>{l.innerHTML="",l.insertAdjacentHTML("beforeend",p(r.hits)),f.refresh(),r.hits.length===0?L.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):i.classList.remove("none")}).catch(r=>alert(r)).finally(()=>{P()}))}S.addEventListener("submit",w);i.addEventListener("click",$);async function $(){u+=1,i.disabled=!0;try{const s=await d(c.value.trim(),u);l.insertAdjacentHTML("beforeend",p(s.hits)),f.refresh(),i.disabled=!1}catch(s){alert(s.message)}}function q(){m.classList.remove("none")}function P(){m.classList.add("none")}
//# sourceMappingURL=commonHelpers.js.map
