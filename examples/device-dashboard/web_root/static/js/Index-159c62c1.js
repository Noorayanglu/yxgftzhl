import{d as a,e}from"./user-27fa2591.js";import{j as l}from"./index-05ef4563.js";import{f as s}from"./feedback-5363c0cc.js";import{d as t,e as r,Z as n,i as o,Y as u,ag as m,c as i,U as c,O as d,o as p,a as v,F as f,a7 as b,S as g,M as x,u as _,az as j,aA as h}from"./@vue-c5a747fc.js";import{_ as k}from"./index-d7d3ec3a.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./element-plus-230cec57.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const w=[{name:"1#电池包",value:1},{name:"2#电池包",value:2},{name:"3#电池包",value:3},{name:"4#电池包",value:4},{name:"5#电池包",value:5}],y=a=>(j("data-v-09fa44af"),a=a(),h(),a),C={class:"fighting"},E=y((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/fe1-0b110748.png",alt:""})],-1))),z={class:"ctnbox-box"},I={class:"btn-box"},A={class:"card-box"},S=y((()=>v("div",{class:"card-header"},[v("span",null,"控制")],-1))),V={class:"btn-box-new first-line-btn"},M={class:"newpower-box"},O={class:"btn-box-new"},U=y((()=>v("div",{class:"img-box"},[v("img",{src:"/static/png/fe-4489648d.png",alt:""})],-1))),D={class:"ctnbox-box"},F={class:"ctn-box"},G=k(t({__name:"Index",setup(t){const j=w;r([]);const h=r({}),k=r([]);r([]);const y=r([]),G=r([]);r([]);const K=r(null),N=r(2e3),P=r(),R=n({param:null});o((()=>{q()})),u((()=>{Y()}));const Y=()=>{clearInterval(K.value),K.value=null},Z=(a,l)=>{e({cmd:a,param:l}).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))},q=()=>{a().then((a=>{h.value=a,k.value=[],y.value=[],l(h.value).map(((a,e)=>{a.name.indexOf("PACK")>-1?k.value.push(a):y.value.push(a)})),k.value.map(((a,e)=>(a.value=l(a.value),a.value.map((e=>(e[a.name]=e.value,e))),a))),k.value.reduce(((a,e,l)=>{let s=((a,e,l)=>{const s=new Map;for(const t of a.concat(e))if(s.has(t[l])){const a=s.get(t[l]);for(const e in t)e!==l&&(a[e]=t[e])}else s.set(t[l],t);return Array.from(s.values())})(a.value,e.value,"name");return l===k.value.length-1&&(G.value=s),{value:s}})),y.value.map(((a,e)=>(a.value=l(a.value),a))),Y(),K.value=setInterval((()=>{q()}),N.value)})).catch((a=>{}))};return(a,l)=>{const t=m("el-col"),r=m("el-table-column"),n=m("el-table"),o=m("el-button"),u=m("el-option"),h=m("el-select"),w=m("el-form-item"),K=m("el-form"),N=m("el-card"),Y=m("el-row");return p(),i("div",C,[c(Y,null,{default:d((()=>[c(t,{xs:24,sm:5},{default:d((()=>[E])),_:1}),c(t,{xs:24,sm:7},{default:d((()=>[v("div",z,[(p(!0),i(f,null,b(y.value,((a,e)=>(p(),i("div",{key:e,class:"ctn-box"},[c(n,{data:a.value,stripe:"",border:"",align:"center"},{default:d((()=>[c(r,{label:"全氟己酮自动灭火系统",align:"center"},{default:d((()=>[c(r,{prop:"name",label:"数据名称",align:"center"}),c(r,{prop:"value",label:a.name,align:"center","min-width":"110"},null,8,["label"])])),_:2},1024)])),_:2},1032,["data"])])))),128))])])),_:1}),c(t,{xs:24,sm:12},{default:d((()=>[v("div",I,[v("div",A,[c(N,{class:"box-card"},{header:d((()=>[S])),default:d((()=>[v("div",null,[c(K,{ref_key:"formRef",ref:P,model:R,size:"default"},{default:d((()=>[v("div",V,[v("div",null,[c(o,{onClick:l[0]||(l[0]=a=>Z(4,1))},{default:d((()=>[g("锁定")])),_:1}),c(o,{onClick:l[1]||(l[1]=a=>Z(4,0))},{default:d((()=>[g("解锁")])),_:1})])]),c(w,{label:"电池包喷发",prop:"param"},{default:d((()=>[v("div",M,[c(h,{modelValue:R.param,"onUpdate:modelValue":l[2]||(l[2]=a=>R.param=a),placeholder:"电池包喷发",style:{"max-width":"190px"}},{default:d((()=>[(p(!0),i(f,null,b(_(j),((a,e)=>(p(),x(u,{key:e,label:a.name,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),c(o,{class:"newpower-btn",onClick:l[3]||(l[3]=a=>(a=>{if(!a)return;if(null===R.param)return void s.msgError("请选择电池包");let l={cmd:0,param:Number(R.param)};e(l).then((a=>{a?s.msgSuccess("操作成功"):s.msgError("操作失败")})).catch((a=>{s.msgError("操作失败")}))})(P.value))},{default:d((()=>[g("电池包喷发")])),_:1})])])),_:1}),v("div",O,[v("div",null,[c(o,{onClick:l[4]||(l[4]=a=>Z(1,0))},{default:d((()=>[g("电池仓喷发")])),_:1}),c(o,{onClick:l[5]||(l[5]=a=>Z(2,1))},{default:d((()=>[g("喷发确认")])),_:1}),c(o,{onClick:l[6]||(l[6]=a=>Z(2,0))},{default:d((()=>[g("取消喷发确认")])),_:1}),c(o,{onClick:l[7]||(l[7]=a=>Z(3,0))},{default:d((()=>[g("重置报警")])),_:1})])])])),_:1},8,["model"])])])),_:1})])])])),_:1}),c(t,{xs:24,sm:5},{default:d((()=>[U])),_:1}),c(t,{xs:24,sm:19},{default:d((()=>[v("div",D,[v("div",F,[c(n,{data:G.value,stripe:"",border:"",align:"center"},{default:d((()=>[c(r,{prop:"",label:"电池包火灾探测器",align:"center"},{default:d((()=>[c(r,{prop:"name",label:"数据名称",align:"center"}),(p(!0),i(f,null,b(k.value,((a,e)=>(p(),x(r,{key:e,prop:a.name,label:a.name,align:"center"},null,8,["prop","label"])))),128)),c(r,{prop:"unit",label:"单位",align:"center"})])),_:1})])),_:1},8,["data"])])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-09fa44af"]]);export{G as default};
