function e(){import.meta.url,import("_").catch((()=>1))}import{ag as t,o as n,M as o,U as r,ay as a,d as i,j as s,c as m,a as c,K as l,as as p}from"./@vue-c5a747fc.js";import{c as u,a as d}from"./vue-router-641e505b.js";import{d as h,c as _}from"./pinia-801b3705.js";import{i as f,z as g}from"./element-plus-a5ae5727.js";/* empty css                    */import{Q as E}from"./@element-plus-388117bf.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-9ee440cb.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const b=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const I=b({},[["render",function(e,i){const s=t("router-view");return n(),o(a,null,[r(s)],1024)}]]),y={},v=function(e,t,n){if(!t||0===t.length)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in y)return;y[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!n)for(let n=o.length-1;n>=0;n--){const r=o[n];if(r.href===e&&(!t||"stylesheet"===r.rel))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(r)))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((t,n)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>n(new Error("Unable to preload CSS for ".concat(e)))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},L={key:"like_admin_",set(e,t,n){e=this.getKey(e);let o={expire:n?this.time()+n:"",value:t};"object"==typeof o&&(o=JSON.stringify(o));try{window.localStorage.setItem(e,o)}catch(r){return null}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return null;const{value:n,expire:o}=JSON.parse(t);return o&&o<this.time()?(window.localStorage.removeItem(e),null):n}catch(t){return null}},time:()=>Math.round((new Date).getTime()/1e3),remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},j="token";function O(){return L.get(j)}function P(){S().resetState(),L.remove(j),function(){N.removeRoute(D);const{routes:e}=S();e.forEach((e=>{const t=e.name;t&&N.hasRoute(t)&&N.removeRoute(t)}))}()}var R=(e=>(e.LOGIN="/login",e.ERROR_403="/403",e.ERROR_404="/:pathMatch(.*)*",e.INDEX="/",e))(R||{});const w=[{icon:"shouye",name:"首页",url:"/admin/dashboard",paths:"admin/dashboard",childList:[]},{icon:"pcs",name:"PCS变流器",url:"/admin/pcs",paths:"admin/pcs",childList:[]},{icon:"bms",name:"BMS电池管理",url:"/admin/bms",paths:"admin/bms",childList:[]},{icon:"cooling",name:"温控系统",url:"/admin/ac",paths:"admin/ac",childList:[]},{icon:"xiaofang",name:"消防系统",url:"/admin/fe",paths:"admin/fe",childList:[]},{icon:"user-light",name:"环控系统",url:"/admin/env",paths:"admin/env",childList:[]},{icon:"online",name:"通信系统",url:"/admin/comm",paths:"admin/comm",childList:[]},{icon:"monitor",name:"控制系统",url:"/admin/control",paths:"admin/control",childList:[]},{icon:"setup",name:"设置",url:"/admin/setup",paths:"admin/setup",childList:[]},{icon:"upgrade",name:"固件升级",url:"/admin/upgrade",paths:"admin/upgrade",childList:[]},{icon:"event",name:"日志",url:"/admin/log",paths:"admin/log",childList:[]}],S=h({id:"user",state:()=>({token:O()||"",userInfo:{},routes:[],breadcrumb:[],menu:[],perms:[]}),getters:{},actions:{resetState(){this.token="",this.userInfo={},this.breadcrumb=[],this.perms=[]},login(e){var t;this.token=e.token,t=e,L.set(j,t.token,86400)},logout:()=>new Promise(((e,t)=>{N.push(R.LOGIN),P()})),getUserInfo(){},getMenu(){return new Promise(((e,t)=>{const n=w;this.menu=n,this.routes=x(n),e(n)}))}}});var A=(e=>(e.CATALOGUE="M",e.MENU="C",e.BUTTON="A",e))(A||{});function T(e){return/^(https?:|mailto:|tel:)/.test(e)}function x(e,t=!0){return e.map((e=>{const n=function(e,t){const n={path:T(e.paths)?e.paths:t?"/".concat(e.paths):e.paths,name:Symbol(e.paths),meta:{hidden:!e.isShow,keepAlive:!!e.isCache,title:e.menuName,perms:e.perms,query:e.params,icon:e.menuIcon,type:e.menuType,activeMenu:e.selected}};switch(e.menuType){case A.CATALOGUE:n.component=t?LAYOUT:RouterView,e.children||(n.component=RouterView);break;case A.MENU:n.component=loadRouteView(e.component)}return n}(e,t);return null!=e.children&&e.children&&e.children.length&&(n.children=x(e.children,!1)),n}))}const k=[{path:"/",name:"App",redirect:"/login",component:I,children:[]},{path:"/admin",name:"Admin",meta:{title:"后台管理"},component:()=>v((()=>import("./Index-c36280e5.js")),["static/js/Index-c36280e5.js","static/js/vue-router-641e505b.js","static/js/@vue-c5a747fc.js","static/js/pinia-801b3705.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/Index-45705494.css","static/css/animate-cf768824.css"]),redirect:"/admin/dashboard",children:[{path:"dashboard",name:"首页",meta:{title:"首页",breadcrumb:["后台管理","首页"]},component:()=>v((()=>import("./Index-50f6d315.js")),["static/js/Index-50f6d315.js","static/js/dashboard-06d9dc70.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-7c665e1a.css","static/css/animate-cf768824.css"])},{path:"pcs",name:"PCS变流器",meta:{title:"PCS变流器",breadcrumb:["后台管理","PCS变流器"]},component:()=>v((()=>import("./Index-46e4f19b.js")),["static/js/Index-46e4f19b.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-30648378.css","static/css/animate-cf768824.css"])},{path:"bms",name:"BMS电池管理",meta:{title:"BMS电池管理",breadcrumb:["后台管理","BMS电池管理"]},component:()=>v((()=>import("./Index-2ace29be.js")),["static/js/Index-2ace29be.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-2bad6eec.css","static/css/animate-cf768824.css"])},{path:"ac",name:"温控系统",meta:{title:"温控系统",breadcrumb:["后台管理","温控系统"]},component:()=>v((()=>import("./Index-96f02753.js")),["static/js/Index-96f02753.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-55ebcfe2.css","static/css/animate-cf768824.css"])},{path:"fe",name:"消防系统",meta:{title:"消防系统",breadcrumb:["后台管理","消防系统"]},component:()=>v((()=>import("./Index-2f4fc8bc.js")),["static/js/Index-2f4fc8bc.js","static/js/@vue-c5a747fc.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/Index-11bc9680.css","static/css/animate-cf768824.css"])},{path:"env",name:"环控系统",meta:{title:"环控系统",breadcrumb:["后台管理","环控系统"]},component:()=>v((()=>import("./Index-b2a85b46.js")),["static/js/Index-b2a85b46.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-c9c2da6a.css","static/css/animate-cf768824.css"])},{path:"comm",name:"通信系统",meta:{title:"通信系统",breadcrumb:["后台管理","通信系统"]},component:()=>v((()=>import("./Index-28cbcaa0.js")),["static/js/Index-28cbcaa0.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-71905642.css","static/css/animate-cf768824.css"])},{path:"control",name:"控制系统",meta:{title:"控制系统",breadcrumb:["后台管理","控制系统"]},component:()=>v((()=>import("./Index-a6e37107.js")),["static/js/Index-a6e37107.js","static/js/dashboard-06d9dc70.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-e7928386.css","static/css/animate-cf768824.css"])},{path:"setup",name:"设置",meta:{title:"设置",breadcrumb:["后台管理","设置"]},component:()=>v((()=>import("./Index-2a55def6.js")),["static/js/Index-2a55def6.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-64e6cf2a.css","static/css/animate-cf768824.css"])},{path:"upgrade",name:"固件升级",meta:{title:"固件升级",breadcrumb:["后台管理","固件升级"]},component:()=>v((()=>import("./Index-1374deeb.js")),["static/js/Index-1374deeb.js","static/js/@vue-c5a747fc.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])},{path:"cooling",name:"液冷系统",meta:{title:"液冷系统",breadcrumb:["后台管理","液冷系统"]},component:()=>v((()=>import("./Index-96f02753.js")),["static/js/Index-96f02753.js","static/js/user-46eb5332.js","static/js/index-e7c036fa.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-5b55c11d.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/@vue-c5a747fc.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/index-63a3b593.js","static/js/utils-e10d97cb.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-55ebcfe2.css","static/css/animate-cf768824.css"])},{path:"log",name:"日志",meta:{title:"日志",breadcrumb:["后台管理","日志"]},component:()=>v((()=>import("./Index-b34caaa5.js")),["static/js/Index-b34caaa5.js","static/js/@vue-c5a747fc.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])}]},{path:"/:pathMatch(.*)*",name:"NotFound",meta:{title:"错误页面"},component:()=>v((()=>import("./NotFound-e9a2fbeb.js")),["static/js/NotFound-e9a2fbeb.js","static/js/@vue-c5a747fc.js","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])},{path:"/login",name:"Login",meta:{title:"登录"},component:()=>v((()=>import("./Index-9ff6b9cf.js")),["static/js/Index-9ff6b9cf.js","static/js/@vue-c5a747fc.js","static/js/feedback-551b2bff.js","static/js/element-plus-a5ae5727.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-90035fc5.js","static/js/@element-plus-388117bf.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-cf877c1f.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/vue-router-641e505b.js","static/js/pinia-801b3705.js","static/css/Index-91eeed9a.css","static/css/animate-cf768824.css"])}],D=Symbol();const N=u({history:d(),routes:k}),V=R.LOGIN;R.INDEX;const M=[R.LOGIN,R.ERROR_403];N.beforeEach((async(e,t,n)=>{document.title=e.meta.title+" - 全程电";const o=S();if(await o.getMenu(),o.routes,M.includes(e.path))n();else if(o.token)try{await o.getMenu();o.routes;n()}catch(r){P(),n({path:V,query:{redirect:e.fullPath}})}else n({path:V,query:{redirect:e.fullPath}})})),N.afterEach((()=>{}));const C=["xlink:href"],U=b(i({__name:"svgIcon",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const t=e,o=s((()=>"#icon-".concat(t.name))),r=s((()=>t.name?"svg-icon icon-".concat(t.name):"svg-icon"));return(t,a)=>(n(),m("svg",l({class:r.value},t.$attrs,{style:{color:e.color}}),[c("use",{"xlink:href":o.value},null,8,C)],16))}}),[["__scopeId","data-v-8de19606"]]),q=p(I),z=_();for(const[B,G]of Object.entries(E))q.component(B,G);q.use(f,{locale:g,size:"small",zIndex:3e3}),q.use(N),q.use(z),q.component("SvgIcon",U),q.mount("#app");export{R as P,b as _,e as __vite_legacy_guard,P as c,O as g,N as r,S as u};