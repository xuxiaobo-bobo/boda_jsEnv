// XRDepthInformation对象
XRDepthInformation = function XRDepthInformation(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof XRDepthInformation) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('XRDepthInformation 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(XRDepthInformation, "XRDepthInformation");
bodavm.toolsFunc.defineProperty(XRDepthInformation.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRDepthInformation.prototype, "XRDepthInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRDepthInformation.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRDepthInformation.prototype, "XRDepthInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRDepthInformation.prototype, "normDepthBufferFromNormView", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRDepthInformation.prototype, "XRDepthInformation", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(XRDepthInformation.prototype, "rawValueToMeters", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, XRDepthInformation.prototype, "XRDepthInformation", "bodefault_get", arguments)}, set:undefined},);
