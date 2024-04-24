import{b as a,c as e}from"./user-a45e41c0.js";import{j as l}from"./index-3996755b.js";import{g as r}from"./utils-e10d97cb.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as m,i as o,Y as d,Z as i,ag as u,c as n,U as p,O as c,o as f,a as v,J as b,T as g,F as _,a7 as h,M as y,u as x,S as j,az as w,aA as E}from"./@vue-c5a747fc.js";import{_ as V}from"./index-914b47bb.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const k=[{name:"停止",value:0},{name:"内循环",value:1},{name:"制冷",value:2},{name:"加热",value:3},{name:"全自动",value:4}],z=[{name:"电芯平均温度",value:0},{name:"出水温度",value:1},{name:"回水温度",value:2},{name:"电芯权重温度",value:3}],C=a=>(w("data-v-1e3dad50"),a=a(),E(),a),S={class:"cooling"},U={class:"img-data"},R=C((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/cooling-2157892c.png",alt:""})],-1))),I={class:"imgdata-box"},N=C((()=>v("div",{class:"imgdata-name"},"通信状态",-1))),F={class:"btn-box"},A={class:"card-box"},G=C((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),H={class:"first-form"},J={class:"first-btn"},M={class:"first-form"},O={class:"two-box"},T={class:"first-btn"},Y={class:"first-form"},Z={class:"two-box"},q={class:"first-btn"},B={class:"first-form"},D={class:"two-box"},K={class:"first-btn"},L={class:"first-form"},P={class:"two-box"},Q={class:"first-btn"},W={class:"first-form"},X={class:"two-box"},$={class:"first-btn"},aa={class:"first-form"},ea={class:"first-btn"},la={class:"tab-box"},ra=V(t({__name:"Index",setup(t){const w=m([]),E=m({}),V=k,C=z;m(0);const ra=m("");m(!0);const sa=m(null),ta=m(2e3);o((()=>{ya()})),d((()=>{_a()}));const ma=m(),oa=i({param:null}),da=m(),ia=i({param:null}),ua=m(),na=i({param:null}),pa=m(),ca=i({param:null}),fa=m(),va=i({param:null}),ba=m(),ga=i({param:null}),_a=()=>{clearInterval(sa.value),sa.value=null},ha=a=>{e({cmd:0,param:a}).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))},ya=()=>{a().then((a=>{const{"通信状态":e,...s}=a;E.value=s,ra.value=e,w.value=l(E.value),w.value.map((a=>(a.value=r(a.value),a))),_a(),sa.value=setInterval((()=>{ya()}),ta.value)})).catch((a=>{}))};return(a,l)=>{const r=u("el-col"),t=u("el-row"),m=u("el-option"),o=u("el-select"),d=u("el-form-item"),i=u("el-button"),E=u("el-form"),k=u("el-divider"),z=u("el-input"),sa=u("el-card"),ta=u("el-table-column"),_a=u("el-table");return f(),n("div",S,[p(t,null,{default:c((()=>[p(r,{xs:24,sm:12,class:"col-box"},{default:c((()=>[v("div",U,[R,v("div",I,[p(t,null,{default:c((()=>[p(r,{span:24},{default:c((()=>[N])),_:1}),p(r,{span:24},{default:c((()=>[v("div",{class:"imgdata-value",style:b("color:".concat("正常"==ra.value?"#67C23A":"#F56C6C",";"))},g(ra.value),5)])),_:1})])),_:1})])]),v("div",F,[v("div",A,[p(sa,{class:"box-card"},{header:c((()=>[G])),default:c((()=>[v("div",null,[p(E,{ref_key:"formRef",ref:ma,model:oa,size:"default","label-width":"100"},{default:c((()=>[v("div",H,[v("div",null,[p(d,{label:"模式设置",prop:"param"},{default:c((()=>[p(o,{modelValue:oa.param,"onUpdate:modelValue":l[0]||(l[0]=a=>oa.param=a),placeholder:"模式设置",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),n(_,null,h(x(V),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",J,[p(i,{class:"btn",type:"primary",onClick:l[1]||(l[1]=a=>(a=>{if(!a)return;if(null===oa.param)return void s.msgError("请选择模式");let l={cmd:1,param:oa.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ma.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),p(E,{ref_key:"formRef1",ref:da,model:ia,size:"default","label-width":"100"},{default:c((()=>[v("div",M,[v("div",O,[p(d,{label:"控制温度选择",prop:"param"},{default:c((()=>[p(o,{modelValue:ia.param,"onUpdate:modelValue":l[2]||(l[2]=a=>ia.param=a),placeholder:"控制温度选择",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),n(_,null,h(x(C),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",T,[p(i,{class:"btn",type:"primary",onClick:l[3]||(l[3]=a=>(a=>{if(!a)return;if(null===ia.param)return void s.msgError("请选择控制温度");let l={cmd:2,param:ia.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(da.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),p(E,{ref_key:"formRef2",ref:ua,model:na,size:"default","label-width":"100"},{default:c((()=>[v("div",Y,[v("div",Z,[p(d,{label:"水温制冷点",prop:"param"},{default:c((()=>[p(z,{modelValue:na.param,"onUpdate:modelValue":l[4]||(l[4]=a=>na.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",q,[p(i,{class:"btn",type:"primary",onClick:l[5]||(l[5]=a=>(a=>{if(!a)return;if(null===na.param)return void s.msgError("请设置水温制冷点");let l={cmd:3,param:Number(na.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ua.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef3",ref:pa,model:ca,size:"default","label-width":"100"},{default:c((()=>[v("div",B,[v("div",D,[p(d,{label:"制冷回差",prop:"param"},{default:c((()=>[p(z,{modelValue:ca.param,"onUpdate:modelValue":l[6]||(l[6]=a=>ca.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",K,[p(i,{class:"btn",type:"primary",onClick:l[7]||(l[7]=a=>(a=>{if(!a)return;if(null===ca.param)return void s.msgError("请设置制冷回差");let l={cmd:4,param:Number(ca.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(pa.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef4",ref:fa,model:va,size:"default","label-width":"100"},{default:c((()=>[v("div",L,[v("div",P,[p(d,{label:"水温加热点",prop:"param"},{default:c((()=>[p(z,{modelValue:va.param,"onUpdate:modelValue":l[8]||(l[8]=a=>va.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",Q,[p(i,{class:"btn",type:"primary",onClick:l[9]||(l[9]=a=>(a=>{if(!a)return;if(null===va.param)return void s.msgError("请设置水温加热点");let l={cmd:5,param:Number(va.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(fa.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(E,{ref_key:"formRef5",ref:ba,model:ga,size:"default","label-width":"100"},{default:c((()=>[v("div",W,[v("div",X,[p(d,{label:"制热回差",prop:"param"},{default:c((()=>[p(z,{modelValue:ga.param,"onUpdate:modelValue":l[10]||(l[10]=a=>ga.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",$,[p(i,{class:"btn",type:"primary",onClick:l[11]||(l[11]=a=>(a=>{if(!a)return;if(null===ga.param)return void s.msgError("请设置制热回差");let l={cmd:6,param:Number(ga.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ba.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),p(k,{"border-style":"dashed",class:"oneline"}),v("div",aa,[v("div",ea,[p(i,{class:"btn",size:"default",type:"primary",onClick:l[12]||(l[12]=a=>ha(1))},{default:c((()=>[j("开机")])),_:1}),p(i,{class:"btn",size:"default",type:"primary",onClick:l[13]||(l[13]=a=>ha(0))},{default:c((()=>[j("关机")])),_:1})])])])])),_:1})])])])),_:1}),p(r,{xs:24,sm:12},{default:c((()=>[v("div",la,[p(_a,{data:w.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:c((()=>[p(ta,{type:"index",width:"60",align:"center",label:"序号"}),p(ta,{prop:"name",label:"数据名称",align:"center"}),p(ta,{prop:"value",label:"数值",align:"center"}),p(ta,{prop:"unit",label:"单位",align:"center",width:"80"})])),_:1},8,["data"])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1e3dad50"]]);export{ra as default};
