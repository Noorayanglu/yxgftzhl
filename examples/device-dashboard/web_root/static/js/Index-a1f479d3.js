import{a,j as e}from"./index-07633a3a.js";import{g as l}from"./utils-e10d97cb.js";import{d as s,e as t,i,Y as o,ag as n,c as r,U as u,O as m,o as p,a as d,J as c,T as v,az as j,aA as g}from"./@vue-c5a747fc.js";import{_ as f}from"./index-f7afd5fb.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./feedback-551b2bff.js";import"./element-plus-a5ae5727.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const b=a=>(j("data-v-89315681"),a=a(),g(),a),_={class:"bms"},h={class:"img-data"},x=b((()=>d("div",{class:"img-box"},[d("img",{src:"/static/png/bms-76ab02d9.png",alt:""})],-1))),w={class:"imgdata-box"},y=b((()=>d("div",{class:"imgdata-name"},"通信状态",-1))),z=b((()=>d("div",{class:"imgdata-name"},"数据更新时间",-1))),I={class:"imgdata-value"},A={class:"tab-box"},C=f(s({__name:"Index",setup(s){const j=t([]),g=t({});t(!0),t(null),t(null),t(null),t(null),t([]);const f=t(""),b=t(""),C=t(null),k=t(2e3);i((()=>{F()})),o((()=>{B()}));const B=()=>{clearInterval(C.value),C.value=null},F=()=>{a().then((a=>{const{"数据更新时间":s,"通信状态":t,...i}=a;g.value=i,f.value=s,b.value=t,j.value=e(g.value),j.value.map((a=>(a.value=l(a.value),a))),B(),C.value=setInterval((()=>{F()}),k.value)})).catch((a=>{}))};return(a,e)=>{const l=n("el-col"),s=n("el-row"),t=n("el-table-column"),i=n("el-table");return p(),r("div",_,[u(s,null,{default:m((()=>[u(l,{span:12},{default:m((()=>[d("div",h,[x,d("div",w,[u(s,null,{default:m((()=>[u(l,{span:10},{default:m((()=>[y])),_:1}),u(l,{span:14},{default:m((()=>[z])),_:1}),u(l,{span:10},{default:m((()=>[d("div",{class:"imgdata-value",style:c("color:".concat("正常"==b.value?"#67C23A":"#F56C6C",";"))},v(b.value),5)])),_:1}),u(l,{span:14},{default:m((()=>[d("div",I,v(f.value),1)])),_:1})])),_:1})])])])),_:1}),u(l,{span:12},{default:m((()=>[d("div",A,[u(i,{data:j.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:m((()=>[u(t,{type:"index",width:"60",align:"center",label:"序号"}),u(t,{prop:"name",label:"数据名称",align:"center"}),u(t,{prop:"value",label:"数值",align:"center"}),u(t,{prop:"unit",label:"单位",align:"center",width:"80"})])),_:1},8,["data"])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-89315681"]]);export{C as default};
