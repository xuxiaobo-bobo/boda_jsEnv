// PushSubscriptionOptions对象
PushSubscriptionOptions = function PushSubscriptionOptions(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PushSubscriptionOptions) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PushSubscriptionOptions 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PushSubscriptionOptions, "PushSubscriptionOptions");
bodavm.toolsFunc.defineProperty(PushSubscriptionOptions.prototype, "userVisibleOnly", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PushSubscriptionOptions.prototype, "PushSubscriptionOptions", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PushSubscriptionOptions.prototype, "applicationServerKey", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PushSubscriptionOptions.prototype, "PushSubscriptionOptions", "bodefault_get", arguments)}, set:undefined},);
