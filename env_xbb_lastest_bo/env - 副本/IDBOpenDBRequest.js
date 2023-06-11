// IDBOpenDBRequest对象
IDBOpenDBRequest = function IDBOpenDBRequest(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof IDBOpenDBRequest) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('IDBOpenDBRequest 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(IDBOpenDBRequest, "IDBOpenDBRequest");
IDBOpenDBRequest.prototype.__proto__=IDBRequest.prototype;
IDBOpenDBRequest.__proto__=IDBRequest;
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "bodefault_set", arguments)}},);
