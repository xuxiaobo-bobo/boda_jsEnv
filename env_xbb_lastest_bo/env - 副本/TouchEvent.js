// TouchEvent对象
TouchEvent = function TouchEvent(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof TouchEvent) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TouchEvent': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('TouchEvent 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(TouchEvent, "TouchEvent");
TouchEvent.prototype.__proto__=UIEvent.prototype;
TouchEvent.__proto__=UIEvent;
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "touches", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "targetTouches", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "changedTouches", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "altKey", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "metaKey", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "ctrlKey", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(TouchEvent.prototype, "shiftKey", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, TouchEvent.prototype, "TouchEvent", "bodefault_get", arguments)}, set:undefined},);
