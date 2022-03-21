!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactHookForm={},e.React)}(this,(function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=r(t),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var u=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>[...e].some((e=>(e=>e.substring(0,e.search(/.\d/))||e)(t)===e)),d=e=>e.filter(Boolean),f=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const g="blur",y="focusout",b="change",h="onBlur",_="onChange",p="onSubmit",v="onTouched",x="all",A="max",F="min",j="maxLength",V="minLength",O="pattern",S="required",w="validate";var k=(e,t)=>{const r=Object.assign({},e);return delete r[t],r};const D=s.default.createContext(null),C=()=>s.default.useContext(D);var E=(e,t,r,s=!0)=>{const a={};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t[a]!==x&&(t[a]=!s||x),r&&(r[a]=!0),e[a]}});return a},U=e=>u(e)&&!Object.keys(e).length,B=(e,t,r)=>{const s=k(e,"name");return U(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find((e=>t[e]===(!r||x)))},T=e=>Array.isArray(e)?e:[e],N=(e,t,r)=>r&&t?e===t:!e||!t||e===t||T(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function M(e){const t=s.default.useRef(e);t.current=e,s.default.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}function R(e){const t=C(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,u]=s.default.useState(r._formState),l=s.default.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.default.useRef(n),d=s.default.useRef(!0);c.current=n;return M({disabled:a,callback:s.default.useCallback((e=>d.current&&N(c.current,e.name,i)&&B(e,l.current)&&u(Object.assign(Object.assign({},r._formState),e))),[r,i]),subject:r._subjects.state}),s.default.useEffect((()=>()=>{d.current=!1}),[]),E(o,r._proxyFormState,l.current,!1)}var L=e=>"string"==typeof e,q=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),m(r,e)):a?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r)},W=e=>"function"==typeof e,I=e=>{for(const t in e)if(W(e[t]))return!0;return!1};function P(e){const t=C(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},l=s.default.useRef(a);l.current=a;const c=s.default.useCallback((e=>{if(N(l.current,e.name,o)){const t=q(l.current,r._names,e.values||r._formValues);m(f(l.current)||u(t)&&!I(t)?Object.assign({},t):Array.isArray(t)?[...t]:f(t)?n:t)}}),[r,o,n]);M({disabled:i,subject:r._subjects.watch,callback:c});const[d,m]=s.default.useState(f(n)?r._getWatch(a):n);return s.default.useEffect((()=>{r._removeUnmounted()})),d}function $(e){const t=C(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=P({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),u=R({control:a,name:r}),d=s.default.useRef(a.register(r,Object.assign(Object.assign({},e.rules),{value:o})));return s.default.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.default.useCallback((e=>{d.current.onChange({target:{value:l(e),name:r},type:b})}),[r]),onBlur:s.default.useCallback((()=>{d.current.onBlur({target:{value:m(a._formValues,r),name:r},type:g})}),[r,a]),ref:s.default.useCallback((e=>{const t=m(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}),[r,a._fields])},formState:u,fieldState:a.getFieldState(r,u)}}var H=(e,t,r,s,a)=>t?Object.assign(Object.assign({},r[e]),{types:Object.assign(Object.assign({},r[e]&&r[e].types?r[e].types:{}),{[s]:a||!0})}):{},z=e=>/^\w*$/.test(e),G=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function J(e,t,r){let s=-1;const a=z(t)?[t]:G(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const K=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const e=r._f,s=k(r,"_f");if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&K(s,t)}}};var Q=()=>{const e="undefined"==typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(t=>{const r=(16*Math.random()+e)%16|0;return("x"==t?r:3&r|8).toString(16)}))},X=(e,t,r={})=>r.shouldFocus||f(r.shouldFocus)?r.focusName||`${e}.${f(r.focusIndex)?t:r.focusIndex}.`:"",Y=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));function Z(e,t){return[...e,...T(t)]}var ee=e=>Array.isArray(e)?e.map((()=>{})):void 0;function te(e,t,r){return[...e.slice(0,t),...T(r),...e.slice(t)]}var re=(e,t,r)=>Array.isArray(e)?(f(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function se(e,t){return[...T(t),...T(e)]}var ae=(e,t)=>f(t)?[]:function(e,t){let r=0;const s=[...e];for(const e of t)s.splice(e-r,1),r++;return d(s).length?s:[]}(e,T(t).sort(((e,t)=>e-t))),ne=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]},ie=(e,t,r)=>(e[t]=r,e);function oe(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(W(e[r])){t=e;break}t[r]=oe(e[r])}}return t}function ue(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var le=e=>i(e)||!o(e);function ce(e,t){if(le(e)||le(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ce(r,e):r!==e)return!1}}return!0}var de=e=>({isOnSubmit:!e||e===p,isOnBlur:e===h,isOnChange:e===_,isOnAll:e===x,isOnTouch:e===v}),fe=e=>"boolean"==typeof e,me=e=>"file"===e.type,ge=e=>e instanceof HTMLElement,ye=e=>"select-multiple"===e.type,be=e=>"radio"===e.type,he="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document,_e=e=>ge(e)&&e.isConnected;function pe(e,t){const r=z(t)?[t]:G(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let t=0;t<r.slice(0,-1).length;t++){let s,a=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(n=e);++a<i.length;){const t=i[a];s=s?s[t]:e[t],o===a&&(u(s)&&U(s)||Array.isArray(s)&&!s.filter((e=>!f(e))).length)&&(n?delete n[t]:delete e[t]),n=s}}return e}function ve(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const r in e)Array.isArray(e[r])||u(e[r])&&!I(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ve(e[r],t[r])):i(e[r])||(t[r]=!0);return t}function xe(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const s in e)Array.isArray(e[s])||u(e[s])&&!I(e[s])?f(t)||le(r[s])?r[s]=Array.isArray(e[s])?ve(e[s],[]):Object.assign({},ve(e[s])):xe(e[s],i(t)?{}:t[s],r[s]):r[s]=!ce(e[s],t[s]);return r}var Ae=(e,t)=>xe(e,t,ve(t));const Fe={value:!1,isValid:!1},je={value:!0,isValid:!0};var Ve=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?je:{value:e[0].value,isValid:!0}:je:Fe}return Fe},Oe=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const Se={isValid:!1,value:null};var we=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),Se):Se;function ke(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return me(t)?t.files:be(t)?we(e.refs).value:ye(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Ve(e.refs).value:Oe(f(t.value)?e.ref.value:t.value,e)}var De=e=>e instanceof RegExp,Ce=e=>f(e)?void 0:De(e)?e.source:u(e)?De(e.value)?e.value.source:e.value:e;function Ee(e,t,r){const s=m(e,r);if(s||z(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Ue=e=>L(e)||s.default.isValidElement(e);function Be(e,t,r="validate"){if(Ue(e)||Array.isArray(e)&&e.every(Ue)||fe(e)&&!e)return{type:r,message:Ue(e)?e:"",ref:t}}var Te=e=>u(e)&&!De(e)?e:{value:e,message:""},Ne=async(e,t,r,s)=>{const{ref:n,refs:o,required:l,maxLength:c,minLength:d,min:f,max:m,pattern:g,validate:y,name:b,valueAsNumber:h,mount:_,disabled:p}=e._f;if(!_||p)return{};const v=o?o[0]:n,x=e=>{s&&v.reportValidity&&(v.setCustomValidity(fe(e)?"":e||" "),v.reportValidity())},k={},D=be(n),C=a(n),E=D||C,B=(h||me(n))&&!n.value||""===t||Array.isArray(t)&&!t.length,T=H.bind(null,b,r,k),N=(e,t,r,s=j,a=V)=>{const i=e?t:r;k[b]=Object.assign({type:e?s:a,message:i,ref:n},T(e?s:a,i))};if(l&&(!E&&(B||i(t))||fe(t)&&!t||C&&!Ve(o).isValid||D&&!we(o).isValid)){const{value:e,message:t}=Ue(l)?{value:!!l,message:l}:Te(l);if(e&&(k[b]=Object.assign({type:S,message:t,ref:v},T(S,t)),!r))return x(t),k}if(!(B||i(f)&&i(m))){let e,s;const a=Te(m),o=Te(f);if(isNaN(t)){const r=n.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=n.valueAsNumber||+t;i(a.value)||(e=r>a.value),i(o.value)||(s=r<o.value)}if((e||s)&&(N(!!e,a.message,o.message,A,F),!r))return x(k[b].message),k}if((c||d)&&!B&&L(t)){const e=Te(c),s=Te(d),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(N(a,e.message,s.message),!r))return x(k[b].message),k}if(g&&!B&&L(t)){const{value:e,message:s}=Te(g);if(De(e)&&!t.match(e)&&(k[b]=Object.assign({type:O,message:s,ref:n},T(O,s)),!r))return x(s),k}if(y)if(W(y)){const e=Be(await y(t),v);if(e&&(k[b]=Object.assign(Object.assign({},e),T(w,e.message)),!r))return x(e.message),k}else if(u(y)){let e={};for(const s in y){if(!U(e)&&!r)break;const a=Be(await y[s](t),v,s);a&&(e=Object.assign(Object.assign({},a),T(s,a.message)),x(a.message),r&&(k[b]=e))}if(!U(e)&&(k[b]=Object.assign({ref:v},e),!r))return k}return x(!0),k};const Me={mode:p,reValidateMode:_,shouldFocusError:!0};function Re(e={}){let t=Object.assign(Object.assign({},Me),e),r={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},s={};const o={clone:oe};let u,b=t.defaultValues||{},h=t.shouldUnregister?{}:o.clone(b),_={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},v=0,A={};const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},j={watch:ue(),array:ue(),state:ue()},V=de(t.mode),O=de(t.reValidateMode),S=t.criteriaMode===x,w=async e=>{let a=!1;return F.isValid&&(a=t.resolver?U((await N()).errors):await M(s,!0),e||a===r.isValid||(r.isValid=a,j.state.next({isValid:a}))),a},D=(e,t)=>(J(r.errors,e,t),j.state.next({errors:r.errors})),C=(e,t,r,a)=>{const n=m(s,e);if(n){const s=m(h,e,f(r)?m(b,e):r);f(s)||a&&a.defaultChecked||t?J(h,e,t?s:ke(n._f)):P(e,s),_.mount&&w()}},E=(e,t,s,a,n)=>{let i=!1;const o={name:e},u=m(r.touchedFields,e);if(F.isDirty){const e=r.isDirty;r.isDirty=o.isDirty=R(),i=e!==o.isDirty}if(F.dirtyFields&&(!s||a)){const s=m(r.dirtyFields,e);ce(m(b,e),t)?pe(r.dirtyFields,e):J(r.dirtyFields,e,!0),o.dirtyFields=r.dirtyFields,i=i||s!==m(r.dirtyFields,e)}return s&&!u&&(J(r.touchedFields,e,s),o.touchedFields=r.touchedFields,i=i||F.touchedFields&&u!==s),i&&n&&j.state.next(o),i?o:{}},B=async(t,s,a,n,i)=>{const o=m(r.errors,s),l=F.isValid&&r.isValid!==a;var c,d;if(e.delayError&&n?(u=u||(c=D,d=e.delayError,(...e)=>{clearTimeout(v),v=window.setTimeout((()=>c(...e)),d)}),u(s,n)):(clearTimeout(v),n?J(r.errors,s,n):pe(r.errors,s)),((n?!ce(o,n):o)||!U(i)||l)&&!t){const e=Object.assign(Object.assign(Object.assign({},i),l?{isValid:a}:{}),{errors:r.errors,name:s});r=Object.assign(Object.assign({},r),e),j.state.next(e)}A[s]--,F.isValidating&&!Object.values(A).some((e=>e))&&(j.state.next({isValidating:!1}),A={})},N=async e=>t.resolver?await t.resolver(Object.assign({},h),t.context,((e,t,r,s)=>{const a={};for(const r of e){const e=m(t,r);e&&J(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||p.mount,s,t.criteriaMode,t.shouldUseNativeValidation)):{},M=async(e,s,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const e=i._f,n=k(i,"_f");if(e){const n=await Ne(i,m(h,e.name),S,t.shouldUseNativeValidation);if(n[e.name]&&(a.valid=!1,s))break;s||(n[e.name]?J(r.errors,e.name,n[e.name]):pe(r.errors,e.name))}n&&await M(n,s,a)}}return a.valid},R=(e,t)=>(e&&t&&J(h,e,t),!ce(Q(),b)),I=(e,t,r)=>{const s=Object.assign({},_.mount?h:f(t)?b:L(e)?{[e]:t}:t);return q(e,p,s,r)},P=(e,t,r={})=>{const n=m(s,e);let o=t;if(n){const r=n._f;r&&(!r.disabled&&J(h,e,Oe(t,r)),o=he&&ge(r.ref)&&i(t)?"":t,ye(r.ref)?[...r.ref.options].forEach((e=>e.selected=o.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>e.checked=Array.isArray(o)?!!o.find((t=>t===e.value)):o===e.value)):r.refs[0]&&(r.refs[0].checked=!!o):r.refs.forEach((e=>e.checked=e.value===o)):me(r.ref)?r.ref.value="":(r.ref.value=o,r.ref.type||j.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&E(e,o,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&G(e)},$=(e,t,r)=>{for(const a in t){const i=t[a],o=`${e}.${a}`,u=m(s,o);!p.array.has(e)&&le(i)&&(!u||u._f)||n(i)?P(o,i,r):$(o,i,r)}},H=(e,t,a={})=>{const n=m(s,e),u=p.array.has(e),l=o.clone(t);J(h,e,l),u?(j.array.next({name:e,values:h}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&(r.dirtyFields=Ae(b,h),j.state.next({name:e,dirtyFields:r.dirtyFields,isDirty:R(e,l)}))):!n||n._f||i(l)?P(e,l,a):$(e,l,a),Y(e,p)&&j.state.next({}),j.watch.next({name:e})},z=async e=>{const a=e.target;let n=a.name;const i=m(s,n);if(i){let u,c;const d=a.type?ke(i._f):l(e),f=e.type===g||e.type===y,b=!((o=i._f).mount&&(o.required||o.min||o.max||o.maxLength||o.minLength||o.pattern||o.validate)||t.resolver||m(r.errors,n)||i._f.deps)||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(f,m(r.touchedFields,n),r.isSubmitted,O,V),_=Y(n,p,f);J(h,n,d),f?i._f.onBlur&&i._f.onBlur(e):i._f.onChange&&i._f.onChange(e);const v=E(n,d,f,!1),x=!U(v)||_;if(!f&&j.watch.next({name:n,type:e.type}),b)return x&&j.state.next(Object.assign({name:n},_?{}:v));if(!f&&_&&j.state.next({}),A[n]=(A[n],1),j.state.next({isValidating:!0}),t.resolver){const{errors:e}=await N([n]),t=Ee(r.errors,s,n),a=Ee(e,s,t.name||n);u=a.error,n=a.name,c=U(e)}else u=(await Ne(i,m(h,n),S,t.shouldUseNativeValidation))[n],c=await w(!0);i._f.deps&&G(i._f.deps),B(!1,n,c,u,v)}var o},G=async(e,a={})=>{let n,i;const o=T(e);if(j.state.next({isValidating:!0}),t.resolver){const t=await(async e=>{const{errors:t}=await N();if(e)for(const s of e){const e=m(t,s);e?J(r.errors,s,e):pe(r.errors,s)}else r.errors=t;return t})(f(e)?e:o);n=U(t),i=e?!o.some((e=>m(t,e))):n}else e?(i=(await Promise.all(o.map((async e=>{const t=m(s,e);return await M(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||r.isValid)&&w()):i=n=await M(s);return j.state.next(Object.assign(Object.assign(Object.assign({},!L(e)||F.isValid&&n!==r.isValid?{}:{name:e}),t.resolver?{isValid:n}:{}),{errors:r.errors,isValidating:!1})),a.shouldFocus&&!i&&K(s,(e=>m(r.errors,e)),e?o:p.mount),i},Q=e=>{const t=Object.assign(Object.assign({},b),_.mount?h:{});return f(e)?t:L(e)?m(t,e):e.map((e=>m(t,e)))},X=(e,t)=>({invalid:!!m((t||r).errors,e),isDirty:!!m((t||r).dirtyFields,e),isTouched:!!m((t||r).touchedFields,e),error:m((t||r).errors,e)}),Z=(e,a={})=>{for(const n of e?T(e):p.mount)p.mount.delete(n),p.array.delete(n),m(s,n)&&(a.keepValue||(pe(s,n),pe(h,n)),!a.keepError&&pe(r.errors,n),!a.keepDirty&&pe(r.dirtyFields,n),!a.keepTouched&&pe(r.touchedFields,n),!t.shouldUnregister&&!a.keepDefaultValue&&pe(b,n));j.watch.next({}),j.state.next(Object.assign(Object.assign({},r),a.keepDirty?{isDirty:R()}:{})),!a.keepIsValid&&w()},ee=(e,r={})=>{let n=m(s,e);const i=fe(r.disabled);return J(s,e,{_f:Object.assign(Object.assign(Object.assign({},n&&n._f?n._f:{ref:{name:e}}),{name:e,mount:!0}),r)}),p.mount.add(e),n?i&&J(h,e,r.disabled?void 0:m(h,e,ke(n._f))):C(e,!0,r.value),Object.assign(Object.assign(Object.assign({},i?{disabled:r.disabled}:{}),t.shouldUseNativeValidation?{required:!!r.required,min:Ce(r.min),max:Ce(r.max),minLength:Ce(r.minLength),maxLength:Ce(r.maxLength),pattern:Ce(r.pattern)}:{}),{name:e,onChange:z,onBlur:z,ref:i=>{if(i){ee(e,r),n=m(s,e);const t=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=(e=>be(e)||a(e))(t),u=n._f.refs||[];if(o?u.find((e=>e===t)):t===n._f.ref)return;J(s,e,{_f:Object.assign(Object.assign({},n._f),o?{refs:[...u.filter(_e),t],ref:{type:t.type,name:e}}:{ref:t})}),C(e,!1,void 0,t)}else n=m(s,e,{}),n._f&&(n._f.mount=!1),(t.shouldUnregister||r.shouldUnregister)&&(!c(p.array,e)||!_.action)&&p.unMount.add(e)}})};return{control:{register:ee,unregister:Z,getFieldState:X,_executeSchema:N,_getWatch:I,_getDirty:R,_updateValid:w,_removeUnmounted:()=>{for(const e of p.unMount){const t=m(s,e);t&&(t._f.refs?t._f.refs.every((e=>!_e(e))):!_e(t._f.ref))&&Z(e)}p.unMount=new Set},_updateFieldArray:(e,t=[],a,n,i=!0,o=!0)=>{if(n&&a){if(_.action=!0,o&&Array.isArray(m(s,e))){const t=a(m(s,e),n.argA,n.argB);i&&J(s,e,t)}if(F.errors&&o&&Array.isArray(m(r.errors,e))){const t=a(m(r.errors,e),n.argA,n.argB);i&&J(r.errors,e,t),((e,t)=>{!d(m(e,t)).length&&pe(e,t)})(r.errors,e)}if(F.touchedFields&&o&&Array.isArray(m(r.touchedFields,e))){const t=a(m(r.touchedFields,e),n.argA,n.argB);i&&J(r.touchedFields,e,t)}F.dirtyFields&&(r.dirtyFields=Ae(b,h)),j.state.next({isDirty:R(e,t),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else J(h,e,t)},_getFieldArray:t=>d(m(_.mount?h:b,t,e.shouldUnregister?m(b,t,[]):[])),_subjects:j,_proxyFormState:F,_utilities:o,get _fields(){return s},get _formValues(){return h},get _stateFlags(){return _},set _stateFlags(e){_=e},get _defaultValues(){return b},get _names(){return p},set _names(e){p=e},get _formState(){return r},set _formState(e){r=e},get _options(){return t},set _options(e){t=Object.assign(Object.assign({},t),e)}},trigger:G,register:ee,handleSubmit:(e,a)=>async n=>{n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let i=!0,u=o.clone(h);j.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:e,values:t}=await N();r.errors=e,u=t}else await M(s);U(r.errors)&&Object.keys(r.errors).every((e=>m(u,e)))?(j.state.next({errors:{},isSubmitting:!0}),await e(u,n)):(a&&await a(Object.assign({},r.errors),n),t.shouldFocusError&&K(s,(e=>m(r.errors,e)),p.mount))}catch(e){throw i=!1,e}finally{r.isSubmitted=!0,j.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors)&&i,submitCount:r.submitCount+1,errors:r.errors})}},watch:(e,t)=>W(e)?j.watch.subscribe({next:r=>e(I(void 0,t),r)}):I(e,t,!0),setValue:H,getValues:Q,reset:(t,a={})=>{const n=t||b,i=o.clone(n),u=t&&!U(t)?i:b;if(a.keepDefaultValues||(b=n),!a.keepValues){if(he&&f(t))for(const e of p.mount){const t=m(s,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{ge(e)&&e.closest("form").reset();break}catch(e){}}}h=e.shouldUnregister?a.keepDefaultValues?o.clone(b):{}:i,s={},j.array.next({values:u}),j.watch.next({values:u})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},_.mount=!F.isValid||!!a.keepIsValid,_.watch=!!e.shouldUnregister,j.state.next({submitCount:a.keepSubmitCount?r.submitCount:0,isDirty:a.keepDirty?r.isDirty:!!a.keepDefaultValues&&!ce(t,b),isSubmitted:!!a.keepIsSubmitted&&r.isSubmitted,dirtyFields:a.keepDirty?r.dirtyFields:a.keepDefaultValues&&t?Object.entries(t).reduce(((e,[t,r])=>Object.assign(Object.assign({},e),{[t]:r!==m(b,t)})),{}):{},touchedFields:a.keepTouched?r.touchedFields:{},errors:a.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{m(s,e)&&(f(t.defaultValue)?H(e,m(b,e)):(H(e,t.defaultValue),J(b,e,t.defaultValue)),t.keepTouched||pe(r.touchedFields,e),t.keepDirty||(pe(r.dirtyFields,e),r.isDirty=t.defaultValue?R(e,m(b,e)):R()),t.keepError||(pe(r.errors,e),F.isValid&&w()),j.state.next(Object.assign({},r)))},clearErrors:e=>{e?T(e).forEach((e=>pe(r.errors,e))):r.errors={},j.state.next({errors:r.errors})},unregister:Z,setError:(e,t,a)=>{const n=(m(s,e,{_f:{}})._f||{}).ref;J(r.errors,e,Object.assign(Object.assign({},t),{ref:n})),j.state.next({name:e,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&n&&n.focus&&n.focus()},setFocus:(e,t={})=>{const r=m(s,e)._f,a=r.refs?r.refs[0]:r.ref;t.shouldSelect?a.select():a.focus()},getFieldState:X}}e.Controller=e=>e.render($(e)),e.FormProvider=e=>s.default.createElement(D.Provider,{value:k(e,"children")},e.children),e.appendErrors=H,e.get=m,e.set=J,e.useController=$,e.useFieldArray=function(e){const t=C(),{control:r=t.control,name:a,keyName:n="id",shouldUnregister:i}=e,[o,u]=s.default.useState(r._getFieldArray(a)),l=s.default.useRef(r._getFieldArray(a).map(Q)),c=s.default.useRef(o),d=s.default.useRef(a),f=s.default.useRef(!1);d.current=a,c.current=o,r._names.array.add(a),M({callback:s.default.useCallback((({values:e,name:t})=>{if(t===d.current||!t){const t=m(e,d.current,[]);u(t),l.current=t.map(Q)}}),[]),subject:r._subjects.array});const g=s.default.useCallback((e=>{f.current=!0,r._updateFieldArray(a,e)}),[r,a]);return s.default.useEffect((()=>{r._stateFlags.action=!1,Y(a,r._names)&&r._subjects.state.next({}),f.current&&r._executeSchema([a]).then((e=>{const t=m(e.errors,a);t&&t.type&&!m(r._formState.errors,a)&&(J(r._formState.errors,a,t),r._subjects.state.next({errors:r._formState.errors}))})),r._subjects.watch.next({name:a,values:r._formValues}),r._names.focus&&K(r._fields,(e=>e.startsWith(r._names.focus))),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()}),[o,a,r]),s.default.useEffect((()=>(!m(r._formValues,a)&&r._updateFieldArray(a),()=>{(r._options.shouldUnregister||i)&&r.unregister(a)})),[a,r,n,i]),{swap:s.default.useCallback(((e,t)=>{const s=r._getFieldArray(a);ne(s,e,t),ne(l.current,e,t),g(s),u(s),r._updateFieldArray(a,s,ne,{argA:e,argB:t},!1)}),[g,a,r]),move:s.default.useCallback(((e,t)=>{const s=r._getFieldArray(a);re(s,e,t),re(l.current,e,t),g(s),u(s),r._updateFieldArray(a,s,re,{argA:e,argB:t},!1)}),[g,a,r]),prepend:s.default.useCallback(((e,t)=>{const s=T(r._utilities.clone(e)),n=se(r._getFieldArray(a),s);r._names.focus=X(a,0,t),l.current=se(l.current,s.map(Q)),g(n),u(n),r._updateFieldArray(a,n,se,{argA:ee(e)})}),[g,a,r]),append:s.default.useCallback(((e,t)=>{const s=T(r._utilities.clone(e)),n=Z(r._getFieldArray(a),s);r._names.focus=X(a,n.length-1,t),l.current=Z(l.current,s.map(Q)),g(n),u(n),r._updateFieldArray(a,n,Z,{argA:ee(e)})}),[g,a,r]),remove:s.default.useCallback((e=>{const t=ae(r._getFieldArray(a),e);l.current=ae(l.current,e),g(t),u(t),r._updateFieldArray(a,t,ae,{argA:e})}),[g,a,r]),insert:s.default.useCallback(((e,t,s)=>{const n=T(r._utilities.clone(t)),i=te(r._getFieldArray(a),e,n);r._names.focus=X(a,e,s),l.current=te(l.current,e,n.map(Q)),g(i),u(i),r._updateFieldArray(a,i,te,{argA:e,argB:ee(t)})}),[g,a,r]),update:s.default.useCallback(((e,t)=>{const s=r._utilities.clone(t),n=ie(r._getFieldArray(a),e,s);l.current=[...n].map(((t,r)=>t&&r!==e?l.current[r]:Q())),g(n),u([...n]),r._updateFieldArray(a,n,ie,{argA:e,argB:s},!0,!1)}),[g,a,r]),replace:s.default.useCallback((e=>{const t=T(r._utilities.clone(e));l.current=t.map(Q),g([...t]),u([...t]),r._updateFieldArray(a,[...t],(e=>e),{},!0,!1)}),[g,a,r]),fields:s.default.useMemo((()=>o.map(((e,t)=>Object.assign(Object.assign({},e),{[n]:l.current[t]||Q()})))),[o,n])}},e.useForm=function(e={}){const t=s.default.useRef(),[r,a]=s.default.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current=Object.assign(Object.assign({},Re(e)),{formState:r});const n=t.current.control,i=s.default.useCallback((e=>{B(e,n._proxyFormState,!0)&&(n._formState=Object.assign(Object.assign({},n._formState),e),a(Object.assign({},n._formState)))}),[n]);return M({subject:n._subjects.state,callback:i}),s.default.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),t.current.formState=E(r,n._proxyFormState),t.current},e.useFormContext=C,e.useFormState=R,e.useWatch=P,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
