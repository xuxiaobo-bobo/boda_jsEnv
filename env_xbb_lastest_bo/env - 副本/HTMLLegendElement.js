// HTMLLegendElement对象
HTMLLegendElement = function HTMLLegendElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof HTMLLegendElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('HTMLLegendElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(HTMLLegendElement, "HTMLLegendElement");
HTMLLegendElement.prototype.__proto__=HTMLElement.prototype;
HTMLLegendElement.__proto__=HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "form", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(HTMLLegendElement.prototype, "align", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, HTMLLegendElement.prototype, "HTMLLegendElement", "bodefault_set", arguments)}},);
