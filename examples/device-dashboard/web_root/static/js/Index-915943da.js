import{d as e,Z as l,ag as a,c as t,U as u,O as n,o as d,F as s,a7 as i,M as o,u as r,a as m,S as p,T as c,az as f,aA as v}from"./@vue-c5a747fc.js";import{_ as h}from"./index-f9905c56.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";import"./element-plus-a5ae5727.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-9ee440cb.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";/* empty css                    */const _=[{name:"CC Current",unit:"A",key:"current",defaultVal:"140.000"},{name:"Charge Cell Voltage",unit:"V",key:"charge",defaultVal:"3.650"},{name:"Discharge Cell Voltage",unit:"V",key:"discharge",defaultVal:"2.500"},{name:"OCP",unit:"A",key:"ocp",defaultVal:"150.000"},{name:"Vh",unit:"V",key:"vh",defaultVal:"4.126"},{name:"Vl",unit:"V",key:"vl",defaultVal:"1.949"},{name:"OVP",unit:"V",key:"ovp",defaultVal:"4.128"},{name:"UVP",unit:"V",key:"uvp",defaultVal:"1.930"},{name:"Charge Idle Time",unit:"Min",key:"chargeIdleTime",defaultVal:"30"},{name:"Discharge Idle Time",unit:"Min",key:"dischargeIdleTime",defaultVal:"30"},{name:"Charge Time",unit:"",key:"chargeTime",defaultVal:"NA"},{name:"Discharge Time",unit:"",key:"dischargeTime",defaultVal:"NA"}],g=[{name:"None",value:0},{name:"CC Charge To Full",value:1},{name:"CC Discharge To Empty",value:2},{name:"CC Cycle",value:3},{name:"CC Pulse Charge To Full",value:4},{name:"CC Pulse Discharge To Empty",value:5}],y=e=>(f("data-v-1373c8c2"),e=e(),v(),e),V={class:"control"},C={class:"input-box"},b=y((()=>m("div",{class:"card-header"},[m("span",null,"State Machine")],-1))),k=y((()=>m("div",{class:""},null,-1))),j=y((()=>m("div",{class:""},null,-1))),T=y((()=>m("div",{class:""},null,-1))),I=y((()=>m("div",{class:""},[m("span",null,"0.000"),p(" s")],-1))),M=y((()=>m("div",{class:""},[m("span",null,"99.000"),p(" s")],-1))),S=y((()=>m("div",{class:""},[m("span",null,"0.000"),p(" s")],-1))),x=y((()=>m("div",{class:""},[m("span",null,"0.000")],-1))),w=y((()=>m("div",{class:"card-header"},[m("span",null,"Manual")],-1))),A=h(e({__name:"Index",setup(e){const f=_,v=g,h=l({workMode:null,current:null,charge:null,discharge:null,ocp:null,vh:null,vl:null,ovp:null,uvp:null,chargeIdleTime:null,dischargeIdleTime:null,chargeTime:null,dischargeTime:null});return(e,l)=>{const _=a("el-option"),g=a("el-select"),y=a("el-form-item"),A=a("el-input"),D=a("el-button"),P=a("el-form"),R=a("el-col"),U=a("el-row"),E=a("el-card");return d(),t("div",V,[u(U,null,{default:n((()=>[u(R,{lg:10,md:12},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(y,{label:"Work Mode",prop:"nopower"},{default:n((()=>[u(g,{modelValue:h.workMode,"onUpdate:modelValue":l[0]||(l[0]=e=>h.workMode=e)},{default:n((()=>[(d(!0),t(s,null,i(r(v),((e,l)=>(d(),o(_,{key:l,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),(d(!0),t(s,null,i(r(f),((a,t)=>(d(),o(y,{key:t,label:a.name,prop:a.key},{default:n((()=>[m("div",C,[u(A,{modelValue:h[a.key],"onUpdate:modelValue":e=>h[a.key]=e,type:"number"},{prepend:n((()=>[p(c(a.defaultVal),1)])),append:n((()=>[p(c(a.unit),1)])),_:2},1032,["modelValue","onUpdate:modelValue"]),m("div",null,[u(D,{class:"btn",type:"primary",onClick:l[1]||(l[1]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("设置")])),_:1})])])])),_:2},1032,["label","prop"])))),128))])),_:1},8,["model"])])),_:1}),u(R,{lg:7,md:12},{default:n((()=>[u(E,{class:"box-card"},{header:n((()=>[b])),default:n((()=>[m("div",null,[u(U,null,{default:n((()=>[u(R,{span:16},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(y,{label:"State："},{default:n((()=>[k])),_:1}),u(y,{label:"Step："},{default:n((()=>[j])),_:1}),u(y,{label:"Error："},{default:n((()=>[T])),_:1})])),_:1},8,["model"])])),_:1}),u(R,{span:8},{default:n((()=>[u(D,{type:"primary",onClick:l[2]||(l[2]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Start")])),_:1})])),_:1}),u(R,{span:16},{default:n((()=>[u(P,{model:h,"label-width":"120px"},{default:n((()=>[u(y,{label:"Max Intv："},{default:n((()=>[I])),_:1}),u(y,{label:"Min Intv："},{default:n((()=>[M])),_:1}),u(y,{label:"Avg Intv："},{default:n((()=>[S])),_:1}),u(y,{label:"Tot Cnt："},{default:n((()=>[x])),_:1})])),_:1},8,["model"])])),_:1}),u(R,{span:8},{default:n((()=>[u(D,{type:"primary",onClick:l[3]||(l[3]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Reset Statis")])),_:1})])),_:1})])),_:1})])])),_:1})])),_:1}),u(R,{lg:7,md:12},{default:n((()=>[u(E,{class:"box-card"},{header:n((()=>[w])),default:n((()=>[m("div",null,[u(D,{type:"primary",onClick:l[4]||(l[4]=l=>e.onSubmit(e.formRef))},{default:n((()=>[p("Emergency Stop")])),_:1})])])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1373c8c2"]]);export{A as default};
