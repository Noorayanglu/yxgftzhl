import{f as e,h as a}from"./user-d5b37ce3.js";import{j as l}from"./index-05e5d501.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as n,i as r,Y as i,Z as m,ag as o,c as u,U as d,O as p,o as c,F as v,a7 as f,M as g,a as b,R as j,J as x,T as _,u as h,S as k,az as y,aA as w}from"./@vue-c5a747fc.js";import{_ as I}from"./index-9476871e.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const z=[{name:"灭",value:0},{name:"白",value:1},{name:"红",value:2},{name:"绿",value:3},{name:"蓝",value:4}],C=e=>(y("data-v-dc5f29cb"),e=e(),w(),e),E={class:"round"},V={class:"img-box img-mini-box"},A={key:0,src:"/static/png/hk1-47e6cb98.png",alt:""},D={key:1,src:"/static/png/hk2-b86b4ead.png",alt:""},F={key:2,src:"/static/png/hk3-cbbf1e79.png",alt:""},O={key:3,src:"/static/png/hk4-9ab61ea6.png",alt:""},R={class:"imgdata-box"},S=C((()=>b("div",{class:"imgdata-name"},"通信状态",-1))),U=C((()=>b("div",{class:"imgdata-name"},"数据更新时间",-1))),G={class:"imgdata-value"},H={class:"first-form"},J={class:"two-box"},M={class:"first-btn"},T=I(t({__name:"Index",setup(t){const y=n([]),w=n({}),I=z;n(!0);const C=n(null),T=n(2e3);r((()=>{B()})),i((()=>{q()}));const Y=n(),Z=m({mode:null}),q=()=>{clearInterval(C.value),C.value=null},B=()=>{e().then((e=>{w.value=e,y.value=l(w.value),y.value.map((e=>{let{"数据更新时间":a,"数据更新时间戳":s,"通信状态":t,...n}=e.value;return e.value=l(n),e})),y.value=K(y.value),q(),C.value=setInterval((()=>{B()}),T.value)})).catch((e=>{}))},K=e=>{let a=e;return a.map((e=>{switch(e.name){case"辅助电表":e.index=0,e.url="/src/assets/images/proj/hk1.png";break;case"一氧化碳":e.index=1,e.url="/src/assets/images/proj/hk2.png";break;case"除湿机":e.index=2,e.url="/src/assets/images/proj/hk3.png";break;case"DIDO":e.index=3,e.url="/src/assets/images/proj/hk4.png"}})),a.sort(((e,a)=>e.index-a.index)),a};return(e,l)=>{const t=o("el-col"),n=o("el-option"),r=o("el-select"),i=o("el-form-item"),m=o("el-button"),z=o("el-form"),C=o("el-row"),T=o("el-table-column"),q=o("el-table");return c(),u("div",E,[d(C,null,{default:p((()=>[(c(!0),u(v,null,f(y.value,(e=>(c(),g(t,{class:"col-box",xs:24,sm:12,key:e.index},{default:p((()=>[d(C,null,{default:p((()=>[d(t,{xs:24,sm:12},{default:p((()=>[b("div",V,[0==e.index?(c(),u("img",A)):j("",!0),1==e.index?(c(),u("img",D)):j("",!0),2==e.index?(c(),u("img",F)):j("",!0),3==e.index?(c(),u("img",O)):j("",!0)]),b("div",R,[d(C,null,{default:p((()=>[w.value[e.name]["通信状态"]?(c(),g(t,{key:0,span:10},{default:p((()=>[S])),_:1})):j("",!0),d(t,{span:3==e.index?24:14},{default:p((()=>[U])),_:2},1032,["span"]),d(t,{span:10},{default:p((()=>[b("div",{class:"imgdata-value",style:x("color:".concat("正常"==w.value[e.name]["通信状态"]?"#67C23A":"#F56C6C",";"))},_(w.value[e.name]["通信状态"]?w.value[e.name]["通信状态"]:""),5)])),_:2},1024),d(t,{span:3==e.index?24:14},{default:p((()=>[b("div",G,_(w.value[e.name]["数据更新时间戳"]?w.value[e.name]["数据更新时间戳"]:w.value[e.name]["数据更新时间"]?w.value[e.name]["数据更新时间"]:""),1)])),_:2},1032,["span"]),3==e.index?(c(),g(t,{key:1,span:24},{default:p((()=>[b("div",null,[d(z,{ref_for:!0,ref_key:"formRef",ref:Y,model:Z,size:"default"},{default:p((()=>[b("div",H,[b("div",J,[d(i,{label:"状态灯",prop:"mode"},{default:p((()=>[d(r,{modelValue:Z.mode,"onUpdate:modelValue":l[0]||(l[0]=e=>Z.mode=e),placeholder:"状态灯"},{default:p((()=>[(c(!0),u(v,null,f(h(I),((e,a)=>(c(),g(n,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue"])])),_:2},1024)]),b("div",M,[d(m,{class:"btn",type:"primary",onClick:l[1]||(l[1]=e=>(e=>{if(!e)return;let l={mode:Z.mode};a(l).then((e=>{e?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((e=>{s.msgError("操作失败")}))})(Y.value))},{default:p((()=>[k("设置")])),_:1})])])])),_:2},1032,["model"])])])),_:2},1024)):j("",!0)])),_:2},1024)])])),_:2},1024),d(t,{xs:24,sm:12},{default:p((()=>[d(q,{data:e.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:p((()=>[d(T,{prop:"name",label:"数据名称",align:"center"}),d(T,{prop:"value",label:"数值",align:"center"}),d(T,{prop:"unit",label:"单位",align:"center",width:"50"})])),_:2},1032,["data"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-dc5f29cb"]]);export{T as default};
