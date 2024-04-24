import{n as e,o as a}from"./user-c27d821d.js";import{j as l}from"./index-bf32d979.js";import{f as r}from"./feedback-16d8dab9.js";import{i as t}from"./echarts-0d882400.js";import{_ as o}from"./index-4563bda8.js";import{i as s,f as n,z as m,e as p,o as u,c as d,a as i,d as c,Z as f,ag as b,U as h,O as v,S as w,F as g,a7 as _,u as y,az as x,aA as j}from"./@vue-196ae313.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-b81b67de.js";import"./element-plus-6e6ac90a.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-1a3a1657.js";import"./@element-plus-e3505fc2.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-8d480e59.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./zrender-07bca074.js";import"./vue-router-4e843cc0.js";import"./pinia-b3224f58.js";/* empty css                    */const V={class:"echarts-box"},T=o({__name:"setPower",props:{chartseries:{type:Array,default:[]}},setup(e){const a=e;s((()=>{o()})),n((()=>a.chartseries),(()=>{r&&r.dispose(),o()}),{deep:!0}),m((()=>{r&&r.dispose()}));const l=p();let r;function o(){r=t(l.value);const e={tooltip:{trigger:"axis",axisPointer:{type:"line"},backgroundColor:"rgba(0,0,0,0.5)",borderColor:"rgba(0,0,0,0.5)",textStyle:{color:"#fff"}},legend:{textStyle:{}},grid:{top:"20%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLabel:{},axisLine:{},data:""},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{}},axisPointer:{type:"none"}},series:[{name:"功率曲线",type:"line",showSymbol:!1,data:a.chartseries}]};r.setOption(e)}return(e,a)=>(u(),d("div",V,[i("div",{ref_key:"myEcharts",ref:l,style:{width:"100%",height:"100%"}},null,512)]))}},[["__scopeId","data-v-7d0aeea7"]]),k=e=>(x("data-v-8ab59a06"),e=e(),j(),e),S={class:"setup"},C={class:"tab-box"},P=k((()=>i("div",{class:"card-header"},[i("span",null,"控制")],-1))),U={class:"newpower-box"},E={class:"newpower-box"},N={class:"newpower-box"},R={class:"newpower-box"},z={class:"newpower-box"},I={class:"newpower-box"},A=k((()=>i("div",{class:"card-header"},[i("span",null,"功率曲线设置")],-1))),L={class:"card-con"},O=k((()=>i("div",{class:"power-name"},"时间",-1))),D=k((()=>i("div",{class:"power-name power-text-margin"},"功率值（KW）",-1))),F={class:"setvalue-value"},G=k((()=>i("template",{slot:"append"},[w("kW")],-1))),M=["onClick"],W={class:"setpowerbtn"},K={class:"power-box"},Z={class:"power-box-box"},q=o(c({__name:"Index",setup(t){const o=p([]),n=p({}),m=p([]),c=p([]),x=p([]),j=p(15);p("");let V=f([{chargeP:"",startTime:"",endTime:""}]);const k=p(),q=f({param:null}),B=p(),H=f({param:null}),J=p(),Q=f({param:null}),X=p(),Y=f({param:null}),$=p(),ee=f({param:null}),ae=p(),le=f({param:null});s((async()=>{c.value=await ie(j.value),await fe()}));const re=e=>{V.some((e=>""===e.chargeP||""===e.startTime||""===e.endTime))||oe()},te=()=>{ue(c.value,m.value)},oe=async()=>{ne().then((e=>{e&&ue(c.value,Object.values(e))})).catch((e=>{}))},se=()=>{ne().then((e=>{if(e){let a=e;for(let e in a)a[e]=Number(a[e]);me(a)}})).catch((e=>{}))},ne=()=>new Promise(((e,a)=>{let l=V.map(((e,a)=>[e.startTime,e.endTime]));if(V.some((e=>""===e.chargeP||""===e.startTime||""===e.endTime)))return r.msgError("功率值与时间不能为空"),void a(new Error("功率值与时间不能为空"));if(we(l))return r.msgError("时间段有重复"),void a(new Error("时间段有重复"));let t=he(V);t.forEach((e=>{"00:00"===e.endTime&&(e.endTime="24:00")})),e(be(t).reduce(((e,a,l)=>(e[l+1]=a.chargeP,e)),{}))})),me=e=>{let l={cmd:2,...e};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))},pe=()=>{V.push({chargeP:"",startTime:"",endTime:""})},ue=async(e,a)=>{let l=await de(e,a),r=l.map((e=>e.name)),t=l.map((e=>e.value));x.value=r.map(((e,a)=>[e,t[a]]))},de=(e,a)=>{const l=e.map(((e,l)=>({name:e,value:a[l]})));let r=[];return r.push(l[0]),l.reduce(((e,a)=>{let l=null;return e.value!==a.value&&(l={name:a.name,value:e.value}),l?r.push(l,a):r.push(a),a})),r},ie=e=>{let a=60*e,l=86400/a,r=0,t=[];for(let o=0;o<l;o++){let e=parseInt(r/3600),l=parseInt(r%3600/60);t.push(ce(e)+":"+ce(l)),r+=a}return t},ce=e=>e<10?"0"+e:e,fe=()=>{e().then((e=>{let a=e;n.value={"充电截止电芯电压":a["充电截止电芯电压"],"放电截止电芯电压":a["放电截止电芯电压"],"充电关口限制":a["充电关口限制"],"放电关口限制":a["放电关口限制"],"充电变压器限制":a["充电变压器限制"],"放电变压器限制":a["放电变压器限制"]},o.value=l(n.value);const{"充电截止电芯电压":r,"放电截止电芯电压":t,"充电关口限制":s,"放电关口限制":p,"充电变压器限制":u,"放电变压器限制":d,...i}=a;m.value=Object.values(i),ue(c.value,m.value)})).catch((e=>{console.log("数据获取失败")}))},be=e=>{let a=[];for(let l=0;l<1440;l+=15){const r="".concat(String(Math.floor(l/60)).padStart(2,"0"),":").concat(String(l%60).padStart(2,"0"));let t="0";for(const a of e){const e=ve(a.startTime),r=ve(a.endTime);if(l>=e&&l<r){t=a.chargeP;break}}a.push({time:r,chargeP:t})}return a},he=e=>(e.sort(((e,a)=>{const l=ve(e.startTime),r=ve(e.endTime),t=ve(a.startTime),o=ve(a.endTime);return l!==t?l-t:r-o})),e),ve=e=>{const[a,l]=e.split(":").map(Number);return 60*a+l},we=e=>{const a=new Set;for(const[l,r]of e)for(let e=l;e<r;e=ge(e,1)){if(a.has(e))return!0;a.add(e)}return!1},ge=(e,a)=>{const[l,r]=e.split(":").map(Number);let t=l+Math.floor((r+a)/60),o=(r+a)%60;return 60===o&&(o=0,t+=1),"".concat(String(t).padStart(2,"0"),":").concat(String(o).padStart(2,"0"))};return(e,l)=>{const t=b("el-table-column"),s=b("el-table"),n=b("el-col"),m=b("el-input"),p=b("el-button"),c=b("el-form-item"),f=b("el-form"),j=b("el-card"),oe=b("el-row"),ne=b("el-time-select"),me=b("Delete"),ue=b("el-icon"),de=b("Plus");return u(),d("div",S,[i("div",null,[h(oe,null,{default:v((()=>[h(n,{span:12,class:"col-box"},{default:v((()=>[i("div",C,[h(s,{data:o.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:v((()=>[h(t,{type:"index",width:"60",align:"center",label:"序号"}),h(t,{prop:"name",label:"数据名称",align:"center"}),h(t,{prop:"value",label:"数值",align:"center"}),h(t,{prop:"unit",label:"单位",align:"center",width:"60"})])),_:1},8,["data"])])])),_:1}),h(n,{span:12},{default:v((()=>[h(j,{class:"box-card"},{header:v((()=>[P])),default:v((()=>[i("div",null,[h(f,{ref_key:"formRef",ref:k,model:q,"label-width":"110"},{default:v((()=>[h(c,{label:"充电截至电芯电压",prop:"param"},{default:v((()=>[i("div",U,[h(m,{modelValue:q.param,"onUpdate:modelValue":l[0]||(l[0]=e=>q.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[1]||(l[1]=e=>(e=>{if(!e)return;if(null===q.param)return void r.msgError("请输入充电截至电芯电压");let l={cmd:0,param:1e3*Number(q.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})(k.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(f,{ref_key:"formRef1",ref:B,model:H,"label-width":"110"},{default:v((()=>[h(c,{label:"放电截至电芯电压",prop:"param"},{default:v((()=>[i("div",E,[h(m,{modelValue:H.param,"onUpdate:modelValue":l[2]||(l[2]=e=>H.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[3]||(l[3]=e=>(e=>{if(!e)return;if(null===H.param)return void r.msgError("请输入放电截至电芯电压");let l={cmd:1,param:1e3*Number(H.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})(B.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(f,{ref_key:"formRef2",ref:J,model:Q,"label-width":"110"},{default:v((()=>[h(c,{label:"充电关口限制",prop:"param"},{default:v((()=>[i("div",N,[h(m,{modelValue:Q.param,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[5]||(l[5]=e=>(e=>{if(!e)return;if(null===Q.param)return void r.msgError("请输入充电关口限制");let l={cmd:3,param:1e3*Number(Q.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})(J.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(f,{ref_key:"formRef3",ref:X,model:Y,"label-width":"110"},{default:v((()=>[h(c,{label:"放电关口限制",prop:"param"},{default:v((()=>[i("div",R,[h(m,{modelValue:Y.param,"onUpdate:modelValue":l[6]||(l[6]=e=>Y.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[7]||(l[7]=e=>(e=>{if(!e)return;if(null===Y.param)return void r.msgError("请输入放电关口限制");let l={cmd:5,param:1e3*Number(Y.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})(X.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(f,{ref_key:"formRef4",ref:$,model:ee,"label-width":"110"},{default:v((()=>[h(c,{label:"充电变压器限制",prop:"param"},{default:v((()=>[i("div",z,[h(m,{modelValue:ee.param,"onUpdate:modelValue":l[8]||(l[8]=e=>ee.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[9]||(l[9]=e=>(e=>{if(!e)return;if(null===ee.param)return void r.msgError("请输入充电变压器限制");let l={cmd:4,param:1e3*Number(ee.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})($.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"]),h(f,{ref_key:"formRef5",ref:ae,model:le,"label-width":"110"},{default:v((()=>[h(c,{label:"放电变压器限制",prop:"param"},{default:v((()=>[i("div",I,[h(m,{modelValue:le.param,"onUpdate:modelValue":l[10]||(l[10]=e=>le.param=e),type:"number",class:"newpower-input"},null,8,["modelValue"]),h(p,{class:"newpower-btn",type:"primary",onClick:l[11]||(l[11]=e=>(e=>{if(!e)return;if(null===le.param)return void r.msgError("请输入放电变压器限制");let l={cmd:6,param:1e3*Number(le.param)};a(l).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功"),fe()})).catch((e=>{console.log("设置失败",e)}))})(ae.value))},{default:v((()=>[w("设置")])),_:1})])])),_:1})])),_:1},8,["model"])])])),_:1})])),_:1}),h(n,{span:12},{default:v((()=>[h(j,{class:"box-card"},{header:v((()=>[A])),default:v((()=>[i("div",L,[h(oe,null,{default:v((()=>[h(n,{span:14},{default:v((()=>[O])),_:1}),h(n,{span:8},{default:v((()=>[D])),_:1})])),_:1}),(u(!0),d(g,null,_(y(V),((e,a)=>(u(),d("div",{key:a},[i("div",F,[h(oe,null,{default:v((()=>[h(n,{span:14,class:"col-box-time"},{default:v((()=>[h(ne,{modelValue:e.startTime,"onUpdate:modelValue":a=>e.startTime=a,"max-time":e.endTime,placeholder:"起始时间",start:"00:00",step:"00:15",end:"24:00",onChange:re},null,8,["modelValue","onUpdate:modelValue","max-time"]),w("至 "),h(ne,{modelValue:e.endTime,"onUpdate:modelValue":a=>e.endTime=a,"min-time":e.startTime,placeholder:"结束时间",start:"00:00",step:"00:15",end:"24:00",onChange:re},null,8,["modelValue","onUpdate:modelValue","min-time"])])),_:2},1024),h(n,{span:8},{default:v((()=>[h(m,{modelValue:e.chargeP,"onUpdate:modelValue":a=>e.chargeP=a,placeholder:"功率值",autocomplete:"off",onChange:re},{default:v((()=>[G])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),h(n,{span:2},{default:v((()=>[i("div",{class:"del-btn",onClick:e=>(e=>{V.splice(e,1)})(a)},[h(ue,null,{default:v((()=>[h(me)])),_:1})],8,M)])),_:2},1024)])),_:2},1024)])])))),128)),i("div",null,[i("div",{class:"add-btn",onClick:pe},[h(ue,null,{default:v((()=>[h(de)])),_:1}),w(" 新增 ")])]),i("div",W,[h(p,{class:"newpower-btn",type:"primary",onClick:se},{default:v((()=>[w("设置")])),_:1}),h(p,{class:"newpower-btn",type:"primary",onClick:te},{default:v((()=>[w("查看当前功率曲线")])),_:1})])])])),_:1})])),_:1}),h(n,{span:12},{default:v((()=>[i("div",K,[i("div",Z,[h(T,{chartseries:x.value},null,8,["chartseries"])])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-8ab59a06"]]);export{q as default};
