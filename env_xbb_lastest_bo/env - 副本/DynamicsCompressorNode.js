// DynamicsCompressorNode对象
DynamicsCompressorNode = function DynamicsCompressorNode(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof DynamicsCompressorNode) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'DynamicsCompressorNode': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('DynamicsCompressorNode 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(DynamicsCompressorNode, "DynamicsCompressorNode");
DynamicsCompressorNode.prototype.__proto__=AudioNode.prototype;
DynamicsCompressorNode.__proto__=AudioNode;
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "threshold", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "knee", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "ratio", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "reduction", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "attack", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(DynamicsCompressorNode.prototype, "release", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, DynamicsCompressorNode.prototype, "DynamicsCompressorNode", "bodefault_get", arguments)}, set:undefined},);
