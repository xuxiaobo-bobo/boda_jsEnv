// CryptoKey对象
CryptoKey = function CryptoKey(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CryptoKey) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CryptoKey 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CryptoKey, "CryptoKey");
bodavm.toolsFunc.defineProperty(CryptoKey.prototype, "type", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(CryptoKey.prototype, "extractable", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(CryptoKey.prototype, "algorithm", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(CryptoKey.prototype, "usages", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CryptoKey.prototype, "CryptoKey", "bodefault_get", arguments)}, set:undefined},);
