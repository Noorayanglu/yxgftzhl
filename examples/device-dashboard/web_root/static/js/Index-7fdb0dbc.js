import"./index-87fd8500.js";import"./utils-e10d97cb.js";import{d as a,e,i as t,ag as n,c as i,a as s,F as o,a7 as m,u as l,U as d,O as u,az as c,aA as r,o as p,J as v,T as j,S as k}from"./@vue-c5a747fc.js";import{_ as y}from"./index-31e75fad.js";import"./lodash-20cd73ca.js";import"./dayjs-9ee440cb.js";import"./axios-5b55c11d.js";import"./feedback-551b2bff.js";import"./element-plus-a5ae5727.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-90035fc5.js";import"./@element-plus-388117bf.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";import"./vue-router-641e505b.js";import"./pinia-801b3705.js";/* empty css                    */const b=[{name:"全程电终端",coordinate:[72,9],data:[{name:"储能状态",unit:""},{name:"储能功率",unit:"kW"},{name:"储能SOC",unit:"%"}]},{name:"1#",coordinate:[66,22],data:[{name:"储能状态",unit:""},{name:"储能功率",unit:"kW"},{name:"储能SOC",unit:"%"}]},{name:"光伏",coordinate:[58,64],data:[{name:"光伏功率",unit:"kW"}]},{name:"负载",coordinate:[58,49],data:[{name:"负载功率",unit:"kW"}]},{name:"关口表",coordinate:[58,78],data:[{name:"关口表功率",unit:"kW"}]}],f=[{name:"ac1",coordinate:[32,34],data:[{name:"室外",key:"空调室外温度",unit:"℃"},{name:"出水",key:"空调出水温度",unit:"℃"},{name:"回水",key:"空调回水温度",unit:"℃"}]},{name:"dh1",coordinate:[24,45],data:[{name:"温度",key:"除湿机温度",unit:"℃"},{name:"湿度",key:"除湿机湿度",unit:"%"}]},{name:"pcs1",coordinate:[55,31],data:[{name:"有功功率",key:"有功功率",unit:"kW"},{name:"IGBT温度",key:"IGBT温度",unit:"℃"},{name:"AB相线",key:"AB相线",unit:"V"},{name:"BC相线",key:"BC相线",unit:"V"},{name:"CA相线",key:"CA相线",unit:"V"}]},{name:"bms1",coordinate:[66,57],data:[{name:"直流高压状态",key:"直流高压状态",unit:""},{name:"总电压",key:"总电压",unit:"V"},{name:"总电流",key:"总电流",unit:"A"}]}],g=a=>(c("data-v-f030958a"),a=a(),r(),a),x={class:"dashboard"},A=g((()=>s("div",{class:"bg-box"},[s("img",{src:"/static/jpg/bgQcd-392a3536.jpg",alt:""})],-1))),h={class:"tip-name"},B={class:"tip-value-box"},C=g((()=>s("div",null,[s("img",{src:"/static/png/ctn-0d0c1454.png",alt:""})],-1))),V={class:"ctn-name"},W={class:"ctn-value-box"},_=y(a({__name:"Index",setup(a){const c=b,r=f,y=e({}),g=e({}),_=e(!1);e({}),e({}),e([]),e({}),e({}),e([]),e({}),e({}),e([]),t((()=>{}));const z=()=>{_.value=!0},I=a=>{_.value=!1};return(a,e)=>{const t=n("el-drawer");return p(),i("div",x,[A,s("div",null,[(p(!0),i(o,null,m(l(c),((a,e)=>(p(),i("div",{key:e,class:"tip-box",style:v("top: ".concat(a.coordinate[0],"%; left: ").concat(a.coordinate[1],"%;")),onClick:z},[s("div",h,j(a.name),1),s("div",B,[(p(!0),i(o,null,m(a.data,((a,e)=>(p(),i("div",{key:e+"A",class:"tip-value"},[s("span",null,j(y.value?y.value[a.name]:""),1),k(" "+j(a.unit),1)])))),128))])],4)))),128))]),d(t,{modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a),title:"1#",direction:"rtl","before-close":I,size:"70%"},{default:u((()=>[C,s("div",null,[(p(!0),i(o,null,m(l(r),((a,e)=>(p(),i("div",{key:e,class:"ctn-box",style:v("top: ".concat(a.coordinate[0],"%; left: ").concat(a.coordinate[1],"%;"))},[s("div",V,j(a.name),1),s("div",W,[(p(!0),i(o,null,m(a.data,((a,e)=>(p(),i("div",{key:e+"A",class:"ctn-value"},[k(j(a.name)+"： ",1),s("span",null,j(g.value?g.value[a.key]:""),1),k(" "+j(a.unit),1)])))),128))])],4)))),128))])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-f030958a"]]);export{_ as default};