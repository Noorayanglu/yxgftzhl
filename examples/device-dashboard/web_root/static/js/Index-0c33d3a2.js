import{u as e,b as l}from"./vue-router-4e843cc0.js";import{u as a,_ as s}from"./index-e3834d05.js";import{d as t,e as n,j as o,f as i,ag as r,c as u,U as d,O as c,o as p,u as m,R as f,F as v,a7 as g,M as y,T as x,a as _,J as h,S as k}from"./@vue-196ae313.js";import"./pinia-b3224f58.js";import"./element-plus-6e6ac90a.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-1a3a1657.js";import"./@element-plus-e3505fc2.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-9ee440cb.js";import"./async-validator-8d480e59.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";/* empty css                    */const j={class:"admin"},b={key:0,class:"logo"},w={key:0,class:"logoname"},z={key:1,class:"logo"},C={key:0,style:{"padding-left":"16px"}},F={style:{"padding-left":"16px"}},I={key:0,style:{"padding-left":"16px"}},L={class:"display-flex ai-center jc-space-between flex-1 pl-20"},M={class:"display-flex ai-center ac-center"},T=["onClick"],$={class:"display-flex ai-center user"},E={class:"nav-menu-item"},J={class:"display-flex ai-center"},O={class:"el-dropdown-link cursor-pointer ml-6 fs-14"},P={style:{background:"#fff",padding:"20px"}},R=s(t({__name:"Index",setup(s){const t=a(),R=e();l(),console.log("users",t.menu);const S=n(!1),U=n(!0),q=o((()=>t.menu||[])),A=o((()=>t.breadcrumb||[]));i(S,(e=>{U.value=!U.value,setTimeout((()=>{U.value=!U.value}),100)}));const B=()=>{t.logout()};return(e,l)=>{const a=r("el-image"),s=r("svg-icon"),t=r("el-menu-item"),n=r("el-menu-item-group"),o=r("el-sub-menu"),i=r("el-menu"),D=r("el-aside"),G=r("Expand"),H=r("Fold"),K=r("el-icon"),N=r("el-breadcrumb-item"),Q=r("el-breadcrumb"),V=r("Monitor"),W=r("router-link"),X=r("arrow-down"),Y=r("el-dropdown-item"),Z=r("el-dropdown-menu"),ee=r("el-dropdown"),le=r("el-header"),ae=r("router-view"),se=r("el-scrollbar"),te=r("el-main"),ne=r("el-container");return p(),u("div",j,[d(ne,{class:"height-percent-100"},{default:c((()=>[d(D,{width:S.value?"65px":"220px",class:"aside scrollbar"},{default:c((()=>[U.value?(p(),u("div",b,[d(a,{style:{width:"30px"},src:m("/static/png/logonew-eaaa58aa.png")},null,8,["src"]),S.value?f("",!0):(p(),u("span",w,"全程电智慧终端"))])):(p(),u("div",z)),d(i,{"default-active":e.$route.path,collapse:S.value,class:"menu","background-color":"rgba(64, 158, 255, .8)","text-color":"rgba(255, 255, 255, .9)",router:"","collapse-transition":!1,"active-text-color":"#fff"},{default:c((()=>[(p(!0),u(v,null,g(q.value,((e,l)=>(p(),u(v,null,[e.childList.length?(p(),y(o,{key:l,index:e.url},{title:c((()=>[d(s,{name:e.icon},null,8,["name"]),S.value?f("",!0):(p(),u("span",C,x(e.name),1))])),default:c((()=>[d(n,null,{default:c((()=>[(p(!0),u(v,null,g(e.childList,((e,l)=>(p(),y(t,{key:l,index:e.url},{title:c((()=>[d(s,{name:e.icon},null,8,["name"]),_("span",F,x(e.name),1)])),_:2},1032,["index"])))),128))])),_:2},1024)])),_:2},1032,["index"])):(p(),y(t,{key:l+1,index:e.url},{default:c((()=>[d(s,{name:e.icon},null,8,["name"]),S.value?f("",!0):(p(),u("div",I,x(e.name),1))])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])),_:1},8,["width"]),d(ne,null,{default:c((()=>[d(le,{class:"display-flex fd-column jc-center header"},{default:c((()=>[_("div",L,[_("div",M,[d(K,{class:"mr-12",size:24,onClick:l[0]||(l[0]=e=>S.value=!S.value)},{default:c((()=>[S.value?(p(),y(G,{key:0})):(p(),y(H,{key:1}))])),_:1}),d(Q,{"separator-class":"el-icon-arrow-right"},{default:c((()=>[(p(!0),u(v,null,g(A.value,((e,l)=>(p(),y(N,{key:l},{default:c((()=>[_("span",{class:"cursor-pointer",style:h({color:A.value.length-1===l?"#1990FF":"#999999"}),onClick:e=>(e=>{e+1!==A.value.length&&0!==e&&R.go(e+1-A.value.length)})(l)},x(e),13,T)])),_:2},1024)))),128))])),_:1})]),_("div",$,[d(W,{class:"h100",target:"_blank",title:"首页",to:"/"},{default:c((()=>[_("div",E,[d(K,{color:"#000",style:{"font-size":"20px"}},{default:c((()=>[d(V)])),_:1})])])),_:1}),d(ee,{size:"large",trigger:"click"},{dropdown:c((()=>[d(Z,null,{default:c((()=>[d(Y,{onClick:B},{default:c((()=>[k(" 退出登录 ")])),_:1})])),_:1})])),default:c((()=>[_("div",J,[_("span",O,[k(" 管理员"),d(K,{class:"el-icon--right"},{default:c((()=>[d(X)])),_:1})])])])),_:1})])])])),_:1}),d(te,{class:"scrollbar-y",style:{height:"calc(100vh - 140px)",background:"#f4f4f4",padding:"0"}},{default:c((()=>[d(se,null,{default:c((()=>[_("div",P,[(p(),y(ae,{key:e.$route.fullPath}))])])),_:1})])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-de8c75cd"]]);export{R as default};
