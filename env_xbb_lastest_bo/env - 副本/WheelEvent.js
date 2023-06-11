// WheelEvent对象

WheelEvent = function WheelEvent(){let arg=arguments[0];

if (arg!='bobo' && !(this instanceof WheelEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WheelEvent': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);

if (arg =='bobo'){console.log_copy('WheelEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}


bodavm.toolsFunc.safeProto(WheelEvent, "WheelEvent");

WheelEvent.prototype.__proto__=MouseEvent.prototype;

WheelEvent.__proto__=MouseEvent;

bodavm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0});

bodavm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1});

bodavm.toolsFunc.defineProperty(WheelEvent, "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2});

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaZ", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "deltaMode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDeltaX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDeltaY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "wheelDelta", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, WheelEvent.prototype, "WheelEvent", "bodefault_get", arguments)}, set:undefined},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_PIXEL", {configurable:false, enumerable:true, writable:false, value:0},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_LINE", {configurable:false, enumerable:true, writable:false, value:1},);

bodavm.toolsFunc.defineProperty(WheelEvent.prototype, "DOM_DELTA_PAGE", {configurable:false, enumerable:true, writable:false, value:2},);

