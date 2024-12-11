(()=>{"use strict";var n,e,t,a,r={164:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,'/* Josh Comeau CSS Reset:\n\n/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\nTypographic tweaks!\n3. Add accessible line-height\n4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\nbody {\n  display: grid;\n  place-content: center;\n  background: radial-gradient(rgb(58 58 58), black);\n}\n\n.container {\n  position: relative;\n  width: min(100vw, 800px);\n}\n\n.content {\n  font-family: "Geist Mono", monospace;\n  height: 100vh;\n  display: grid;\n}\n\n.sound {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  z-index: 2;\n  filter: brightness(1.2);\n  transition: all 300ms cubic-bezier(.53,.15,.2,.88);\n}\n\n.sound.paused {\n  transform: scale(0.8);\n  filter: grayscale(100%);\n}\n\n.video {\n  position: absolute;\n  width: fit-content;\n  height: 100vh;\n  z-index: 1;\n  object-fit: cover;\n}\n\n.content > div {\n  display: relative;\n}\n\n#close {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background: #ef4444;\n  border: 2px groove #ef4444;\n  cursor: pointer;\n  font-size: 0;\n}\n\nbutton, dotlottie-player {\n  cursor: pointer;\n}',""]);const s=i},853:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,".content.error > div {\n  place-self: center;\n  z-index: 2;\n  border: 0;\n  border-radius: 5px;\n  padding: 30px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(8px);\n  transition: filter 500ms linear;\n  max-width: 250px;\n}\n\n.cause {\n  text-align: center;\n}",""]);const s=i},895:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,".content.loading > div {\n  place-self: center;\n  z-index: 2;\n  border: 0;\n  border-radius: 5px;\n  padding: 30px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(8px);\n  transition: filter 500ms linear;\n  max-width: 250px;\n}\n\n.loader {\n  width: 20px;\n  height: 20px;\n  animation: rotate 1s linear infinite;\n  background-size: cover;\n}\n\n@keyframes rotate {\n  to {transform: rotate(360deg);}\n}",""]);const s=i},630:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,".content.result > div {\n  place-self: center;\n  z-index: 2;\n  border: 0;\n  border-radius: 5px;\n  padding: 30px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(8px);\n  transition: filter 500ms linear;\n}\n\n.address {\n  color: #64748b;\n}\n\n.temp {\n  position: relative;\n  left: 10px;\n  font-size: 5rem;\n}\n\n.condition {\n  font-size: 2rem;\n  margin-bottom: 20px;\n}\n\n.data {\n  overflow: auto;\n  width: 300px;\n  height: 150px;\n}\n\nth {\n  text-align: left;\n}\n\ntd {\n  text-align: right;\n}\n",""]);const s=i},431:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([n.id,".content.start {\n  place-content: center;\n}\n\n.content.start .logo {\n  width: 200px;\n  margin-bottom: 20px;\n  justify-self: center;\n}\n\n.logo, .searchbox {\n  transition: filter 500ms linear;\n}\n\n.searchbox {\n  border: 0;\n  border-radius: 5px;\n  padding: 3px;\n  /*   box-shadow: 0 3px 10px #f1f5f9;\n */\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  backdrop-filter: blur(8px);\n}\n\n.searchbox,\n.logo {\n  z-index: 2;\n}\n\n.search-icon {\n  height: 70%;\n  margin-inline: 5px;\n}\n\n#search {\n  border: 0;\n  padding: 3px;\n  background: transparent;\n}\n\n#search:focus {\n  outline: 0;\n}\n\n#search + button {\n  height: 100%;\n  color: white;\n  background: #ef4444;\n  border: 3px groove #ef4444;\n  border-radius: 5px;\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},937:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(164),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.A,v),m.A&&m.A.locals&&m.A.locals},120:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(853),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.A,v),m.A&&m.A.locals&&m.A.locals},774:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(895),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.A,v),m.A&&m.A.locals&&m.A.locals},645:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(630),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.A,v),m.A&&m.A.locals&&m.A.locals},522:(n,e,t)=>{var a=t(72),r=t.n(a),o=t(825),i=t.n(o),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),u=t.n(p),h=t(113),f=t.n(h),m=t(431),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.A,v),m.A&&m.A.locals&&m.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=r(h,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=a(n,r),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},993:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>s});var r=t(687),o=t(682),i=n([r,o]);function s(){const n=document.createElement("button");return n.id="close",n.textContent="close",n.addEventListener("click",(()=>{(0,r.A)(),(0,o.tu)().start()})),n}[r,o]=i.then?(await i)():i,a()}catch(c){a(c)}}))},972:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>c});var r=t(44),o=n([r]);r=(o.then?(await o)():o)[0];const i=document.createElement("canvas");i.width=50,i.height=20;const s=i.getContext("2d");function c(n){s.drawImage(n,50,0,50,20,0,0,50,20);const e=s.getImageData(0,0,i.width,i.height).data;let t=0;for(let n=0;n<e.length;n+=4)t+=(e[n]+e[n+1]+e[n+2])/3;const a=1.4-t/(e.length/4)/310;setTimeout((()=>{for(const n of r.A.children)n.style.filter=`brightness(${Math.trunc(100*a)/100})`}),700),setTimeout((()=>{c(n)}),500),s.clearRect(0,0,i.width,i.height)}a()}catch(d){a(d)}}))},151:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>i});var r=t(44),o=n([r]);function i(){for(;r.A.firstChild;)r.A.removeChild(r.A.firstChild);r.A.className="content"}r=(o.then?(await o)():o)[0],a()}catch(s){a(s)}}))},920:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>d});var r=t(993),o=t(151),i=t(44),s=t(682),c=n([r,o,i,s]);function d(n){(0,o.A)(),i.A.classList.add("error");const e=document.createElement("div"),t=document.createElement("h1");t.classList.add("code"),t.textContent=n.message,e.appendChild(t);const a=document.createElement("p");let c;switch(a.classList.add("cause"),n.message){case"400":c="Even when requesting an API you need manners...";break;case"401":c="You are not allowed to know the weather";break;case"404":c="That's not a real place... probably";break;case"429":c="Weather data is for a select few";break;case"500":c="Even we don't know what happened, try again maybe"}a.textContent=c,e.appendChild(a),e.appendChild((0,r.A)()),i.A.appendChild(e),(0,s.HW)().start(0)}[r,o,i,s]=c.then?(await c)():c,a()}catch(l){a(l)}}))},44:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>d});var r=t(506),o=(t(937),t(522),t(645),t(120),t(774),t(972)),i=t(687),s=t(681),c=n([r,o,i,s]);[r,o,i,s]=c.then?(await c)():c;const d=document.querySelector(".content");(0,i.A)(),(0,s.A)();const l=document.querySelector(".video");(0,o.A)(l),a()}catch(n){a(n)}}))},362:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>d});var r=t(151),o=t(44),i=t(583),s=t(682),c=n([r,o,s]);function d(){(0,r.A)(),o.A.classList.add("loading");const n=document.createElement("div"),e=document.createElement("div");e.classList.add("loader"),e.style.backgroundImage=`url(${i})`,n.appendChild(e),o.A.appendChild(n);const t=(0,s.JP)();return t.start(),new Promise((n=>{setTimeout((()=>{n(t)}),4500)}))}[r,o,s]=c.then?(await c)():c,a()}catch(l){a(l)}}))},836:(n,e,t)=>{function a(n){return new Promise(((e,t)=>{(async function(n){const e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=TNATRMXJ7EJSUBD23TSKSELTK`,t=await fetch(e,{mode:"cors"});if(t.ok)return t;throw new Error(t.status)})(n).then((n=>async function(n){const e=await n.json(),t=e.resolvedAddress,a=e.days[0];return{temp:a.temp,precipprob:a.precipprob,cloudcover:a.cloudcover,conditions:a.conditions,windspeed:a.windspeed,solarradiation:a.solarradiation,address:t}}(n))).then((n=>e(n))).catch((n=>t(n)))}))}t.d(e,{A:()=>a})},687:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>l});var r=t(836),o=t(723),i=t(920),s=t(506),c=t(362),d=n([o,i,s,c]);function l(){(0,s.A)().then((n=>Promise.allSettled([(0,r.A)(n),(0,c.A)()]))).then((n=>{n[1].value.stop(),"rejected"==n[0].status?(0,i.A)(n[0].reason):(0,o.A)(n[0].value)}))}[o,i,s,c]=d.then?(await d)():d,a()}catch(p){a(p)}}))},723:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>l});var r=t(993),o=t(151),i=t(44),s=t(682),c=t(753),d=n([r,o,i,s]);function l(n){(0,o.A)(),i.A.classList.add("result");const e=document.createElement("div"),t=document.createElement("p");t.classList.add("address"),t.textContent=n.address.split(",")[0],e.appendChild(t);const a=document.createElement("h1"),d=Math.round(n.temp);a.classList.add("temp"),a.textContent=`${d}°`,e.appendChild(a);const l=document.createElement("h4"),p=n.conditions;l.classList.add("condition"),l.textContent=p,n.conditions.length>=10&&(l.style.fontSize="1.8rem"),e.appendChild(l);const u=document.createElement("table");u.classList.add("data");const h=document.createElement("tbody");[{th:"Windspeed",td:`${n.windspeed} km/h`,tbody:h},{th:"Cloudcover",td:`${Math.round(n.cloudcover)}%`,tbody:h},{th:"Rainability",td:`${Math.round(n.precipprob)}%`,tbody:h},{th:"Solar radiation",td:`${n.solarradiation} W/m2`,tbody:h}].forEach((n=>{(0,c.A)(n)})),u.appendChild(h),e.appendChild(u),e.appendChild((0,r.A)()),i.A.appendChild(e),n.precipprob>50?(0,s.Mh)().start():(0,s.u)().start()}[r,o,i,s]=d.then?(await d)():d,a()}catch(p){a(p)}}))},682:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{HW:()=>C,JP:()=>T,Mh:()=>S,_6:()=>h,j4:()=>A,tu:()=>E,u:()=>k,v2:()=>L});var r=t(254),o=t(512),i=t(418),s=t(331),c=t(85),d=t(216),l=t(875);const p=new AudioContext;async function u(n){const e=await fetch(n),t=await e.arrayBuffer(),a=await p.decodeAudioData(t);return console.log(a),a}function h(){"suspended"==p.state?p.resume():p.suspend()}function f(n,e=!1,t=1,a=!1){return function(){const r=p.createBufferSource();if(r.buffer=n,r.loop=e,t){const n=p.createGain();return a?(n.gain.setValueAtTime(.1,p.currentTime),n.gain.exponentialRampToValueAtTime(t,p.currentTime+2)):n.gain.setValueAtTime(t,p.currentTime),r.connect(n).connect(p.destination),r}return r.connect(p.destination),r}}const m=await u(r),v=await u(o),b=await u(i),g=await u(s),y=await u(c),x=await u(d),w=await u(l),A=f(m),C=f(v,!1,1.5),E=f(b),k=f(g),S=f(y),T=f(x,!0,.7,!0),L=f(w);a()}catch(P){a(P)}}),1)},681:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>i});var r=t(682),o=n([r]);function i(){const n=document.querySelector(".sound");n.classList.add("playing"),n.addEventListener("click",(()=>{(0,r.v2)().start(),(0,r._6)(),n.classList.contains("playing")?(n.setLooping(!1),n.classList.remove("playing"),n.classList.add("paused")):(n.setLooping(!0),n.play(),n.classList.remove("paused"),n.classList.add("playing"))}))}r=(o.then?(await o)():o)[0],a()}catch(s){a(s)}}))},506:(n,e,t)=>{t.a(n,(async(n,a)=>{try{t.d(e,{A:()=>l});var r=t(695),o=t(631),i=t(44),s=t(151),c=t(682),d=n([i,s,c]);function l(){(0,s.A)(),i.A.classList.add("start");const n=document.createElement("img");n.classList.add("logo"),n.src=r,i.A.appendChild(n);const e=document.createElement("div");e.classList.add("searchbox");const t=document.createElement("img");t.classList.add("search-icon"),t.src=o,e.appendChild(t);const a=document.createElement("input");a.id="search",a.placeholder="A place, somewhere",e.appendChild(a);const d=document.createElement("button");return d.textContent="Search",e.appendChild(d),i.A.appendChild(e),new Promise((n=>{d.addEventListener("click",(()=>{(0,c.j4)().start(),a.validity.valid&&n(a.value)}))}))}[i,s,c]=d.then?(await d)():d,a()}catch(p){a(p)}}))},753:(n,e,t)=>{function a(n){const e=document.createElement("tr"),t=document.createElement("th");t.scope="row",t.textContent=n.th,e.appendChild(t);const a=document.createElement("td");a.textContent=n.td,e.appendChild(a),n.tbody.appendChild(e)}t.d(e,{A:()=>a})},418:(n,e,t)=>{n.exports=t.p+"05a42828741ca05e4408.wav"},512:(n,e,t)=>{n.exports=t.p+"9df05de8d50ed3a20fd6.wav"},583:(n,e,t)=>{n.exports=t.p+"c2f21bf043df699a33a3.svg"},216:(n,e,t)=>{n.exports=t.p+"94a198fb6a038a5afba2.wav"},631:(n,e,t)=>{n.exports=t.p+"f9b4cacb3e3dcb457b43.svg"},331:(n,e,t)=>{n.exports=t.p+"f9fd4e702856dfb9fc8a.wav"},695:(n,e,t)=>{n.exports=t.p+"1693221ea7a1d1a5b1c2.svg"},85:(n,e,t)=>{n.exports=t.p+"f51685f0e832357082a0.wav"},254:(n,e,t)=>{n.exports=t.p+"e01a56022e26b586f59d.wav"},875:(n,e,t)=>{n.exports=t.p+"67e7328d1fc0533b3efb.wav"}},o={};function i(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n](t,t.exports,i),t.exports}n="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=n=>{n&&n.d<1&&(n.d=1,n.forEach((n=>n.r--)),n.forEach((n=>n.r--?n.r++:n())))},i.a=(r,o,i)=>{var s;i&&((s=[]).d=-1);var c,d,l,p=new Set,u=r.exports,h=new Promise(((n,e)=>{l=e,d=n}));h[e]=u,h[n]=n=>(s&&n(s),p.forEach(n),h.catch((n=>{}))),r.exports=h,o((r=>{var o;c=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[n])return r;if(r.then){var o=[];o.d=0,r.then((n=>{i[e]=n,a(o)}),(n=>{i[t]=n,a(o)}));var i={};return i[n]=n=>n(o),i}}var s={};return s[n]=n=>{},s[e]=r,s})))(r);var i=()=>c.map((n=>{if(n[t])throw n[t];return n[e]})),d=new Promise((e=>{(o=()=>e(i)).r=0;var t=n=>n!==s&&!p.has(n)&&(p.add(n),n&&!n.d&&(o.r++,n.push(o)));c.map((e=>e[n](t)))}));return o.r?d:i()}),(n=>(n?l(h[t]=n):d(u),a(s)))),s&&s.d<0&&(s.d=0)},i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&(!n||!/^http(s?):/.test(n));)n=t[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.nc=void 0,i(44)})();