(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))f(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function s(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function f(d){if(d.ep)return;d.ep=!0;const h=s(d);fetch(d.href,h)}})();function Uc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ra={exports:{}},Mr={},oa={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc;function yp(){if(Sc)return ne;Sc=1;var i=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.iterator;function z(y){return y===null||typeof y!="object"?null:(y=N&&y[N]||y["@@iterator"],typeof y=="function"?y:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,b={};function F(y,_,ee){this.props=y,this.context=_,this.refs=b,this.updater=ee||$}F.prototype.isReactComponent={},F.prototype.setState=function(y,_){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,_,"setState")},F.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function U(){}U.prototype=F.prototype;function K(y,_,ee){this.props=y,this.context=_,this.refs=b,this.updater=ee||$}var Y=K.prototype=new U;Y.constructor=K,B(Y,F.prototype),Y.isPureReactComponent=!0;var te=Array.isArray,Z=Object.prototype.hasOwnProperty,le={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function pe(y,_,ee){var re,ae={},se=null,he=null;if(_!=null)for(re in _.ref!==void 0&&(he=_.ref),_.key!==void 0&&(se=""+_.key),_)Z.call(_,re)&&!oe.hasOwnProperty(re)&&(ae[re]=_[re]);var de=arguments.length-2;if(de===1)ae.children=ee;else if(1<de){for(var ye=Array(de),et=0;et<de;et++)ye[et]=arguments[et+2];ae.children=ye}if(y&&y.defaultProps)for(re in de=y.defaultProps,de)ae[re]===void 0&&(ae[re]=de[re]);return{$$typeof:i,type:y,key:se,ref:he,props:ae,_owner:le.current}}function Le(y,_){return{$$typeof:i,type:y.type,key:_,ref:y.ref,props:y.props,_owner:y._owner}}function Te(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Ze(y){var _={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ee){return _[ee]})}var Fe=/\/+/g;function Re(y,_){return typeof y=="object"&&y!==null&&y.key!=null?Ze(""+y.key):_.toString(36)}function Me(y,_,ee,re,ae){var se=typeof y;(se==="undefined"||se==="boolean")&&(y=null);var he=!1;if(y===null)he=!0;else switch(se){case"string":case"number":he=!0;break;case"object":switch(y.$$typeof){case i:case u:he=!0}}if(he)return he=y,ae=ae(he),y=re===""?"."+Re(he,0):re,te(ae)?(ee="",y!=null&&(ee=y.replace(Fe,"$&/")+"/"),Me(ae,_,ee,"",function(et){return et})):ae!=null&&(Te(ae)&&(ae=Le(ae,ee+(!ae.key||he&&he.key===ae.key?"":(""+ae.key).replace(Fe,"$&/")+"/")+y)),_.push(ae)),1;if(he=0,re=re===""?".":re+":",te(y))for(var de=0;de<y.length;de++){se=y[de];var ye=re+Re(se,de);he+=Me(se,_,ee,ye,ae)}else if(ye=z(y),typeof ye=="function")for(y=ye.call(y),de=0;!(se=y.next()).done;)se=se.value,ye=re+Re(se,de++),he+=Me(se,_,ee,ye,ae);else if(se==="object")throw _=String(y),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return he}function we(y,_,ee){if(y==null)return y;var re=[],ae=0;return Me(y,re,"","",function(se){return _.call(ee,se,ae++)}),re}function be(y){if(y._status===-1){var _=y._result;_=_(),_.then(function(ee){(y._status===0||y._status===-1)&&(y._status=1,y._result=ee)},function(ee){(y._status===0||y._status===-1)&&(y._status=2,y._result=ee)}),y._status===-1&&(y._status=0,y._result=_)}if(y._status===1)return y._result.default;throw y._result}var I={current:null},P={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:le};function T(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:we,forEach:function(y,_,ee){we(y,function(){_.apply(this,arguments)},ee)},count:function(y){var _=0;return we(y,function(){_++}),_},toArray:function(y){return we(y,function(_){return _})||[]},only:function(y){if(!Te(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ne.Component=F,ne.Fragment=s,ne.Profiler=d,ne.PureComponent=K,ne.StrictMode=f,ne.Suspense=w,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,ne.act=T,ne.cloneElement=function(y,_,ee){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var re=B({},y.props),ae=y.key,se=y.ref,he=y._owner;if(_!=null){if(_.ref!==void 0&&(se=_.ref,he=le.current),_.key!==void 0&&(ae=""+_.key),y.type&&y.type.defaultProps)var de=y.type.defaultProps;for(ye in _)Z.call(_,ye)&&!oe.hasOwnProperty(ye)&&(re[ye]=_[ye]===void 0&&de!==void 0?de[ye]:_[ye])}var ye=arguments.length-2;if(ye===1)re.children=ee;else if(1<ye){de=Array(ye);for(var et=0;et<ye;et++)de[et]=arguments[et+2];re.children=de}return{$$typeof:i,type:y.type,key:ae,ref:se,props:re,_owner:he}},ne.createContext=function(y){return y={$$typeof:v,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:h,_context:y},y.Consumer=y},ne.createElement=pe,ne.createFactory=function(y){var _=pe.bind(null,y);return _.type=y,_},ne.createRef=function(){return{current:null}},ne.forwardRef=function(y){return{$$typeof:k,render:y}},ne.isValidElement=Te,ne.lazy=function(y){return{$$typeof:R,_payload:{_status:-1,_result:y},_init:be}},ne.memo=function(y,_){return{$$typeof:E,type:y,compare:_===void 0?null:_}},ne.startTransition=function(y){var _=P.transition;P.transition={};try{y()}finally{P.transition=_}},ne.unstable_act=T,ne.useCallback=function(y,_){return I.current.useCallback(y,_)},ne.useContext=function(y){return I.current.useContext(y)},ne.useDebugValue=function(){},ne.useDeferredValue=function(y){return I.current.useDeferredValue(y)},ne.useEffect=function(y,_){return I.current.useEffect(y,_)},ne.useId=function(){return I.current.useId()},ne.useImperativeHandle=function(y,_,ee){return I.current.useImperativeHandle(y,_,ee)},ne.useInsertionEffect=function(y,_){return I.current.useInsertionEffect(y,_)},ne.useLayoutEffect=function(y,_){return I.current.useLayoutEffect(y,_)},ne.useMemo=function(y,_){return I.current.useMemo(y,_)},ne.useReducer=function(y,_,ee){return I.current.useReducer(y,_,ee)},ne.useRef=function(y){return I.current.useRef(y)},ne.useState=function(y){return I.current.useState(y)},ne.useSyncExternalStore=function(y,_,ee){return I.current.useSyncExternalStore(y,_,ee)},ne.useTransition=function(){return I.current.useTransition()},ne.version="18.3.1",ne}var jc;function ma(){return jc||(jc=1,oa.exports=yp()),oa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function xp(){if(Ec)return Mr;Ec=1;var i=ma(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function v(k,w,E){var R,N={},z=null,$=null;E!==void 0&&(z=""+E),w.key!==void 0&&(z=""+w.key),w.ref!==void 0&&($=w.ref);for(R in w)f.call(w,R)&&!h.hasOwnProperty(R)&&(N[R]=w[R]);if(k&&k.defaultProps)for(R in w=k.defaultProps,w)N[R]===void 0&&(N[R]=w[R]);return{$$typeof:u,type:k,key:z,ref:$,props:N,_owner:d.current}}return Mr.Fragment=s,Mr.jsx=v,Mr.jsxs=v,Mr}var Cc;function wp(){return Cc||(Cc=1,ra.exports=xp()),ra.exports}var a=wp(),x=ma();const kp=Uc(x);var Yo={},la={exports:{}},Xe={},ia={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Sp(){return Nc||(Nc=1,(function(i){function u(P,L){var T=P.length;P.push(L);e:for(;0<T;){var y=T-1>>>1,_=P[y];if(0<d(_,L))P[y]=L,P[T]=_,T=y;else break e}}function s(P){return P.length===0?null:P[0]}function f(P){if(P.length===0)return null;var L=P[0],T=P.pop();if(T!==L){P[0]=T;e:for(var y=0,_=P.length,ee=_>>>1;y<ee;){var re=2*(y+1)-1,ae=P[re],se=re+1,he=P[se];if(0>d(ae,T))se<_&&0>d(he,ae)?(P[y]=he,P[se]=T,y=se):(P[y]=ae,P[re]=T,y=re);else if(se<_&&0>d(he,T))P[y]=he,P[se]=T,y=se;else break e}}return L}function d(P,L){var T=P.sortIndex-L.sortIndex;return T!==0?T:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var v=Date,k=v.now();i.unstable_now=function(){return v.now()-k}}var w=[],E=[],R=1,N=null,z=3,$=!1,B=!1,b=!1,F=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(P){for(var L=s(E);L!==null;){if(L.callback===null)f(E);else if(L.startTime<=P)f(E),L.sortIndex=L.expirationTime,u(w,L);else break;L=s(E)}}function te(P){if(b=!1,Y(P),!B)if(s(w)!==null)B=!0,be(Z);else{var L=s(E);L!==null&&I(te,L.startTime-P)}}function Z(P,L){B=!1,b&&(b=!1,U(pe),pe=-1),$=!0;var T=z;try{for(Y(L),N=s(w);N!==null&&(!(N.expirationTime>L)||P&&!Ze());){var y=N.callback;if(typeof y=="function"){N.callback=null,z=N.priorityLevel;var _=y(N.expirationTime<=L);L=i.unstable_now(),typeof _=="function"?N.callback=_:N===s(w)&&f(w),Y(L)}else f(w);N=s(w)}if(N!==null)var ee=!0;else{var re=s(E);re!==null&&I(te,re.startTime-L),ee=!1}return ee}finally{N=null,z=T,$=!1}}var le=!1,oe=null,pe=-1,Le=5,Te=-1;function Ze(){return!(i.unstable_now()-Te<Le)}function Fe(){if(oe!==null){var P=i.unstable_now();Te=P;var L=!0;try{L=oe(!0,P)}finally{L?Re():(le=!1,oe=null)}}else le=!1}var Re;if(typeof K=="function")Re=function(){K(Fe)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,we=Me.port2;Me.port1.onmessage=Fe,Re=function(){we.postMessage(null)}}else Re=function(){F(Fe,0)};function be(P){oe=P,le||(le=!0,Re())}function I(P,L){pe=F(function(){P(i.unstable_now())},L)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(P){P.callback=null},i.unstable_continueExecution=function(){B||$||(B=!0,be(Z))},i.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<P?Math.floor(1e3/P):5},i.unstable_getCurrentPriorityLevel=function(){return z},i.unstable_getFirstCallbackNode=function(){return s(w)},i.unstable_next=function(P){switch(z){case 1:case 2:case 3:var L=3;break;default:L=z}var T=z;z=L;try{return P()}finally{z=T}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var T=z;z=P;try{return L()}finally{z=T}},i.unstable_scheduleCallback=function(P,L,T){var y=i.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?y+T:y):T=y,P){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=T+_,P={id:R++,callback:L,priorityLevel:P,startTime:T,expirationTime:_,sortIndex:-1},T>y?(P.sortIndex=T,u(E,P),s(w)===null&&P===s(E)&&(b?(U(pe),pe=-1):b=!0,I(te,T-y))):(P.sortIndex=_,u(w,P),B||$||(B=!0,be(Z))),P},i.unstable_shouldYield=Ze,i.unstable_wrapCallback=function(P){var L=z;return function(){var T=z;z=L;try{return P.apply(this,arguments)}finally{z=T}}}})(aa)),aa}var Rc;function jp(){return Rc||(Rc=1,ia.exports=Sp()),ia.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Ep(){if(Pc)return Xe;Pc=1;var i=ma(),u=jp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,d={};function h(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(d[e]=t,e=0;e<t.length;e++)f.add(t[e])}var k=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),w=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R={},N={};function z(e){return w.call(N,e)?!0:w.call(R,e)?!1:E.test(e)?N[e]=!0:(R[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function B(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,o,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(U,K);F[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(U,K);F[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(U,K);F[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function Y(e,t,n,r){var o=F.hasOwnProperty(t)?F[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(B(t,n,o,r)&&(n=null),r||o===null?z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var te=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),le=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),we=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),P=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,y;function _(e){if(y===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);y=t&&t[1]||""}return`
`+y+e}var ee=!1;function re(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var o=C.stack.split(`
`),l=r.stack.split(`
`),c=o.length-1,p=l.length-1;1<=c&&0<=p&&o[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(o[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||o[c]!==l[p]){var m=`
`+o[c].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=c&&0<=p);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_(e):""}function ae(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case le:return"Portal";case Le:return"Profiler";case pe:return"StrictMode";case Re:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ze:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case we:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $r(e){e._valueTracker||(e._valueTracker=et(e))}function Pa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function za(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _a(e,t){t=t.checked,t!=null&&Y(e,"checked",t,!1)}function dl(e,t){_a(e,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ta(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Kn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function Ma(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ba(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Oa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,Ia=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(Gn).forEach(function(e){kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gn[t]=Gn[e]})});function Da(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gn.hasOwnProperty(e)&&Gn[e]?(""+t).trim():t+"px"}function Fa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Da(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sd=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Sd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,Sn=null,jn=null;function Aa(e){if(e=yr(e)){if(typeof xl!="function")throw Error(s(280));var t=e.stateNode;t&&(t=fo(t),xl(e.stateNode,e.type,t))}}function $a(e){Sn?jn?jn.push(e):jn=[e]:Sn=e}function Ba(){if(Sn){var e=Sn,t=jn;if(jn=Sn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Ua(e,t){return e(t)}function Ha(){}var wl=!1;function Va(e,t,n){if(wl)return e(t,n);wl=!0;try{return Ua(e,t,n)}finally{wl=!1,(Sn!==null||jn!==null)&&(Ha(),Ba())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var kl=!1;if(k)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){kl=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{kl=!1}function jd(e,t,n,r,o,l,c,p,m){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(O){this.onError(O)}}var Zn=!1,Hr=null,Vr=!1,Sl=null,Ed={onError:function(e){Zn=!0,Hr=e}};function Cd(e,t,n,r,o,l,c,p,m){Zn=!1,Hr=null,jd.apply(Ed,arguments)}function Nd(e,t,n,r,o,l,c,p,m){if(Cd.apply(this,arguments),Zn){if(Zn){var C=Hr;Zn=!1,Hr=null}else throw Error(s(198));Vr||(Vr=!0,Sl=C)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qa(e){if(an(e)!==e)throw Error(s(188))}function Rd(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Qa(o),e;if(l===r)return Qa(o),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=l;else{for(var c=!1,p=o.child;p;){if(p===n){c=!0,n=o,r=l;break}if(p===r){c=!0,r=o,n=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===n){c=!0,n=l,r=o;break}if(p===r){c=!0,r=l,n=o;break}p=p.sibling}if(!c)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Ja(e){return e=Rd(e),e!==null?Ka(e):null}function Ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ka(e);if(t!==null)return t;e=e.sibling}return null}var qa=u.unstable_scheduleCallback,Ga=u.unstable_cancelCallback,Pd=u.unstable_shouldYield,zd=u.unstable_requestPaint,Ce=u.unstable_now,_d=u.unstable_getCurrentPriorityLevel,jl=u.unstable_ImmediatePriority,Ya=u.unstable_UserBlockingPriority,Wr=u.unstable_NormalPriority,Ld=u.unstable_LowPriority,Xa=u.unstable_IdlePriority,Qr=null,St=null;function Td(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Qr,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Od,Md=Math.log,bd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(Md(e)/bd|0)|0}var Jr=64,Kr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var p=c&~o;p!==0?r=er(p):(l&=c,l!==0&&(r=er(l)))}else c=n&~o,c!==0?r=er(c):l!==0&&(r=er(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function Id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-ht(l),p=1<<c,m=o[c];m===-1?((p&n)===0||(p&r)!==0)&&(o[c]=Id(p,t)):m<=t&&(e.expiredLanes|=p),l&=~p}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Za(){var e=Jr;return Jr<<=1,(Jr&4194240)===0&&(Jr=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Fd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var fe=0;function es(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ts,Rl,ns,rs,os,Pl=!1,Gr=[],At=null,$t=null,Bt=null,nr=new Map,rr=new Map,Ut=[],Ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ls(e,t){switch(e){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(t.pointerId)}}function or(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=yr(t),t!==null&&Rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $d(e,t,n,r,o){switch(t){case"focusin":return At=or(At,e,t,n,r,o),!0;case"dragenter":return $t=or($t,e,t,n,r,o),!0;case"mouseover":return Bt=or(Bt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return nr.set(l,or(nr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,rr.set(l,or(rr.get(l)||null,e,t,n,r,o)),!0}return!1}function is(e){var t=sn(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Wa(n),t!==null){e.blockedOn=t,os(e.priority,function(){ns(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=yr(n),t!==null&&Rl(t),e.blockedOn=n,!1;t.shift()}return!0}function as(e,t,n){Yr(e)&&n.delete(t)}function Bd(){Pl=!1,At!==null&&Yr(At)&&(At=null),$t!==null&&Yr($t)&&($t=null),Bt!==null&&Yr(Bt)&&(Bt=null),nr.forEach(as),rr.forEach(as)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Bd)))}function ir(e){function t(o){return lr(o,e)}if(0<Gr.length){lr(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(At!==null&&lr(At,e),$t!==null&&lr($t,e),Bt!==null&&lr(Bt,e),nr.forEach(t),rr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)is(n),n.blockedOn===null&&Ut.shift()}var En=te.ReactCurrentBatchConfig,Xr=!0;function Ud(e,t,n,r){var o=fe,l=En.transition;En.transition=null;try{fe=1,zl(e,t,n,r)}finally{fe=o,En.transition=l}}function Hd(e,t,n,r){var o=fe,l=En.transition;En.transition=null;try{fe=4,zl(e,t,n,r)}finally{fe=o,En.transition=l}}function zl(e,t,n,r){if(Xr){var o=_l(e,t,n,r);if(o===null)Jl(e,t,r,Zr,n),ls(e,r);else if($d(o,e,t,n,r))r.stopPropagation();else if(ls(e,r),t&4&&-1<Ad.indexOf(e)){for(;o!==null;){var l=yr(o);if(l!==null&&ts(l),l=_l(e,t,n,r),l===null&&Jl(e,t,r,Zr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var Zr=null;function _l(e,t,n,r){if(Zr=null,e=yl(r),e=sn(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function ss(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_d()){case jl:return 1;case Ya:return 4;case Wr:case Ld:return 16;case Xa:return 536870912;default:return 16}default:return 16}}var Ht=null,Ll=null,eo=null;function us(){if(eo)return eo;var e,t=Ll,n=t.length,r,o="value"in Ht?Ht.value:Ht.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===o[l-r];r++);return eo=o.slice(e,1<r?1-r:void 0)}function to(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function cs(){return!1}function tt(e){function t(n,r,o,l,c){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?no:cs,this.isPropagationStopped=cs,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=tt(Cn),ar=T({},Cn,{view:0,detail:0}),Vd=tt(ar),Ml,bl,sr,ro=T({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Ml=e.screenX-sr.screenX,bl=e.screenY-sr.screenY):bl=Ml=0,sr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),ds=tt(ro),Wd=T({},ro,{dataTransfer:0}),Qd=tt(Wd),Jd=T({},ar,{relatedTarget:0}),Ol=tt(Jd),Kd=T({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=tt(Kd),Gd=T({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yd=tt(Gd),Xd=T({},Cn,{data:0}),fs=tt(Xd),Zd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tf[e])?!!t[e]:!1}function Il(){return nf}var rf=T({},ar,{key:function(e){if(e.key){var t=Zd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=to(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?to(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?to(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=tt(rf),lf=T({},ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=tt(lf),af=T({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),sf=tt(af),uf=T({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),cf=tt(uf),df=T({},ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=tt(df),pf=[9,13,27,32],Dl=k&&"CompositionEvent"in window,ur=null;k&&"documentMode"in document&&(ur=document.documentMode);var hf=k&&"TextEvent"in window&&!ur,hs=k&&(!Dl||ur&&8<ur&&11>=ur),ms=" ",vs=!1;function gs(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ys(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function mf(e,t){switch(e){case"compositionend":return ys(t);case"keypress":return t.which!==32?null:(vs=!0,ms);case"textInput":return e=t.data,e===ms&&vs?null:e;default:return null}}function vf(e,t){if(Nn)return e==="compositionend"||!Dl&&gs(e,t)?(e=us(),eo=Ll=Ht=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hs&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function ws(e,t,n,r){$a(r),t=so(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,dr=null;function yf(e){Fs(e,0)}function oo(e){var t=Ln(e);if(Pa(t))return e}function xf(e,t){if(e==="change")return t}var ks=!1;if(k){var Fl;if(k){var Al="oninput"in document;if(!Al){var Ss=document.createElement("div");Ss.setAttribute("oninput","return;"),Al=typeof Ss.oninput=="function"}Fl=Al}else Fl=!1;ks=Fl&&(!document.documentMode||9<document.documentMode)}function js(){cr&&(cr.detachEvent("onpropertychange",Es),dr=cr=null)}function Es(e){if(e.propertyName==="value"&&oo(dr)){var t=[];ws(t,dr,e,yl(e)),Va(yf,t)}}function wf(e,t,n){e==="focusin"?(js(),cr=t,dr=n,cr.attachEvent("onpropertychange",Es)):e==="focusout"&&js()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oo(dr)}function Sf(e,t){if(e==="click")return oo(t)}function jf(e,t){if(e==="input"||e==="change")return oo(t)}function Ef(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Ef;function fr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!w.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ns(e,t){var n=Cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cs(n)}}function Rs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ps(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cf(e){var t=Ps(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rs(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ns(n,l);var c=Ns(n,r);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=k&&"documentMode"in document&&11>=document.documentMode,Rn=null,Bl=null,pr=null,Ul=!1;function zs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||Rn==null||Rn!==Br(r)||(r=Rn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&fr(pr,r)||(pr=r,r=so(Bl,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rn)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Hl={},_s={};k&&(_s=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function io(e){if(Hl[e])return Hl[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _s)return Hl[e]=t[n];return e}var Ls=io("animationend"),Ts=io("animationiteration"),Ms=io("animationstart"),bs=io("transitionend"),Os=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Os.set(e,t),h(t,[e])}for(var Vl=0;Vl<Is.length;Vl++){var Wl=Is[Vl],Rf=Wl.toLowerCase(),Pf=Wl[0].toUpperCase()+Wl.slice(1);Vt(Rf,"on"+Pf)}Vt(Ls,"onAnimationEnd"),Vt(Ts,"onAnimationIteration"),Vt(Ms,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(bs,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));function Ds(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nd(r,t,void 0,e),e.currentTarget=null}function Fs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var p=r[c],m=p.instance,C=p.currentTarget;if(p=p.listener,m!==l&&o.isPropagationStopped())break e;Ds(o,p,C),l=m}else for(c=0;c<r.length;c++){if(p=r[c],m=p.instance,C=p.currentTarget,p=p.listener,m!==l&&o.isPropagationStopped())break e;Ds(o,p,C),l=m}}}if(Vr)throw e=Sl,Vr=!1,Sl=null,e}function ve(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(As(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),As(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[ao]){e[ao]=!0,f.forEach(function(n){n!=="selectionchange"&&(zf.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,Ql("selectionchange",!1,t))}}function As(e,t,n,r){switch(ss(t)){case 1:var o=Ud;break;case 4:o=Hd;break;default:o=zl}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var p=r.stateNode.containerInfo;if(p===o||p.nodeType===8&&p.parentNode===o)break;if(c===4)for(c=r.return;c!==null;){var m=c.tag;if((m===3||m===4)&&(m=c.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;c=c.return}for(;p!==null;){if(c=sn(p),c===null)return;if(m=c.tag,m===5||m===6){r=l=c;continue e}p=p.parentNode}}r=r.return}Va(function(){var C=l,O=yl(n),D=[];e:{var M=Os.get(e);if(M!==void 0){var H=Tl,W=e;switch(e){case"keypress":if(to(n)===0)break e;case"keydown":case"keyup":H=of;break;case"focusin":W="focus",H=Ol;break;case"focusout":W="blur",H=Ol;break;case"beforeblur":case"afterblur":H=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=sf;break;case Ls:case Ts:case Ms:H=qd;break;case bs:H=cf;break;case"scroll":H=Vd;break;case"wheel":H=ff;break;case"copy":case"cut":case"paste":H=Yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ps}var Q=(t&4)!==0,Ne=!Q&&e==="scroll",S=Q?M!==null?M+"Capture":null:M;Q=[];for(var g=C,j;g!==null;){j=g;var A=j.stateNode;if(j.tag===5&&A!==null&&(j=A,S!==null&&(A=Yn(g,S),A!=null&&Q.push(vr(g,A,j)))),Ne)break;g=g.return}0<Q.length&&(M=new H(M,W,null,n,O),D.push({event:M,listeners:Q}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",M&&n!==gl&&(W=n.relatedTarget||n.fromElement)&&(sn(W)||W[_t]))break e;if((H||M)&&(M=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,H?(W=n.relatedTarget||n.toElement,H=C,W=W?sn(W):null,W!==null&&(Ne=an(W),W!==Ne||W.tag!==5&&W.tag!==6)&&(W=null)):(H=null,W=C),H!==W)){if(Q=ds,A="onMouseLeave",S="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(Q=ps,A="onPointerLeave",S="onPointerEnter",g="pointer"),Ne=H==null?M:Ln(H),j=W==null?M:Ln(W),M=new Q(A,g+"leave",H,n,O),M.target=Ne,M.relatedTarget=j,A=null,sn(O)===C&&(Q=new Q(S,g+"enter",W,n,O),Q.target=j,Q.relatedTarget=Ne,A=Q),Ne=A,H&&W)t:{for(Q=H,S=W,g=0,j=Q;j;j=zn(j))g++;for(j=0,A=S;A;A=zn(A))j++;for(;0<g-j;)Q=zn(Q),g--;for(;0<j-g;)S=zn(S),j--;for(;g--;){if(Q===S||S!==null&&Q===S.alternate)break t;Q=zn(Q),S=zn(S)}Q=null}else Q=null;H!==null&&$s(D,M,H,Q,!1),W!==null&&Ne!==null&&$s(D,Ne,W,Q,!0)}}e:{if(M=C?Ln(C):window,H=M.nodeName&&M.nodeName.toLowerCase(),H==="select"||H==="input"&&M.type==="file")var J=xf;else if(xs(M))if(ks)J=jf;else{J=kf;var q=wf}else(H=M.nodeName)&&H.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(J=Sf);if(J&&(J=J(e,C))){ws(D,J,n,O);break e}q&&q(e,M,C),e==="focusout"&&(q=M._wrapperState)&&q.controlled&&M.type==="number"&&fl(M,"number",M.value)}switch(q=C?Ln(C):window,e){case"focusin":(xs(q)||q.contentEditable==="true")&&(Rn=q,Bl=C,pr=null);break;case"focusout":pr=Bl=Rn=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,zs(D,n,O);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":zs(D,n,O)}var G;if(Dl)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Nn?gs(e,n)&&(X="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(X="onCompositionStart");X&&(hs&&n.locale!=="ko"&&(Nn||X!=="onCompositionStart"?X==="onCompositionEnd"&&Nn&&(G=us()):(Ht=O,Ll="value"in Ht?Ht.value:Ht.textContent,Nn=!0)),q=so(C,X),0<q.length&&(X=new fs(X,e,null,n,O),D.push({event:X,listeners:q}),G?X.data=G:(G=ys(n),G!==null&&(X.data=G)))),(G=hf?mf(e,n):vf(e,n))&&(C=so(C,"onBeforeInput"),0<C.length&&(O=new fs("onBeforeInput","beforeinput",null,n,O),D.push({event:O,listeners:C}),O.data=G))}Fs(D,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Yn(e,n),l!=null&&r.unshift(vr(e,l,o)),l=Yn(e,t),l!=null&&r.push(vr(e,l,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $s(e,t,n,r,o){for(var l=t._reactName,c=[];n!==null&&n!==r;){var p=n,m=p.alternate,C=p.stateNode;if(m!==null&&m===r)break;p.tag===5&&C!==null&&(p=C,o?(m=Yn(n,l),m!=null&&c.unshift(vr(n,m,p))):o||(m=Yn(n,l),m!=null&&c.push(vr(n,m,p)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var _f=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(_f,`
`).replace(Lf,"")}function uo(e,t,n){if(t=Bs(t),Bs(e)!==t&&n)throw Error(s(425))}function co(){}var Kl=null,ql=null;function Gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,Tf=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Mf=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(bf)}:Yl;function bf(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ir(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),jt="__reactFiber$"+_n,gr="__reactProps$"+_n,_t="__reactContainer$"+_n,Zl="__reactEvents$"+_n,Of="__reactListeners$"+_n,If="__reactHandles$"+_n;function sn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hs(e);e!==null;){if(n=e[jt])return n;e=Hs(e)}return t}e=n,n=e.parentNode}return null}function yr(e){return e=e[jt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function fo(e){return e[gr]||null}var ei=[],Tn=-1;function Qt(e){return{current:e}}function ge(e){0>Tn||(e.current=ei[Tn],ei[Tn]=null,Tn--)}function me(e,t){Tn++,ei[Tn]=e.current,e.current=t}var Jt={},Be=Qt(Jt),Je=Qt(!1),un=Jt;function Mn(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function po(){ge(Je),ge(Be)}function Vs(e,t,n){if(Be.current!==Jt)throw Error(s(168));me(Be,t),me(Je,n)}function Ws(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(s(108,he(e)||"Unknown",o));return T({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,un=Be.current,me(Be,e),me(Je,Je.current),!0}function Qs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Ws(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,ge(Je),ge(Be),me(Be,e)):ge(Je),me(Je,n)}var Lt=null,mo=!1,ti=!1;function Js(e){Lt===null?Lt=[e]:Lt.push(e)}function Df(e){mo=!0,Js(e)}function Kt(){if(!ti&&Lt!==null){ti=!0;var e=0,t=fe;try{var n=Lt;for(fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lt=null,mo=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),qa(jl,Kt),o}finally{fe=t,ti=!1}}return null}var bn=[],On=0,vo=null,go=0,lt=[],it=0,cn=null,Tt=1,Mt="";function dn(e,t){bn[On++]=go,bn[On++]=vo,vo=e,go=t}function Ks(e,t,n){lt[it++]=Tt,lt[it++]=Mt,lt[it++]=cn,cn=e;var r=Tt;e=Mt;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var l=32-ht(t)+o;if(30<l){var c=o-o%5;l=(r&(1<<c)-1).toString(32),r>>=c,o-=c,Tt=1<<32-ht(t)+o|n<<o|r,Mt=l+e}else Tt=1<<l|n<<o|r,Mt=e}function ni(e){e.return!==null&&(dn(e,1),Ks(e,1,0))}function ri(e){for(;e===vo;)vo=bn[--On],bn[On]=null,go=bn[--On],bn[On]=null;for(;e===cn;)cn=lt[--it],lt[it]=null,Mt=lt[--it],lt[it]=null,Tt=lt[--it],lt[it]=null}var nt=null,rt=null,xe=!1,vt=null;function qs(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,rt=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:Tt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,rt=null,!0):!1;default:return!1}}function oi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(xe){var t=rt;if(t){var n=t;if(!Gs(e,t)){if(oi(e))throw Error(s(418));t=Wt(n.nextSibling);var r=nt;t&&Gs(e,t)?qs(r,n):(e.flags=e.flags&-4097|2,xe=!1,nt=e)}}else{if(oi(e))throw Error(s(418));e.flags=e.flags&-4097|2,xe=!1,nt=e}}}function Ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function yo(e){if(e!==nt)return!1;if(!xe)return Ys(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gl(e.type,e.memoizedProps)),t&&(t=rt)){if(oi(e))throw Xs(),Error(s(418));for(;t;)qs(e,t),t=Wt(t.nextSibling)}if(Ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=nt?Wt(e.stateNode.nextSibling):null;return!0}function Xs(){for(var e=rt;e;)e=Wt(e.nextSibling)}function In(){rt=nt=null,xe=!1}function ii(e){vt===null?vt=[e]:vt.push(e)}var Ff=te.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var p=o.refs;c===null?delete p[l]:p[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zs(e){var t=e._init;return t(e._payload)}function eu(e){function t(S,g){if(e){var j=S.deletions;j===null?(S.deletions=[g],S.flags|=16):j.push(g)}}function n(S,g){if(!e)return null;for(;g!==null;)t(S,g),g=g.sibling;return null}function r(S,g){for(S=new Map;g!==null;)g.key!==null?S.set(g.key,g):S.set(g.index,g),g=g.sibling;return S}function o(S,g){return S=nn(S,g),S.index=0,S.sibling=null,S}function l(S,g,j){return S.index=j,e?(j=S.alternate,j!==null?(j=j.index,j<g?(S.flags|=2,g):j):(S.flags|=2,g)):(S.flags|=1048576,g)}function c(S){return e&&S.alternate===null&&(S.flags|=2),S}function p(S,g,j,A){return g===null||g.tag!==6?(g=Yi(j,S.mode,A),g.return=S,g):(g=o(g,j),g.return=S,g)}function m(S,g,j,A){var J=j.type;return J===oe?O(S,g,j.props.children,A,j.key):g!==null&&(g.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===be&&Zs(J)===g.type)?(A=o(g,j.props),A.ref=xr(S,g,j),A.return=S,A):(A=Ho(j.type,j.key,j.props,null,S.mode,A),A.ref=xr(S,g,j),A.return=S,A)}function C(S,g,j,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==j.containerInfo||g.stateNode.implementation!==j.implementation?(g=Xi(j,S.mode,A),g.return=S,g):(g=o(g,j.children||[]),g.return=S,g)}function O(S,g,j,A,J){return g===null||g.tag!==7?(g=xn(j,S.mode,A,J),g.return=S,g):(g=o(g,j),g.return=S,g)}function D(S,g,j){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yi(""+g,S.mode,j),g.return=S,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Z:return j=Ho(g.type,g.key,g.props,null,S.mode,j),j.ref=xr(S,null,g),j.return=S,j;case le:return g=Xi(g,S.mode,j),g.return=S,g;case be:var A=g._init;return D(S,A(g._payload),j)}if(Kn(g)||L(g))return g=xn(g,S.mode,j,null),g.return=S,g;xo(S,g)}return null}function M(S,g,j,A){var J=g!==null?g.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return J!==null?null:p(S,g,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return j.key===J?m(S,g,j,A):null;case le:return j.key===J?C(S,g,j,A):null;case be:return J=j._init,M(S,g,J(j._payload),A)}if(Kn(j)||L(j))return J!==null?null:O(S,g,j,A,null);xo(S,j)}return null}function H(S,g,j,A,J){if(typeof A=="string"&&A!==""||typeof A=="number")return S=S.get(j)||null,p(g,S,""+A,J);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Z:return S=S.get(A.key===null?j:A.key)||null,m(g,S,A,J);case le:return S=S.get(A.key===null?j:A.key)||null,C(g,S,A,J);case be:var q=A._init;return H(S,g,j,q(A._payload),J)}if(Kn(A)||L(A))return S=S.get(j)||null,O(g,S,A,J,null);xo(g,A)}return null}function W(S,g,j,A){for(var J=null,q=null,G=g,X=g=0,De=null;G!==null&&X<j.length;X++){G.index>X?(De=G,G=null):De=G.sibling;var ue=M(S,G,j[X],A);if(ue===null){G===null&&(G=De);break}e&&G&&ue.alternate===null&&t(S,G),g=l(ue,g,X),q===null?J=ue:q.sibling=ue,q=ue,G=De}if(X===j.length)return n(S,G),xe&&dn(S,X),J;if(G===null){for(;X<j.length;X++)G=D(S,j[X],A),G!==null&&(g=l(G,g,X),q===null?J=G:q.sibling=G,q=G);return xe&&dn(S,X),J}for(G=r(S,G);X<j.length;X++)De=H(G,S,X,j[X],A),De!==null&&(e&&De.alternate!==null&&G.delete(De.key===null?X:De.key),g=l(De,g,X),q===null?J=De:q.sibling=De,q=De);return e&&G.forEach(function(rn){return t(S,rn)}),xe&&dn(S,X),J}function Q(S,g,j,A){var J=L(j);if(typeof J!="function")throw Error(s(150));if(j=J.call(j),j==null)throw Error(s(151));for(var q=J=null,G=g,X=g=0,De=null,ue=j.next();G!==null&&!ue.done;X++,ue=j.next()){G.index>X?(De=G,G=null):De=G.sibling;var rn=M(S,G,ue.value,A);if(rn===null){G===null&&(G=De);break}e&&G&&rn.alternate===null&&t(S,G),g=l(rn,g,X),q===null?J=rn:q.sibling=rn,q=rn,G=De}if(ue.done)return n(S,G),xe&&dn(S,X),J;if(G===null){for(;!ue.done;X++,ue=j.next())ue=D(S,ue.value,A),ue!==null&&(g=l(ue,g,X),q===null?J=ue:q.sibling=ue,q=ue);return xe&&dn(S,X),J}for(G=r(S,G);!ue.done;X++,ue=j.next())ue=H(G,S,X,ue.value,A),ue!==null&&(e&&ue.alternate!==null&&G.delete(ue.key===null?X:ue.key),g=l(ue,g,X),q===null?J=ue:q.sibling=ue,q=ue);return e&&G.forEach(function(gp){return t(S,gp)}),xe&&dn(S,X),J}function Ne(S,g,j,A){if(typeof j=="object"&&j!==null&&j.type===oe&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:e:{for(var J=j.key,q=g;q!==null;){if(q.key===J){if(J=j.type,J===oe){if(q.tag===7){n(S,q.sibling),g=o(q,j.props.children),g.return=S,S=g;break e}}else if(q.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===be&&Zs(J)===q.type){n(S,q.sibling),g=o(q,j.props),g.ref=xr(S,q,j),g.return=S,S=g;break e}n(S,q);break}else t(S,q);q=q.sibling}j.type===oe?(g=xn(j.props.children,S.mode,A,j.key),g.return=S,S=g):(A=Ho(j.type,j.key,j.props,null,S.mode,A),A.ref=xr(S,g,j),A.return=S,S=A)}return c(S);case le:e:{for(q=j.key;g!==null;){if(g.key===q)if(g.tag===4&&g.stateNode.containerInfo===j.containerInfo&&g.stateNode.implementation===j.implementation){n(S,g.sibling),g=o(g,j.children||[]),g.return=S,S=g;break e}else{n(S,g);break}else t(S,g);g=g.sibling}g=Xi(j,S.mode,A),g.return=S,S=g}return c(S);case be:return q=j._init,Ne(S,g,q(j._payload),A)}if(Kn(j))return W(S,g,j,A);if(L(j))return Q(S,g,j,A);xo(S,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,g!==null&&g.tag===6?(n(S,g.sibling),g=o(g,j),g.return=S,S=g):(n(S,g),g=Yi(j,S.mode,A),g.return=S,S=g),c(S)):n(S,g)}return Ne}var Dn=eu(!0),tu=eu(!1),wo=Qt(null),ko=null,Fn=null,ai=null;function si(){ai=Fn=ko=null}function ui(e){var t=wo.current;ge(wo),e._currentValue=t}function ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){ko=e,ai=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(ai!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(ko===null)throw Error(s(308));Fn=e,ko.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function di(e){fn===null?fn=[e]:fn.push(e)}function nu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,di(t)):(n.next=o.next,o.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ie&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,bt(e,n)}return o=r.interleaved,o===null?(t.next=t,di(r)):(t.next=o.next,o.next=t),r.interleaved=t,bt(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}function ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;qt=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var m=p,C=m.next;m.next=null,c===null?l=C:c.next=C,c=m;var O=e.alternate;O!==null&&(O=O.updateQueue,p=O.lastBaseUpdate,p!==c&&(p===null?O.firstBaseUpdate=C:p.next=C,O.lastBaseUpdate=m))}if(l!==null){var D=o.baseState;c=0,O=C=m=null,p=l;do{var M=p.lane,H=p.eventTime;if((r&M)===M){O!==null&&(O=O.next={eventTime:H,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var W=e,Q=p;switch(M=t,H=n,Q.tag){case 1:if(W=Q.payload,typeof W=="function"){D=W.call(H,D,M);break e}D=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=Q.payload,M=typeof W=="function"?W.call(H,D,M):W,M==null)break e;D=T({},D,M);break e;case 2:qt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,M=o.effects,M===null?o.effects=[p]:M.push(p))}else H={eventTime:H,lane:M,tag:p.tag,payload:p.payload,callback:p.callback,next:null},O===null?(C=O=H,m=D):O=O.next=H,c|=M;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;M=p,p=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);if(O===null&&(m=D),o.baseState=m,o.firstBaseUpdate=C,o.lastBaseUpdate=O,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);mn|=c,e.lanes=c,e.memoizedState=D}}function lu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var wr={},Et=Qt(wr),kr=Qt(wr),Sr=Qt(wr);function pn(e){if(e===wr)throw Error(s(174));return e}function pi(e,t){switch(me(Sr,t),me(kr,e),me(Et,wr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}ge(Et),me(Et,t)}function $n(){ge(Et),ge(kr),ge(Sr)}function iu(e){pn(Sr.current);var t=pn(Et.current),n=hl(t,e.type);t!==n&&(me(kr,e),me(Et,n))}function hi(e){kr.current===e&&(ge(Et),ge(kr))}var ke=Qt(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mi=[];function vi(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var Co=te.ReactCurrentDispatcher,gi=te.ReactCurrentBatchConfig,hn=0,Se=null,ze=null,Oe=null,No=!1,jr=!1,Er=0,Af=0;function Ue(){throw Error(s(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function xi(e,t,n,r,o,l){if(hn=l,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?Hf:Vf,e=n(r,o),jr){l=0;do{if(jr=!1,Er=0,25<=l)throw Error(s(301));l+=1,Oe=ze=null,t.updateQueue=null,Co.current=Wf,e=n(r,o)}while(jr)}if(Co.current=zo,t=ze!==null&&ze.next!==null,hn=0,Oe=ze=Se=null,No=!1,t)throw Error(s(300));return e}function wi(){var e=Er!==0;return Er=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function st(){if(ze===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Oe===null?Se.memoizedState:Oe.next;if(t!==null)Oe=t,ze=e;else{if(e===null)throw Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Oe===null?Se.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Cr(e,t){return typeof t=="function"?t(e):t}function ki(e){var t=st(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var p=c=null,m=null,C=l;do{var O=C.lane;if((hn&O)===O)m!==null&&(m=m.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var D={lane:O,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};m===null?(p=m=D,c=r):m=m.next=D,Se.lanes|=O,mn|=O}C=C.next}while(C!==null&&C!==l);m===null?c=r:m.next=p,mt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Se.lanes|=l,mn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Si(e){var t=st(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);mt(l,t.memoizedState)||(qe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function au(){}function su(e,t){var n=Se,r=st(),o=t(),l=!mt(r.memoizedState,o);if(l&&(r.memoizedState=o,qe=!0),r=r.queue,ji(du.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Nr(9,cu.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(s(349));(hn&30)!==0||uu(n,t,o)}return o}function uu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cu(e,t,n,r){t.value=n,t.getSnapshot=r,fu(t)&&pu(e)}function du(e,t,n){return n(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function pu(e){var t=bt(e,1);t!==null&&wt(t,e,1,-1)}function hu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,Se,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Se.updateQueue,t===null?(t={lastEffect:null,stores:null},Se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mu(){return st().memoizedState}function Ro(e,t,n,r){var o=Ct();Se.flags|=e,o.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function Po(e,t,n,r){var o=st();r=r===void 0?null:r;var l=void 0;if(ze!==null){var c=ze.memoizedState;if(l=c.destroy,r!==null&&yi(r,c.deps)){o.memoizedState=Nr(t,n,l,r);return}}Se.flags|=e,o.memoizedState=Nr(1|t,n,l,r)}function vu(e,t){return Ro(8390656,8,e,t)}function ji(e,t){return Po(2048,8,e,t)}function gu(e,t){return Po(4,2,e,t)}function yu(e,t){return Po(4,4,e,t)}function xu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,xu.bind(null,t,e),n)}function Ei(){}function ku(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Su(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ju(e,t,n){return(hn&21)===0?(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n):(mt(n,t)||(n=Za(),Se.lanes|=n,mn|=n,e.baseState=!0),t)}function $f(e,t){var n=fe;fe=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{fe=n,gi.transition=r}}function Eu(){return st().memoizedState}function Bf(e,t,n){var r=en(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e))Nu(t,n);else if(n=nu(e,t,n,r),n!==null){var o=Qe();wt(n,e,r,o),Ru(n,t,r)}}function Uf(e,t,n){var r=en(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Nu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,p=l(c,n);if(o.hasEagerState=!0,o.eagerState=p,mt(p,c)){var m=t.interleaved;m===null?(o.next=o,di(t)):(o.next=m.next,m.next=o),t.interleaved=o;return}}catch{}finally{}n=nu(e,t,o,r),n!==null&&(o=Qe(),wt(n,e,r,o),Ru(n,t,r))}}function Cu(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Nu(e,t){jr=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ru(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}var zo={readContext:at,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Hf={readContext:at,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,xu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bf.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:Ei,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=$f.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Se,o=Ct();if(xe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ie===null)throw Error(s(349));(hn&30)!==0||uu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,vu(du.bind(null,r,l,e),[e]),r.flags|=2048,Nr(9,cu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Ie.identifierPrefix;if(xe){var n=Mt,r=Tt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vf={readContext:at,useCallback:ku,useContext:at,useEffect:ji,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:ki,useRef:mu,useState:function(){return ki(Cr)},useDebugValue:Ei,useDeferredValue:function(e){var t=st();return ju(t,ze.memoizedState,e)},useTransition:function(){var e=ki(Cr)[0],t=st().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Eu,unstable_isNewReconciler:!1},Wf={readContext:at,useCallback:ku,useContext:at,useEffect:ji,useImperativeHandle:wu,useInsertionEffect:gu,useLayoutEffect:yu,useMemo:Su,useReducer:Si,useRef:mu,useState:function(){return Si(Cr)},useDebugValue:Ei,useDeferredValue:function(e){var t=st();return ze===null?t.memoizedState=e:ju(t,ze.memoizedState,e)},useTransition:function(){var e=Si(Cr)[0],t=st().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Eu,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ci(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=en(e),l=Ot(r,o);l.payload=t,n!=null&&(l.callback=n),t=Gt(e,l,o),t!==null&&(wt(t,e,o,r),So(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=en(e),l=Ot(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Gt(e,l,o),t!==null&&(wt(t,e,o,r),So(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=en(e),o=Ot(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(wt(t,e,r,n),So(t,e,r))}};function Pu(e,t,n,r,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(o,l):!0}function zu(e,t,n){var r=!1,o=Jt,l=t.contextType;return typeof l=="object"&&l!==null?l=at(l):(o=Ke(t)?un:Be.current,r=t.contextTypes,l=(r=r!=null)?Mn(e,o):Jt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function _u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function Ni(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fi(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=at(l):(l=Ke(t)?un:Be.current,o.context=Mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ci(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_o.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Do||(Do=!0,Hi=r),Pi(e,t)},n}function Tu(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function Mu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qf;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ip.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ou(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Jf=te.ReactCurrentOwner,qe=!1;function We(e,t,n,r){t.child=e===null?tu(t,null,n,r):Dn(t,e.child,n,r)}function Iu(e,t,n,r,o){n=n.render;var l=t.ref;return An(t,o),r=xi(e,t,n,r,l,o),n=wi(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(xe&&n&&ni(t),t.flags|=1,We(e,t,r,o),t.child)}function Du(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Gi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Fu(e,t,l,r,o)):(e=Ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(c,r)&&e.ref===t.ref)return It(e,t,o)}return t.flags|=1,e=nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function Fu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(fr(l,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,It(e,t,o)}return zi(e,t,n,r,o)}function Au(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Hn,ot),ot|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Hn,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,me(Hn,ot),ot|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,me(Hn,ot),ot|=r;return We(e,t,o,n),t.child}function $u(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zi(e,t,n,r,o){var l=Ke(n)?un:Be.current;return l=Mn(t,l),An(t,o),n=xi(e,t,n,r,l,o),r=wi(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,It(e,t,o)):(xe&&r&&ni(t),t.flags|=1,We(e,t,n,o),t.child)}function Bu(e,t,n,r,o){if(Ke(n)){var l=!0;ho(t)}else l=!1;if(An(t,o),t.stateNode===null)To(e,t),zu(t,n,r),Ni(t,n,r,o),r=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var m=c.context,C=n.contextType;typeof C=="object"&&C!==null?C=at(C):(C=Ke(n)?un:Be.current,C=Mn(t,C));var O=n.getDerivedStateFromProps,D=typeof O=="function"||typeof c.getSnapshotBeforeUpdate=="function";D||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==r||m!==C)&&_u(t,c,r,C),qt=!1;var M=t.memoizedState;c.state=M,jo(t,r,c,o),m=t.memoizedState,p!==r||M!==m||Je.current||qt?(typeof O=="function"&&(Ci(t,n,O,r),m=t.memoizedState),(p=qt||Pu(t,n,p,r,M,m,C))?(D||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),c.props=r,c.state=m,c.context=C,r=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,ru(e,t),p=t.memoizedProps,C=t.type===t.elementType?p:gt(t.type,p),c.props=C,D=t.pendingProps,M=c.context,m=n.contextType,typeof m=="object"&&m!==null?m=at(m):(m=Ke(n)?un:Be.current,m=Mn(t,m));var H=n.getDerivedStateFromProps;(O=typeof H=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==D||M!==m)&&_u(t,c,r,m),qt=!1,M=t.memoizedState,c.state=M,jo(t,r,c,o);var W=t.memoizedState;p!==D||M!==W||Je.current||qt?(typeof H=="function"&&(Ci(t,n,H,r),W=t.memoizedState),(C=qt||Pu(t,n,C,r,M,W,m)||!1)?(O||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,W,m),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,W,m)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=W),c.props=r,c.state=W,c.context=m,r=C):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),r=!1)}return _i(e,t,n,r,l,o)}function _i(e,t,n,r,o,l){$u(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return o&&Qs(t,n,!1),It(e,t,l);r=t.stateNode,Jf.current=t;var p=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=Dn(t,e.child,null,l),t.child=Dn(t,null,p,l)):We(e,t,p,l),t.memoizedState=r.state,o&&Qs(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?Vs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vs(e,t.context,!1),pi(e,t.containerInfo)}function Hu(e,t,n,r,o){return In(),ii(o),t.flags|=256,We(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var r=t.pendingProps,o=ke.current,l=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(o&2)!==0),p?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(ke,o&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Vo(c,r,0,null),e=xn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ti(n),t.memoizedState=Li,e):Mi(t,c));if(o=e.memoizedState,o!==null&&(p=o.dehydrated,p!==null))return Kf(e,t,c,r,p,o,n);if(l){l=r.fallback,c=t.mode,o=e.child,p=o.sibling;var m={mode:"hidden",children:r.children};return(c&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=nn(o,m),r.subtreeFlags=o.subtreeFlags&14680064),p!==null?l=nn(p,l):(l=xn(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?Ti(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return l=e.child,e=l.sibling,r=nn(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mi(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&ii(r),Dn(t,e.child,null,n),e=Mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,n,r,o,l,c){if(n)return t.flags&256?(t.flags&=-257,r=Ri(Error(s(422))),Lo(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Vo({mode:"visible",children:r.children},o,0,null),l=xn(l,o,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Dn(t,e.child,null,c),t.child.memoizedState=Ti(c),t.memoizedState=Li,l);if((t.mode&1)===0)return Lo(e,t,c,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var p=r.dgst;return r=p,l=Error(s(419)),r=Ri(l,r,void 0),Lo(e,t,c,r)}if(p=(c&e.childLanes)!==0,qe||p){if(r=Ie,r!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|c))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,bt(e,o),wt(r,e,o,-1))}return qi(),r=Ri(Error(s(421))),Lo(e,t,c,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ap.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,rt=Wt(o.nextSibling),nt=t,xe=!0,vt=null,e!==null&&(lt[it++]=Tt,lt[it++]=Mt,lt[it++]=cn,Tt=e.id,Mt=e.overflow,cn=t),t=Mi(t,r.children),t.flags|=4096,t)}function Wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ci(e.return,t,n)}function bi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Qu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(We(e,t,r.children,n),r=ke.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wu(e,n,t);else if(e.tag===19)Wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(ke,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),bi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Eo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}bi(t,!0,n,null,l);break;case"together":bi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function It(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qf(e,t,n){switch(t.tag){case 3:Uu(t),In();break;case 5:iu(t);break;case 1:Ke(t.type)&&ho(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(wo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(ke,ke.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Vu(e,t,n):(me(ke,ke.current&1),e=It(e,t,n),e!==null?e.sibling:null);me(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Qu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return It(e,t,n)}var Ju,Oi,Ku,qu;Ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Oi=function(){},Ku=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pn(Et.current);var l=null;switch(n){case"input":o=cl(e,o),r=cl(e,r),l=[];break;case"select":o=T({},o,{value:void 0}),r=T({},r,{value:void 0}),l=[];break;case"textarea":o=pl(e,o),r=pl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=co)}ml(n,r);var c;n=null;for(C in o)if(!r.hasOwnProperty(C)&&o.hasOwnProperty(C)&&o[C]!=null)if(C==="style"){var p=o[C];for(c in p)p.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(d.hasOwnProperty(C)?l||(l=[]):(l=l||[]).push(C,null));for(C in r){var m=r[C];if(p=o!=null?o[C]:void 0,r.hasOwnProperty(C)&&m!==p&&(m!=null||p!=null))if(C==="style")if(p){for(c in p)!p.hasOwnProperty(c)||m&&m.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in m)m.hasOwnProperty(c)&&p[c]!==m[c]&&(n||(n={}),n[c]=m[c])}else n||(l||(l=[]),l.push(C,n)),n=m;else C==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,p=p?p.__html:void 0,m!=null&&p!==m&&(l=l||[]).push(C,m)):C==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(C,""+m):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(d.hasOwnProperty(C)?(m!=null&&C==="onScroll"&&ve("scroll",e),l||p===m||(l=[])):(l=l||[]).push(C,m))}n&&(l=l||[]).push("style",n);var C=l;(t.updateQueue=C)&&(t.flags|=4)}},qu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gf(e,t,n){var r=t.pendingProps;switch(ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&po(),He(t),null;case 3:return r=t.stateNode,$n(),ge(Je),ge(Be),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(Qi(vt),vt=null))),Oi(e,t),He(t),null;case 5:hi(t);var o=pn(Sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ku(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return He(t),null}if(e=pn(Et.current),yo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[jt]=t,r[gr]=l,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(o=0;o<hr.length;o++)ve(hr[o],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":za(r,l),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ve("invalid",r);break;case"textarea":Ta(r,l),ve("invalid",r)}ml(n,l),o=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?r.textContent!==p&&(l.suppressHydrationWarning!==!0&&uo(r.textContent,p,e),o=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&uo(r.textContent,p,e),o=["children",""+p]):d.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&ve("scroll",r)}switch(n){case"input":$r(r),La(r,l,!0);break;case"textarea":$r(r),ba(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[jt]=t,e[gr]=r,Ju(e,t,!1,!1),t.stateNode=e;e:{switch(c=vl(n,r),n){case"dialog":ve("cancel",e),ve("close",e),o=r;break;case"iframe":case"object":case"embed":ve("load",e),o=r;break;case"video":case"audio":for(o=0;o<hr.length;o++)ve(hr[o],e);o=r;break;case"source":ve("error",e),o=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),o=r;break;case"details":ve("toggle",e),o=r;break;case"input":za(e,r),o=cl(e,r),ve("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=T({},r,{value:void 0}),ve("invalid",e);break;case"textarea":Ta(e,r),o=pl(e,r),ve("invalid",e);break;default:o=r}ml(n,o),p=o;for(l in p)if(p.hasOwnProperty(l)){var m=p[l];l==="style"?Fa(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Ia(e,m)):l==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&qn(e,m):typeof m=="number"&&qn(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(d.hasOwnProperty(l)?m!=null&&l==="onScroll"&&ve("scroll",e):m!=null&&Y(e,l,m,c))}switch(n){case"input":$r(e),La(e,r,!1);break;case"textarea":$r(e),ba(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)qu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=pn(Sr.current),pn(Et.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(l=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return He(t),null;case 13:if(ge(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&rt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Xs(),In(),t.flags|=98560,l=!1;else if(l=yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[jt]=t}else In(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),l=!1}else vt!==null&&(Qi(vt),vt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?_e===0&&(_e=3):qi())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return $n(),Oi(e,t),e===null&&mr(t.stateNode.containerInfo),He(t),null;case 10:return ui(t.type._context),He(t),null;case 17:return Ke(t.type)&&po(),He(t),null;case 19:if(ge(ke),l=t.memoizedState,l===null)return He(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)Rr(l,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Eo(e),c!==null){for(t.flags|=128,Rr(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(ke,ke.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ce()>Vn&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Eo(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!xe)return He(t),null}else 2*Ce()-l.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,Rr(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ce(),t.sibling=null,n=ke.current,me(ke,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return Ki(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ot&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Yf(e,t){switch(ri(t),t.tag){case 1:return Ke(t.type)&&po(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),ge(Je),ge(Be),vi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hi(t),null;case 13:if(ge(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(ke),null;case 4:return $n(),null;case 10:return ui(t.type._context),null;case 22:case 23:return Ki(),null;case 24:return null;default:return null}}var Mo=!1,Ve=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,V=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function Ii(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Gu=!1;function Zf(e,t){if(Kl=Xr,e=Ps(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,p=-1,m=-1,C=0,O=0,D=e,M=null;t:for(;;){for(var H;D!==n||o!==0&&D.nodeType!==3||(p=c+o),D!==l||r!==0&&D.nodeType!==3||(m=c+r),D.nodeType===3&&(c+=D.nodeValue.length),(H=D.firstChild)!==null;)M=D,D=H;for(;;){if(D===e)break t;if(M===n&&++C===o&&(p=c),M===l&&++O===r&&(m=c),(H=D.nextSibling)!==null)break;D=M,M=D.parentNode}D=H}n=p===-1||m===-1?null:{start:p,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:e,selectionRange:n},Xr=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var W=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(W!==null){var Q=W.memoizedProps,Ne=W.memoizedState,S=t.stateNode,g=S.getSnapshotBeforeUpdate(t.elementType===t.type?Q:gt(t.type,Q),Ne);S.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(A){Ee(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return W=Gu,Gu=!1,W}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ii(t,n,l)}o=o.next}while(o!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Di(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[gr],delete t[Zl],delete t[Of],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xu(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=co));else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}function Ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ai(e,t,n),e=e.sibling;e!==null;)Ai(e,t,n),e=e.sibling}var Ae=null,yt=!1;function Yt(e,t,n){for(n=n.child;n!==null;)ec(e,t,n),n=n.sibling}function ec(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Qr,n)}catch{}switch(n.tag){case 5:Ve||Un(n,t);case 6:var r=Ae,o=yt;Ae=null,Yt(e,t,n),Ae=r,yt=o,Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(yt?(e=Ae,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),ir(e)):Xl(Ae,n.stateNode));break;case 4:r=Ae,o=yt,Ae=n.stateNode.containerInfo,yt=!0,Yt(e,t,n),Ae=r,yt=o;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&Ii(n,t,c),o=o.next}while(o!==r)}Yt(e,t,n);break;case 1:if(!Ve&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){Ee(n,t,p)}Yt(e,t,n);break;case 21:Yt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Yt(e,t,n),Ve=r):Yt(e,t,n);break;default:Yt(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xf),t.forEach(function(r){var o=sp.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Ae=p.stateNode,yt=!1;break e;case 3:Ae=p.stateNode.containerInfo,yt=!0;break e;case 4:Ae=p.stateNode.containerInfo,yt=!0;break e}p=p.return}if(Ae===null)throw Error(s(160));ec(l,c,o),Ae=null,yt=!1;var m=o.alternate;m!==null&&(m.return=null),o.return=null}catch(C){Ee(o,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nc(t,e),t=t.sibling}function nc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Nt(e),r&4){try{Pr(3,e,e.return),bo(3,e)}catch(Q){Ee(e,e.return,Q)}try{Pr(5,e,e.return)}catch(Q){Ee(e,e.return,Q)}}break;case 1:xt(t,e),Nt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(xt(t,e),Nt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var o=e.stateNode;try{qn(o,"")}catch(Q){Ee(e,e.return,Q)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,p=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&_a(o,l),vl(p,c);var C=vl(p,l);for(c=0;c<m.length;c+=2){var O=m[c],D=m[c+1];O==="style"?Fa(o,D):O==="dangerouslySetInnerHTML"?Ia(o,D):O==="children"?qn(o,D):Y(o,O,D,C)}switch(p){case"input":dl(o,l);break;case"textarea":Ma(o,l);break;case"select":var M=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var H=l.value;H!=null?kn(o,!!l.multiple,H,!1):M!==!!l.multiple&&(l.defaultValue!=null?kn(o,!!l.multiple,l.defaultValue,!0):kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[gr]=l}catch(Q){Ee(e,e.return,Q)}}break;case 6:if(xt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(Q){Ee(e,e.return,Q)}}break;case 3:if(xt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(Q){Ee(e,e.return,Q)}break;case 4:xt(t,e),Nt(e);break;case 13:xt(t,e),Nt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ui=Ce())),r&4&&tc(e);break;case 22:if(O=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(C=Ve)||O,xt(t,e),Ve=C):xt(t,e),Nt(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!O&&(e.mode&1)!==0)for(V=e,O=e.child;O!==null;){for(D=V=O;V!==null;){switch(M=V,H=M.child,M.tag){case 0:case 11:case 14:case 15:Pr(4,M,M.return);break;case 1:Un(M,M.return);var W=M.stateNode;if(typeof W.componentWillUnmount=="function"){r=M,n=M.return;try{t=r,W.props=t.memoizedProps,W.state=t.memoizedState,W.componentWillUnmount()}catch(Q){Ee(r,n,Q)}}break;case 5:Un(M,M.return);break;case 22:if(M.memoizedState!==null){lc(D);continue}}H!==null?(H.return=M,V=H):lc(D)}O=O.sibling}e:for(O=null,D=e;;){if(D.tag===5){if(O===null){O=D;try{o=D.stateNode,C?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=D.stateNode,m=D.memoizedProps.style,c=m!=null&&m.hasOwnProperty("display")?m.display:null,p.style.display=Da("display",c))}catch(Q){Ee(e,e.return,Q)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=C?"":D.memoizedProps}catch(Q){Ee(e,e.return,Q)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:xt(t,e),Nt(e),r&4&&tc(e);break;case 21:break;default:xt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qn(o,""),r.flags&=-33);var l=Zu(e);Ai(e,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,p=Zu(e);Fi(e,p,c);break;default:throw Error(s(161))}}catch(m){Ee(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ep(e,t,n){V=e,rc(e)}function rc(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var o=V,l=o.child;if(o.tag===22&&r){var c=o.memoizedState!==null||Mo;if(!c){var p=o.alternate,m=p!==null&&p.memoizedState!==null||Ve;p=Mo;var C=Ve;if(Mo=c,(Ve=m)&&!C)for(V=o;V!==null;)c=V,m=c.child,c.tag===22&&c.memoizedState!==null?ic(o):m!==null?(m.return=c,V=m):ic(o);for(;l!==null;)V=l,rc(l),l=l.sibling;V=o,Mo=p,Ve=C}oc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,V=l):oc(e)}}function oc(e){for(;V!==null;){var t=V;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ve||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&lu(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lu(t,c,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var O=C.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&ir(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ve||t.flags&512&&Di(t)}catch(M){Ee(t,t.return,M)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function lc(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function ic(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(m){Ee(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(m){Ee(t,o,m)}}var l=t.return;try{Di(t)}catch(m){Ee(t,l,m)}break;case 5:var c=t.return;try{Di(t)}catch(m){Ee(t,c,m)}}}catch(m){Ee(t,t.return,m)}if(t===e){V=null;break}var p=t.sibling;if(p!==null){p.return=t.return,V=p;break}V=t.return}}var tp=Math.ceil,Oo=te.ReactCurrentDispatcher,$i=te.ReactCurrentOwner,ut=te.ReactCurrentBatchConfig,ie=0,Ie=null,Pe=null,$e=0,ot=0,Hn=Qt(0),_e=0,zr=null,mn=0,Io=0,Bi=0,_r=null,Ge=null,Ui=0,Vn=1/0,Dt=null,Do=!1,Hi=null,Xt=null,Fo=!1,Zt=null,Ao=0,Lr=0,Vi=null,$o=-1,Bo=0;function Qe(){return(ie&6)!==0?Ce():$o!==-1?$o:$o=Ce()}function en(e){return(e.mode&1)===0?1:(ie&2)!==0&&$e!==0?$e&-$e:Ff.transition!==null?(Bo===0&&(Bo=Za()),Bo):(e=fe,e!==0||(e=window.event,e=e===void 0?16:ss(e.type)),e)}function wt(e,t,n,r){if(50<Lr)throw Lr=0,Vi=null,Error(s(185));tr(e,n,r),((ie&2)===0||e!==Ie)&&(e===Ie&&((ie&2)===0&&(Io|=n),_e===4&&tn(e,$e)),Ye(e,r),n===1&&ie===0&&(t.mode&1)===0&&(Vn=Ce()+500,mo&&Kt()))}function Ye(e,t){var n=e.callbackNode;Dd(e,t);var r=qr(e,e===Ie?$e:0);if(r===0)n!==null&&Ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ga(n),t===1)e.tag===0?Df(sc.bind(null,e)):Js(sc.bind(null,e)),Mf(function(){(ie&6)===0&&Kt()}),n=null;else{switch(es(r)){case 1:n=jl;break;case 4:n=Ya;break;case 16:n=Wr;break;case 536870912:n=Xa;break;default:n=Wr}n=vc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if($o=-1,Bo=0,(ie&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=qr(e,e===Ie?$e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Uo(e,r);else{t=r;var o=ie;ie|=2;var l=cc();(Ie!==e||$e!==t)&&(Dt=null,Vn=Ce()+500,gn(e,t));do try{op();break}catch(p){uc(e,p)}while(!0);si(),Oo.current=l,ie=o,Pe!==null?t=0:(Ie=null,$e=0,t=_e)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=Wi(e,o))),t===1)throw n=zr,gn(e,0),tn(e,r),Ye(e,Ce()),n;if(t===6)tn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!np(o)&&(t=Uo(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=Wi(e,l))),t===1))throw n=zr,gn(e,0),tn(e,r),Ye(e,Ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:yn(e,Ge,Dt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Ui+500-Ce(),10<t)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Yl(yn.bind(null,e,Ge,Dt),t);break}yn(e,Ge,Dt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var c=31-ht(r);l=1<<c,c=t[c],c>o&&(o=c),r&=~l}if(r=o,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tp(r/1960))-r,10<r){e.timeoutHandle=Yl(yn.bind(null,e,Ge,Dt),r);break}yn(e,Ge,Dt);break;case 5:yn(e,Ge,Dt);break;default:throw Error(s(329))}}}return Ye(e,Ce()),e.callbackNode===n?ac.bind(null,e):null}function Wi(e,t){var n=_r;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Uo(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Qi(t)),e}function Qi(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!mt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Bi,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if((ie&6)!==0)throw Error(s(327));Wn();var t=qr(e,0);if((t&1)===0)return Ye(e,Ce()),null;var n=Uo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=zr,gn(e,0),tn(e,t),Ye(e,Ce()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,Ge,Dt),Ye(e,Ce()),null}function Ji(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(Vn=Ce()+500,mo&&Kt())}}function vn(e){Zt!==null&&Zt.tag===0&&(ie&6)===0&&Wn();var t=ie;ie|=1;var n=ut.transition,r=fe;try{if(ut.transition=null,fe=1,e)return e()}finally{fe=r,ut.transition=n,ie=t,(ie&6)===0&&Kt()}}function Ki(){ot=Hn.current,ge(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tf(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(ri(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&po();break;case 3:$n(),ge(Je),ge(Be),vi();break;case 5:hi(r);break;case 4:$n();break;case 13:ge(ke);break;case 19:ge(ke);break;case 10:ui(r.type._context);break;case 22:case 23:Ki()}n=n.return}if(Ie=e,Pe=e=nn(e.current,null),$e=ot=t,_e=0,zr=null,Bi=Io=mn=0,Ge=_r=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=o,r.next=c}n.pending=r}fn=null}return e}function uc(e,t){do{var n=Pe;try{if(si(),Co.current=zo,No){for(var r=Se.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}No=!1}if(hn=0,Oe=ze=Se=null,jr=!1,Er=0,$i.current=null,n===null||n.return===null){_e=1,zr=t,Pe=null;break}e:{var l=e,c=n.return,p=n,m=t;if(t=$e,p.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var C=m,O=p,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var M=O.alternate;M?(O.updateQueue=M.updateQueue,O.memoizedState=M.memoizedState,O.lanes=M.lanes):(O.updateQueue=null,O.memoizedState=null)}var H=bu(c);if(H!==null){H.flags&=-257,Ou(H,c,p,l,t),H.mode&1&&Mu(l,C,t),t=H,m=C;var W=t.updateQueue;if(W===null){var Q=new Set;Q.add(m),t.updateQueue=Q}else W.add(m);break e}else{if((t&1)===0){Mu(l,C,t),qi();break e}m=Error(s(426))}}else if(xe&&p.mode&1){var Ne=bu(c);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),Ou(Ne,c,p,l,t),ii(Bn(m,p));break e}}l=m=Bn(m,p),_e!==4&&(_e=2),_r===null?_r=[l]:_r.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var S=Lu(l,m,t);ou(l,S);break e;case 1:p=m;var g=l.type,j=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Xt===null||!Xt.has(j)))){l.flags|=65536,t&=-t,l.lanes|=t;var A=Tu(l,p,t);ou(l,A);break e}}l=l.return}while(l!==null)}fc(n)}catch(J){t=J,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function cc(){var e=Oo.current;return Oo.current=zo,e===null?zo:e}function qi(){(_e===0||_e===3||_e===2)&&(_e=4),Ie===null||(mn&268435455)===0&&(Io&268435455)===0||tn(Ie,$e)}function Uo(e,t){var n=ie;ie|=2;var r=cc();(Ie!==e||$e!==t)&&(Dt=null,gn(e,t));do try{rp();break}catch(o){uc(e,o)}while(!0);if(si(),ie=n,Oo.current=r,Pe!==null)throw Error(s(261));return Ie=null,$e=0,_e}function rp(){for(;Pe!==null;)dc(Pe)}function op(){for(;Pe!==null&&!Pd();)dc(Pe)}function dc(e){var t=mc(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?fc(e):Pe=t,$i.current=null}function fc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Gf(n,t,ot),n!==null){Pe=n;return}}else{if(n=Yf(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);_e===0&&(_e=5)}function yn(e,t,n){var r=fe,o=ut.transition;try{ut.transition=null,fe=1,lp(e,t,n,r)}finally{ut.transition=o,fe=r}return null}function lp(e,t,n,r){do Wn();while(Zt!==null);if((ie&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Fd(e,l),e===Ie&&(Pe=Ie=null,$e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fo||(Fo=!0,vc(Wr,function(){return Wn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=ut.transition,ut.transition=null;var c=fe;fe=1;var p=ie;ie|=4,$i.current=null,Zf(e,n),nc(n,e),Cf(ql),Xr=!!Kl,ql=Kl=null,e.current=n,ep(n),zd(),ie=p,fe=c,ut.transition=l}else e.current=n;if(Fo&&(Fo=!1,Zt=e,Ao=o),l=e.pendingLanes,l===0&&(Xt=null),Td(n.stateNode),Ye(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Do)throw Do=!1,e=Hi,Hi=null,e;return(Ao&1)!==0&&e.tag!==0&&Wn(),l=e.pendingLanes,(l&1)!==0?e===Vi?Lr++:(Lr=0,Vi=e):Lr=0,Kt(),null}function Wn(){if(Zt!==null){var e=es(Ao),t=ut.transition,n=fe;try{if(ut.transition=null,fe=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,Ao=0,(ie&6)!==0)throw Error(s(331));var o=ie;for(ie|=4,V=e.current;V!==null;){var l=V,c=l.child;if((V.flags&16)!==0){var p=l.deletions;if(p!==null){for(var m=0;m<p.length;m++){var C=p[m];for(V=C;V!==null;){var O=V;switch(O.tag){case 0:case 11:case 15:Pr(8,O,l)}var D=O.child;if(D!==null)D.return=O,V=D;else for(;V!==null;){O=V;var M=O.sibling,H=O.return;if(Yu(O),O===C){V=null;break}if(M!==null){M.return=H,V=M;break}V=H}}}var W=l.alternate;if(W!==null){var Q=W.child;if(Q!==null){W.child=null;do{var Ne=Q.sibling;Q.sibling=null,Q=Ne}while(Q!==null)}}V=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,V=c;else e:for(;V!==null;){if(l=V,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Pr(9,l,l.return)}var S=l.sibling;if(S!==null){S.return=l.return,V=S;break e}V=l.return}}var g=e.current;for(V=g;V!==null;){c=V;var j=c.child;if((c.subtreeFlags&2064)!==0&&j!==null)j.return=c,V=j;else e:for(c=g;V!==null;){if(p=V,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:bo(9,p)}}catch(J){Ee(p,p.return,J)}if(p===c){V=null;break e}var A=p.sibling;if(A!==null){A.return=p.return,V=A;break e}V=p.return}}if(ie=o,Kt(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Qr,e)}catch{}r=!0}return r}finally{fe=n,ut.transition=t}}return!1}function pc(e,t,n){t=Bn(n,t),t=Lu(e,t,1),e=Gt(e,t,1),t=Qe(),e!==null&&(tr(e,1,t),Ye(e,t))}function Ee(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=Bn(n,e),e=Tu(t,e,1),t=Gt(t,e,1),e=Qe(),t!==null&&(tr(t,1,e),Ye(t,e));break}}t=t.return}}function ip(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&($e&n)===n&&(_e===4||_e===3&&($e&130023424)===$e&&500>Ce()-Ui?gn(e,0):Bi|=n),Ye(e,t)}function hc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=Qe();e=bt(e,t),e!==null&&(tr(e,t,n),Ye(e,n))}function ap(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hc(e,n)}function sp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),hc(e,n)}var mc;mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return qe=!1,qf(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,xe&&(t.flags&1048576)!==0&&Ks(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var o=Mn(t,Be.current);An(t,n),o=xi(null,t,r,e,o,n);var l=wi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(l=!0,ho(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fi(t),o.updater=_o,t.stateNode=o,o._reactInternals=t,Ni(t,r,e,n),t=_i(null,t,r,!0,l,n)):(t.tag=0,xe&&l&&ni(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cp(r),e=gt(r,e),o){case 0:t=zi(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=Iu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,gt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),zi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Bu(e,t,r,o,n);case 3:e:{if(Uu(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,o=l.element,ru(e,t),jo(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Bn(Error(s(423)),t),t=Hu(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(s(424)),t),t=Hu(e,t,r,n,o);break e}else for(rt=Wt(t.stateNode.containerInfo.firstChild),nt=t,xe=!0,vt=null,n=tu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===o){t=It(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return iu(t),e===null&&li(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,c=o.children,Gl(r,o)?c=null:l!==null&&Gl(r,l)&&(t.flags|=32),$u(e,t),We(e,t,c,n),t.child;case 6:return e===null&&li(t),null;case 13:return Vu(e,t,n);case 4:return pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Iu(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,c=o.value,me(wo,r._currentValue),r._currentValue=c,l!==null)if(mt(l.value,c)){if(l.children===o.children&&!Je.current){t=It(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var m=p.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=Ot(-1,n&-n),m.tag=2;var C=l.updateQueue;if(C!==null){C=C.shared;var O=C.pending;O===null?m.next=m:(m.next=O.next,O.next=m),C.pending=m}}l.lanes|=n,m=l.alternate,m!==null&&(m.lanes|=n),ci(l.return,n,t),p.lanes|=n;break}m=m.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=n,p=c.alternate,p!==null&&(p.lanes|=n),ci(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=at(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=gt(r,t.pendingProps),o=gt(r.type,o),Du(e,t,r,o,n);case 15:return Fu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),To(e,t),t.tag=1,Ke(r)?(e=!0,ho(t)):e=!1,An(t,n),zu(t,r,o),Ni(t,r,o,n),_i(null,t,r,!0,e,n);case 19:return Qu(e,t,n);case 22:return Au(e,t,n)}throw Error(s(156,t.tag))};function vc(e,t){return qa(e,t)}function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new up(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cp(e){if(typeof e=="function")return Gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fe)return 11;if(e===we)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,o,l){var c=2;if(r=e,typeof e=="function")Gi(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case oe:return xn(n.children,o,l,t);case pe:c=8,o|=8;break;case Le:return e=ct(12,n,t,o|2),e.elementType=Le,e.lanes=l,e;case Re:return e=ct(13,n,t,o),e.elementType=Re,e.lanes=l,e;case Me:return e=ct(19,n,t,o),e.elementType=Me,e.lanes=l,e;case I:return Vo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Te:c=10;break e;case Ze:c=9;break e;case Fe:c=11;break e;case we:c=14;break e;case be:c=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ct(c,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function xn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=ct(22,e,r,t),e.elementType=I,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zi(e,t,n,r,o,l,c,p,m){return e=new dp(e,t,n,p,m),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ct(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fi(l),e}function fp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:le,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gc(e){if(!e)return Jt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Ws(e,n,t)}return t}function yc(e,t,n,r,o,l,c,p,m){return e=Zi(n,r,!0,e,o,l,c,p,m),e.context=gc(null),n=e.current,r=Qe(),o=en(n),l=Ot(r,o),l.callback=t??null,Gt(n,l,o),e.current.lanes=o,tr(e,o,r),Ye(e,r),e}function Wo(e,t,n,r){var o=t.current,l=Qe(),c=en(o);return n=gc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,c),e!==null&&(wt(e,o,c,l),So(e,o,c)),c}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){xc(e,t),(e=e.alternate)&&xc(e,t)}function pp(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}Jo.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Wo(e,t,null,null)},Jo.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Wo(null,e,null,null)}),t[_t]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=rs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&is(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function hp(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var C=Qo(c);l.call(C)}}var c=yc(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=c,e[_t]=c.current,mr(e.nodeType===8?e.parentNode:e),vn(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var p=r;r=function(){var C=Qo(m);p.call(C)}}var m=Zi(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=m,e[_t]=m.current,mr(e.nodeType===8?e.parentNode:e),vn(function(){Wo(t,m,n,r)}),m}function qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var c=l;if(typeof o=="function"){var p=o;o=function(){var m=Qo(c);p.call(m)}}Wo(t,c,e,o)}else c=hp(n,t,e,o,r);return Qo(c)}ts=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(Nl(t,n|1),Ye(t,Ce()),(ie&6)===0&&(Vn=Ce()+500,Kt()))}break;case 13:vn(function(){var r=bt(e,1);if(r!==null){var o=Qe();wt(r,e,1,o)}}),ea(e,1)}},Rl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Qe();wt(t,e,134217728,n)}ea(e,134217728)}},ns=function(e){if(e.tag===13){var t=en(e),n=bt(e,t);if(n!==null){var r=Qe();wt(n,e,t,r)}ea(e,t)}},rs=function(){return fe},os=function(e,t){var n=fe;try{return fe=e,t()}finally{fe=n}},xl=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=fo(r);if(!o)throw Error(s(90));Pa(r),dl(r,o)}}}break;case"textarea":Ma(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}},Ua=Ji,Ha=vn;var mp={usingClientEntryPoint:!1,Events:[yr,Ln,fo,$a,Ba,Ji]},Tr={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vp={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ja(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Qr=Go.inject(vp),St=Go}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp,Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(s(200));return fp(e,t,null,n)},Xe.createRoot=function(e,t){if(!na(e))throw Error(s(299));var n=!1,r="",o=wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zi(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,mr(e.nodeType===8?e.parentNode:e),new ta(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ja(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return vn(e)},Xe.hydrate=function(e,t,n){if(!Ko(t))throw Error(s(200));return qo(null,e,t,!0,n)},Xe.hydrateRoot=function(e,t,n){if(!na(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",c=wc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=yc(t,null,e,1,n??null,o,!1,l,c),e[_t]=t.current,mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Jo(t)},Xe.render=function(e,t,n){if(!Ko(t))throw Error(s(200));return qo(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Ko(e))throw Error(s(40));return e._reactRootContainer?(vn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1},Xe.unstable_batchedUpdates=Ji,Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ko(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return qo(e,t,n,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var zc;function Cp(){if(zc)return la.exports;zc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),la.exports=Ep(),la.exports}var _c;function Np(){if(_c)return Yo;_c=1;var i=Cp();return Yo.createRoot=i.createRoot,Yo.hydrateRoot=i.hydrateRoot,Yo}var Rp=Np();const Pp=Uc(Rp);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var va=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Hc=/^[\\/]{2}/;function zp(i,u){return u+i.replace(/\\/g,"/")}var Lc="popstate";function Tc(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function _p(i={}){function u(f,d){var E;let h=(E=d.state)==null?void 0:E.masked,{pathname:v,search:k,hash:w}=h||f.location;return da("",{pathname:v,search:k,hash:w},d.state&&d.state.usr||null,d.state&&d.state.key||"default",h?{pathname:f.location.pathname,search:f.location.search,hash:f.location.hash}:void 0)}function s(f,d){return typeof d=="string"?d:Or(d)}return Tp(u,s,null,i)}function je(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Rt(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Lp(){return Math.random().toString(36).substring(2,10)}function Mc(i,u){return{usr:i.state,key:i.key,idx:u,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function da(i,u,s=null,f,d){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?Qn(u):u,state:s,key:u&&u.key||f||Lp(),mask:d}}function Or({pathname:i="/",search:u="",hash:s=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function Qn(i){let u={};if(i){let s=i.indexOf("#");s>=0&&(u.hash=i.substring(s),i=i.substring(0,s));let f=i.indexOf("?");f>=0&&(u.search=i.substring(f),i=i.substring(0,f)),i&&(u.pathname=i)}return u}function Tp(i,u,s,f={}){let{window:d=document.defaultView,v5Compat:h=!1}=f,v=d.history,k="POP",w=null,E=R();E==null&&(E=0,v.replaceState({...v.state,idx:E},""));function R(){return(v.state||{idx:null}).idx}function N(){k="POP";let F=R(),U=F==null?null:F-E;E=F,w&&w({action:k,location:b.location,delta:U})}function z(F,U){k="PUSH";let K=Tc(F)?F:da(b.location,F,U);E=R()+1;let Y=Mc(K,E),te=b.createHref(K.mask||K);try{v.pushState(Y,"",te)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(te)}h&&w&&w({action:k,location:b.location,delta:1})}function $(F,U){k="REPLACE";let K=Tc(F)?F:da(b.location,F,U);E=R();let Y=Mc(K,E),te=b.createHref(K.mask||K);v.replaceState(Y,"",te),h&&w&&w({action:k,location:b.location,delta:0})}function B(F){return Mp(d,F)}let b={get action(){return k},get location(){return i(d,v)},listen(F){if(w)throw new Error("A history only accepts one active listener");return d.addEventListener(Lc,N),w=F,()=>{d.removeEventListener(Lc,N),w=null}},createHref(F){return u(d,F)},createURL:B,encodeLocation(F){let U=B(F);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:z,replace:$,go(F){return v.go(F)}};return b}function Mp(i,u,s=!1){let f="http://localhost";i&&(f=i.location.origin!=="null"?i.location.origin:i.location.href),je(f,"No window.location.(origin|href) available to create URL");let d=typeof u=="string"?u:Or(u);return d=d.replace(/ $/,"%20"),!s&&Hc.test(d)&&(d=f+d),new URL(d,f)}function Vc(i,u,s="/"){return bp(i,u,s,!1)}function bp(i,u,s,f,d){let h=typeof u=="string"?Qn(u):u,v=Ft(h.pathname||"/",s);if(v==null)return null;let k=Op(i),w=null,E=Qp(v);for(let R=0;w==null&&R<k.length;++R)w=Wp(k[R],E,f);return w}function Op(i){let u=Wc(i);return Ip(u),u}function Wc(i,u=[],s=[],f="",d=!1){let h=(v,k,w=d,E)=>{let R={relativePath:E===void 0?v.path||"":E,caseSensitive:v.caseSensitive===!0,childrenIndex:k,route:v};if(R.relativePath.startsWith("/")){if(!R.relativePath.startsWith(f)&&w)return;je(R.relativePath.startsWith(f),`Absolute route path "${R.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),R.relativePath=R.relativePath.slice(f.length)}let N=kt([f,R.relativePath]),z=s.concat(R);v.children&&v.children.length>0&&(je(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Wc(v.children,u,z,N,w)),!(v.path==null&&!v.index)&&u.push({path:N,score:Hp(N,v.index),routesMeta:z.map(($,B)=>{let[b,F]=Kc($.relativePath,$.caseSensitive,B===z.length-1);return{...$,matcher:b,compiledParams:F}})})};return i.forEach((v,k)=>{var w;if(v.path===""||!((w=v.path)!=null&&w.includes("?")))h(v,k);else for(let E of Qc(v.path))h(v,k,!0,E)}),u}function Qc(i){let u=i.split("/");if(u.length===0)return[];let[s,...f]=u,d=s.endsWith("?"),h=s.replace(/\?$/,"");if(f.length===0)return d?[h,""]:[h];let v=Qc(f.join("/")),k=[];return k.push(...v.map(w=>w===""?h:[h,w].join("/"))),d&&k.push(...v),k.map(w=>i.startsWith("/")&&w===""?"/":w)}function Ip(i){i.sort((u,s)=>u.score!==s.score?s.score-u.score:Vp(u.routesMeta.map(f=>f.childrenIndex),s.routesMeta.map(f=>f.childrenIndex)))}var Dp=/^:[\w-]+$/,Fp=3,Ap=2,$p=1,Bp=10,Up=-2,bc=i=>i==="*";function Hp(i,u){let s=i.split("/"),f=s.length;return s.some(bc)&&(f+=Up),u&&(f+=Ap),s.filter(d=>!bc(d)).reduce((d,h)=>d+(Dp.test(h)?Fp:h===""?$p:Bp),f)}function Vp(i,u){return i.length===u.length&&i.slice(0,-1).every((f,d)=>f===u[d])?i[i.length-1]-u[u.length-1]:0}function Wp(i,u,s=!1){let{routesMeta:f}=i,d={},h="/",v=[];for(let k=0;k<f.length;++k){let w=f[k],E=k===f.length-1,R=h==="/"?u:u.slice(h.length)||"/",N={path:w.relativePath,caseSensitive:w.caseSensitive,end:E},z=w.matcher&&w.compiledParams?Jc(N,R,w.matcher,w.compiledParams):rl(N,R),$=w.route;if(!z&&E&&s&&!f[f.length-1].route.index&&(z=rl({path:w.relativePath,caseSensitive:w.caseSensitive,end:!1},R)),!z)return null;Object.assign(d,z.params),v.push({params:d,pathname:kt([h,z.pathname]),pathnameBase:qp(kt([h,z.pathnameBase])),route:$}),z.pathnameBase!=="/"&&(h=kt([h,z.pathnameBase]))}return v}function rl(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,f]=Kc(i.path,i.caseSensitive,i.end);return Jc(i,u,s,f)}function Jc(i,u,s,f){let d=u.match(s);if(!d)return null;let h=d[0],v=h.replace(/(.)\/+$/,"$1"),k=d.slice(1);return{params:f.reduce((E,{paramName:R,isOptional:N},z)=>{if(R==="*"){let B=k[z]||"";v=h.slice(0,h.length-B.length).replace(/(.)\/+$/,"$1")}const $=k[z];return N&&!$?E[R]=void 0:E[R]=($||"").replace(/%2F/g,"/"),E},{}),pathname:h,pathnameBase:v,pattern:i}}function Kc(i,u=!1,s=!0){Rt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let f=[],d="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,k,w,E,R)=>{if(f.push({paramName:k,isOptional:w!=null}),w){let N=R.charAt(E+v.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(f.push({paramName:"*"}),d+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":i!==""&&i!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),f]}function Qp(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Rt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function Ft(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,f=i.charAt(s);return f&&f!=="/"?null:i.slice(s)||"/"}function Jp(i,u="/"){let{pathname:s,search:f="",hash:d=""}=typeof i=="string"?Qn(i):i,h;return s?(s=Gc(s),s.startsWith("/")?h=Oc(s.substring(1),"/"):h=Oc(s,u)):h=u,{pathname:h,search:Gp(f),hash:Yp(d)}}function Oc(i,u){let s=ol(u).split("/");return i.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function sa(i,u,s,f){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Kp(i){return i.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function qc(i){let u=Kp(i);return u.map((s,f)=>f===u.length-1?s.pathname:s.pathnameBase)}function ga(i,u,s,f=!1){let d;typeof i=="string"?d=Qn(i):(d={...i},je(!d.pathname||!d.pathname.includes("?"),sa("?","pathname","search",d)),je(!d.pathname||!d.pathname.includes("#"),sa("#","pathname","hash",d)),je(!d.search||!d.search.includes("#"),sa("#","search","hash",d)));let h=i===""||d.pathname==="",v=h?"/":d.pathname,k;if(v==null)k=s;else{let N=u.length-1;if(!f&&v.startsWith("..")){let z=v.split("/");for(;z[0]==="..";)z.shift(),N-=1;d.pathname=z.join("/")}k=N>=0?u[N]:"/"}let w=Jp(d,k),E=v&&v!=="/"&&v.endsWith("/"),R=(h||v===".")&&s.endsWith("/");return!w.pathname.endsWith("/")&&(E||R)&&(w.pathname+="/"),w}var Gc=i=>i.replace(/[\\/]{2,}/g,"/"),kt=i=>Gc(i.join("/")),ol=i=>i.replace(/\/+$/,""),qp=i=>ol(i).replace(/^\/*/,"/"),Gp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Yp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Xp=class{constructor(i,u,s,f=!1){this.status=i,this.statusText=u||"",this.internal=f,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Zp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function eh(i){let u=i.map(s=>s.route.path).filter(Boolean);return kt(u)||"/"}var Yc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xc(i,u){let s=i;if(typeof s!="string"||!va.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let f=s,d=!1;if(Yc)try{let h=new URL(window.location.href),v=Hc.test(s)?new URL(zp(s,h.protocol)):new URL(s),k=Ft(v.pathname,u);v.origin===h.origin&&k!=null?s=k+v.search+v.hash:d=!0}catch{Rt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:f,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Zc=["POST","PUT","PATCH","DELETE"];new Set(Zc);var th=["GET",...Zc];new Set(th);var nh=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function rh(i){try{return nh.includes(new URL(i).protocol)}catch{return!1}}var Jn=x.createContext(null);Jn.displayName="DataRouter";var ll=x.createContext(null);ll.displayName="DataRouterState";var ed=x.createContext(!1);function oh(){return x.useContext(ed)}var td=x.createContext({isTransitioning:!1});td.displayName="ViewTransition";var lh=x.createContext(new Map);lh.displayName="Fetchers";var ih=x.createContext(null);ih.displayName="Await";var pt=x.createContext(null);pt.displayName="Navigation";var Dr=x.createContext(null);Dr.displayName="Location";var Pt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var ya=x.createContext(null);ya.displayName="RouteError";var nd="REACT_ROUTER_ERROR",ah="REDIRECT",sh="ROUTE_ERROR_RESPONSE";function uh(i){if(i.startsWith(`${nd}:${ah}:{`))try{let u=JSON.parse(i.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function ch(i){if(i.startsWith(`${nd}:${sh}:{`))try{let u=JSON.parse(i.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Xp(u.status,u.statusText,u.data)}catch{}}function dh(i,{relative:u}={}){je(Fr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:f}=x.useContext(pt),{hash:d,pathname:h,search:v}=Ar(i,{relative:u}),k=h;return s!=="/"&&(k=h==="/"?s:kt([s,h])),f.createHref({pathname:k,search:v,hash:d})}function Fr(){return x.useContext(Dr)!=null}function zt(){return je(Fr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Dr).location}var rd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function od(i){x.useContext(pt).static||x.useLayoutEffect(i)}function fh(){let{isDataRoute:i}=x.useContext(Pt);return i?Nh():ph()}function ph(){je(Fr(),"useNavigate() may be used only in the context of a <Router> component.");let i=x.useContext(Jn),{basename:u,navigator:s}=x.useContext(pt),{matches:f}=x.useContext(Pt),{pathname:d}=zt(),h=JSON.stringify(qc(f)),v=x.useRef(!1);return od(()=>{v.current=!0}),x.useCallback((w,E={})=>{if(Rt(v.current,rd),!v.current)return;if(typeof w=="number"){s.go(w);return}let R=ga(w,JSON.parse(h),d,E.relative==="path");i==null&&u!=="/"&&(R.pathname=R.pathname==="/"?u:kt([u,R.pathname])),(E.replace?s.replace:s.push)(R,E.state,E)},[u,s,h,d,i])}x.createContext(null);function hh(){let{matches:i}=x.useContext(Pt),u=i[i.length-1];return(u==null?void 0:u.params)??{}}function Ar(i,{relative:u}={}){let{matches:s}=x.useContext(Pt),{pathname:f}=zt(),d=JSON.stringify(qc(s));return x.useMemo(()=>ga(i,JSON.parse(d),f,u==="path"),[i,d,f,u])}function mh(i,u){return ld(i,u)}function ld(i,u,s){var F;je(Fr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=x.useContext(pt),{matches:d}=x.useContext(Pt),h=d[d.length-1],v=h?h.params:{},k=h?h.pathname:"/",w=h?h.pathnameBase:"/",E=h&&h.route;{let U=E&&E.path||"";ad(k,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${k}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let R=zt(),N;if(u){let U=typeof u=="string"?Qn(u):u;je(w==="/"||((F=U.pathname)==null?void 0:F.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${U.pathname}" was given in the \`location\` prop.`),N=U}else N=R;let z=N.pathname||"/",$=z;if(w!=="/"){let U=w.replace(/^\//,"").split("/");$="/"+z.replace(/^\//,"").split("/").slice(U.length).join("/")}let B=s&&s.state.matches.length?s.state.matches.map(U=>Object.assign(U,{route:s.manifest[U.route.id]||U.route})):Vc(i,{pathname:$});Rt(E||B!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Rt(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=wh(B&&B.map(U=>Object.assign({},U,{params:Object.assign({},v,U.params),pathname:kt([w,f.encodeLocation?f.encodeLocation(U.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?w:kt([w,f.encodeLocation?f.encodeLocation(U.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),d,s);return u&&b?x.createElement(Dr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...N},navigationType:"POP"}},b):b}function vh(){let i=Ch(),u=Zp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,f="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:f},h={padding:"2px 4px",backgroundColor:f},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:h},"ErrorBoundary")," or"," ",x.createElement("code",{style:h},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},u),s?x.createElement("pre",{style:d},s):null,v)}var gh=x.createElement(vh,null),id=class extends x.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){this.props.onError?this.props.onError(i,u):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const s=ch(i.digest);s&&(i=s)}let u=i!==void 0?x.createElement(Pt.Provider,{value:this.props.routeContext},x.createElement(ya.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?x.createElement(yh,{error:i},u):u}};id.contextType=ed;var ua=new WeakMap;function yh({children:i,error:u}){let{basename:s}=x.useContext(pt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let f=uh(u.digest);if(f){let d=ua.get(u);if(d)throw d;let h=Xc(f.location,s),v=h.absoluteURL||h.to;if(rh(v))throw new Error("Invalid redirect location");if(Yc&&!ua.get(u))if(h.isExternal||f.reloadDocument)window.location.href=v;else{const k=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:f.replace}));throw ua.set(u,k),k}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${v}`})}}return i}function xh({routeContext:i,match:u,children:s}){let f=x.useContext(Jn);return f&&f.static&&f.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(f.staticContext._deepestRenderedBoundaryId=u.route.id),x.createElement(Pt.Provider,{value:i},s)}function wh(i,u=[],s){let f=s==null?void 0:s.state;if(i==null){if(!f)return null;if(f.errors)i=f.matches;else if(u.length===0&&!f.initialized&&f.matches.length>0)i=f.matches;else return null}let d=i,h=f==null?void 0:f.errors;if(h!=null){let R=d.findIndex(N=>N.route.id&&(h==null?void 0:h[N.route.id])!==void 0);je(R>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),d=d.slice(0,Math.min(d.length,R+1))}let v=!1,k=-1;if(s&&f){v=f.renderFallback;for(let R=0;R<d.length;R++){let N=d[R];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(k=R),N.route.id){let{loaderData:z,errors:$}=f,B=N.route.loader&&!z.hasOwnProperty(N.route.id)&&(!$||$[N.route.id]===void 0);if(N.route.lazy||B){s.isStatic&&(v=!0),k>=0?d=d.slice(0,k+1):d=[d[0]];break}}}}let w=s==null?void 0:s.onError,E=f&&w?(R,N)=>{var z,$;w(R,{location:f.location,params:(($=(z=f.matches)==null?void 0:z[0])==null?void 0:$.params)??{},pattern:eh(f.matches),errorInfo:N})}:void 0;return d.reduceRight((R,N,z)=>{let $,B=!1,b=null,F=null;f&&($=h&&N.route.id?h[N.route.id]:void 0,b=N.route.errorElement||gh,v&&(k<0&&z===0?(ad("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),B=!0,F=null):k===z&&(B=!0,F=N.route.hydrateFallbackElement||null)));let U=u.concat(d.slice(0,z+1)),K=()=>{let Y;return $?Y=b:B?Y=F:N.route.Component?Y=x.createElement(N.route.Component,null):N.route.element?Y=N.route.element:Y=R,x.createElement(xh,{match:N,routeContext:{outlet:R,matches:U,isDataRoute:f!=null},children:Y})};return f&&(N.route.ErrorBoundary||N.route.errorElement||z===0)?x.createElement(id,{location:f.location,revalidation:f.revalidation,component:b,error:$,children:K(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:E}):K()},null)}function xa(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kh(i){let u=x.useContext(Jn);return je(u,xa(i)),u}function Sh(i){let u=x.useContext(ll);return je(u,xa(i)),u}function jh(i){let u=x.useContext(Pt);return je(u,xa(i)),u}function wa(i){let u=jh(i),s=u.matches[u.matches.length-1];return je(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function Eh(){return wa("useRouteId")}function Ch(){var f;let i=x.useContext(ya),u=Sh("useRouteError"),s=wa("useRouteError");return i!==void 0?i:(f=u.errors)==null?void 0:f[s]}function Nh(){let{router:i}=kh("useNavigate"),u=wa("useNavigate"),s=x.useRef(!1);return od(()=>{s.current=!0}),x.useCallback(async(d,h={})=>{Rt(s.current,rd),s.current&&(typeof d=="number"?await i.navigate(d):await i.navigate(d,{fromRouteId:u,...h}))},[i,u])}var Ic={};function ad(i,u,s){!u&&!Ic[i]&&(Ic[i]=!0,Rt(!1,s))}x.memo(Rh);function Rh({routes:i,manifest:u,future:s,state:f,isStatic:d,onError:h}){return ld(i,void 0,{manifest:u,state:f,isStatic:d,onError:h})}function ft(i){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ph({basename:i="/",children:u=null,location:s,navigationType:f="POP",navigator:d,static:h=!1,useTransitions:v}){je(!Fr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=i.replace(/^\/*/,"/"),w=x.useMemo(()=>({basename:k,navigator:d,static:h,useTransitions:v,future:{}}),[k,d,h,v]);typeof s=="string"&&(s=Qn(s));let{pathname:E="/",search:R="",hash:N="",state:z=null,key:$="default",mask:B}=s,b=x.useMemo(()=>{let F=Ft(E,k);return F==null?null:{location:{pathname:F,search:R,hash:N,state:z,key:$,mask:B},navigationType:f}},[k,E,R,N,z,$,f,B]);return Rt(b!=null,`<Router basename="${k}"> is not able to match the URL "${E}${R}${N}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:x.createElement(pt.Provider,{value:w},x.createElement(Dr.Provider,{children:u,value:b}))}function zh({children:i,location:u}){return mh(fa(i),u)}function fa(i,u=[]){let s=[];return x.Children.forEach(i,(f,d)=>{if(!x.isValidElement(f))return;let h=[...u,d];if(f.type===x.Fragment){s.push.apply(s,fa(f.props.children,h));return}je(f.type===ft,`[${typeof f.type=="string"?f.type:f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!f.props.index||!f.props.children,"An index route cannot have child routes.");let v={id:f.props.id||h.join("-"),caseSensitive:f.props.caseSensitive,element:f.props.element,Component:f.props.Component,index:f.props.index,path:f.props.path,middleware:f.props.middleware,loader:f.props.loader,action:f.props.action,hydrateFallbackElement:f.props.hydrateFallbackElement,HydrateFallback:f.props.HydrateFallback,errorElement:f.props.errorElement,ErrorBoundary:f.props.ErrorBoundary,hasErrorBoundary:f.props.hasErrorBoundary===!0||f.props.ErrorBoundary!=null||f.props.errorElement!=null,shouldRevalidate:f.props.shouldRevalidate,handle:f.props.handle,lazy:f.props.lazy};f.props.children&&(v.children=fa(f.props.children,h)),s.push(v)}),s}var el="get",tl="application/x-www-form-urlencoded";function il(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function _h(i){return il(i)&&i.tagName.toLowerCase()==="button"}function Lh(i){return il(i)&&i.tagName.toLowerCase()==="form"}function Th(i){return il(i)&&i.tagName.toLowerCase()==="input"}function Mh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function bh(i,u){return i.button===0&&(!u||u==="_self")&&!Mh(i)}var Xo=null;function Oh(){if(Xo===null)try{new FormData(document.createElement("form"),0),Xo=!1}catch{Xo=!0}return Xo}var Ih=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ca(i){return i!=null&&!Ih.has(i)?(Rt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tl}"`),null):i}function Dh(i,u){let s,f,d,h,v;if(Lh(i)){let k=i.getAttribute("action");f=k?Ft(k,u):null,s=i.getAttribute("method")||el,d=ca(i.getAttribute("enctype"))||tl,h=new FormData(i)}else if(_h(i)||Th(i)&&(i.type==="submit"||i.type==="image")){let k=i.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let w=i.getAttribute("formaction")||k.getAttribute("action");if(f=w?Ft(w,u):null,s=i.getAttribute("formmethod")||k.getAttribute("method")||el,d=ca(i.getAttribute("formenctype"))||ca(k.getAttribute("enctype"))||tl,h=new FormData(k,i),!Oh()){let{name:E,type:R,value:N}=i;if(R==="image"){let z=E?`${E}.`:"";h.append(`${z}x`,"0"),h.append(`${z}y`,"0")}else E&&h.append(E,N)}}else{if(il(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=el,f=null,d=tl,v=i}return h&&d==="text/plain"&&(v=h,h=void 0),{action:f,method:s.toLowerCase(),encType:d,formData:h,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ka(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function sd(i,u,s,f){let d=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${f}`:d.pathname=`${d.pathname}.${f}`:d.pathname==="/"?d.pathname=`_root.${f}`:u&&Ft(d.pathname,u)==="/"?d.pathname=`${ol(u)}/_root.${f}`:d.pathname=`${ol(d.pathname)}.${f}`,d}async function Fh(i,u){if(i.id in u)return u[i.id];try{let s=await import(i.module);return u[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ah(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function $h(i,u,s){let f=await Promise.all(i.map(async d=>{let h=u.routes[d.route.id];if(h){let v=await Fh(h,s);return v.links?v.links():[]}return[]}));return Vh(f.flat(1).filter(Ah).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Dc(i,u,s,f,d,h){let v=(w,E)=>s[E]?w.route.id!==s[E].route.id:!0,k=(w,E)=>{var R;return s[E].pathname!==w.pathname||((R=s[E].route.path)==null?void 0:R.endsWith("*"))&&s[E].params["*"]!==w.params["*"]};return h==="assets"?u.filter((w,E)=>v(w,E)||k(w,E)):h==="data"?u.filter((w,E)=>{var N;let R=f.routes[w.route.id];if(!R||!R.hasLoader)return!1;if(v(w,E)||k(w,E))return!0;if(w.route.shouldRevalidate){let z=w.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((N=s[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:w.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function Bh(i,u,{includeHydrateFallback:s}={}){return Uh(i.map(f=>{let d=u.routes[f.route.id];if(!d)return[];let h=[d.module];return d.clientActionModule&&(h=h.concat(d.clientActionModule)),d.clientLoaderModule&&(h=h.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(h=h.concat(d.hydrateFallbackModule)),d.imports&&(h=h.concat(d.imports)),h}).flat(1))}function Uh(i){return[...new Set(i)]}function Hh(i){let u={},s=Object.keys(i).sort();for(let f of s)u[f]=i[f];return u}function Vh(i,u){let s=new Set;return new Set(u),i.reduce((f,d)=>{let h=JSON.stringify(Hh(d));return s.has(h)||(s.add(h),f.push({key:h,link:d})),f},[])}function Sa(){let i=x.useContext(Jn);return ka(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Wh(){let i=x.useContext(ll);return ka(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ja=x.createContext(void 0);ja.displayName="FrameworkContext";function al(){let i=x.useContext(ja);return ka(i,"You must render this element inside a <HydratedRouter> element"),i}function Qh(i,u){let s=x.useContext(ja),[f,d]=x.useState(!1),[h,v]=x.useState(!1),{onFocus:k,onBlur:w,onMouseEnter:E,onMouseLeave:R,onTouchStart:N}=u,z=x.useRef(null);x.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let b=U=>{U.forEach(K=>{v(K.isIntersecting)})},F=new IntersectionObserver(b,{threshold:.5});return z.current&&F.observe(z.current),()=>{F.disconnect()}}},[i]),x.useEffect(()=>{if(f){let b=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(b)}}},[f]);let $=()=>{d(!0)},B=()=>{d(!1),v(!1)};return s?i!=="intent"?[h,z,{}]:[h,z,{onFocus:br(k,$),onBlur:br(w,B),onMouseEnter:br(E,$),onMouseLeave:br(R,B),onTouchStart:br(N,$)}]:[!1,z,{}]}function br(i,u){return s=>{i&&i(s),s.defaultPrevented||u(s)}}function Jh({page:i,...u}){let s=oh(),{nonce:f}=al(),{router:d}=Sa(),h=x.useMemo(()=>Vc(d.routes,i,d.basename),[d.routes,i,d.basename]);return h?(u.nonce==null&&f&&(u={...u,nonce:f}),s?x.createElement(qh,{page:i,matches:h,...u}):x.createElement(Gh,{page:i,matches:h,...u})):null}function Kh(i){let{manifest:u,routeModules:s}=al(),[f,d]=x.useState([]);return x.useEffect(()=>{let h=!1;return $h(i,u,s).then(v=>{h||d(v)}),()=>{h=!0}},[i,u,s]),f}function qh({page:i,matches:u,...s}){let f=zt(),{future:d}=al(),{basename:h}=Sa(),v=x.useMemo(()=>{if(i===f.pathname+f.search+f.hash)return[];let k=sd(i,h,d.v8_trailingSlashAwareDataRequests,"rsc"),w=!1,E=[];for(let R of u)typeof R.route.shouldRevalidate=="function"?w=!0:E.push(R.route.id);return w&&E.length>0&&k.searchParams.set("_routes",E.join(",")),[k.pathname+k.search]},[h,d.v8_trailingSlashAwareDataRequests,i,f,u]);return x.createElement(x.Fragment,null,v.map(k=>x.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...s})))}function Gh({page:i,matches:u,...s}){let f=zt(),{future:d,manifest:h,routeModules:v}=al(),{basename:k}=Sa(),{loaderData:w,matches:E}=Wh(),R=x.useMemo(()=>Dc(i,u,E,h,f,"data"),[i,u,E,h,f]),N=x.useMemo(()=>Dc(i,u,E,h,f,"assets"),[i,u,E,h,f]),z=x.useMemo(()=>{if(i===f.pathname+f.search+f.hash)return[];let b=new Set,F=!1;if(u.forEach(K=>{var te;let Y=h.routes[K.route.id];!Y||!Y.hasLoader||(!R.some(Z=>Z.route.id===K.route.id)&&K.route.id in w&&((te=v[K.route.id])!=null&&te.shouldRevalidate)||Y.hasClientLoader?F=!0:b.add(K.route.id))}),b.size===0)return[];let U=sd(i,k,d.v8_trailingSlashAwareDataRequests,"data");return F&&b.size>0&&U.searchParams.set("_routes",u.filter(K=>b.has(K.route.id)).map(K=>K.route.id).join(",")),[U.pathname+U.search]},[k,d.v8_trailingSlashAwareDataRequests,w,f,h,R,u,i,v]),$=x.useMemo(()=>Bh(N,h),[N,h]),B=Kh(N);return x.createElement(x.Fragment,null,z.map(b=>x.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...s})),$.map(b=>x.createElement("link",{key:b,rel:"modulepreload",href:b,...s})),B.map(({key:b,link:F})=>x.createElement("link",{key:b,nonce:s.nonce,...F,crossOrigin:F.crossOrigin??s.crossOrigin})))}function Yh(...i){return u=>{i.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xh&&(window.__reactRouterVersion="7.18.2")}catch{}function Zh({basename:i,children:u,useTransitions:s,window:f}){let d=x.useRef();d.current==null&&(d.current=_p({window:f,v5Compat:!0}));let h=d.current,[v,k]=x.useState({action:h.action,location:h.location}),w=x.useCallback(E=>{s===!1?k(E):x.startTransition(()=>k(E))},[s]);return x.useLayoutEffect(()=>h.listen(w),[h,w]),x.createElement(Ph,{basename:i,children:u,location:v.location,navigationType:v.action,navigator:h,useTransitions:s})}var sl=x.forwardRef(function({onClick:u,discover:s="render",prefetch:f="none",relative:d,reloadDocument:h,replace:v,mask:k,state:w,target:E,to:R,preventScrollReset:N,viewTransition:z,defaultShouldRevalidate:$,...B},b){let{basename:F,navigator:U,useTransitions:K}=x.useContext(pt),Y=typeof R=="string"&&va.test(R),te=Xc(R,F);R=te.to;let Z=dh(R,{relative:d}),le=zt(),oe=null;if(k){let we=ga(k,[],le.mask?le.mask.pathname:"/",!0);F!=="/"&&(we.pathname=we.pathname==="/"?F:kt([F,we.pathname])),oe=U.createHref(we)}let[pe,Le,Te]=Qh(f,B),Ze=nm(R,{replace:v,mask:k,state:w,target:E,preventScrollReset:N,relative:d,viewTransition:z,defaultShouldRevalidate:$,useTransitions:K});function Fe(we){u&&u(we),we.defaultPrevented||Ze(we)}let Re=!(te.isExternal||h),Me=x.createElement("a",{...B,...Te,href:(Re?oe:void 0)||te.absoluteURL||Z,onClick:Re?Fe:u,ref:Yh(b,Le),target:E,"data-discover":!Y&&s==="render"?"true":void 0});return pe&&!Y?x.createElement(x.Fragment,null,Me,x.createElement(Jh,{page:Z})):Me});sl.displayName="Link";var pa=x.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:f="",end:d=!1,style:h,to:v,viewTransition:k,children:w,...E},R){let N=Ar(v,{relative:E.relative}),z=zt(),$=x.useContext(ll),{navigator:B,basename:b}=x.useContext(pt),F=$!=null&&am(N)&&k===!0,U=B.encodeLocation?B.encodeLocation(N).pathname:N.pathname,K=z.pathname,Y=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;s||(K=K.toLowerCase(),Y=Y?Y.toLowerCase():null,U=U.toLowerCase()),Y&&b&&(Y=Ft(Y,b)||Y);const te=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let Z=K===U||!d&&K.startsWith(U)&&K.charAt(te)==="/",le=Y!=null&&(Y===U||!d&&Y.startsWith(U)&&Y.charAt(U.length)==="/"),oe={isActive:Z,isPending:le,isTransitioning:F},pe=Z?u:void 0,Le;typeof f=="function"?Le=f(oe):Le=[f,Z?"active":null,le?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let Te=typeof h=="function"?h(oe):h;return x.createElement(sl,{...E,"aria-current":pe,className:Le,ref:R,style:Te,to:v,viewTransition:k},typeof w=="function"?w(oe):w)});pa.displayName="NavLink";var em=x.forwardRef(({discover:i="render",fetcherKey:u,navigate:s,reloadDocument:f,replace:d,state:h,method:v=el,action:k,onSubmit:w,relative:E,preventScrollReset:R,viewTransition:N,defaultShouldRevalidate:z,...$},B)=>{let{useTransitions:b}=x.useContext(pt),F=lm(),U=im(k,{relative:E}),K=v.toLowerCase()==="get"?"get":"post",Y=typeof k=="string"&&va.test(k),te=Z=>{if(w&&w(Z),Z.defaultPrevented)return;Z.preventDefault();let le=Z.nativeEvent.submitter,oe=(le==null?void 0:le.getAttribute("formmethod"))||v,pe=()=>F(le||Z.currentTarget,{fetcherKey:u,method:oe,navigate:s,replace:d,state:h,relative:E,preventScrollReset:R,viewTransition:N,defaultShouldRevalidate:z});b&&s!==!1?x.startTransition(()=>pe()):pe()};return x.createElement("form",{ref:B,method:K,action:U,onSubmit:f?w:te,...$,"data-discover":!Y&&i==="render"?"true":void 0})});em.displayName="Form";function tm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ud(i){let u=x.useContext(Jn);return je(u,tm(i)),u}function nm(i,{target:u,replace:s,mask:f,state:d,preventScrollReset:h,relative:v,viewTransition:k,defaultShouldRevalidate:w,useTransitions:E}={}){let R=fh(),N=zt(),z=Ar(i,{relative:v});return x.useCallback($=>{if(bh($,u)){$.preventDefault();let B=s!==void 0?s:Or(N)===Or(z),b=()=>R(i,{replace:B,mask:f,state:d,preventScrollReset:h,relative:v,viewTransition:k,defaultShouldRevalidate:w});E?x.startTransition(()=>b()):b()}},[N,R,z,s,f,d,u,i,h,v,k,w,E])}var rm=0,om=()=>`__${String(++rm)}__`;function lm(){let{router:i}=ud("useSubmit"),{basename:u}=x.useContext(pt),s=Eh(),f=i.fetch,d=i.navigate;return x.useCallback(async(h,v={})=>{let{action:k,method:w,encType:E,formData:R,body:N}=Dh(h,u);if(v.navigate===!1){let z=v.fetcherKey||om();await f(z,s,v.action||k,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:R,body:N,formMethod:v.method||w,formEncType:v.encType||E,flushSync:v.flushSync})}else await d(v.action||k,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:R,body:N,formMethod:v.method||w,formEncType:v.encType||E,replace:v.replace,state:v.state,fromRouteId:s,flushSync:v.flushSync,viewTransition:v.viewTransition})},[f,d,u,s])}function im(i,{relative:u}={}){let{basename:s}=x.useContext(pt),f=x.useContext(Pt);je(f,"useFormAction must be used inside a RouteContext");let[d]=f.matches.slice(-1),h={...Ar(i||".",{relative:u})},v=zt();if(i==null){h.search=v.search;let k=new URLSearchParams(h.search),w=k.getAll("index");if(w.some(R=>R==="")){k.delete("index"),w.filter(N=>N).forEach(N=>k.append("index",N));let R=k.toString();h.search=R?`?${R}`:""}}return(!i||i===".")&&d.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:kt([s,h.pathname])),Or(h)}function am(i,{relative:u}={}){let s=x.useContext(td);je(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:f}=ud("useViewTransitionState"),d=Ar(i,{relative:u});if(!s.isTransitioning)return!1;let h=Ft(s.currentLocation.pathname,f)||s.currentLocation.pathname,v=Ft(s.nextLocation.pathname,f)||s.nextLocation.pathname;return rl(d.pathname,v)!=null||rl(d.pathname,h)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cd=(...i)=>i.filter((u,s,f)=>!!u&&u.trim()!==""&&f.indexOf(u)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var um={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=x.forwardRef(({color:i="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:f,className:d="",children:h,iconNode:v,...k},w)=>x.createElement("svg",{ref:w,...um,width:u,height:u,stroke:i,strokeWidth:f?Number(s)*24/Number(u):s,className:cd("lucide",d),...k},[...v.map(([E,R])=>x.createElement(E,R)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(i,u)=>{const s=x.forwardRef(({className:f,...d},h)=>x.createElement(cm,{ref:h,iconNode:u,className:cd(`lucide-${sm(i)}`,f),...d}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=ce("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=ce("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=ce("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=ce("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=ce("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ce("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ce("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=ce("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ce("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=ce("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=ce("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ce("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=ce("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=ce("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=ce("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=ce("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=ce("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=ce("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ce("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=ce("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=ce("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ce("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=ce("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),xd={biblia:"/data/biblia.json",libros:"/data/libros.json",revistas:"/data/revistas.json",estudios:"/data/estudios.json",himnos:"/data/himnos.json",categorias:"/data/categorias.json"};async function Cm(i){try{const u=await fetch(i,{cache:"no-store"});if(!u.ok)throw new Error(`HTTP ${u.status}`);return await u.json()}catch(u){return console.warn(`No se pudo cargar ${i}:`,u.message),[]}}async function Nm(){const i=await Promise.all(Object.entries(xd).map(async([u,s])=>[u,await Cm(s)]));return Object.fromEntries(i)}function Rm(){return{...xd}}function wd(i){if(Array.isArray(i))return i;if(!i||typeof i!="object")return[];for(const u of["items","data","libros","capitulos","versiculos","hymns","books","results"])if(Array.isArray(i[u]))return i[u];return Object.values(i).filter(u=>typeof u=="object")}const ha="mi-biblioteca-settings";function Pm(i,u=null){try{return JSON.parse(localStorage.getItem(ha)||"{}")[i]??u}catch{return u}}function zm(i,u){const s=JSON.parse(localStorage.getItem(ha)||"{}");s[i]=u,localStorage.setItem(ha,JSON.stringify(s))}function _m(){try{return JSON.parse(localStorage.getItem("mi-biblioteca-favorites")||"[]")}catch{return[]}}function Lm({data:i}){const u=[["Biblia","Lectura y navegación bíblica","/biblia",wn,i.biblia],["Biblioteca","Libros, revistas y documentos","/biblioteca",hd,i.libros],["Estudios","Material de estudio","/estudios",pd,i.estudios],["Himnos","Colección de himnos","/himnos",Ir,i.himnos],["Búsqueda","Busca en todo tu contenido","/busqueda",on,null],["Presentación","Proyecta contenido en pantalla","/presentacion",gd,null]];return a.jsxs(a.Fragment,{children:[a.jsxs("section",{className:"hero",children:[a.jsxs("div",{children:[a.jsx("span",{className:"badge",children:"OFFLINE READY"}),a.jsxs("h2",{children:["Tu biblioteca bíblica,",a.jsx("br",{}),a.jsx("em",{children:"en un solo lugar."})]}),a.jsx("p",{children:"Una base preparada para trabajar con tus propios archivos JSON de Biblia, libros, estudios, himnos y más."})]}),a.jsx(wn,{className:"hero-icon",size:120})]}),a.jsx("div",{className:"section-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Contenido"}),a.jsx("p",{children:"Accede rápidamente a tus colecciones."})]})}),a.jsx("div",{className:"card-grid",children:u.map(([s,f,d,h])=>a.jsxs(sl,{className:"feature-card",to:d,children:[a.jsx("div",{className:"feature-icon",children:a.jsx(h,{size:23})}),a.jsx("h3",{children:s}),a.jsx("p",{children:f}),a.jsx("span",{className:"arrow",children:"→"})]},s))})]})}const dt=[{numero:1,nombre:"Génesis",archivo:"genesis",capitulos:50},{numero:2,nombre:"Éxodo",archivo:"exodo",capitulos:40},{numero:3,nombre:"Levítico",archivo:"levitico",capitulos:27},{numero:4,nombre:"Números",archivo:"numeros",capitulos:36},{numero:5,nombre:"Deuteronomio",archivo:"deuteronomio",capitulos:34},{numero:6,nombre:"Josué",archivo:"josue",capitulos:24},{numero:7,nombre:"Jueces",archivo:"jueces",capitulos:21},{numero:8,nombre:"Rut",archivo:"rut",capitulos:4},{numero:9,nombre:"1 Samuel",archivo:"1-samuel",capitulos:31},{numero:10,nombre:"2 Samuel",archivo:"2-samuel",capitulos:24},{numero:11,nombre:"1 Reyes",archivo:"1-reyes",capitulos:22},{numero:12,nombre:"2 Reyes",archivo:"2-reyes",capitulos:25},{numero:13,nombre:"1 Crónicas",archivo:"1-cronicas",capitulos:29},{numero:14,nombre:"2 Crónicas",archivo:"2-cronicas",capitulos:36},{numero:15,nombre:"Esdras",archivo:"esdras",capitulos:10},{numero:16,nombre:"Nehemías",archivo:"nehemias",capitulos:13},{numero:17,nombre:"Ester",archivo:"ester",capitulos:10},{numero:18,nombre:"Job",archivo:"job",capitulos:42},{numero:19,nombre:"Salmos",archivo:"salmos",capitulos:150},{numero:20,nombre:"Proverbios",archivo:"proverbios",capitulos:31},{numero:21,nombre:"Eclesiastés",archivo:"eclesiastes",capitulos:12},{numero:22,nombre:"Cantares",archivo:"cantares",capitulos:8},{numero:23,nombre:"Isaías",archivo:"isaias",capitulos:66},{numero:24,nombre:"Jeremías",archivo:"jeremias",capitulos:52},{numero:25,nombre:"Lamentaciones",archivo:"lamentaciones",capitulos:5},{numero:26,nombre:"Ezequiel",archivo:"ezequiel",capitulos:48},{numero:27,nombre:"Daniel",archivo:"daniel",capitulos:12},{numero:28,nombre:"Oseas",archivo:"oseas",capitulos:14},{numero:29,nombre:"Joel",archivo:"joel",capitulos:3},{numero:30,nombre:"Amós",archivo:"amos",capitulos:9},{numero:31,nombre:"Abdías",archivo:"abdias",capitulos:1},{numero:32,nombre:"Jonás",archivo:"jonas",capitulos:4},{numero:33,nombre:"Miqueas",archivo:"miqueas",capitulos:7},{numero:34,nombre:"Nahúm",archivo:"nahum",capitulos:3},{numero:35,nombre:"Habacuc",archivo:"habacuc",capitulos:3},{numero:36,nombre:"Sofonías",archivo:"sofonia",capitulos:3},{numero:37,nombre:"Hageo",archivo:"hageo",capitulos:2},{numero:38,nombre:"Zacarías",archivo:"zacarias",capitulos:14},{numero:39,nombre:"Malaquías",archivo:"malaquias",capitulos:4},{numero:40,nombre:"Mateo",archivo:"mateo",capitulos:28},{numero:41,nombre:"Marcos",archivo:"marcos",capitulos:16},{numero:42,nombre:"Lucas",archivo:"lucas",capitulos:24},{numero:43,nombre:"Juan",archivo:"juan",capitulos:21},{numero:44,nombre:"Hechos",archivo:"hechos",capitulos:28},{numero:45,nombre:"Romanos",archivo:"romanos",capitulos:16},{numero:46,nombre:"1 Corintios",archivo:"1-corintios",capitulos:16},{numero:47,nombre:"2 Corintios",archivo:"2-corintios",capitulos:13},{numero:48,nombre:"Gálatas",archivo:"galatas",capitulos:6},{numero:49,nombre:"Efesios",archivo:"efesios",capitulos:6},{numero:50,nombre:"Filipenses",archivo:"filipenses",capitulos:4},{numero:51,nombre:"Colosenses",archivo:"colosenses",capitulos:4},{numero:52,nombre:"1 Tesalonicenses",archivo:"1-tesalonicenses",capitulos:5},{numero:53,nombre:"2 Tesalonicenses",archivo:"2-tesalonicenses",capitulos:3},{numero:54,nombre:"1 Timoteo",archivo:"1-timoteo",capitulos:6},{numero:55,nombre:"2 Timoteo",archivo:"2-timoteo",capitulos:4},{numero:56,nombre:"Tito",archivo:"tito",capitulos:3},{numero:57,nombre:"Filemón",archivo:"filemon",capitulos:1},{numero:58,nombre:"Hebreos",archivo:"hebreos",capitulos:13},{numero:59,nombre:"Santiago",archivo:"santiago",capitulos:5},{numero:60,nombre:"1 Pedro",archivo:"1-pedro",capitulos:5},{numero:61,nombre:"2 Pedro",archivo:"2-pedro",capitulos:3},{numero:62,nombre:"1 Juan",archivo:"1-juan",capitulos:5},{numero:63,nombre:"2 Juan",archivo:"2-juan",capitulos:1},{numero:64,nombre:"3 Juan",archivo:"3-juan",capitulos:1},{numero:65,nombre:"Judas",archivo:"judas",capitulos:1},{numero:66,nombre:"Apocalipsis",archivo:"apocalipsis",capitulos:22}];function Tm(){const[i,u]=x.useState(dt[0]),[s,f]=x.useState(1),[d,h]=x.useState(null),[v,k]=x.useState(!0),[w,E]=x.useState(""),[R,N]=x.useState(""),[z,$]=x.useState(""),[B,b]=x.useState(!1),[F,U]=x.useState(null),[K,Y]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("biblia_favoritos")||"[]")}catch{return[]}}),[te,Z]=x.useState(!1);x.useEffect(()=>{async function I(){try{k(!0),E("");const P=String(i.numero).padStart(2,"0"),L=String(s).padStart(3,"0"),T=`${P}_${i.archivo}_${L}.json`,y=`/data/biblia/${T}`;console.log("Cargando Biblia:",y);const _=await fetch(y);if(!_.ok)throw new Error(`No se encontró ${T}`);const ee=await _.json();h(ee)}catch(P){console.error(P),h(null),E(P.message)}finally{k(!1)}}I(),window.scrollTo({top:0,behavior:"smooth"})},[i,s]);const le=x.useMemo(()=>{const I=R.trim().toLowerCase();return I?dt.filter(P=>P.nombre.toLowerCase().includes(I)):dt},[R]);function oe(I){const P=dt.find(L=>L.numero===Number(I));P&&(u(P),f(1),b(!1))}function pe(I){let P=Number(I);P<1&&(P=1),P>i.capitulos&&(P=i.capitulos),f(P)}function Le(){if(s>1){f(s-1);return}const I=dt.findIndex(P=>P.numero===i.numero);if(I>0){const P=dt[I-1];u(P),f(P.capitulos)}}function Te(){if(s<i.capitulos){f(s+1);return}const I=dt.findIndex(P=>P.numero===i.numero);if(I<dt.length-1){const P=dt[I+1];u(P),f(1)}}async function Ze(I){const P=`${d.titulo} ${I.numero}
${I.texto}`;try{await navigator.clipboard.writeText(P),U(I.numero),setTimeout(()=>{U(null)},1800)}catch(L){console.error(L)}}function Fe(I){return`${i.numero}-${s}-${I.numero}`}function Re(I){return K.includes(Fe(I))}function Me(I){const P=Fe(I);let L;K.includes(P)?L=K.filter(T=>T!==P):L=[...K,P],Y(L),localStorage.setItem("biblia_favoritos",JSON.stringify(L))}function we(){var L;if(!((L=d==null?void 0:d.versiculos)!=null&&L.length))return;if(!("speechSynthesis"in window)){alert("Tu navegador no soporta lectura en voz alta.");return}if(te){window.speechSynthesis.cancel(),Z(!1);return}const I=d.versiculos.map(T=>`${T.numero}. ${T.texto}`).join(" "),P=new SpeechSynthesisUtterance(I);P.lang="es-ES",P.rate=.9,P.onend=()=>{Z(!1)},P.onerror=()=>{Z(!1)},window.speechSynthesis.speak(P),Z(!0)}const be=x.useMemo(()=>{if(!(d!=null&&d.versiculos))return[];const I=z.trim().toLowerCase();return I?d.versiculos.filter(P=>P.texto.toLowerCase().includes(I)||String(P.numero).includes(I)):d.versiculos},[d,z]);return v?a.jsxs("div",{className:"biblia-loading",children:[a.jsx(wn,{size:48}),a.jsx("h2",{children:"Cargando Biblia..."}),a.jsxs("p",{children:[i.nombre," ",s]})]}):w?a.jsxs("div",{className:"biblia-error",children:[a.jsx(wn,{size:48}),a.jsx("h2",{children:"No se pudo cargar el capítulo"}),a.jsx("p",{children:w}),a.jsxs("code",{children:["public/data/biblia/",String(i.numero).padStart(2,"0"),"_",i.archivo,"_",String(s).padStart(3,"0"),".json"]}),a.jsx("button",{onClick:()=>window.location.reload(),children:"Intentar nuevamente"})]}):a.jsxs("div",{className:"biblia-page",children:[a.jsxs("header",{className:"biblia-header",children:[a.jsxs("div",{className:"biblia-title",children:[a.jsx("div",{className:"biblia-icon",children:a.jsx(wn,{size:25})}),a.jsxs("div",{children:[a.jsx("span",{children:"BIBLIOTECA DIGITAL"}),a.jsx("h1",{children:"Biblia"}),a.jsx("p",{children:"Lectura bíblica"})]})]}),a.jsx("button",{className:"mobile-menu",onClick:()=>b(!B),children:B?a.jsx(ln,{size:20}):a.jsx(vd,{size:20})})]}),a.jsxs("div",{className:"selector-bar",children:[a.jsxs("select",{value:i.numero,onChange:I=>oe(I.target.value),children:[a.jsx("optgroup",{label:"Antiguo Testamento",children:dt.filter(I=>I.numero<=39).map(I=>a.jsx("option",{value:I.numero,children:I.nombre},I.numero))}),a.jsx("optgroup",{label:"Nuevo Testamento",children:dt.filter(I=>I.numero>=40).map(I=>a.jsx("option",{value:I.numero,children:I.nombre},I.numero))})]}),a.jsx("select",{value:s,onChange:I=>pe(I.target.value),children:Array.from({length:i.capitulos},(I,P)=>a.jsxs("option",{value:P+1,children:["Capítulo"," ",P+1]},P+1))}),a.jsx("button",{className:te?"listen active":"listen",onClick:we,children:te?a.jsxs(a.Fragment,{children:[a.jsx(jm,{size:16}),"Detener"]}):a.jsxs(a.Fragment,{children:[a.jsx(yd,{size:17}),"Escuchar"]})})]}),a.jsxs("div",{className:"biblia-search",children:[a.jsx(on,{size:19}),a.jsx("input",{value:z,onChange:I=>$(I.target.value),placeholder:"Buscar dentro de este capítulo..."}),z&&a.jsx("button",{onClick:()=>$(""),children:a.jsx(ln,{size:16})})]}),a.jsxs("div",{className:"biblia-layout",children:[a.jsxs("aside",{className:`biblia-sidebar ${B?"open":""}`,children:[a.jsxs("div",{className:"sidebar-title",children:[a.jsx("strong",{children:"LIBROS"}),a.jsx("span",{children:dt.length})]}),a.jsxs("div",{className:"sidebar-search",children:[a.jsx(on,{size:15}),a.jsx("input",{value:R,onChange:I=>N(I.target.value),placeholder:"Buscar libro..."})]}),a.jsxs("div",{className:"libros-list",children:[a.jsx("div",{className:"testamento",children:"ANTIGUO TESTAMENTO"}),le.filter(I=>I.numero<=39).map(I=>a.jsxs("button",{className:I.numero===i.numero?"libro active":"libro",onClick:()=>oe(I.numero),children:[a.jsx("span",{children:I.nombre}),a.jsx("small",{children:I.capitulos})]},I.numero)),a.jsx("div",{className:"testamento",children:"NUEVO TESTAMENTO"}),le.filter(I=>I.numero>=40).map(I=>a.jsxs("button",{className:I.numero===i.numero?"libro active":"libro",onClick:()=>oe(I.numero),children:[a.jsx("span",{children:I.nombre}),a.jsx("small",{children:I.capitulos})]},I.numero))]})]}),a.jsxs("main",{className:"biblia-content",children:[a.jsxs("div",{className:"chapter-header",children:[a.jsxs("div",{children:[a.jsx("span",{children:d==null?void 0:d.libro}),a.jsx("h2",{children:(d==null?void 0:d.titulo)||`${i.nombre} ${s}`}),(d==null?void 0:d.subtitulo)&&a.jsx("p",{children:d.subtitulo})]}),a.jsx("div",{className:"chapter-number",children:s})]}),a.jsx("div",{className:"versiculos",children:be.map(I=>{const P=Re(I);return a.jsxs("article",{className:`versiculo ${P?"favorito":""}`,children:[a.jsx("div",{className:"numero-versiculo",children:I.numero}),a.jsx("div",{className:"texto-versiculo",children:a.jsx("p",{children:I.texto})}),a.jsxs("div",{className:"versiculo-actions",children:[a.jsx("button",{title:"Copiar",onClick:()=>Ze(I),children:F===I.numero?a.jsx(hm,{size:16}):a.jsx(nl,{size:16})}),a.jsx("button",{title:P?"Quitar favorito":"Agregar favorito",className:P?"star active":"star",onClick:()=>Me(I),children:a.jsx(ul,{size:16,fill:P?"currentColor":"none"})})]})]},I.numero)})}),a.jsxs("div",{className:"chapter-navigation",children:[a.jsxs("button",{onClick:Le,children:[a.jsx(dd,{size:18}),a.jsxs("span",{children:[a.jsx("small",{children:"Anterior"}),"Capítulo anterior"]})]}),a.jsxs("div",{className:"chapter-center",children:[a.jsx("strong",{children:i.nombre}),a.jsxs("span",{children:[s," de"," ",i.capitulos]})]}),a.jsxs("button",{onClick:Te,children:[a.jsxs("span",{children:[a.jsx("small",{children:"Siguiente"}),"Capítulo siguiente"]}),a.jsx(fd,{size:18})]})]})]})]}),a.jsx("style",{children:`

        * {
          box-sizing: border-box;
        }

        .biblia-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px 60px;
          color: #172033;
        }

        /* ==========================================
           HEADER
           ========================================== */

        .biblia-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0 22px;
        }

        .biblia-title {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .biblia-icon {
          width: 48px;
          height: 48px;
          border-radius: 13px;
          background: #edf3ff;
          color: #2455d6;
          display: grid;
          place-items: center;
        }

        .biblia-title span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          color: #8791a2;
        }

        .biblia-title h1 {
          margin: 3px 0;
          font-size: 28px;
        }

        .biblia-title p {
          margin: 0;
          color: #7b8494;
          font-size: 12px;
        }

        .mobile-menu {
          display: none;
          border: 1px solid #e1e6ed;
          background: #fff;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          place-items: center;
        }

        /* ==========================================
           SELECTORES
           ========================================== */

        .selector-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }

        .selector-bar select {
          height: 44px;
          min-width: 180px;
          padding: 0 13px;
          border: 1px solid #dfe5ed;
          background: #fff;
          border-radius: 10px;
          color: #273248;
          outline: none;
          cursor: pointer;
        }

        .selector-bar select:focus {
          border-color: #2455d6;
        }

        .listen {
          height: 44px;
          border: 1px solid #dfe5ed;
          background: #fff;
          border-radius: 10px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #536077;
          cursor: pointer;
        }

        .listen:hover,
        .listen.active {
          color: #2455d6;
          border-color: #b8c9ef;
        }

        /* ==========================================
           SEARCH
           ========================================== */

        .biblia-search {
          height: 48px;
          background: #fff;
          border: 1px solid #dfe5ed;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          margin-bottom: 18px;
          color: #7b8494;
        }

        .biblia-search input {
          flex: 1;
          border: 0;
          outline: 0;
          background: transparent;
          color: #172033;
          font-size: 13px;
        }

        .biblia-search button {
          border: 0;
          background: transparent;
          cursor: pointer;
          color: #7b8494;
        }

        /* ==========================================
           LAYOUT
           ========================================== */

        .biblia-layout {
          display: grid;
          grid-template-columns: 250px minmax(0, 1fr);
          gap: 20px;
          align-items: start;
        }

        /* ==========================================
           SIDEBAR
           ========================================== */

        .biblia-sidebar {
          background: #fff;
          border: 1px solid #e2e7ee;
          border-radius: 16px;
          padding: 15px;
          position: sticky;
          top: 15px;
          max-height: calc(100vh - 30px);
          overflow-y: auto;
        }

        .sidebar-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .sidebar-title strong {
          font-size: 11px;
          letter-spacing: .08em;
        }

        .sidebar-title span {
          font-size: 10px;
          color: #2455d6;
          background: #edf3ff;
          padding: 4px 7px;
          border-radius: 6px;
        }

        .sidebar-search {
          height: 38px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 9px;
          border: 1px solid #e3e7ed;
          border-radius: 9px;
          color: #7b8494;
          margin-bottom: 13px;
        }

        .sidebar-search input {
          min-width: 0;
          width: 100%;
          border: 0;
          outline: 0;
          font-size: 11px;
        }

        .testamento {
          color: #929baa;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .09em;
          margin: 16px 5px 7px;
        }

        .libros-list {
          display: flex;
          flex-direction: column;
        }

        .libro {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 9px;
          border: 0;
          background: transparent;
          border-radius: 8px;
          color: #526078;
          font-size: 12px;
          cursor: pointer;
          text-align: left;
        }

        .libro:hover {
          background: #f4f7fb;
        }

        .libro.active {
          background: #edf3ff;
          color: #2455d6;
          font-weight: 700;
        }

        .libro small {
          color: #9ba3b0;
          font-size: 9px;
        }

        .libro.active small {
          color: #2455d6;
        }

        /* ==========================================
           CONTENIDO
           ========================================== */

        .biblia-content {
          background: #fff;
          border: 1px solid #e2e7ee;
          border-radius: 18px;
          min-width: 0;
          overflow: hidden;
        }

        .chapter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 32px;
          border-bottom: 1px solid #edf0f4;
          background: #fbfcfe;
        }

        .chapter-header span {
          color: #2455d6;
          font-size: 11px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .chapter-header h2 {
          margin: 4px 0;
          font-size: 27px;
        }

        .chapter-header p {
          margin: 0;
          color: #7b8494;
          font-size: 13px;
        }

        .chapter-number {
          width: 62px;
          height: 62px;
          border-radius: 16px;
          background: #edf3ff;
          color: #2455d6;
          display: grid;
          place-items: center;
          font-size: 25px;
          font-weight: 800;
        }

        /* ==========================================
           VERSICULOS
           ========================================== */

        .versiculos {
          padding: 12px 30px;
        }

        .versiculo {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr) 70px;
          gap: 12px;
          align-items: start;
          padding: 16px 7px;
          border-bottom: 1px solid #f0f2f5;
          border-radius: 8px;
          transition: .15s ease;
        }

        .versiculo:hover {
          background: #fafbfc;
        }

        .versiculo.favorito {
          background: #fffdf4;
        }

        .numero-versiculo {
          color: #2455d6;
          font-weight: 800;
          font-size: 12px;
          padding-top: 4px;
          text-align: center;
        }

        .texto-versiculo p {
          margin: 0;
          color: #303b50;
          font-size: 16px;
          line-height: 1.8;
        }

        .versiculo-actions {
          display: flex;
          justify-content: flex-end;
          gap: 4px;
          opacity: 0;
          transition: .15s;
        }

        .versiculo:hover .versiculo-actions {
          opacity: 1;
        }

        .versiculo-actions button {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 1px solid #e1e6ed;
          background: #fff;
          color: #7b8494;
          border-radius: 8px;
          cursor: pointer;
        }

        .versiculo-actions button:hover {
          color: #2455d6;
          border-color: #bfd0f1;
        }

        .versiculo-actions .star.active {
          color: #e0a000;
        }

        /* ==========================================
           NAVEGACION
           ========================================== */

        .chapter-navigation {
          margin: 15px 30px 30px;
          padding: 15px 0 0;
          border-top: 1px solid #edf0f4;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 15px;
        }

        .chapter-navigation button {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e1e6ed;
          background: #fff;
          border-radius: 10px;
          padding: 9px 12px;
          color: #536077;
          cursor: pointer;
          text-align: left;
        }

        .chapter-navigation button:last-child {
          justify-self: end;
          text-align: right;
        }

        .chapter-navigation button:hover {
          color: #2455d6;
          border-color: #b8c9ef;
        }

        .chapter-navigation small {
          display: block;
          color: #9aa2af;
          font-size: 9px;
          margin-bottom: 2px;
        }

        .chapter-center {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .chapter-center strong {
          font-size: 12px;
        }

        .chapter-center span {
          color: #8b94a2;
          font-size: 10px;
        }

        /* ==========================================
           LOADING / ERROR
           ========================================== */

        .biblia-loading,
        .biblia-error {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #7b8494;
          padding: 30px;
        }

        .biblia-loading h2,
        .biblia-error h2 {
          color: #172033;
          margin-bottom: 5px;
        }

        .biblia-error code {
          display: block;
          max-width: 100%;
          overflow: auto;
          padding: 10px 14px;
          background: #f3f5f8;
          border-radius: 8px;
          margin: 10px 0 18px;
          font-size: 11px;
        }

        .biblia-error button {
          border: 0;
          background: #2455d6;
          color: #fff;
          padding: 10px 17px;
          border-radius: 9px;
          cursor: pointer;
        }

        /* ==========================================
           RESPONSIVE
           ========================================== */

        @media(max-width:900px) {

          .biblia-layout {
            grid-template-columns: 1fr;
          }

          .mobile-menu {
            display: grid;
          }

          .biblia-sidebar {
            display: none;
            position: fixed;
            left: 10px;
            right: 10px;
            top: 75px;
            z-index: 100;
            max-height: calc(100vh - 90px);
          }

          .biblia-sidebar.open {
            display: block;
          }

        }

        @media(max-width:650px) {

          .biblia-page {
            padding: 0 10px 40px;
          }

          .selector-bar {
            flex-wrap: wrap;
          }

          .selector-bar select {
            flex: 1;
            min-width: 140px;
          }

          .listen {
            flex: 1;
            justify-content: center;
          }

          .chapter-header {
            padding: 22px 18px;
          }

          .chapter-header h2 {
            font-size: 23px;
          }

          .chapter-number {
            width: 48px;
            height: 48px;
            font-size: 19px;
          }

          .versiculos {
            padding: 8px 12px;
          }

          .versiculo {
            grid-template-columns: 28px minmax(0, 1fr);
            gap: 8px;
            padding: 14px 3px;
          }

          .texto-versiculo p {
            font-size: 15px;
            line-height: 1.7;
          }

          .versiculo-actions {
            grid-column: 2;
            opacity: 1;
            justify-content: flex-start;
          }

          .chapter-navigation {
            margin: 15px;
            grid-template-columns: 1fr 1fr;
          }

          .chapter-center {
            display: none;
          }

          .chapter-navigation button {
            width: 100%;
          }

        }

      `})]})}function Mm({data:i}){const u=[{to:"/biblioteca/libros",title:"Libros",text:"Libros y publicaciones",icon:fm,count:i.libros},{to:"/biblioteca/revistas",title:"Revistas",text:"Revistas y ediciones",icon:ym,count:i.revistas},{to:"/biblioteca/documentos",title:"Documentos",text:"Otros materiales",icon:Ea,count:i.categorias}];return a.jsx("div",{className:"card-grid",children:u.map(({to:s,title:f,text:d,icon:h,count:v})=>a.jsxs(sl,{className:"feature-card",to:s,children:[a.jsx("div",{className:"feature-icon",children:a.jsx(h,{})}),a.jsx("h3",{children:f}),a.jsx("p",{children:d}),a.jsx("span",{className:"count",children:Array.isArray(v)?v.length:"Disponible"})]},s))})}function Ca({value:i,onChange:u,placeholder:s="Buscar..."}){return a.jsxs("div",{className:"search-box",children:[a.jsx(on,{size:19}),a.jsx("input",{value:i,onChange:f=>u(f.target.value),placeholder:s})]})}function bm({data:i}){const[u,s]=x.useState(""),f=x.useMemo(()=>{if(!u.trim())return[];const d=[];return Object.entries(i).forEach(([h,v])=>{(Array.isArray(v)?v:Object.values(v||{}).filter(w=>typeof w=="object")).forEach((w,E)=>{JSON.stringify(w).toLowerCase().includes(u.toLowerCase())&&d.push({type:h,index:E,title:w.titulo||w.title||w.nombre||`${h} ${E+1}`,item:w})})}),d.slice(0,100)},[u,i]);return a.jsxs(a.Fragment,{children:[a.jsx(Ca,{value:u,onChange:s,placeholder:"Busca una palabra, versículo, libro..."}),u?a.jsx("div",{className:"results",children:f.map((d,h)=>a.jsxs("div",{className:"result",children:[a.jsx("span",{children:d.type}),a.jsx("strong",{children:d.title}),a.jsx("small",{children:"Coincidencia encontrada en el contenido"})]},h))}):a.jsxs("div",{className:"search-hint",children:[a.jsx("h2",{children:"Búsqueda global"}),a.jsx("p",{children:"Busca simultáneamente dentro de los JSON cargados."})]})]})}function Om({data:i}){const u=x.useMemo(()=>i?Array.isArray(i)?i:Array.isArray(i.himnos)?i.himnos:[]:[],[i]),[s,f]=x.useState(""),[d,h]=x.useState(null),[v,k]=x.useState(!1),[w,E]=x.useState(0),[R,N]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("himnos_favoritos")||"[]")}catch{return[]}}),z=x.useMemo(()=>{const $=s.trim().toLowerCase();return $?u.filter(B=>{const b=String(B.numero||""),F=String(B.titulo||""),U=String(B.autor||""),K=String(B.categoria||""),Y=Array.isArray(B.estrofas)?B.estrofas.map(le=>le.texto||"").join(" "):"",te=B.estribillo||"";return`
        ${b}
        ${F}
        ${U}
        ${K}
        ${Y}
        ${te}
      `.toLowerCase().includes($)}):u},[u,s]);return u.length?d&&!v?a.jsx(Im,{himno:d,onBack:()=>h(null),onPresentar:()=>{E(0),k(!0)},favoritos:R,setFavoritos:N}):d&&v?a.jsx(Dm,{himno:d,diapositiva:w,setDiapositiva:E,onClose:()=>k(!1)}):a.jsxs("div",{className:"himnos-page",children:[a.jsxs("div",{className:"himnos-header",children:[a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:"BIBLIOTECA DIGITAL"}),a.jsx("h2",{children:"Himnos"}),a.jsx("p",{children:"Explora y lee tus himnos."})]}),a.jsxs("div",{className:"himnos-total",children:[a.jsx(Ir,{size:18}),a.jsx("strong",{children:u.length}),a.jsx("span",{children:"himnos"})]})]}),a.jsxs("div",{className:"himnos-search",children:[a.jsx(on,{size:20}),a.jsx("input",{type:"text",value:s,onChange:$=>f($.target.value),placeholder:"Buscar himno por número, título o contenido..."}),s&&a.jsx("button",{className:"clear-search",onClick:()=>f(""),children:a.jsx(ln,{size:17})})]}),a.jsx("div",{className:"himnos-list",children:z.map($=>{const B=$.numero??"",b=$.titulo??"Sin título",F=$.categoria??"Himno";return a.jsxs("button",{className:"himno-card",onClick:()=>h($),children:[a.jsx("div",{className:"himno-number",children:String(B).padStart(2,"0")}),a.jsxs("div",{className:"himno-info",children:[a.jsx("h3",{children:b}),a.jsx("span",{children:F})]}),a.jsx("div",{className:"himno-arrow",children:"→"})]},$.id)})}),!z.length&&a.jsxs("div",{className:"himnos-empty",children:[a.jsx(on,{size:35}),a.jsx("h3",{children:"No encontramos el himno"}),a.jsx("p",{children:"Prueba con otro número o palabra."})]}),a.jsx("style",{children:`

        .himnos-page {
          max-width: 1100px;
          margin: auto;
        }

        .himnos-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .eyebrow {
          display: block;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          color: #8791a2;
        }

        .himnos-header h2 {
          margin: 5px 0;
          font-size: 32px;
          color: #172033;
        }

        .himnos-header p {
          margin: 0;
          color: #7b8494;
        }

        .himnos-total {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid #e5e9ef;
          color: #667085;
        }

        .himnos-total strong {
          color: #1d4ed8;
          font-size: 20px;
        }

        .himnos-search {
          height: 52px;
          background: #fff;
          border: 1px solid #dfe5ed;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
          color: #7b8494;
          margin-bottom: 18px;
        }

        .himnos-search input {
          flex: 1;
          border: 0;
          outline: 0;
          background: transparent;
          color: #172033;
          font-size: 14px;
        }

        .clear-search {
          border: 0;
          background: transparent;
          color: #777;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .himnos-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .himno-card {
          width: 100%;
          border: 1px solid #e5e9ef;
          background: #fff;
          border-radius: 15px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 15px;
          text-align: left;
          cursor: pointer;
          transition: .18s ease;
        }

        .himno-card:hover {
          transform: translateX(3px);
          border-color: #b7c9f4;
          box-shadow: 0 8px 25px rgba(30,60,120,.07);
        }

        .himno-number {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #edf3ff;
          color: #1d4ed8;
          font-weight: 800;
          font-size: 15px;
          flex-shrink: 0;
        }

        .himno-info {
          flex: 1;
        }

        .himno-info h3 {
          margin: 0 0 5px;
          color: #172033;
          font-size: 15px;
        }

        .himno-info span {
          color: #8a93a3;
          font-size: 12px;
        }

        .himno-arrow {
          color: #1d4ed8;
          font-size: 20px;
        }

        .himnos-empty {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #7b8494;
        }

        .himnos-empty h2,
        .himnos-empty h3 {
          color: #172033;
        }

        .himnos-empty code {
          background: #eef2f7;
          padding: 8px 12px;
          border-radius: 8px;
        }

        @media(max-width:600px) {

          .himnos-header {
            align-items: flex-start;
          }

          .himnos-total {
            display: none;
          }

          .himnos-header h2 {
            font-size: 27px;
          }

        }

      `})]}):a.jsxs("div",{className:"himnos-empty",children:[a.jsx(Ir,{size:50}),a.jsx("h2",{children:"No hay himnos"}),a.jsx("p",{children:"No se encontraron himnos en el archivo JSON."}),a.jsx("code",{children:"public/data/himnos.json"})]})}function Im({himno:i,onBack:u,onPresentar:s,favoritos:f,setFavoritos:d}){const h=i.numero,v=i.titulo,k=i.autor,w=i.categoria,E=Array.isArray(i.estrofas)?i.estrofas:[],R=typeof i.estribillo=="string"?i.estribillo:"",N=f.includes(i.id);function z(){let b;f.includes(i.id)?b=f.filter(F=>F!==i.id):b=[...f,i.id],d(b),localStorage.setItem("himnos_favoritos",JSON.stringify(b))}async function $(){let b=`${h}. ${v}

`;E.forEach(F=>{b+=`${F.numero}. ${F.texto}

`}),R&&(b+=`CORO
${R}
`);try{await navigator.clipboard.writeText(b),alert("Himno copiado")}catch{console.log(b)}}async function B(b){try{await navigator.clipboard.writeText(b),alert("Estrofa copiada")}catch{console.log(b)}}return a.jsxs("div",{className:"lector-himno",children:[a.jsxs("div",{className:"lector-top",children:[a.jsxs("button",{className:"back-btn",onClick:u,children:[a.jsx(dm,{size:18}),"Volver al himnario"]}),a.jsxs("div",{className:"lector-actions",children:[a.jsx("button",{className:`reader-btn ${N?"favorite-active":""}`,onClick:z,title:"Favorito",children:a.jsx(ul,{size:18,fill:N?"currentColor":"none"})}),a.jsx("button",{className:"reader-btn",onClick:$,title:"Copiar himno",children:a.jsx(nl,{size:18})}),a.jsxs("button",{className:"primary",onClick:s,children:[a.jsx(md,{size:17}),"Presentar"]})]})]}),a.jsxs("article",{className:"himno-reader",children:[a.jsxs("header",{className:"himno-title",children:[a.jsx("span",{className:"himno-big-number",children:String(h).padStart(2,"0")}),a.jsxs("div",{children:[a.jsx("span",{className:"eyebrow",children:w}),a.jsx("h1",{children:v}),k&&a.jsx("p",{children:k})]})]}),a.jsxs("div",{className:"himno-content",children:[E.map(b=>a.jsxs("section",{className:"estrofa",children:[a.jsx("div",{className:"estrofa-number",children:b.numero}),a.jsxs("div",{className:"estrofa-body",children:[a.jsx("p",{children:b.texto}),a.jsxs("button",{className:"copy-verse",onClick:()=>B(b.texto),children:[a.jsx(nl,{size:14}),"Copiar estrofa"]})]})]},b.numero)),R&&a.jsxs("section",{className:"coro",children:[a.jsx("div",{className:"coro-title",children:"CORO"}),a.jsx("p",{children:R}),a.jsxs("button",{className:"copy-verse",onClick:()=>B(R),children:[a.jsx(nl,{size:14}),"Copiar coro"]})]})]})]}),a.jsx("style",{children:`

        .lector-himno {
          max-width: 950px;
          margin: auto;
        }

        .lector-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: #1d4ed8;
          font-weight: 700;
          cursor: pointer;
        }

        .lector-actions {
          display: flex;
          gap: 7px;
        }

        .reader-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #dfe5ed;
          background: #fff;
          border-radius: 10px;
          display: grid;
          place-items: center;
          color: #657083;
          cursor: pointer;
        }

        .reader-btn:hover {
          color: #1d4ed8;
          border-color: #b9c9ed;
        }

        .favorite-active {
          color: #e4a000;
        }

        .primary {
          border: 0;
          background: #2455d6;
          color: #fff;
          padding: 0 16px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
          font-weight: 600;
        }

        .himno-reader {
          background: #fff;
          border: 1px solid #e4e8ef;
          border-radius: 22px;
          overflow: hidden;
        }

        .himno-title {
          padding: 40px;
          background: linear-gradient(
            135deg,
            #173b86,
            #2860df
          );
          color: #fff;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .himno-big-number {
          font-size: 55px;
          font-weight: 900;
          opacity: .35;
          line-height: 1;
        }

        .himno-title h1 {
          margin: 6px 0;
          font-size: 32px;
        }

        .himno-title p {
          margin: 0;
          color: #d8e5ff;
        }

        .himno-content {
          padding: 38px 45px;
        }

        .estrofa {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid #edf0f4;
        }

        .estrofa-number {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: #edf3ff;
          color: #1d4ed8;
          display: grid;
          place-items: center;
          font-weight: 800;
        }

        .estrofa-body p {
          margin: 0;
          white-space: pre-line;
          font-size: 19px;
          line-height: 1.9;
          color: #263247;
        }

        .copy-verse {
          margin-top: 12px;
          border: 0;
          background: transparent;
          color: #8b94a4;
          font-size: 12px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .copy-verse:hover {
          color: #1d4ed8;
        }

        .coro {
          margin-top: 30px;
          padding: 25px;
          background: #f1f5ff;
          border-left: 4px solid #1d4ed8;
          border-radius: 0 14px 14px 0;
        }

        .coro-title {
          color: #1d4ed8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .12em;
          margin-bottom: 10px;
        }

        .coro p {
          white-space: pre-line;
          margin: 0;
          font-size: 19px;
          line-height: 1.9;
          color: #263247;
        }

        @media(max-width:650px) {

          .lector-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .lector-actions {
            width: 100%;
          }

          .lector-actions .primary {
            flex: 1;
            justify-content: center;
          }

          .himno-title {
            padding: 28px 22px;
          }

          .himno-big-number {
            font-size: 38px;
          }

          .himno-title h1 {
            font-size: 25px;
          }

          .himno-content {
            padding: 25px 20px;
          }

          .estrofa {
            grid-template-columns: 30px 1fr;
            gap: 12px;
          }

          .estrofa-body p,
          .coro p {
            font-size: 17px;
          }

        }

      `})]})}function Dm({himno:i,diapositiva:u,setDiapositiva:s,onClose:f}){const d=i.numero,h=i.titulo,v=Array.isArray(i.estrofas)?i.estrofas:[],k=i.estribillo||"",w=[{tipo:"titulo",contenido:h},...v.map(z=>({tipo:"estrofa",numero:z.numero,contenido:z.texto})),...k?[{tipo:"coro",contenido:k}]:[]],E=w[u];function R(){s(Math.min(w.length-1,u+1))}function N(){s(Math.max(0,u-1))}return a.jsxs("div",{className:"himno-presentacion",tabIndex:0,autoFocus:!0,onKeyDown:z=>{z.key==="ArrowRight"&&R(),z.key==="ArrowLeft"&&N(),z.key==="Escape"&&f()},children:[a.jsx("button",{className:"presentation-close",onClick:f,children:a.jsx(ln,{size:23})}),a.jsxs("div",{className:"presentation-counter",children:[u+1," / ",w.length]}),a.jsxs("div",{className:"presentation-slide",children:[E.tipo==="titulo"&&a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"presentation-number",children:["HIMNO ",d]}),a.jsx("h1",{children:E.contenido}),a.jsx(Ir,{size:55,className:"presentation-music"})]}),E.tipo==="estrofa"&&a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:"presentation-section",children:["ESTROFA ",E.numero]}),a.jsx("p",{children:E.contenido})]}),E.tipo==="coro"&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"presentation-section",children:"CORO"}),a.jsx("p",{children:E.contenido})]})]}),a.jsxs("div",{className:"presentation-controls",children:[a.jsx("button",{onClick:N,disabled:u===0,children:a.jsx(dd,{})}),a.jsx("button",{onClick:R,disabled:u===w.length-1,children:a.jsx(fd,{})})]}),a.jsx("style",{children:`

        .himno-presentacion {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background:
            radial-gradient(
              circle at top right,
              #1d4ed8 0,
              #0b1630 45%,
              #050914 100%
            );
          color: white;
          display: grid;
          place-items: center;
          outline: none;
        }

        .presentation-slide {
          width: min(1200px, 90vw);
          text-align: center;
        }

        .presentation-slide h1 {
          font-size: clamp(
            38px,
            6vw,
            80px
          );
          line-height: 1.15;
          margin: 25px 0;
        }

        .presentation-slide p {
          white-space: pre-line;
          font-size: clamp(
            25px,
            3.5vw,
            52px
          );
          line-height: 1.5;
          margin: 25px 0;
        }

        .presentation-number,
        .presentation-section {
          color: #9bbcff;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .2em;
        }

        .presentation-music {
          color: #9bbcff;
          opacity: .5;
        }

        .presentation-close {
          position: fixed;
          right: 25px;
          top: 25px;
          width: 45px;
          height: 45px;
          border: 0;
          border-radius: 12px;
          background: rgba(255,255,255,.1);
          color: white;
          display: grid;
          place-items: center;
          z-index: 2;
          cursor: pointer;
        }

        .presentation-counter {
          position: fixed;
          top: 30px;
          left: 30px;
          color: #aebbd4;
          font-size: 13px;
        }

        .presentation-controls {
          position: fixed;
          bottom: 35px;
          display: flex;
          gap: 10px;
        }

        .presentation-controls button {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.08);
          color: white;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .presentation-controls button:disabled {
          opacity: .3;
          cursor: not-allowed;
        }

      `})]})}function Fm(){const i=x.useRef(null),[u,s]=x.useState([]),[f,d]=x.useState(!0),[h,v]=x.useState(""),[k,w]=x.useState(""),[E,R]=x.useState(null),[N,z]=x.useState(!1),[$,B]=x.useState(0),[b,F]=x.useState(0),[U,K]=x.useState(1),[Y,te]=x.useState(1),[Z,le]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("devocionales_favoritos")||"[]")}catch{return[]}});x.useEffect(()=>{async function L(){try{d(!0),v("");const T=await fetch("/data/audios.json");if(!T.ok)throw new Error(`Error HTTP ${T.status}`);const y=await T.json();console.log("AUDIOS JSON CARGADO:",y);let _=[];if(Array.isArray(y))_=y;else if(Array.isArray(y.audios))_=y.audios;else throw new Error("El JSON no contiene un arreglo de audios.");s(_)}catch(T){console.error("ERROR CARGANDO AUDIOS:",T),v(T.message)}finally{d(!1)}}L()},[]);const oe=x.useMemo(()=>{const L=k.trim().toLowerCase();return L?u.filter(T=>`
        ${T.titulo||""}
        ${T.fecha||""}
        ${T.descripcion||""}
      `.toLowerCase().includes(L)):u},[u,k]);function pe(L){if(!L.audio){alert("Este devocional no tiene audio.");return}R(L),B(0),setTimeout(()=>{i.current&&(i.current.src=L.audio,i.current.volume=U,i.current.playbackRate=Y,i.current.play().then(()=>{z(!0)}).catch(T=>{console.error("Error reproduciendo:",T),alert("No se pudo reproducir el audio. Puede que el servidor no permita reproducción directa.")}))},50)}function Le(){if(!E){oe.length>0&&pe(oe[0]);return}i.current&&(N?(i.current.pause(),z(!1)):i.current.play().then(()=>{z(!0)}))}function Te(){i.current&&(B(i.current.currentTime),Number.isFinite(i.current.duration)&&F(i.current.duration))}function Ze(L){const T=Number(L.target.value);i.current&&(i.current.currentTime=T,B(T))}function Fe(L){const T=Number(L.target.value);K(T),i.current&&(i.current.volume=T)}function Re(){const L=[.75,1,1.25,1.5,2],T=L.indexOf(Y),y=L[(T+1)%L.length];te(y),i.current&&(i.current.playbackRate=y)}function Me(){if(!E)return;const L=oe.findIndex(T=>T===E);L>=0&&L<oe.length-1&&pe(oe[L+1])}function we(){if(!E)return;const L=oe.findIndex(T=>T===E);L>0&&pe(oe[L-1])}function be(){z(!1),B(0)}function I(L){const T=L.titulo;let y;Z.includes(T)?y=Z.filter(_=>_!==T):y=[...Z,T],le(y),localStorage.setItem("devocionales_favoritos",JSON.stringify(y))}function P(L){if(!L||!Number.isFinite(L))return"00:00";const T=Math.floor(L/60),y=Math.floor(L%60);return String(T).padStart(2,"0")+":"+String(y).padStart(2,"0")}return f?a.jsxs("div",{className:"devocionales-loading",children:[a.jsx(Zo,{size:45}),a.jsx("h2",{children:"Cargando devocionales..."}),a.jsx("p",{children:"Leyendo audios.json"})]}):h?a.jsxs("div",{className:"devocionales-error",children:[a.jsx(ln,{size:45}),a.jsx("h2",{children:"No se pudo cargar audios.json"}),a.jsx("p",{children:h}),a.jsxs("div",{className:"error-path",children:["Debe existir:",a.jsx("strong",{children:"public/data/audios.json"})]}),a.jsx("button",{onClick:()=>window.location.reload(),children:"Intentar nuevamente"})]}):u.length?a.jsxs("div",{className:"devocionales-page",children:[a.jsx("audio",{ref:i,onTimeUpdate:Te,onLoadedMetadata:Te,onEnded:be,onPlay:()=>z(!0),onPause:()=>z(!1)}),a.jsxs("div",{className:"devocionales-header",children:[a.jsxs("div",{children:[a.jsx("span",{children:"BIBLIOTECA DIGITAL"}),a.jsx("h1",{children:"Devocionales"}),a.jsx("p",{children:"Lecturas y reflexiones para escuchar."})]}),a.jsxs("div",{className:"contador",children:[a.jsx(Zo,{size:18}),a.jsx("strong",{children:u.length}),"audios"]})]}),a.jsxs("div",{className:"buscador",children:[a.jsx(on,{size:20}),a.jsx("input",{value:k,onChange:L=>w(L.target.value),placeholder:"Buscar lectura..."}),k&&a.jsx("button",{onClick:()=>w(""),children:a.jsx(ln,{size:17})})]}),a.jsx("div",{className:"lista",children:oe.map((L,T)=>{const y=Z.includes(L.titulo),_=E===L;return a.jsxs("div",{className:`devocional-card ${_?"activo":""}`,children:[a.jsx("button",{className:"play",onClick:()=>pe(L),children:_&&N?a.jsx(Fc,{size:20}):a.jsx(Ac,{size:20})}),a.jsxs("div",{className:"info",children:[a.jsx("h3",{children:L.titulo}),L.fecha&&a.jsxs("div",{className:"fecha",children:[a.jsx(pm,{size:13}),L.fecha]}),L.descripcion&&a.jsx("p",{children:L.descripcion})]}),a.jsxs("div",{className:"acciones",children:[a.jsx("button",{className:y?"favorito activo":"favorito",onClick:()=>I(L),children:a.jsx(ul,{size:18,fill:y?"currentColor":"none"})}),L.descarga&&a.jsx("a",{href:L.descarga,target:"_blank",rel:"noopener noreferrer",className:"descarga",children:a.jsx(mm,{size:17})})]})]},L.titulo+T)})}),E&&a.jsxs("div",{className:"reproductor",children:[a.jsxs("div",{className:"reproductor-info",children:[a.jsx("div",{className:"icono",children:a.jsx(Zo,{size:20})}),a.jsxs("div",{children:[a.jsx("strong",{children:E.titulo}),a.jsx("span",{children:"Devocional"})]})]}),a.jsxs("div",{className:"controles",children:[a.jsxs("div",{className:"botones",children:[a.jsx("button",{onClick:we,children:a.jsx(km,{size:18})}),a.jsx("button",{className:"principal",onClick:Le,children:N?a.jsx(Fc,{size:20}):a.jsx(Ac,{size:20})}),a.jsx("button",{onClick:Me,children:a.jsx(Sm,{size:18})})]}),a.jsxs("div",{className:"barra",children:[a.jsx("span",{children:P($)}),a.jsx("input",{type:"range",min:"0",max:b||0,value:$,onChange:Ze}),a.jsx("span",{children:P(b)})]})]}),a.jsxs("div",{className:"opciones",children:[a.jsxs("button",{onClick:Re,children:[Y,"x"]}),a.jsx(yd,{size:18}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:U,onChange:Fe})]})]}),a.jsx("style",{children:`

        .devocionales-page {
          max-width: 1100px;
          margin: auto;
          padding-bottom: 120px;
        }

        .devocionales-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .devocionales-header span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
          color: #8791a2;
        }

        .devocionales-header h1 {
          margin: 5px 0;
          font-size: 32px;
          color: #172033;
        }

        .devocionales-header p {
          margin: 0;
          color: #7b8494;
        }

        .contador {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 12px 16px;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 12px;
          color: #697386;
        }

        .contador strong {
          color: #2455d6;
          font-size: 20px;
        }

        .buscador {
          height: 52px;
          background: #fff;
          border: 1px solid #dfe5ed;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
          margin-bottom: 18px;
          color: #7b8494;
        }

        .buscador input {
          flex: 1;
          border: 0;
          outline: 0;
          font-size: 14px;
        }

        .buscador button {
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .lista {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .devocional-card {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 16px;
          padding: 15px;
          transition: .2s;
        }

        .devocional-card:hover {
          border-color: #b8c9ed;
          box-shadow: 0 8px 25px rgba(30,60,120,.07);
        }

        .devocional-card.activo {
          border-color: #2455d6;
        }

        .play {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border: 0;
          border-radius: 50%;
          background: #2455d6;
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .info {
          flex: 1;
          min-width: 0;
        }

        .info h3 {
          margin: 0;
          font-size: 15px;
          color: #172033;
        }

        .fecha {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 5px;
          color: #8a93a3;
          font-size: 11px;
        }

        .info p {
          white-space: pre-line;
          margin: 7px 0 0;
          color: #737d8f;
          font-size: 12px;
          line-height: 1.5;
        }

        .acciones {
          display: flex;
          gap: 6px;
        }

        .favorito,
        .descarga {
          width: 38px;
          height: 38px;
          border: 1px solid #e1e6ed;
          border-radius: 10px;
          background: #fff;
          display: grid;
          place-items: center;
          color: #7b8494;
          cursor: pointer;
          text-decoration: none;
        }

        .favorito.activo {
          color: #e4a000;
        }

        .reproductor {
          position: fixed;
          left: 230px;
          right: 0;
          bottom: 0;
          min-height: 82px;
          background: rgba(255,255,255,.97);
          border-top: 1px solid #dfe5ed;
          backdrop-filter: blur(15px);
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 12px 25px;
          z-index: 1000;
        }

        .reproductor-info {
          width: 250px;
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .icono {
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: #edf3ff;
          color: #2455d6;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .reproductor-info strong {
          display: block;
          font-size: 13px;
          color: #172033;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .reproductor-info span {
          font-size: 11px;
          color: #8992a1;
        }

        .controles {
          flex: 1;
          min-width: 250px;
        }

        .botones {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
        }

        .botones button {
          border: 0;
          background: transparent;
          color: #526078;
          cursor: pointer;
        }

        .botones .principal {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #2455d6;
          color: #fff;
          display: grid;
          place-items: center;
        }

        .barra {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .barra span {
          font-size: 10px;
          color: #8a93a3;
          width: 38px;
        }

        .barra span:last-child {
          text-align: right;
        }

        .barra input {
          flex: 1;
        }

        .opciones {
          width: 180px;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .opciones button {
          border: 1px solid #dfe5ed;
          background: #fff;
          border-radius: 8px;
          padding: 6px 8px;
          cursor: pointer;
        }

        .opciones input {
          width: 70px;
        }

        .devocionales-loading,
        .devocionales-error {
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #7b8494;
        }

        .devocionales-loading h2,
        .devocionales-error h2 {
          color: #172033;
        }

        .error-path {
          margin: 15px 0;
        }

        .error-path strong {
          display: block;
          margin-top: 5px;
          color: #2455d6;
        }

        .devocionales-error button {
          border: 0;
          background: #2455d6;
          color: white;
          padding: 10px 18px;
          border-radius: 9px;
          cursor: pointer;
        }

        @media(max-width:900px) {

          .reproductor {
            left: 0;
          }

          .reproductor-info {
            width: 190px;
          }

        }

        @media(max-width:650px) {

          .devocionales-header {
            align-items: flex-start;
          }

          .contador {
            display: none;
          }

          .devocional-card {
            align-items: flex-start;
          }

          .acciones {
            flex-direction: column;
          }

          .reproductor {
            padding: 10px;
            gap: 5px;
          }

          .reproductor-info {
            display: none;
          }

          .controles {
            min-width: 0;
          }

          .opciones {
            width: auto;
          }

        }

      `})]}):a.jsxs("div",{className:"devocionales-loading",children:[a.jsx(Zo,{size:45}),a.jsx("h2",{children:"No hay devocionales"}),a.jsx("p",{children:"audios.json está vacío."})]})}function Na({title:i="Sin contenido",text:u="Agrega tu JSON en public/data."}){return a.jsxs("div",{className:"empty",children:[a.jsx(Ea,{size:34}),a.jsx("h3",{children:i}),a.jsx("p",{children:u})]})}function Ra({data:i}){return a.jsx("pre",{className:"json-preview",children:JSON.stringify(i,null,2)})}function Am({data:i}){const u=x.useMemo(()=>wd(i),[i]),[s,f]=x.useState(""),[d,h]=x.useState(null),v=u.filter(k=>JSON.stringify(k).toLowerCase().includes(s.toLowerCase()));return u.length?d?a.jsxs("div",{children:[a.jsx("button",{className:"back-btn",onClick:()=>h(null),children:"← Volver"}),a.jsx(Ra,{data:d})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"toolbar",children:a.jsx(Ca,{value:s,onChange:f,placeholder:"Buscar estudio..."})}),a.jsx("div",{className:"content-list",children:v.map((k,w)=>a.jsxs("button",{className:"content-row",onClick:()=>h(k),children:[a.jsx("strong",{children:k.titulo||k.title||k.nombre||`Estudio ${w+1}`}),a.jsx("span",{children:k.descripcion||k.description||"Abrir estudio →"})]},w))})]}):a.jsx(Na,{title:"No hay estudios",text:"Agrega tus datos en estudios.json."})}function $m(){const[i,u]=x.useState([]);return x.useEffect(()=>u(_m()),[]),i.length?a.jsx("div",{className:"content-list",children:i.map((s,f)=>a.jsxs("div",{className:"favorite-item",children:[a.jsx("strong",{children:s.titulo||s.title||s.nombre||`${s.libro||"Contenido"} ${s.numero||""}`}),a.jsx(Ra,{data:s})]},f))}):a.jsx(Na,{title:"No tienes favoritos",text:"Guarda versículos, himnos o contenidos para verlos aquí."})}function Bm({data:i}){const[u,s]=x.useState(""),[f,d]=x.useState(!1),h=()=>{d(!0),setTimeout(()=>{var v,k;return(k=(v=document.documentElement).requestFullscreen)==null?void 0:k.call(v).catch(()=>{})},50)};return a.jsx("div",{className:f?"presentation full":"presentation",children:f?a.jsxs(a.Fragment,{children:[a.jsx("button",{className:"presentation-close",onClick:()=>{var v;d(!1),(v=document.exitFullscreen)==null||v.call(document).catch(()=>{})},children:a.jsx(ln,{})}),a.jsx("div",{className:"presentation-content",children:u||"Escribe contenido antes de presentar."})]}):a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Modo presentación"}),a.jsx("p",{children:"Escribe el contenido que deseas proyectar. Después podremos conectar directamente versículos, himnos y estudios de tus JSON."}),a.jsx("textarea",{value:u,onChange:v=>s(v.target.value),placeholder:"Escribe o pega aquí el contenido..."}),a.jsxs("button",{className:"primary",onClick:h,children:[a.jsx(md,{size:17})," Presentar"]})]})})}function Um({onRefresh:i}){const u=Rm();return a.jsxs("div",{className:"settings",children:[a.jsxs("section",{className:"panel",children:[a.jsx("h2",{children:"Archivos JSON"}),a.jsxs("p",{children:["Coloca tus archivos dentro de ",a.jsx("code",{children:"public/data/"}),". No necesitas modificar el lector para empezar."]}),Object.entries(u).map(([s,f])=>a.jsxs("div",{className:"file-row",children:[a.jsx("strong",{children:s}),a.jsx("code",{children:f})]},s)),a.jsx("button",{className:"primary",onClick:i,children:"Recargar contenido"})]}),a.jsxs("section",{className:"panel",children:[a.jsx("h2",{children:"Próximas mejoras"}),a.jsxs("ul",{className:"clean-list",children:[a.jsx("li",{children:"Adaptador exacto para la estructura real de tus JSON."}),a.jsx("li",{children:"Notas y resaltado por versículo."}),a.jsx("li",{children:"Descargas y contenido multimedia."}),a.jsx("li",{children:"Presentación automática desde Biblia e himnos."}),a.jsx("li",{children:"Instalación como aplicación Android/PWA."})]})]})]})}const $c={libros:"Libros",revistas:"Revistas",documentos:"Documentos"};function Hm({data:i}){const{tipo:u}=hh(),s=u==="libros"?i.libros:u==="revistas"?i.revistas:i.categorias,f=x.useMemo(()=>wd(s),[s]),[d,h]=x.useState(""),[v,k]=x.useState(null),w=f.filter(E=>JSON.stringify(E).toLowerCase().includes(d.toLowerCase()));return f.length?v?a.jsxs("div",{children:[a.jsx("button",{className:"back-btn",onClick:()=>k(null),children:"← Volver"}),a.jsx("h2",{children:v.titulo||v.title||v.nombre||"Contenido"}),a.jsx(Ra,{data:v})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"toolbar",children:a.jsx(Ca,{value:d,onChange:h,placeholder:`Buscar en ${$c[u]||"contenido"}...`})}),a.jsx("div",{className:"content-list",children:w.map((E,R)=>a.jsxs("button",{className:"content-row",onClick:()=>k(E),children:[a.jsx("strong",{children:E.titulo||E.title||E.nombre||`Elemento ${R+1}`}),a.jsx("span",{children:E.descripcion||E.description||"Abrir contenido →"})]},R))})]}):a.jsx(Na,{title:`${$c[u]||"Contenido"} vacío`})}const Bc=[{to:"/",label:"Inicio",icon:vm},{to:"/biblia",label:"Biblia",icon:wn},{to:"/biblioteca",label:"Biblioteca",icon:hd},{to:"/devocionales",label:"Devocionales",icon:Ea},{to:"/estudios",label:"Estudios",icon:pd},{to:"/himnos",label:"Himnos",icon:Ir},{to:"/busqueda",label:"Búsqueda",icon:on},{to:"/favoritos",label:"Favoritos",icon:ul},{to:"/presentacion",label:"Presentación",icon:gd}];function Vm(){const[i,u]=x.useState({}),[s,f]=x.useState(!0),[d,h]=x.useState(!1),[v,k]=x.useState(()=>Pm("dark",!1)),w=zt(),E=async()=>{f(!0);try{u(await Nm())}finally{f(!1)}};x.useEffect(()=>{E()},[]),x.useEffect(()=>{document.documentElement.classList.toggle("dark",v),zm("dark",v)},[v]);const R=x.useMemo(()=>{const N=Bc.find(z=>z.to===w.pathname);return(N==null?void 0:N.label)||"Mi Biblioteca"},[w.pathname]);return a.jsxs("div",{className:"app-shell",children:[a.jsxs("aside",{className:`sidebar ${d?"open":""}`,children:[a.jsxs("div",{className:"brand",children:[a.jsx("div",{className:"brand-logo",children:a.jsx(wn,{size:24})}),a.jsxs("div",{children:[a.jsx("strong",{children:"Mi Biblioteca"}),a.jsx("span",{children:"Bíblica"})]}),a.jsx("button",{className:"icon-btn mobile-close",onClick:()=>h(!1),children:a.jsx(ln,{})})]}),a.jsx("nav",{children:Bc.map(({to:N,label:z,icon:$})=>a.jsxs(pa,{to:N,end:N==="/",onClick:()=>h(!1),className:({isActive:B})=>`nav-item ${B?"active":""}`,children:[a.jsx($,{size:19}),a.jsx("span",{children:z})]},N))}),a.jsx("div",{className:"sidebar-bottom",children:a.jsxs(pa,{to:"/configuracion",className:"nav-item",onClick:()=>h(!1),children:[a.jsx(wm,{size:19}),a.jsx("span",{children:"Configuración"})]})})]}),d&&a.jsx("div",{className:"overlay",onClick:()=>h(!1)}),a.jsxs("main",{className:"main",children:[a.jsxs("header",{className:"topbar",children:[a.jsx("button",{className:"icon-btn mobile-menu",onClick:()=>h(!0),children:a.jsx(vd,{})}),a.jsxs("div",{children:[a.jsx("div",{className:"eyebrow",children:"BIBLIOTECA DIGITAL"}),a.jsx("h1",{children:R})]}),a.jsxs("div",{className:"top-actions",children:[a.jsx("button",{className:"icon-btn",title:"Recargar JSON",onClick:E,children:a.jsx(xm,{size:19})}),a.jsx("button",{className:"icon-btn",title:"Cambiar tema",onClick:()=>k(N=>!N),children:v?a.jsx(Em,{size:19}):a.jsx(gm,{size:19})})]})]}),s?a.jsxs("div",{className:"loading",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Cargando biblioteca..."})]}):a.jsx("div",{className:"page",children:a.jsxs(zh,{children:[a.jsx(ft,{path:"/",element:a.jsx(Lm,{data:i})}),a.jsx(ft,{path:"/biblia",element:a.jsx(Tm,{data:i.biblia})}),a.jsx(ft,{path:"/biblioteca",element:a.jsx(Mm,{data:i})}),a.jsx(ft,{path:"/biblioteca/:tipo",element:a.jsx(Hm,{data:i})}),a.jsx(ft,{path:"/estudios",element:a.jsx(Am,{data:i.estudios})}),a.jsx(ft,{path:"/himnos",element:a.jsx(Om,{data:i.himnos})}),a.jsx(ft,{path:"/devocionales",element:a.jsx(Fm,{data:i.devocionales})}),a.jsx(ft,{path:"/busqueda",element:a.jsx(bm,{data:i})}),a.jsx(ft,{path:"/favoritos",element:a.jsx($m,{})}),a.jsx(ft,{path:"/presentacion",element:a.jsx(Bm,{data:i})}),a.jsx(ft,{path:"/configuracion",element:a.jsx(Um,{data:i,onRefresh:E})})]})})]})]})}Pp.createRoot(document.getElementById("root")).render(a.jsx(kp.StrictMode,{children:a.jsx(Zh,{children:a.jsx(Vm,{})})}));
