if(!self.define){let e,r={};const i=(i,t)=>(i=new URL(i+".js",t).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const s=e=>i(e,n),d={module:{uri:n},exports:o,require:s};r[n]=Promise.all(t.map((e=>d[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-2d8f2234"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"423b87ae595c15913576351b076a9c17"},{url:"index.html",revision:"37309428e1c666863dd7190ccd433f6c"},{url:"qrcode.png",revision:"154d273878bc94c939b0e3884e2de5e4"},{url:"README.md",revision:"0a5a27cc96977c65de424e328e2c134d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
