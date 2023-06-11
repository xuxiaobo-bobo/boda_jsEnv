// MediaDeviceInfo对象
MediaDeviceInfo = function MediaDeviceInfo(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MediaDeviceInfo) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MediaDeviceInfo 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MediaDeviceInfo, "MediaDeviceInfo");
bodavm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "deviceId", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "kind", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "label", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "groupId", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MediaDeviceInfo.prototype, "toJSON", {configurable:true, enumerable:true, writable:true, value:function toJSON (){return bodavm.toolsFunc.dispatch(this, MediaDeviceInfo.prototype, "MediaDeviceInfo", "toJSON", arguments)}},);
