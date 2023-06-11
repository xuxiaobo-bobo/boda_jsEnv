// MIDIAccess对象
MIDIAccess = function MIDIAccess(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MIDIAccess) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MIDIAccess 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MIDIAccess, "MIDIAccess");
MIDIAccess.prototype.__proto__=EventTarget.prototype;
MIDIAccess.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MIDIAccess.prototype, "inputs", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIAccess.prototype, "outputs", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIAccess.prototype, "sysexEnabled", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIAccess.prototype, "onstatechange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIAccess.prototype, "MIDIAccess", "bodefault_set", arguments)}},);
