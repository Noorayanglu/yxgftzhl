var e=Object.defineProperty,s=(s,t,o)=>(((s,t,o)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o})(s,"symbol"!=typeof t?t+"":t,o),o);import{_ as t,a as o,b as a}from"./logotext1-83989020.js";import{l as n}from"./lodash-20cd73ca.js";import{a as r,A as c}from"./axios-efa01f16.js";import{g as i,c as l,r as u,P as m,_ as p}from"./index-31a9f4d8.js";import{E as d,a as R,b as E,c as _}from"./element-plus-e97dd2ec.js";import{N as g}from"./nprogress-867e68f1.js";import{d as O,e as h,Z as T,aB as f,ag as I,c as S,a as v,U as A,O as x,az as C,aA as b,o as N,S as j}from"./@vue-a06dd9b7.js";import"./dayjs-9ee440cb.js";import"./vue-router-5083f3ae.js";import"./pinia-d7a0ce77.js";/* empty css                    */import"./@element-plus-93265fcf.js";import"./vue-baidu-map-3x-ec16abbe.js";import"./lodash-es-fb3d0246.js";import"./@vueuse-c1009965.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./escape-html-92a447fa.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-9ca8b935.js";const P={terminal:1,title:"正辉智慧能源官网",version:"1.4.0",baseUrl:"http://124.222.185.120//",urlPrefix:"",timeout:1e4};var y=(e=>(e.JSON="application/json;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(y||{}),w=(e=>(e.GET="GET",e.POST="POST",e))(w||{}),k=(e=>(e[e.SUCCESS=200]="SUCCESS",e[e.FAILED=300]="FAILED",e[e.PARAMS_VALID_ERROR=310]="PARAMS_VALID_ERROR",e[e.PARAMS_TYPE_ERROR=311]="PARAMS_TYPE_ERROR",e[e.REQUEST_METHOD_ERROR=312]="REQUEST_METHOD_ERROR",e[e.ASSERT_ARGUMENT_ERROR=313]="ASSERT_ARGUMENT_ERROR",e[e.ASSERT_MYBATIS_ERROR=314]="ASSERT_MYBATIS_ERROR",e[e.LOGIN_ACCOUNT_ERROR=330]="LOGIN_ACCOUNT_ERROR",e[e.LOGIN_DISABLE_ERROR=331]="LOGIN_DISABLE_ERROR",e[e.TOKEN_EMPTY=332]="TOKEN_EMPTY",e[e.TOKEN_INVALID=333]="TOKEN_INVALID",e[e.VERIFICATION_CODE_ERROR=334]="VERIFICATION_CODE_ERROR",e[e.NO_PERMISSTION=403]="NO_PERMISSTION",e[e.REQUEST_404_ERROR=404]="REQUEST_404_ERROR",e[e.SYSTEM_ERROR=500]="SYSTEM_ERROR",e))(k||{});const U=new Map,D=class e{static createInstance(){return this.instance??(this.instance=new e)}add(e){const s=e.url;this.remove(s),e.cancelToken=new r.CancelToken((e=>{U.has(s)||U.set(s,e)}))}remove(e){if(U.has(e)){const s=U.get(e);s&&s(e),U.delete(e)}}};s(D,"instance");const M=D.createInstance();class V{constructor(e){s(this,"axiosInstance"),s(this,"config"),s(this,"options"),this.config=e,this.options=e.requestOptions,this.axiosInstance=r.create(e),this.setupInterceptors()}getAxiosInstance(){return this.axiosInstance}setupInterceptors(){if(!this.config.axiosHooks)return;const{requestInterceptorsHook:e,requestInterceptorsCatchHook:s,responseInterceptorsHook:t,responseInterceptorsCatchHook:o}=this.config.axiosHooks;this.axiosInstance.interceptors.request.use((s=>(this.addCancelToken(s),n.isFunction(e)&&(s=e(s)),s)),(e=>(n.isFunction(s)&&s(e),e))),this.axiosInstance.interceptors.response.use((e=>(this.removeCancelToken(e.config.url),n.isFunction(t)&&(e=t(e)),e)),(e=>{var s;return n.isFunction(o)&&o(e),e.code!=c.ERR_CANCELED&&this.removeCancelToken(null==(s=e.config)?void 0:s.url),e.code==c.ECONNABORTED||e.code==c.ERR_NETWORK?new Promise((e=>setTimeout(e,500))).then((()=>this.retryRequest(e))):Promise.reject(e)}))}addCancelToken(e){const{ignoreCancelToken:s}=e.requestOptions;!s&&M.add(e)}removeCancelToken(e){M.remove(e)}retryRequest(e){var s;const t=e.config,{retryCount:o,isOpenRetry:a}=t.requestOptions;return a&&(null==(s=t.method)?void 0:s.toUpperCase())!=w.POST?(t.retryCount=t.retryCount??0,t.retryCount>=o?Promise.reject(e):(t.retryCount++,this.axiosInstance.request(t))):Promise.reject(e)}get(e,s){return this.request({...e,method:w.GET},s)}post(e,s){return this.request({...e,method:w.POST},s)}request(e,s){const t=n.merge({},this.options,s),o={...n.cloneDeep(e),requestOptions:t},{urlPrefix:a}=t;return a&&(o.url=`${a}${e.url}`),new Promise(((e,s)=>{this.axiosInstance.request(o).then((s=>{e(s)})).catch((e=>{s(e)}))}))}}const L=class e{constructor(){s(this,"loadingInstance",null)}static getInstance(){return this.instance??(this.instance=new e)}msg(e){d.info(e)}msgError(e){d.error(e)}msgSuccess(e){d.success(e)}msgWarning(e){d.warning(e)}alert(e){R.alert(e,"系统提示")}alertError(e){R.alert(e,"系统提示",{type:"error"})}alertSuccess(e){R.alert(e,"系统提示",{type:"success"})}alertWarning(e){R.alert(e,"系统提示",{type:"warning"})}notify(e){E.info(e)}notifyError(e){E.error(e)}notifySuccess(e){E.success(e)}notifyWarning(e){E.warning(e)}confirm(e){return R.confirm(e,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})}prompt(e,s,t){return R.prompt(e,s,{confirmButtonText:"确定",cancelButtonText:"取消",...t})}loading(e){this.loadingInstance=_.service({lock:!0,text:e})}closeLoading(){var e;null==(e=this.loadingInstance)||e.close()}};s(L,"instance",null);const q=L.getInstance(),F={requestInterceptorsHook(e){var s;g.start();const{withToken:t,isParamsToData:o}=e.requestOptions,a=e.params||{},n=e.headers||{};if(t){const e=i();n["like-admin"]=e}return o&&!Reflect.has(e,"data")&&(null==(s=e.method)?void 0:s.toUpperCase())===w.POST&&(e.data=a,e.params={}),e.headers=n,e},requestInterceptorsCatchHook:e=>(g.done(),e),async responseInterceptorsHook(e){g.done();const{isTransformResponse:s,isReturnDefaultResponse:t}=e.config.requestOptions;if(t)return e;if(!s)return e.data;const{code:o,data:a,show:n,msg:r}=e.data;switch(o){case k.SUCCESS:return n&&r&&q.msgSuccess(r),a;case k.PARAMS_TYPE_ERROR:case k.PARAMS_VALID_ERROR:case k.REQUEST_METHOD_ERROR:case k.ASSERT_ARGUMENT_ERROR:case k.ASSERT_MYBATIS_ERROR:case k.LOGIN_ACCOUNT_ERROR:case k.LOGIN_DISABLE_ERROR:case k.NO_PERMISSTION:case k.FAILED:case k.SYSTEM_ERROR:case k.VERIFICATION_CODE_ERROR:return r&&q.msgError(r),Promise.reject(a);case k.TOKEN_INVALID:case k.TOKEN_EMPTY:return l(),u.push(m.LOGIN),Promise.reject();default:return a}},responseInterceptorsCatchHook:e=>(g.done(),e.code!==c.ERR_CANCELED&&e.message&&q.msgError(e.message),Promise.reject(e))},H={timeout:P.timeout,baseURL:P.baseUrl,headers:{"Content-Type":y.JSON,version:P.version},axiosHooks:F,requestOptions:{isParamsToData:!0,isReturnDefaultResponse:!1,isTransformResponse:!0,urlPrefix:P.urlPrefix,ignoreCancelToken:!1,withToken:!0,isOpenRetry:!0,retryCount:2}};const B=new V(n.merge(H,G||{}));var G;const Y=e=>(C("data-v-f7ea4414"),e=e(),b(),e),K={class:"contact"},z=Y((()=>v("div",{id:"contact",class:"maopos"},null,-1))),Q={class:"contact-box"},W={class:"about-common-box"},J=Y((()=>v("div",{class:"aboutcom-box"},[v("img",{src:"/static/jpg/company-12f31102.jpg",alt:""})],-1))),$=Y((()=>v("div",{class:"contact-detail"},[v("div",{class:"con-com-title"},"江苏正辉能源科技有限公司"),v("div",{class:"con-com-tip"},[v("div",{class:"con-com-tip-box"},[v("span",{class:"con-com-tip-title"},"公司电话："),v("span",{class:"con-com-tip-text"},"0519-81166520")])]),v("div",{class:"con-com-tip"},[v("div",{class:"con-com-tip-box"},[v("span",{class:"con-com-tip-title"},"公司邮箱："),v("span",{class:"con-com-tip-text"},"marketing@zhspower.com")])]),v("div",{class:"con-com-tip"},[v("div",{class:"con-com-tip-box"},[v("span",{class:"con-com-tip-title"},"公司网址："),v("span",{class:"con-com-tip-text"},"http://www.zhspower.com")])]),v("div",{class:"con-com-tip"},[v("div",{class:"con-com-tip-box"},[v("span",{class:"con-com-tip-title"},"公司地址："),v("span",{class:"con-com-tip-text"},"江苏省常州市新北区正强路18号")])])],-1))),Z=Y((()=>v("div",{class:"casesimg-box"},[v("img",{src:"/static/png/map-c9bddd99.png",alt:""})],-1))),X={class:"words-box"},ee=Y((()=>v("div",{class:"userword"},"客户留言",-1))),se={class:"footer"},te=p(O({__name:"Index",setup(e){h(new URL(Object.assign({"/src/assets/images/logo/logo.png":t,"/src/assets/images/logo/logotext.png":o,"/src/assets/images/logo/logotext1.png":a})["/src/assets/images/logo/logotext.png"],self.location).href);const s=h(),n=T({name:"",phone:"",email:"",address:"",content:""}),r=T({name:[{required:!0,message:"请输入您的姓名",trigger:"blur"}],content:[{required:!0,message:"请输入留言内容",trigger:"blur"}]});f((()=>{setTimeout((()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})}),300)}));const c=()=>{var e;(e=n,B.post({url:"/api/portal/leaveMessage",params:e})).then((e=>{q.msgSuccess("提交成功"),i(s.value)})).catch((e=>{}))},i=e=>{e&&e.resetFields()};return(e,t)=>{const o=I("el-col"),a=I("el-row"),l=I("el-input"),u=I("el-form-item"),m=I("el-button"),p=I("el-form");return N(),S("div",K,[z,v("div",Q,[A(a,null,{default:x((()=>[A(o,{span:24},{default:x((()=>[v("div",W,[A(a,null,{default:x((()=>[A(o,{xs:24,sm:10},{default:x((()=>[J])),_:1}),A(o,{xs:24,sm:14},{default:x((()=>[$])),_:1})])),_:1})])])),_:1}),A(o,{span:24},{default:x((()=>[Z])),_:1}),A(o,{span:24},{default:x((()=>[v("div",X,[ee,A(p,{"label-width":"80px",size:"large",ref_key:"ruleFormRef",ref:s,model:n,rules:r},{default:x((()=>[A(a,null,{default:x((()=>[A(o,{xs:24,sm:12},{default:x((()=>[A(u,{label:"姓名",prop:"name"},{default:x((()=>[A(l,{modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),placeholder:"请输入姓名",clearable:""},null,8,["modelValue"])])),_:1}),A(u,{label:"手机",prop:"phone"},{default:x((()=>[A(l,{modelValue:n.phone,"onUpdate:modelValue":t[1]||(t[1]=e=>n.phone=e),placeholder:"请输入手机",clearable:""},null,8,["modelValue"])])),_:1}),A(u,{label:"邮箱",prop:"email"},{default:x((()=>[A(l,{modelValue:n.email,"onUpdate:modelValue":t[2]||(t[2]=e=>n.email=e),placeholder:"请输入邮箱",clearable:""},null,8,["modelValue"])])),_:1}),A(u,{label:"地址",prop:"address"},{default:x((()=>[A(l,{modelValue:n.address,"onUpdate:modelValue":t[3]||(t[3]=e=>n.address=e),placeholder:"请输入地址",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),A(o,{xs:24,sm:12},{default:x((()=>[A(u,{label:"内容",prop:"content"},{default:x((()=>[A(l,{modelValue:n.content,"onUpdate:modelValue":t[4]||(t[4]=e=>n.content=e),type:"textarea",height:"600",placeholder:"请输入您的留言",maxlength:"500","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),A(u,null,{default:x((()=>[v("div",se,[A(m,{type:"primary",onClick:t[5]||(t[5]=e=>(async e=>{e&&await e.validate(((e,s)=>{e&&c()}))})(s.value))},{default:x((()=>[j("提交")])),_:1}),A(m,{onClick:t[6]||(t[6]=e=>i(s.value))},{default:x((()=>[j("清空")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])])),_:1})])),_:1})])])}}}),[["__scopeId","data-v-f7ea4414"]]);export{te as default};
