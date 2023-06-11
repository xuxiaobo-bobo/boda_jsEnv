// SVGAnimatedNumberList对象
SVGAnimatedNumberList = function SVGAnimatedNumberList(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGAnimatedNumberList) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGAnimatedNumberList 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGAnimatedNumberList, "SVGAnimatedNumberList");
bodavm.toolsFunc.defineProperty(SVGAnimatedNumberList.prototype, "baseVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedNumberList.prototype, "SVGAnimatedNumberList", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGAnimatedNumberList.prototype, "animVal", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGAnimatedNumberList.prototype, "SVGAnimatedNumberList", "bodefault_get", arguments)}, set:undefined},);
