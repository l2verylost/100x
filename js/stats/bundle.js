!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=1)}([function(t,e,n){"use strict";function r(){}function o(t,e){var n,o,i,a,s=O;for(a=arguments.length;a-- >2;)S.push(arguments[a]);for(e&&null!=e.children&&(S.length||S.push(e.children),delete e.children);S.length;)if((o=S.pop())&&void 0!==o.pop)for(a=o.length;a--;)S.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof t)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&n?s[s.length-1]+=o:s===O?s=[o]:s.push(o),n=i;var u=new r;return u.nodeName=t,u.children=s,u.attributes=null==e?void 0:e,u.key=null==e?void 0:e.key,void 0!==R.vnode&&R.vnode(u),u}function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){return o(t.nodeName,i(i({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function s(t){!t._dirty&&(t._dirty=!0)&&1==D.push(t)&&(R.debounceRendering||F)(u)}function u(){var t,e=D;for(D=[];t=e.pop();)t._dirty&&B(t)}function l(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&c(t,e.nodeName):n||t._componentConstructor===e.nodeName}function c(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function f(t){var e=i({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function d(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.normalizedNodeName=t,n}function p(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),r&&r(t);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof n||(t.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(t.style[i]="");for(var i in r)t.style[i]="number"==typeof r[i]&&!1===I.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(t.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?n||t.addEventListener(e,v,a):t.removeEventListener(e,v,a),(t._listeners||(t._listeners={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in t)y(t,e,null==r?"":r),null!=r&&!1!==r||t.removeAttribute(e);else{var s=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof r&&(s?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):t.setAttribute(e,r))}else t.className=r||""}function y(t,e,n){try{t[e]=n}catch(t){}}function v(t){return this._listeners[t.type](R.event&&R.event(t)||t)}function m(){for(var t;t=L.pop();)R.afterMount&&R.afterMount(t),t.componentDidMount&&t.componentDidMount()}function _(t,e,n,r,o,i){M++||(W=null!=o&&void 0!==o.ownerSVGElement,H=null!=t&&!("__preactattr_"in t));var a=b(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--M||(H=!1,i||m()),a}function b(t,e,n,r,o){var i=t,a=W;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0))),i.__preactattr_=!0,i;var s=e.nodeName;if("function"==typeof s)return N(t,e,n,r);if(W="svg"===s||"foreignObject"!==s&&W,s+="",(!t||!c(t,s))&&(i=d(s,W),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),g(t,!0)}var u=i.firstChild,l=i.__preactattr_,f=e.children;if(null==l){l=i.__preactattr_={};for(var p=i.attributes,h=p.length;h--;)l[p[h].name]=p[h].value}return!H&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&w(i,f,n,r,H||null!=l.dangerouslySetInnerHTML),C(i,e.attributes,l),W=a,i}function w(t,e,n,r,o){var i,a,s,u,c,f=t.childNodes,d=[],h={},y=0,v=0,m=f.length,_=0,w=e?e.length:0;if(0!==m)for(var x=0;m>x;x++){var C=f[x],T=C.__preactattr_,k=w&&T?C._component?C._component.__key:T.key:null;null!=k?(y++,h[k]=C):(T||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(d[_++]=C)}if(0!==w)for(var x=0;w>x;x++){u=e[x],c=null;var k=u.key;if(null!=k)y&&void 0!==h[k]&&(c=h[k],h[k]=void 0,y--);else if(!c&&_>v)for(i=v;_>i;i++)if(void 0!==d[i]&&l(a=d[i],u,o)){c=a,d[i]=void 0,i===_-1&&_--,i===v&&v++;break}c=b(c,u,n,r),s=f[x],c&&c!==t&&c!==s&&(null==s?t.appendChild(c):c===s.nextSibling?p(s):t.insertBefore(c,s))}if(y)for(var x in h)void 0!==h[x]&&g(h[x],!1);for(;_>=v;)void 0!==(c=d[_--])&&g(c,!1)}function g(t,e){var n=t._component;n?U(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||p(t),x(t))}function x(t){for(t=t.lastChild;t;){var e=t.previousSibling;g(t,!0),t=e}}function C(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||h(t,r,n[r],n[r]=void 0,W);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||h(t,r,n[r],n[r]=e[r],W)}function T(t){var e=t.constructor.name;(V[e]||(V[e]=[])).push(t)}function k(t,e,n){var r,o=V[t.name];if(t.prototype&&t.prototype.render?(r=new t(e,n),A.call(r,e,n)):(r=new A(e,n),r.constructor=t,r.render=E),o)for(var i=o.length;i--;)if(o[i].constructor===t){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function E(t,e,n){return this.constructor(t,n)}function P(t,e,n,r,o){t._disable||(t._disable=!0,(t.__ref=e.ref)&&delete e.ref,(t.__key=e.key)&&delete e.key,!t.base||o?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===R.syncComponentUpdates&&t.base?s(t):B(t,1,o)),t.__ref&&t.__ref(t))}function B(t,e,n,r){if(!t._disable){var o,a,s,u=t.props,l=t.state,c=t.context,d=t.prevProps||u,p=t.prevState||l,h=t.prevContext||c,y=t.base,v=t.nextBase,b=y||v,w=t._component,x=!1;if(y&&(t.props=d,t.state=p,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(u,l,c)?x=!0:t.componentWillUpdate&&t.componentWillUpdate(u,l,c),t.props=u,t.state=l,t.context=c),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!x){o=t.render(u,l,c),t.getChildContext&&(c=i(i({},c),t.getChildContext()));var C,T,E=o&&o.nodeName;if("function"==typeof E){var N=f(o);a=w,a&&a.constructor===E&&N.key==a.__key?P(a,N,1,c,!1):(C=a,t._component=a=k(E,N,c),a.nextBase=a.nextBase||v,a._parentComponent=t,P(a,N,0,c,!1),B(a,1,n,!0)),T=a.base}else s=b,C=w,C&&(s=t._component=null),(b||1===e)&&(s&&(s._component=null),T=_(s,o,c,n||!y,b&&b.parentNode,!0));if(b&&T!==b&&a!==w){var A=b.parentNode;A&&T!==A&&(A.replaceChild(T,b),C||(b._component=null,g(b,!1)))}if(C&&U(C),t.base=T,T&&!r){for(var j=t,S=t;S=S._parentComponent;)(j=S).base=T;T._component=j,T._componentConstructor=j.constructor}}if(!y||n?L.unshift(t):x||(t.componentDidUpdate&&t.componentDidUpdate(d,p,h),R.afterUpdate&&R.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);M||r||m()}}function N(t,e,n,r){for(var o=t&&t._component,i=o,a=t,s=o&&t._componentConstructor===e.nodeName,u=s,l=f(e);o&&!u&&(o=o._parentComponent);)u=o.constructor===e.nodeName;return o&&u&&(!r||o._component)?(P(o,l,3,n,r),t=o.base):(i&&!s&&(U(i),t=a=null),o=k(e.nodeName,l,n),t&&!o.nextBase&&(o.nextBase=t,a=null),P(o,l,1,n,r),t=o.base,a&&t!==a&&(a._component=null,g(a,!1))),t}function U(t){R.beforeUnmount&&R.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?U(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.nextBase=e,p(e),T(t),x(e)),t.__ref&&t.__ref(null)}function A(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{}}function j(t,e,n){return _(n,t,{},!1,e,!1)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"h",function(){return o}),n.d(e,"createElement",function(){return o}),n.d(e,"cloneElement",function(){return a}),n.d(e,"Component",function(){return A}),n.d(e,"render",function(){return j}),n.d(e,"rerender",function(){return u}),n.d(e,"options",function(){return R});var R={},S=[],O=[],F="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,I=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,D=[],L=[],M=0,W=!1,H=!1,V={};i(A.prototype,{setState:function(t,e){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof t?t(n,this.props):t),e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),s(this)},forceUpdate:function(t){t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),B(this,2)},render:function(){}}),e.default={h:o,createElement:o,cloneElement:a,Component:A,render:j,rerender:u,options:R}},function(t,e,n){"use strict";function r(){var t=n(5).default;i=(0,o.render)((0,o.h)(t,null),document.getElementById("stats"),i)}n(2),n(3);var o=n(0),i=void 0;n(6),r()},function(t){"use strict";function e(){}function n(t,e){return function(){t.apply(e,arguments)}}function r(t){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function o(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,r._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?i:a)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void a(e.promise,t)}i(e.promise,r)})}function i(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof r)return t._state=3,t._value=e,void s(t);if("function"==typeof o)return void l(n(o,e),t)}t._state=1,t._value=e,s(t)}catch(e){a(t,e)}}function a(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&r._immediateFn(function(){t._handled||r._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,a(e,t))})}catch(t){if(n)return;n=!0,a(e,t)}}var c=setTimeout;r.prototype.catch=function(t){return this.then(null,t)},r.prototype.then=function(t,n){var r=new this.constructor(e);return o(this,new u(t,n,r)),r},r.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){return e.reject(n)})})},r.all=function(t){return new r(function(e,n){function r(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(t,e)},n)}o[t]=a,0==--i&&e(o)}catch(t){n(t)}}if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);for(var i=o.length,a=0;o.length>a;a++)r(a,o[a])})},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r(function(e){e(t)})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(e,n){for(var r=0,o=t.length;o>r;r++)t[r].then(e,n)})},r._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){c(t,0)},r._unhandledRejectionFn=function(){"undefined"!=typeof console&&console},t.exports=r},function(t,e,n){n(4),t.exports=self.fetch.bind(self)},function(){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t+=""),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t+=""),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function s(t){var e=new FileReader,n=a(e);return e.readAsArrayBuffer(t),n}function u(t){var e=new FileReader,n=a(e);return e.readAsText(t),n}function l(t){for(var e=new Uint8Array(t),n=Array(e.length),r=0;e.length>r;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=""+t;else if(m.arrayBuffer&&m.blob&&b(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!w(t))throw Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(h)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var n=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=t+"";if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function h(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&300>this.status,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var _=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(t){return t&&DataView.prototype.isPrototypeOf(t)},w=ArrayBuffer.isView||function(t){return t&&_.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];v.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=p,t.Response=v,t.fetch=function(t,e){return new Promise(function(n,r){var o=new p(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL"),n(new v("response"in i?i.response:i.responseText,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}e.__esModule=!0,e.default=void 0;var s=n(0),u=15;e.default=function(t){function e(n){r(this,e);var i=o(this,t.call(this,n));return i.onClickNext=function(){i.setState({from:i.state.from+u})},i.onClickPrev=function(){i.setState({from:i.state.from-u})},i.state={pvps:null,from:0},i}return i(e,t),e.prototype.componentDidMount=function(){var t=this;fetch("/ftp/pvp.txt").then(function(t){return t.text()}).then(function(e){var n=e.split("\n");n.pop();var r=n.map(function(t){return t.split(", ")}).map(function(t,e){return{nick:t[0],clan:t[1],class:t[2],count:t[3],order:e+1}});t.setState({pvps:r})})},e.prototype.render=function(){var t=this.state.pvps;return(0,s.h)("div",{id:"app"},t?(0,s.h)("div",null,(0,s.h)(l,{pvps:t.slice(this.state.from,this.state.from+u)}),(0,s.h)("div",{className:"arrows"},this.state.from>0&&(0,s.h)("div",{className:"prev",onClick:this.onClickPrev},(0,s.h)("i",{className:"fa fa-arrow-left"})),t.length>u&&t.length>this.state.from+u&&(0,s.h)("div",{className:"next",onClick:this.onClickNext},(0,s.h)("i",{className:"fa fa-arrow-right"})))):(0,s.h)("span",{className:"loading"},"Loading data..."))},e}(s.Component);var l=function(t){return(0,s.h)("table",null,(0,s.h)("thead",null,(0,s.h)("td",null,"Rank"),(0,s.h)("td",null,"Nickname"),(0,s.h)("td",null,"Clan"),(0,s.h)("td",null,"Class"),(0,s.h)("td",null,"PvP count")),t.pvps.map(function(t){return(0,s.h)("tr",null,(0,s.h)("td",null,a(t.order)),(0,s.h)("td",null,t.nick),(0,s.h)("td",{style:"No Clan"===t.clan&&{opacity:.5}},t.clan),(0,s.h)("td",null,t.class),(0,s.h)("td",null,t.count))}))}},function(t,e,n){"use strict";var r=n(7),o=function(t){return t&&t.__esModule?t:{default:t}}(r);o.default.install({onUpdateReady:function(){o.default.applyUpdate()},onUpdated:function(){location.reload()}})},function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function r(t){if(t||(t={}),n()){var e=navigator.serviceWorker.register("/sw.js"),r=function(t){function e(){switch(a.state){case"redundant":o("onUpdateFailed"),a.onstatechange=null;break;case"installing":r||o("onUpdating");break;case"installed":i||o("onUpdateReady");break;case"activated":o("onUpdated"),a.onstatechange=null}}function n(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":case"installed":break;case"activated":o("onInstalled"),a.onstatechange=null}}var r,i,a=t.installing||t.waiting;if(a&&!a.onstatechange){var s;t.active?(e(),s=e):(n(),s=n),r=!0,t.waiting&&(i=!0),a.onstatechange=s}},o=function(e){"function"==typeof t[e]&&t[e]({source:"ServiceWorker"})};return void e.then(function(t){t&&(r(t),t.onupdatefound=function(){r(t)})}).catch(function(t){return o("onError"),Promise.reject(t)})}}function o(t,e){if(n())return void navigator.serviceWorker.getRegistration().then(function(n){if(!n||!n.waiting)return void(e&&e());n.waiting.postMessage({action:"skipWaiting"}),t&&t()})}function i(){n()&&navigator.serviceWorker.getRegistration().then(function(t){if(t)return t.update()})}e.install=r,e.applyUpdate=o,e.update=i}]);