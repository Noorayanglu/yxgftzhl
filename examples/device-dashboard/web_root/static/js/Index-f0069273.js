import{_ as e,c as a}from"./dashboard-06d9dc70.js";import{l,m as s}from"./user-bce2bbc2.js";import{j as t}from"./index-15b8b0cc.js";import{g as o}from"./utils-e10d97cb.js";import{f as r}from"./feedback-16d8dab9.js";import{d as n,i as u,Y as i,e as c,Z as m,ag as d,c as p,a as v,F as f,a7 as b,u as j,U as x,O as y,az as g,aA as _,o as h,I as w,J as C,T as k,S,M as z}from"./@vue-196ae313.js";import{_ as B}from"./index-e3834d05.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-b81b67de.js";import"./element-plus-6e6ac90a.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-1a3a1657.js";import"./@element-plus-e3505fc2.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-8d480e59.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-4e843cc0.js";import"./pinia-b3224f58.js";/* empty css                    */const A=[{name:"从机",value:0},{name:"恒功率放空",value:1},{name:"恒功率充满",value:2}],V=e=>(g("data-v-91605164"),e=e(),_(),e),I={class:"control"},M={class:"control-box"},E={class:"ctndata-box-box"},O=V((()=>v("div",{class:"ctndata-img"},[v("img",{src:e,alt:""})],-1))),P={class:"ctndata-box"},U={class:"ctn-name"},F={class:"ctn-value-box"},N=[V((()=>v("div",{class:"line-level"},null,-1)))],R={class:"btn-box"},D={class:"card-box"},G=V((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),J={class:"newpower-box"},T=V((()=>v("div",{class:"newpower-text"},"正值：充电；负值：放电",-1))),W={class:"newpower-box"},Y={class:"btn-box-new"},Z={class:"tab-box"},q=B(n({__name:"Index",setup(e){u((()=>{ie()})),i((()=>{ne()}));const n=A,g=a,_=c({}),B=c([]),V=c([]),q=c({}),H=c([]),K=c({}),L=c([]),Q=c({}),X=c([]),$=c({}),ee=c([]),ae=c(null),le=c(2e3),se=c(),te=m({param:null}),oe=c(),re=m({param:null}),ne=()=>{clearInterval(ae.value),ae.value=null},ue=e=>{s({cmd:e,param:0}).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功")})).catch((e=>{console.log("设置失败",e)}))},ie=()=>{l().then((e=>{_.value=e,B.value=me(_.value),V.value=ce(_.value),ne(),ae.value=setInterval((()=>{console.log("ctn定时器"),ie()}),le.value)})).catch((e=>{console.log("ctn数据获取失败")}))},ce=e=>{let a={"关口表通信状态":e["关口表通信状态"],"变压器表通信状态":e["变压器表通信状态"],"数据记录状态":e["数据记录状态"],"软件版本":e["软件版本"]};return t(a)},me=e=>{$.value={"储能状态":e["储能状态"],"工作模式":e["储能工作模式"],"故障信息":e["故障信息"],"储能功率":e["储能功率"],"关口功率":e["关口功率"],"光伏功率":e["光伏功率"],"负载功率":e["负载功率"],"变压器功率":e["变压器功率"]},K.value={"PCS状态":e["PCS状态"],"有功功率":e["PCS功率"],"AB线电压":e["AB线电压"],"BC线电压":e["BC线电压"],"CA线电压":e["CA线电压"]},q.value={SOC:e["BMS SOC"],"总电压":e["BMS总电压"],"总电流":e["BMS总电流"],"最高电芯电压":e["最高电芯电压"],"平均电芯电压":e["平均电芯电压"],"最低电芯电压":e["最低电芯电压"],"最高电芯温度":e["最高电芯温度"],"平均电芯温度":e["平均电芯温度"],"最低电芯温度":e["最低电芯温度"]},Q.value={"工作模式":e["空调工作模式"],"出水温度":e["出水温度"],"回水温度":e["回水温度"],"出水压力":e["出水压力"],"回水压力":e["回水压力"]},ee.value=t($.value),ee.value.map((e=>(e.value=o(e.value),e))),L.value=t(K.value),L.value.map((e=>(e.value=o(e.value),e))),H.value=t(q.value),H.value.map((e=>(e.value=o(e.value),e))),X.value=t(Q.value),X.value.map((e=>(e.value=o(e.value),e)));let a=[];return a.push(X.value,L.value,H.value,ee.value),a};return(e,a)=>{const l=d("el-input"),t=d("el-button"),o=d("el-form-item"),u=d("el-form"),i=d("el-option"),c=d("el-select"),m=d("el-card"),_=d("el-col"),A=d("el-table-column"),q=d("el-table"),H=d("el-row");return h(),p("div",I,[v("div",M,[v("div",E,[O,v("div",P,[(h(!0),p(f,null,b(B.value,((e,a)=>(h(),p("div",{key:a,class:w(["ctn-box",["ctn-box","ctn-box"+(a+1)]]),style:C("top: ".concat(j(g)[a].coordinate[0],"%; left: ").concat(j(g)[a].coordinate[1],"%;"))},[v("div",U,k(j(g)[a].name),1),v("div",F,[(h(!0),p(f,null,b(e,((e,a)=>(h(),p("div",{key:a+"A",class:"ctn-value"},[S(k(e.name)+"： ",1),v("span",null,k(e.value),1),S(" "+k(e.unit),1)])))),128))])],6)))),128)),(h(!0),p(f,null,b(j(g),((e,a)=>(h(),p("div",{key:a,class:w(["line-box","line-direction"+e.direction]),style:C("top: ".concat(e.coordinateline[0],"%; left: ").concat(e.coordinateline[1],"%;"))},N,6)))),128))])])]),v("div",R,[x(H,null,{default:y((()=>[x(_,{span:12,class:"col-box"},{default:y((()=>[v("div",D,[x(m,{class:"box-card"},{header:y((()=>[G])),default:y((()=>[v("div",null,[x(u,{ref_key:"formRef",ref:se,model:te,size:"default"},{default:y((()=>[x(o,{label:"功率设定",prop:"param"},{default:y((()=>[v("div",J,[x(l,{modelValue:te.param,"onUpdate:modelValue":a[0]||(a[0]=e=>te.param=e),type:"number",class:"newpower-input",style:{width:"190px"}},{append:y((()=>[S("kW")])),_:1},8,["modelValue"]),x(t,{class:"newpower-btn",type:"primary",onClick:a[1]||(a[1]=e=>(e=>{if(!e)return;if(null===te.param)return void r.msgError("请输入功率");let a={cmd:4,param:Number(te.param)};s(a).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功")})).catch((e=>{console.log("设置失败",e)}))})(se.value))},{default:y((()=>[S("设定")])),_:1})]),T])),_:1})])),_:1},8,["model"]),x(u,{ref_key:"formRef1",ref:oe,model:re,size:"default"},{default:y((()=>[x(o,{label:"工作模式",prop:"param"},{default:y((()=>[v("div",W,[x(c,{modelValue:re.param,"onUpdate:modelValue":a[2]||(a[2]=e=>re.param=e),placeholder:"工作模式",style:{width:"190px"}},{default:y((()=>[(h(!0),p(f,null,b(j(n),((e,a)=>(h(),z(i,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),x(t,{class:"newpower-btn",type:"primary",onClick:a[3]||(a[3]=e=>(e=>{if(!e)return;if(null===re.param)return void r.msgError("请选择工作模式");let a={cmd:5,param:Number(re.param)};s(a).then((e=>{console.log("设置成功"),r.msgSuccess("设置成功")})).catch((e=>{console.log("设置失败",e)}))})(oe.value))},{default:y((()=>[S("设定")])),_:1})])])),_:1})])),_:1},8,["model"]),v("div",Y,[v("div",null,[x(t,{type:"primary",size:"default",onClick:a[4]||(a[4]=e=>ue(1))},{default:y((()=>[S("监控")])),_:1}),x(t,{type:"primary",size:"default",onClick:a[5]||(a[5]=e=>ue(2))},{default:y((()=>[S("停机")])),_:1}),x(t,{type:"primary",size:"default",onClick:a[6]||(a[6]=e=>ue(3))},{default:y((()=>[S("运行")])),_:1})])])])])),_:1})])])),_:1}),x(_,{span:12},{default:y((()=>[v("div",Z,[x(q,{data:V.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:y((()=>[x(A,{type:"index",width:"60",align:"center",label:"序号"}),x(A,{prop:"name",label:"数据名称",align:"center"}),x(A,{prop:"value",label:"数值",align:"center"}),x(A,{prop:"unit",label:"单位",align:"center",width:"60"})])),_:1},8,["data"])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-91605164"]]);export{q as default};
