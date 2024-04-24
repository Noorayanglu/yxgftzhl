import{b as a,c as e}from"./user-36b3c479.js";import{j as l}from"./index-47d2ac99.js";import{g as r}from"./utils-e10d97cb.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as m,i as o,Y as d,Z as i,ag as u,c as n,U as p,O as c,o as f,a as v,J as b,T as g,F as _,a7 as h,M as y,u as x,S as j,az as w,aA as E}from"./@vue-c5a747fc.js";import{_ as V}from"./index-f632998b.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const k=[{name:"停止",value:0},{name:"内循环",value:1},{name:"制冷",value:2},{name:"加热",value:3},{name:"全自动",value:4}],z=[{name:"电芯平均温度",value:0},{name:"出水温度",value:1},{name:"回水温度",value:2},{name:"电芯权重温度",value:3}],C=a=>(w("data-v-f26af402"),a=a(),E(),a),S={class:"cooling"},U={class:"img-data"},R=C((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/cooling-cf01220f.png",alt:""})],-1))),I={class:"imgdata-box"},N=C((()=>v("div",{class:"imgdata-name"},"通信状态",-1))),F=C((()=>v("div",{class:"img-data1"},[v("div",{class:"img-box1"},[v("img",{src:"/static/jpg/cooling1-5b5280d8.jpg",alt:""})])],-1))),A={class:"btn-box"},G={class:"card-box"},H=C((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),J={class:"first-form"},M={class:"first-btn"},O={class:"first-form"},T={class:"two-box"},Y={class:"first-btn"},Z={class:"first-form"},q={class:"two-box"},B={class:"first-btn"},D={class:"first-form"},K={class:"two-box"},L={class:"first-btn"},P={class:"first-form"},Q={class:"two-box"},W={class:"first-btn"},X={class:"first-form"},$={class:"two-box"},aa={class:"first-btn"},ea={class:"first-form"},la={class:"first-btn"},ra={class:"tab-box"},sa=V(t({__name:"Index",setup(t){const w=m([]),E=m({}),V=k,C=z;m(0);const sa=m("");m(!0);const ta=m(null),ma=m(2e3);o((()=>{xa()})),d((()=>{ha()}));const oa=m(),da=i({param:null}),ia=m(),ua=i({param:null}),na=m(),pa=i({param:null}),ca=m(),fa=i({param:null}),va=m(),ba=i({param:null}),ga=m(),_a=i({param:null}),ha=()=>{clearInterval(ta.value),ta.value=null},ya=a=>{e({cmd:0,param:a}).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))},xa=()=>{a().then((a=>{const{"通信状态":e,...s}=a;E.value=s,sa.value=e,w.value=l(E.value),w.value.map((a=>(a.value=r(a.value),a))),ha(),ta.value=setInterval((()=>{xa()}),ma.value)})).catch((a=>{}))};return(a,l)=>{const r=u("el-col"),t=u("el-row"),m=u("el-option"),o=u("el-select"),d=u("el-form-item"),i=u("el-button"),E=u("el-form"),k=u("el-divider"),z=u("el-input"),ta=u("el-card"),ma=u("el-table-column"),ha=u("el-table");return f(),n("div",S,[p(t,null,{default:c((()=>[p(r,{xs:24,sm:12,class:"col-box"},{default:c((()=>[v("div",U,[R,v("div",I,[p(t,null,{default:c((()=>[p(r,{span:24},{default:c((()=>[N])),_:1}),p(r,{span:24},{default:c((()=>[v("div",{class:"imgdata-value",style:b("color:".concat("正常"==sa.value?"#67C23A":"#F56C6C",";"))},g(sa.value),5)])),_:1})])),_:1})])])])),_:1}),p(r,{xs:24,sm:12},{default:c((()=>[F])),_:1}),p(r,{xs:24,sm:12},{default:c((()=>[v("div",A,[v("div",G,[p(ta,{class:"box-card"},{header:c((()=>[H])),default:c((()=>[v("div",null,[p(E,{ref_key:"formRef",ref:oa,model:da,size:"default","label-width":"100"},{default:c((()=>[v("div",J,[v("div",null,[p(d,{label:"模式设置",prop:"param"},{default:c((()=>[p(o,{modelValue:da.param,"onUpdate:modelValue":l[0]||(l[0]=a=>da.param=a),placeholder:"模式设置",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),n(_,null,h(x(V),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",M,[p(i,{class:"btn",type:"primary",onClick:l[1]||(l[1]=a=>(a=>{if(!a)return;if(null===da.param)return void s.msgError("请选择模式");let l={cmd:1,param:da.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(oa.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),p(E,{ref_key:"formRef1",ref:ia,model:ua,size:"default","label-width":"100"},{default:c((()=>[v("div",O,[v("div",T,[p(d,{label:"控制温度选择",prop:"param"},{default:c((()=>[p(o,{modelValue:ua.param,"onUpdate:modelValue":l[2]||(l[2]=a=>ua.param=a),placeholder:"控制温度选择",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),n(_,null,h(x(C),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",Y,[p(i,{class:"btn",type:"primary",onClick:l[3]||(l[3]=a=>(a=>{if(!a)return;if(null===ua.param)return void s.msgError("请选择控制温度");let l={cmd:2,param:ua.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ia.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),p(E,{ref_key:"formRef2",ref:na,model:pa,size:"default","label-width":"100"},{default:c((()=>[v("div",Z,[v("div",q,[p(d,{label:"水温制冷点",prop:"param"},{default:c((()=>[p(z,{modelValue:pa.param,"onUpdate:modelValue":l[4]||(l[4]=a=>pa.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",B,[p(i,{class:"btn",type:"primary",onClick:l[5]||(l[5]=a=>(a=>{if(!a)return;if(null===pa.param)return void s.msgError("请设置水温制冷点");let l={cmd:3,param:Number(pa.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(na.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef3",ref:ca,model:fa,size:"default","label-width":"100"},{default:c((()=>[v("div",D,[v("div",K,[p(d,{label:"制冷回差",prop:"param"},{default:c((()=>[p(z,{modelValue:fa.param,"onUpdate:modelValue":l[6]||(l[6]=a=>fa.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",L,[p(i,{class:"btn",type:"primary",onClick:l[7]||(l[7]=a=>(a=>{if(!a)return;if(null===fa.param)return void s.msgError("请设置制冷回差");let l={cmd:4,param:Number(fa.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ca.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef4",ref:va,model:ba,size:"default","label-width":"100"},{default:c((()=>[v("div",P,[v("div",Q,[p(d,{label:"水温加热点",prop:"param"},{default:c((()=>[p(z,{modelValue:ba.param,"onUpdate:modelValue":l[8]||(l[8]=a=>ba.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",W,[p(i,{class:"btn",type:"primary",onClick:l[9]||(l[9]=a=>(a=>{if(!a)return;if(null===ba.param)return void s.msgError("请设置水温加热点");let l={cmd:5,param:Number(ba.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(va.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef5",ref:ga,model:_a,size:"default","label-width":"100"},{default:c((()=>[v("div",X,[v("div",$,[p(d,{label:"制热回差",prop:"param"},{default:c((()=>[p(z,{modelValue:_a.param,"onUpdate:modelValue":l[10]||(l[10]=a=>_a.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",aa,[p(i,{class:"btn",type:"primary",onClick:l[11]||(l[11]=a=>(a=>{if(!a)return;if(null===_a.param)return void s.msgError("请设置制热回差");let l={cmd:6,param:Number(_a.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ga.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),v("div",ea,[v("div",la,[p(i,{class:"btn",size:"default",type:"primary",onClick:l[12]||(l[12]=a=>ya(1))},{default:c((()=>[j("开机")])),_:1}),p(i,{class:"btn",size:"default",type:"primary",onClick:l[13]||(l[13]=a=>ya(0))},{default:c((()=>[j("关机")])),_:1})])])])])),_:1})])])])),_:1}),p(r,{xs:24,sm:12},{default:c((()=>[v("div",ra,[p(ha,{data:w.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:c((()=>[p(ma,{type:"index",width:"60",align:"center",label:"序号"}),p(ma,{prop:"name",label:"数据名称",align:"center"}),p(ma,{prop:"value",label:"数值",align:"center"}),p(ma,{prop:"unit",label:"单位",align:"center",width:"80"})])),_:1},8,["data"])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-f26af402"]]);export{sa as default};
