// PointerEvent对象
PointerEvent = function PointerEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof PointerEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PointerEvent': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('PointerEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(PointerEvent, "PointerEvent");
PointerEvent.prototype.__proto__=MouseEvent.prototype;
PointerEvent.__proto__=MouseEvent;
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerId", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pressure", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tiltY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "azimuthAngle", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "altitudeAngle", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "tangentialPressure", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "twist", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "pointerType", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "isPrimary", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "getCoalescedEvents", {configurable:true, enumerable:true, writable:true, value:function getCoalescedEvents (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "getCoalescedEvents", arguments)}},);
bodavm.toolsFunc.defineProperty(PointerEvent.prototype, "getPredictedEvents", {configurable:true, enumerable:true, writable:true, value:function getPredictedEvents (){return bodavm.toolsFunc.dispatch(this, PointerEvent.prototype, "PointerEvent", "getPredictedEvents", arguments)}},);
