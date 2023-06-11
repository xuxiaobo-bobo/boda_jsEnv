// PermissionStatus对象
PermissionStatus = function PermissionStatus(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PermissionStatus) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PermissionStatus 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PermissionStatus, "PermissionStatus");
PermissionStatus.prototype.__proto__=EventTarget.prototype;
PermissionStatus.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "state", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PermissionStatus.prototype, "onchange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, PermissionStatus.prototype, "PermissionStatus", "bodefault_set", arguments)}},);
