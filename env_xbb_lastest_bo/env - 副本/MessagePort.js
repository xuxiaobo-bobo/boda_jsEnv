// MessagePort对象
MessagePort = function MessagePort(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof MessagePort) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('MessagePort 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(MessagePort, "MessagePort");
MessagePort.prototype.__proto__=EventTarget.prototype;
MessagePort.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(MessagePort.prototype, "onmessage", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(MessagePort.prototype, "onmessageerror", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(MessagePort.prototype, "close", {configurable:true, enumerable:true, writable:true, value:function close (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "close", arguments)}},);
bodavm.toolsFunc.defineProperty(MessagePort.prototype, "postMessage", {configurable:true, enumerable:true, writable:true, value:function postMessage (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "postMessage", arguments)}},);
bodavm.toolsFunc.defineProperty(MessagePort.prototype, "start", {configurable:true, enumerable:true, writable:true, value:function start (){return bodavm.toolsFunc.dispatch(this, MessagePort.prototype, "MessagePort", "start", arguments)}},);
