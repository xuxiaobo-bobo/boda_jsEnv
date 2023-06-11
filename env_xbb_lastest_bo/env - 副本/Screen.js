// Screen对象
Screen = function Screen(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof Screen) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('Screen 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(Screen, "Screen");
Screen.prototype.__proto__=EventTarget.prototype;
Screen.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(Screen.prototype, "availWidth", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "availHeight", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "colorDepth", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "pixelDepth", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "availLeft", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "availTop", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "orientation", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "onchange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(Screen.prototype, "isExtended", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, Screen.prototype, "Screen", "bodefault_get", arguments)}, set:undefined},);
