(()=>{"use strict";var e={5055:(e,t,r)=>{var n=r(1957),o=r(1947),a=r(499),i=r(9835);function s(e,t,r,n,o,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var c=r(3100),l=r(4306);const p=(0,i.aZ)({name:"App",computed:{...(0,c.Se)(["showLoading"])},async created(){let e=!0;(0,l.LP)()&&(e=await this.pingServer()),e||this.$q.notify({message:"Error reaching server",position:"top",color:"negative"})},watch:{showLoading(e){e?this.$q.loading.show({spinnerColor:"primary",spinnerSize:50,backgroundColor:"white"}):this.$q.loading.hide()}},methods:{...(0,c.nv)(["pingServer"])}});var u=r(1639);const d=(0,u.Z)(p,[["render",s]]),f=d;var h=r(6535),g=r(3340),m=r(8339);const v=[{path:"",component:()=>Promise.all([r.e(736),r.e(438)]).then(r.bind(r,4438)),beforeEnter:l.kl,children:[{path:"",name:"login",component:()=>Promise.all([r.e(736),r.e(791)]).then(r.bind(r,3791))}]},{path:"",name:"",beforeEnter:l.L6,component:()=>Promise.all([r.e(736),r.e(146)]).then(r.bind(r,8146)),children:[{path:"/applications",name:"applications",component:()=>Promise.all([r.e(736),r.e(612)]).then(r.bind(r,2612))},{path:"/applications/:applicationId/offers",name:"offers",component:()=>Promise.all([r.e(736),r.e(95)]).then(r.bind(r,8095))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(894)]).then(r.bind(r,5894))}],y=v,b=(0,g.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:y,history:e("")});return t}));async function w(e,t){const n=e(f);n.use(o.Z,t);const i="function"===typeof h["default"]?await(0,h["default"])({}):h["default"],{storeKey:s}=await Promise.resolve().then(r.bind(r,6535)),c=(0,a.Xl)("function"===typeof b?await b({store:i}):b);return i.$router=c,{app:n,store:i,storeKey:s,router:c}}var L=r(4907),A=r(4328);const O={config:{},plugins:{Loading:L.Z,Notify:A.Z}},P="";async function k({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let p=0;!1===a&&p<o.length;p++)try{await o[p]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:c,publicPath:P})}catch(l){return l&&l.url?void s(l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}w(n.ri,O).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1569))]).then((t=>{const r=n(t).filter((e=>"function"===typeof e));k(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var n=r(3340),o=r(7524);const a=o.Z.create({baseURL:"https://api.example.com"}),i=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=o.Z,e.config.globalProperties.$api=a}))},6535:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n={};r.r(n),r.d(n,{loanApplications:()=>u,loanOffers:()=>d,showLoading:()=>l,userDetails:()=>p});var o={};r.r(o),r.d(o,{resetUserLoanApplicationOffers:()=>y,resetUserLoanApplications:()=>v,setLoading:()=>f,setUserDetails:()=>h,setUserLoanApplicationOffers:()=>m,setUserLoanApplications:()=>g});var a={};r.r(a),r.d(a,{getUserDetails:()=>U,getUserLoanApplicationOffers:()=>E,getUserLoanApplications:()=>j,pingServer:()=>C,resetUserLoanApplicationOffers:()=>_,resetUserLoanApplications:()=>T,setLoading:()=>S});var i=r(3340),s=r(3100);function c(){return{showLoading:!1,userDetails:null,loanApplications:[],loanOffers:[]}}const l=e=>e.showLoading,p=e=>e.userDetails,u=e=>e.loanApplications,d=e=>e.loanOffers;function f(e,t){e.showLoading=t}function h(e,t){e.userDetails=t}function g(e,t){e.loanApplications=t}function m(e,t){var r=t;let n=r.sort(((e,t)=>e.interest_rate*e.tenure-t.interest_rate*t.tenure));e.loanOffers=n}function v(e){e.loanApplications=[]}function y(e){e.loanOffers=[]}var b=r(7524),w=r(4306);const L="https://api.sfd.interview.ovckd.dev/v1",A=b.Z.create({baseURL:L,headers:{Accept:"application/json","Content-Type":"application/son"}});A.interceptors.request.use((e=>{const t=(0,w.LP)();return t&&(e.headers.Authorization=t),e}),(e=>Promise.reject(e))),A.interceptors.response.use((e=>e.data),(async e=>({data:e.response.data,status:e.response.status,type:"single"})));const O={get:(e,t)=>A.get(e,{params:t}),post:(e,t)=>A.post(e,t),put:(e,t)=>A.put(e,t),patch:(e,t)=>A.patch(e,t),del:e=>A.delete(e),delWithData:(e,t)=>A.delete(e,{data:t})},P=O,k=P;function S({commit:e},t){e("setLoading",t)}async function C({dispatch:e}){e("setLoading",!0);try{await k.get("/ping");return e("setLoading",!1),!0}catch(t){return e("setLoading",!1),!1}}async function U({commit:e,dispatch:t}){t("setLoading",!0);try{const r=await k.get("/user");return e("setUserDetails",r),t("setLoading",!1),!0}catch(r){return t("setLoading",!1),!1}}async function j({commit:e,dispatch:t}){t("setLoading",!0);try{const r=await k.get("/user/applications");return e("setUserLoanApplications",r),t("setLoading",!1),!0}catch(r){return t("setLoading",!1),!1}}async function E({commit:e,dispatch:t},r){t("setLoading",!0);try{const n=await k.get(`/user/applications/${r}/offers`);return e("setUserLoanApplicationOffers",n),t("setLoading",!1),!0}catch(n){return t("setLoading",!1),!1}}async function T({commit:e}){e("resetUserLoanApplications")}async function _({commit:e}){e("resetUserLoanApplicationOffers")}const x={state:c,getters:n,mutations:o,actions:a},D=(0,i.h)((function(){const e=(0,s.MT)({modules:{common:x},strict:!1});return e}))},4306:(e,t,r)=>{r.d(t,{L6:()=>s,LP:()=>o,kl:()=>c,o4:()=>a,pQ:()=>i});const n="access_token";function o(){return localStorage.getItem(n)}function a(e){return localStorage.setItem(n,e)}function i(){return localStorage.removeItem(n)}function s(e,t,r){o()?r():r("/")}function c(e,t,r){o()?r("/applications"):r()}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(p--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{95:"dcb9c6c6",146:"2062f67e",438:"d90eaa89",612:"c6869015",791:"070daa7e",894:"5ffa4ea8"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{95:"9fd531f0",612:"2c0cbb5f"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="Overclocked-Assignment:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),p=0;p<l.length;p++){var u=l[p];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={95:1,612:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var p=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=globalThis["webpackChunkOverclocked_Assignment"]=globalThis["webpackChunkOverclocked_Assignment"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(5055)));n=r.O(n)})();