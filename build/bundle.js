var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,o){if(t){const r=l(t,e,n,o);return t[0](r)}}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function i(t,e,n,o,r,c,s){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(i){const r=l(e,n,o,s);t.p(r,i)}}let a,u=!1;function f(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function d(t,e){u?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=f(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const s=c+1;n[s]=t,r=Math.max(s,r)}const c=[],s=[];let l=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);l>=t;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<c.length&&s[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(s[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function $(t,e,n){u&&!n?d(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function v(){return g("")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t){a=t}function b(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const k=[],x=[],j=[],T=[],O=Promise.resolve();let N=!1;function E(t){j.push(t)}let S=!1;const C=new Set;function M(){if(!S){S=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];_(e),P(e.$$)}for(_(null),k.length=0;x.length;)x.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];C.has(e)||(C.add(e),e())}j.length=0}while(k.length);for(;T.length;)T.pop()();N=!1,S=!1,C.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const A=new Set;let L;function q(){L={r:0,c:[],p:L}}function H(){L.r||o(L.c),L=L.p}function I(t,e){t&&t.i&&(A.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),L.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function G(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function R(t){t&&t.c()}function B(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),s||E((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(E)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(k.push(t),N||(N=!0,O.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,r,c,s,l,i,f=[-1]){const d=a;_(e);const $=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let p=!1;if($.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),p&&F(e,t)),n})):[],$.update(),p=!0,o($.before_update),$.fragment=!!s&&s($.ctx),r.target){if(r.hydrate){u=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(h)}else $.fragment&&$.fragment.c();r.intro&&I(e.$$.fragment),B(e,r.target,r.anchor,r.customElement),u=!1,M()}_(d)}class U{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let n,o;return{c(){n=p("span"),w(n,"class",o="icon icon-inline icon-c-clickable icon-"+e[0])},m(t,e){$(t,n,e)},p(t,[e]){1&e&&o!==(o="icon icon-inline icon-c-clickable icon-"+t[0])&&w(n,"class",o)},i:t,o:t,d(t){t&&h(n)}}}function K(t,e,n){let{icon:o}=e;return t.$$set=t=>{"icon"in t&&n(0,o=t.icon)},[o]}class Q extends U{constructor(t){super(),z(this,t,K,J,c,{icon:0})}}function V(t){let e,n,o,r,c,l,a;o=new Q({props:{icon:"tree-menu-shown"}});const u=t[2].default,f=s(u,t,t[1],null);return{c(){e=p("div"),n=p("h4"),R(o.$$.fragment),r=m(),c=g(t[0]),l=m(),f&&f.c(),w(n,"class","section-title svelte-aoafhk")},m(t,s){$(t,e,s),d(e,n),B(o,n,null),d(n,r),d(n,c),d(e,l),f&&f.m(e,null),a=!0},p(t,[e]){(!a||1&e)&&y(c,t[0]),f&&f.p&&(!a||2&e)&&i(f,u,t,t[1],a?e:-1,null,null)},i(t){a||(I(o.$$.fragment,t),I(f,t),a=!0)},o(t){D(o.$$.fragment,t),D(f,t),a=!1},d(t){t&&h(e),W(o),f&&f.d(t)}}}function X(t,e,n){let{$$slots:o={},$$scope:r}=e,{title:c}=e;return t.$$set=t=>{"title"in t&&n(0,c=t.title),"$$scope"in t&&n(1,r=t.$$scope)},[c,r,o]}class Y extends U{constructor(t){super(),z(this,t,X,V,c,{title:0})}}const Z=[];function tt(t){const e=Object.create(null);for(const[n,o]of t)e[n]=o;return e}const et=Symbol("watchers key");function nt(t,e){return null==t&&null==e||Object.is(t,e)}class ot{constructor(t,e){this._path=[],this._stateManager=t;for(const t of e)".."===t?this._path.pop():"."===t||this._path.push(t)}ref(...t){return new ot(this._stateManager,[...this._path,...t])}watch(t,e){this._stateManager.watch(t,e,this._path.join("/"))}unwatch(t){this._stateManager.unwatch(t)}}class rt{constructor(){this._watchers=new Map,this._watcherTreeRoot=Object.create(null),this._data=void 0}ref(...t){return new ot(this,t)}get(...t){if(t.includes("/"))throw Error('Path cannot contain "/", split into varargs.');let e=this._data;for(;e&&t.length;)e=e[t.shift()];return e}watch(t,e,...n){let o=this._watchers.get(t);null==o&&(o=new Set,this._watchers.set(t,o));for(const o of n)this._watchPattern(t,e,o)}unwatch(t){if(!this._watchers.has(t))throw Error("Cannot find watcher.");const e=this._watchers.get(t);this._watchers.delete(t);for(const n of e)if(!rt._unwatchPattern(t,this._watcherTreeRoot,n.split("/")))throw Error(`Failed to remove watcher from pattern: ${n}.`)}update(t){if("object"!=typeof t)throw Error(`Invalid update object: ${t}`);let e=!1;const n=[],o=[];for(const[r,c]of Object.entries(t)){if(0>=r.length)throw Error("Update key cannot be empty.");const t=r.split("/"),{data:s,redo:l,undo:i}=rt._updateInternal(this._data,c,t,[],[this._watcherTreeRoot]);nt(this._data,s)||(e=!0,this._data=s,n.push(...l),o.push(...i))}return e?{redo:tt(n),undo:tt(o)}:null}_watchPattern(t,e,n){if(!n||0>=n.length)throw Error(`Pattern cannot be empty: ${n}.`);const o=n.split("/");let r=this._watcherTreeRoot;for(const t of o)Object.prototype.hasOwnProperty.call(r,t)||(r[t]=Object.create(null)),r=r[t];(r[et]||(r[et]=new Set)).add(t),e&&rt._triggerNow(this._data,o,[],t)}static _unwatchPattern(t,e,n){if(0===n.length){const n=e[et];return null!=n&&(!!n.delete(t)&&(0>=n.size&&delete e[et],!0))}const[o,...r]=n;return!!Object.prototype.hasOwnProperty.call(e,o)&&(!!this._unwatchPattern(t,e[o],r)&&(0>=Object.keys(e[o]).length&&null==e[et]&&delete e[o],!0))}static _triggerNow(t,e,n,o){if(null==t)return;if(0>=e.length)return void o(n,null,t);if("object"!=typeof t)return;const[r,...c]=e;if("*"===r)for(const[e,r]of Object.entries(t))this._triggerNow(r,c,[...n,e],o);else Object.prototype.hasOwnProperty.call(t,r)&&this._triggerNow(t[r],c,[...n,r],o)}static _updateInternal(t,e,n,o,r){const c=0>=n.length,s="object"==typeof t?t:null,l="object"==typeof e?e:null,{data:i,redo:a,undo:u}=(()=>{if(c){if(null==s&&null==l)return{data:e,undo:[],redo:[]};const n=new Set([...Object.keys(s||{}),...Object.keys(l||{})]);let c=!1;const i=Object.create(null),a=[],u=[];for(const t of n){const e=s&&s[t]||null,n=l&&l[t]||null,f=rt._nextWatcherTrees(t,r),{data:d,redo:$,undo:h}=rt._updateInternal(e,n,[],[...o,t],f);nt(e,d)||(c=!0,a.push(...$),u.push(...h),null!=l&&Object.prototype.hasOwnProperty.call(l,t)&&(i[t]=d))}return c?0>=Object.keys(i).length?{data:e,redo:a,undo:u}:{data:Object.assign(Object.create(null),s,i),redo:a,undo:u}:{data:t,redo:a,undo:u}}const[i,...a]=n,u=s&&s[i]||null,f=rt._nextWatcherTrees(i,r),{data:d,redo:$,undo:h}=rt._updateInternal(u,e,a,[...o,i],f);return nt(u,d)?{data:t,redo:$,undo:h}:{data:Object.assign(Object.create(null),s,{[i]:d}),redo:$,undo:h}})();if(!nt(t,i)){if(null==t){if(null==i)throw"N/A";"object"==typeof i||(a.length=0,a.push([o.join("/"),i]),u.length=0,u.push([o.join("/"),null]))}else"object"==typeof t?null==i||"object"==typeof i||(a.length=0,a.push([o.join("/"),i])):null==i?(a.length=0,a.push([o.join("/"),null]),u.length=0,u.push([o.join("/"),t])):"object"==typeof i?(u.length=0,u.push([o.join("/"),t])):(a.length=0,a.push([o.join("/"),null]),u.length=0,u.push([o.join("/"),t]));for(const e of r)for(const n of e[et]||[])n(o,t,i);return{data:i,undo:u,redo:a}}return{data:t,undo:u,redo:a}}static _nextWatcherTrees(t,e){const n=[];for(const o of e)o["*"]&&n.push(o["*"]),o[t]&&n.push(o[t]);return n}}function ct(t){let e,n,o,r,c,l,a,u;o=new Q({props:{icon:"trash"}});const f=t[2].default,v=s(f,t,t[1],null);return{c(){e=p("div"),n=p("div"),R(o.$$.fragment),r=m(),c=g(t[0]),l=m(),a=p("div"),v&&v.c(),w(n,"class","constraint-row-left svelte-1kmaedl"),w(a,"class","constraint-row-right svelte-1kmaedl"),w(e,"class","constraint-row svelte-1kmaedl")},m(t,s){$(t,e,s),d(e,n),B(o,n,null),d(n,r),d(n,c),d(e,l),d(e,a),v&&v.m(a,null),u=!0},p(t,[e]){(!u||1&e)&&y(c,t[0]),v&&v.p&&(!u||2&e)&&i(v,f,t,t[1],u?e:-1,null,null)},i(t){u||(I(o.$$.fragment,t),I(v,t),u=!0)},o(t){D(o.$$.fragment,t),D(v,t),u=!1},d(t){t&&h(e),W(o),v&&v.d(t)}}}function st(t,e,n){let{$$slots:o={},$$scope:r}=e,{name:c}=e;return t.$$set=t=>{"name"in t&&n(0,c=t.name),"$$scope"in t&&n(1,r=t.$$scope)},[c,r,o]}class lt extends U{constructor(t){super(),z(this,t,st,ct,c,{name:0})}}function it(t){let e,n,o,r,c,s,l,i,a,u,f;return o=new Q({props:{icon:t[1]}}),{c(){e=p("div"),n=p("label"),R(o.$$.fragment),r=m(),c=p("span"),s=g(t[0]),l=m(),i=p("input"),w(c,"class","sr-only"),w(n,"for","toggle-"+ ++at),w(n,"title",t[0]),w(i,"id","toggle-"+at),w(i,"type","checkbox"),i.checked=t[2],w(e,"class","constraint-toggle svelte-h67gfh")},m(h,p){var g,m,v,w;$(h,e,p),d(e,n),B(o,n,null),d(n,r),d(n,c),d(c,s),d(e,l),d(e,i),a=!0,u||(g=i,m="input",v=t[3],g.addEventListener(m,v,w),f=()=>g.removeEventListener(m,v,w),u=!0)},p(t,[e]){const r={};2&e&&(r.icon=t[1]),o.$set(r),(!a||1&e)&&y(s,t[0]),(!a||1&e)&&w(n,"title",t[0]),(!a||4&e)&&(i.checked=t[2])},i(t){a||(I(o.$$.fragment,t),a=!0)},o(t){D(o.$$.fragment,t),a=!1},d(t){t&&h(e),W(o),u=!1,f()}}}let at=0;function ut(t,e,n){let{name:o}=e,{icon:r}=e,{checked:c}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name),"icon"in t&&n(1,r=t.icon),"checked"in t&&n(2,c=t.checked)},[o,r,c,function(e){b.call(this,t,e)}]}class ft extends U{constructor(t){super(),z(this,t,ut,it,c,{name:0,icon:1,checked:2})}}function dt(t){let e,n,o,r;return e=new ft({props:{name:"Toggle Positive Diagonal",icon:"positive-diagonal",checked:t[0].positive}}),o=new ft({props:{name:"Toggle Negative Diagonal",icon:"negative-diagonal",checked:t[0].negative}}),{c(){R(e.$$.fragment),n=m(),R(o.$$.fragment)},m(t,c){B(e,t,c),$(t,n,c),B(o,t,c),r=!0},p(t,n){const r={};1&n&&(r.checked=t[0].positive),e.$set(r);const c={};1&n&&(c.checked=t[0].negative),o.$set(c)},i(t){r||(I(e.$$.fragment,t),I(o.$$.fragment,t),r=!0)},o(t){D(e.$$.fragment,t),D(o.$$.fragment,t),r=!1},d(t){W(e,t),t&&h(n),W(o,t)}}}function $t(t){let e,n;return e=new lt({props:{name:"Diagonals",$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function ht(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}function pt(t){let e,n;return e=new ft({props:{name:"Toggle Anitknight Constraint",icon:"knight",checked:t[0]}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.checked=t[0]),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function gt(t){let e,n;return e=new lt({props:{name:"Antiknight",$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function mt(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}function vt(t){let e,n;return e=new ft({props:{name:"Toggle Antiking Constraint",icon:"king",checked:t[0]}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.checked=t[0]),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function wt(t){let e,n;return e=new lt({props:{name:"Antiking",$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function yt(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}function _t(t){let e,n;return e=new ft({props:{name:"Toggle Disjoint Groups Constraint",icon:"disjoint",checked:t[0]}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.checked=t[0]),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function bt(t){let e,n;return e=new lt({props:{name:"Disjoint Groups",$$slots:{default:[_t]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function kt(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}function xt(t){let e,n;return e=new ft({props:{name:"Toggle Nonconsecutive Constraint",icon:"nonconsecutive",checked:t[0]}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.checked=t[0]),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function jt(t){let e,n;return e=new lt({props:{name:"Nonconsecutive",$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(t,o){B(e,t,o),n=!0},p(t,[n]){const o={};3&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Tt(t,e,n){let{value:o}=e;return t.$$set=t=>{"value"in t&&n(0,o=t.value)},[o]}const Ot=window.boardState=new rt,Nt=function(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!Z.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,l=t){const i=[c,l];return r.push(i),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}([]),Et={diagonal:class extends U{constructor(t){super(),z(this,t,ht,$t,c,{value:0})}},knight:class extends U{constructor(t){super(),z(this,t,mt,gt,c,{value:0})}},king:class extends U{constructor(t){super(),z(this,t,yt,wt,c,{value:0})}},disjointGroups:class extends U{constructor(t){super(),z(this,t,kt,bt,c,{value:0})}},consecutive:class extends U{constructor(t){super(),z(this,t,Tt,jt,c,{value:0})}}};function St(t,e,n){const o=t.slice();return o[1]=e[n].id,o[2]=e[n].value,o[3]=e[n].component,o}function Ct(t){let e;return{c(){e=g("Nothing Here!")},m(t,n){$(t,e,n)},d(t){t&&h(e)}}}function Mt(t,e){let n,o,r,c;var s=e[3];function l(t){return{props:{value:t[2]}}}return s&&(o=new s(l(e))),{key:t,first:null,c(){n=v(),o&&R(o.$$.fragment),r=v(),this.first=n},m(t,e){$(t,n,e),o&&B(o,t,e),$(t,r,e),c=!0},p(t,n){e=t;const c={};if(1&n&&(c.value=e[2]),s!==(s=e[3])){if(o){q();const t=o;D(t.$$.fragment,1,0,(()=>{W(t,1)})),H()}s?(o=new s(l(e)),R(o.$$.fragment),I(o.$$.fragment,1),B(o,r.parentNode,r)):o=null}else s&&o.$set(c)},i(t){c||(o&&I(o.$$.fragment,t),c=!0)},o(t){o&&D(o.$$.fragment,t),c=!1},d(t){t&&h(n),t&&h(r),o&&W(o,t)}}}function Pt(t){let e,n,o=[],r=new Map,c=t[0];const s=t=>t[1];for(let e=0;e<c.length;e+=1){let n=St(t,c,e),l=s(n);r.set(l,o[e]=Mt(l,n))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=v()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);$(t,e,r),n=!0},p(t,n){1&n&&(c=t[0],q(),o=function(t,e,n,o,r,c,s,l,i,a,u,f){let d=t.length,$=c.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const g=[],m=new Map,v=new Map;for(h=$;h--;){const t=f(r,c,h),l=n(t);let i=s.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),m.set(l,g[h]=i),l in p&&v.set(l,Math.abs(h-p[l]))}const w=new Set,y=new Set;function _(t){I(t,1),t.m(l,u),s.set(t.key,t),u=t.first,$--}for(;d&&$;){const e=g[$-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,$--):m.has(r)?!s.has(o)||w.has(o)?_(e):y.has(r)?d--:v.get(o)>v.get(r)?(y.add(o),_(e)):(w.add(r),d--):(i(n,s),d--)}for(;d--;){const e=t[d];m.has(e.key)||i(e,s)}for(;$;)_(g[$-1]);return g}(o,n,s,1,t,c,r,e.parentNode,G,Mt,e,St),H())},i(t){if(!n){for(let t=0;t<c.length;t+=1)I(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)D(o[t]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&h(e)}}}function At(t){let e;return{c(){e=p("ul"),e.innerHTML='<li><input type="radio" id="digitTool" name="localConstraints" checked=""/> \n                    <label for="digitTool">Digit</label></li> \n                <li><input type="radio" id="thermoTool" name="localConstraints"/> \n                    <label for="thermoTool">Thermo</label></li> \n                <li><input type="radio" id="arrowTool" name="localConstraints"/> \n                    <label for="arrowTool">Arrow</label></li> \n                <li><input type="radio" id="sandwichTool" name="localConstraints"/> \n                    <label for="sandwichTool">Sandwich</label></li>'},m(t,n){$(t,e,n)},d(t){t&&h(e)}}}function Lt(t){let e;return{c(){e=g("Nothing Here!")},m(t,n){$(t,e,n)},d(t){t&&h(e)}}}function qt(t){let e,n,o,r,c,s,l,i,a,u,f,g,v;return o=new Y({props:{title:"Solver Panel",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),s=new Y({props:{title:"Global Constraints",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),a=new Y({props:{title:"Local Constraints",$$slots:{default:[At]},$$scope:{ctx:t}}}),g=new Y({props:{title:"Cosmetic Tools",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=p("ul"),n=p("li"),R(o.$$.fragment),r=m(),c=p("li"),R(s.$$.fragment),l=m(),i=p("li"),R(a.$$.fragment),u=m(),f=p("li"),R(g.$$.fragment),w(e,"class","nolist")},m(t,h){$(t,e,h),d(e,n),B(o,n,null),d(e,r),d(e,c),B(s,c,null),d(e,l),d(e,i),B(a,i,null),d(e,u),d(e,f),B(g,f,null),v=!0},p(t,[e]){const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};65&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const c={};64&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c);const l={};64&e&&(l.$$scope={dirty:e,ctx:t}),g.$set(l)},i(t){v||(I(o.$$.fragment,t),I(s.$$.fragment,t),I(a.$$.fragment,t),I(g.$$.fragment,t),v=!0)},o(t){D(o.$$.fragment,t),D(s.$$.fragment,t),D(a.$$.fragment,t),D(g.$$.fragment,t),v=!1},d(t){t&&h(e),W(o),W(s),W(a),W(g)}}}function Ht(t,e,n){let o=[];return Nt.subscribe((t=>n(0,o=t))),[o]}Ot.update({grid:{width:9,height:9},constraints:{10800:{type:"diagonal",value:{positive:!0,negative:!1},meta:{order:0}},10090:{type:"knight",value:!1,meta:{order:1}},10100:{type:"king",value:!1,meta:{order:2}},10110:{type:"disjointGroups",value:!1,meta:{order:3}},10120:{type:"consecutive",value:!1,meta:{order:4}}}}),Ot.watch((([t,e],n,o)=>{if(null==o)return void Nt.update((t=>t.filter((({id:t})=>e!==t))));const r={id:e,value:o.value,component:Et[o.type]};Nt.update((t=>{if(null==n)t.push(r);else{const n=t.findIndex((({id:t})=>e===t));if(0>n)throw Error(`Failed to find constraint with id ${e} in list.`);t[n]=r}return t}))}),!0,"constraints/*");class It extends U{constructor(t){super(),z(this,t,Ht,qt,c,{})}}function Dt(e){let n,o,r,c,s;return{c(){n=p("div"),n.innerHTML='<ul class="header-buttons left svelte-tt0eff"><li>Solving/Setting</li> \n        <li>New Grid</li> \n        <li>Export</li></ul>',o=m(),r=p("div"),r.innerHTML='<h1 class="svelte-tt0eff">Double Agent</h1> \n    <div class="setter svelte-tt0eff">by echoes and TauCeti Deichmann</div>',c=m(),s=p("div"),s.innerHTML='<ul class="header-buttons right svelte-tt0eff"><li>Light/dark</li> \n        <li>Help</li> \n        <li>Settings</li></ul>',w(n,"class","header-left svelte-tt0eff"),w(r,"class","header-center svelte-tt0eff"),w(s,"class","header-right svelte-tt0eff")},m(t,e){$(t,n,e),$(t,o,e),$(t,r,e),$(t,c,e),$(t,s,e)},p:t,i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(r),t&&h(c),t&&h(s)}}}class Gt extends U{constructor(t){super(),z(this,t,null,Dt,c,{})}}function Rt(e){let n,o,r,c,s,l,i,a,u,f,g,v,y,_,b,k,x;return c=new Gt({}),f=new It({}),{c(){n=p("header"),o=p("div"),r=p("div"),R(c.$$.fragment),s=m(),l=p("main"),i=p("div"),a=p("div"),u=p("div"),R(f.$$.fragment),g=m(),v=p("div"),v.innerHTML='<img src="svg/example-grid.svg" alt="Sudoku Grid"/>',y=m(),_=p("div"),_.textContent="RIGHT PANEL",b=m(),k=p("footer"),k.textContent="SudokuStudio",w(r,"class","content-row"),w(o,"class","content"),w(n,"class","svelte-q96pc2"),w(u,"class","left-panel svelte-q96pc2"),w(v,"class","center-panel svelte-q96pc2"),w(_,"class","right-panel svelte-q96pc2"),w(a,"class","content-row svelte-q96pc2"),w(i,"class","content svelte-q96pc2"),w(l,"class","svelte-q96pc2"),w(k,"class","svelte-q96pc2")},m(t,e){$(t,n,e),d(n,o),d(o,r),B(c,r,null),$(t,s,e),$(t,l,e),d(l,i),d(i,a),d(a,u),B(f,u,null),d(a,g),d(a,v),d(a,y),d(a,_),$(t,b,e),$(t,k,e),x=!0},p:t,i(t){x||(I(c.$$.fragment,t),I(f.$$.fragment,t),x=!0)},o(t){D(c.$$.fragment,t),D(f.$$.fragment,t),x=!1},d(t){t&&h(n),W(c),t&&h(s),t&&h(l),W(f),t&&h(b),t&&h(k)}}}return new class extends U{constructor(t){super(),z(this,t,null,Rt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
