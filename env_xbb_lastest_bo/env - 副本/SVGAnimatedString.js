// SVGAnimatedString对象
SVGAnimatedString = function SVGAnimatedString(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGAnimatedString) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGAnimatedString 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGAnimatedString, "SVGAnimatedString");
bodavm.toolsFunc.defineProperty(SVGAnimatedString.prototype, "baseVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGAnimatedString.prototype, "animVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedString.prototype, "SVGAnimatedString", "bodefault_get", arguments)}, set:undefined},);
