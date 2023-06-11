// ConvolverNode对象
ConvolverNode = function ConvolverNode(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof ConvolverNode) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ConvolverNode': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('ConvolverNode 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(ConvolverNode, "ConvolverNode");
ConvolverNode.prototype.__proto__=AudioNode.prototype;
ConvolverNode.__proto__=AudioNode;
bodavm.toolsFunc.defineProperty(ConvolverNode.prototype, "buffer", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(ConvolverNode.prototype, "normalize", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, ConvolverNode.prototype, "ConvolverNode", "bodefault_set", arguments)}},);
