import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="34205532-dcd3b12e75460bc879dbf1602",m="https://pixabay.com/api/?";function p(r){const o=new URLSearchParams({key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}${o}`).then(n=>{if(!n.ok)throw new Error("Failed to fetch");return n.json()})}function h(r){return r.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:t,comments:i,downloads:l})=>`<li class="card-item">
  <a href=${n}
    ><img src=${o} alt="${s}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${t}</p>
      </li>
      <li>
        Comments
        <p>${i}</p>
      </li>
      <li>
        Downloads
        <p>${l}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const g=document.querySelector(".form"),a=document.querySelector(".image-list"),y=document.querySelector(".loader");g.addEventListener("submit",S);const L=new u(".card-item a",{captionsData:"alt",captionDelay:250,captionClass:"caption"});function S(r){r.preventDefault();const o=r.currentTarget.elements.search.value.trim();r.currentTarget.elements.search.value="",a.innerHTML="",c(),p(o).then(n=>{b(n)}).then(()=>c())}function b({hits:r}){if(!r.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=h(r);a.insertAdjacentHTML("beforeend",o),L.refresh()}function c(){y.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
