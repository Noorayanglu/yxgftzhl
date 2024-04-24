import{_ as a,c as e}from"./dashboard-06d9dc70.js";import{l,m as t}from"./user-201a4f9f.js";import{j as s}from"./index-d1c79db5.js";import{g as r}from"./utils-e10d97cb.js";import{f as o}from"./feedback-5363c0cc.js";import{d as u,i as n,Y as i,e as d,Z as c,ag as m,c as p,a as v,F as f,a7 as b,u as j,U as x,O as y,az as _,aA as h,o as w,I as g,J as C,T as k,S,M as z}from"./@vue-c5a747fc.js";import{_ as B}from"./index-0f4dc2de.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const A=[{name:"从机",value:0},{name:"功率曲线",value:1}],V=a=>(_("data-v-4d401dc0"),a=a(),h(),a),I={class:"control"},M={class:"control-box"},E={class:"ctndata-box-box"},O=V((()=>v("div",{class:"ctndata-img"},[v("img",{src:a,alt:""})],-1))),P={class:"ctndata-box"},U={class:"ctn-name"},F={class:"ctn-value-box"},N=[V((()=>v("div",{class:"line-level"},null,-1)))],R={class:"btn-box"},D={class:"card-box"},G=V((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),J={class:"newpower-box"},T=V((()=>v("div",{class:"newpower-text"},"正值：充电；负值：放电",-1))),W={class:"newpower-box"},Y={class:"btn-box-new"},Z={class:"tab-box"},q=B(u({__name:"Index",setup(a){n((()=>{ia()})),i((()=>{ua()}));const u=A,_=e,h=d({}),B=d([]),V=d([]),q=d({}),H=d([]),K=d({}),L=d([]),Q=d({}),X=d([]),$=d({}),aa=d([]),ea=d(null),la=d(2e3),ta=d(),sa=c({param:null}),ra=d(),oa=c({param:null}),ua=()=>{clearInterval(ea.value),ea.value=null},na=a=>{t({cmd:a,param:0}).then((a=>{o.msgSuccess("设置成功")})).catch((a=>{}))},ia=()=>{l().then((a=>{h.value=a,B.value=ca(h.value),V.value=da(h.value),ua(),ea.value=setInterval((()=>{ia()}),la.value)})).catch((a=>{}))},da=a=>{let e={"关口表通信状态":a["关口表通信状态"],"变压器表通信状态":a["变压器表通信状态"],"数据记录状态":a["数据记录状态"],"参数配置状态":a["参数配置状态"],"软件版本":a["软件版本"],"可充放状态":a["可充放状态"]};return s(e)},ca=a=>{$.value={"储能状态":a["储能状态"],"工作模式":a["储能工作模式"],"故障信息":a["故障信息"],"储能功率":a["储能功率"],"关口功率":a["关口功率"],"光伏功率":a["光伏功率"],"负载功率":a["负载功率"],"变压器功率":a["变压器功率"]},K.value={"PCS状态":a["PCS状态"],"有功功率":a["PCS功率"],"AB线电压":a["AB线电压"],"BC线电压":a["BC线电压"],"CA线电压":a["CA线电压"]},q.value={SOC:a["BMS SOC"],"总电压":a["BMS总电压"],"总电流":a["BMS总电流"],"最高电芯电压":a["最高电芯电压"],"平均电芯电压":a["平均电芯电压"],"最低电芯电压":a["最低电芯电压"],"最高电芯温度":a["最高电芯温度"],"平均电芯温度":a["平均电芯温度"],"最低电芯温度":a["最低电芯温度"]},Q.value={"工作模式":a["空调工作模式"],"出水温度":a["出水温度"],"回水温度":a["回水温度"],"出水压力":a["出水压力"],"回水压力":a["回水压力"]},aa.value=s($.value),aa.value.map((a=>(a.value=r(a.value),a))),L.value=s(K.value),L.value.map((a=>(a.value=r(a.value),a))),H.value=s(q.value),H.value.map((a=>(a.value=r(a.value),a))),X.value=s(Q.value),X.value.map((a=>(a.value=r(a.value),a)));let e=[];return e.push(X.value,L.value,H.value,aa.value),e};return(a,e)=>{const l=m("el-input"),s=m("el-button"),r=m("el-form-item"),n=m("el-form"),i=m("el-option"),d=m("el-select"),c=m("el-card"),h=m("el-col"),A=m("el-table-column"),q=m("el-table"),H=m("el-row");return w(),p("div",I,[v("div",M,[v("div",E,[O,v("div",P,[(w(!0),p(f,null,b(B.value,((a,e)=>(w(),p("div",{key:e,class:g(["ctn-box",["ctn-box","ctn-box"+(e+1)]]),style:C("top: ".concat(j(_)[e].coordinate[0],"%; left: ").concat(j(_)[e].coordinate[1],"%;"))},[v("div",U,k(j(_)[e].name),1),v("div",F,[(w(!0),p(f,null,b(a,((a,e)=>(w(),p("div",{key:e+"A",class:"ctn-value"},[S(k(a.name)+"： ",1),v("span",null,k(a.value),1),S(" "+k(a.unit),1)])))),128))])],6)))),128)),(w(!0),p(f,null,b(j(_),((a,e)=>(w(),p("div",{key:e,class:g(["line-box","line-direction"+a.direction]),style:C("top: ".concat(a.coordinateline[0],"%; left: ").concat(a.coordinateline[1],"%;"))},N,6)))),128))])])]),v("div",R,[x(H,null,{default:y((()=>[x(h,{span:12,class:"col-box"},{default:y((()=>[v("div",D,[x(c,{class:"box-card"},{header:y((()=>[G])),default:y((()=>[v("div",null,[x(n,{ref_key:"formRef",ref:ta,model:sa,size:"default"},{default:y((()=>[x(r,{label:"功率设定",prop:"param"},{default:y((()=>[v("div",J,[x(l,{modelValue:sa.param,"onUpdate:modelValue":e[0]||(e[0]=a=>sa.param=a),type:"number",class:"newpower-input",style:{width:"190px"}},{append:y((()=>[S("kW")])),_:1},8,["modelValue"]),x(s,{class:"newpower-btn",type:"primary",onClick:e[1]||(e[1]=a=>(a=>{if(!a)return;if(null===sa.param)return void o.msgError("请输入功率");let e={cmd:4,param:Number(sa.param)};t(e).then((a=>{o.msgSuccess("设置成功")})).catch((a=>{}))})(ta.value))},{default:y((()=>[S("设定")])),_:1})]),T])),_:1})])),_:1},8,["model"]),x(n,{ref_key:"formRef1",ref:ra,model:oa,size:"default"},{default:y((()=>[x(r,{label:"工作模式",prop:"param"},{default:y((()=>[v("div",W,[x(d,{modelValue:oa.param,"onUpdate:modelValue":e[2]||(e[2]=a=>oa.param=a),placeholder:"工作模式",style:{width:"190px"}},{default:y((()=>[(w(!0),p(f,null,b(j(u),((a,e)=>(w(),z(i,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),x(s,{class:"newpower-btn",type:"primary",onClick:e[3]||(e[3]=a=>(a=>{if(!a)return;if(null===oa.param)return void o.msgError("请选择工作模式");let e={cmd:5,param:Number(oa.param)};t(e).then((a=>{o.msgSuccess("设置成功")})).catch((a=>{}))})(ra.value))},{default:y((()=>[S("设定")])),_:1})])])),_:1})])),_:1},8,["model"]),v("div",Y,[v("div",null,[x(s,{type:"primary",size:"default",onClick:e[4]||(e[4]=a=>na(1))},{default:y((()=>[S("监控")])),_:1}),x(s,{type:"primary",size:"default",onClick:e[5]||(e[5]=a=>na(2))},{default:y((()=>[S("停机")])),_:1}),x(s,{type:"primary",size:"default",onClick:e[6]||(e[6]=a=>na(3))},{default:y((()=>[S("运行")])),_:1})])])])])),_:1})])])),_:1}),x(h,{span:12},{default:y((()=>[v("div",Z,[x(q,{data:V.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:y((()=>[x(A,{type:"index",width:"60",align:"center",label:"序号"}),x(A,{prop:"name",label:"数据名称",align:"center"}),x(A,{prop:"value",label:"数值",align:"center"}),x(A,{prop:"unit",label:"单位",align:"center",width:"60"})])),_:1},8,["data"])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-4d401dc0"]]);export{q as default};
