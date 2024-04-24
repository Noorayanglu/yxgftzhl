import{b as a,c as e}from"./user-f3585f96.js";import{j as l}from"./index-8ef65fbb.js";import{g as r}from"./utils-e10d97cb.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as m,i as d,Y as o,Z as i,ag as u,c as p,U as n,O as c,o as f,a as v,J as b,T as g,F as _,a7 as h,M as y,u as x,S as j,az as w,aA as E}from"./@vue-c5a747fc.js";import{_ as V}from"./index-c731fa14.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const k=[{name:"制冷",value:1},{name:"加热",value:2},{name:"自循环",value:3},{name:"自动",value:4}],z=[{name:"出水水温控制",value:0},{name:"回水水温控制",value:1}],C=a=>(w("data-v-7bad1249"),a=a(),E(),a),S={class:"cooling"},U={class:"img-data"},R=C((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/cooling-cf01220f.png",alt:""})],-1))),N={class:"imgdata-box"},I=C((()=>v("div",{class:"imgdata-name"},"通信状态",-1))),F=C((()=>v("div",{class:"imgdata-name"},"数据更新时间",-1))),A={class:"imgdata-value"},G=C((()=>v("div",{class:"img-data1"},[v("div",{class:"img-box1"},[v("img",{src:"/static/jpg/cooling1-5b5280d8.jpg",alt:""})])],-1))),H={class:"btn-box"},J={class:"card-box"},M=C((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),O={class:"first-form"},T={class:"first-btn"},Y={class:"first-form"},Z={class:"two-box"},q={class:"first-btn"},B={class:"first-form"},D={class:"two-box"},K={class:"first-btn"},L={class:"first-form"},P={class:"two-box"},Q={class:"first-btn"},W={class:"first-form"},X={class:"two-box"},$={class:"first-btn"},aa={class:"first-form"},ea={class:"two-box"},la={class:"first-btn"},ra={class:"first-form"},sa={class:"two-box"},ta={class:"first-btn"},ma={class:"first-form"},da={class:"first-btn"},oa={class:"tab-box"},ia=V(t({__name:"Index",setup(t){const w=m([]),E=m({}),V=k,C=z;m(0);const ia=m(""),ua=m("");m(!0);const pa=m(null),na=m(2e3);d((()=>{Sa()})),o((()=>{za()}));const ca=m(),fa=i({param:null}),va=m(),ba=i({param:null}),ga=m(),_a=i({param:null}),ha=m(),ya=i({param:null}),xa=m(),ja=i({param:null}),wa=m(),Ea=i({param:null}),Va=m(),ka=i({param:null}),za=()=>{clearInterval(pa.value),pa.value=null},Ca=a=>{e({cmd:0,param:a}).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))},Sa=()=>{a().then((a=>{const{"通信状态":e,"数据更新时间":s,...t}=a;E.value=t,ia.value=e,ua.value=s,w.value=l(E.value),w.value.map((a=>(a.value=r(a.value),a))),za(),pa.value=setInterval((()=>{Sa()}),na.value)})).catch((a=>{}))};return(a,l)=>{const r=u("el-col"),t=u("el-row"),m=u("el-option"),d=u("el-select"),o=u("el-form-item"),i=u("el-button"),E=u("el-form"),k=u("el-divider"),z=u("el-input"),pa=u("el-card"),na=u("el-table-column"),za=u("el-table");return f(),p("div",S,[n(t,null,{default:c((()=>[n(r,{xs:24,sm:12,class:"col-box"},{default:c((()=>[v("div",U,[R,v("div",N,[n(t,null,{default:c((()=>[n(r,{span:10},{default:c((()=>[I])),_:1}),n(r,{span:14},{default:c((()=>[F])),_:1}),n(r,{span:10},{default:c((()=>[v("div",{class:"imgdata-value",style:b("color:".concat("正常"==ia.value?"#67C23A":"#F56C6C",";"))},g(ia.value),5)])),_:1}),n(r,{span:14},{default:c((()=>[v("div",A,g(ua.value),1)])),_:1})])),_:1})])])])),_:1}),n(r,{xs:24,sm:12},{default:c((()=>[G])),_:1}),n(r,{xs:24,sm:12},{default:c((()=>[v("div",H,[v("div",J,[n(pa,{class:"box-card"},{header:c((()=>[M])),default:c((()=>[v("div",null,[n(E,{ref_key:"formRef",ref:ca,model:fa,size:"default","label-width":"130"},{default:c((()=>[v("div",O,[v("div",null,[n(o,{label:"模式设置",prop:"param"},{default:c((()=>[n(d,{modelValue:fa.param,"onUpdate:modelValue":l[0]||(l[0]=a=>fa.param=a),placeholder:"模式设置",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),p(_,null,h(x(V),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",T,[n(i,{class:"btn",type:"primary",onClick:l[1]||(l[1]=a=>(a=>{if(!a)return;if(null===fa.param)return void s.msgError("请选择模式");let l={cmd:1,param:fa.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ca.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(k,{"border-style":"dashed",class:"oneline"}),n(E,{ref_key:"formRef7",ref:Va,model:ka,size:"default","label-width":"130"},{default:c((()=>[v("div",Y,[v("div",Z,[n(o,{label:"温度设定",prop:"param"},{default:c((()=>[n(z,{modelValue:ka.param,"onUpdate:modelValue":l[2]||(l[2]=a=>ka.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",q,[n(i,{class:"btn",type:"primary",onClick:l[3]||(l[3]=a=>(a=>{if(!a)return;if(null===ka.param)return void s.msgError("请设置温度");let l={cmd:7,param:Number(ka.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(Va.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(k,{"border-style":"dashed",class:"oneline"}),n(E,{ref_key:"formRef1",ref:va,model:ba,size:"default","label-width":"130"},{default:c((()=>[v("div",B,[v("div",D,[n(o,{label:"水位目标控制温度",prop:"param"},{default:c((()=>[n(d,{modelValue:ba.param,"onUpdate:modelValue":l[4]||(l[4]=a=>ba.param=a),placeholder:"水位目标控制温度",style:{"max-width":"208px"}},{default:c((()=>[(f(!0),p(_,null,h(x(C),((a,e)=>(f(),y(m,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})]),v("div",K,[n(i,{class:"btn",type:"primary",onClick:l[5]||(l[5]=a=>(a=>{if(!a)return;if(null===ba.param)return void s.msgError("请选择水位目标控制温度");let l={cmd:2,param:ba.param};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(va.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(k,{"border-style":"dashed",class:"oneline"}),n(E,{ref_key:"formRef2",ref:ga,model:_a,size:"default","label-width":"130"},{default:c((()=>[v("div",L,[v("div",P,[n(o,{label:"制冷温度",prop:"param"},{default:c((()=>[n(z,{modelValue:_a.param,"onUpdate:modelValue":l[6]||(l[6]=a=>_a.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",Q,[n(i,{class:"btn",type:"primary",onClick:l[7]||(l[7]=a=>(a=>{if(!a)return;if(null===_a.param)return void s.msgError("请设置水温制冷点");let l={cmd:3,param:Number(_a.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ga.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(E,{ref_key:"formRef3",ref:ha,model:ya,size:"default","label-width":"130"},{default:c((()=>[v("div",W,[v("div",X,[n(o,{label:"制冷回差",prop:"param"},{default:c((()=>[n(z,{modelValue:ya.param,"onUpdate:modelValue":l[8]||(l[8]=a=>ya.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",$,[n(i,{class:"btn",type:"primary",onClick:l[9]||(l[9]=a=>(a=>{if(!a)return;if(null===ya.param)return void s.msgError("请设置制冷回差");let l={cmd:4,param:Number(ya.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(ha.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(E,{ref_key:"formRef4",ref:xa,model:ja,size:"default","label-width":"130"},{default:c((()=>[v("div",aa,[v("div",ea,[n(o,{label:"加热温度",prop:"param"},{default:c((()=>[n(z,{modelValue:ja.param,"onUpdate:modelValue":l[10]||(l[10]=a=>ja.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",la,[n(i,{class:"btn",type:"primary",onClick:l[11]||(l[11]=a=>(a=>{if(!a)return;if(null===ja.param)return void s.msgError("请设置水温加热点");let l={cmd:5,param:Number(ja.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(xa.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(E,{ref_key:"formRef5",ref:wa,model:Ea,size:"default","label-width":"130"},{default:c((()=>[v("div",ra,[v("div",sa,[n(o,{label:"加热回差",prop:"param"},{default:c((()=>[n(z,{modelValue:Ea.param,"onUpdate:modelValue":l[12]||(l[12]=a=>Ea.param=a),type:"number",style:{"max-width":"208px"}},{append:c((()=>[j("℃")])),_:1},8,["modelValue"])])),_:1})]),v("div",ta,[n(i,{class:"btn",type:"primary",onClick:l[13]||(l[13]=a=>(a=>{if(!a)return;if(null===Ea.param)return void s.msgError("请设置制热回差");let l={cmd:6,param:Number(Ea.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(wa.value))},{default:c((()=>[j("设置")])),_:1})])])])),_:1},8,["model"]),n(k,{"border-style":"dashed",class:"oneline"}),v("div",ma,[v("div",da,[n(i,{class:"btn",size:"default",type:"primary",onClick:l[14]||(l[14]=a=>Ca(1))},{default:c((()=>[j("开机")])),_:1}),n(i,{class:"btn",size:"default",type:"primary",onClick:l[15]||(l[15]=a=>Ca(0))},{default:c((()=>[j("关机")])),_:1})])])])])),_:1})])])])),_:1}),n(r,{xs:24,sm:12},{default:c((()=>[v("div",oa,[n(za,{data:w.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:c((()=>[n(na,{type:"index",width:"60",align:"center",label:"序号"}),n(na,{prop:"name",label:"数据名称",align:"center"}),n(na,{prop:"value",label:"数值",align:"center"}),n(na,{prop:"unit",label:"单位",align:"center",width:"80"})])),_:1},8,["data"])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-7bad1249"]]);export{ia as default};
