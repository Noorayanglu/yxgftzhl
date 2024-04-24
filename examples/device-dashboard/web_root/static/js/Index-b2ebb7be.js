import{d as e,Z as l,ag as a,c as t,U as u,O as n,o as s,F as d,a7 as o,M as i,u as r,a as m,S as p,T as c,az as f,aA as v}from"./@vue-9d7d117a.js";import{_ as h}from"./index-9b4b676d.js";import"./vue-router-d0599d8d.js";import"./nprogress-867e68f1.js";import"./dayjs-9ee440cb.js";import"./pinia-c89a5039.js";import"./element-plus-1abe4ec3.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-a55f440f.js";import"./@element-plus-9c1020e5.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";/* empty css                    */const _=[{name:"CC Current",unit:"A",key:"current",defaultVal:"140.000"},{name:"Charge Cell Voltage",unit:"V",key:"charge",defaultVal:"3.650"},{name:"Discharge Cell Voltage",unit:"V",key:"discharge",defaultVal:"2.500"},{name:"OCP",unit:"A",key:"ocp",defaultVal:"150.000"},{name:"Vh",unit:"V",key:"vh",defaultVal:"4.126"},{name:"Vl",unit:"V",key:"vl",defaultVal:"1.949"},{name:"OVP",unit:"V",key:"ovp",defaultVal:"4.128"},{name:"UVP",unit:"V",key:"uvp",defaultVal:"1.930"},{name:"Charge Idle Time",unit:"Min",key:"chargeIdleTime",defaultVal:"30"},{name:"Discharge Idle Time",unit:"Min",key:"dischargeIdleTime",defaultVal:"30"},{name:"Charge Time",unit:"",key:"chargeTime",defaultVal:"NA"},{name:"Discharge Time",unit:"",key:"dischargeTime",defaultVal:"NA"}],y=[{name:"None",value:0},{name:"CC Charge To Full",value:1},{name:"CC Discharge To Empty",value:2},{name:"CC Cycle",value:3},{name:"CC Pulse Charge To Full",value:4},{name:"CC Pulse Discharge To Empty",value:5}],V=e=>(f("data-v-f85e4f78"),e=e(),v(),e),g={class:"control"},C={class:"input-box"},b=V((()=>m("div",{class:"card-header"},[m("span",null,"State Machine")],-1))),k=V((()=>m("div",{class:""},null,-1))),j=V((()=>m("div",{class:""},null,-1))),T=V((()=>m("div",{class:""},null,-1))),I=V((()=>m("div",{class:""},[m("span",null,"0.000"),p(" s")],-1))),M=V((()=>m("div",{class:""},[m("span",null,"99.000"),p(" s")],-1))),S=V((()=>m("div",{class:""},[m("span",null,"0.000"),p(" s")],-1))),x=V((()=>m("div",{class:""},[m("span",null,"0.000")],-1))),w=V((()=>m("div",{class:"card-header"},[m("span",null,"Manual")],-1))),A=h(e({__name:"Index",setup(e){const f=_,v=y,h=l({workMode:null,current:null,charge:null,discharge:null,ocp:null,vh:null,vl:null,ovp:null,uvp:null,chargeIdleTime:null,dischargeIdleTime:null,chargeTime:null,dischargeTime:null});return(e,l)=>{const _=a("el-option"),y=a("el-select"),V=a("el-form-item"),A=a("el-input"),D=a("el-button"),P=a("el-form"),R=a("el-col"),U=a("el-row"),E=a("el-card");return s(),t("div",g,[u(U,null,{default:n((()=>[u(R,{span:10},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(V,{label:"Work Mode",prop:"nopower"},{default:n((()=>[u(y,{modelValue:h.workMode,"onUpdate:modelValue":l[0]||(l[0]=e=>h.workMode=e)},{default:n((()=>[(s(!0),t(d,null,o(r(v),((e,l)=>(s(),i(_,{key:l,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(s(!0),t(d,null,o(r(f),((a,t)=>(s(),i(V,{key:t,label:a.name,prop:a.key},{default:n((()=>[m("div",C,[u(A,{modelValue:h[a.key],"onUpdate:modelValue":e=>h[a.key]=e,type:"number"},{prepend:n((()=>[p(c(a.defaultVal),1)])),append:n((()=>[p(c(a.unit),1)])),_:2},1032,["modelValue","onUpdate:modelValue"]),m("div",null,[u(D,{class:"btn",type:"primary",onClick:l[1]||(l[1]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("设置")])),_:1})])])])),_:2},1032,["label","prop"])))),128))])),_:1},8,["model"])])),_:1}),u(R,{span:7},{default:n((()=>[u(E,{class:"box-card"},{header:n((()=>[b])),default:n((()=>[m("div",null,[u(U,null,{default:n((()=>[u(R,{span:16},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(V,{label:"State："},{default:n((()=>[k])),_:1}),u(V,{label:"Step："},{default:n((()=>[j])),_:1}),u(V,{label:"Error："},{default:n((()=>[T])),_:1})])),_:1},8,["model"])])),_:1}),u(R,{span:8},{default:n((()=>[u(D,{type:"primary",onClick:l[2]||(l[2]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Start")])),_:1})])),_:1}),u(R,{span:16},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(V,{label:"Max Intv："},{default:n((()=>[I])),_:1}),u(V,{label:"Min Intv："},{default:n((()=>[M])),_:1}),u(V,{label:"Avg Intv："},{default:n((()=>[S])),_:1}),u(V,{label:"Tot Cnt："},{default:n((()=>[x])),_:1})])),_:1},8,["model"])])),_:1}),u(R,{span:8},{default:n((()=>[u(D,{type:"primary",onClick:l[3]||(l[3]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Reset Statis")])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1}),u(R,{span:7},{default:n((()=>[u(E,{class:"box-card"},{header:n((()=>[w])),default:n((()=>[m("div",null,[u(D,{type:"primary",onClick:l[4]||(l[4]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Emergency Stop")])),_:1})])])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-f85e4f78"]]);export{A as default};
