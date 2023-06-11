// XMLHttpRequest对象

XMLHttpRequest = function XMLHttpRequest(){bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('XMLHttpRequest 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(XMLHttpRequest, "XMLHttpRequest");

XMLHttpRequest.prototype.__proto__=XMLHttpRequestEventTarget.prototype;

XMLHttpRequest.__proto__=XMLHttpRequestEventTarget;

bodavm.toolsFunc.defineProperty(XMLHttpRequest, "UNSENT", {configurable:false, enumerable:true, writable:false, value:0});

bodavm.toolsFunc.defineProperty(XMLHttpRequest, "OPENED", {configurable:false, enumerable:true, writable:false, value:1});

bodavm.toolsFunc.defineProperty(XMLHttpRequest, "HEADERS_RECEIVED", {configurable:false, enumerable:true, writable:false, value:2});

bodavm.toolsFunc.defineProperty(XMLHttpRequest, "LOADING", {configurable:false, enumerable:true, writable:false, value:3});

bodavm.toolsFunc.defineProperty(XMLHttpRequest, "DONE", {configurable:false, enumerable:true, writable:false, value:4});

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "onreadystatechange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "readyState", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "timeout", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "withCredentials", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "upload", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseURL", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "status", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "statusText", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "response", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseText", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "responseXML", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "UNSENT", {configurable:false, enumerable:true, writable:false, value:0},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "OPENED", {configurable:false, enumerable:true, writable:false, value:1},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "HEADERS_RECEIVED", {configurable:false, enumerable:true, writable:false, value:2},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "LOADING", {configurable:false, enumerable:true, writable:false, value:3},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "DONE", {configurable:false, enumerable:true, writable:false, value:4},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function abort (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "abort", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getAllResponseHeaders", {configurable:true, enumerable:true, writable:true, value:function getAllResponseHeaders (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getAllResponseHeaders", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "getResponseHeader", {configurable:true, enumerable:true, writable:true, value:function getResponseHeader (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "getResponseHeader", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "open", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "overrideMimeType", {configurable:true, enumerable:true, writable:true, value:function overrideMimeType (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "overrideMimeType", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "send", {configurable:true, enumerable:true, writable:true, value:function send (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "send", arguments)}},);

bodavm.toolsFunc.defineProperty(XMLHttpRequest.prototype, "setRequestHeader", {configurable:true, enumerable:true, writable:true, value:function setRequestHeader (){return bodavm.toolsFunc.dispatch(this, XMLHttpRequest.prototype, "XMLHttpRequest", "setRequestHeader", arguments)}},);

