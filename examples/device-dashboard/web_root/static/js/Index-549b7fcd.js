import{j as e,k as a}from"./user-caa60a0a.js";import{j as l}from"./index-1df7b73e.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as n,Z as r,i as o,Y as u,ag as i,c as m,U as d,O as p,o as c,a as v,F as f,a7 as b,S as j,M as x,az as g,aA as h}from"./@vue-c5a747fc.js";import{_}from"./index-cdb0ed15.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const k=e=>(g("data-v-86ef9f44"),e=e(),h(),e),w={class:"interface"},y=k((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/gkj1-442398ae.png",alt:""})],-1))),z=k((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/gkj2-de611663.png",alt:""})],-1))),I={class:"btn-box"},V={class:"card-box"},A=k((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),F={class:"newpower-box"},M={class:"ctnbox-box"},O={class:"ctn-box"},S=_(t({__name:"Index",setup(t){const g=n(),h=r({index:null});n([]);const _=n({}),k=n([]),S=n([]),U=n([]);n([]);const C=n(null),D=n(2e3);o((()=>{N()})),u((()=>{E()}));const E=()=>{clearInterval(C.value),C.value=null},G=e=>{a({cmd:1,index:e}).then((e=>{s.msgSuccess("复位成功")})).catch((e=>{}))},N=()=>{e().then((e=>{_.value=e,k.value=[],S.value=[],l(_.value).map(((e,a)=>{e.name.indexOf("485")>-1?k.value.push(e):S.value.push(e)})),k.value.map(((e,a)=>(e.value=l(e.value),e.value.map((a=>(a[e.name]=a.value,a))),e))),k.value.reduce(((e,a,l)=>{let s=((e,a,l)=>{const s=new Map;for(const t of e.concat(a))if(s.has(t[l])){const e=s.get(t[l]);for(const a in t)a!==l&&(e[a]=t[a])}else s.set(t[l],t);return Array.from(s.values())})(e.value,a.value,"name");return l===k.value.length-1&&(U.value=s),{value:s}})),S.value.map(((e,a)=>(e.value=l(e.value),e))),E(),C.value=setInterval((()=>{N()}),D.value)})).catch((e=>{}))};return(e,a)=>{const l=i("el-option"),t=i("el-select"),n=i("el-button"),r=i("el-form-item"),o=i("el-form"),u=i("el-card"),_=i("el-col"),C=i("el-table-column"),D=i("el-table"),E=i("el-row");return c(),m("div",w,[d(E,null,{default:p((()=>[d(_,{xs:24,sm:8},{default:p((()=>[y,z,v("div",I,[v("div",V,[d(u,{class:"box-card"},{header:p((()=>[A])),default:p((()=>[v("div",null,[d(o,{ref_key:"formRef",ref:g,model:h,size:"default"},{default:p((()=>[d(r,{label:"通道选择",prop:"index"},{default:p((()=>[v("div",F,[d(t,{modelValue:h.index,"onUpdate:modelValue":a[0]||(a[0]=e=>h.index=e),placeholder:"通道",class:"newpower-input"},{default:p((()=>[(c(),m(f,null,b(6,(e=>d(l,{key:e,label:e,value:e},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),d(n,{type:"primary",onClick:a[1]||(a[1]=e=>{g.value&&(null!==h.index?G(Number(h.index)):s.msgError("请选择通道"))})},{default:p((()=>[j("复位")])),_:1})])])),_:1})])),_:1},8,["model"])])])),_:1})])])])),_:1}),d(_,{xs:24,sm:16},{default:p((()=>[v("div",M,[v("div",O,[d(D,{data:U.value,stripe:"",border:"",align:"center"},{default:p((()=>[d(C,{prop:"name",label:"数据名称",align:"center"}),(c(!0),m(f,null,b(k.value,((e,a)=>(c(),x(C,{key:a,prop:e.name,label:e.name,align:"center","min-width":"100"},null,8,["prop","label"])))),128))])),_:1},8,["data"])]),(c(!0),m(f,null,b(S.value,((e,a)=>(c(),m("div",{key:a,class:"ctn-box"},[d(D,{data:e.value,stripe:"",border:"",align:"center"},{default:p((()=>[d(C,{label:e.name,align:"center"},{default:p((()=>[d(C,{prop:"name",label:"数据名称",align:"center"}),d(C,{prop:"value",label:"数值",align:"center","min-width":"130"})])),_:2},1032,["label"])])),_:2},1032,["data"])])))),128))])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-86ef9f44"]]);export{S as default};
