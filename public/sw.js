if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const d=e=>a(e,t),r={module:{uri:t},exports:c,require:d};s[t]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(n(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/335-8265460577cd3bde.js",revision:"8265460577cd3bde"},{url:"/_next/static/chunks/402-7477e8f6a02f7bc7.js",revision:"7477e8f6a02f7bc7"},{url:"/_next/static/chunks/537-4f60e1a73ea094c6.js",revision:"4f60e1a73ea094c6"},{url:"/_next/static/chunks/664-8af8765c6fed5950.js",revision:"8af8765c6fed5950"},{url:"/_next/static/chunks/dbf3ce33-60e42cd4ecefb410.js",revision:"60e42cd4ecefb410"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-41c7a067006caf69.js",revision:"41c7a067006caf69"},{url:"/_next/static/chunks/pages/400-6efa17b94f5a7032.js",revision:"6efa17b94f5a7032"},{url:"/_next/static/chunks/pages/404-fe1cdd31d687564d.js",revision:"fe1cdd31d687564d"},{url:"/_next/static/chunks/pages/500-bf89bdd34e3b3b67.js",revision:"bf89bdd34e3b3b67"},{url:"/_next/static/chunks/pages/_app-f8ca2c6f3caf5fec.js",revision:"f8ca2c6f3caf5fec"},{url:"/_next/static/chunks/pages/_error-4d8164fb0d12882f.js",revision:"4d8164fb0d12882f"},{url:"/_next/static/chunks/pages/blog-72787732b3c75e4b.js",revision:"72787732b3c75e4b"},{url:"/_next/static/chunks/pages/blog-details/%5Bblogid%5D-07e0fe37694f97ae.js",revision:"07e0fe37694f97ae"},{url:"/_next/static/chunks/pages/comming-soon-16582655dea77eb1.js",revision:"16582655dea77eb1"},{url:"/_next/static/chunks/pages/index-1b617303716bdd03.js",revision:"1b617303716bdd03"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/781fe5271e1a707d.css",revision:"781fe5271e1a707d"},{url:"/_next/static/fvTlFSZlEmCBf-nkppa1i/_buildManifest.js",revision:"3a11bd4e16bc6352d3e818706b59b243"},{url:"/_next/static/fvTlFSZlEmCBf-nkppa1i/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1-1.946e706e.jpg",revision:"55a8bfe07b83ed4d0648ef12190e5a19"},{url:"/_next/static/media/1.1c14fde9.png",revision:"964299d79faa7f9a3b875b5cca78bf8f"},{url:"/_next/static/media/1.d50923cc.svg",revision:"900dec1ba35464a2757629cb98fac8ec"},{url:"/_next/static/media/2.9e5f74f6.svg",revision:"33db6ad37bd908618f838fd9433ed5f7"},{url:"/_next/static/media/3.563eb17d.png",revision:"8b1b0546dad025e8ddb676c8840351b2"},{url:"/_next/static/media/3.6e0499e1.svg",revision:"140e2ebefa6a7cee0b3919a0a5f0afa7"},{url:"/_next/static/media/4-3.a26a4d27.jpg",revision:"1e4f1e646f3476cfe4ede54741180e9a"},{url:"/_next/static/media/4.19c5de2b.svg",revision:"568365123af7a82069ea943c1929fe6f"},{url:"/_next/static/media/4.7a7238c4.png",revision:"46c86370d90e56e3ab8848175df1a7c3"},{url:"/_next/static/media/6.be2c1b9a.png",revision:"66fb31aa621321778c879119d3a463f4"},{url:"/_next/static/media/UiUx.fe408d12.png",revision:"40a14270f3ddbd002b33f6ad4d5ff493"},{url:"/_next/static/media/arrow.e46cea6b.png",revision:"e46cea6b"},{url:"/_next/static/media/ben.23d2441e.png",revision:"b170f4579383b404fc61bc2abc8ba199"},{url:"/_next/static/media/ben.e452c2cd.png",revision:"44ea658b2ee336c7630a85ec8276b55c"},{url:"/_next/static/media/branding.4ec4915d.png",revision:"151a7e69d443cf09685feef282845563"},{url:"/_next/static/media/cancel.25908147.svg",revision:"e3741d9b2ef1808d3e4cab1a1ab29ca8"},{url:"/_next/static/media/cbs.77047e7e.png",revision:"5563c6613a509496ab1db0af53bfad7b"},{url:"/_next/static/media/mail.06d6ec98.svg",revision:"d95aebd5b06b07faaa39195856b6e87a"},{url:"/_next/static/media/map.75f1d2cc.svg",revision:"f9cc0fb79501bb5af6dfd6b0cbfdaf6f"},{url:"/_next/static/media/newwindow.0b3c1557.png",revision:"0b3c1557"},{url:"/_next/static/media/notfound.5e0a2b4d.png",revision:"c35798a75728aa2cd358b02193ff4b73"},{url:"/_next/static/media/phone.ee4f5aa7.svg",revision:"5efe9dce4a9e163ad870296ddce3ec82"},{url:"/favicon.ico",revision:"d3bd9c48115bc9c34a54460ab50fe641"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));