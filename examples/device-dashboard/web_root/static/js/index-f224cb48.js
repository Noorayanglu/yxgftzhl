function e(){import.meta.url,import("_").catch((()=>1))}import{ag as t,o as n,M as o,U as r,ay as a,d as i,j as s,c,a as m,K as l,as as u}from"./@vue-196ae313.js";import{c as p,a as d}from"./vue-router-4e843cc0.js";import{d as h,c as _}from"./pinia-b3224f58.js";import{i as f}from"./element-plus-6e6ac90a.js";/* empty css                    */import{Q as g}from"./@element-plus-e3505fc2.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-1a3a1657.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-9ee440cb.js";import"./async-validator-8d480e59.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const E=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n};const b=E({},[["render",function(e,i){const s=t("router-view");return n(),o(a,null,[r(s)],1024)}]]),I={},y=function(e,t,n){if(!t||0===t.length)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in I)return;I[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!n)for(let n=o.length-1;n>=0;n--){const r=o[n];if(r.href===e&&(!t||"stylesheet"===r.rel))return}else if(document.querySelector('link[href="'.concat(e,'"]').concat(r)))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((t,n)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>n(new Error("Unable to preload CSS for ".concat(e)))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},v={key:"like_admin_",set(e,t,n){e=this.getKey(e);let o={expire:n?this.time()+n:"",value:t};"object"==typeof o&&(o=JSON.stringify(o));try{window.localStorage.setItem(e,o)}catch(r){return null}},get(e){e=this.getKey(e);try{const t=window.localStorage.getItem(e);if(!t)return null;const{value:n,expire:o}=JSON.parse(t);return o&&o<this.time()?(window.localStorage.removeItem(e),null):n}catch(t){return null}},time:()=>Math.round((new Date).getTime()/1e3),remove(e){e=this.getKey(e),window.localStorage.removeItem(e)},getKey(e){return this.key+e}},L="token";function j(){return v.get(L)}function O(){w().resetState(),v.remove(L),function(){D.removeRoute(k);const{routes:e}=w();e.forEach((e=>{console.log("route ==>",e);const t=e.name;t&&D.hasRoute(t)&&D.removeRoute(t)}))}()}var P=(e=>(e.LOGIN="/login",e.ERROR_403="/403",e.ERROR_404="/:pathMatch(.*)*",e.INDEX="/",e))(P||{});const R=[{icon:"shouye",name:"首页",url:"/admin/dashboard",paths:"admin/dashboard",childList:[]},{icon:"pcs",name:"PCS变流器",url:"/admin/pcs",paths:"admin/pcs",childList:[]},{icon:"bms",name:"BMS电池管理",url:"/admin/bms",paths:"admin/bms",childList:[]},{icon:"cooling",name:"温控系统",url:"/admin/ac",paths:"admin/ac",childList:[]},{icon:"xiaofang",name:"消防系统",url:"/admin/fe",paths:"admin/fe",childList:[]},{icon:"user-light",name:"环控系统",url:"/admin/env",paths:"admin/env",childList:[]},{icon:"online",name:"通信系统",url:"/admin/comm",paths:"admin/comm",childList:[]},{icon:"monitor",name:"控制系统",url:"/admin/control",paths:"admin/control",childList:[]},{icon:"setup",name:"参数配置",url:"/admin/setup",paths:"admin/setup",childList:[]},{icon:"upgrade",name:"固件升级",url:"/admin/upgrade",paths:"admin/upgrade",childList:[]},{icon:"event",name:"日志",url:"/admin/log",paths:"admin/log",childList:[]}],w=h({id:"user",state:()=>({token:j()||"",userInfo:{},routes:[],breadcrumb:[],menu:[],perms:[]}),getters:{},actions:{resetState(){this.token="",this.userInfo={},this.breadcrumb=[],this.perms=[]},login(e){var t;console.log("store --- set token"),this.token=e.token,t=e,v.set(L,t.token,86400)},logout:()=>new Promise(((e,t)=>{D.push(P.LOGIN),O()})),getUserInfo(){},getMenu(){return new Promise(((e,t)=>{const n=R;this.menu=n,this.routes=T(n),e(n)}))}}});var A=(e=>(e.CATALOGUE="M",e.MENU="C",e.BUTTON="A",e))(A||{});function S(e){return/^(https?:|mailto:|tel:)/.test(e)}function T(e,t=!0){return e.map((e=>{const n=function(e,t){const n={path:S(e.paths)?e.paths:t?"/".concat(e.paths):e.paths,name:Symbol(e.paths),meta:{hidden:!e.isShow,keepAlive:!!e.isCache,title:e.menuName,perms:e.perms,query:e.params,icon:e.menuIcon,type:e.menuType,activeMenu:e.selected}};switch(e.menuType){case A.CATALOGUE:n.component=t?LAYOUT:RouterView,e.children||(n.component=RouterView);break;case A.MENU:n.component=loadRouteView(e.component)}return n}(e,t);return null!=e.children&&e.children&&e.children.length&&(n.children=T(e.children,!1)),n}))}const x=[{path:"/",name:"App",redirect:"/login",component:b,children:[]},{path:"/admin",name:"Admin",meta:{title:"后台管理"},component:()=>y((()=>import("./Index-dd1e1e28.js")),["static/js/Index-dd1e1e28.js","static/js/vue-router-4e843cc0.js","static/js/@vue-196ae313.js","static/js/pinia-b3224f58.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/Index-45705494.css","static/css/animate-cf768824.css"]),redirect:"/admin/dashboard",children:[{path:"dashboard",name:"首页",meta:{title:"首页",breadcrumb:["后台管理","首页"]},component:()=>y((()=>import("./Index-e10d30f0.js")),["static/js/Index-e10d30f0.js","static/js/dashboard-06d9dc70.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-7c665e1a.css","static/css/animate-cf768824.css"])},{path:"pcs",name:"PCS变流器",meta:{title:"PCS变流器",breadcrumb:["后台管理","PCS变流器"]},component:()=>y((()=>import("./Index-4912bd38.js")),["static/js/Index-4912bd38.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-a190f0dc.css","static/css/animate-cf768824.css"])},{path:"bms",name:"BMS电池管理",meta:{title:"BMS电池管理",breadcrumb:["后台管理","BMS电池管理"]},component:()=>y((()=>import("./Index-c0cecad8.js")),["static/js/Index-c0cecad8.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-2bad6eec.css","static/css/animate-cf768824.css"])},{path:"ac",name:"温控系统",meta:{title:"温控系统",breadcrumb:["后台管理","温控系统"]},component:()=>y((()=>import("./Index-0094cfc3.js")),["static/js/Index-0094cfc3.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-7f3610ea.css","static/css/animate-cf768824.css"])},{path:"fe",name:"消防系统",meta:{title:"消防系统",breadcrumb:["后台管理","消防系统"]},component:()=>y((()=>import("./Index-e848d37f.js")),["static/js/Index-e848d37f.js","static/js/@vue-196ae313.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/Index-11bc9680.css","static/css/animate-cf768824.css"])},{path:"env",name:"环控系统",meta:{title:"环控系统",breadcrumb:["后台管理","环控系统"]},component:()=>y((()=>import("./Index-c62dd40b.js")),["static/js/Index-c62dd40b.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-c9c2da6a.css","static/css/animate-cf768824.css"])},{path:"comm",name:"通信系统",meta:{title:"通信系统",breadcrumb:["后台管理","通信系统"]},component:()=>y((()=>import("./Index-d32f76cb.js")),["static/js/Index-d32f76cb.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-42283ec2.css","static/css/animate-cf768824.css"])},{path:"control",name:"控制系统",meta:{title:"控制系统",breadcrumb:["后台管理","控制系统"]},component:()=>y((()=>import("./Index-b52ffa5d.js")),["static/js/Index-b52ffa5d.js","static/js/dashboard-06d9dc70.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-fcf4a4b1.css","static/css/animate-cf768824.css"])},{path:"setup",name:"参数配置",meta:{title:"参数配置",breadcrumb:["后台管理","参数配置"]},component:()=>y((()=>import("./Index-cfb1ea36.js")),["static/js/Index-cfb1ea36.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/echarts-0d882400.js","static/js/zrender-07bca074.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-ee962178.css","static/css/animate-cf768824.css"])},{path:"upgrade",name:"固件升级",meta:{title:"固件升级",breadcrumb:["后台管理","固件升级"]},component:()=>y((()=>import("./Index-9e1ec23c.js")),["static/js/Index-9e1ec23c.js","static/js/@vue-196ae313.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])},{path:"cooling",name:"液冷系统",meta:{title:"液冷系统",breadcrumb:["后台管理","液冷系统"]},component:()=>y((()=>import("./Index-0094cfc3.js")),["static/js/Index-0094cfc3.js","static/js/user-a3c37878.js","static/js/index-914080cb.js","static/js/lodash-20cd73ca.js","static/js/dayjs-9ee440cb.js","static/js/axios-b81b67de.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/@vue-196ae313.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/utils-e10d97cb.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-7f3610ea.css","static/css/animate-cf768824.css"])},{path:"log",name:"日志",meta:{title:"日志",breadcrumb:["后台管理","日志"]},component:()=>y((()=>import("./Index-e9c4585e.js")),["static/js/Index-e9c4585e.js","static/js/@vue-196ae313.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])}]},{path:"/:pathMatch(.*)*",name:"NotFound",meta:{title:"错误页面"},component:()=>y((()=>import("./NotFound-7cb78a80.js")),["static/js/NotFound-7cb78a80.js","static/js/@vue-196ae313.js","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/css/animate-cf768824.css"])},{path:"/login",name:"Login",meta:{title:"登录"},component:()=>y((()=>import("./Index-91ce1f06.js")),["static/js/Index-91ce1f06.js","static/js/@vue-196ae313.js","static/js/feedback-16d8dab9.js","static/js/element-plus-6e6ac90a.js","static/js/lodash-es-fb3d0246.js","static/js/@vueuse-1a3a1657.js","static/js/@element-plus-e3505fc2.js","static/js/@popperjs-b78c3215.js","static/js/@ctrl-91de2ec7.js","static/js/dayjs-9ee440cb.js","static/js/async-validator-8d480e59.js","static/js/memoize-one-63ab667a.js","static/js/escape-html-92a447fa.js","static/js/normalize-wheel-es-3222b0a2.js","static/js/@floating-ui-9ca8b935.js","static/css/element-plus-8a0c7673.css","static/js/vue-router-4e843cc0.js","static/js/pinia-b3224f58.js","static/css/Index-bda35b66.css","static/css/animate-cf768824.css"])}],k=Symbol();const D=p({history:d(),routes:x}),N=P.LOGIN;P.INDEX;const V=[P.LOGIN,P.ERROR_403];D.beforeEach((async(e,t,n)=>{document.title=e.meta.title+" - 全程电";const o=w();if(await o.getMenu(),o.routes,console.log("router ==========",D,e.path),V.includes(e.path))n();else if(o.token)try{await o.getMenu();const e=o.routes;console.log("routes------",e),n()}catch(r){O(),n({path:N,query:{redirect:e.fullPath}})}else console.log("没有token"),n({path:N,query:{redirect:e.fullPath}})})),D.afterEach((()=>{}));const M=["xlink:href"],C=E(i({__name:"svgIcon",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(e){const t=e,o=s((()=>"#icon-".concat(t.name))),r=s((()=>t.name?"svg-icon icon-".concat(t.name):"svg-icon"));return(t,a)=>(n(),c("svg",l({class:r.value},t.$attrs,{style:{color:e.color}}),[m("use",{"xlink:href":o.value},null,8,M)],16))}}),[["__scopeId","data-v-8de19606"]]),U=u(b),q=_();for(const[B,G]of Object.entries(g))U.component(B,G);U.use(f,{size:"small",zIndex:3e3}),U.use(D),U.use(q),U.component("SvgIcon",C),U.mount("#app");export{P,E as _,e as __vite_legacy_guard,O as c,j as g,D as r,w as u};
