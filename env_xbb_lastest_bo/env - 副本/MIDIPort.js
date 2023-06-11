// MIDIPort对象
MIDIPort = function MIDIPort(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MIDIPort) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MIDIPort 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MIDIPort, "MIDIPort");
MIDIPort.prototype.__proto__=EventTarget.prototype;
MIDIPort.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "connection", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "id", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "manufacturer", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "name", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "state", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "type", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "version", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "onstatechange", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "close", arguments)}},);
bodavm.toolsFunc.defineProperty(MIDIPort.prototype, "open", {configurable:true, enumerable:true, writable:true, value:function open (){return bodavm.toolsFunc.dispatch(this, MIDIPort.prototype, "MIDIPort", "open", arguments)}},);
