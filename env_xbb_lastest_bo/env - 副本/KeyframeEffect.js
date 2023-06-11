// KeyframeEffect对象
KeyframeEffect = function KeyframeEffect(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof KeyframeEffect) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyframeEffect': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('KeyframeEffect 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(KeyframeEffect, "KeyframeEffect");
KeyframeEffect.prototype.__proto__=AnimationEffect.prototype;
KeyframeEffect.__proto__=AnimationEffect;
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "target", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "pseudoElement", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "composite", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "getKeyframes", {configurable:true, enumerable:true, writable:true, value:function getKeyframes (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "getKeyframes", arguments)}},);
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "setKeyframes", {configurable:true, enumerable:true, writable:true, value:function setKeyframes (){return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "setKeyframes", arguments)}},);
