import{u as e,b as l}from"./vue-router-d0599d8d.js";import{u as a,_ as s}from"./index-a4af0a18.js";import{d as t,e as n,j as i,f as o,ag as r,c as u,U as d,O as c,o as p,M as m,u as f,F as v,a7 as g,T as y,R as x,a as _,J as k,S as h}from"./@vue-9d7d117a.js";import"./nprogress-867e68f1.js";import"./dayjs-9ee440cb.js";import"./pinia-c89a5039.js";import"./element-plus-1abe4ec3.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-a55f440f.js";import"./@element-plus-9c1020e5.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";/* empty css                    */const j={class:"admin"},b={key:0,class:"logo"},w={key:0},F={key:1,class:"logo"},z={key:0,style:{"padding-left":"16px"}},C={style:{"padding-left":"16px"}},T={key:0,style:{"padding-left":"16px"}},E={class:"display-flex ai-center jc-space-between flex-1 pl-20"},I={class:"display-flex ai-center ac-center"},L=["onClick"],M={class:"display-flex ai-center user"},$={class:"nav-menu-item"},B={class:"display-flex ai-center"},J={class:"el-dropdown-link cursor-pointer ml-6 fs-14"},N={style:{background:"#fff",padding:"20px"}},O=s(t({__name:"Index",setup(s){const t=a(),O=e();l();const P=n(!1),R=n(!0),S=i((()=>t.menu||[])),U=i((()=>t.breadcrumb||[]));o(P,(e=>{R.value=!R.value,setTimeout((()=>{R.value=!R.value}),100)}));const W=()=>{t.logout()};return(e,l)=>{const a=r("el-image"),s=r("svg-icon"),t=r("el-menu-item"),n=r("el-menu-item-group"),i=r("el-sub-menu"),o=r("el-menu"),q=r("el-aside"),A=r("Expand"),D=r("Fold"),G=r("el-icon"),H=r("el-breadcrumb-item"),K=r("el-breadcrumb"),Q=r("Monitor"),V=r("router-link"),X=r("arrow-down"),Y=r("el-dropdown-item"),Z=r("el-dropdown-menu"),ee=r("el-dropdown"),le=r("el-header"),ae=r("router-view"),se=r("el-scrollbar"),te=r("el-main"),ne=r("el-container");return p(),u("div",j,[d(ne,{class:"height-percent-100"},{default:c((()=>[d(q,{width:P.value?"65px":"220px",class:"aside scrollbar"},{default:c((()=>[R.value?(p(),u("div",b,[P.value?(p(),m(a,{key:1,style:{width:"55px"},src:f("/static/png/logonew-08aa3866.png")},null,8,["src"])):(p(),u("span",w,"CTN WEB"))])):(p(),u("div",F)),d(o,{"default-active":e.$route.path,collapse:P.value,class:"menu","background-color":"#304156","text-color":"#fff",router:"","collapse-transition":!1,"active-text-color":"#1990FF"},{default:c((()=>[(p(!0),u(v,null,g(S.value,((e,l)=>(p(),u(v,null,[e.childList.length?(p(),m(i,{key:l,index:e.url},{title:c((()=>[d(s,{name:e.icon},null,8,["name"]),P.value?x("",!0):(p(),u("span",z,y(e.name),1))])),default:c((()=>[d(n,null,{default:c((()=>[(p(!0),u(v,null,g(e.childList,((e,l)=>(p(),m(t,{key:l,index:e.url},{title:c((()=>[d(s,{name:e.icon},null,8,["name"]),_("span",C,y(e.name),1)])),_:2},1032,["index"])))),128))])),_:2},1024)])),_:2},1032,["index"])):(p(),m(t,{key:l+1,index:e.url},{default:c((()=>[d(s,{name:e.icon},null,8,["name"]),P.value?x("",!0):(p(),u("div",T,y(e.name),1))])),_:2},1032,["index"]))],64)))),256))])),_:1},8,["default-active","collapse"])])),_:1},8,["width"]),d(ne,null,{default:c((()=>[d(le,{class:"display-flex fd-column jc-center header"},{default:c((()=>[_("div",E,[_("div",I,[d(G,{class:"mr-12",size:24,onClick:l[0]||(l[0]=e=>P.value=!P.value)},{default:c((()=>[P.value?(p(),m(A,{key:0})):(p(),m(D,{key:1}))])),_:1}),d(K,{"separator-class":"el-icon-arrow-right"},{default:c((()=>[(p(!0),u(v,null,g(U.value,((e,l)=>(p(),m(H,{key:l},{default:c((()=>[_("span",{class:"cursor-pointer",style:k({color:U.value.length-1===l?"#1990FF":"#999999"}),onClick:e=>(e=>{e+1!==U.value.length&&0!==e&&O.go(e+1-U.value.length)})(l)},y(e),13,L)])),_:2},1024)))),128))])),_:1})]),_("div",M,[d(V,{class:"h100",target:"_blank",title:"首页",to:"/"},{default:c((()=>[_("div",$,[d(G,{color:"#000",style:{"font-size":"20px"}},{default:c((()=>[d(Q)])),_:1})])])),_:1}),d(ee,{size:"large",trigger:"click"},{dropdown:c((()=>[d(Z,null,{default:c((()=>[d(Y,{onClick:W},{default:c((()=>[h(" 退出登录 ")])),_:1})])),_:1})])),default:c((()=>[_("div",B,[_("span",J,[h(" 管理员"),d(G,{class:"el-icon--right"},{default:c((()=>[d(X)])),_:1})])])])),_:1})])])])),_:1}),d(te,{class:"scrollbar-y",style:{height:"calc(100vh - 140px)",background:"#f4f4f4"}},{default:c((()=>[d(se,null,{default:c((()=>[_("div",N,[(p(),m(ae,{key:e.$route.fullPath}))])])),_:1})])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-be73e84f"]]);export{O as default};