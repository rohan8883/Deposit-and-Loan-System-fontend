if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-1409041e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@files-ui/react-zgXiWBnN.js",revision:null},{url:"assets/axios-DmypytPv.js",revision:null},{url:"assets/card-Bw6yfvlv.js",revision:null},{url:"assets/check-DDKgR3Sg.js",revision:null},{url:"assets/chevron-right-U5U3F3OJ.js",revision:null},{url:"assets/FileUpload-_tdyE3Rx.js",revision:null},{url:"assets/index-BcsQyKq5.js",revision:null},{url:"assets/index-Bm0sRPJg.js",revision:null},{url:"assets/index-Bod-Wlnm.js",revision:null},{url:"assets/index-C0geHzi7.js",revision:null},{url:"assets/index-C3YBl3HR.js",revision:null},{url:"assets/index-C757qsKx.js",revision:null},{url:"assets/index-CJjBa-w_.js",revision:null},{url:"assets/index-CoJVdVEQ.css",revision:null},{url:"assets/index-CVGpTSmz.js",revision:null},{url:"assets/index-CVnaOUNp.js",revision:null},{url:"assets/index-DB-U-9Cm.js",revision:null},{url:"assets/index-DDwrdpSe.js",revision:null},{url:"assets/index-DnNvtFnL.js",revision:null},{url:"assets/index-Dvlaax2y.js",revision:null},{url:"assets/index-DygTTCC5.css",revision:null},{url:"assets/index-E_pR4FP6.js",revision:null},{url:"assets/index-KOnWvv7-.js",revision:null},{url:"assets/index-mYgWSCXV.js",revision:null},{url:"assets/index-sYq4IcEO.js",revision:null},{url:"assets/index.es-BpZSSRRs.js",revision:null},{url:"assets/moment-BjLXg0w5.js",revision:null},{url:"assets/purify.es-DZKq_UwK.js",revision:null},{url:"assets/react-TOJyVDrH.js",revision:null},{url:"assets/RHFPasswordField-hxzsZcE7.js",revision:null},{url:"assets/RHFTextArea-4e_miSQI.js",revision:null},{url:"assets/router-DMIetGpf.js",revision:null},{url:"assets/select-DAEbas5a.js",revision:null},{url:"assets/separator-Dx7ufEei.js",revision:null},{url:"assets/services-KQnp_8oA.js",revision:null},{url:"assets/switch-B-7HfEI0.js",revision:null},{url:"assets/table-CbXT1Hu0.js",revision:null},{url:"assets/tabs-DUwyeImp.js",revision:null},{url:"assets/toInteger-Dxc4oTYl.js",revision:null},{url:"assets/useCustomQuery-DlPzsp6X.js",revision:null},{url:"assets/useTimer-BI9eVIxE.js",revision:null},{url:"index.html",revision:"cd14585bcefb7ba02a3f3d347ec932a8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"c975cf1d2d6f2007cb887ecad31b57ed"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|json)$/,new s.CacheFirst({cacheName:"images",plugins:[new s.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com/,new s.StaleWhileRevalidate({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET")}));
