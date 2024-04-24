import{_ as e,c as a}from"./dashboard-224440e1.js";import{k as l,l as s}from"./user-fd7e20f8.js";import{j as t}from"./index-429c65f6.js";import{g as r}from"./utils-e10d97cb.js";import{f as o}from"./feedback-5363c0cc.js";import{d as u,i as n,Y as i,e as m,Z as d,ag as c,c as p,a as v,F as f,a7 as b,u as x,U as j,O as y,az as h,aA as _,o as g,I as w,J as k,T as S,S as C,R as E,M as z}from"./@vue-c5a747fc.js";import{_ as V}from"./index-eeb245f7.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const I=[{name:"从机",value:0},{name:"功率曲线",value:1}],U=e=>(h("data-v-b1031735"),e=e(),_(),e),M={class:"control"},B={class:"control-box"},O={class:"ctndata-box-box"},P=U((()=>v("div",{class:"ctndata-img"},[v("img",{src:e,alt:""})],-1))),R={class:"ctndata-box"},W={class:"ctn-name"},A={class:"ctn-value-box"},F={key:0,class:"line-level"},N={class:"btn-box"},D={class:"card-box"},G=U((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),H={class:"newpower-box"},J=U((()=>v("div",{class:"newpower-text"},"正值：充电；负值：放电",-1))),T={class:"newpower-box"},Y={class:"btn-box-new"},Z={class:"tab-box"},q=V(u({__name:"Index",setup(e){n((()=>{me()})),i((()=>{ne()}));const u=I,h=a,_=m({}),V=m([]),U=m([]),q=m({}),K=m([]),L=m({}),Q=m([]),X=m({}),$=m([]),ee=m({}),ae=m([]),le=m(null),se=m(2e3),te=m(),re=d({param:null}),oe=m(),ue=d({param:null}),ne=()=>{clearInterval(le.value),le.value=null},ie=e=>{s({cmd:e,param:0}).then((e=>{e?o.msgSuccess("操作成功"):o.msgError("操作失败")})).catch((e=>{o.msgError("操作失败")}))},me=()=>{l().then((e=>{_.value=e,V.value=ce(_.value),U.value=de(_.value),ne(),le.value=setInterval((()=>{me()}),se.value)})).catch((e=>{}))},de=e=>{let a={"关口表通信状态":e["关口表通信状态"],"变压器表通信状态":e["变压器表通信状态"],"数据记录状态":e["数据记录状态"],"参数配置状态":e["参数配置状态"],"软件版本":e["软件版本"],"可充放状态":e["可充放状态"]};return t(a)},ce=e=>{ee.value={"储能状态":e["储能状态"],"工作模式":e["储能工作模式"],"故障信息":e["故障信息"],"储能功率":e["储能功率"],"关口功率":e["关口功率"],"光伏功率":e["光伏功率"],"负载功率":e["负载功率"],"变压器功率":e["变压器功率"]},L.value={"PCS状态":e["PCS状态"],"有功功率":e["PCS功率"],"U电压":e["U电压"],"V电压":e["V电压"],"W电压":e["W电压"]},q.value={SOC:e["BMS SOC"],"总电压":e["BMS总电压"],"总电流":e["BMS总电流"],"最高电芯电压":e["最高电芯电压"],"平均电芯电压":e["平均电芯电压"],"最低电芯电压":e["最低电芯电压"],"最高电芯温度":e["最高电芯温度"],"平均电芯温度":e["平均电芯温度"],"最低电芯温度":e["最低电芯温度"]},X.value={"空调模式":e["空调模式"],"出水温度":e["出水温度"],"回水温度":e["回水温度"],"出水压力":e["出水压力"],"回水压力":e["回水压力"]},ae.value=t(ee.value),ae.value.map((e=>(e.value=r(e.value),e))),Q.value=t(L.value),Q.value.map((e=>(e.value=r(e.value),e))),K.value=t(q.value),K.value.map((e=>(e.value=r(e.value),e))),$.value=t(X.value),$.value.map((e=>(e.value=r(e.value),e)));let a=[];return a.push($.value,Q.value,K.value,ae.value),a};return(e,a)=>{const l=c("el-input"),t=c("el-button"),r=c("el-form-item"),n=c("el-form"),i=c("el-option"),m=c("el-select"),d=c("el-card"),_=c("el-col"),I=c("el-table-column"),q=c("el-table"),K=c("el-row");return g(),p("div",M,[v("div",B,[v("div",O,[P,v("div",R,[(g(!0),p(f,null,b(V.value,((e,a)=>(g(),p("div",{key:a,class:w(["ctn-box",["ctn-box","ctn-box"+(a+1)]]),style:k("top: ".concat(x(h)[a].coordinate[0],"%; left: ").concat(x(h)[a].coordinate[1],"%;"))},[v("div",W,S(x(h)[a].name),1),v("div",A,[(g(!0),p(f,null,b(e,((e,a)=>(g(),p("div",{key:a+"A",class:"ctn-value"},[C(S(e.name)+"： ",1),v("span",null,S(e.value),1),C(" "+S(e.unit),1)])))),128))])],6)))),128)),(g(!0),p(f,null,b(x(h),((e,a)=>(g(),p("div",{key:a,class:w(["line-box","line-direction"+e.direction]),style:k("top: ".concat(e.coordinateline[0],"%; left: ").concat(e.coordinateline[1],"%;"))},[e.lineShow?(g(),p("div",F)):E("",!0)],6)))),128))])])]),v("div",N,[j(K,null,{default:y((()=>[j(_,{xs:24,sm:12,class:"col-box"},{default:y((()=>[v("div",D,[j(d,{class:"box-card"},{header:y((()=>[G])),default:y((()=>[v("div",null,[j(n,{ref_key:"formRef",ref:te,model:re,size:"default"},{default:y((()=>[j(r,{label:"功率设定",prop:"param"},{default:y((()=>[v("div",H,[j(l,{modelValue:re.param,"onUpdate:modelValue":a[0]||(a[0]=e=>re.param=e),type:"number",class:"newpower-input",style:{"max-width":"190px"}},{append:y((()=>[C("kW")])),_:1},8,["modelValue"]),j(t,{class:"newpower-btn",type:"primary",onClick:a[1]||(a[1]=e=>(e=>{if(!e)return;if(null===re.param)return void o.msgError("请输入功率");let a={cmd:4,param:Number(re.param)};s(a).then((e=>{e?o.msgSuccess("操作成功"):o.msgError("操作失败")})).catch((e=>{o.msgError("操作失败")}))})(te.value))},{default:y((()=>[C("设定")])),_:1})]),J])),_:1})])),_:1},8,["model"]),j(n,{ref_key:"formRef1",ref:oe,model:ue,size:"default"},{default:y((()=>[j(r,{label:"工作模式",prop:"param"},{default:y((()=>[v("div",T,[j(m,{modelValue:ue.param,"onUpdate:modelValue":a[2]||(a[2]=e=>ue.param=e),placeholder:"工作模式",style:{"max-width":"190px"}},{default:y((()=>[(g(!0),p(f,null,b(x(u),((e,a)=>(g(),z(i,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),j(t,{class:"newpower-btn",type:"primary",onClick:a[3]||(a[3]=e=>(e=>{if(!e)return;if(null===ue.param)return void o.msgError("请选择工作模式");let a={cmd:5,param:Number(ue.param)};s(a).then((e=>{e?o.msgSuccess("操作成功"):o.msgError("操作失败")})).catch((e=>{o.msgError("操作失败")}))})(oe.value))},{default:y((()=>[C("设定")])),_:1})])])),_:1})])),_:1},8,["model"]),v("div",Y,[v("div",null,[j(t,{type:"primary",size:"default",onClick:a[4]||(a[4]=e=>ie(1))},{default:y((()=>[C("监控")])),_:1}),j(t,{type:"primary",size:"default",onClick:a[5]||(a[5]=e=>ie(2))},{default:y((()=>[C("停机")])),_:1}),j(t,{type:"primary",size:"default",onClick:a[6]||(a[6]=e=>ie(3))},{default:y((()=>[C("运行")])),_:1})])])])])),_:1})])])),_:1}),j(_,{xs:24,sm:12},{default:y((()=>[v("div",Z,[j(q,{data:U.value,stripe:"",border:"",align:"center",style:{width:"100%"}},{default:y((()=>[j(I,{type:"index",width:"60",align:"center",label:"序号"}),j(I,{prop:"name",label:"数据名称",align:"center"}),j(I,{prop:"value",label:"数值",align:"center"}),j(I,{prop:"unit",label:"单位",align:"center",width:"60"})])),_:1},8,["data"])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-b1031735"]]);export{q as default};
