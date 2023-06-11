// Touch对象
Touch = function Touch(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof Touch) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Touch': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('Touch 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(Touch, "Touch");
bodavm.toolsFunc.defineProperty(Touch.prototype, "identifier", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "target", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "screenX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "screenY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "clientX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "clientY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "pageX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "pageY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "radiusX", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "radiusY", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "rotationAngle", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Touch.prototype, "force", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Touch.prototype, "Touch", "bodefault_get", arguments)}, set:undefined},);
