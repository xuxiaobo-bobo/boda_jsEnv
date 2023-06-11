// SourceBuffer对象

SourceBuffer = function SourceBuffer(){let arg=arguments[0];

if (arg!='bobo' && !(this instanceof SourceBuffer) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('SourceBuffer 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(SourceBuffer, "SourceBuffer");

SourceBuffer.prototype.__proto__=EventTarget.prototype;

SourceBuffer.__proto__=EventTarget;

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "mode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "updating", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "buffered", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "timestampOffset", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowStart", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendWindowEnd", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdatestart", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdate", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onupdateend", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onerror", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "onabort", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "bodefault_set", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "abort", {configurable:true, enumerable:true, writable:true, value:function abort (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "abort", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "appendBuffer", {configurable:true, enumerable:true, writable:true, value:function appendBuffer (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "appendBuffer", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "changeType", {configurable:true, enumerable:true, writable:true, value:function changeType (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "changeType", arguments)}},);

bodavm.toolsFunc.defineProperty(SourceBuffer.prototype, "remove", {configurable:true, enumerable:true, writable:true, value:function remove (){return bodavm.toolsFunc.dispatch(this, SourceBuffer.prototype, "SourceBuffer", "remove", arguments)}},);

