window.addEventListener("DOMContentLoaded",(function(){let e=0;const t=document.querySelector(".header"),s=document.querySelector(".logo svg");function i(e){var t=document.createElement("div");t.classList.add("toast"),t.textContent=e,document.body.appendChild(t),setTimeout((function(){t.style.opacity="0"}),3e3)}window.addEventListener("scroll",(function(){let i=window.pageYOffset||document.documentElement.scrollTop;i>100?i>e?t.style.top="-100%":(t.style.top="0",s.style.width="80rem",s.style.height="80rem"):(t.style.top="0",s.style.width="",s.style.height=""),e=i<=0?0:i}),!1),window.addEventListener("resize",(function(){window.innerWidth<=768?t.style.padding="25rem 0":t.style.padding="10rem 0"}),!1);let r=[];function l(e){const t=JSON.stringify(e);document.querySelector("#orderProductsObject").value=t}function n(e){let t=JSON.parse(localStorage.getItem("maxQuantity"))||e;const s=Date.now(),i=s-(parseInt(localStorage.getItem("lastUpdate"))||0);t||(t=e);for(const s in t)if(t.hasOwnProperty(s)){const r=parseFloat(t[s].fr);console.log(r);const l=36e5*r,n=Math.floor(i/l);let a=parseInt(t[s].remainder)-n;a<parseInt(t[s].min)&&(a=parseInt(e[s].remainder)),t[s].remainder=a,e[s].remainder=a}return localStorage.setItem("maxQuantity",JSON.stringify(t)),localStorage.setItem("lastUpdate",s),e}fetch("products.json").then((e=>e.json())).then((e=>{r=e,n(r);const t=function(){const e=localStorage.getItem("maxQuantity");if(e)return JSON.parse(e)}();console.log(t),function(e){const t=document.querySelectorAll(".slider-card"),s=document.querySelectorAll(".card");Object.keys(e).forEach(((i,r)=>{const l=e[i],n=t[r],a=s[r];if(!n||!a)return;let d=n.querySelector(".product"),o=n.querySelector(".price-card .blue-text"),c=n.querySelector(".number"),h=n.querySelector(".number-of"),u=n.querySelector(".remainder"),p=n.querySelector(".price-card .full-price-card"),m=n.querySelector(".article-id"),y=n.querySelector(".country-name"),C=n.querySelector(".text-descript"),g=n.querySelector(".color-input-block"),S=n.querySelector(".size-inputs"),f=n.querySelector(".material ul"),v=n.querySelector(".image"),b=a.querySelector(".name-card"),A=a.querySelector(".sale-price"),L=a.querySelector(".price"),E=a.querySelector(".size-card"),q=n.querySelector(".cart-cta"),x=a.querySelector(".cart-cta"),T=a.querySelector(".hover-img img");function w(e){return e>=10?(p.style.display="none",L.style.display="none",0):e<=10&&e>5?(p.style.display="inline-block",L.style.display="inline-block",.02):e<=5&&e>1?(p.style.display="inline-block",L.style.display="inline-block",.04):(p.style.display="inline-block",L.style.display="inline-block",.06)}function F(e,t){return e*(1-t)}q.setAttribute("data-item-key",l.id),x.setAttribute("data-item-key",l.id);const k=F(parseFloat(l.saleprice),w(parseInt(l.remainder)));d.innerText=l.head,o.innerText=k.toFixed(2),c.innerText=r+1+"/",h.innerText=t.length,u.innerText=l.remainder,p.innerText=l.saleprice,m.innerText=l.id,y.innerText=l.country,C.innerText=l.descript,T.setAttribute("data-id-img",l.id),v.setAttribute("data-id-img",l.id),b.innerText=l.head,A.innerText=k.toFixed(2),L.innerText=l.saleprice;let I=0;for(const e in l.color){const t=document.createElement("input"),s=document.createElement("label"),i=document.createElement("p");t.setAttribute("type","checkbox"),t.setAttribute("name",`color-${r}`),t.setAttribute("id",`color-${r}-${I}`),t.setAttribute("selected",!0),t.classList.add("color-input"),s.setAttribute("for",`color-${r}-${I}`),s.style.backgroundColor=e,s.style.border="1px solid",s.style.borderColor="white"===e?"#ccc":"transparent",i.appendChild(t),i.appendChild(s),g.appendChild(i),I++}["38","39","40","41","42","43","44","45"].forEach(((e,t)=>{const s=document.createElement("input"),i=document.createElement("label"),n=document.createElement("p"),a=`size-${r}-${t}`;s.setAttribute("type","radio"),s.setAttribute("name",`size-${r}`),s.setAttribute("id",a),s.setAttribute("value",e),s.classList.add("size-input"),i.setAttribute("for",a),i.innerText=e,l.size.includes(e)||(s.disabled=!0);const d=n.cloneNode(!1);d.appendChild(s),d.appendChild(i),S.appendChild(d);const o=document.createElement("input"),c=document.createElement("label"),h=document.createElement("p"),u=`size-${r}-${t}-catalog`;o.setAttribute("type","radio"),o.setAttribute("name",`size-${r}-catalog`),o.setAttribute("id",u),o.setAttribute("value",e),o.classList.add("size-input"),c.setAttribute("for",u),c.innerText=e,l.size.includes(e)||(o.disabled=!0);const p=h.cloneNode(!1);p.appendChild(o),p.appendChild(c),E.appendChild(p);const m=document.querySelectorAll("input[type='radio']");m.forEach((e=>{e.addEventListener("change",(function(){const e=this.name;m.forEach((t=>{t.name!==e&&(t.checked=!1)}))}))}))}));for(const e in l.material){const t=document.createElement("li");t.innerText=l.material[e],f.appendChild(t)}const D=parseFloat(l.remainder),O=a.querySelector(".flag");O.classList.remove("green-flag","blue-flag","purple-flag","darkgreem-flag"),D<=1?(O.innerText="остання пара",O.classList.add("green-flag")):D>1&&D<=5?(O.innerText=`Залишилось: ${D} пари`,O.classList.add("blue-flag")):D>5&&D<10?(O.innerText=`Залишилось: ${D} пар`,O.classList.add("purple-flag")):D>=10&&(O.innerText=`Залишилось: ${D} пар`,O.classList.add("darkgreen-flag"))}))}(t),function(e){const t=document.querySelectorAll(".cart-cta"),s=document.querySelector(".cart-order"),r=document.querySelector(".model-order-name"),n=document.querySelector(".cancel"),a=document.querySelector(".sum"),d=document.querySelector(".sale-sum "),o=document.querySelector(".pay-price"),c=document.querySelector(".size-order"),h=document.querySelector(".order-price-sale"),u=document.querySelector(".sale-price-order"),p=document.querySelector(".sum-order"),m=document.querySelector(".order-sum"),y=(document.querySelectorAll("img[data-id-img]"),document.querySelector(".img-order")),C=Object.values(e);function g(e){return e>=10?0:e<=9&&e>5?.02:e<=5&&e>1?.04:.06}const S=document.querySelector(".addtocart");t.forEach((e=>{e.addEventListener("click",(function(){const t=e.getAttribute("data-item-key"),f=C.find((e=>e.id===t));if(S.style.display="none",p.style.display="block",m.style.display="flex",f){if(!document.querySelector('input[type="radio"]:checked'))return void i("Будь ласка, оберіть розмір");r.innerText=f.head,h.innerText=f.saleprice;const e=g(parseInt(f.remainder));let t=parseFloat(f.saleprice);e>0&&(t*=1-e),u.innerText=t.toFixed(2),a.innerText=f.saleprice,d.innerText=parseFloat(f.saleprice)-parseFloat(u.innerText);let C=parseFloat(f.saleprice);parseFloat(u.innerText)>0&&(C=parseFloat(u.innerText)),o.innerText=C.toFixed(2);const v=document.createElement("select");v.setAttribute("id","sizeSelect"),v.setAttribute("name","sizeSelect"),f.size.forEach((e=>{const t=document.createElement("option");t.setAttribute("value",e),t.textContent=`${e}`,v.appendChild(t)}));const b=document.querySelector('input[type="radio"]:checked').value,A=v.querySelector(`option[value="${b}"]`);c.innerHTML="",c.appendChild(v),A&&(A.selected=!0);const L=["head","saleprice","color"].reduce(((e,t)=>(e[t]="color"===t?JSON.stringify(f[t]):f[t],e)),{});L.saleprice=parseFloat(u.innerText.trim());const E=c.querySelector("select").value;L.size=E,console.log(L),l(L),s.style.display="flex";const q=document.querySelector(`.image[data-id-img="${f.id}"] img`).getAttribute("src");let x=document.createElement("img");x.setAttribute("src",q),y.appendChild(x),document.querySelectorAll('input[type="radio"]').forEach((e=>{e.checked=!1})),v.addEventListener("change",(function(){const e=this.value;L.size=e,console.log(L),l(L)})),n.addEventListener("click",(function(e){e.preventDefault(),x&&y.contains(x)&&y.removeChild(x),S.style.display="block",p.style.display="none",m.style.display="none",s.style.display="none",a.innerText="0",d.innerText="0",o.innerText="0"}))}}))}))}(t),n(t)})).catch((e=>console.error("Помилка завантаження даних:",e)));class a{constructor(e,t={}){this.settings={...a.defaultSettings,...t},this.slider=document.querySelector(e),this.positionCards=0,this.sliderContainer=this.slider.querySelector(".slider-container"),this.sliderCards=this.sliderContainer.children,this.realCardsLength=this.sliderCards.length,this.heightCards=0,this.widthSliderContainer,this.cardsCount,this.widthCards,this.distanceCards,this.cloneCard,this.prevBtnSlider,this.nextBtnSlider,this.sliderInterval,this.maxHeight,this.sliderDots,this.touchPoint,a.defaultSettings.baseCardWidth=this.widthSliderContainer}static defaultSettings={gap:0,isArrows:!1,isDots:!1,distanceToDots:0,isAutoplay:!1,autoplaySpeed:3e3,baseCardWidth:null,transitionCard:"all 1s ease-in-out",isEffectFadeOut:!1};init(){if(this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,null==this.settings.baseCardWidth&&(this.settings.baseCardWidth=this.widthSliderContainer),this.slider.querySelectorAll(".clone").forEach((e=>{e.remove()})),localStorage[this.slider.id+"Interval"]&&clearInterval(localStorage[this.slider.id+"Interval"]),this.slider.style.position="relative",this.sliderContainer.style.overflow="hidden",this.sliderContainer.style.position="relative",this.sliderContainer.style.width="100%",this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.distanceCards=this.settings.gap,this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isArrows&&this.creationArrows(),this.prevBtnSlider=this.slider.querySelector(".left.slider_navigation"),this.nextBtnSlider=this.slider.querySelector(".right.slider_navigation"),this.settings.isArrows&&this.sliderCards.length<=this.cardsCount?(this.prevBtnSlider.style.display="none",this.nextBtnSlider.style.display="none"):this.settings.isArrows&&(this.prevBtnSlider.style.display="block",this.nextBtnSlider.style.display="block"),this.settings.isDots&&this.realCardsLength>1){this.creationDots(),this.sliderDots=document.querySelectorAll(".slider-dot");for(let e=0;e<this.sliderCards.length;e++)this.sliderCards[e].classList.contains("activeFade")&&(this.sliderDots[e].classList.remove("activeFade"),this.sliderCards[e].classList.remove("activeFade"));this.sliderDots[0].classList.add("activeFade"),this.sliderCards[0].classList.add("activeFade")}this.settings.isEffectFadeOut||(this.creationClons(),this.shuffleCard()),this.sliderCards=this.sliderContainer.children,this.heightCards=0;for(let e=0;e<this.sliderCards.length;e++)this.sliderCards[e].style.width=this.widthCards+"px",this.sliderCards[e].style.position="absolute",this.maxHeight=this.sliderCards[e].getBoundingClientRect().height,this.heightCards<this.maxHeight&&(this.heightCards=this.maxHeight),this.sliderCards[e].style.transition="none",setTimeout((()=>{this.sliderCards[e].style.transition=this.settings.transitionCard}),1);this.settings.isDots?this.sliderContainer.style.height=this.heightCards+this.settings.distanceToDots+"px":this.sliderContainer.style.height=this.heightCards+"px",this.sliderDots=document.querySelectorAll(".slider-dot"),this.sliderDots.forEach((e=>{e.onclick=()=>{clearInterval(localStorage[this.slider.id+"Interval"]);for(let e=0;e<this.realCardsLength;e++)this.sliderDots[e].classList.remove("activeFade"),this.sliderCards[e].classList.remove("activeFade");this.sliderCards[e.dataset.order].classList.add("activeFade"),e.classList.add("activeFade")}})),this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay(),this.slider.addEventListener("touchend",(()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()})),this.touchSlider=this.touchSlider.bind(this),this.slider.addEventListener("touchstart",(e=>{this.touchPoint=e.touches[0].pageX,this.slider.addEventListener("touchmove",this.touchSlider),clearInterval(localStorage[this.slider.id+"Interval"])}),{passive:!0}),this.slider.onmouseenter=()=>{clearInterval(localStorage[this.slider.id+"Interval"])},this.slider.onmouseleave=()=>{this.settings.isAutoplay&&this.realCardsLength>this.cardsCount&&this.startAutoPlay()}}creationClons(){let e=1;do{this.cloneCard=this.sliderCards[this.sliderCards.length-e].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("afterbegin",this.cloneCard),this.realCardsLength=this.sliderCards.length-this.slider.querySelectorAll(".clone").length,e++}while(e<=this.realCardsLength&&this.settings.isSlidesToScrollAll);if(this.settings.isSlidesToScrollAll)for(e=0;e<this.realCardsLength;)this.cloneCard=this.sliderCards[e].cloneNode(!0),this.cloneCard.classList.add("clone"),this.cloneCard.style.transition="none",this.sliderContainer.insertAdjacentElement("beforeend",this.cloneCard),e++}creationArrows(){if(this.slider.querySelectorAll(".slider_navigation").length<1){this.prevBtnSlider=document.createElement("span"),this.nextBtnSlider=document.createElement("span"),this.prevBtnSlider.className="left slider_navigation",this.nextBtnSlider.className="right slider_navigation",this.slider.insertAdjacentElement("afterbegin",this.prevBtnSlider),this.slider.insertAdjacentElement("beforeend",this.nextBtnSlider);let e=!0;const t=()=>{e=!1,setTimeout((()=>{e=!0}),1e3*parseFloat(this.sliderCards[0].style.transitionDuration))};this.prevBtnSlider.onclick=()=>{e&&(this.changeSlide("left"),t())},this.nextBtnSlider.onclick=()=>{e&&(this.changeSlide("right"),t())}}}creationDots(){if(!this.slider.querySelector(".dots-container")){let e=document.createElement("div");e.style.position="absolute",e.className="dots-container",e.style.bottom="0",this.slider.insertAdjacentElement("beforeend",e);for(let t=0;t<this.realCardsLength;t++){const s=document.createElement("span");s.className="slider-dot",s.dataset.order=t,e.insertAdjacentElement("beforeend",s)}}}shuffleCard(){this.sliderCards=this.sliderContainer.children,this.positionCards=0-(this.distanceCards+this.widthCards),this.settings.isSlidesToScrollAll&&(this.positionCards=0-(this.distanceCards+this.widthCards)*this.realCardsLength);for(let e=0;e<this.sliderCards.length;e++)this.sliderCards[e].style.left=this.positionCards+"px",this.positionCards+=this.distanceCards+this.widthCards}changeSlide(e){this.widthSliderContainer=this.sliderContainer.getBoundingClientRect().width,this.cardsCount=Math.floor(this.widthSliderContainer/(parseInt(this.settings.baseCardWidth)+this.settings.gap)),0==this.cardsCount&&(this.cardsCount=1),this.widthCards=(this.widthSliderContainer-(this.cardsCount-1)*this.distanceCards)/this.cardsCount,this.sliderCards=this.sliderContainer.children;let t=0;for(let e=0;e<this.sliderCards.length;e++)this.sliderCards[e].classList.contains("activeFade")&&(t=e);if("left"==e)if(this.settings.isSlidesToScrollAll)for(let e=0;e<this.cardsCount;e++)this.sliderContainer.insertAdjacentElement("afterbegin",this.sliderCards[this.sliderCards.length-1]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[t].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[t].classList.add("activeFade")),800),this.sliderCards[t].classList.remove("activeFade"),this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t-1]?t--:t=this.sliderCards.length-1;else{this.sliderCards[this.sliderCards.length-1].remove();let e=this.sliderCards[this.sliderCards.length-1].cloneNode(!0);e.classList.add("clone"),this.sliderContainer.insertAdjacentElement("afterbegin",e),this.sliderCards[1].classList.remove("clone")}else if("right"==e)if(this.settings.isSlidesToScrollAll)for(let e=0;e<this.cardsCount;e++)this.sliderContainer.insertAdjacentElement("beforeend",this.sliderCards[0]);else if(this.settings.isEffectFadeOut)setTimeout((()=>this.sliderCards[t].classList.add("activeFade")),800),setTimeout((()=>this.sliderDots[t].classList.add("activeFade")),800),this.sliderCards[t].classList.remove("activeFade"),this.sliderDots[t].classList.remove("activeFade"),this.sliderCards[t+1]?t++:t=0;else{this.sliderCards[0].remove();let e=this.sliderCards[0].cloneNode(!0);e.classList.add("clone"),this.sliderContainer.insertAdjacentElement("beforeend",e),this.sliderCards[this.sliderCards.length-2].classList.remove("clone")}this.settings.isEffectFadeOut||this.shuffleCard()}startAutoPlay(){if(clearInterval(localStorage[this.slider.id+"Interval"]),this.settings.isEffectFadeOut){let e=0;for(let t=0;t<this.sliderCards.length;t++)this.sliderCards[t].classList.contains("activeFade")&&(e=t);const t=e=>{setTimeout((()=>this.sliderCards[e].classList.add("activeFade")),1e3),setTimeout((()=>this.sliderDots[e].classList.add("activeFade")),1e3)};this.sliderInterval=setInterval((()=>{this.sliderCards[e].classList.remove("activeFade"),this.sliderDots[e].classList.remove("activeFade"),this.sliderCards[e+1]?e++:e=0,t(e)}),this.settings.autoplaySpeed)}else this.sliderInterval=setInterval((()=>{this.changeSlide("right")}),this.settings.autoplaySpeed);localStorage[this.slider.id+"Interval"]=this.sliderInterval}touchSlider(e){this.touchPoint+20<e.touches[0].pageX?(this.changeSlide("left"),this.slider.removeEventListener("touchmove",this.touchSlider)):this.touchPoint-20>e.touches[0].pageX&&(this.changeSlide("right"),this.slider.removeEventListener("touchmove",this.touchSlider))}}const d=new a(".slider-comment",{isArrows:!0,isSlidesToScrollAll:!1,baseCardWidth:"250px",gap:50,isAutoplay:!0,autoplaySpeed:5e3,transitionCard:"all 1.5s ease-in-out"}),o=document.querySelectorAll(".products");let c={};function h(){d.init(),Object.keys(c).forEach((e=>{c[e].init()}))}console.log(o),o.forEach(((e,t)=>{c["img-key"+(t+1)]=new a("#product"+(t+1),{isArrows:!1,isSlidesToScrollAll:!1,baseCardWidth:"250px",gap:50,isAutoplay:!0,autoplaySpeed:5e3,transitionCard:"all 1.5s ease-in-out"})})),window.onresize=function(){d.init(),Object.keys(c).forEach((e=>{c[e].init()}))},setTimeout((function(){h(),Object.keys(c).forEach((e=>{c[e].init()}))}),1e3);const u=document.querySelector("#phone");u.addEventListener("input",(function(){const e=u.value;/\b\+?(\d{2})?([(]?\d{3}[)]?)\s?[-]?\s?(?:\d{3})\s?[-]?(?:\s?\d{2})\s?[-]?(?:\s?\d{2})\b/g.test(e)?u.style.borderColor="green":(u.style.borderColor="red",i("Введіть вірний номер телефону"))}));const p=document.querySelectorAll(".slider-card"),m=document.querySelectorAll(".next"),y=document.querySelectorAll(".prev");let C=0;m.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),p[C].classList.remove("active"),C=(C+1)%p.length,p[C].classList.add("active"),h(),Object.keys(c).forEach((e=>{c[e].init()}))}))})),y.forEach(((e,t)=>{e.addEventListener("click",(e=>{e.preventDefault(),p[C].classList.remove("active"),C=(C-1+p.length)%p.length,p[C].classList.add("active"),h(),Object.keys(c).forEach((e=>{c[e].init()}))}))})),p[C].classList.add("active");const g=document.querySelector(".privacy-police"),S=document.querySelector(".popups-outline"),f=document.querySelector(".cancel-privacy");g.addEventListener("click",(function(e){e.preventDefault(),S.style.display="block"})),f.addEventListener("click",(function(e){e.preventDefault(),S.style.display="none"}))}));
