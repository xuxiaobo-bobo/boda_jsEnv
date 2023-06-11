// BiquadFilterNode对象
BiquadFilterNode = function BiquadFilterNode(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof BiquadFilterNode) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BiquadFilterNode': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('BiquadFilterNode 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(BiquadFilterNode, "BiquadFilterNode");
BiquadFilterNode.prototype.__proto__=AudioNode.prototype;
BiquadFilterNode.__proto__=AudioNode;
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "type", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "frequency", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "detune", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "Q", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "gain", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(BiquadFilterNode.prototype, "getFrequencyResponse", {configurable:true, enumerable:true, writable:true, value:function getFrequencyResponse (){return bodavm.toolsFunc.dispatch(this, BiquadFilterNode.prototype, "BiquadFilterNode", "getFrequencyResponse", arguments)}},);
