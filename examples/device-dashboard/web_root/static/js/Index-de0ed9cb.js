import{n as e,o as a}from"./user-dfb1d017.js";import{j as l}from"./index-fe0e6a58.js";import{f as r}from"./feedback-5363c0cc.js";import{i as t}from"./echarts-84a2ba7b.js";import{_ as s}from"./index-e9ac30ec.js";import{i as o,f as n,z as m,e as u,o as p,c as d,a as i,d as c,Z as f,ag as b,U as h,O as w,F as v,a7 as y,S as _,u as g,az as x,aA as V}from"./@vue-c5a747fc.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./zrender-1465eda9.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const j={class:"echarts-box"},k=s({__name:"setPower",props:{chartseries:{type:Array,default:[]}},setup(e){const a=e;o((()=>{s()})),n((()=>a.chartseries),(()=>{r&&r.dispose(),s()}),{deep:!0}),m((()=>{r&&r.dispose()}));const l=u();let r;function s(){r=t(l.value);const e={tooltip:{trigger:"axis",axisPointer:{type:"line"},backgroundColor:"rgba(0,0,0,0.5)",borderColor:"rgba(0,0,0,0.5)",textStyle:{color:"#fff"}},legend:{textStyle:{}},grid:{top:"20%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLabel:{},axisLine:{},data:""},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{}},axisPointer:{type:"none"}},series:[{name:"功率曲线（正值：充电；负值：放电）",type:"line",showSymbol:!1,data:a.chartseries}]};r.setOption(e)}return(e,a)=>(p(),d("div",j,[i("div",{ref_key:"myEcharts",ref:l,style:{width:"100%",height:"100%"}},null,512)]))}},[["__scopeId","data-v-b05f62f8"]]),T=e=>(x("data-v-0d31dac8"),e=e(),V(),e),S={class:"setup"},z={class:"tab-box"},C=T((()=>i("div",{class:"card-header"},[i("span",null,"功率曲线设置")],-1))),U={class:"card-con"},E=T((()=>i("div",{class:"power-name"},"时间",-1))),P=T((()=>i("div",{class:"power-name power-text-margin"},"功率值（KW）",-1))),N={class:"setvalue-value"},R=T((()=>i("template",{slot:"append"},[_("kW")],-1))),I={class:"setpowerbtn"},A=T((()=>i("div",{class:"card-header"},[i("span",null,"控制")],-1))),L={class:"newpower-box"},O={class:"newpower-box"},F={class:"newpower-box"},G={class:"newpower-box"},M={class:"newpower-box"},W={class:"newpower-box"},D={class:"newpower-box"},K={class:"power-box"},Z={class:"power-box-box"},q=s(c({__name:"Index",setup(t){const s=u([]),n=u({}),m=u([]),c=u([]),x=u([]),V=u(15);u("");let j=f([{chargeP:"",startTime:"",endTime:""}]);const T=u(),q=f({param:""}),B=u(),H=f({param:null}),J=u(),Q=f({param:null}),X=u(),Y=f({param:null}),$=u(),ee=f({param:null}),ae=u(),le=f({param:null}),re=u(),te=f({param:null});o((async()=>{c.value=await fe(V.value),await he()}));const se=e=>{j.some((e=>""===e.chargeP||""===e.startTime||""===e.endTime))||ne()},oe=()=>{ie(c.value,m.value)},ne=async()=>{pe().then((e=>{e&&ie(c.value,Object.values(me(e)))})).catch((e=>{}))},me=e=>{let a=e,l=m.value.reduce(((e,a,l)=>(e[l+1]=a,e)),{});for(let r in a)"false"===a[r]&&(a[r]=l[r]),a[r]=Number(a[r]);return a},ue=()=>{pe().then((e=>{if(e){de(me(e))}})).catch((e=>{}))},pe=()=>new Promise(((e,a)=>{let l=j.map(((e,a)=>[e.startTime,e.endTime]));if(j.some((e=>""===e.chargeP||""===e.startTime||""===e.endTime)))return r.msgError("功率值与时间不能为空"),void a(new Error("功率值与时间不能为空"));if(_e(l))return r.msgError("时间段有重复"),void a(new Error("时间段有重复"));let t=ve(j);t.forEach((e=>{"00:00"===e.endTime&&(e.endTime="24:00")})),e(we(t).reduce(((e,a,l)=>(e[l+1]=a.chargeP,e)),{}))})),de=e=>{let l={cmd:2,...e};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))},ie=async(e,a)=>{let l=await ce(e,a),r=l.map((e=>e.name)),t=l.map((e=>e.value));x.value=r.map(((e,a)=>[e,t[a]]))},ce=(e,a)=>{const l=e.map(((e,l)=>({name:e,value:a[l]})));let r=[];return r.push(l[0]),l.reduce(((e,a)=>{let l=null;return e.value!==a.value&&(l={name:a.name,value:e.value}),l?r.push(l,a):r.push(a),a})),r},fe=e=>{let a=60*e,l=86400/a,r=0,t=[];for(let s=0;s<l;s++){let e=parseInt(r/3600),l=parseInt(r%3600/60);t.push(be(e)+":"+be(l)),r+=a}return t},be=e=>e<10?"0"+e:e,he=()=>{e().then((e=>{let a=e;n.value={"序列号":a["序列号"],"充电截止电芯电压":a["充电截止电芯电压"],"放电截止电芯电压":a["放电截止电芯电压"],"充电关口限制":a["充电关口限制"],"放电关口限制":a["放电关口限制"],"充电变压器限制":a["充电变压器限制"],"放电变压器限制":a["放电变压器限制"]},s.value=l(n.value);const{"序列号":r,"充电截止电芯电压":t,"放电截止电芯电压":o,"充电关口限制":u,"放电关口限制":p,"充电变压器限制":d,"放电变压器限制":i,...f}=a;m.value=Object.values(f),ie(c.value,m.value)})).catch((e=>{}))},we=e=>{let a=[];for(let l=0;l<1440;l+=15){const r="".concat(String(Math.floor(l/60)).padStart(2,"0"),":").concat(String(l%60).padStart(2,"0"));let t="false";for(const a of e){const e=ye(a.startTime),r=ye(a.endTime);if(l>=e&&l<r){t=a.chargeP;break}}a.push({time:r,chargeP:t})}return a},ve=e=>(e.sort(((e,a)=>{const l=ye(e.startTime),r=ye(e.endTime),t=ye(a.startTime),s=ye(a.endTime);return l!==t?l-t:r-s})),e),ye=e=>{const[a,l]=e.split(":").map(Number);return 60*a+l},_e=e=>{const a=new Set;for(const[l,r]of e)for(let e=l;e<r;e=ge(e,1)){if(a.has(e))return!0;a.add(e)}return!1},ge=(e,a)=>{const[l,r]=e.split(":").map(Number);let t=l+Math.floor((r+a)/60),s=(r+a)%60;return 60===s&&(s=0,t+=1),"".concat(String(t).padStart(2,"0"),":").concat(String(s).padStart(2,"0"))};return(e,l)=>{const t=b("el-table-column"),o=b("el-table"),n=b("el-col"),m=b("el-row"),u=b("el-time-select"),c=b("el-input"),f=b("el-button"),V=b("el-card"),ne=b("el-form-item"),me=b("el-form");return p(),d("div",S,[i("div",null,[h(m,null,{default:w((()=>[h(n,{span:12,class:"col-box"},{default:w((()=>[i("div",z,[h(o,{data:s.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:w((()=>[h(t,{type:"index",width:"60",align:"center",label:"序号"}),h(t,{prop:"name",label:"数据名称",align:"center"}),h(t,{prop:"value",label:"数值",align:"center"}),h(t,{prop:"unit",label:"单位",align:"center",width:"60"})])),_:1},8,["data"])]),h(V,{class:"box-card"},{header:w((()=>[C])),default:w((()=>[i("div",U,[h(m,null,{default:w((()=>[h(n,{span:16},{default:w((()=>[E])),_:1}),h(n,{span:8},{default:w((()=>[P])),_:1})])),_:1}),(p(!0),d(v,null,y(g(j),((e,a)=>(p(),d("div",{key:a},[i("div",N,[h(m,null,{default:w((()=>[h(n,{span:16,class:"col-box-time"},{default:w((()=>[h(u,{modelValue:e.startTime,"onUpdate:modelValue":a=>e.startTime=a,"max-time":e.endTime,placeholder:"起始时间",start:"00:00",step:"00:15",end:"24:00",size:"default",onChange:se},null,8,["modelValue","onUpdate:modelValue","max-time"]),_("至 "),h(u,{modelValue:e.endTime,"onUpdate:modelValue":a=>e.endTime=a,"min-time":e.startTime,placeholder:"结束时间",start:"00:00",step:"00:15",end:"24:00",size:"default",onChange:se},null,8,["modelValue","onUpdate:modelValue","min-time"])])),_:2},1024),h(n,{span:8},{default:w((()=>[h(c,{modelValue:e.chargeP,"onUpdate:modelValue":a=>e.chargeP=a,placeholder:"功率值",size:"default",autocomplete:"off",onChange:se},{default:w((()=>[R])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])])))),128)),i("div",I,[h(f,{class:"newpower-btn",type:"primary",size:"default",onClick:ue},{default:w((()=>[_("设置")])),_:1}),h(f,{class:"newpower-btn",type:"primary",size:"default",onClick:oe},{default:w((()=>[_("查看当前功率曲线")])),_:1})])])])),_:1})])),_:1}),h(n,{span:12},{default:w((()=>[h(V,{class:"box-card"},{header:w((()=>[A])),default:w((()=>[i("div",null,[h(me,{ref_key:"formRef0",ref:T,model:q,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"序列号设置",prop:"param"},{default:w((()=>[i("div",L,[h(c,{modelValue:q.param,"onUpdate:modelValue":l[0]||(l[0]=e=>q.param=e),class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[1]||(l[1]=e=>(e=>{if(!e)return;if(""===q.param)return void r.msgError("请输入序列号");let l={cmd:100,param:q.param};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(T.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef",ref:B,model:H,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"充电截至电芯电压",prop:"param"},{default:w((()=>[i("div",O,[h(c,{modelValue:H.param,"onUpdate:modelValue":l[2]||(l[2]=e=>H.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[3]||(l[3]=e=>(e=>{if(!e)return;if(null===H.param)return void r.msgError("请输入充电截至电芯电压");let l={cmd:0,param:1e3*Number(H.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(B.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef1",ref:J,model:Q,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"放电截至电芯电压",prop:"param"},{default:w((()=>[i("div",F,[h(c,{modelValue:Q.param,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[5]||(l[5]=e=>(e=>{if(!e)return;if(null===Q.param)return void r.msgError("请输入放电截至电芯电压");let l={cmd:1,param:1e3*Number(Q.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(J.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef2",ref:X,model:Y,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"充电关口限制",prop:"param"},{default:w((()=>[i("div",G,[h(c,{modelValue:Y.param,"onUpdate:modelValue":l[6]||(l[6]=e=>Y.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[7]||(l[7]=e=>(e=>{if(!e)return;if(null===Y.param)return void r.msgError("请输入充电关口限制");let l={cmd:3,param:Number(Y.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(X.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef3",ref:$,model:ee,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"放电关口限制",prop:"param"},{default:w((()=>[i("div",M,[h(c,{modelValue:ee.param,"onUpdate:modelValue":l[8]||(l[8]=e=>ee.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[9]||(l[9]=e=>(e=>{if(!e)return;if(null===ee.param)return void r.msgError("请输入放电关口限制");let l={cmd:5,param:Number(ee.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})($.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef4",ref:ae,model:le,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"充电变压器限制",prop:"param"},{default:w((()=>[i("div",W,[h(c,{modelValue:le.param,"onUpdate:modelValue":l[10]||(l[10]=e=>le.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[11]||(l[11]=e=>(e=>{if(!e)return;if(null===le.param)return void r.msgError("请输入充电变压器限制");let l={cmd:4,param:Number(le.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(ae.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(me,{ref_key:"formRef5",ref:re,model:te,"label-width":"130",size:"default"},{default:w((()=>[h(ne,{label:"放电变压器限制",prop:"param"},{default:w((()=>[i("div",D,[h(c,{modelValue:te.param,"onUpdate:modelValue":l[12]||(l[12]=e=>te.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(f,{class:"newpower-btn",type:"primary",onClick:l[13]||(l[13]=e=>(e=>{if(!e)return;if(null===te.param)return void r.msgError("请输入放电变压器限制");let l={cmd:6,param:Number(te.param)};a(l).then((e=>{r.msgSuccess("设置成功"),he()})).catch((e=>{}))})(re.value))},{default:w((()=>[_("设置")])),_:1})])])),_:1})])),_:1},8,["model"])])])),_:1})])),_:1}),h(n,{span:24},{default:w((()=>[i("div",K,[i("div",Z,[h(k,{chartseries:x.value},null,8,["chartseries"])])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-0d31dac8"]]);export{q as default};