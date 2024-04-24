var e=Object.defineProperty,s=(s,t,r)=>(((s,t,r)=>{t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r})(s,"symbol"!=typeof t?t+"":t,r),r);import{l as t}from"./lodash-20cd73ca.js";import{a as r,A as o}from"./axios-5b55c11d.js";import{g as n,c as a,r as R,P as i}from"./index-6dbce3d0.js";import{f as c}from"./feedback-5363c0cc.js";const E={terminal:1,title:"多棱多智慧终端",version:"1.4.0",baseUrl:"".concat({}.VITE_APP_BASE_URL||"","/"),urlPrefix:"",timeout:1e4,withToken:!1,isTransformResponse:!1,isReturnDefaultResponse:!1};var u=(e=>(e.JSON="application/json;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8",e))(u||{}),O=(e=>(e.GET="GET",e.POST="POST",e))(O||{}),T=(e=>(e[e.SUCCESS=200]="SUCCESS",e[e.FAILED=300]="FAILED",e[e.PARAMS_VALID_ERROR=310]="PARAMS_VALID_ERROR",e[e.PARAMS_TYPE_ERROR=311]="PARAMS_TYPE_ERROR",e[e.REQUEST_METHOD_ERROR=312]="REQUEST_METHOD_ERROR",e[e.ASSERT_ARGUMENT_ERROR=313]="ASSERT_ARGUMENT_ERROR",e[e.ASSERT_MYBATIS_ERROR=314]="ASSERT_MYBATIS_ERROR",e[e.LOGIN_ACCOUNT_ERROR=330]="LOGIN_ACCOUNT_ERROR",e[e.LOGIN_DISABLE_ERROR=331]="LOGIN_DISABLE_ERROR",e[e.TOKEN_EMPTY=332]="TOKEN_EMPTY",e[e.TOKEN_INVALID=333]="TOKEN_INVALID",e[e.VERIFICATION_CODE_ERROR=334]="VERIFICATION_CODE_ERROR",e[e.NO_PERMISSTION=403]="NO_PERMISSTION",e[e.REQUEST_404_ERROR=404]="REQUEST_404_ERROR",e[e.SYSTEM_ERROR=500]="SYSTEM_ERROR",e))(T||{});const _=new Map,I=class e{static createInstance(){var s;return null!=(s=this.instance)?s:this.instance=new e}add(e){const s=e.url;this.remove(s),e.cancelToken=new r.CancelToken((e=>{_.has(s)||_.set(s,e)}))}remove(e){if(_.has(e)){const s=_.get(e);s&&s(e),_.delete(e)}}};s(I,"instance");const p=I.createInstance();class S{constructor(e){s(this,"axiosInstance"),s(this,"config"),s(this,"options"),this.config=e,this.options=e.requestOptions,this.axiosInstance=r.create(e),this.setupInterceptors()}getAxiosInstance(){return this.axiosInstance}setupInterceptors(){if(!this.config.axiosHooks)return;const{requestInterceptorsHook:e,requestInterceptorsCatchHook:s,responseInterceptorsHook:r,responseInterceptorsCatchHook:n}=this.config.axiosHooks;this.axiosInstance.interceptors.request.use((s=>(this.addCancelToken(s),t.isFunction(e)&&(s=e(s)),s)),(e=>(t.isFunction(s)&&s(e),e))),this.axiosInstance.interceptors.response.use((e=>(this.removeCancelToken(e.config.url),t.isFunction(r)&&(e=r(e)),e)),(e=>{var s;return t.isFunction(n)&&n(e),e.code!=o.ERR_CANCELED&&this.removeCancelToken(null==(s=e.config)?void 0:s.url),e.code==o.ECONNABORTED||e.code==o.ERR_NETWORK?new Promise((e=>setTimeout(e,500))).then((()=>this.retryRequest(e))):Promise.reject(e)}))}addCancelToken(e){const{ignoreCancelToken:s}=e.requestOptions;!s&&p.add(e)}removeCancelToken(e){p.remove(e)}retryRequest(e){var s,t;const r=e.config,{retryCount:o,isOpenRetry:n}=r.requestOptions;return n&&(null==(s=r.method)?void 0:s.toUpperCase())!=O.POST?(r.retryCount=null!=(t=r.retryCount)?t:0,r.retryCount>=o?Promise.reject(e):(r.retryCount++,this.axiosInstance.request(r))):Promise.reject(e)}get(e,s){return this.request({...e,method:O.GET},s)}post(e,s){return this.request({...e,method:O.POST},s)}request(e,s){const r=t.merge({},this.options,s),o={...t.cloneDeep(e),requestOptions:r},{urlPrefix:n}=r;return n&&(o.url="".concat(n).concat(e.url)),new Promise(((e,s)=>{this.axiosInstance.request(o).then((s=>{e(s)})).catch((e=>{s(e)}))}))}}const l={requestInterceptorsHook(e){var s;const{withToken:t,isParamsToData:r}=e.requestOptions,o=e.params||{},a=e.headers||{};if(t){const e=n();a["like-admin"]=e}return r&&!Reflect.has(e,"data")&&(null==(s=e.method)?void 0:s.toUpperCase())===O.POST&&(e.data=o,e.params={}),e.headers=a,e},requestInterceptorsCatchHook:e=>e,async responseInterceptorsHook(e){const{isTransformResponse:s,isReturnDefaultResponse:t}=e.config.requestOptions;if(t)return e;if(!s)return e.data;const{code:r,data:o,show:n,msg:E}=e.data;switch(r){case T.SUCCESS:return n&&E&&c.msgSuccess(E),o;case T.PARAMS_TYPE_ERROR:case T.PARAMS_VALID_ERROR:case T.REQUEST_METHOD_ERROR:case T.ASSERT_ARGUMENT_ERROR:case T.ASSERT_MYBATIS_ERROR:case T.LOGIN_ACCOUNT_ERROR:case T.LOGIN_DISABLE_ERROR:case T.NO_PERMISSTION:case T.FAILED:case T.SYSTEM_ERROR:case T.VERIFICATION_CODE_ERROR:return E&&c.msgError(E),Promise.reject(o);case T.TOKEN_INVALID:case T.TOKEN_EMPTY:return a(),R.push(i.LOGIN),Promise.reject();default:return o}},responseInterceptorsCatchHook:e=>(e.code!==o.ERR_CANCELED&&e.message&&c.msgError(e.message),Promise.reject(e))},m={timeout:E.timeout,baseURL:E.baseUrl,headers:{"Content-Type":u.JSON,version:E.version},axiosHooks:l,requestOptions:{isParamsToData:!0,isReturnDefaultResponse:E.isReturnDefaultResponse,isTransformResponse:E.isTransformResponse,urlPrefix:E.urlPrefix,ignoreCancelToken:!1,withToken:E.withToken,isOpenRetry:!0,retryCount:2}};var h;const A=new S(t.merge(m,h||{}));export{A as r};
