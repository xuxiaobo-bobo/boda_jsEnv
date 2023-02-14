// IDBOpenDBRequest对象
IDBOpenDBRequest = function IDBOpenDBRequest(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(IDBOpenDBRequest, "IDBOpenDBRequest");
IDBOpenDBRequest.prototype.__proto__=IDBRequest.prototype;
IDBOpenDBRequest.__proto__=IDBRequest;
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onblocked", {configurable:true, enumerable:true, get:function onblocked (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_get", arguments)}, set:function onblocked (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onblocked_set", arguments)}});
bodavm.toolsFunc.defineProperty(IDBOpenDBRequest.prototype, "onupgradeneeded", {configurable:true, enumerable:true, get:function onupgradeneeded (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_get", arguments)}, set:function onupgradeneeded (){return bodavm.toolsFunc.dispatch(this, IDBOpenDBRequest.prototype, "IDBOpenDBRequest", "onupgradeneeded_set", arguments)}});
