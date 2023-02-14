// CacheStorage对象
CacheStorage = function CacheStorage(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CacheStorage, "CacheStorage");
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "delete", {configurable:true, enumerable:true, writable:true, value:function  (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "delete", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "has", {configurable:true, enumerable:true, writable:true, value:function has (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "has", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "keys", {configurable:true, enumerable:true, writable:true, value:function keys (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "keys", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "match", {configurable:true, enumerable:true, writable:true, value:function match (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "match", arguments)}});
bodavm.toolsFunc.defineProperty(CacheStorage.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, CacheStorage.prototype, "CacheStorage", "open", arguments)}});
// caches对象
var caches = {}
caches.__proto__=CacheStorage.prototype;
