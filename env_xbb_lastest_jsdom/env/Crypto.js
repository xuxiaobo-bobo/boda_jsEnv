// Crypto对象
Crypto = function Crypto(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(Crypto, "Crypto");
bodavm.toolsFunc.defineProperty(Crypto.prototype, "getRandomValues", {configurable:true, enumerable:true, writable:true, value:function getRandomValues (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "getRandomValues", arguments)}});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "subtle", {configurable:true, enumerable:true, get:function subtle (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "subtle_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(Crypto.prototype, "randomUUID", {configurable:true, enumerable:true, writable:true, value:function randomUUID (){return bodavm.toolsFunc.dispatch(this, Crypto.prototype, "Crypto", "randomUUID", arguments)}});

var crypto={}
crypto.__proto__ = Crypto.prototype