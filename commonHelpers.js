import{a as g,S,i as c}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const P="43948978-860dfecfaa788bc4b5c828749",w="https://pixabay.com/api/",f=15;g.defaults.baseURL=w;const y=async(o,e=1)=>(await g.get("",{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:e}})).data,L=o=>o.map(({webformatURL:e,largeImageURL:i,tags:r,likes:t,views:s,comments:l,downloads:b})=>`
            <li class="item-list gallery__item">
        <a href="${i}" class="item-list-link">
            <img class="item-list-img"  height="152"
            width="300" src="${e}" alt="${r}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                    <p class="item-list-text">${t}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                    <p class="item-list-text">${s}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                    <p class="item-list-text">${l}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${b}</p>
            </div>
            </div>
            </li>
            `).join(""),x=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),n=document.querySelector(".s-submit-btn"),a=document.querySelector(".js-loader"),m=document.querySelector(".js-load-more-btn");let h="",d=1,u=0;const v=new S("ul.list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),E=async o=>{o.preventDefault(),p.innerHTML="",d=1,m.classList.add("is-hidden");const e=o.currentTarget;if(h=e.elements.searchKeyword.value.trim(),h===""){c.error({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"}),e.reset();return}try{n.classList.remove("is-disabled"),a.classList.remove("is-hidden");const{hits:i,totalHits:r}=await y(h,d);if(r===0){n.classList.add("is-disabled"),c.error({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),e.reset(),a.classList.add("is-hidden");return}p.insertAdjacentHTML("beforeend",L(i)),v.refresh(),a.classList.add("is-hidden"),n.classList.add("is-disabled"),u=Math.ceil(r/f),u>1&&m.classList.remove("is-hidden")}catch(i){n.classList.add("is-disabled"),a.classList.add("is-hidden"),c.error({message:"Search params is not valid!",position:"topRight"}),e.reset(),console.log("🚀 ~ onSearchFormSubmit ~ error:",i);return}e.reset()};x.addEventListener("submit",E);const q=()=>{const i=document.querySelector(".gallery__item:last-child").getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"})},M=async o=>{try{m.classList.add("is-hidden"),a.classList.remove("is-hidden"),d+=1;const{hits:e,totalHits:i}=await y(h,d);if(p.insertAdjacentHTML("beforeend",L(e)),v.refresh(),q(),a.classList.add("is-hidden"),u=Math.ceil(i/f),d<u)m.classList.remove("is-hidden");else{c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{n.classList.remove("is-disabled"),a.classList.add("is-hidden"),c.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};m.addEventListener("click",M);
//# sourceMappingURL=commonHelpers.js.map
