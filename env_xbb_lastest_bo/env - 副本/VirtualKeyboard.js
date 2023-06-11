// VirtualKeyboard对象
VirtualKeyboard = function VirtualKeyboard(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof VirtualKeyboard) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('VirtualKeyboard 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(VirtualKeyboard, "VirtualKeyboard");
VirtualKeyboard.prototype.__proto__=EventTarget.prototype;
VirtualKeyboard.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(VirtualKeyboard.prototype, "boundingRect", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VirtualKeyboard.prototype, "overlaysContent", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(VirtualKeyboard.prototype, "ongeometrychange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(VirtualKeyboard.prototype, "hide", {configurable:true, enumerable:true, writable:true, value:function hide (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "hide", arguments)}},);
bodavm.toolsFunc.defineProperty(VirtualKeyboard.prototype, "show", {configurable:true, enumerable:true, writable:true, value:function show (){return bodavm.toolsFunc.dispatch(this, VirtualKeyboard.prototype, "VirtualKeyboard", "show", arguments)}},);
