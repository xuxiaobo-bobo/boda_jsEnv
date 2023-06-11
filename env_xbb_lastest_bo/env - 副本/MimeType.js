// MimeType对象
MimeType = function MimeType(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MimeType) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MimeType 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MimeType, "MimeType");
bodavm.toolsFunc.defineProperty(MimeType.prototype, "type", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MimeType.prototype, "suffixes", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MimeType.prototype, "description", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MimeType.prototype, "enabledPlugin", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MimeType.prototype, "MimeType", "bodefault_get", arguments)}, set:undefined},);
