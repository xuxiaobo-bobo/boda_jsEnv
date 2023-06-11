// RTCError对象
RTCError = function RTCError(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof RTCError) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCError': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('RTCError 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(RTCError, "RTCError");
RTCError.prototype.__proto__=DOMException.prototype;
RTCError.__proto__=DOMException;
bodavm.toolsFunc.defineProperty(RTCError.prototype, "errorDetail", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(RTCError.prototype, "sdpLineNumber", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(RTCError.prototype, "httpRequestStatusCode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(RTCError.prototype, "sctpCauseCode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(RTCError.prototype, "receivedAlert", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(RTCError.prototype, "sentAlert", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, RTCError.prototype, "RTCError", "bodefault_get", arguments)}, set:undefined},);
