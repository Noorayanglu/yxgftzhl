import{j as e,k as a}from"./user-bce2bbc2.js";import{j as l}from"./index-15b8b0cc.js";import{f as s}from"./feedback-16d8dab9.js";import{d as t,e as o,Z as n,i as r,Y as u,ag as i,c,U as m,O as d,o as p,a as v,F as f,a7 as b,S as j,M as g,az as x,aA as h}from"./@vue-196ae313.js";import{_}from"./index-e3834d05.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-b81b67de.js";import"./element-plus-6e6ac90a.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-1a3a1657.js";import"./@element-plus-e3505fc2.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-8d480e59.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-4e843cc0.js";import"./pinia-b3224f58.js";/* empty css                    */const k=e=>(x("data-v-1c3696b7"),e=e(),h(),e),w={class:"interface"},y=k((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/gkj1-442398ae.png",alt:""})],-1))),z=k((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/gkj2-de611663.png",alt:""})],-1))),I={class:"btn-box"},V={class:"card-box"},A=k((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),F={class:"newpower-box"},M={class:"ctnbox-box"},O={class:"ctn-box"},S=_(t({__name:"Index",setup(t){const x=o(),h=n({index:null});o([]);const _=o({}),k=o([]),S=o([]),U=o([]);o([]);const C=o(null),D=o(2e3);r((()=>{N()})),u((()=>{E()}));const E=()=>{clearInterval(C.value),C.value=null},G=e=>{a({cmd:1,index:e}).then((e=>{console.log("复位成功"),s.msgSuccess("复位成功")})).catch((e=>{console.log("复位失败",e)}))},N=()=>{e().then((e=>{_.value=e,k.value=[],S.value=[],l(_.value).map(((e,a)=>{e.name.indexOf("485")>-1?k.value.push(e):S.value.push(e)})),k.value.map(((e,a)=>(e.value=l(e.value),e.value.map((a=>(a[e.name]=a.value,a))),e))),k.value.reduce(((e,a,l)=>{let s=((e,a,l)=>{const s=new Map;for(const t of e.concat(a))if(s.has(t[l])){const e=s.get(t[l]);for(const a in t)a!==l&&(e[a]=t[a])}else s.set(t[l],t);return Array.from(s.values())})(e.value,a.value,"name");return l===k.value.length-1&&(U.value=s),{value:s}})),S.value.map(((e,a)=>(e.value=l(e.value),e))),E(),C.value=setInterval((()=>{console.log("bms定时器"),N()}),D.value)})).catch((e=>{console.log("首页数据获取失败",e)}))};return(e,a)=>{const l=i("el-option"),t=i("el-select"),o=i("el-button"),n=i("el-form-item"),r=i("el-form"),u=i("el-card"),_=i("el-col"),C=i("el-table-column"),D=i("el-table"),E=i("el-row");return p(),c("div",w,[m(E,null,{default:d((()=>[m(_,{span:8},{default:d((()=>[y,z,v("div",I,[v("div",V,[m(u,{class:"box-card"},{header:d((()=>[A])),default:d((()=>[v("div",null,[m(r,{ref_key:"formRef",ref:x,model:h,size:"default"},{default:d((()=>[m(n,{label:"通道选择",prop:"index"},{default:d((()=>[v("div",F,[m(t,{modelValue:h.index,"onUpdate:modelValue":a[0]||(a[0]=e=>h.index=e),placeholder:"通道",class:"newpower-input"},{default:d((()=>[(p(),c(f,null,b(6,(e=>m(l,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),m(o,{type:"primary",onClick:a[1]||(a[1]=e=>{x.value&&(null!==h.index?G(Number(h.index)):s.msgError("请选择通道"))})},{default:d((()=>[j("复位")])),_:1})])])),_:1})])),_:1},8,["model"])])])),_:1})])])])),_:1}),m(_,{span:16},{default:d((()=>[v("div",M,[v("div",O,[m(D,{data:U.value,stripe:"",border:"",align:"center"},{default:d((()=>[m(C,{prop:"name",label:"数据名称",align:"center"}),(p(!0),c(f,null,b(k.value,((e,a)=>(p(),g(C,{key:a,prop:e.name,label:e.name,align:"center","min-width":"100"},null,8,["prop","label"])))),128))])),_:1},8,["data"])]),(p(!0),c(f,null,b(S.value,((e,a)=>(p(),c("div",{key:a,class:"ctn-box"},[m(D,{data:e.value,stripe:"",border:"",align:"center"},{default:d((()=>[m(C,{label:e.name,align:"center"},{default:d((()=>[m(C,{prop:"name",label:"数据名称",align:"center"}),m(C,{prop:"value",label:"数值",align:"center","min-width":"130"})])),_:2},1032,["label"])])),_:2},1032,["data"])])))),128))])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-1c3696b7"]]);export{S as default};
