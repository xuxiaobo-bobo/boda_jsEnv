// CSSSkew对象
CSSSkew = function CSSSkew(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CSSSkew) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSSkew': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CSSSkew 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CSSSkew, "CSSSkew");
CSSSkew.prototype.__proto__=CSSTransformComponent.prototype;
CSSSkew.__proto__=CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSSkew.prototype, "ax", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(CSSSkew.prototype, "ay", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSSkew.prototype, "CSSSkew", "bodefault_set", arguments)}},);
