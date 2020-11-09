var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function _(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function s(){return l(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}let p;function w(e){p=e}function h(){if(!p)throw new Error("Function called outside component initialization");return p}const v=[],y=[],m=[],k=[],x=Promise.resolve();let O=!1;function $(e){m.push(e)}let S=!1;const N=new Set;function j(){if(!S){S=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];w(t),A(t.$$)}for(w(null),v.length=0;y.length;)y.pop()();for(let e=0;e<m.length;e+=1){const t=m[e];N.has(t)||(N.add(t),t())}m.length=0}while(v.length);for(;k.length;)k.pop()();O=!1,S=!1,N.clear()}}function A(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}const R=new Set;let C,E;function J(e,t){e&&e.i&&(R.delete(e),e.i(t))}function D(e,t){const n=t.token={};function _(e,_,o,i){if(t.token!==n)return;t.resolved=i;let a=t.ctx;void 0!==o&&(a=a.slice(),a[o]=i);const c=e&&(t.current=e)(a);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==_&&e&&(C={r:0,c:[],p:C},function(e,t,n,r){if(e&&e.o){if(R.has(e))return;R.add(e),C.c.push((()=>{R.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}(e,1,1,(()=>{t.blocks[n]=null})),C.r||r(C.c),C=C.p)})):t.block.d(1),c.c(),J(c,1),c.m(t.mount(),t.anchor),u=!0),t.block=c,t.blocks&&(t.blocks[_]=c),u&&j()}if((o=e)&&"object"==typeof o&&"function"==typeof o.then){const n=h();if(e.then((e=>{w(n),_(t.then,1,t.value,e),w(null)}),(e=>{if(w(n),_(t.catch,2,t.error,e),w(null),!t.hasCatch)throw e})),t.current!==t.pending)return _(t.pending,0),!0}else{if(t.current!==t.then)return _(t.then,1,t.value,e),!0;t.resolved=e}var o}function I(e,t){-1===e.$$.dirty[0]&&(v.push(e),O||(O=!0,x.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(o,i,a,u,l,s,d=[-1]){const f=p;w(o);const b=i.props||{},g=o.$$={fragment:null,ctx:null,props:s,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let h=!1;if(g.ctx=a?a(o,b,((e,t,...n)=>{const r=n.length?n[0]:t;return g.ctx&&l(g.ctx[e],g.ctx[e]=r)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](r),h&&I(o,e)),t})):[],g.update(),h=!0,r(g.before_update),g.fragment=!!u&&u(g.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);g.fragment&&g.fragment.l(e),e.forEach(c)}else g.fragment&&g.fragment.c();i.intro&&J(o.$$.fragment),function(e,n,o){const{fragment:i,on_mount:a,on_destroy:c,after_update:u}=e.$$;i&&i.m(n,o),$((()=>{const n=a.map(t).filter(_);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach($)}(o,i.target,i.anchor),j()}w(f)}let M=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});M.decode();let W=null;function q(){return null!==W&&W.buffer===E.memory.buffer||(W=new Uint8Array(E.memory.buffer)),W}function B(e,t){return M.decode(q().subarray(e,e+t))}const L=new Array(32).fill(void 0);L.push(void 0,null,!0,!1);let T=L.length;function V(e){T===L.length&&L.push(L.length+1);const t=T;return T=L[t],L[t]=e,t}function z(e){return L[e]}let U=0,P=new TextEncoder("utf-8");const H="function"==typeof P.encodeInto?function(e,t){return P.encodeInto(e,t)}:function(e,t){const n=P.encode(e);return t.set(n),{read:e.length,written:n.length}};function K(e,t,n){if(void 0===n){const n=P.encode(e),r=t(n.length);return q().subarray(r,r+n.length).set(n),U=n.length,r}let r=e.length,_=t(r);const o=q();let i=0;for(;i<r;i++){const t=e.charCodeAt(i);if(t>127)break;o[_+i]=t}if(i!==r){0!==i&&(e=e.slice(i)),_=n(_,r,r=i+3*e.length);const t=q().subarray(_+i,_+r);i+=H(e,t).written}return U=i,_}let Q=null;function G(){return null!==Q&&Q.buffer===E.memory.buffer||(Q=new Int32Array(E.memory.buffer)),Q}function X(e){const t=z(e);return function(e){e<36||(L[e]=T,T=e)}(e),t}function Z(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return""+e;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=Z(e[0]));for(let r=1;r<t;r++)n+=", "+Z(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}function Y(e,t,n){E._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1833b78efd13b371(e,t,V(n))}let ee=32;function te(e){if(1==ee)throw new Error("out of js stack");return L[--ee]=e,ee}function ne(e,t){if(!(e instanceof t))throw new Error("expected instance of "+t.name);return e.ptr}function re(){return X(E.initialize())}function _e(e){return function(){try{return e.apply(this,arguments)}catch(e){E.__wbindgen_exn_store(V(e))}}}function oe(e,t){return q().subarray(e/1,e/1+t)}class ie{static __wrap(e){const t=Object.create(ie.prototype);return t.ptr=e,t}toJSON(){return{network:this.network,shard:this.shard,method_id:this.method_id,address:this.address}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_did_free(e)}constructor(e){try{var t=E.did_new(te(e));return ie.__wrap(t)}finally{L[ee++]=void 0}}static parse(e){var t=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),n=U,r=E.did_parse(t,n);return ie.__wrap(r)}get network(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.did_network(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get shard(){return X(E.did_shard(this.ptr))}get method_id(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.did_method_id(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get address(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.did_address(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}toString(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.did_toString(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}}class ae{static __wrap(e){const t=Object.create(ae.prototype);return t.ptr=e,t}toJSON(){return{did:this.did,auth_chain:this.auth_chain,diff_chain:this.diff_chain,authentication_key:this.authentication_key,document:this.document,proof:this.proof}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_doc_free(e)}static fromJSON(e){var t=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),n=U,r=E.doc_fromJSON(t,n);return ae.__wrap(r)}static generate(){var e=E.doc_generate();return ue.__wrap(e)}static generateCom(){var e=E.doc_generateCom();return ue.__wrap(e)}constructor(e){try{var t=E.doc_new(te(e));return ae.__wrap(t)}finally{L[ee++]=void 0}}get did(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.doc_did(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get auth_chain(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.doc_auth_chain(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get diff_chain(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.doc_diff_chain(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get authentication_key(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.doc_authentication_key(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get document(){return X(E.doc_document(this.ptr))}get proof(){return X(E.doc_proof(this.ptr))}sign(e){return ne(e,ce),X(E.doc_sign(this.ptr,e.ptr))}verify(){return 0!==E.doc_verify(this.ptr)}diff(e,t){return ne(e,ae),ne(t,ce),X(E.doc_diff(this.ptr,e.ptr,t.ptr))}verify_diff(e){var t=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),n=U;return 0!==E.doc_verify_diff(this.ptr,t,n)}update_service(e,t,n){ne(e,ie);var r=e.ptr;e.ptr=0;var _=K(t,E.__wbindgen_malloc,E.__wbindgen_realloc),o=U,i=K(n,E.__wbindgen_malloc,E.__wbindgen_realloc),a=U,c=E.doc_update_service(this.ptr,r,_,o,i,a);return ae.__wrap(c)}clear_services(){var e=E.doc_clear_services(this.ptr);return ae.__wrap(e)}update_public_key(e){ne(e,le);var t=E.doc_update_public_key(this.ptr,e.ptr);return ae.__wrap(t)}update_auth(e){ne(e,le);var t=E.doc_update_auth(this.ptr,e.ptr);return ae.__wrap(t)}update_assert(e){ne(e,le);var t=E.doc_update_assert(this.ptr,e.ptr);return ae.__wrap(t)}update_verification(e){ne(e,le);var t=E.doc_update_verification(this.ptr,e.ptr);return ae.__wrap(t)}update_delegation(e){ne(e,le);var t=E.doc_update_delegation(this.ptr,e.ptr);return ae.__wrap(t)}update_invocation(e){ne(e,le);var t=E.doc_update_invocation(this.ptr,e.ptr);return ae.__wrap(t)}update_agreement(e){ne(e,le);var t=E.doc_update_agreement(this.ptr,e.ptr);return ae.__wrap(t)}update_time(){E.doc_update_time(this.ptr)}resolve_key(e){var t=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),n=U,r=E.doc_resolve_key(this.ptr,t,n);return le.__wrap(r)}}class ce{static __wrap(e){const t=Object.create(ce.prototype);return t.ptr=e,t}toJSON(){return{public:this.public,secret:this.secret}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_key_free(e)}constructor(){var e=E.key_new();return ce.__wrap(e)}static from_strings(e,t){var n=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),r=U,_=K(t,E.__wbindgen_malloc,E.__wbindgen_realloc),o=U,i=E.key_from_strings(n,r,_,o);return ce.__wrap(i)}get public(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.key_public(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get secret(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.key_secret(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}}class ue{static __wrap(e){const t=Object.create(ue.prototype);return t.ptr=e,t}toJSON(){return{key:this.key,doc:this.doc}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_newdoc_free(e)}get key(){var e=E.newdoc_key(this.ptr);return ce.__wrap(e)}get doc(){var e=E.newdoc_doc(this.ptr);return ae.__wrap(e)}}class le{static __wrap(e){const t=Object.create(le.prototype);return t.ptr=e,t}toJSON(){return{pubkey:this.pubkey}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_pubkey_free(e)}constructor(e,t,n){ne(e,ie),ne(t,ie);var r=K(n,E.__wbindgen_malloc,E.__wbindgen_realloc),_=U,o=E.pubkey_new(e.ptr,t.ptr,r,_);return le.__wrap(o)}id(){var e=E.pubkey_id(this.ptr);return ie.__wrap(e)}controller(){var e=E.pubkey_controller(this.ptr);return ie.__wrap(e)}get pubkey(){return X(E.pubkey_pubkey(this.ptr))}}class se{static __wrap(e){const t=Object.create(se.prototype);return t.ptr=e,t}toJSON(){return{vc:this.vc}}toString(){return JSON.stringify(this)}free(){const e=this.ptr;this.ptr=0,E.__wbg_verifiablecredential_free(e)}constructor(e,t,n,r,_,o){ne(e,ae),ne(t,ce),ne(n,ae);var i=K(r,E.__wbindgen_malloc,E.__wbindgen_realloc),a=U,c=K(_,E.__wbindgen_malloc,E.__wbindgen_realloc),u=U,l=K(o,E.__wbindgen_malloc,E.__wbindgen_realloc),s=U,d=E.verifiablecredential_new(e.ptr,t.ptr,n.ptr,i,a,c,u,l,s);return se.__wrap(d)}static from_json(e,t,n){ne(e,ae),ne(t,ce);var r=K(n,E.__wbindgen_malloc,E.__wbindgen_realloc),_=U,o=E.verifiablecredential_from_json(e.ptr,t.ptr,r,_);return se.__wrap(o)}to_string(){try{const n=E.__wbindgen_export_4.value-16;E.__wbindgen_export_4.value=n,E.verifiablecredential_to_string(n,this.ptr);var e=G()[n/4+0],t=G()[n/4+1];return B(e,t)}finally{E.__wbindgen_export_4.value+=16,E.__wbindgen_free(e,t)}}get vc(){return X(E.verifiablecredential_vc(this.ptr))}}async function de(e){const t={wbg:{}};t.wbg.__wbindgen_string_new=function(e,t){return V(B(e,t))},t.wbg.__wbindgen_is_object=function(e){const t=z(e);return"object"==typeof t&&null!==t},t.wbg.__wbindgen_json_serialize=function(e,t){const n=z(t);var r=K(JSON.stringify(void 0===n?null:n),E.__wbindgen_malloc,E.__wbindgen_realloc),_=U;G()[e/4+1]=_,G()[e/4+0]=r},t.wbg.__wbindgen_object_drop_ref=function(e){X(e)},t.wbg.__wbindgen_json_parse=function(e,t){return V(JSON.parse(B(e,t)))},t.wbg.__wbindgen_cb_drop=function(e){const t=X(e).original;if(1==t.cnt--)return t.a=0,!0;return!1},t.wbg.__wbg_new_59cb74e423758ede=function(){return V(new Error)},t.wbg.__wbg_stack_558ba5917b466edd=function(e,t){var n=K(z(t).stack,E.__wbindgen_malloc,E.__wbindgen_realloc),r=U;G()[e/4+1]=r,G()[e/4+0]=n},t.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){try{console.error(B(e,t))}finally{E.__wbindgen_free(e,t)}},t.wbg.__wbindgen_object_clone_ref=function(e){return V(z(e))},t.wbg.__wbg_fetch_f5b2195afedb6a6b=function(e){return V(fetch(z(e)))},t.wbg.__wbg_newwithu8arraysequenceandoptions_ae6479c676bebdcf=_e((function(e,t){return V(new Blob(z(e),z(t)))})),t.wbg.__wbg_instanceof_Response_328c03967a8e8902=function(e){return z(e)instanceof Response},t.wbg.__wbg_url_67bbdafba8ff6e85=function(e,t){var n=K(z(t).url,E.__wbindgen_malloc,E.__wbindgen_realloc),r=U;G()[e/4+1]=r,G()[e/4+0]=n},t.wbg.__wbg_status_eb6dbb31556c329f=function(e){return z(e).status},t.wbg.__wbg_headers_c736e1fe38752cff=function(e){return V(z(e).headers)},t.wbg.__wbg_arrayBuffer_dc33ab7b8cdf0d63=_e((function(e){return V(z(e).arrayBuffer())})),t.wbg.__wbg_newwithstrandinit_d1de1bfcd175e38a=_e((function(e,t,n){return V(new Request(B(e,t),z(n)))})),t.wbg.__wbg_new_43d9cb1835f877ad=_e((function(){return V(new FormData)})),t.wbg.__wbg_append_f76809690e4b2f3a=_e((function(e,t,n,r){z(e).append(B(t,n),z(r))})),t.wbg.__wbg_append_eaa42b75460769af=_e((function(e,t,n,r,_,o){z(e).append(B(t,n),z(r),B(_,o))})),t.wbg.__wbg_new_8469604d5504c189=_e((function(){return V(new Headers)})),t.wbg.__wbg_append_cc6fe0273163a31b=_e((function(e,t,n,r,_){z(e).append(B(t,n),B(r,_))})),t.wbg.__wbg_getRandomValues_3ac1b33c90b52596=function(e,t,n){z(e).getRandomValues(oe(t,n))},t.wbg.__wbg_randomFillSync_6f956029658662ec=function(e,t,n){z(e).randomFillSync(oe(t,n))},t.wbg.__wbg_self_1c83eb4471d9eb9b=_e((function(){return V(self.self)})),t.wbg.__wbg_static_accessor_MODULE_abf5ae284bffdf45=function(){return V(r)},t.wbg.__wbg_require_5b2b5b594d809d9f=function(e,t,n){return V(z(e).require(B(t,n)))},t.wbg.__wbg_crypto_c12f14e810edcaa2=function(e){return V(z(e).crypto)},t.wbg.__wbg_msCrypto_679be765111ba775=function(e){return V(z(e).msCrypto)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===z(e)},t.wbg.__wbg_getRandomValues_05a60bf171bfc2be=function(e){return V(z(e).getRandomValues)},t.wbg.__wbindgen_is_function=function(e){return"function"==typeof z(e)},t.wbg.__wbg_next_edda7e0003e5daf9=function(e){return V(z(e).next)},t.wbg.__wbg_next_2966fa909601a075=_e((function(e){return V(z(e).next())})),t.wbg.__wbg_done_037d0a173aef1834=function(e){return z(e).done},t.wbg.__wbg_value_e60bbfb7d52af62f=function(e){return V(z(e).value)},t.wbg.__wbg_iterator_09191f8878ea9877=function(){return V(Symbol.iterator)},t.wbg.__wbg_get_0e3f2950cdf758ae=_e((function(e,t){return V(Reflect.get(z(e),z(t)))})),t.wbg.__wbg_call_8e95613cc6524977=_e((function(e,t){return V(z(e).call(z(t)))})),t.wbg.__wbg_call_d713ea0274dfc6d2=_e((function(e,t,n){return V(z(e).call(z(t),z(n)))})),t.wbg.__wbg_getTime_29addd71c7089c47=function(e){return z(e).getTime()},t.wbg.__wbg_new0_a3af66503e735141=function(){return V(new Date)},t.wbg.__wbg_new_3e06d4f36713e4cb=function(){return V(new Object)},t.wbg.__wbg_new_d0c63652ab4d825c=function(e,t){try{var n={a:e,b:t},r=new Promise(((e,t)=>{const r=n.a;n.a=0;try{return function(e,t,n,r){E.wasm_bindgen__convert__closures__invoke2_mut__h4f2a794b2d8db5d2(e,t,V(n),V(r))}(r,n.b,e,t)}finally{n.a=r}}));return V(r)}finally{n.a=n.b=0}},t.wbg.__wbg_resolve_2529512c3bb73938=function(e){return V(Promise.resolve(z(e)))},t.wbg.__wbg_then_4a7a614abbbe6d81=function(e,t){return V(z(e).then(z(t)))},t.wbg.__wbg_then_3b7ac098cfda2fa5=function(e,t,n){return V(z(e).then(z(t),z(n)))},t.wbg.__wbg_buffer_49131c283a06686f=function(e){return V(z(e).buffer)},t.wbg.__wbg_newwithbyteoffsetandlength_c0f38401daad5a22=function(e,t,n){return V(new Uint8Array(z(e),t>>>0,n>>>0))},t.wbg.__wbg_length_2b13641a9d906653=function(e){return z(e).length},t.wbg.__wbg_new_9b295d24cf1d706f=function(e){return V(new Uint8Array(z(e)))},t.wbg.__wbg_set_3bb960a9975f3cd2=function(e,t,n){z(e).set(z(t),n>>>0)},t.wbg.__wbg_set_304f2ec1a3ab3b79=_e((function(e,t,n){return Reflect.set(z(e),z(t),z(n))})),t.wbg.__wbindgen_string_get=function(e,t){const n=z(t);var r="string"==typeof n?n:void 0,_=null==r?0:K(r,E.__wbindgen_malloc,E.__wbindgen_realloc),o=U;G()[e/4+1]=o,G()[e/4+0]=_},t.wbg.__wbindgen_debug_string=function(e,t){var n=K(Z(z(t)),E.__wbindgen_malloc,E.__wbindgen_realloc),r=U;G()[e/4+1]=r,G()[e/4+0]=n},t.wbg.__wbindgen_throw=function(e,t){throw new Error(B(e,t))},t.wbg.__wbindgen_rethrow=function(e){throw X(e)},t.wbg.__wbindgen_memory=function(){return V(E.memory)},t.wbg.__wbindgen_closure_wrapper2210=function(e,t,n){return V(function(e,t,n,r){const _={a:e,b:t,cnt:1,dtor:n},o=(...e)=>{_.cnt++;const t=_.a;_.a=0;try{return r(t,_.b,...e)}finally{0==--_.cnt?E.__wbindgen_export_2.get(_.dtor)(t,_.b):_.a=t}};return o.original=_,o}(e,t,465,Y))},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return E=n.exports,de.__wbindgen_wasm_module=r,E}var fe=Object.freeze({__proto__:null,initialize:re,publish:function(e,t){return X(E.publish(V(e),V(t)))},resolve:function(e,t){var n=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),r=U;return X(E.resolve(n,r,V(t)))},checkCredential:function(e,t){var n=K(e,E.__wbindgen_malloc,E.__wbindgen_realloc),r=U;return X(E.checkCredential(n,r,V(t)))},DID:ie,Doc:ae,Key:ce,NewDoc:ue,PubKey:le,VerifiableCredential:se,default:de});let be=!1;function ge(t){let n,r,_;return{c(){n=u("button"),n.textContent="Add node"},m(e,o){a(e,n,o),r||(_=d(n,"click",t[7]),r=!0)},p:e,d(e){e&&c(n),r=!1,_()}}}function pe(e){let t,n,_,o,b,p,w,h,v,y,m,k,x,O,$,S,N,j,A,R,C,E;return{c(){t=u("div"),n=u("input"),_=s(),o=u("div"),b=u("label"),p=u("input"),h=l("\r\n          Mainnet"),v=s(),y=u("label"),m=u("input"),x=l("\r\n          Comnet"),O=s(),$=u("label"),S=u("input"),j=l("\r\n          Devnet"),A=s(),R=u("button"),R.textContent="Add node",f(n,"type","text"),f(n,"placeholder","NodeURL"),f(n,"class","svelte-1p9d8dt"),f(p,"type","radio"),p.__value=w="main",p.value=p.__value,e[12][0].push(p),f(m,"type","radio"),m.__value=k="com",m.value=m.__value,e[12][0].push(m),f(S,"type","radio"),S.__value=N="dev",S.value=S.__value,e[12][0].push(S)},m(r,c){a(r,t,c),i(t,n),g(n,e[0]),a(r,_,c),a(r,o,c),i(o,b),i(b,p),p.checked=p.__value===e[3],i(b,h),i(o,v),i(o,y),i(y,m),m.checked=m.__value===e[3],i(y,x),i(o,O),i(o,$),i($,S),S.checked=S.__value===e[3],i($,j),a(r,A,c),a(r,R,c),C||(E=[d(n,"input",e[10]),d(p,"change",e[11]),d(m,"change",e[13]),d(S,"change",e[14]),d(R,"click",e[9])],C=!0)},p(e,t){1&t&&n.value!==e[0]&&g(n,e[0]),8&t&&(p.checked=p.__value===e[3]),8&t&&(m.checked=m.__value===e[3]),8&t&&(S.checked=S.__value===e[3])},d(n){n&&c(t),n&&c(_),n&&c(o),e[12][0].splice(e[12][0].indexOf(p),1),e[12][0].splice(e[12][0].indexOf(m),1),e[12][0].splice(e[12][0].indexOf(S),1),n&&c(A),n&&c(R),C=!1,r(E)}}}function we(e){let t,n,r,_,o=console.log(e[19])+"",d=e[19]+"";return{c(){var e,i,a;t=l(o),n=s(),r=u("p"),_=l(d),e="color",i="red",r.style.setProperty(e,i,a?"important":"")},m(e,o){a(e,t,o),a(e,n,o),a(e,r,o),i(r,_)},p(e,n){16&n&&o!==(o=console.log(e[19])+"")&&b(t,o),16&n&&d!==(d=e[19]+"")&&b(_,d)},d(e){e&&c(t),e&&c(n),e&&c(r)}}}function he(e){let t,n,r,_,o=JSON.stringify(e[18],null,1)+"";return{c(){t=u("p"),t.textContent="Resolved document:",n=s(),r=u("pre"),_=l(o),f(r,"class","svelte-1p9d8dt")},m(e,o){a(e,t,o),a(e,n,o),a(e,r,o),i(r,_)},p(e,t){16&t&&o!==(o=JSON.stringify(e[18],null,1)+"")&&b(_,o)},d(e){e&&c(t),e&&c(n),e&&c(r)}}}function ve(t){let n;return{c(){n=u("p"),n.textContent="Resolving..."},m(e,t){a(e,n,t)},p:e,d(e){e&&c(n)}}}function ye(t){let n,_,o,p,w,h,v,y,m,k,x,O,$,S,N,j,A,R,C,E,J=!t[6]&&ge(t),I=t[6]&&pe(t),F={ctx:t,current:null,token:null,hasCatch:!0,pending:ve,then:he,catch:we,value:18,error:19};return D(R=t[4],F),{c(){n=u("main"),_=u("h1"),_.textContent="IOTA DID RESOLVER",o=s(),p=u("div"),J&&J.c(),w=s(),I&&I.c(),h=s(),v=u("input"),y=s(),m=u("button"),m.textContent="Resolve DID",k=s(),x=u("div"),O=l("Network: "),$=l(t[2]),S=s(),N=u("a"),j=l("Explorerlink"),A=s(),F.block.c(),f(_,"class","svelte-1p9d8dt"),f(v,"type","text"),f(v,"placeholder","Enter a DID"),f(v,"class","svelte-1p9d8dt"),f(N,"href",t[5]),f(N,"target","_blank"),f(n,"class","svelte-1p9d8dt")},m(e,r){a(e,n,r),i(n,_),i(n,o),i(n,p),J&&J.m(p,null),i(p,w),I&&I.m(p,null),i(n,h),i(n,v),g(v,t[1]),i(n,y),i(n,m),i(n,k),i(n,x),i(x,O),i(x,$),i(n,S),i(n,N),i(N,j),i(n,A),F.block.m(n,F.anchor=null),F.mount=()=>n,F.anchor=null,C||(E=[d(v,"input",t[15]),d(m,"click",t[8])],C=!0)},p(e,[n]){if((t=e)[6]?J&&(J.d(1),J=null):J?J.p(t,n):(J=ge(t),J.c(),J.m(p,w)),t[6]?I?I.p(t,n):(I=pe(t),I.c(),I.m(p,null)):I&&(I.d(1),I=null),2&n&&v.value!==t[1]&&g(v,t[1]),4&n&&b($,t[2]),32&n&&f(N,"href",t[5]),F.ctx=t,16&n&&R!==(R=t[4])&&D(R,F));else{const e=t.slice();e[18]=e[19]=F.resolved,F.block.p(e,n)}},i:e,o:e,d(e){e&&c(n),J&&J.d(),I&&I.d(),F.block.d(),F.token=null,F=null,C=!1,r(E)}}}function me(e,t,n){let r,_=[{network:"main",url:"https://nodes.thetangle.org:443"},{network:"main",url:"https://nodes.iota.org:443"},{network:"main",url:"https://iotanode.us:14267"},{network:"main",url:"https://gewirr.com:14267"},{network:"main",url:"https://hornet.beeiota.host:14265"},{network:"com",url:"https://nodes.comnet.thetangle.org:443"},{network:"dev",url:"https://nodes.devnet.iota.org:443"}],o="did:iota:9mmRdfVhsQQdNbMWXVABzHg2nEZgW8FqbovqGzBcFLr4",i="",a="main",c="",u="https://explorer.iota.org/mainnet/",l=!1;function s(){n(6,l=!l)}async function d(){let e=await(be?Promise.resolve(fe):de("iota_identity_wasm_bg.wasm").then((()=>(be=!0,re(),fe)))),t=e.DID.parse(o);switch(console.log(t),t.network){case"main":n(2,i="Mainnet"),n(5,u="https://explorer.iota.org/mainnet/address/"+t.address);break;case"com":n(2,i="Comnet"),n(5,u="https://comnet.thetangle.org/address/"+t.address);break;case"dev":n(5,u="https://explorer.iota.org/devnet/address/"+t.address),n(2,i="Devnet")}let r=_.filter((e=>e.network==t.network)),a="";for(let n=0;n<10;n++){if(""!=a&&void 0!==a)return a;a=await e.resolve(o,{nodes:r.map((e=>e.url)),network:t.network}).catch((e=>console.log(e)))}return"No document found. Maybe the transaction was deleted on this node?"}return[r,o,i,a,c,u,l,s,function(){n(4,c=d())},function(){_.push({network:a,url:r}),s()},function(){r=this.value,n(0,r)},function(){a=this.__value,n(3,a)},[[]],function(){a=this.__value,n(3,a)},function(){a=this.__value,n(3,a)},function(){o=this.value,n(1,o)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),F(this,e,me,ye,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
