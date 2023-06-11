// NetworkInformation对象
NetworkInformation = function NetworkInformation(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof NetworkInformation) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('NetworkInformation 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(NetworkInformation, "NetworkInformation");
NetworkInformation.prototype.__proto__=EventTarget.prototype;
NetworkInformation.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "onchange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "effectiveType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "rtt", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "downlink", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(NetworkInformation.prototype, "saveData", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, NetworkInformation.prototype, "NetworkInformation", "bodefault_get", arguments)}, set:undefined},);
