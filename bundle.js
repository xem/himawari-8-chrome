!function(){"use strict";function t(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function e(t){if(!t._start)try{n(t)}catch(e){if(t._tasks[t._ended+t._active-1])o(t,e);else if(!t._data)throw e}}function n(t){for(;t._start=t._waiting&&t._active<t._size;){var e=t._ended+t._active,n=t._tasks[e],o=n.length-1,a=n[o];n[o]=r(t,e),--t._waiting,++t._active,n=a.apply(null,n),t._tasks[e]&&(t._tasks[e]=n||N)}}function r(t,n){return function(r,i){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=r?o(t,r):(t._data[n]=i,t._waiting?e(t):a(t))))}}function o(t,e){var n,r=t._tasks.length;for(t._error=e,t._data=void 0,t._waiting=NaN;--r>=0;)if((n=t._tasks[r])&&(t._tasks[r]=null,n.abort))try{n.abort()}catch(t){}t._active=NaN,a(t)}function a(t){if(!t._active&&t._call){var e=t._data;t._data=void 0,t._call(t._error,e)}}function i(e){return new t(arguments.length?+e:1/0)}function u(){}function c(t,e){var n=new u;if(t instanceof u)t.each(function(t,e){n.set(e,t)});else if(Array.isArray(t)){var r,o=-1,a=t.length;if(null==e)for(;++o<a;)n.set(o,t[o]);else for(;++o<a;)n.set(e(r=t[o],o,t),r)}else if(t)for(var i in t)n.set(i,t[i]);return n}function s(){}function l(t,e){var n=new s;if(t instanceof s)t.each(function(t){n.add(t)});else if(t){var r=-1,o=t.length;if(null==e)for(;++r<o;)n.add(t[r]);else for(;++r<o;)n.add(e(t[r],r,t))}return n}function f(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new h(r)}function h(t){this._=t}function d(t,e){return t.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}})}function p(t,e){for(var n,r=0,o=t.length;r<o;++r)if((n=t[r]).name===e)return n.value}function g(t,e,n){for(var r=0,o=t.length;r<o;++r)if(t[r].name===e){t[r]=H,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}function v(t){return function(e,n){t(null==e?n:null)}}function m(t){var e=t.responseType;return e&&"text"!==e?t.response:t.responseText}function w(t){return new Function("d","return {"+t.map(function(t,e){return JSON.stringify(t)+": d["+e+"]"}).join(",")+"}")}function y(t,e){var n=w(t);return function(r,o){return e(n(r),o,t)}}function _(t){var e=Object.create(null),n=[];return t.forEach(function(t){for(var r in t)r in e||n.push(e[r]=r)}),n}function E(t,e){return function(n){return t(n.responseText,e)}}function I(t){t=t||{};for(var e=Q+(t.type||rt),n=t.date,r=t.blocks||(t.zoom?ut[t.zoom-1]:ut[0]),o=r+"d",a=[n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds()].map(function(t){return k(t,2)}).join(""),i=n.getUTCFullYear(),u=k(n.getUTCMonth()+1,2),c=k(n.getUTCDate(),2),s=[e,o,it,i,u,c,a].join("/"),l=[],f=0;f<r;f++)for(var h=0;h<r;h++){var d=h+"_"+f+".png",p=s+"_"+d;l.push({name:d,url:T(p),x:h,y:f})}return{tiles:l,blocks:r,date:n}}function b(t){if("string"==typeof t){var e=t.match(/(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})Z/);return e[2]-=1,new Date(Date.UTC.apply(this,e.slice(1)))}return t}function T(t){var e=432e3;return"https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url="+t+"&container=focus&refresh="+e}function k(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function C(t,e){X("https://himawari-8.appspot.com/latest"+(t===nt?"?infrared=true":""),function(t,n){if(t)throw t;var r=n.date;e(b(r+"Z"))})}function x(t,e){X("http://epic.gsfc.nasa.gov/api/"+(t===at?"enhanced":"natural"),function(t,n){if(t)throw t;if(0!==n.length){var r=n[n.length-1];r.date=b(r.date+"Z"),e(r)}})}function A(){for(var t=document.getElementById("output").clientHeight*window.devicePixelRatio,e=t/it,n=0;n<ut.length;n++){var r=ut[n];if(r>e)return r}return console.log(t),ut[ut.length-1]}function D(t){var e=Math.floor((new Date-t)/1e3),n=Math.floor(e/31536e3);return n>1?n+" years":(n=Math.floor(e/2592e3),n>1?n+" months":(n=Math.floor(e/86400),n>1?n+" days":(n=Math.floor(e/3600),n>1?n+" hours":(n=Math.floor(e/60),n>1?n+" minutes":Math.floor(e)+" seconds"))))}function L(t){document.getElementById("time").innerHTML='<abbr title="'+t+'">'+D(t)+"</abbr> ago"}function S(t){switch(t){case ot:case at:document.body.classList.add("dscovr"),document.body.classList.remove("himawari");break;default:document.body.classList.remove("dscovr"),document.body.classList.add("himawari")}}function M(t,e){L(t),vt=t,S(e),mt=e}function j(t,e){function n(t,e){var n=new Image;n.setAttribute("crossOrigin","anonymous"),n.onload=function(){c.drawImage(n,t.x*it,t.y*it,it,it),e()},n.src=t.url}if(!vt||t.getTime()!==vt.getTime()||mt!==e){var r=!localStorage.getItem(dt);r&&M(t,e);var o=I({date:t,blocks:A(),type:e}),a=o.blocks*it,u=r?document.getElementById("output"):document.createElement("canvas"),c=u.getContext("2d");c.canvas.width=a,c.canvas.height=a;var s=i();o.tiles.forEach(function(t){s.defer(n,t)}),s.awaitAll(function(n){if(n)throw n;if(!r){var o=document.getElementById("output"),i=o.getContext("2d");i.canvas.width=a,i.canvas.height=a,i.drawImage(u,0,0)}M(t,e);var c=u.toDataURL("image/jpeg",st);localStorage.setItem(ht,c),localStorage.setItem(dt,t),localStorage.setItem(pt,e)})}}function R(t,e){if(!vt||t.date.getTime()!==vt.getTime()||mt!==e){var n=!localStorage.getItem(dt);n&&M(t.date,e);var r=n?document.getElementById("output"):document.createElement("canvas"),o=r.getContext("2d");o.canvas.width=ct,o.canvas.height=ct;var a=new Image;a.setAttribute("crossOrigin","anonymous"),a.onload=function(){if(o.drawImage(a,0,0),!n){var i=document.getElementById("output"),u=i.getContext("2d");u.canvas.width=ct,u.canvas.height=ct,u.drawImage(r,0,0)}M(t.date,e);var c=r.toDataURL("image/jpeg",st);localStorage.setItem(ht,c),localStorage.setItem(dt,t.date),localStorage.setItem(pt,e)};var i=e===at?"enhanced":"natural";a.src=T(""+V+i+"/"+t.date.getFullYear()+"/"+(t.date.getMonth()+1)+"/"+t.date.getDate()+"/png/"+t.image+".png")}}function O(){function t(t){C(t,function(e){j(e,t)})}function e(t){x(t,function(e){R(e,t)})}navigator.onLine&&(gt?chrome.storage.sync.get({imageType:rt},function(n){switch(n.imageType){case ot:case at:e(n.imageType);break;case nt:case rt:default:t(n.imageType)}}):t(rt))}function U(){var t=document.getElementById("output"),e=t.getContext("2d"),n=new Date(localStorage.getItem(dt)),r=new Image;r.onload=function(){e.canvas.width=r.width,e.canvas.height=r.height,e.drawImage(r,0,0),M(n,localStorage.getItem(pt))},r.src=localStorage.getItem(ht)}var B=[].slice,N={};t.prototype=i.prototype={constructor:t,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var n=B.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),e(this),this},abort:function(){return null==this._error&&o(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(e,n){t.apply(null,[e].concat(n))},a(this),this},awaitAll:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=t,a(this),this}};var P="$";u.prototype=c.prototype={constructor:u,has:function(t){return P+t in this},get:function(t){return this[P+t]},set:function(t,e){return this[P+t]=e,this},remove:function(t){var e=P+t;return e in this&&delete this[e]},clear:function(){for(var t in this)t[0]===P&&delete this[t]},keys:function(){var t=[];for(var e in this)e[0]===P&&t.push(e.slice(1));return t},values:function(){var t=[];for(var e in this)e[0]===P&&t.push(this[e]);return t},entries:function(){var t=[];for(var e in this)e[0]===P&&t.push({key:e.slice(1),value:this[e]});return t},size:function(){var t=0;for(var e in this)e[0]===P&&++t;return t},empty:function(){for(var t in this)if(t[0]===P)return!1;return!0},each:function(t){for(var e in this)e[0]===P&&t(this[e],e.slice(1),this)}};var z=c.prototype;s.prototype=l.prototype={constructor:s,has:z.has,add:function(t){return t+="",this[P+t]=t,this},remove:z.remove,clear:z.clear,values:z.keys,size:z.size,empty:z.empty,each:z.each};var H={value:function(){}};h.prototype=f.prototype={constructor:h,on:function(t,e){var n,r=this._,o=d(t+"",r),a=-1,i=o.length;{if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<i;)if(n=(t=o[a]).type)r[n]=g(r[n],t.name,e);else if(null==e)for(n in r)r[n]=g(r[n],t.name,null);return this}for(;++a<i;)if((n=(t=o[a]).type)&&(n=p(r[n],t.name)))return n}},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new h(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,o=new Array(n),a=0;a<n;++a)o[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],a=0,n=r.length;a<n;++a)r[a].value.apply(e,o)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],o=0,a=r.length;o<a;++o)r[o].value.apply(e,n)}};var F=function(t,e){function n(t){var e,n=l.status;if(!n&&m(l)||n>=200&&n<300||304===n){if(a)try{e=a.call(r,l)}catch(t){return void u.call("error",r,t)}else e=l;u.call("load",r,e)}else u.call("error",r,t)}var r,o,a,i,u=f("beforesend","progress","load","error"),s=c(),l=new XMLHttpRequest,h=null,d=null,p=0;if("undefined"==typeof XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(t)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=l.ontimeout=n:l.onreadystatechange=function(t){l.readyState>3&&n(t)},l.onprogress=function(t){u.call("progress",r,t)},r={header:function(t,e){return t=(t+"").toLowerCase(),arguments.length<2?s.get(t):(null==e?s.remove(t):s.set(t,e+""),r)},mimeType:function(t){return arguments.length?(o=null==t?null:t+"",r):o},responseType:function(t){return arguments.length?(i=t,r):i},timeout:function(t){return arguments.length?(p=+t,r):p},user:function(t){return arguments.length<1?h:(h=null==t?null:t+"",r)},password:function(t){return arguments.length<1?d:(d=null==t?null:t+"",r)},response:function(t){return a=t,r},get:function(t,e){return r.send("GET",t,e)},post:function(t,e){return r.send("POST",t,e)},send:function(e,n,a){return l.open(e,t,!0,h,d),null==o||s.has("accept")||s.set("accept",o+",*/*"),l.setRequestHeader&&s.each(function(t,e){l.setRequestHeader(e,t)}),null!=o&&l.overrideMimeType&&l.overrideMimeType(o),null!=i&&(l.responseType=i),p>0&&(l.timeout=p),null==a&&"function"==typeof n&&(a=n,n=null),null!=a&&1===a.length&&(a=v(a)),null!=a&&r.on("error",a).on("load",function(t){a(null,t)}),u.call("beforesend",r,l),l.send(null==n?null:n),r},abort:function(){return l.abort(),r},on:function(){var t=u.on.apply(u,arguments);return t===u?r:t}},null!=e){if("function"!=typeof e)throw new Error("invalid callback: "+e);return r.get(e)}return r},q=function(t,e){return function(n,r){var o=F(n).mimeType(t).response(e);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return o.get(r)}return o}};q("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)});var X=q("application/json",function(t){return JSON.parse(t.responseText)});q("text/plain",function(t){return t.responseText}),q("application/xml",function(t){var e=t.responseXML;if(!e)throw new Error("parse error");return e});var Z=function(t){function e(t,e){var r,o,a=n(t,function(t,n){return r?r(t,n-1):(o=t,void(r=e?y(t,e):w(t)))});return a.columns=o,a}function n(t,e){function n(){if(l>=s)return i;if(o)return o=!1,a;var e,n=l;if(34===t.charCodeAt(n)){for(var r=n;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return l=r+2,e=t.charCodeAt(r+1),13===e?(o=!0,10===t.charCodeAt(r+2)&&++l):10===e&&(o=!0),t.slice(n+1,r).replace(/""/g,'"')}for(;l<s;){var u=1;if(e=t.charCodeAt(l++),10===e)o=!0;else if(13===e)o=!0,10===t.charCodeAt(l)&&(++l,++u);else if(e!==c)continue;return t.slice(n,l-u)}return t.slice(n)}for(var r,o,a={},i={},u=[],s=t.length,l=0,f=0;(r=n())!==i;){for(var h=[];r!==a&&r!==i;)h.push(r),r=n();e&&null==(h=e(h,f++))||u.push(h)}return u}function r(e,n){return null==n&&(n=_(e)),[n.map(i).join(t)].concat(e.map(function(e){return n.map(function(t){return i(e[t])}).join(t)})).join("\n")}function o(t){return t.map(a).join("\n")}function a(e){return e.map(i).join(t)}function i(t){return null==t?"":u.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var u=new RegExp('["'+t+"\n]"),c=t.charCodeAt(0);return{parse:e,parseRows:n,format:r,formatRows:o}},J=Z(","),Y=J.parse,G=Z("\t"),$=G.parse,K=function(t,e){return function(n,r,o){arguments.length<3&&(o=r,r=null);var a=F(n).mimeType(t);return a.row=function(t){return arguments.length?a.response(E(e,r=t)):r},a.row(r),o?a.get(o):a}};K("text/csv",Y),K("text/tab-separated-values",$);var Q="http://himawari8-dl.nict.go.jp/himawari8/img/",V="https://epic.gsfc.nasa.gov/archive/",W="http://himawari8.nict.go.jp/himawari8-image.htm?sI=D531106",tt="https://epic.gsfc.nasa.gov",et=tt+"/enhanced",nt="INFRARED_FULL",rt="D531106",ot="EPIC",at="EPIC_ENHANCED",it=550,ut=[1,4,8,16,20],ct=2048,st=.9,lt=6e4,ft=1e4,ht="imageData",dt="cachedDate",pt="cachedImageType",gt=window.chrome&&chrome.app.getDetails(),vt=null,mt=null;window.setInterval(O,lt),window.addEventListener("online",O),localStorage.getItem(dt)&&U(),O(),window.setInterval(function(){vt&&L(vt)},ft),gt&&(document.body.classList.add("extension"),document.getElementById("go-to-options").addEventListener("click",function(){chrome.runtime.openOptionsPage()})),document.getElementById("explore").addEventListener("click",function(){window.open(mt===ot?tt:mt===at?et:W,"_self")})}();
//# sourceMappingURL=bundle.js.map
