var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=l(e,n,r,c);t.p(o,i)}}let a,u=!1;function f(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function d(t,e){u?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let t=0;t<e.length;t++){const s=f(1,o+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;r[t]=n[s]+1;const c=s+1;n[c]=t,o=Math.max(c,o)}const s=[],c=[];let l=e.length-1;for(let t=n[o]+1;0!=t;t=r[t-1]){for(s.push(e[t-1]);l>=t;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);s.reverse(),c.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<c.length;e++){for(;n<s.length&&c[e].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;t.insertBefore(c[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function $(t,e,n){u&&!n?d(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function w(){return g("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e,n){t.classList[n?"add":"remove"](e)}function x(t){a=t}function j(t){(function(){if(!a)throw new Error("Function called outside component initialization");return a})().$$.on_destroy.push(t)}const k=[],T=[],O=[],E=[],N=Promise.resolve();let C=!1;function S(t){O.push(t)}let M=!1;const P=new Set;function A(){if(!M){M=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),L(e.$$)}for(x(null),k.length=0;T.length;)T.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];P.has(e)||(P.add(e),e())}O.length=0}while(k.length);for(;E.length;)E.pop()();C=!1,M=!1,P.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const q=new Set;let H;function I(){H={r:0,c:[],p:H}}function D(){H.r||r(H.c),H=H.p}function G(t,e){t&&t.i&&(q.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),H.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function R(t,e){z(t,1,1,(()=>{e.delete(t.key)}))}function B(t){t&&t.c()}function F(t,n,s,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,s),c||S((()=>{const n=i.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(S)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,N.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,o,s,c,l,i,f=[-1]){const d=a;x(e);const $=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let h=!1;if($.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return $.ctx&&l($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),h&&U(e,t)),n})):[],$.update(),h=!0,r($.before_update),$.fragment=!!c&&c($.ctx),o.target){if(o.hydrate){u=!0;const t=function(t){return Array.from(t.childNodes)}(o.target);$.fragment&&$.fragment.l(t),t.forEach(p)}else $.fragment&&$.fragment.c();o.intro&&G(e.$$.fragment),F(e,o.target,o.anchor,o.customElement),u=!1,A()}x(d)}class K{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){let e,n,r,o,s,l,a,u,f,w;const x=t[4].default,j=c(x,t,t[3],null);return{c(){e=h("div"),n=h("button"),r=h("span"),o=m(),s=g(t[1]),l=m(),a=h("div"),j&&j.c(),v(r,"class","tree-menu icon icon-inline icon-c-clickable icon-tree-menu svelte-6zcc"),v(n,"class","section-title svelte-6zcc"),v(a,"class","panel svelte-6zcc"),v(e,"class","svelte-6zcc"),b(e,"closed",t[0])},m(c,i){$(c,e,i),d(e,n),d(n,r),d(n,o),d(n,s),d(e,l),d(e,a),j&&j.m(a,null),u=!0,f||(w=y(n,"click",t[2]),f=!0)},p(t,[n]){(!u||2&n)&&_(s,t[1]),j&&j.p&&(!u||8&n)&&i(j,x,t,t[3],u?n:-1,null,null),1&n&&b(e,"closed",t[0])},i(t){u||(G(j,t),u=!0)},o(t){z(j,t),u=!1},d(t){t&&p(e),j&&j.d(t),f=!1,w()}}}function V(t,e,n){let{$$slots:r={},$$scope:o}=e,{title:s}=e,{closed:c=!1}=e;return t.$$set=t=>{"title"in t&&n(1,s=t.title),"closed"in t&&n(0,c=t.closed),"$$scope"in t&&n(3,o=t.$$scope)},[c,s,function(){n(0,c=!c)},o,r]}class X extends K{constructor(t){super(),J(this,t,V,Q,s,{title:1,closed:0})}}function Y(t){const e=Object.create(null);for(const[n,r]of t)e[n]=r;return e}const Z=Symbol("watchers key");function tt(t,e){return null==t&&null==e||Object.is(t,e)}function et(t){return null==t?null:t}class nt{constructor(t,e){this._path=[],this._stateManager=t;for(const t of e)".."===t?this._path.pop():"."===t||this._path.push(t)}ref(...t){return new nt(this._stateManager,[...this._path,...t])}watch(t,e){return this._stateManager.watch(t,e,this._path.join("/")),t}unwatch(t){this._stateManager.unwatch(t)}replace(t){return this._stateManager.update({[this._path.join("/")]:t})}}class rt{constructor(){this._data=null,this._watchers=new Map,this._watcherTreeRoot=Object.create(null)}ref(...t){return new nt(this,t)}get(...t){if(t.includes("/"))throw Error('Path cannot contain "/", split into varargs.');let e=this._data;for(;e&&t.length;)e=e[t.shift()];return e}watch(t,e,...n){let r=this._watchers.get(t);null==r&&(r=new Set,this._watchers.set(t,r));for(const r of n)this._watchPattern(t,e,r);return t}unwatch(t){if(!this._watchers.has(t))throw Error("Cannot find watcher.");const e=this._watchers.get(t);this._watchers.delete(t);for(const n of e)if(!rt._unwatchPattern(t,this._watcherTreeRoot,n.split("/")))throw Error(`Failed to remove watcher from pattern: ${n}.`)}update(t){if("object"!=typeof t)throw Error(`Invalid update object: ${t}`);let e=!1;const n=[],r=[];for(const[o,s]of Object.entries(t)){if(0>=o.length)throw Error("Update key cannot be empty.");const t=o.split("/"),{data:c,redo:l,undo:i}=rt._updateInternal(this._data,s,t,[],[this._watcherTreeRoot]);tt(this._data,c)||(e=!0,this._data=c,n.push(...l),r.push(...i))}return e?{redo:Y(n),undo:Y(r)}:null}_watchPattern(t,e,n){if(!n||0>=n.length)throw Error(`Pattern cannot be empty: ${n}.`);const r=n.split("/");let o=this._watcherTreeRoot;for(const t of r)Object.prototype.hasOwnProperty.call(o,t)||(o[t]=Object.create(null)),o=o[t];(o[Z]||(o[Z]=new Set)).add(t),e&&rt._triggerNow(this._data,r,[],t)}static _unwatchPattern(t,e,n){if(0===n.length){const n=e[Z];return null!=n&&(!!n.delete(t)&&(0>=n.size&&delete e[Z],!0))}const[r,...o]=n;return!!Object.prototype.hasOwnProperty.call(e,r)&&(!!this._unwatchPattern(t,e[r],o)&&(0>=Object.keys(e[r]).length&&null==e[Z]&&delete e[r],!0))}static _triggerNow(t,e,n,r){if(null==t)return;if(0>=e.length)return void r(n,null,t);if("object"!=typeof t)return;const[o,...s]=e;if("*"===o)for(const[e,o]of Object.entries(t))this._triggerNow(o,s,[...n,e],r);else Object.prototype.hasOwnProperty.call(t,o)&&this._triggerNow(t[o],s,[...n,o],r)}static _updateInternal(t,e,n,r,o){const s=0>=n.length,c="object"==typeof t?t:null,l="object"==typeof e?e:null,{data:i,redo:a,undo:u}=(()=>{if(s){if(null==c&&null==l)return{data:e,undo:[],redo:[]};const n=new Set([...Object.keys(c||{}),...Object.keys(l||{})]);let s=!1;const i=Object.create(null),a=[],u=[];for(const t of n){const e=c?et(c[t]):null,n=l?et(l[t]):null,f=rt._nextWatcherTrees(t,o),{data:d,redo:$,undo:p}=rt._updateInternal(e,n,[],[...r,t],f);tt(e,d)||(s=!0,a.push(...$),u.push(...p),null!=l&&Object.prototype.hasOwnProperty.call(l,t)&&null!=d&&(i[t]=d))}return s?0>=Object.keys(i).length?{data:e,redo:a,undo:u}:{data:Object.assign(Object.create(null),c,i),redo:a,undo:u}:{data:t,redo:a,undo:u}}const[i,...a]=n,u=c?et(c[i]):null,f=rt._nextWatcherTrees(i,o),{data:d,redo:$,undo:p}=rt._updateInternal(u,e,a,[...r,i],f);if(tt(u,d))return{data:t,redo:$,undo:p};const h=Object.assign(Object.create(null),c,{[i]:d});return Object.values(h).every((t=>null==t))?{data:null,redo:$,undo:p}:{data:h,redo:$,undo:p}})();if(!tt(t,i)){if(null==t){if(null==i)throw"N/A";"object"==typeof i||(a.length=0,a.push([r.join("/"),i]),u.length=0,u.push([r.join("/"),null]))}else"object"==typeof t?null==i||"object"==typeof i||(a.length=0,a.push([r.join("/"),i])):null==i?(a.length=0,a.push([r.join("/"),null]),u.length=0,u.push([r.join("/"),t])):"object"==typeof i?(u.length=0,u.push([r.join("/"),t])):(a.length=0,a.push([r.join("/"),null]),u.length=0,u.push([r.join("/"),t]));for(const e of o)for(const n of e[Z]||[])n(r,t,i);return{data:i,undo:u,redo:a}}return{data:t,undo:u,redo:a}}static _nextWatcherTrees(t,e){const n=[];for(const r of e)r["*"]&&n.push(r["*"]),r[t]&&n.push(r[t]);return n}}function ot(e){let n,r;return{c(){n=h("span"),v(n,"class",r="icon icon-inline icon-c-clickable icon-"+e[0])},m(t,e){$(t,n,e)},p(t,[e]){1&e&&r!==(r="icon icon-inline icon-c-clickable icon-"+t[0])&&v(n,"class",r)},i:t,o:t,d(t){t&&p(n)}}}function st(t,e,n){let{icon:r}=e;return t.$$set=t=>{"icon"in t&&n(0,r=t.icon)},[r]}class ct extends K{constructor(t){super(),J(this,t,st,ot,s,{icon:0})}}function lt(t){let e,n,r,o,s,l,a,u;r=new ct({props:{icon:"trash"}});const f=t[2].default,w=c(f,t,t[1],null);return{c(){e=h("div"),n=h("div"),B(r.$$.fragment),o=m(),s=g(t[0]),l=m(),a=h("div"),w&&w.c(),v(n,"class","constraint-row-left svelte-1kmaedl"),v(a,"class","constraint-row-right svelte-1kmaedl"),v(e,"class","constraint-row svelte-1kmaedl")},m(t,c){$(t,e,c),d(e,n),F(r,n,null),d(n,o),d(n,s),d(e,l),d(e,a),w&&w.m(a,null),u=!0},p(t,[e]){(!u||1&e)&&_(s,t[0]),w&&w.p&&(!u||2&e)&&i(w,f,t,t[1],u?e:-1,null,null)},i(t){u||(G(r.$$.fragment,t),G(w,t),u=!0)},o(t){z(r.$$.fragment,t),z(w,t),u=!1},d(t){t&&p(e),W(r),w&&w.d(t)}}}function it(t,e,n){let{$$slots:r={},$$scope:o}=e,{name:s}=e;return t.$$set=t=>{"name"in t&&n(0,s=t.name),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class at extends K{constructor(t){super(),J(this,t,it,lt,s,{name:0})}}function ut(t){let e,n,r,o,s,c,l,i,a,u,f;return r=new ct({props:{icon:t[1]}}),{c(){e=h("div"),n=h("label"),B(r.$$.fragment),o=m(),s=h("span"),c=g(t[0]),l=m(),i=h("input"),v(s,"class","sr-only"),v(n,"for","toggle-"+ ++ft),v(n,"title",t[0]),v(i,"id","toggle-"+ft),v(i,"type","checkbox"),i.checked=t[2],v(e,"class","constraint-toggle svelte-h67gfh")},m(p,h){$(p,e,h),d(e,n),F(r,n,null),d(n,o),d(n,s),d(s,c),d(e,l),d(e,i),a=!0,u||(f=y(i,"input",t[3]),u=!0)},p(t,[e]){const o={};2&e&&(o.icon=t[1]),r.$set(o),(!a||1&e)&&_(c,t[0]),(!a||1&e)&&v(n,"title",t[0]),(!a||4&e)&&(i.checked=t[2])},i(t){a||(G(r.$$.fragment,t),a=!0)},o(t){z(r.$$.fragment,t),a=!1},d(t){t&&p(e),W(r),u=!1,f()}}}let ft=0;function dt(t,e,n){let r,{name:o}=e,{icon:s}=e,{ref:c}=e;const l=c.watch(((t,e,o)=>{n(2,r=o||!1)}),!0);return j((()=>c.unwatch(l))),t.$$set=t=>{"name"in t&&n(0,o=t.name),"icon"in t&&n(1,s=t.icon),"ref"in t&&n(4,c=t.ref)},[o,s,r,t=>{c.replace(t.currentTarget.checked)},c]}class $t extends K{constructor(t){super(),J(this,t,dt,ut,s,{name:0,icon:1,ref:4})}}function pt(t){let e,n,r,o;return e=new $t({props:{name:"Toggle Positive Diagonal",icon:"positive-diagonal",ref:t[0].ref("positive")}}),r=new $t({props:{name:"Toggle Negative Diagonal",icon:"negative-diagonal",ref:t[0].ref("negative")}}),{c(){B(e.$$.fragment),n=m(),B(r.$$.fragment)},m(t,s){F(e,t,s),$(t,n,s),F(r,t,s),o=!0},p(t,n){const o={};1&n&&(o.ref=t[0].ref("positive")),e.$set(o);const s={};1&n&&(s.ref=t[0].ref("negative")),r.$set(s)},i(t){o||(G(e.$$.fragment,t),G(r.$$.fragment,t),o=!0)},o(t){z(e.$$.fragment,t),z(r.$$.fragment,t),o=!1},d(t){W(e,t),t&&p(n),W(r,t)}}}function ht(t){let e,n;return e=new at({props:{name:"Diagonals",$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function gt(t,e,n){let{ref:r}=e;return t.$$set=t=>{"ref"in t&&n(0,r=t.ref)},[r]}function mt(t){let e,n;return e=new $t({props:{name:"Toggle Anitknight Constraint",icon:"knight",ref:t[0]}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.ref=t[0]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function wt(t){let e,n;return e=new at({props:{name:"Antiknight",$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function yt(t,e,n){let{ref:r}=e;return t.$$set=t=>{"ref"in t&&n(0,r=t.ref)},[r]}function vt(t){let e,n;return e=new $t({props:{name:"Toggle Antiking Constraint",icon:"king",ref:t[0]}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.ref=t[0]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function _t(t){let e,n;return e=new at({props:{name:"Antiking",$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function bt(t,e,n){let{ref:r}=e;return t.$$set=t=>{"ref"in t&&n(0,r=t.ref)},[r]}function xt(t){let e,n;return e=new $t({props:{name:"Toggle Disjoint Groups Constraint",icon:"disjoint",ref:t[0]}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.ref=t[0]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function jt(t){let e,n;return e=new at({props:{name:"Disjoint Groups",$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function kt(t,e,n){let{ref:r}=e;return t.$$set=t=>{"ref"in t&&n(0,r=t.ref)},[r]}function Tt(t){let e,n;return e=new $t({props:{name:"Toggle Nonconsecutive Constraint",icon:"nonconsecutive",ref:t[0]}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.ref=t[0]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Ot(t){let e,n;return e=new at({props:{name:"Nonconsecutive",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,[n]){const r={};3&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Et(t,e,n){let{ref:r}=e;return t.$$set=t=>{"ref"in t&&n(0,r=t.ref)},[r]}const Nt=window.boardState=new rt,Ct={diagonal:class extends K{constructor(t){super(),J(this,t,gt,ht,s,{ref:0})}},knight:class extends K{constructor(t){super(),J(this,t,yt,wt,s,{ref:0})}},king:class extends K{constructor(t){super(),J(this,t,bt,_t,s,{ref:0})}},disjointGroups:class extends K{constructor(t){super(),J(this,t,kt,jt,s,{ref:0})}},consecutive:class extends K{constructor(t){super(),J(this,t,Et,Ot,s,{ref:0})}}};function St(t,e,n){const r=t.slice();return r[1]=e[n].id,r[2]=e[n].ref,r[3]=e[n].component,r}function Mt(t){let e;return{c(){e=g("Nothing Here!")},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function Pt(t,e){let n,r,o,s;var c=e[3];function l(t){return{props:{ref:t[2]}}}return c&&(r=new c(l(e))),{key:t,first:null,c(){n=w(),r&&B(r.$$.fragment),o=w(),this.first=n},m(t,e){$(t,n,e),r&&F(r,t,e),$(t,o,e),s=!0},p(t,n){if(c!==(c=(e=t)[3])){if(r){I();const t=r;z(t.$$.fragment,1,0,(()=>{W(t,1)})),D()}c?(r=new c(l(e)),B(r.$$.fragment),G(r.$$.fragment,1),F(r,o.parentNode,o)):r=null}},i(t){s||(r&&G(r.$$.fragment,t),s=!0)},o(t){r&&z(r.$$.fragment,t),s=!1},d(t){t&&p(n),t&&p(o),r&&W(r,t)}}}function At(t){let e,n,r=[],o=new Map,s=t[0];const c=t=>t[1];for(let e=0;e<s.length;e+=1){let n=St(t,s,e),l=c(n);o.set(l,r[e]=Pt(l,n))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=w()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);$(t,e,o),n=!0},p(t,n){1&n&&(s=t[0],I(),r=function(t,e,n,r,o,s,c,l,i,a,u,f){let d=t.length,$=s.length,p=d;const h={};for(;p--;)h[t[p].key]=p;const g=[],m=new Map,w=new Map;for(p=$;p--;){const t=f(o,s,p),l=n(t);let i=c.get(l);i?r&&i.p(t,e):(i=a(l,t),i.c()),m.set(l,g[p]=i),l in h&&w.set(l,Math.abs(p-h[l]))}const y=new Set,v=new Set;function _(t){G(t,1),t.m(l,u),c.set(t.key,t),u=t.first,$--}for(;d&&$;){const e=g[$-1],n=t[d-1],r=e.key,o=n.key;e===n?(u=e.first,d--,$--):m.has(o)?!c.has(r)||y.has(r)?_(e):v.has(o)?d--:w.get(r)>w.get(o)?(v.add(r),_(e)):(y.add(o),d--):(i(n,c),d--)}for(;d--;){const e=t[d];m.has(e.key)||i(e,c)}for(;$;)_(g[$-1]);return g}(r,n,c,1,t,s,o,e.parentNode,R,Pt,e,St),D())},i(t){if(!n){for(let t=0;t<s.length;t+=1)G(r[t]);n=!0}},o(t){for(let t=0;t<r.length;t+=1)z(r[t]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&p(e)}}}function Lt(t){let e;return{c(){e=h("ul"),e.innerHTML='<li><input type="radio" id="digitTool" name="localConstraints" checked=""/> \n                    <label for="digitTool">Digit</label></li> \n                <li><input type="radio" id="thermoTool" name="localConstraints"/> \n                    <label for="thermoTool">Thermo</label></li> \n                <li><input type="radio" id="arrowTool" name="localConstraints"/> \n                    <label for="arrowTool">Arrow</label></li> \n                <li><input type="radio" id="sandwichTool" name="localConstraints"/> \n                    <label for="sandwichTool">Sandwich</label></li>'},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function qt(t){let e;return{c(){e=g("Nothing Here!")},m(t,n){$(t,e,n)},d(t){t&&p(e)}}}function Ht(t){let e,n,r,o,s,c,l,i,a,u,f,g,w;return r=new X({props:{title:"Solver Panel",$$slots:{default:[Mt]},$$scope:{ctx:t}}}),c=new X({props:{title:"Global Constraints",$$slots:{default:[At]},$$scope:{ctx:t}}}),a=new X({props:{title:"Local Constraints",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),g=new X({props:{title:"Cosmetic Tools",$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){e=h("ul"),n=h("li"),B(r.$$.fragment),o=m(),s=h("li"),B(c.$$.fragment),l=m(),i=h("li"),B(a.$$.fragment),u=m(),f=h("li"),B(g.$$.fragment),v(e,"class","nolist")},m(t,p){$(t,e,p),d(e,n),F(r,n,null),d(e,o),d(e,s),F(c,s,null),d(e,l),d(e,i),F(a,i,null),d(e,u),d(e,f),F(g,f,null),w=!0},p(t,[e]){const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const s={};64&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s);const l={};64&e&&(l.$$scope={dirty:e,ctx:t}),g.$set(l)},i(t){w||(G(r.$$.fragment,t),G(c.$$.fragment,t),G(a.$$.fragment,t),G(g.$$.fragment,t),w=!0)},o(t){z(r.$$.fragment,t),z(c.$$.fragment,t),z(a.$$.fragment,t),z(g.$$.fragment,t),w=!1},d(t){t&&p(e),W(r),W(c),W(a),W(g)}}}function It(t){const e=[];return Nt.ref("constraints/*").watch((([t,n],r,o)=>{if(null==o){const t=e.findIndex((({id:t})=>n===t));if(0>t)throw Error(`Failed to find constraint with id ${n}.`);delete e[t]}else{const s=Ct[o.type];if(null==s)throw Error(`Unknown constraint type: ${o.type}.`);null==r?e.push({id:n,ref:Nt.ref(t,n,"value"),component:s}):r.type!==o.type&&console.error("Cannot change type of constraint!")}}),!0),[e]}Nt.update({grid:{width:9,height:9},constraints:{10800:{type:"diagonal",value:{positive:!0,negative:!1},meta:{order:0}},10090:{type:"knight",value:!1,meta:{order:1}},10100:{type:"king",value:!1,meta:{order:2}},10110:{type:"disjointGroups",value:!1,meta:{order:3}},10120:{type:"consecutive",value:!1,meta:{order:4}}}});class Dt extends K{constructor(t){super(),J(this,t,It,Ht,s,{})}}function Gt(e){let n,r,o,s,c;return{c(){n=h("div"),n.innerHTML='<ul class="header-buttons left svelte-tt0eff"><li>Solving/Setting</li> \n        <li>New Grid</li> \n        <li>Export</li></ul>',r=m(),o=h("div"),o.innerHTML='<h1 class="svelte-tt0eff">Double Agent</h1> \n    <div class="setter svelte-tt0eff">by echoes and TauCeti Deichmann</div>',s=m(),c=h("div"),c.innerHTML='<ul class="header-buttons right svelte-tt0eff"><li>Light/dark</li> \n        <li>Help</li> \n        <li>Settings</li></ul>',v(n,"class","header-left svelte-tt0eff"),v(o,"class","header-center svelte-tt0eff"),v(c,"class","header-right svelte-tt0eff")},m(t,e){$(t,n,e),$(t,r,e),$(t,o,e),$(t,s,e),$(t,c,e)},p:t,i:t,o:t,d(t){t&&p(n),t&&p(r),t&&p(o),t&&p(s),t&&p(c)}}}class zt extends K{constructor(t){super(),J(this,t,null,Gt,s,{})}}function Rt(e){let n,r,o,s,c,l,i,a,u,f,g,w,y,_,b,x,j;return s=new zt({}),f=new Dt({}),{c(){n=h("header"),r=h("div"),o=h("div"),B(s.$$.fragment),c=m(),l=h("main"),i=h("div"),a=h("div"),u=h("div"),B(f.$$.fragment),g=m(),w=h("div"),w.innerHTML='<img src="svg/example-grid.svg" alt="Sudoku Grid"/>',y=m(),_=h("div"),_.textContent="RIGHT PANEL",b=m(),x=h("footer"),x.textContent="SudokuStudio",v(o,"class","content-row"),v(r,"class","content"),v(n,"class","svelte-q96pc2"),v(u,"class","left-panel svelte-q96pc2"),v(w,"class","center-panel svelte-q96pc2"),v(_,"class","right-panel svelte-q96pc2"),v(a,"class","content-row svelte-q96pc2"),v(i,"class","content svelte-q96pc2"),v(l,"class","svelte-q96pc2"),v(x,"class","svelte-q96pc2")},m(t,e){$(t,n,e),d(n,r),d(r,o),F(s,o,null),$(t,c,e),$(t,l,e),d(l,i),d(i,a),d(a,u),F(f,u,null),d(a,g),d(a,w),d(a,y),d(a,_),$(t,b,e),$(t,x,e),j=!0},p:t,i(t){j||(G(s.$$.fragment,t),G(f.$$.fragment,t),j=!0)},o(t){z(s.$$.fragment,t),z(f.$$.fragment,t),j=!1},d(t){t&&p(n),W(s),t&&p(c),t&&p(l),W(f),t&&p(b),t&&p(x)}}}return new class extends K{constructor(t){super(),J(this,t,null,Rt,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
