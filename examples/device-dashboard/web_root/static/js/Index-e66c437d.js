import{g as a,j as e,a as l,b as t}from"./index-557a839d.js";import{g as n}from"./utils-e10d97cb.js";import{d as i,e as s,i as o,Y as u,ag as c,c as v,a as d,F as r,a7 as m,u as p,U as j,O as b,az as y,aA as g,o as x,J as f,T as h,S as k,I as w}from"./@vue-c5a747fc.js";import{_ as A}from"./index-c0b554e0.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./feedback-551b2bff.js";import"./element-plus-a5ae5727.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const C=[{name:"全程电终端",coordinate:[66,4],data:[{name:"储能状态",unit:""},{name:"储能功率",unit:"kW"},{name:"储能SOC",unit:"%"}]},{name:"1#",coordinate:[62,22],data:[{name:"储能状态",unit:""},{name:"储能功率",unit:"kW"},{name:"储能SOC",unit:"%"}]},{name:"光伏",coordinate:[56,64],data:[{name:"光伏功率",unit:"kW"}]},{name:"负载",coordinate:[56,49],data:[{name:"负载功率",unit:"kW"}]},{name:"关口表",coordinate:[56,78],data:[{name:"关口表功率",unit:"kW"}]}],B=[{name:"AC液冷空调",coordinate:[25,7],coordinateline:[32,21],direction:1},{name:"PCS变流器",coordinate:[55,6],coordinateline:[62,20],direction:2},{name:"BMS电池管理系统",coordinate:[56,77],coordinateline:[76,56],direction:3}],I=a=>(y("data-v-3dccc955"),a=a(),g(),a),_={class:"dashboard"},z=I((()=>d("div",{class:"bg-box"},[d("img",{src:"/static/jpg/bgQcd-392a3536.jpg",alt:""})],-1))),S={class:"tip-name"},W={class:"tip-value-box"},O={class:"ctndata-box-box"},T=I((()=>d("div",{class:"ctndata-img"},[d("img",{src:"/static/png/ctn-0d0c1454.png",alt:""})],-1))),V={class:"ctndata-box"},G={class:"ctn-name"},U={class:"ctn-value-box"},F=[I((()=>d("div",{class:"line-level"},null,-1)))],J=A(i({__name:"Index",setup(i){const y=C,g=B,A=s({}),I=s([]),J=s(!1),M=s({}),P=s({}),Q=s([]),Y=s({}),q=s({}),D=s([]),E=s({}),H=s({}),K=s([]),L=s(null),N=s(2e3);o((()=>{})),u((()=>{R()}));const R=()=>{clearInterval(L.value),L.value=null},X=async()=>{J.value=!0,await $(),R(),L.value=setInterval((()=>{$()}),N.value)},Z=a=>{J.value=!1,R()},$=async()=>{I.value=[];let a=await la(),e=await ea(),l=await aa();I.value.push(l,a,e)},aa=async()=>await a().then((a=>(E.value=a,H.value={"工作模式":E.value["工作模式"],"出水温度":E.value["出水温度"],"回水温度":E.value["回水温度"],"出水压力":E.value["出水压力"],"回水压力":E.value["回水压力"]},K.value=e(H.value),K.value.map((a=>(a.value=n(a.value),a))),K.value))).catch((a=>{})),ea=async()=>await l().then((a=>(M.value=a,P.value={"总电压":M.value["总电压"],"总电流":M.value["总电流"],"最高电芯电压":M.value["最高电芯电压"],"平均电芯电压":M.value["平均电芯电压"],"最低电芯电压":M.value["最低电芯电压"],"最高电芯温度":M.value["最高电芯温度"],"平均电芯温度":M.value["平均电芯温度"],"最低电芯温度":M.value["最低电芯温度"]},Q.value=e(P.value),Q.value.map((a=>(a.value=n(a.value),a))),Q.value))).catch((a=>{})),la=async()=>await t().then((a=>(Y.value=a,q.value={"有功功率":Y.value["有功功率"],"IGBT温度":Y.value["IGBT温度"],"AB线电压":Y.value["AB线电压"],"BC线电压":Y.value["BC线电压"],"CA线电压":Y.value["CA线电压"]},D.value=e(q.value),D.value.map((a=>(a.value=n(a.value),a))),D.value))).catch((a=>{}));return(a,e)=>{const l=c("el-drawer");return x(),v("div",_,[z,d("div",null,[(x(!0),v(r,null,m(p(y),((a,e)=>(x(),v("div",{key:e,class:"tip-box",style:f("top: ".concat(a.coordinate[0],"%; left: ").concat(a.coordinate[1],"%;")),onClick:X},[d("div",S,h(a.name),1),d("div",W,[(x(!0),v(r,null,m(a.data,((a,e)=>(x(),v("div",{key:e+"A",class:"tip-value"},[d("span",null,h(A.value?A.value[a.name]:""),1),k(" "+h(a.unit),1)])))),128))])],4)))),128))]),j(l,{modelValue:J.value,"onUpdate:modelValue":e[0]||(e[0]=a=>J.value=a),title:"1#",direction:"rtl","before-close":Z,size:"820"},{default:b((()=>[d("div",O,[T,d("div",V,[(x(!0),v(r,null,m(I.value,((a,e)=>(x(),v("div",{key:e,class:"ctn-box",style:f("top: ".concat(p(g)[e].coordinate[0],"%; left: ").concat(p(g)[e].coordinate[1],"%;"))},[d("div",G,h(p(g)[e].name),1),d("div",U,[(x(!0),v(r,null,m(a,((a,e)=>(x(),v("div",{key:e+"A",class:"ctn-value"},[k(h(a.name)+"： ",1),d("span",null,h(a.value),1),k(" "+h(a.unit),1)])))),128))])],4)))),128)),(x(!0),v(r,null,m(p(g),((a,e)=>(x(),v("div",{key:e,class:w(["line-box","line-direction"+a.direction]),style:f("top: ".concat(a.coordinateline[0],"%; left: ").concat(a.coordinateline[1],"%;"))},F,6)))),128))])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-3dccc955"]]);export{J as default};
