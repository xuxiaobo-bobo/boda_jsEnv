// AudioNode对象
AudioNode = function AudioNode(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof AudioNode) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('AudioNode 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(AudioNode, "AudioNode");
AudioNode.prototype.__proto__=EventTarget.prototype;
AudioNode.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "context", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "numberOfInputs", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "numberOfOutputs", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "channelCount", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "channelCountMode", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "channelInterpretation", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "connect", {configurable:true, enumerable:true, writable:true, value:function connect (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "connect", arguments)}},);
bodavm.toolsFunc.defineProperty(AudioNode.prototype, "disconnect", {configurable:true, enumerable:true, writable:true, value:function disconnect (){return bodavm.toolsFunc.dispatch(this, AudioNode.prototype, "AudioNode", "disconnect", arguments)}},);
