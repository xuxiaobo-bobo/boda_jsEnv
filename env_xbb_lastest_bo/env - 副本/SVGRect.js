// SVGRect对象
SVGRect = function SVGRect(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGRect) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGRect 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGRect, "SVGRect");
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGRect.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRect.prototype, "SVGRect", "bodefault_set", arguments)}},);
