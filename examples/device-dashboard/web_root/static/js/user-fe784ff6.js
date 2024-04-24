var e=Object.defineProperty,t=(t,s,r)=>(((t,s,r)=>{s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r})(t,"symbol"!=typeof s?s+"":s,r),r);import{l as s}from"./lodash-20cd73ca.js";import{a as r,A as n}from"./axios-efa01f16.js";import{g as o,c as a,r as i,P as R}from"./index-0f041ee9.js";import{f as c}from"./feedback-179fee83.js";const u={terminal:1,title:"正辉智慧终端",version:"1.4.0",baseUrl:`${{}.VITE_APP_BASE_URL||""}/`,urlPrefix:"",timeout:1e4,withToken:!1,isTransformResponse:!1,isReturnDefaultResponse:!1};var E=(e=>(e.JSON="application/json;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(E||{}),p=(e=>(e.GET="GET",e.POST="POST",e))(p||{}),O=(e=>(e[e.SUCCESS=200]="SUCCESS",e[e.FAILED=300]="FAILED",e[e.PARAMS_VALID_ERROR=310]="PARAMS_VALID_ERROR",e[e.PARAMS_TYPE_ERROR=311]="PARAMS_TYPE_ERROR",e[e.REQUEST_METHOD_ERROR=312]="REQUEST_METHOD_ERROR",e[e.ASSERT_ARGUMENT_ERROR=313]="ASSERT_ARGUMENT_ERROR",e[e.ASSERT_MYBATIS_ERROR=314]="ASSERT_MYBATIS_ERROR",e[e.LOGIN_ACCOUNT_ERROR=330]="LOGIN_ACCOUNT_ERROR",e[e.LOGIN_DISABLE_ERROR=331]="LOGIN_DISABLE_ERROR",e[e.TOKEN_EMPTY=332]="TOKEN_EMPTY",e[e.TOKEN_INVALID=333]="TOKEN_INVALID",e[e.VERIFICATION_CODE_ERROR=334]="VERIFICATION_CODE_ERROR",e[e.NO_PERMISSTION=403]="NO_PERMISSTION",e[e.REQUEST_404_ERROR=404]="REQUEST_404_ERROR",e[e.SYSTEM_ERROR=500]="SYSTEM_ERROR",e))(O||{});const T=new Map,_=class e{static createInstance(){return this.instance??(this.instance=new e)}add(e){const t=e.url;this.remove(t),e.cancelToken=new r.CancelToken((e=>{T.has(t)||T.set(t,e)}))}remove(e){if(T.has(e)){const t=T.get(e);t&&t(e),T.delete(e)}}};t(_,"instance");const I=_.createInstance();class m{constructor(e){t(this,"axiosInstance"),t(this,"config"),t(this,"options"),this.config=e,this.options=e.requestOptions,this.axiosInstance=r.create(e),this.setupInterceptors()}getAxiosInstance(){return this.axiosInstance}setupInterceptors(){if(!this.config.axiosHooks)return;const{requestInterceptorsHook:e,requestInterceptorsCatchHook:t,responseInterceptorsHook:r,responseInterceptorsCatchHook:o}=this.config.axiosHooks;this.axiosInstance.interceptors.request.use((t=>(this.addCancelToken(t),s.isFunction(e)&&(t=e(t)),t)),(e=>(s.isFunction(t)&&t(e),e))),this.axiosInstance.interceptors.response.use((e=>(this.removeCancelToken(e.config.url),s.isFunction(r)&&(e=r(e)),e)),(e=>{var t;return s.isFunction(o)&&o(e),e.code!=n.ERR_CANCELED&&this.removeCancelToken(null==(t=e.config)?void 0:t.url),e.code==n.ECONNABORTED||e.code==n.ERR_NETWORK?new Promise((e=>setTimeout(e,500))).then((()=>this.retryRequest(e))):Promise.reject(e)}))}addCancelToken(e){const{ignoreCancelToken:t}=e.requestOptions;!t&&I.add(e)}removeCancelToken(e){I.remove(e)}retryRequest(e){var t;const s=e.config,{retryCount:r,isOpenRetry:n}=s.requestOptions;return n&&(null==(t=s.method)?void 0:t.toUpperCase())!=p.POST?(s.retryCount=s.retryCount??0,s.retryCount>=r?Promise.reject(e):(s.retryCount++,this.axiosInstance.request(s))):Promise.reject(e)}get(e,t){return this.request({...e,method:p.GET},t)}post(e,t){return this.request({...e,method:p.POST},t)}request(e,t){const r=s.merge({},this.options,t),n={...s.cloneDeep(e),requestOptions:r},{urlPrefix:o}=r;return o&&(n.url=`${o}${e.url}`),new Promise(((e,t)=>{this.axiosInstance.request(n).then((t=>{e(t)})).catch((e=>{t(e)}))}))}}const S={requestInterceptorsHook(e){var t;const{withToken:s,isParamsToData:r}=e.requestOptions,n=e.params||{},a=e.headers||{};if(s){const e=o();a["like-admin"]=e}return r&&!Reflect.has(e,"data")&&(null==(t=e.method)?void 0:t.toUpperCase())===p.POST&&(e.data=n,e.params={}),e.headers=a,e},requestInterceptorsCatchHook:e=>e,async responseInterceptorsHook(e){const{isTransformResponse:t,isReturnDefaultResponse:s}=e.config.requestOptions;if(s)return e;if(!t)return e.data;const{code:r,data:n,show:o,msg:u}=e.data;switch(r){case O.SUCCESS:return o&&u&&c.msgSuccess(u),n;case O.PARAMS_TYPE_ERROR:case O.PARAMS_VALID_ERROR:case O.REQUEST_METHOD_ERROR:case O.ASSERT_ARGUMENT_ERROR:case O.ASSERT_MYBATIS_ERROR:case O.LOGIN_ACCOUNT_ERROR:case O.LOGIN_DISABLE_ERROR:case O.NO_PERMISSTION:case O.FAILED:case O.SYSTEM_ERROR:case O.VERIFICATION_CODE_ERROR:return u&&c.msgError(u),Promise.reject(n);case O.TOKEN_INVALID:case O.TOKEN_EMPTY:return a(),i.push(R.LOGIN),Promise.reject();default:return n}},responseInterceptorsCatchHook:e=>(e.code!==n.ERR_CANCELED&&e.message&&c.msgError(e.message),Promise.reject(e))},l={timeout:u.timeout,baseURL:u.baseUrl,headers:{"Content-Type":E.JSON,version:u.version},axiosHooks:S,requestOptions:{isParamsToData:!0,isReturnDefaultResponse:u.isReturnDefaultResponse,isTransformResponse:u.isTransformResponse,urlPrefix:u.urlPrefix,ignoreCancelToken:!1,withToken:u.withToken,isOpenRetry:!0,retryCount:2}};var h;const A=new m(s.merge(l,h||{}));function f(){return A.get({url:"/api/home"})}function C(){return A.get({url:"/api/ctn"})}function N(){return A.get({url:"/api/pcs/get"})}function P(e){return A.post({url:"/api/pcs/set_start",params:e})}function d(e){return A.post({url:"/api/pcs/set_aps",params:e})}function g(){return A.get({url:"/api/ac/get"})}function D(e){return A.post({url:"/api/ac/set_man",params:e})}function k(){return A.get({url:"/api/bms/get"})}function M(){return A.get({url:"/api/env/get"})}function L(){return A.get({url:"/api/comm/get"})}export{C as a,N as b,P as c,k as d,g as e,D as f,f as g,M as h,L as i,d as p};
